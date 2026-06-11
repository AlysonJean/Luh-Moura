import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"

const TERM_VERSION = "botox-2026-v1"

export async function POST(request: NextRequest) {
  const session = await auth()

  if (!session?.user || session.user.role !== "PATIENT") {
    return NextResponse.json({ error: "Não autorizado" }, { status: 403 })
  }

  const ipAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  const userAgent = request.headers.get("user-agent") ?? "unknown"

  const consent = await db.consentLog.create({
    data: {
      patientId: session.user.id,
      termVersion: TERM_VERSION,
      ipAddress,
      userAgent,
    },
  })

  return NextResponse.json({ id: consent.id, acceptedAt: consent.acceptedAt })
}
