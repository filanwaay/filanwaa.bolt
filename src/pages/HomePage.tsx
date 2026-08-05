import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#D4A537',
  goldLight: '#E8C468', terracotta: '#C1652F', sand: '#F5EDE0',
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

  // Progress bar animation
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

  // Auto advance
  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), SLIDE_DURATION)
    return () => clearTimeout(t)
  }, [current, goTo])

  const slide = slides[current]
  const l = lang as 'so' | 'en' | 'ar'

  return (
    <div style={{ position: 'relative', width: '100vw', height: '62vh', minHeight: 400, overflow: 'hidden', marginLeft: 0 }}>

      {/* Background images — preload all, show active */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          transition: 'opacity 0.6s ease',
          opacity: i === current ? (animating ? 0 : 1) : 0,
        }} />
      ))}

      {/* Overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(6,37,28,0.90) 0%, rgba(6,37,28,0.60) 55%, rgba(6,37,28,0.25) 100%)',
      }} />

      {/* Weave pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: `repeating-linear-gradient(135deg, ${COLORS.gold} 0px, ${COLORS.gold} 1.5px, transparent 1.5px, transparent 34px), repeating-linear-gradient(45deg, ${COLORS.gold} 0px, ${COLORS.gold} 1.5px, transparent 1.5px, transparent 34px)`,
      }} />

      {/* Content */}
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
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 22,
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
            color: 'rgba(245,237,224,0.82)',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.8, marginBottom: 38, maxWidth: 560,
          }}>
            {slide.descs[l]}
          </p>

          <Link to={slide.path} style={{
            display: 'inline-block', padding: '15px 40px',
            background: COLORS.gold, color: COLORS.deepDark,
            borderRadius: 6, fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', transition: 'all 0.25s',
            boxShadow: '0 8px 28px rgba(212,165,55,0.4)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = COLORS.goldLight; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = COLORS.gold; (e.currentTarget as HTMLElement).style.transform = 'none' }}
          >
            {l === 'so' ? 'Baro Hadda →' : l === 'ar' ? 'تعلم الآن ←' : 'Learn Now →'}
          </Link>
        </div>
      </div>

      {/* Arrow buttons */}
      {[
        { dir: 'prev', side: 'left' as const, idx: (current - 1 + slides.length) % slides.length, label: '‹' },
        { dir: 'next', side: 'right' as const, idx: (current + 1) % slides.length, label: '›' },
      ].map(btn => (
        <button key={btn.dir} onClick={() => goTo(btn.idx)} style={{
          position: 'absolute', top: '50%', [btn.side]: 24,
          transform: 'translateY(-50%)', zIndex: 4,
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(245,237,224,0.12)',
          border: '1px solid rgba(245,237,224,0.3)',
          color: COLORS.sand, fontSize: 22, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s', backdropFilter: 'blur(4px)',
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(212,165,55,0.45)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(245,237,224,0.12)'}
        >
          {btn.label}
        </button>
      ))}

      {/* Bottom controls */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4,
        padding: '0 24px 28px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        {/* Slide bars */}
        {slides.map((_, i) => (
          <div key={i} onClick={() => goTo(i)} style={{
            flex: 1, height: 4, borderRadius: 2,
            background: 'rgba(245,237,224,0.25)',
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

        {/* Counter */}
        <span style={{ color: 'rgba(245,237,224,0.55)', fontSize: 13, fontWeight: 600, marginLeft: 'auto' }}>
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export function HomePage() {
  const { t } = useLanguage()

  const sections = [
    { to: '/diinta', title: t.religionTitle, desc: t.religionDesc, icon: '🕌', color: COLORS.deep },
    { to: '/tecnolijiyada', title: t.techTitle, desc: t.techDesc, icon: '💻', color: '#1F2A26' },
    { to: '/suugaanta', title: t.cultureTitle, desc: t.cultureDesc, icon: '📜', color: COLORS.terracotta },
  ]

  const stats = [
    { value: '150+', label: t.statArticles },
    { value: '3', label: t.statLanguages },
    { value: '10K+', label: t.statUsers },
    { value: '20+', label: t.statTopics },
  ]

  return (
    <div style={{ background: COLORS.sand }}>
      <HeroSlider />
      <WeaveDivider tone={COLORS.gold} opacity={0.5} />

      {/* Stats */}
      <section style={{ padding: '56px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '32px' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: '0 36px', borderRight: i < stats.length - 1 ? '1px solid #E2D9C8' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2.75rem', fontWeight: 600, color: COLORS.deep, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: COLORS.slate, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '10px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section" style={{ background: COLORS.sand }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 600, color: COLORS.ink, marginBottom: '14px' }}>{t.sectionsTitle}</h2>
            <p style={{ color: COLORS.slate, fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>{t.sectionsSubtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {sections.map((section) => (
              <Link key={section.to} to={section.to} style={{
                display: 'block', padding: '40px 32px', borderRadius: '4px', background: 'white',
                borderTop: `5px solid ${section.color}`, boxShadow: '0 2px 10px rgba(18,33,27,0.06)',
                transition: 'transform 0.3s, box-shadow 0.3s', textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(18,33,27,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(18,33,27,0.06)' }}
              >
                <div style={{ width: '58px', height: '58px', background: section.color, transform: 'rotate(45deg)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
                  <span style={{ transform: 'rotate(-45deg)', fontSize: '1.6rem' }}>{section.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 600, color: COLORS.ink, marginBottom: '12px' }}>{section.title}</h3>
                <p style={{ color: COLORS.slate, fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '22px' }}>{section.desc}</p>
                <span style={{ color: section.color, fontWeight: 700, fontSize: '0.88rem' }}>{t.learnMore} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeaveDivider tone={COLORS.terracotta} opacity={0.3} />
      <AdBanner />
      <SubscribeSection />
    </div>
  )
}
