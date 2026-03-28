import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2">Welcome, {session.email}</p>
    </main>
  )
}