import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0E3B2E] text-[#F8F6F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-xl font-serif font-bold">Sporadici</h4>
          <p className="mt-3 text-sm text-[#F8F6F2]/80">
            Italy 24–48 h. Refrigerated packaging when needed. Free shipping from €59.
          </p>
          <p className="mt-3 text-sm text-[#F8F6F2]/80">
            Nutritional and usage information is for informational purposes only and not medical advice.
          </p>
        </div>
        <div className="text-sm">
          <h5 className="font-semibold">Contact</h5>
          <ul className="mt-3 space-y-1 text-[#F8F6F2]/90">
            <li>WhatsApp: +39 000 000 000</li>
            <li>Email: hello@sporadici.it</li>
            <li>Pickup hours: Mon–Fri 16:00–19:00</li>
            <li>Map: Via Esempio 1, Veneto</li>
          </ul>
        </div>
        <div className="text-sm">
          <h5 className="font-semibold">Links</h5>
          <ul className="mt-3 space-y-1 text-[#F8F6F2]/90">
            <li><a className="hover:underline" href="#">Privacy</a></li>
            <li><a className="hover:underline" href="#">Cookie</a></li>
            <li><a className="hover:underline" href="#">Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-[#F8F6F2]/60">
          © {new Date().getFullYear()} Sporadici. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
