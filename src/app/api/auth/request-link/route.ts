import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { generateToken, hashToken } from "@/lib/crypto"

const TOKEN_TTL_MINUTES = 15

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const whatsapp = typeof body?.whatsapp === "string" ? body.whatsapp.trim() : ""

  if (!whatsapp) {
    return NextResponse.json({ error: "Informe um número de WhatsApp." }, { status: 400 })
  }

  const patient = await db.patient.findFirst({ where: { whatsapp } })

  // Resposta genérica para não revelar se o número está cadastrado.
  if (!patient) {
    return NextResponse.json({
      message: "Se este número estiver cadastrado, um link de acesso foi gerado.",
    })
  }

  // Invalida links anteriores ainda não utilizados para evitar acúmulo de tokens válidos.
  await db.loginToken.updateMany({
    where: { patientId: patient.id, usedAt: null },
    data: { usedAt: new Date() },
  })

  const token = generateToken()

  await db.loginToken.create({
    data: {
      tokenHash: hashToken(token),
      patientId: patient.id,
      expiresAt: new Date(Date.now() + TOKEN_TTL_MINUTES * 60 * 1000),
    },
  })

  const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL}/login?token=${token}&phone=${encodeURIComponent(whatsapp)}`
  const message = `Para acessar seu portal na Clínica Luh Moura, clique aqui: ${loginUrl}`
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`

  return NextResponse.json({
    message: "Link de acesso gerado com sucesso.",
    whatsappLink,
    expiresInMinutes: TOKEN_TTL_MINUTES,
  })
}
