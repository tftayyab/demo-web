import { useId } from 'react'

export default function Sparkle({ className = '', size = 28 }) {
  const uid = useId().replace(/:/g, '')
  const gid = `sg-${uid}`
  const fid = `sf-${uid}`

  return (
    <svg
      className={`sparkle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id={gid} cx="32%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#ff9a62" />
          <stop offset="42%" stopColor="#ff5a1f" />
          <stop offset="100%" stopColor="#e03d00" />
        </radialGradient>
        <filter id={fid} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#ff4500" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        d="M50 2C52.2 30 70 47.8 98 50C70 52.2 52.2 70 50 98C47.8 70 30 52.2 2 50C30 47.8 47.8 30 50 2Z"
        fill={`url(#${gid})`}
        filter={`url(#${fid})`}
      />
      <path
        d="M50 18C51.2 34 66 48.8 82 50C66 51.2 51.2 66 50 82C48.8 66 34 51.2 18 50C34 48.8 48.8 34 50 18Z"
        fill="rgba(255,255,255,0.22)"
      />
    </svg>
  )
}
