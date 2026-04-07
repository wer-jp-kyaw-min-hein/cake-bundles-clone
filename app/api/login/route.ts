import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }

  await createSession({
    userId: user.id,
    email: user.email,
  });

  return NextResponse.json({
    message: "Login successful.",
  });
}