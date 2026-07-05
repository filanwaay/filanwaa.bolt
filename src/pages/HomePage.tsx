import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function HomePage() {
  const { t } = useLanguage()

  const sections = [
    {
      to: '/diinta',
      title: t.home.religionTitle,
      desc: t.home.religionDesc,
      icon: '🕌',
      gradient: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
      image: 'https://images.pexels.com/photos/162359/pexels-photo-162359.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      to: '/tecnolijiyada',
      title: t.home.techTitle,
      desc: t.home.techDesc,
      icon: '💻',
      gradient: 'linear-gradient(135deg, #1A1F1C, #3E4642)',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      to: '/suugaanta',
      title: t.home.cultureTitle,
      desc: t.home.cultureDesc,
      icon: '📜',
      gradient: 'linear-gradient(135deg, #7C5817, #E8B14B)',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  const stats = [
    { value: '150+', label: t.home.statArticles },
    { value: '3', label: t.home.statLanguages },
    { value: '10K+', label: t.home.statUsers },
    { value: '20+', label: t.home.statTopics },
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,139,92,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Decorative pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30L30 60L60 30Z' fill='white'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '50px',
            background: 'rgba(232,177,75,0.15)',
            border: '1px solid rgba(232,177,75,0.3)',
            color: '#E8B14B',
            fontSize: '0.85rem',
            fontWeight: 500,
            marginBottom: '24px',
            animation: 'fadeIn 1s ease-out',
          }}>
            ✦ Diinta • Tecnolijiyada • Suugaanta ✦
          </div>

          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            {t.home.heroWelcome}
          </h1>

          <p style={{
            color: '#E8B14B',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto 12px',
            lineHeight: 1.4,
            animation: 'fadeInUp 0.9s ease-out',
          }}>
            {t.home.heroJoin}
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            animation: 'fadeInUp 1s ease-out',
          }}>
            {t.home.heroSubtitle}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.2s ease-out',
          }}>
            <Link
              to="/diinta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #E8B14B, #D49A2E)',
                color: '#0F4C3A',
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 12px 32px rgba(232,177,75,0.3)',
                transition: 'all 0.3s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,177,75,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,177,75,0.3)'
              }}
            >
              {t.home.heroCta}
            </Link>
            <Link
              to="/quraanka"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'all 0.3s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              🎧 {t.home.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0F4C3A',
            marginBottom: '48px',
          }}>
            {t.home.statsTitle}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '32px 16px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #F8FAF9, #EEF2F0)',
                  border: '1px solid #D8DFDB',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,76,58,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#525C57', fontSize: '0.95rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Sections */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title">{t.home.sectionsTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              {t.home.sectionsSubtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
            className="cards-grid"
          >
            {sections.map((section, i) => (
              <Link
                key={section.to}
                to={section.to}
                style={{
                  display: 'block',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
                  transition: 'all 0.4s',
                  textDecoration: 'none',
                  animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)'
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.16)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
                }}
              >
                <div style={{
                  height: '240px',
                  background: section.gradient,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.7,
                      transition: 'transform 0.6s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '4rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  }}>
                    {section.icon}
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0F4C3A',
                    marginBottom: '12px',
                  }}>
                    {section.title}
                  </h3>
                  <p style={{
                    color: '#525C57',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>
                    {section.desc}
                  </p>
                  <span style={{
                    color: '#0F4C3A',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {t.home.learnMore} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />

      <SubscribeSection />
    </div>
  )
}
