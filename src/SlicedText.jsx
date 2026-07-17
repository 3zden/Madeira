import { useEffect, useRef } from 'react'

// One-time intro: N thin vertical slices fade in sequentially (left→right) via
// opacity only — no scale/rotate, 60fps. When the sweep finishes it hands off to
// a single seamless copy (the sizer) and hides the slices, so the resting text
// has no clip-boundary seams. Respects prefers-reduced-motion.
const SLICES = 36
const DURATION = 1400 // ms — plays once on mount
const FADE = 0.14 // per-slice fade softness (fraction of the sweep)

const clamp01 = x => (x < 0 ? 0 : x > 1 ? 1 : x)
const smooth = x => {
  x = clamp01(x)
  return x * x * (3 - 2 * x) // smoothstep = ease-in-out
}

export default function SlicedText({ text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    const sizer = root.querySelector('.sliced-sizer')
    const pieces = root.querySelectorAll('.sliced-piece')
    const n = pieces.length
    // hand off to the single clean copy, drop the slices
    const finish = () => {
      sizer.style.opacity = 1
      pieces.forEach(p => (p.style.opacity = 0))
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return
    }
    let raf
    let start
    const frame = now => {
      if (start === undefined) start = now
      const e = smooth((now - start) / DURATION)
      const front = -FADE + e * (1 + 2 * FADE) // sweeps -FADE → 1+FADE
      for (let i = 0; i < n; i++) {
        const p = n > 1 ? i / (n - 1) : 0
        pieces[i].style.opacity = smooth((front - p) / FADE)
      }
      if (e < 1) raf = requestAnimationFrame(frame)
      else finish()
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <span className={'sliced ' + className} aria-label={text} ref={ref}>
      <span className="sliced-sizer" aria-hidden="true">{text}</span>
      {Array.from({ length: SLICES }).map((_, i) => (
        <span
          key={i}
          className="sliced-piece"
          aria-hidden="true"
          style={{
            opacity: 0,
            // +1px overlap on the right so the intro has no seams between slices
            clipPath: `inset(0 calc(${100 - ((i + 1) * 100) / SLICES}% - 1px) 0 ${(i * 100) / SLICES}%)`,
          }}
        >
          {text}
        </span>
      ))}
    </span>
  )
}
