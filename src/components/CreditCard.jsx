import './CreditCard.css'

function Chip() {
  return (
    <span className="cc-chip" aria-hidden>
      <span />
      <span />
      <span />
    </span>
  )
}

function Contactless({ light }) {
  return (
    <svg className={`cc-contactless ${light ? 'light' : ''}`} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path d="M8 8c2.2 2.2 2.2 5.8 0 8M12 5.5c3.6 3.6 3.6 9.4 0 13M16 3c5 5 5 13 0 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function CreditCard({
  theme = 'orange',
  face = 'front',
  holder = 'Ralph Edwards',
  layout = 'landscape',
  className = '',
}) {
  const portrait = layout === 'portrait'
  const isFront = face === 'front'

  return (
    <div
      className={`credit-card theme-${theme} face-${face} layout-${layout} ${className}`}
    >
      <div className="cc-glass" />
      <div className="cc-noise" />

      {isFront && portrait ? (
        <div className="cc-front cc-portrait">
          <span className="cc-brand-vertical">finguard</span>
          <div className="cc-portrait-tools">
            <Chip />
            <Contactless light={theme === 'silver'} />
          </div>
        </div>
      ) : isFront ? (
        <div className="cc-front">
          <div className="cc-top">
            <span className="cc-brand">finguard</span>
            <Contactless light={theme === 'silver'} />
          </div>
          <Chip />
          <div className="cc-bottom">
            <span className="cc-digits">•••• 0986</span>
          </div>
        </div>
      ) : (
        <div className="cc-back">
          <div className="cc-stripe" />
          <div className="cc-back-row">
            <div className="cc-back-left">
              <span className="cc-visa">VISA</span>
              <span className="cc-cvv">CVV {holder === 'Jaylen Brown' ? '135' : '124'}</span>
            </div>
            <div className="cc-boxes">
              <span>0323</span>
              <span>9270</span>
              <span>1002</span>
              <span>0986</span>
            </div>
          </div>
          <div className="cc-meta">
            <strong>{holder}</strong>
            <small>finguard.com</small>
          </div>
        </div>
      )}
    </div>
  )
}
