import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#D4A537',
  goldLight: '#E8C468', sand: '#F5EDE0',
}

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { key: 'menuHome', path: '/' },
    { key: 'menuReligion', path: '/diinta' },
    { key: 'menuTechnology', path: '/tecnolijiyada' },
    { key: 'menuCulture', path: '/suugaanta' },
    { key: 'menuQuran', path: '/quraanka' },
    { key: 'menuDownload', path: '/download' },
    { key: 'menuFreeSites', path: '/free-sites' },
    { key: 'menuAbout', path: '/nagu-baar' },
    { key: 'menuContact', path: '/nala-soo-xiriir' },
  ]

  const getLabel = (key: keyof typeof t) => (t[key] as string) || key

  return (
    <>
      <header style={{
        background: COLORS.deep,
        borderBottom: `3px solid ${COLORS.gold}`,
        boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '0 20px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 62,
        }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: COLORS.gold, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 18, fontWeight: 700, color: COLORS.deepDark,
            }}>ف</div>
            <span style={{ color: COLORS.sand, fontSize: 18, fontWeight: 700 }}>Filanwaa</span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'nowrap', overflow: 'hidden' }}
            className="desktop-nav"
          >
            {menuItems.map((item) => (
              <Link key={item.key} to={item.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'inline-block',
                  padding: '7px 12px',
                  color: COLORS.sand,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  borderRadius: 6,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = COLORS.gold
                  ;(e.currentTarget as HTMLElement).style.color = COLORS.deepDark
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = COLORS.sand
                }}
              >
                {getLabel(item.key as keyof typeof t)}
              </Link>
            ))}
          </nav>

          {/* Lang + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {(['so', 'en', 'ar'] as const).map(code => (
                <button key={code} onClick={() => setLang(code)} style={{
                  padding: '5px 9px', borderRadius: 5, border: 'none',
                  background: lang === code ? COLORS.gold : 'rgba(212,165,55,0.12)',
                  color: lang === code ? COLORS.deepDark : COLORS.sand,
                  fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer',
                  transition: 'all 0.15s',
                }}>
                  {code === 'so' ? 'SO' : code === 'en' ? 'EN' : 'AR'}
                </button>
              ))}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 6,
            }} className="hamburger-btn">
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2,
                  background: COLORS.sand, borderRadius: 2,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 65, left: 0, right: 0, bottom: 0,
          background: 'rgba(6,37,28,0.97)', zIndex: 99,
          display: 'flex', flexDirection: 'column',
          padding: '24px 20px', gap: 8, overflowY: 'auto',
        }}>
          {menuItems.map(item => (
            <Link key={item.key} to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '14px 18px',
                color: COLORS.sand, textDecoration: 'none',
                fontWeight: 600, fontSize: '1rem', borderRadius: 8,
                border: '1px solid rgba(212,165,55,0.15)',
              }}
            >
              {getLabel(item.key as keyof typeof t)}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}