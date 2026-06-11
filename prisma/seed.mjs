import "dotenv/config";
import { randomBytes, scryptSync } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const SCRYPT_KEY_LENGTH = 64;

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH);
  return `${salt}:${derived.toString("hex")}`;
}

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "Defina ADMIN_EMAIL e ADMIN_PASSWORD no arquivo .env antes de rodar o seed."
    );
  }

  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
  const db = new PrismaClient({ adapter });

  const passwordHash = hashPassword(password);

  const admin = await db.user.upsert({
    where: { email },
    update: { passwordHash, role: "ADMIN" },
    create: { name: "Administrador", email, passwordHash, role: "ADMIN" },
  });

  console.log(`Usuário ADMIN pronto: ${admin.email}`);

  await db.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
