import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { hashToken, verifyPassword } from "@/lib/crypto"
import type { AppRole } from "@/lib/auth-roles"

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12 // 12 horas

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: SESSION_MAX_AGE_SECONDS,
  },
  providers: [
    Credentials({
      name: "Acesso",
      credentials: {
        identifier: { label: "WhatsApp ou e-mail", type: "text" },
        token: { label: "Código de acesso", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const identifier = credentials?.identifier as string | undefined
        if (!identifier) return null

        const { db } = await import("@/lib/db")

        // 1. Acesso da paciente via link mágico (token único, com expiração, enviado por WhatsApp)
        if (credentials?.token) {
          const tokenHash = hashToken(credentials.token as string)

          const loginToken = await db.loginToken.findUnique({
            where: { tokenHash },
            include: { patient: true },
          })

          const isValid =
            loginToken &&
            !loginToken.usedAt &&
            loginToken.expiresAt > new Date() &&
            loginToken.patient.whatsapp === identifier

          if (!isValid || !loginToken) return null

          await db.loginToken.update({
            where: { id: loginToken.id },
            data: { usedAt: new Date() },
          })

          return {
            id: loginToken.patient.id,
            name: loginToken.patient.name,
            email: loginToken.patient.email || "",
            role: "PATIENT" satisfies AppRole,
          }
        }

        // 2. Acesso da equipe (ADMIN/ASSISTANT) via e-mail + senha
        if (credentials?.password) {
          const user = await db.user.findUnique({ where: { email: identifier } })

          if (!user?.passwordHash) return null
          if (!verifyPassword(credentials.password as string, user.passwordHash)) return null

          await db.auditLog.create({
            data: { userId: user.id, action: "LOGIN" },
          })

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role as AppRole,
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: AppRole }).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role
      }
      return session
    },
  },
})
