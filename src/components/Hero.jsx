import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, ArrowDownRight, SplitTitle } from './anim'
import HeroCards from './HeroCards'
import Sparkle from './Sparkle'
import './Hero.css'

const steps = [
  {
    lines: ['Selecting your', 'provider'],
    Icon: ArrowUpRight,
    kink: 'up',
  },
  {
    lines: ['Set Up Your', 'Account'],
    Icon: ArrowRight,
    kink: 'up',
  },
  {
    lines: ['Enjoy Seamless', 'Banking FinGuad'],
    Icon: ArrowDownRight,
    kink: 'down',
  },
]

const avatars = [
  'https://api.dicebear.com/9.x/avataaars/svg?seed=Ava&backgroundColor=b6e3f4',
  'https://api.dicebear.com/9.x/avataaars/svg?seed=Sam&backgroundColor=c0aede',
  'https://api.dicebear.com/9.x/avataaars/svg?seed=Mia&backgroundColor=ffd5dc',
  'https://api.dicebear.com/9.x/avataaars/svg?seed=Leo&backgroundColor=d1f4d1',
]

function StepKink({ direction = 'up' }) {
  const d =
    direction === 'up'
      ? 'M0 30 H58 L88 4 H140'
      : 'M0 4 H58 L88 30 H140'

  return (
    <svg className="step-kink" viewBox="0 0 140 34" preserveAspectRatio="none" aria-hidden>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <nav className="hero-nav container">
        <a href="#home" className="logo">
          <span className="logo-mark" aria-hidden>
            <svg viewBox="0 0 28 28" width="24" height="24">
              <path
                d="M14 2L4 6v8c0 6.2 4.2 11.4 10 12.8C19.8 25.4 24 20.2 24 14V6L14 2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M10 14l2.5 2.5L18 11"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          finguard
        </a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#partners">Partners</a></li>
        </ul>
        <a href="#home" className="nav-signup">
          Sign up <ArrowUpRight size={13} />
        </a>
      </nav>

      <div className="hero-sparkles" aria-hidden>
        <Sparkle className="sparkle-lg" size={42} />
        <Sparkle className="sparkle-sm" size={20} />
      </div>

      <div className="hero-cards" aria-hidden>
        <HeroCards />
      </div>

      <div className="hero-stage container">
        <SplitTitle
          as="h1"
          className="hero-title"
          playWhen="mount"
          lines={['Secure Your', 'Financial Future']}
        />

        <div className="hero-lead">
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.45, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-sub-line">Trusted Protection and Expert Guidance</span>
            <span className="hero-sub-line">for Your Finance</span>
          </motion.p>

          <motion.div
            className="cta-row hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <a href="#home" className="btn-pill">Get Started</a>
            <a href="#home" className="btn-circle" aria-label="Get started">
              <ArrowUpRight />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-users"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <div className="users-label">
            <span className="dot" /> Active Users
          </div>
          <div className="users-row">
            <span className="users-count">95K+</span>
            <div className="avatar-stack">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" style={{ zIndex: 4 - i }} />
              ))}
            </div>
          </div>
        </motion.div>

        <aside className="hero-steps">
          {steps.map(({ lines, Icon, kink }, i) => (
            <motion.div
              key={lines.join(' ')}
              className={`hero-step kink-${kink}`}
              initial={{ opacity: 0, x: 28, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {kink === 'down' ? (
                <>
                  <div className="step-line-row">
                    <StepKink direction="down" />
                    <span className="step-icon">
                      <Icon size={18} />
                    </span>
                  </div>
                  <p>
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                  <div className="step-line-row">
                    <StepKink direction="up" />
                    <span className="step-icon">
                      <Icon size={18} />
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </aside>
      </div>
    </section>
  )
}
