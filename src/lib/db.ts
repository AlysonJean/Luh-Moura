import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

// Best Practice 2026: Singleton PrismaClient with Driver Adapter
// Ensures Edge compatibility and connection pooling optimization

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaNeon({ connectionString })

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

export const db = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
