import { Reveal, CountUp, labelReveal, copyReveal, skewIn, popIn, fadeLeft, StackTitle } from './anim'
import './Partners.css'

const logos = [
  {
    key: 'apple',
    label: 'Apple Pay',
    svg: (
      <svg viewBox="0 0 120 40" width="148" height="48" fill="none" aria-hidden>
        <path
          d="M22.5 10.2c1.3-1.7 2.2-4 1.9-6.3-1.9.1-4.2 1.3-5.5 2.9-1.2 1.5-2.3 3.9-2 6.3 2.1.2 4.3-1.1 5.6-2.9zm5.4 1.1c-3.1-.2-5.7 1.8-7.2 1.8-1.5 0-3.7-1.7-6.1-1.6-3.1.1-6 1.8-7.6 4.6-3.3 5.7-.8 14.1 2.3 18.7 1.5 2.3 3.4 4.8 5.8 4.7 2.3-.1 3.2-1.5 6-1.5s3.5 1.5 6 1.4c2.5-.1 4.1-2.3 5.6-4.6 1.7-2.5 2.4-5 2.4-5.1-.1 0-4.6-1.8-4.6-7 0-4.4 3.6-6.5 3.7-6.6-2-3-5.2-3.4-6.3-3.4z"
          fill="white"
        />
        <text x="42" y="27" fill="white" fontSize="17" fontFamily="Satoshi, Inter Tight, sans-serif" fontWeight="600">
          Pay
        </text>
      </svg>
    ),
  },
  {
    key: 'paypal',
    label: 'PayPal',
    svg: (
      <svg viewBox="0 0 48 48" width="72" height="72" aria-hidden>
        <path d="M18 36l1.6-10.2h5.4c4.6 0 7.7-2.2 8.5-6.4.3-1.8.1-3.2-.6-4.3C31.8 13.3 29.6 12 26.4 12H16.2L12 38h6l1.2-7.6H24c.4 0 .7 0 1-.1L23.8 36H18z" fill="white" opacity="0.55" />
        <path d="M34.8 15.8c-.9 5.5-4.7 8.4-10.3 8.4h-3.4L19.5 36H25l1.4-8.6h3.2c6.4 0 10.8-3.5 12.2-10.2.6-3-.1-5.4-2.2-7C37.6 8.4 34.7 7.5 31 7.5H17.8L13 38h6.1l1.7-10.5h4.1c7.4 0 12.6-3.9 14.3-11.7" fill="white" />
      </svg>
    ),
  },
  {
    key: 'wise',
    label: 'Wise',
    svg: (
      <svg viewBox="0 0 64 64" width="76" height="76" aria-hidden>
        <path d="M12 18h28l-18 12 8 16H18l-6-12 14-10H12V18zm20 0h20l-8 8H28l4-8z" fill="white" />
      </svg>
    ),
  },
  {
    key: 'gpay',
    label: 'GPay',
    svg: (
      <svg viewBox="0 0 120 40" width="148" height="48" aria-hidden>
        <text x="8" y="28" fill="white" fontSize="26" fontFamily="Clash Display, Inter Tight, sans-serif" fontWeight="700">
          GPay
        </text>
      </svg>
    ),
  },
]

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners-head">
          <div>
            <Reveal variants={labelReveal}>
              <p className="section-label">Our Trusted Partners</p>
            </Reveal>
            <StackTitle lines={['Real-Time Financial', 'Monitoring']} />
          </div>
          <Reveal variants={copyReveal} className="partners-desc">
            <p>
              Just like us, finguard believes in building long-term relationships with clients.
              Their focus on customer service aligns perfectly with our own values.
            </p>
          </Reveal>
        </div>

        <div className="partners-grid">
          <Reveal variants={fadeLeft} className="partner-stat">
            <div className="partner-stat-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8" r="3" stroke="#fff" strokeWidth="1.6" />
                <circle cx="16" cy="9" r="2.4" stroke="#fff" strokeWidth="1.6" />
                <path d="M3 19c1.2-3 3.4-4.5 6-4.5S13.8 16 15 19" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M14 14.5c1.8 0 3.5.8 5 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="partner-pct">
              <CountUp to={98} />
              <sup>%</sup>
            </div>
            <p>
              Partners are happy with our collaboration, noting increased efficiency and mutual
              growth since joining us.
            </p>
          </Reveal>

          {logos.slice(0, 2).map((logo, i) => (
            <Reveal key={logo.key} variants={popIn} custom={i + 1} className="partner-logo">
              <div className="logo-box" aria-label={logo.label}>
                {logo.svg}
              </div>
            </Reveal>
          ))}

          {logos.slice(2).map((logo, i) => (
            <Reveal key={logo.key} variants={popIn} custom={i + 3} className="partner-logo">
              <div className="logo-box" aria-label={logo.label}>
                {logo.svg}
              </div>
            </Reveal>
          ))}

          <Reveal variants={skewIn} custom={2} className="partner-cta">
            <h3>
              Creating Impactful
              <br />
              Solutions and Lasting
              <br />
              Partnerships
            </h3>
            <a href="#home" className="btn-pill light">
              Lets Work Together
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
