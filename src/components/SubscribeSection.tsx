import { useLanguage } from '../i18n/LanguageContext'

export function SubscribeSection() {
  const { t } = useLanguage()

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0F4C3A 0%, #0B3D2E 100%)',
      padding: '64px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-50%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,177,75,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #FF0000, #CC0000)',
          marginBottom: '24px',
          boxShadow: '0 12px 32px rgba(255,0,0,0.3)',
        }}>
          <span style={{ color: 'white', fontSize: '2rem', fontWeight: 700 }}>▶</span>
        </div>

        <h2 style={{
          color: 'white',
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '12px',
          lineHeight: 1.2,
        }}>
          {t.subscribe.title}
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          {t.subscribe.subtitle}
        </p>

        <a
          href="https://youtube.com/@filanwaa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 36px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #FF0000, #CC0000)',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 600,
            boxShadow: '0 12px 32px rgba(255,0,0,0.3)',
            transition: 'all 0.3s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,0,0,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,0,0,0.3)'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>▶</span>
          {t.subscribe.button}
        </a>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.9rem',
          marginTop: '16px',
        }}>
          {t.subscribe.youtubeText}
        </p>
      </div>
    </section>
  )
}
