{/* <details>
  <summary>Question</summary>
  Answer
</details> */}

export default function FAQ() {
    const faqs = [
        {
            q: "How long does delivery take?",
            a: "Orders placed before 4 PM can be delivered the next day, subject to availability.",
        },
        {
            q: "Can I customize the cake message?",
            a: "Yes! You can add a custom message for the cake during checkout or by contacting us after placing the order.",
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept online card payments, bank transfer, and  selected payment gateways depending on the final setup.",
        },
    ]

    return (
        <section id="faq" className="max-w-6xl mx-auto px-8 py-16">
            <h2 className="text-4xl font-serif text-center mb-10">Frequently Asked Questions</h2>

            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <details 
                        key={index}
                        className="bg-white rounded-xl border border-black/10 p-5 shadow-sm">
                        <summary className="cursor-pointer text-lg font-medium">{item.q}</summary>
                        <p className="mt-3 text-black/70 leading-7">{item.a}</p>
                        </details>
                ))}
            </div>
        </section>
    )
}