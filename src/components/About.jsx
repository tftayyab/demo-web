import { Reveal, CountUp, labelReveal, popIn, SplitTitle, copyReveal } from './anim'
import './About.css'

const cards = [
  {
    key: 'users',
    className: 'about-card orange',
    iconBg: '#111',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="#fff" strokeWidth="1.8" />
        <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    value: 500,
    suffix: 'k',
    label: 'users',
    labelStyle: 'inline',
    text: 'finguard rapidly attracting a substantial user base of over 600,000 customer within its first year of operation.',
  },
  {
    key: 'speed',
    className: 'about-card black',
    iconBg: '#ff4500',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" stroke="#fff" strokeWidth="1.6" />
      </svg>
    ),
    value: 98,
    suffix: '%',
    label: '',
    labelStyle: 'super',
    text: 'Users enjoy faster transaction procession time',
  },
  {
    key: 'atm',
    className: 'about-card gray',
    iconBg: '#fff',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="11" rx="2" stroke="#ff4500" strokeWidth="1.8" />
        <path d="M7 14h6" stroke="#ff4500" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    value: 24,
    suffix: 'K',
    label: '',
    labelStyle: 'super',
    text: 'A network of over 200,000 partner ATMs worldwide',
  },
]

export default function About() {
  return (
    <section className="about" id="products">
      <div className="container">
        <div className="about-head">
          <div>
            <Reveal variants={labelReveal}>
              <p className="section-label">About Us</p>
            </Reveal>
            <SplitTitle lines={['Getting to Know', 'Finguard']} />
          </div>
          <Reveal variants={copyReveal} className="about-desc">
            <p>
              We are more than just a financial service provider; we are your trusted partner in
              navigating the complexities of finance.
            </p>
          </Reveal>
        </div>

        <div className="about-grid">
          {cards.map((card, i) => (
            <Reveal key={card.key} variants={popIn} custom={i} className={card.className}>
              <div className="about-icon" style={{ background: card.iconBg }}>
                {card.icon}
              </div>
              <div className={`about-stat style-${card.labelStyle}`}>
                {card.labelStyle === 'super' ? (
                  <>
                    <CountUp to={card.value} />
                    <sup className="stat-super">{card.suffix}</sup>
                  </>
                ) : (
                  <>
                    <CountUp to={card.value} suffix={card.suffix} />
                    {card.label ? <span className="stat-label">{card.label}</span> : null}
                  </>
                )}
              </div>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
