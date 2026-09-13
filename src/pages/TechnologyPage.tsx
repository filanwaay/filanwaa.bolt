import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#C89B3C',
  goldLight: '#E8C468', terracotta: '#B5622E', sand: '#F6F1E4',
  ink: '#12211B', slate: '#4A554E',
}

function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 24, height: 24, zIndex: 5, ...pos[corner] }} />
}

export function TechnologyPage() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

  const languages = [
    { title: 'Python', desc: lang === 'so' ? 'Luqadda ugu fudud ee la bilaabo' : lang === 'ar' ? 'أسهل لغة للبدء بها' : 'The easiest language to start with', icon: '🐍', color: '#3776AB', path: '/python' },
    { title: 'HTML', desc: lang === 'so' ? 'Qaab-dhismeedka websaydhyada' : lang === 'ar' ? 'هيكل المواقع الإلكترونية' : 'The structure of websites', icon: '🌐', color: '#E34F26', path: '/html' },
    { title: 'CSS', desc: lang === 'so' ? 'Naqshadaynta websaydhyada' : lang === 'ar' ? 'تصميم المواقع الإلكترونية' : 'Styling websites', icon: '🎨', color: '#1572B6', path: '/css' },
    { title: 'PHP', desc: lang === 'so' ? 'Backend-ka websaydhyada' : lang === 'ar' ? 'خلفية المواقع الإلكترونية' : 'Website backends', icon: '🐘', color: '#777BB4', path: '/php' },
    { title: 'R', desc: lang === 'so' ? 'Falanqaynta xogta iyo istaatistigga' : lang === 'ar' ? 'تحليل البيانات والإحصاء' : 'Data analysis and statistics', icon: '📊', color: '#276DC3', path: '/r' },
    { title: 'Java', desc: lang === 'so' ? 'Barnaamij-sameynta Android' : lang === 'ar' ? 'برمجة تطبيقات Android' : 'Android programming', icon: '☕', color: '#ED8B00', path: '/java' },
    { title: 'C++', desc: lang === 'so' ? 'Barnaamij-sameynta xawaaraga sare' : lang === 'ar' ? 'البرمجة عالية الأداء' : 'High-performance programming', icon: '⚙️', color: '#00599C', path: '/cpp' },
    { title: 'SQL', desc: lang === 'so' ? 'Database-yada iyo xogta maareynta' : lang === 'ar' ? 'قواعد البيانات وإدارة البيانات' : 'Databases and data management', icon: '🗄️', color: '#4479A1', path: '/sql' },
  ]

  return (
    <div style={{ background: COLORS.sand }}>
      {/* Hero, framed like the homepage */}
      <div style={{ background: COLORS.ink, padding: '28px 6vw' }}>
        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }}>
          <CornerMark corner="tl" />
          <CornerMark corner="tr" />
          <CornerMark corner="bl" />
          <CornerMark corner="br" />
          <div style={{
            border: `1px solid rgba(200,155,60,0.5)`, padding: '56px 6vw',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>💻</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", color: COLORS.sand,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, marginBottom: 16,
            }}>{t.techTitle}</h1>
            <p style={{ color: 'rgba(246,241,228,0.8)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              {t.techDesc}
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#E2D9C8',
            border: '1px solid #E2D9C8',
          }}
            className="tech-grid"
          >
            {languages.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '32px 26px',
                  borderTop: `3px solid ${item.color}`,
                  transition: 'background 0.25s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.sand }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'white' }}
                onClick={() => navigate(item.path)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '0.8rem', color: COLORS.gold, fontWeight: 600 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: COLORS.ink,
                  marginBottom: '10px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: COLORS.slate,
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />

      <style>{`
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}