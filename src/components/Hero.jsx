import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="bg-[#E8EFEA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-[#0E3B2E] tracking-tight"
          >
            Fresh mushrooms, grown right.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-lg text-[#1A1D1A]/80"
          >
            Lion’s Mane and Oyster mushrooms cultivated indoors in Veneto. Fast delivery, consistent quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#order"
              className="rounded-[16px] bg-[#0E3B2E] text-white px-6 py-3 font-semibold shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B6D7B9]"
            >
              Order Now
            </a>
            <a
              href="#grow"
              className="rounded-[16px] bg-white text-[#0E3B2E] px-6 py-3 font-semibold shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B6D7B9]"
            >
              See How We Grow
            </a>
          </motion.div>

          <p className="sr-only" aria-live="polite">Interactive buttons available: Order Now, See How We Grow</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-[16px] bg-[#F8F6F2] shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597762586111-8b1bb0df7524?q=80&w=1600&auto=format&fit=crop"
              alt="Mushroom still-life with soft top-down shadow on light background"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-[16px]" />
        </motion.div>
      </div>
    </section>
  )
}
