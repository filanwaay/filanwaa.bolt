import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@filanwaa', icon: '▶', color: '#FF0000' },
    { name: 'Instagram', url: 'https://instagram.com/filanwaa', icon: '📷', color: '#E4405F' },
    { name: 'Facebook', url: 'https://facebook.com/filanwaaa', icon: 'f', color: '#1877F2' },
    { name: 'Twitter', url: 'https://twitter.com/filanwaay', icon: '𝕏', color: '#1DA1F2' },
  ]

  const quickLinks = [
    { to: '/diinta', label: t.nav.religion },
    { to: '/tecnolijiyada', label: t.nav.technology },
    { to: '/suugaanta', label: t.nav.culture },
    { to: '/quraanka', label: t.nav.quran },
    { to: '/nagu-baar', label: t.nav.about },
    { to: '/nala-soo-xiriir', label: t.nav.contact },
    { to: '/shuruudaha', label: t.nav.terms },
    { to: '/siraha', label: t.nav.privacy },
  ]

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0B3D2E 0%, #051F18 100%)',
      color: 'white',
      padding: '64px 0 32px',
      marginTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #E8B14B, #D49A2E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Amiri, serif',
                fontSize: '26px',
                fontWeight: 700,
                color: '#0F4C3A',
              }}>
                ف
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.footer.about}</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '400px' }}>
              {t.footer.aboutDesc}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', color: '#E8B14B' }}>
              {t.footer.quickLinks}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E8B14B'
                      e.currentTarget.style.paddingInlineStart = '4px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                      e.currentTarget.style.paddingInlineStart = '0'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', color: '#E8B14B' }}>
              {t.footer.connect}
            </h3>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'white',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
              {t.subscribe.youtubeText}
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            {t.footer.rights}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            {t.footer.madeWith} ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
