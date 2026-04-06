import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-serif">My Account</h1>
      <p className="mt-2 text-gray-600">
        Welcome back, {session.email}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Email:</span> {session.email}</p>
            <p><span className="font-medium">Name:</span> Add profile name later</p>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>Password change coming soon</p>
            <p>Saved addresses coming soon</p>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="mt-4 text-sm text-gray-700">
            You have no orders yet.
          </p>
        </section>
      </div>
    </main>
  )
}