import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { BuddyScene } from './components/BuddyScene'
import rawSlides from './slides/content.json'

type SlideData = {
  index: number
  title: string
  html: string
  notes: string
  activeCp: string | null
  timerMin: number | null
  timerLabel: string | null
  completedThrough: number | null
}

const slides = rawSlides as SlideData[]
const CP_LIST = ['0', '1', '2', '3', '4', '5', '6', '7'] as const

function formatTime(totalSec: number) {
  const neg = totalSec < 0
  const abs = Math.abs(totalSec)
  const m = Math.floor(abs / 60)
  const s = abs % 60
  return `${neg ? '-' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return reduced
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [notesOpen, setNotesOpen] = useState(false)
  const [buddiesOn, setBuddiesOn] = useState(() => {
    try {
      return localStorage.getItem('deck_buddies_off') !== 'true'
    } catch {
      return true
    }
  })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [spot, setSpot] = useState({ x: '50%', y: '40%' })
  const [remainSec, setRemainSec] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerLabel, setTimerLabel] = useState('Lab Sẵn sàng')
  const [timerCp, setTimerCp] = useState<string | null>(null)
  const [totalSec, setTotalSec] = useState(0)
  const reduced = usePrefersReducedMotion()
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const current = slides[index]
  const total = slides.length

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(total - 1, next)))
    },
    [total],
  )

  const goToCp = useCallback(
    (cp: string | number) => {
      const key = String(cp)
      const idx = slides.findIndex((s) => s.activeCp === key)
      if (idx >= 0) go(idx)
    },
    [go],
  )

  const startCpTimer = useCallback((cp: string, minutes: number, label: string) => {
    setTimerCp(cp)
    setTotalSec(minutes * 60)
    setRemainSec(minutes * 60)
    setTimerLabel(label)
    setTimerRunning(true)
  }, [])

  const kickoffLab = useCallback(() => {
    goToCp('0')
    startCpTimer('0', 15, 'CP0: Đọc bài mẫu')
  }, [goToCp, startCpTimer])

  useEffect(() => {
    const slide = slides[index]
    if (slide?.activeCp && slide.timerMin && slide.activeCp !== timerCp) {
      startCpTimer(
        slide.activeCp,
        slide.timerMin,
        slide.timerLabel || `CP${slide.activeCp}`,
      )
    }
  }, [index, startCpTimer, timerCp])

  useEffect(() => {
    if (!timerRunning) return
    const id = window.setInterval(() => setRemainSec((s) => s - 1), 1000)
    return () => window.clearInterval(id)
  }, [timerRunning])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          go(index + 1)
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          go(index - 1)
          break
        case 'Home':
          e.preventDefault()
          go(0)
          break
        case 'End':
          e.preventDefault()
          go(total - 1)
          break
        case 'n':
        case 'N':
          e.preventDefault()
          setNotesOpen((v) => !v)
          break
        case 'c':
        case 'C':
          e.preventDefault()
          setBuddiesOn((v) => {
            const next = !v
            try {
              localStorage.setItem('deck_buddies_off', next ? 'false' : 'true')
            } catch {
              /* ignore */
            }
            return next
          })
          break
        case 'p':
        case 'P':
          e.preventDefault()
          setTimerRunning((v) => !v)
          break
        case 'r':
        case 'R':
          e.preventDefault()
          setRemainSec(totalSec)
          break
        case 'f':
        case 'F':
          e.preventDefault()
          if (!document.fullscreenElement) {
            void document.documentElement.requestFullscreen?.()
          } else {
            void document.exitFullscreen?.()
          }
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index, total, totalSec])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -((e.clientY / window.innerHeight) * 2 - 1)
      setPointer({ x: nx, y: ny })
      setSpot({ x: `${e.clientX}px`, y: `${e.clientY}px` })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  // Expose kickoff for inline HTML button
  useEffect(() => {
    ;(window as unknown as { kickoffLab?: () => void }).kickoffLab = kickoffLab
    ;(window as unknown as { goToCP?: (cp: number | string) => void }).goToCP = goToCp
    return () => {
      delete (window as unknown as { kickoffLab?: () => void }).kickoffLab
      delete (window as unknown as { goToCP?: (cp: number | string) => void }).goToCP
    }
  }, [kickoffLab, goToCp])

  const activeCp = current?.activeCp
  const completedThrough = useMemo(() => {
    if (current?.completedThrough != null) return current.completedThrough
    if (index >= 16) return 7
    if (activeCp != null) return Math.max(0, Number(activeCp) - 1)
    return null
  }, [activeCp, current, index])

  const timerClass = [
    'cp-timer-panel',
    timerRunning ? 'running' : remainSec < totalSec && remainSec > 0 ? 'paused' : '',
    remainSec < 0 ? 'overtime' : '',
    remainSec <= 120 && remainSec >= 0 && timerRunning ? 'warn' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const showBuddies = buddiesOn && !reduced

  return (
    <>
      <header className="deck-header">
        <div className="brand-meta">
          <span>K5 · L3 · Day 02</span>
          <span className="brand-badge">Discovery &amp; Problem Framing</span>
          <span className="brand-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>
            React + Three.js
          </span>
        </div>

        <nav className="cp-timeline-rail" aria-label="Checkpoint Timeline">
          {CP_LIST.map((cp) => {
            const n = Number(cp)
            const classes = ['cp-node']
            if (activeCp === cp) classes.push('active-rail')
            else if (completedThrough != null && n <= completedThrough) classes.push('completed-rail')
            else if (activeCp != null && n < Number(activeCp)) classes.push('completed-rail')
            return (
              <div
                key={cp}
                className={classes.join(' ')}
                data-cp={cp}
                onClick={() => goToCp(cp)}
                title={`CP${cp}`}
              >
                CP{cp}
              </div>
            )
          })}
        </nav>

        <div className={timerClass} id="timer-panel">
          <div className="timer-meta">
            <span className="timer-label">{timerLabel}</span>
            <span className="timer-status-badge">
              {remainSec < 0 ? 'OT' : timerRunning ? 'CHẠY' : 'CHỜ'}
            </span>
          </div>
          <div className="timer-display">{formatTime(remainSec)}</div>
          <div className="header-actions">
            <button className="btn-icon" onClick={() => setTimerRunning((v) => !v)} title="Pause/Resume (P)">
              ⏯ P
            </button>
            <button className="btn-icon" onClick={() => setRemainSec(totalSec)} title="Reset (R)">
              ↺ R
            </button>
          </div>
        </div>

        <div className="header-actions">
          <button
            className={`btn-icon${buddiesOn ? ' active' : ''}`}
            onClick={() => {
              setBuddiesOn((v) => {
                const next = !v
                try {
                  localStorage.setItem('deck_buddies_off', next ? 'false' : 'true')
                } catch {
                  /* ignore */
                }
                return next
              })
            }}
            title="Bật/Tắt mascot 3D (C)"
          >
            {buddiesOn ? '🐱' : '🙈'} Cute3D
          </button>
          <button className="btn-icon" onClick={() => setNotesOpen((v) => !v)} title="Notes (N)">
            📝 Notes
          </button>
          <button
            className="btn-icon"
            onClick={() => {
              if (!document.fullscreenElement) void document.documentElement.requestFullscreen?.()
              else void document.exitFullscreen?.()
            }}
            title="Fullscreen (F)"
          >
            ⛶
          </button>
        </div>
      </header>

      <main
        id="deck"
        onTouchStart={(e) => {
          const t = e.changedTouches[0]
          touchStart.current = { x: t.screenX, y: t.screenY }
        }}
        onTouchEnd={(e) => {
          if (!touchStart.current) return
          const t = e.changedTouches[0]
          const dx = t.screenX - touchStart.current.x
          const dy = t.screenY - touchStart.current.y
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) go(index + 1)
            else go(index - 1)
          }
          touchStart.current = null
        }}
      >
        {slides.map((slide, i) => (
          <section
            key={slide.index}
            className={`slide${i === index ? ' active' : ''}`}
            data-index={slide.index}
            data-active-cp={slide.activeCp ?? undefined}
          >
            <div dangerouslySetInnerHTML={{ __html: slide.html }} />
          </section>
        ))}
      </main>

      <footer className="deck-footer">
        <div className="slide-counter">
          {index + 1} / {total}
        </div>
        <div className="progress-dots" aria-label="Progress">
          {slides.map((s) => (
            <div
              key={s.index}
              className={`dot${s.index === index ? ' active' : ''}`}
              onClick={() => go(s.index)}
              title={s.title.replace(/&amp;/g, '&')}
            />
          ))}
        </div>
        <div className="nav-buttons">
          <button className="btn-nav" disabled={index === 0} onClick={() => go(index - 1)}>
            ← Trước
          </button>
          <button className="btn-nav" disabled={index === total - 1} onClick={() => go(index + 1)}>
            Tiếp →
          </button>
        </div>
      </footer>

      <aside id="speaker-notes-drawer" className={notesOpen ? 'open' : ''} aria-label="Speaker Notes">
        <div className="notes-header">
          <span className="notes-title">📝 Ghi chú Giảng viên</span>
          <button className="notes-close" onClick={() => setNotesOpen(false)}>
            ×
          </button>
        </div>
        <div
          className="notes-content"
          dangerouslySetInnerHTML={{
            __html: current?.notes || '<em>Không có ghi chú cho slide này.</em>',
          }}
        />
      </aside>

      {showBuddies && (
        <div
          className="cursor-spotlight"
          style={
            {
              position: 'fixed',
              width: 420,
              height: 420,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              left: spot.x,
              top: spot.y,
              background:
                'radial-gradient(circle, rgba(14,165,233,0.16) 0%, rgba(20,184,166,0.08) 35%, transparent 70%)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
              zIndex: 35,
            } as CSSProperties
          }
        />
      )}

      <BuddyScene pointer={pointer} visible={showBuddies} />
    </>
  )
}
