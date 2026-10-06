import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, labelReveal, copyReveal, ArrowLeft, ArrowRight } from './anim'
import './Testimonials.css'

const testimonials = [
  {
    quote:
      'finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.',
    name: 'Kelly Williams',
    title: 'Head of Design, Layers',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=KellyW&backgroundColor=b6e3f4',
  },
  {
    quote:
      'Switching to finguard was the best financial decision I made this year. Seamless transfers and crystal-clear insights every day.',
    name: 'Ralph Edwards',
    title: 'Product Lead, Northstar',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ralph&backgroundColor=c0aede',
  },
  {
    quote:
      'I finally feel in control of my spending. The protection tools and guidance from finguard give me real peace of mind.',
    name: 'Caitlin Clark',
    title: 'Founder, Orbit Labs',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Caitlin2&backgroundColor=ffd5dc',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Reveal variants={labelReveal}>
          <p className="section-label orange testimonials-label">What They Says About Us</p>
        </Reveal>

        <div className="testimonial-quote-wrap">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              className="testimonial-quote"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.028, delayChildren: 0.06 },
                },
                exit: {
                  opacity: 0,
                  y: -14,
                  filter: 'blur(5px)',
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {item.quote.split(' ').map((word, wi) => (
                <motion.span
                  key={`${item.name}-${wi}-${word}`}
                  className="quote-word"
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {wi === 0 ? `“${word}` : word}{' '}
                </motion.span>
              ))}
            </motion.blockquote>
          </AnimatePresence>
          <motion.span
            className="quote-mark"
            aria-hidden
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.2 }}
          >
            ”
          </motion.span>
        </div>

        <Reveal variants={copyReveal} custom={1}>
          <div className="testimonial-divider" />
        </Reveal>

        <Reveal variants={copyReveal} custom={2} className="testimonial-footer">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              className="author"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.avatar} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
