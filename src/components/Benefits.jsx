import { motion } from 'framer-motion'
import {
  Reveal,
  labelReveal,
  fadeLeft,
  SkewHeadline,
  StaggerReveal,
  staggerItemSlide,
  ArrowUpRight,
} from './anim'
import BenefitsCards from './BenefitsCards'
import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v10M9.5 9.5c.7-.9 1.8-1.4 2.5-1.4s1.8.5 2.5 1.4M9.5 14.5c.7.9 1.8 1.4 2.5 1.4s1.8-.5 2.5-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    text: 'Get 2% cashback on all purchases.',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 16l7-5 4 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Access exclusive travel deals and discounts on flights and hotels.',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Includes travel insurance and purchase protection.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-dots" aria-hidden>
        <span className="active" />
        <span />
        <span />
      </div>

      <div className="container benefits-grid">
        <Reveal variants={fadeLeft} className="benefits-visual">
          <BenefitsCards />
        </Reveal>

        <div className="benefits-content">
          <Reveal variants={labelReveal}>
            <p className="section-label">Benefits</p>
          </Reveal>
          <SkewHeadline lines={['Shopping on', 'International']} />

          <StaggerReveal as="ul" className="benefits-list">
            {benefits.map((item) => (
              <motion.li key={item.text} variants={staggerItemSlide}>
                <span className="benefit-icon">{item.icon}</span>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </StaggerReveal>

          <Reveal variants={fadeLeft} className="benefits-cta-wrap">
          <div className="cta-row">
            <a href="#home" className="btn-pill">Learn More</a>
            <a href="#home" className="btn-circle" aria-label="Learn more">
              <ArrowUpRight />
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
