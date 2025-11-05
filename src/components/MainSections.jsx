import React from 'react'
import { motion } from 'framer-motion'

const values = [
  { title: '48h Freshness', text: 'Harvested on demand and delivered fast.' },
  { title: 'Short Supply Chain', text: 'Locally grown indoors, sustainably.' },
  { title: 'Artisan Quality', text: 'Manually selected for perfect consistency.' },
]

const products = [
  { name: 'Grey Oyster', latin: 'Pleurotus ostreatus', desc: 'Classic, versatile, lightly nutty.', price: 'From €1.50 / 100 g', imgAlt: 'Grey Oyster still-life with soft shadow', img: 'https://images.unsplash.com/photo-1546549039-49a74f4e6b10?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Blue Oyster', latin: 'Pleurotus columbinus', desc: 'Deeper aroma, strong umami.', price: 'From €1.60 / 100 g', imgAlt: 'Blue Oyster still-life with soft shadow', img: 'https://images.unsplash.com/photo-1604335399108-6f35881b5b4e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Pink Oyster', latin: 'Pleurotus djamor', desc: 'Colorful, great crispy texture.', price: 'From €1.80 / 100 g', imgAlt: 'Pink Oyster still-life with soft shadow', img: 'https://images.unsplash.com/photo-1615485737650-779c0d37b6ec?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Golden Oyster', latin: 'Pleurotus citrinopileatus', desc: 'Sweet and honey-like aroma.', price: 'From €1.80 / 100 g', imgAlt: 'Golden Oyster still-life with soft shadow', img: 'https://images.unsplash.com/photo-1646320387831-0b567d2d5c00?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Lion’s Mane', latin: 'Hericium erinaceus', desc: 'Delicate and fibrous, excellent for marinating.', price: 'From €2.60 / 100 g', imgAlt: 'Lion’s Mane still-life top-down light', img: 'https://images.unsplash.com/photo-1599467402590-25b7a6d6b43f?q=80&w=1200&auto=format&fit=crop' },
]

const steps = [
  'Inoculation',
  'Incubation',
  'Fruiting',
  'Harvest & Delivery within 24 h',
]

const recipes = [
  'Crispy Oyster “Bacon”',
  'Blue Oyster Risotto',
  'Lion’s Mane Burger',
]

const faqs = [
  { q: 'Storage', a: 'Keep at 4 °C, 2–12 days depending on species.' },
  { q: 'Shipping', a: 'Local delivery per km; long-range €0.25–0.30/km; refrigerated courier available.' },
  { q: 'Timing', a: 'Harvest on demand, 24–48 h delivery.' },
  { q: 'Subscription', a: '3-month plan discount.' },
]

export default function MainSections() {
  return (
    <main>
      {/* Why Sporadici */}
      <section className="bg-[#F8F6F2]" aria-labelledby="why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="why" className="text-3xl font-serif font-bold text-[#0E3B2E]">Why Sporadici</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[16px] bg-white p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <h3 className="text-lg font-semibold text-[#1A1D1A]">{v.title}</h3>
                <p className="mt-2 text-[#1A1D1A]/80">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-[#E8EFEA]" aria-labelledby="featured">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="featured" className="text-3xl font-serif font-bold text-[#0E3B2E]">Featured Products</h2>
          <p className="mt-2 text-sm text-[#1A1D1A]/70">Prices per kg/100 g as in current catalog.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[16px] bg-white overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <div className="aspect-square bg-[#F8F6F2]">
                  <img src={p.img} alt={p.imgAlt} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#1A1D1A]">{p.name}</h3>
                  <p className="text-xs text-[#1A1D1A]/60 italic">{p.latin}</p>
                  <p className="mt-2 text-sm text-[#1A1D1A]/80">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0E3B2E]">{p.price}</span>
                    <a href="#details" className="text-sm font-semibold text-[#0E3B2E] hover:underline">Details</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Grow */}
      <section id="grow" className="bg-white" aria-labelledby="grow-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="grow-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">How We Grow</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[16px] bg-[#F8F6F2] p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all text-center"
              >
                {/* Icon placeholder as PNG-like tile */}
                <div className="mx-auto h-16 w-16 rounded-[16px] bg-[#E8EFEA] shadow-inner mb-4" aria-hidden="true" />
                <p className="font-medium text-[#1A1D1A]">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional & Functional Benefits */}
      <section id="benefits" className="bg-[#F8F6F2]" aria-labelledby="benefits-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="benefits-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">Nutritional and Functional Benefits</h2>
          <p className="mt-3 text-[#1A1D1A]/80 max-w-3xl">
            Mushrooms are naturally low in calories and contain fiber, minerals, and bioactive compounds. Enjoy them as part of a varied diet. This information is educational and not medical advice.
          </p>
          <div className="mt-6 overflow-hidden rounded-[16px] bg-white shadow-sm">
            <div className="grid grid-cols-3 text-sm font-medium text-[#1A1D1A]">
              <div className="p-3 bg-[#E8EFEA]">Species</div>
              <div className="p-3 bg-[#E8EFEA]">kcal (per 100 g)</div>
              <div className="p-3 bg-[#E8EFEA]">Protein (per 100 g)</div>
            </div>
            <div className="divide-y divide-black/5 text-sm text-[#1A1D1A]/90">
              <div className="grid grid-cols-3">
                <div className="p-3">Oyster</div>
                <div className="p-3">28–35 kcal</div>
                <div className="p-3">2.2–3.5 g</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3">Lion’s Mane</div>
                <div className="p-3">40–45 kcal</div>
                <div className="p-3">3.8–4.3 g</div>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs text-[#1A1D1A]/60">Average internal lab values — indicative only.</p>
        </div>
      </section>

      {/* Sales Channels */}
      <section id="channels" className="bg-white" aria-labelledby="channels-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="channels-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">Sales Channels</h2>
          <p className="mt-1 text-sm text-[#1A1D1A]/70">Delivery by local courier or refrigerated shipping.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              title: 'For Restaurants (Ho.Re.Ca.)',
              text: 'Wholesale prices and recurring orders.',
            }, {
              title: 'For Retailers',
              text: 'Dedicated pricing, fast delivery.',
            }, {
              title: 'For Private Customers',
              text: 'Weekly selection and mix boxes.',
            }].map((c) => (
              <div key={c.title} className="rounded-[16px] bg-[#F8F6F2] p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
                <h3 className="text-lg font-semibold text-[#1A1D1A]">{c.title}</h3>
                <p className="mt-2 text-[#1A1D1A]/80">{c.text}</p>
                <p className="mt-3 text-xs text-[#1A1D1A]/60">Prices per kg/100 g as in current catalog.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Carousel (simple tiles) */}
      <section id="recipes" className="bg-[#E8EFEA]" aria-labelledby="recipes-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="recipes-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">Recipes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {recipes.map((r) => (
              <article key={r} className="rounded-[16px] bg-white p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
                <h3 className="font-semibold text-[#1A1D1A]">{r}</h3>
                <p className="mt-2 text-sm text-[#1A1D1A]/80">Easy, flavorful, and perfect for fresh harvests.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section id="faq" className="bg-white" aria-labelledby="faq-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 id="faq-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">Quick FAQ</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-[16px] bg-[#F8F6F2] p-6 shadow-sm">
                <dt className="font-semibold text-[#1A1D1A]">{f.q}</dt>
                <dd className="mt-2 text-[#1A1D1A]/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-[#F8F6F2]" aria-labelledby="newsletter-title">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 id="newsletter-title" className="text-3xl font-serif font-bold text-[#0E3B2E]">Get weekly availability before everyone else.</h2>
          <form
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
            onSubmit={(e) => {
              e.preventDefault()
              const region = document.getElementById('newsletter-region')
              if (region) region.textContent = 'Thanks! You are subscribed.'
            }}
          >
            <input
              aria-label="Email address"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-80 rounded-[16px] border border-black/10 bg-white px-4 py-3 text-[#1A1D1A] placeholder:text-[#1A1D1A]/40 focus:outline-none focus:ring-2 focus:ring-[#B6D7B9]"
            />
            <label className="inline-flex items-center gap-2 text-left text-sm text-[#1A1D1A]/80">
              <input type="checkbox" required className="h-4 w-4 rounded border-black/20 text-[#0E3B2E] focus:ring-[#0E3B2E]" />
              I agree to receive emails.
            </label>
            <button type="submit" className="rounded-[16px] bg-[#0E3B2E] text-white px-6 py-3 font-semibold shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B6D7B9]">
              Subscribe
            </button>
          </form>
          <p id="newsletter-region" className="sr-only" aria-live="polite"></p>
        </div>
      </section>

      {/* Final Callout */}
      <section id="order" className="bg-[#E8EFEA]" aria-labelledby="final-callout">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 id="final-callout" className="text-2xl md:text-3xl font-serif font-bold text-[#0E3B2E]">Ready to cook better?</h3>
          <a href="#contact" className="mt-6 inline-flex rounded-[16px] bg-[#0E3B2E] text-white px-6 py-3 font-semibold shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B6D7B9]">
            Order Now
          </a>
        </div>
      </section>
    </main>
  )
}
