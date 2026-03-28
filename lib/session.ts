import { cookies } from "next/headers"
import { createHmac, timingSafeEqual } from "crypto"

const SESSION_COOKIE = "session"
const SECRET = process.env.SESSION_SECRET || "dev-secret-change-me"

type SessionPayload = {
  userId: string
  email: string
  exp: number
}

function sign(value: string) {
  return createHmac("sha256", SECRET).update(value).digest("hex")
}

function encode(payload: SessionPayload) {
  const json = JSON.stringify(payload)
  const base64 = Buffer.from(json).toString("base64url")
  const signature = sign(base64)
  return `${base64}.${signature}`
}

function decode(token: string): SessionPayload | null {
  const [base64, signature] = token.split(".")
  if (!base64 || !signature) return null

  const expected = sign(base64)
  const valid =
    signature.length === expected.length &&
    timingSafeEqual(Buffer.from(signature), Buffer.from(expected))

  if (!valid) return null

  const payload = JSON.parse(
    Buffer.from(base64, "base64url").toString()
  ) as SessionPayload

  if (payload.exp < Date.now()) return null

  return payload
}

export async function createSession({
  userId,
  email,
}: {
  userId: string
  email: string
}) {
  const expiresInMs = 1000 * 60 * 60 * 24 * 7

  const token = encode({
    userId,
    email,
    exp: Date.now() + expiresInMs,
  })

  const cookieStore = await cookies()

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return null
  return decode(token)
}

export async function clearSession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}