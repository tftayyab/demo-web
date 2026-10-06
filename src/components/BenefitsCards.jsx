import { motion } from 'framer-motion'
import CreditCard from './CreditCard'
import './BenefitsCards.css'

const ease = [0.16, 1, 0.3, 1]

/**
 * Final pose matches image 2:
 * portrait orange front upright, landscape orange back tilted behind right.
 */
const pair = [
  {
    id: 'back',
    face: 'back',
    layout: 'landscape',
    className: 'benefits-card-back',
    delay: 0.08,
    from: { opacity: 0, x: 120, y: 90, rotate: 42, scale: 0.72 },
    to: { opacity: 1, x: 70, y: 28, rotate: 18, scale: 1 },
  },
  {
    id: 'front',
    face: 'front',
    layout: 'portrait',
    className: 'benefits-card-front',
    delay: 0.2,
    from: { opacity: 0, x: -90, y: 70, rotate: -18, scale: 0.72 },
    to: { opacity: 1, x: -48, y: -8, rotate: 0, scale: 1 },
  },
]

export default function BenefitsCards() {
  return (
    <div className="benefits-cards-2d">
      {pair.map((card) => (
        <motion.div
          key={card.id}
          className={`benefits-card-item ${card.className}`}
          initial={card.from}
          whileInView={card.to}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, delay: card.delay, ease }}
        >
          <div className="benefits-card-shell">
            <CreditCard
              theme="orange"
              face={card.face}
              layout={card.layout}
              holder="Ralph Edwards"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
