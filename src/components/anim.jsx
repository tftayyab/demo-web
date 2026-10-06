import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ease = [0.16, 1, 0.3, 1]
const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, delay: i * 0.1, ease },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -48, filter: 'blur(4px)' },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay: i * 0.08, ease },
  }),
}

/** Small caps label — slides up with tracking */
export const labelReveal = {
  hidden: { opacity: 0, y: 14, letterSpacing: '0.28em' },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: '0.12em',
    transition: { duration: 0.7, ease },
  },
}

/** Body copy — soft blur fade */
export const copyReveal = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, delay: 0.15 + i * 0.05, ease },
  }),
}

/** Headings on dark sections — skew snap */
export const skewIn = {
  hidden: { opacity: 0, x: -32, skewX: 6 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.85, delay: i * 0.06, ease },
  }),
}

/** Stagger children in a grid/list */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

export const staggerItemSlide = {
  hidden: { opacity: 0, x: -24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22, delay: i * 0.08 },
  }),
}

export function Reveal({
  children,
  variants = fadeUp,
  custom = 0,
  className = '',
  once = true,
  amount = 0.22,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={custom}
    >
      {children}
    </Comp>
  )
}

export function StaggerReveal({
  children,
  className = '',
  once = true,
  amount = 0.15,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Comp>
  )
}

/** Multi-line display titles with clip-style rise per line */
export function SplitTitle({ lines, className = '', as: Tag = 'h2', playWhen = 'inView' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: playWhen === 'mount' ? 0 : 0.45 })
  const play = playWhen === 'mount' ? true : inView
  const Comp = motion[Tag] || motion.h2

  return (
    <Comp ref={ref} className={`split-title ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className="split-title-line">
          <motion.span
            initial={{ y: '108%', opacity: 0, rotateX: -18 }}
            animate={play ? { y: 0, opacity: 1, rotateX: 0 } : undefined}
            transition={{
              duration: 0.95,
              delay: i * 0.14,
              ease,
            }}
            style={{ display: 'block', transformOrigin: '50% 100%', whiteSpace: 'nowrap' }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  )
}

/** Horizontal wipe — good for light / editorial sections */
export function WipeTitle({ lines, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const Comp = motion[Tag] || motion.h2

  return (
    <Comp ref={ref} className={`split-title wipe-title ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className="split-title-line">
          <motion.span
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.6 }}
            animate={
              inView
                ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 }
                : undefined
            }
            transition={{ duration: 1.05, delay: i * 0.18, ease }}
            style={{ display: 'block', whiteSpace: 'nowrap' }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  )
}

/** Skew snap — strong on dark or contrast blocks */
export function SkewHeadline({ lines, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const Comp = motion[Tag] || motion.h2

  return (
    <Comp ref={ref} className={`split-title skew-headline ${className}`}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="skew-headline-line"
          initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36, skewX: i % 2 === 0 ? 7 : -5 }}
          animate={inView ? { opacity: 1, x: 0, skewX: 0 } : undefined}
          transition={{ duration: 0.88, delay: i * 0.1, ease }}
          style={{ display: 'block', transformOrigin: '0% 50%', whiteSpace: 'nowrap' }}
        >
          {line}
        </motion.span>
      ))}
    </Comp>
  )
}

/** Staggered scale + rise — partners / stats feel */
export function StackTitle({ lines, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.38 })
  const Comp = motion[Tag] || motion.h2

  return (
    <Comp ref={ref} className={`split-title stack-title ${className}`}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="stack-title-line"
          initial={{ opacity: 0, y: 48, scale: 0.92, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : undefined}
          transition={{ duration: 0.9, delay: i * 0.12, ease: easeOut }}
          style={{ display: 'block', whiteSpace: 'nowrap' }}
        >
          {line}
        </motion.span>
      ))}
    </Comp>
  )
}

/** Body copy as staggered lines (not the same blur fade everywhere) */
export function LineStagger({ lines, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const Comp = motion[Tag] || motion.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
      }}
    >
      {lines.map((line) => (
        <motion.p
          key={line}
          variants={{
            hidden: { opacity: 0, y: 22, clipPath: 'inset(100% 0 0 0)' },
            visible: {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0 0 0)',
              transition: { duration: 0.85, ease },
            },
          }}
        >
          {line}
        </motion.p>
      ))}
    </Comp>
  )
}

export function CountUp({ to, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => {
    if (to % 1 !== 0) return v.toFixed(0)
    return Math.round(v)
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, {
      duration,
      ease: easeOut,
    })
    return controls.stop
  }, [inView, to, duration, mv])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function ArrowUpRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowLeft({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M5 12L11 6M5 12L11 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowDownRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7L17 17M17 17V9M17 17H9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
