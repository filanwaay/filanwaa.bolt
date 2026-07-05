import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { LANGUAGES, Language } from '../i18n/translations'

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/diinta', label: t.nav.religion },
    { to: '/tecnolijiyada', label: t.nav.technology },
    { to: '/suugaanta', label: t.nav.culture },
    { to: '/quraanka', label: t.nav.quran },
    { to: '/nagu-baar', label: t.nav.about },
    { to: '/nala-soo-xiriir', label: t.nav.contact },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(15, 76, 58, 0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white' }}>
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
            boxShadow: '0 4px 12px rgba(232, 177, 75, 0.3)',
          }}>
            ف
          </div>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>
            Filanwaa
          </span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#E8B14B' : 'white',
                fontSize: '0.82rem',
                fontWeight: 500,
                padding: '8px 10px',
                borderRadius: '8px',
                transition: 'all 0.2s',
                background: location.pathname === link.to ? 'rgba(232, 177, 75, 0.1)' : 'transparent',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.to) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = '#E8B14B'
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'white'
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'white',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              <span>{LANGUAGES[lang].flag}</span>
              <span>{LANGUAGES[lang].nativeName}</span>
              <span style={{ fontSize: '0.7rem' }}>▼</span>
            </button>
            {langOpen && (
              <>
                <div
                  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
                  onClick={() => setLangOpen(false)}
                />
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  minWidth: '160px',
                  zIndex: 100,
                }}>
                  {(Object.keys(LANGUAGES) as Language[]).map((code) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setLangOpen(false) }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '12px 16px',
                        color: lang === code ? '#0F4C3A' : '#525C57',
                        background: lang === code ? '#E8F5F0' : 'transparent',
                        fontSize: '0.9rem',
                        fontWeight: lang === code ? 600 : 400,
                        transition: 'all 0.2s',
                        textAlign: 'start',
                      }}
                      onMouseEnter={(e) => {
                        if (lang !== code) e.currentTarget.style.background = '#F8FAF9'
                      }}
                      onMouseLeave={(e) => {
                        if (lang !== code) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{LANGUAGES[code].flag}</span>
                      <span>{LANGUAGES[code].nativeName}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              color: 'white',
              fontSize: '1.5rem',
              padding: '4px',
            }}
            className="mobile-menu-btn"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'rgba(15, 76, 58, 0.98)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 0',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: location.pathname === link.to ? '#E8B14B' : 'white',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  background: location.pathname === link.to ? 'rgba(232, 177, 75, 0.1)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
