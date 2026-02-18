export default function Footer() {
  return (
    <footer className="mt-20 bg-[color:var(--footer-bg)] text-white/80">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/70">Newsletter</h3>
            <p className="mt-4 text-sm text-white/70 max-w-md">
              Subscribe to our newsletter and receive 5% off your first order.
            </p>

            <div className="mt-6 flex items-center border border-white/20 rounded-md overflow-hidden max-w-md">
              <input
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                placeholder="Your email"
              />
              <button className="px-4 py-3 text-sm text-white/80 hover:text-white transition">
                →
              </button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/70">About Us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a className="hover:text-white" href="#">Delivery &amp; Store Pickup</a></li>
              <li><a className="hover:text-white" href="#">Store Locator</a></li>
              <li><a className="hover:text-white" href="#">Promotions</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Locate */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/70">Locate Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>9 Yl Neeh Road (Dunman to E-log)</li>
              <li>9 Raffles City Singapore, B1-61</li>
              <li>9 The Woodleigh Mall, #B1-K17</li>
              <li>9 Tampines 1, #B1-K10</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/70">Contact Us</h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>hello@fieldnotes.com.sg</p>
              <p>Call: +65 6511 5900</p>
              <p>WhatsApp: +65 9858 8204</p>
            </div>

            <h3 className="mt-10 text-xs tracking-[0.2em] uppercase text-white/70">Follow Us</h3>
            <div className="mt-4 flex items-center gap-3">
              <a className="w-9 h-9 grid place-items-center rounded-md border border-white/20 hover:border-white/40" href="#">f</a>
              <a className="w-9 h-9 grid place-items-center rounded-md border border-white/20 hover:border-white/40" href="#">ig</a>
              <a className="w-9 h-9 grid place-items-center rounded-md border border-white/20 hover:border-white/40" href="#">t</a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} fieldnotes • nature-inspired cakes
          </div>

          {/* Payment icons (simple placeholders) */}
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="px-2 py-1 border border-white/20 rounded">VISA</span>
            <span className="px-2 py-1 border border-white/20 rounded">MC</span>
            <span className="px-2 py-1 border border-white/20 rounded">AMEX</span>
            <span className="px-2 py-1 border border-white/20 rounded">PAYNOW</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
