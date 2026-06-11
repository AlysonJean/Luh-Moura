import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const role = auth?.user?.role
      const isOnAdmin = nextUrl.pathname.startsWith("/admin")
      const isOnPortal = nextUrl.pathname.startsWith("/portal")

      // Área administrativa: somente equipe (ADMIN/ASSISTANT)
      if (isOnAdmin) {
        return role === "ADMIN" || role === "ASSISTANT"
      }

      // Portal da paciente: pacientes autenticadas ou equipe (suporte)
      if (isOnPortal) {
        return role === "PATIENT" || role === "ADMIN" || role === "ASSISTANT"
      }

      return true
    },
  },
  providers: [], // Providers são adicionados em auth.ts
} satisfies NextAuthConfig
