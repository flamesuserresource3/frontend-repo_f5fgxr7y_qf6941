import React from 'react'

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Cultivation', href: '#grow' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'For Restaurants', href: '#channels' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="w-full bg-[#0E3B2E] text-[#F8F6F2] text-sm text-center py-1">
        Harvested and delivered within 24 hours.
      </div>
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#5A7F65] shadow" aria-hidden="true" />
            <span className="text-xl font-serif font-bold tracking-tight text-[#0E3B2E]">Sporadici</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1A1D1A]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#0E3B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D7B9] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-[16px] px-4 py-2 text-sm font-semibold text-white bg-[#0E3B2E] hover:bg-[#0c3327] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B6D7B9]"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
