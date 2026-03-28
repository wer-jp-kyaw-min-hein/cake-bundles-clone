import { NextResponse } from "next/server"
import { createSession } from "@/lib/session"

export async function POST(req: Request) {
  const body = await req.json()
  const email = String(body.email ?? "").trim()
  const password = String(body.password ?? "")

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    )
  }

  // Replace this with your real DB lookup
  const isValidUser =
    email === "demo@example.com" && password === "password123"

  if (!isValidUser) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    )
  }

  await createSession({
    userId: "user_123",
    email,
  })

  return NextResponse.json({ message: "Login successful." })
}