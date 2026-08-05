import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const COLORS = {
  deep: '#0B3D2E',
  deepDark: '#06251C',
  gold: '#D4A537',
  sand: '#F5EDE0',
}

export function Footer() {
  const { t, lang } = useLanguage()

  const quickLinks = [
    { label: t.menuReligion, path: '/diinta' },
    { label: t.menuTechnology, path: '/tecnolijiyada' },
    { label: t.menuCulture, path: '/suugaanta' },
    { label: t.menuQuran, path: '/quraanka' },
    { label: t.menuAbout, path: '/nagu-baar' },
    { label: t.menuContact, path: '/nala-soo-xiriir' },
    { label: t.footerTerms, path: '/shuruudaha' },
    { label: t.footerPrivacy, path: '/siraha' },
  ]

  const socialLinks = [
    { icon: '▶', url: 'https://youtube.com/@filanwaa', label: 'YouTube', bg: '#FF0000' },
    { icon: '📷', url: 'https://instagram.com/filanwaay', label: 'Instagram', bg: '#E4405F' },
    { icon: 'f', url: 'https://facebook.com/filanwaaa', label: 'Facebook', bg: '#1877F2' },
    { icon: '𝕏', url: 'https://twitter.com/filanwaa', label: 'Twitter', bg: '#000' },
  ]

  const desc = {
    so: 'Mashruuc isku daraya Diinta, Tecnolijiyada iyo Suugaanta luqadaha Somali, English iyo Carabi.',
    en: 'A platform combining Religion, Technology and Culture in Somali, English and Arabic.',
    ar: 'منصة تجمع بين الدين والتقنية والثقافة باللغات الصومالية والإنجليزية والعربية.',
  }

  const contactLabel = { so: 'Nala Xidhiidh', en: 'Contact Us', ar: 'تواصل معنا' }
  const quickLabel = { so: 'Liinks Degdeg ah', en: 'Quick Links', ar: 'روابط سريعة' }
  const madeWith = { so: 'Waxaa lagu sameeyay jacayl', en: 'Made with love', ar: 'صُنع بحب' }

  return (
    <footer style={{ background: 'linear-gradient(180deg, #0B3D2E 0%, #06251C 100%)', color: COLORS.sand, marginTop: 'auto' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '48px' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: COLORS.gold, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 24, fontWeight: 700, color: COLORS.deepDark,
            }}>
              ف
            </div>
            <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Filanwaa</span>
          </div>
          <p style={{ color: 'rgba(245,237,224,0.7)', fontSize: 14, lineHeight: 1.75, maxWidth: 280 }}>
            {desc[lang]}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: COLORS.gold, fontSize: 16, fontWeight: 700, marginBottom: 20, letterSpacing: '0.04em' }}>
            {quickLabel[lang]}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {quickLinks.map((link, i) => (
              <Link key={i} to={link.path} style={{
                color: 'rgba(245,237,224,0.75)', textDecoration: 'none',
                fontSize: 14, transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = COLORS.gold}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(245,237,224,0.75)'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ color: COLORS.gold, fontSize: 16, fontWeight: 700, marginBottom: 20, letterSpacing: '0.04em' }}>
            {contactLabel[lang]}
          </h4>
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: COLORS.sand, fontSize: 16, fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = s.bg
                  ;(e.currentTarget as HTMLElement).style.borderColor = s.bg
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'none'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p style={{ color: 'rgba(245,237,224,0.55)', fontSize: 13 }}>
            YouTube.com/@filanwaa
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(245,237,224,0.1)',
        maxWidth: 1200, margin: '0 auto', padding: '18px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 8,
      }}>
        <p style={{ fontSize: 13, color: 'rgba(245,237,224,0.55)' }}>
          Xuquuqda oo dhammaysatay {new Date().getFullYear()} <span style={{ color: COLORS.gold }}>Filanwaa</span>.
        </p>
        <p style={{ fontSize: 13, color: 'rgba(245,237,224,0.55)' }}>
          {madeWith[lang]} ❤️
        </p>
      </div>
    </footer>
  )
}