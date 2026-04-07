export const metadata = {
  title: "Contact Us | The Bake Studio",
  description: "Get in touch with The Bake Studio.",
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-serif">Contact Us</h1>

      <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
        <p>
          We’d love to hear from you. For questions about orders, custom bundles,
          or delivery details, please contact us using the information below.
        </p>

        <div className="space-y-2">
          <p>
            <span className="font-semibold text-black">Email:</span> hello@thebakestudio.com
          </p>
          <p>
            <span className="font-semibold text-black">Phone:</span> +95 9 123 456 789
          </p>
          <p>
            <span className="font-semibold text-black">Address:</span> Yangon, Myanmar
          </p>
        </div>
      </div>
    </main>
  )
}