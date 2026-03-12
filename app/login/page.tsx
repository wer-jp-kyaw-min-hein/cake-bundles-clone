import Link from "next/link"

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-md bg-white rounded-2x1 shadow-sm border border-black/10 p-8">
                <h1 className="text-3xl font-serif text-center mb-6">Login</h1>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-2">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black/30" />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black/30" />
                    </div>

                    <button type="submit" className="w-full bg-black text-white rounded-lg py-3 hover:opacity-90 transition">
                        Login
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-black/70">
                    Don&apos;t have an account??{" "}
                    <Link href="/signup" className="underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    )
}