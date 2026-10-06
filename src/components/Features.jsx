import { useState, useRef, useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, labelReveal, copyReveal, WipeTitle, ArrowRight, ArrowUpRight } from './anim'
import './Features.css'

const features = [
  { id: '01', title: 'Secure and Easy Transactions' },
  { id: '02', title: 'Real-Time Financial Monitoring' },
  { id: '03', title: 'Fast & Easy Transactions' },
  { id: '04', title: 'Comprehensive Financial Planning' },
]

const invoices = [
  {
    name: 'Kelly Williams',
    date: '4 July 2024',
    status: 'SUCCESS',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kelly&backgroundColor=ffd5dc',
  },
  {
    name: 'John Terry',
    date: '3 July 2024',
    status: 'SUCCESS',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=John&backgroundColor=b6e3f4',
  },
  {
    name: 'Caitlin Clark',
    date: '2 July 2024',
    status: 'PENDING',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Caitlin&backgroundColor=c0aede',
  },
]

export default function Features() {
  const [active, setActive] = useState(null)
  const [cardTop, setCardTop] = useState(0)
  const listRef = useRef(null)
  const rowRefs = useRef({})

  useLayoutEffect(() => {
    if (!active) return
    const list = listRef.current
    const row = rowRefs.current[active]
    if (!list || !row) return

    const listRect = list.getBoundingClientRect()
    const rowRect = row.getBoundingClientRect()
    setCardTop(rowRect.top - listRect.top + rowRect.height / 2)
  }, [active])

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-head">
          <div>
            <Reveal variants={labelReveal}>
              <p className="section-label">Features</p>
            </Reveal>
            <WipeTitle lines={['All-In-One Platform', 'For Savings']} />
          </div>
          <Reveal variants={copyReveal} className="features-desc">
            <p>
              Simplify your financial life by securely connecting your accounts and automatically
              categorizing transactions.
            </p>
          </Reveal>
        </div>

        <div className="features-list" ref={listRef}>
          {features.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                type="button"
                ref={(el) => {
                  rowRefs.current[item.id] = el
                }}
                className={`feature-row ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActive((prev) => (prev === item.id ? null : item.id))}
              >
                <span className="feature-num">{item.id}</span>
                <span className="feature-title">{item.title}</span>
                <span className="feature-btn">
                  {isActive ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}
                </span>
              </button>
            )
          })}

          <AnimatePresence>
            {active && (
              <motion.div
                key={active}
                className="invoice-card"
                initial={{ opacity: 0, scale: 0.92, x: '-50%', y: '-50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  top: cardTop,
                  x: '-50%',
                  y: '-50%',
                }}
                exit={{ opacity: 0, scale: 0.94, x: '-50%', y: '-50%' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: '50%' }}
              >
                <div className="invoice-top">
                  <div className="win-dots">
                    <span /><span /><span />
                  </div>
                  <h3>Latest Invoice</h3>
                </div>
                <div className="progress-bar">
                  <span className="seg orange" style={{ flex: 67 }} />
                  <span className="seg black" style={{ flex: 14 }} />
                  <span className="seg gray" style={{ flex: 19 }} />
                </div>
                <div className="progress-legend">
                  <span><i className="lg orange" />67% Success</span>
                  <span><i className="lg black" />14% Pending</span>
                  <span><i className="lg gray" />19% Cancel</span>
                </div>
                <ul className="invoice-list">
                  {invoices.map((row) => (
                    <li key={row.name}>
                      <img src={row.avatar} alt="" />
                      <div>
                        <strong>{row.name}</strong>
                        <small>{row.date}</small>
                      </div>
                      <span className={`badge ${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
