export const metadata = {
  title: "Privacy Policy | The Bake Studio",
  description: "Read the privacy policy for The Bake Studio.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-serif">Privacy Policy</h1>

      <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black">Information We Collect</h2>
          <p className="mt-2">
            We may collect your name, email address, phone number, delivery details,
            and order information when you use our website or place an order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">How We Use Your Information</h2>
          <p className="mt-2">
            We use your information to process orders, respond to inquiries, improve
            our services, and provide updates related to your purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">Data Protection</h2>
          <p className="mt-2">
            We take reasonable steps to protect your personal information and prevent
            unauthorized access, misuse, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">Contact</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact us
            through our Contact page.
          </p>
        </section>
      </div>
    </main>
  )
}