import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function TechnologyPage() {
  const { t } = useLanguage()

  const languages = [
    { title: t.tech.python, desc: t.tech.pythonDesc, icon: '🐍', color: '#3776AB', bg: '#E8F5F0' },
    { title: t.tech.html, desc: t.tech.htmlDesc, icon: '🌐', color: '#E34F26', bg: '#FEF6E6' },
    { title: t.tech.css, desc: t.tech.cssDesc, icon: '🎨', color: '#1572B6', bg: '#E8F5F0' },
    { title: t.tech.php, desc: t.tech.phpDesc, icon: '🐘', color: '#777BB4', bg: '#EEF2F0' },
    { title: t.tech.r, desc: t.tech.rDesc, icon: '📊', color: '#276DC3', bg: '#E8F5F0' },
    { title: t.tech.java, desc: t.tech.javaDesc, icon: '☕', color: '#ED8B00', bg: '#FEF6E6' },
    { title: t.tech.cpp, desc: t.tech.cppDesc, icon: '⚙️', color: '#00599C', bg: '#E8F5F0' },
    { title: t.tech.sql, desc: t.tech.sqlDesc, icon: '🗄️', color: '#4479A1', bg: '#EEF2F0' },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,139,92,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💻</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.tech.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.tech.subtitle}
          </p>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
            className="tech-grid"
          >
            {languages.map((lang, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.06)',
                  transition: 'all 0.4s',
                  border: '1px solid transparent',
                  animation: `fadeInUp 0.5s ease-out ${i * 0.08}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.16)'
                  e.currentTarget.style.borderColor = lang.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.06)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: lang.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '20px',
                }}>
                  {lang.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: lang.color,
                  marginBottom: '12px',
                }}>
                  {lang.title}
                </h3>
                <p style={{
                  color: '#525C57',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}>
                  {lang.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}
