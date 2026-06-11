// Elemen dekoratif bernuansa Jawa + util animasi.
// Semua ornamen memakai `currentColor` agar warnanya mudah diatur lewat text-*.

import { useEffect, useId, useRef, useState } from 'react'

/**
 * Reveal — membungkus konten agar fade-up saat masuk viewport.
 * Pemakaian: <Reveal delay={120}>...</Reveal>
 */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * KawungPattern — motif batik kawung sebagai latar (pakai opacity rendah).
 * Warna mengikuti text color elemen induk.
 */
export function KawungPattern({ className = '' }) {
  const id = useId()
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={id}
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="36" cy="14" rx="13" ry="17" />
            <ellipse cx="36" cy="58" rx="13" ry="17" />
            <ellipse cx="14" cy="36" rx="17" ry="13" />
            <ellipse cx="58" cy="36" rx="17" ry="13" />
          </g>
          <circle cx="36" cy="36" r="2.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/**
 * TumpalDivider — deret segitiga "tumpal" sebagai pembatas antar bagian.
 * `flip` membalik arah segitiga (menunjuk ke atas).
 */
export function TumpalDivider({ className = '', flip = false }) {
  const id = useId()
  return (
    <svg
      className={`block w-full ${className}`}
      viewBox="0 0 120 18"
      height="18"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <defs>
        <pattern id={id} width="16" height="18" patternUnits="userSpaceOnUse">
          <polygon points="0,0 16,0 8,15" fill="currentColor" />
          <circle cx="8" cy="4.5" r="1.3" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="120" height="18" fill={`url(#${id})`} />
    </svg>
  )
}

/**
 * Sulur — ornamen sulur/lung-lungan simetris untuk menghias judul bagian.
 */
export function Sulur({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeLinecap="round">
        {/* vine kiri */}
        <path d="M90 14H46c-12 0-13-10-23-9" />
        <path d="M23 5c-5 .6-6.5 5-2.5 8" />
        <path d="M64 14c-4-4-9-4-13-1" />
        {/* vine kanan (cermin) */}
        <path d="M110 14h44c12 0 13-10 23-9" />
        <path d="M177 5c5 .6 6.5 5 2.5 8" />
        <path d="M136 14c4-4 9-4 13-1" />
      </g>
      {/* belah ketupat tengah (motif kawung mini) */}
      <path d="M100 4l6 10-6 10-6-10z" fill="currentColor" stroke="none" />
      <circle cx="20" cy="9" r="2" fill="currentColor" stroke="none" />
      <circle cx="180" cy="9" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * SectionHeading — judul bagian standar: kapsul aksen + ornamen sulur + judul.
 */
export function SectionHeading({ kicker, title, subtitle, className = '' }) {
  return (
    <Reveal className={`text-center mb-12 sm:mb-16 ${className}`}>
      {kicker && (
        <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {kicker}
        </span>
      )}
      <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">
        {title}
      </h2>
      <Sulur className="mx-auto mt-4 h-6 w-40 text-accent/70" />
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

// Aksara Jawa dekoratif — transliterasi "Kembang Sereh".
// CATATAN: harap diverifikasi oleh pembaca aksara Jawa sebelum dipublikasikan.
export const AKSARA_KEMBANG_SEREH = 'ꦏꦼꦩ꧀ꦧꦁ​ꦱꦼꦫꦃ'
