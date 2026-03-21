"use client";

export default function Footer() {
  return (
    <footer className="mt-20 bg-rose-300 text-black/70">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/70">
            Newsletter
            </h3>

            <p className="mt-4 text-sm text-black/70 max-w-md">
              Subscribe to receive updates on new cake bundles, seasonal launches, and speical promotions.</p>

              <form
    className="mt-6 flex items-center border border-black/10 rounded-md overflow-hidden max-w-md"
    onSubmit={(e) => e.preventDefault()}
  >

  <input
    type="email"
    name="email"
    required
    placeholder="Your email"
    className="w-full bg-transparent px-4 py-3 text-sm text-black placeholder:text-black/50 outline-none"
  />
  <button type="submit" className="px-4 py-3 text-sm text-black/80 transition hover:text-black">
    Subscribe
  </button>
</form>
</div>

          {/* About */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/70">
              About Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="hover:text-black" href="/delivery">
                  Delivery &amp; Store Pickup
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="/store-locator">
                  Store Locator
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="/promotions">
                  Promotions
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="/careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="/terms">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Locate */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/70">
              Locate Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-black/70">
              <li>
                <a
                  className="hover:text-black"
                  href="https://share.google/GQnzxa8pNSmtdUQrz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shwegondaing Rd, Yangon, Myanmar (Burma)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/70">
              Contact Us
            </h3>
            <div className="mt-5 space-y-3 text-sm text-black/70">
              <p>
                <a className="hover:text-black" href="tel:+959752914328">
                  Call: 09752914328
                </a>
              </p>
              <p>
                <a
                  className="hover:text-black"
                  href="https://wa.me/6598588204"
                  target="_blank"
                  rel="noreferrer"
                >
                  Viber: 09772898406
                </a>
              </p>
            </div>

            <h3 className="mt-10 text-xs uppercase tracking-[0.2em] text-black/70">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                className="grid h-9 w-9 place-items-center rounded-md border border-black/20 hover:border-black/40"
                href="https://www.facebook.com/105997538462740/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                fb
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-md border border-black/20 hover:border-black/40"
                href="https://www.instagram.com/thebakestudio2020?igsh=eWI0cXhoYjRpYnF3"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-md border border-black/20 hover:border-black/40"
                href="https://www.tiktok.com/@the.bake.studio"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                tiktok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-black/15 pt-8 md:flex-row md:items-center">
          <div className="text-xs text-black/60">
            © {new Date().getFullYear()} fieldnotes • nature-inspired cakes
          </div>

          <div className="flex items-center gap-2 text-xs text-black/60">
            <span className="rounded border border-black/20 px-2 py-1">K-pay</span>
            <span className="rounded border border-black/20 px-2 py-1">AYA-pay</span>
            <span className="rounded border border-black/20 px-2 py-1">CB-pay</span>
            <span className="rounded border border-black/20 px-2 py-1">MTB-pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
