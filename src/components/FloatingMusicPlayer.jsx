import { useState, useEffect, useRef } from 'react'
import { usePreferences } from '../context/Preferences'
import logo from '../assets/98.jpg'

export default function FloatingMusicPlayer() {
  const { language } = usePreferences() || { language: 'zh' }
  const lang = language === 'zh' ? 'zh' : language === 'de' ? 'de' : 'en'

  const AUDIO_SRC = 'https://www.buddhanet.net/filelib/mp3/metta.mp3'
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  // Dragging Position State
  const [position, setPosition] = useState({ x: 24, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const hasMoved = useRef(false)
  const containerRef = useRef(null)

  // Initialize position to bottom left
  useEffect(() => {
    const defaultY = window.innerHeight - 170
    setPosition({ x: 24, y: Math.max(80, defaultY) })

    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 80),
        y: Math.min(prev.y, window.innerHeight - 80)
      }))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Audio instance initialization
  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC)
    audioRef.current.loop = true
    audioRef.current.volume = 0.6

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setShowTooltip(false)
        })
        .catch((err) => {
          console.warn('Playback error or blocked by browser autoplay policy:', err)
        })
    }
  }

  // Mouse / Touch Dragging Handlers
  const handleStart = (clientX, clientY) => {
    setIsDragging(true)
    hasMoved.current = false
    dragStartPos.current = {
      x: clientX - position.x,
      y: clientY - position.y
    }
  }

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return
    const newX = clientX - dragStartPos.current.x
    const newY = clientY - dragStartPos.current.y

    // Mark as moved if threshold exceeded (> 4px)
    if (
      Math.abs(newX - position.x) > 4 ||
      Math.abs(newY - position.y) > 4
    ) {
      hasMoved.current = true
    }

    // Clamp inside viewport
    const clampedX = Math.max(12, Math.min(window.innerWidth - 80, newX))
    const clampedY = Math.max(12, Math.min(window.innerHeight - 80, newY))

    setPosition({ x: clampedX, y: clampedY })
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  // Window Event Listeners for Dragging
  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault()
        handleMove(e.clientX, e.clientY)
      }
    }
    const onMouseUp = () => {
      if (isDragging) {
        handleEnd()
      }
    }

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onTouchEnd = () => {
      if (isDragging) {
        handleEnd()
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', onTouchEnd)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [isDragging, position])

  const handleButtonClick = () => {
    if (!hasMoved.current) {
      togglePlay()
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999
      }}
      className="select-none touch-none group"
    >
      {/* Noticeable Tooltip Bubble */}
      {showTooltip && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={togglePlay}
          className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-emerald-900/95 text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-2xl backdrop-blur-md border border-emerald-400/50 flex items-center gap-2 animate-bounce pointer-events-auto cursor-pointer"
        >
          <span>🎵</span>
          <span>
            {lang === 'zh'
              ? '点击播放舒缓背景音乐'
              : lang === 'de'
              ? 'Klicken für Entspannungsmusik'
              : 'Click to play healing music'}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setShowTooltip(false)
            }}
            className="ml-1 px-1.5 py-0.5 rounded-full hover:bg-emerald-800 text-white/80 hover:text-white transition-colors text-xs font-bold"
            title={lang === 'zh' ? '关闭提示' : 'Close'}
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <div
        onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) {
            handleStart(e.touches[0].clientX, e.touches[0].clientY)
          }
        }}
        onClick={handleButtonClick}
        title={
          isPlaying
            ? lang === 'zh' ? '暂停音乐' : 'Pause Music'
            : lang === 'zh' ? '播放音乐' : 'Play Music'
        }
        className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-300 border-2 ${
          isPlaying
            ? 'border-emerald-500 ring-4 ring-emerald-500/30 shadow-emerald-500/30'
            : 'border-emerald-600/80 hover:border-emerald-400 hover:scale-105'
        }`}
      >
        {/* Background Image: Crisp Clear Logo */}
        <div
          className={`absolute inset-0 rounded-full overflow-hidden ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
        >
          <img
            src={logo}
            alt="Wellness Spring Music"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Subtle contrast gradient vignette so icon stands out crisply */}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
        </div>

        {/* Foreground Animated Equalizer or Doubled-Size Play Icon */}
        <div className="relative z-10 flex items-center justify-center text-white drop-shadow-lg">
          {isPlaying ? (
            <div className="flex items-end gap-1 h-6 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/40 shadow-md">
              <span className="w-1 bg-white rounded-full animate-eq-1" />
              <span className="w-1 bg-emerald-400 rounded-full animate-eq-2" />
              <span className="w-1 bg-white rounded-full animate-eq-3" />
            </div>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/60 shadow-lg transition-transform hover:scale-110">
              {/* Doubled-Size Perfectly Centered Play Triangle */}
              <svg className="w-7 h-7 fill-white drop-shadow-md" viewBox="0 0 24 24">
                <path d="M9.5 7.5v9l7-4.5z" />
              </svg>
            </div>
          )}
        </div>

        {/* Subtle Ambient Pulse Ring when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
        )}
      </div>
    </div>
  )
}
