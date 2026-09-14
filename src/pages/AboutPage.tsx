import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { PageHero } from '../components/PageHero'

const COLORS = { deep: '#0B3D2E', gold: '#C89B3C', sand: '#F6F1E4', ink: '#12211B', slate: '#4A554E' }

export function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { title: t.about.value1, desc: t.about.value1Desc, icon: '📚' },
    { title: t.about.value2, desc: t.about.value2Desc, icon: '🌍' },
    { title: t.about.value3, desc: t.about.value3Desc, icon: '🕌' },
    { title: t.about.value4, desc: t.about.value4Desc, icon: '💻' },
  ]

  return (
    <div style={{ background: COLORS.sand }}>
      <PageHero icon="ℹ️" title={t.about.title} subtitle={t.about.subtitle} />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#E2D9C8', border: '1px solid #E2D9C8', marginBottom: '64px' }} className="about-grid">
            <div style={{ background: 'white', padding: '40px', borderTop: `3px solid ${COLORS.gold}` }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>🎯</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 700, color: COLORS.ink, marginBottom: '14px' }}>
                {t.about.missionTitle}
              </h2>
              <p style={{ color: COLORS.slate, fontSize: '1rem', lineHeight: 1.8 }}>
                {t.about.missionText}
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px', borderTop: `3px solid ${COLORS.gold}` }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>👁️</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 700, color: COLORS.ink, marginBottom: '14px' }}>
                {t.about.visionTitle}
              </h2>
              <p style={{ color: COLORS.slate, fontSize: '1rem', lineHeight: 1.8 }}>
                {t.about.visionText}
              </p>
            </div>
          </div>

          <h2 style={{
            textAlign: 'center', fontFamily: "'Fraunces', serif", fontSize: '2rem',
            fontWeight: 700, color: COLORS.ink, marginBottom: '48px',
          }}>
            {t.about.valuesTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2D9C8', border: '1px solid #E2D9C8' }} className="values-grid">
            {values.map((value, i) => (
              <div key={i} style={{ background: 'white', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{value.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', fontWeight: 700, color: COLORS.ink, marginBottom: '10px' }}>
                  {value.title}
                </h3>
                <p style={{ color: COLORS.slate, fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}