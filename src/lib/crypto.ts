import { randomBytes, scryptSync, timingSafeEqual, createHash } from "crypto";

const SCRYPT_KEY_LENGTH = 64;

/** Gera um token aleatório de uso único (ex: link mágico de WhatsApp). */
export function generateToken(): string {
  return randomBytes(32).toString("hex");
}

/** Hash determinístico (SHA-256) usado para localizar tokens no banco sem guardar o valor em claro. */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/** Gera um hash salgado (scrypt) para senhas de ADMIN/ASSISTANT. */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH);
  return `${salt}:${derived.toString("hex")}`;
}

/** Verifica uma senha em claro contra o hash gerado por hashPassword. */
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, key] = stored.split(":");
  if (!salt || !key) return false;

  const keyBuffer = Buffer.from(key, "hex");
  const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH);

  if (derived.length !== keyBuffer.length) return false;
  return timingSafeEqual(derived, keyBuffer);
}
