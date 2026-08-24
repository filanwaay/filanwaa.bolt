import { useLanguage } from '../i18n/LanguageContext'

const sites = [
  { name: 'Khan Academy', url: 'https://khanacademy.org', icon: '🎓' },
  { name: 'freeCodeCamp', url: 'https://freecodecamp.org', icon: '💻' },
  { name: 'Coursera', url: 'https://coursera.org', icon: '🏫' },
  { name: 'edX', url: 'https://edx.org', icon: '📚' },
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu', icon: '🔬' },
  { name: 'W3Schools', url: 'https://w3schools.com', icon: '🌐' },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: '🦊' },
  { name: 'The Odin Project', url: 'https://theodinproject.com', icon: '⚔️' },
  { name: 'CS50 Harvard', url: 'https://cs50.harvard.edu', icon: '🏛️' },
  { name: 'Codecademy', url: 'https://codecademy.com', icon: '🖥️' },
  { name: 'SQLZoo', url: 'https://sqlzoo.net', icon: '🗄️' },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: '🧩' },
  { name: 'Duolingo', url: 'https://duolingo.com', icon: '🦜' },
  { name: 'BBC Learning English', url: 'https://bbc.co.uk/learningenglish', icon: '🇬🇧' },
  { name: 'Typing.com', url: 'https://typing.com', icon: '⌨️' },
  { name: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com', icon: '🔍' },
  { name: 'HubSpot Academy', url: 'https://academy.hubspot.com', icon: '📊' },
  { name: 'Canva Design School', url: 'https://designschool.canva.com', icon: '🎨' },
  { name: 'YouTube Edu', url: 'https://youtube.com', icon: '▶️' },
  { name: 'TED-Ed', url: 'https://ed.ted.com', icon: '🎤' },
  { name: 'Crash Course', url: 'https://thecrashcourse.com', icon: '💥' },
  { name: 'GCFGlobal', url: 'https://gcfglobal.org', icon: '🌍' },
  { name: 'Cybrary', url: 'https://cybrary.it', icon: '🔒' },
  { name: 'DataCamp', url: 'https://datacamp.com', icon: '📈' },
  { name: 'Kaggle Learn', url: 'https://kaggle.com/learn', icon: '🤖' },
  { name: 'Brilliant.org', url: 'https://brilliant.org', icon: '💡' },
  { name: 'Open Library', url: 'https://openlibrary.org', icon: '📖' },
  { name: 'Project Gutenberg', url: 'https://gutenberg.org', icon: '📜' },
  { name: 'Alison', url: 'https://alison.com', icon: '🎯' },
  { name: 'Class Central', url: 'https://classcentral.com', icon: '🗺️' },
]

export function FreeSitesPage() {
  const { lang } = useLanguage()

  const title = {
    so: '30 Site Bilaash',
    en: '30 Free Sites',
    ar: '30 موقع مجاني',
  }[lang as 'so' | 'en' | 'ar']

  return (
    <div style={{
      width: 220, flexShrink: 0, position: 'sticky', top: 70,
      alignSelf: 'flex-start', background: 'white', borderRadius: 14,
      boxShadow: '0 4px 20px rgba(15,76,58,0.1)', overflow: 'hidden',
      maxHeight: 'calc(100vh - 90px)', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0B3D2E, #1A5C42)',
        padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
      }}>
        <span style={{ fontSize: 18 }}>🌐</span>
        <span style={{ color: '#D4A537', fontWeight: 700, fontSize: '0.9rem' }}>{title}</span>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, padding: '8px 0' }}>
        {sites.map((site, i) => (
          <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px',
              textDecoration: 'none', color: '#2A302D', fontSize: '0.82rem',
              fontWeight: 500, transition: 'all 0.15s', borderLeft: '3px solid transparent',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#E8F5F0'
              el.style.borderLeftColor = '#D4A537'
              el.style.color = '#0B3D2E'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.borderLeftColor = 'transparent'
              el.style.color = '#2A302D'
            }}
          >
            <span style={{ fontSize: 16, flexShrink: 0 }}>{site.icon}</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {site.name}
            </span>
          </a>
        ))}
      </div>

      <div style={{ padding: '10px 14px', borderTop: '1px solid #E8F5F0', flexShrink: 0 }}>
        <a href="/free-sites" style={{
          display: 'block', textAlign: 'center', padding: '8px', borderRadius: 8,
          background: '#0B3D2E', color: 'white', fontSize: '0.8rem', fontWeight: 600,
          textDecoration: 'none', transition: 'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#D4A537'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#0B3D2E'}
        >
          {lang === 'so' ? 'Dhammaan Arag →' : lang === 'ar' ? 'عرض الكل ←' : 'View All →'}
        </a>
      </div>
    </div>
  )
}