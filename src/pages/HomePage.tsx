import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#C89B3C',
  goldLight: '#E8C468', terracotta: '#B5622E', sand: '#F6F1E4',
  ink: '#12211B', slate: '#4A554E',
}

function WeaveDivider({ tone = COLORS.gold, opacity = 0.35 }: { tone?: string; opacity?: number }) {
  return (
    <div aria-hidden="true" style={{
      height: '16px', width: '100%', opacity,
      backgroundImage: `repeating-linear-gradient(135deg, ${tone} 0px, ${tone} 2px, transparent 2px, transparent 12px), repeating-linear-gradient(45deg, ${tone} 0px, ${tone} 2px, transparent 2px, transparent 12px)`,
    }} />
  )
}

// Small manuscript-style corner mark, reused at all four corners of the hero frame
function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 28, height: 28, zIndex: 5, ...pos[corner] }} />
}

const slides = [
  {
    image: 'https://images.pexels.com/photos/2845462/pexels-photo-2845462.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🕌', path: '/diinta',
    labels: { so: 'Diinta Islaamka', en: 'Islamic Faith', ar: 'الدين الإسلامي' },
    descs: {
      so: 'Baro shanta rukni ee Islaamka — Towxiid, Salaad, Soonka, Zakad, iyo Xaj.',
      en: 'Learn the five pillars of Islam — Tawhid, Prayer, Fasting, Zakat, and Hajj.',
      ar: 'تعلم أركان الإسلام الخمسة — التوحيد والصلاة والصيام والزكاة والحج.',
    },
  },
  {
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '💻', path: '/tecnolijiyada',
    labels: { so: 'Tecnolijiyada', en: 'Technology', ar: 'التقنية' },
    descs: {
      so: 'Baro Python, HTML, CSS, Java, SQL iyo kuwo kale — bilowga ilaa heerka sare.',
      en: 'Learn Python, HTML, CSS, Java, SQL and more — from beginner to advanced.',
      ar: 'تعلم Python وHTML وCSS وJava وSQL والمزيد — من المبتدئ إلى المتقدم.',
    },
  },
  {
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '📜', path: '/suugaanta',
    labels: { so: 'Suugaanta Soomaalida', en: 'Somali Culture', ar: 'الثقافة الصومالية' },
    descs: {
      so: 'Maahmaahyo, Xikmado, Gabayo, Heeso iyo Sheekooyinka dhaqanka Soomaalida.',
      en: 'Proverbs, Wisdom, Poetry, Songs and Stories of Somali cultural heritage.',
      ar: 'الأمثال والحكم والشعر والأغاني وقصص التراث الثقافي الصومالي.',
    },
  },
]

const SLIDE_DURATION = 6000

function HeroSlider() {
  const { lang } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<number | null>(null)
  const startRef = useRef<number>(Date.now())

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setProgress(0)
    startRef.current = Date.now()
    setTimeout(() => { setCurrent(idx); setAnimating(false) }, 400)
  }, [animating])

  useEffect(() => {
    setProgress(0)
    startRef.current = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) progressRef.current = requestAnimationFrame(tick)
    }
    progressRef.current = requestAnimationFrame(tick)
    return () => { if (progressRef.current) cancelAnimationFrame(progressRef.current) }
  }, [current])

  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), SLIDE_DURATION)
    return () => clearTimeout(t)
  }, [current, goTo])

  const slide = slides[current]
  const l = lang as 'so' | 'en' | 'ar'

  return (
    <div style={{ position: 'relative', width: '100%', height: '64vh', minHeight: 420, overflow: 'hidden' }}>
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          transition: 'opacity 0.6s ease',
          opacity: i === current ? (animating ? 0 : 1) : 0,
        }} />
      ))}

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(6,37,28,0.92) 0%, rgba(6,37,28,0.62) 55%, rgba(6,37,28,0.22) 100%)',
      }} />

      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
        backgroundImage: `repeating-linear-gradient(135deg, ${COLORS.gold} 0px, ${COLORS.gold} 1.5px, transparent 1.5px, transparent 34px), repeating-linear-gradient(45deg, ${COLORS.gold} 0px, ${COLORS.gold} 1.5px, transparent 1.5px, transparent 34px)`,
      }} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', alignItems: 'center',
        padding: '0 6vw',
      }}>
        <div style={{
          maxWidth: 680,
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(24px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 18px', borderRadius: 30,
            border: `1px solid ${COLORS.gold}`,
            color: COLORS.gold, fontSize: 13, fontWeight: 600,
            letterSpacing: '0.03em', marginBottom: 22,
          }}>
            <span>{slide.icon}</span>
            <span>{slide.labels[l]}</span>
          </div>

          <h1 style={{
            color: COLORS.sand, fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
            fontWeight: 700, lineHeight: 1.08, marginBottom: 20,
          }}>
            {slide.labels[l]}
          </h1>

          <p style={{
            color: 'rgba(246,241,228,0.85)',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.8, marginBottom: 38, maxWidth: 560,
          }}>
            {slide.descs[l]}
          </p>

          <Link to={slide.path} style={{
            display: 'inline-block', padding: '15px 40px',
            background: COLORS.gold, color: COLORS.deepDark,
            borderRadius: 3, fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', transition: 'all 0.25s',
            boxShadow: '0 8px 28px rgba(200,155,60,0.35)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = COLORS.goldLight; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = COLORS.gold; (e.currentTarget as HTMLElement).style.transform = 'none' }}
          >
            {l === 'so' ? 'Baro Hadda →' : l === 'ar' ? 'تعلم الآن ←' : 'Learn Now →'}
          </Link>
        </div>
      </div>

      {[
        { dir: 'prev', side: 'left' as const, idx: (current - 1 + slides.length) % slides.length, label: '‹' },
        { dir: 'next', side: 'right' as const, idx: (current + 1) % slides.length, label: '›' },
      ].map(btn => (
        <button key={btn.dir} onClick={() => goTo(btn.idx)} style={{
          position: 'absolute', top: '50%', [btn.side]: 24,
          transform: 'translateY(-50%)', zIndex: 4,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(246,241,228,0.12)',
          border: '1px solid rgba(246,241,228,0.3)',
          color: COLORS.sand, fontSize: 20, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s', backdropFilter: 'blur(4px)',
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,60,0.45)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(246,241,228,0.12)'}
        >
          {btn.label}
        </button>
      ))}

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4,
        padding: '0 24px 24px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => goTo(i)} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: 'rgba(246,241,228,0.25)',
            cursor: 'pointer', overflow: 'hidden',
            maxWidth: 160,
          }}>
            <div style={{
              height: '100%', borderRadius: 2,
              background: COLORS.gold,
              width: i === current ? `${progress}%` : i < current ? '100%' : '0%',
              transition: i === current ? 'none' : 'width 0.3s',
            }} />
          </div>
        ))}
        <span style={{ color: 'rgba(246,241,228,0.55)', fontSize: 13, fontWeight: 600, marginLeft: 'auto' }}>
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

// Slim strip below the hero — replaces the old boxed sidebar
function FreeSitesStrip() {
  const { lang } = useLanguage()
  const l = lang as 'so' | 'en' | 'ar'
  const text = {
    so: { title: '30 Site Bilaash', desc: 'Hel 30 website oo bilaash ah oo kaa caawinaya.', cta: 'Arag Liiska' },
    en: { title: '30 Free Sites', desc: 'Discover 30 useful free websites.', cta: 'View List' },
    ar: { title: '30 موقع مجاني', desc: 'اكتشف 30 موقعًا مجانيًا مفيدًا.', cta: 'عرض القائمة' },
  }
  const tx = text[l]
  return (
    <Link to="/free-sites" style={{
      display: 'flex', alignItems: 'center', gap: 18,
      background: COLORS.deepDark, borderTop: `1px solid rgba(200,155,60,0.3)`,
      padding: '18px 6vw', textDecoration: 'none',
    }}>
      <span style={{ fontSize: 22, flexShrink: 0 }}>🌐</span>
      <span style={{ color: COLORS.sand, fontWeight: 700, fontSize: '0.95rem', flexShrink: 0 }}>{tx.title}</span>
      <span style={{ color: 'rgba(246,241,228,0.55)', fontSize: '0.85rem', flex: 1, minWidth: 0 }} className="free-sites-desc">{tx.desc}</span>
      <span style={{ color: COLORS.gold, fontWeight: 700, fontSize: '0.85rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
        {tx.cta} {l === 'ar' ? '←' : '→'}
      </span>
    </Link>
  )
}

export function HomePage() {
  const { t } = useLanguage()

  const sections = [
    { to: '/diinta', title: t.religionTitle, desc: t.religionDesc, icon: '🕌', color: COLORS.deep, no: '01' },
    { to: '/tecnolijiyada', title: t.techTitle, desc: t.techDesc, icon: '💻', color: '#1F2A26', no: '02' },
    { to: '/suugaanta', title: t.cultureTitle, desc: t.cultureDesc, icon: '📜', color: COLORS.terracotta, no: '03' },
  ]

  const stats = [
    { value: '150+', label: t.statArticles },
    { value: '3', label: t.statLanguages },
    { value: '10K+', label: t.statUsers },
    { value: '20+', label: t.statTopics },
  ]

  return (
    <div style={{ background: COLORS.sand }}>
      {/* Hero, framed like a manuscript plate */}
      <div style={{ background: COLORS.ink, padding: '28px 6vw 0' }}>
        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }}>
          <CornerMark corner="tl" />
          <CornerMark corner="tr" />
          <CornerMark corner="bl" />
          <CornerMark corner="br" />
          <div style={{ border: `1px solid rgba(200,155,60,0.5)`, overflow: 'hidden' }}>
            <HeroSlider />
          </div>
        </div>
      </div>
      <div style={{ background: COLORS.ink, paddingTop: 28 }}>
        <FreeSitesStrip />
      </div>

      <WeaveDivider tone={COLORS.gold} opacity={0.5} />

      {/* Stats */}
      <section style={{ padding: '56px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '32px' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: '0 36px', borderRight: i < stats.length - 1 ? '1px solid #E2D9C8' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2.75rem', fontWeight: 600, color: COLORS.deep, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: COLORS.slate, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', marginTop: '10px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections — a ledger-style list rather than boxed cards */}
      <section className="section" style={{ background: COLORS.sand }}>
        <div className="container">
          <div style={{ marginBottom: '48px', maxWidth: 620 }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 600, color: COLORS.ink, marginBottom: '14px' }}>{t.sectionsTitle}</h2>
            <p style={{ color: COLORS.slate, fontSize: '1.05rem', lineHeight: 1.6 }}>{t.sectionsSubtitle}</p>
          </div>
          <div style={{ borderTop: `1px solid #DDD2BA` }}>
            {sections.map((section) => (
              <Link key={section.to} to={section.to} style={{
                display: 'flex', alignItems: 'center', gap: 32,
                padding: '30px 4px', borderBottom: `1px solid #DDD2BA`,
                textDecoration: 'none', transition: 'padding-left 0.25s',
              }} className="section-row"
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '20px' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '4px' }}
              >
                <span style={{
                  fontFamily: "'Fraunces', serif", fontSize: '1.1rem', color: section.color,
                  fontWeight: 600, flexShrink: 0, width: 34,
                }}>{section.no}</span>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%', background: section.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontSize: '1.4rem' }}>{section.icon}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 600, color: COLORS.ink, marginBottom: '6px' }}>{section.title}</h3>
                  <p style={{ color: COLORS.slate, fontSize: '0.92rem', lineHeight: 1.5 }}>{section.desc}</p>
                </div>
                <span style={{ color: section.color, fontWeight: 700, fontSize: '0.88rem', flexShrink: 0 }} className="section-cta">{t.learnMore} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeaveDivider tone={COLORS.terracotta} opacity={0.3} />
      <AdBanner />
      <SubscribeSection />

      <style>{`
        @media (max-width: 768px) {
          .free-sites-desc { display: none; }
          .section-row { flex-wrap: wrap; gap: 14px !important; }
          .section-cta { display: none; }
        }
      `}</style>
    </div>
  )
}