import { motion } from 'framer-motion'
import CreditCard from './CreditCard'
import './HeroCards.css'

const ease = [0.16, 1, 0.3, 1]

/**
 * Final pose matches poster fan (image 1):
 * orange front top-right, silver back mid-left, black back bottom.
 */
const cards = [
  {
    id: 'black',
    theme: 'black',
    face: 'back',
    holder: 'Jaylen Brown',
    delay: 0.05,
    z: 1,
    from: { x: 20, y: 180, rotate: 40, scale: 0.7, opacity: 0 },
    to: { x: 10, y: 78, rotate: 8, scale: 0.94, opacity: 1 },
  },
  {
    id: 'silver',
    theme: 'silver',
    face: 'back',
    holder: 'Ralph Edwards',
    delay: 0.18,
    z: 2,
    from: { x: -40, y: 160, rotate: -55, scale: 0.7, opacity: 0 },
    to: { x: -88, y: 18, rotate: -32, scale: 0.96, opacity: 1 },
  },
  {
    id: 'orange',
    theme: 'orange',
    face: 'front',
    holder: 'Ralph Edwards',
    delay: 0.32,
    z: 3,
    from: { x: 60, y: 140, rotate: 48, scale: 0.68, opacity: 0 },
    to: { x: 72, y: -42, rotate: 22, scale: 1.04, opacity: 1 },
  },
]

function StackCard({ theme, face, holder, delay, z, from, to }) {
  return (
    <motion.div
      className="hero-card-item"
      style={{ zIndex: z }}
      initial={from}
      animate={to}
      transition={{ duration: 1.15, delay, ease }}
    >
      <div className="hero-card-shell">
        <CreditCard theme={theme} face={face} holder={holder} />
      </div>
    </motion.div>
  )
}

export default function HeroCards() {
  return (
    <div className="hero-cards-2d">
      <div className="hero-cards-stage">
        {cards.map((card) => (
          <StackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}
