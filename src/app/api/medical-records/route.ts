import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { uploadImage } from "@/lib/cloudinary"

export async function POST(request: NextRequest) {
  const session = await auth()
  const role = session?.user?.role

  if (!session?.user || (role !== "ADMIN" && role !== "ASSISTANT")) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 403 })
  }

  const body = await request.json().catch(() => null)
  const { patientId, procedureName, imageDataUrl, annotations } = body ?? {}

  if (!patientId || !procedureName || !imageDataUrl) {
    return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
  }

  try {
    const photoUrl = await uploadImage(imageDataUrl, "patient_records")

    const record = await db.medicalRecord.create({
      data: {
        patientId,
        procedureName,
        anamneseData: {},
        photoUrl,
        annotations: annotations ?? [],
      },
    })

    await db.auditLog.create({
      data: {
        userId: session.user.id,
        action: "CREATE_MEDICAL_RECORD",
        resourceId: record.id,
      },
    })

    return NextResponse.json({ id: record.id, photoUrl })
  } catch (error) {
    console.error("Failed to create medical record:", error)
    return NextResponse.json({ error: "Não foi possível salvar o registro" }, { status: 500 })
  }
}
