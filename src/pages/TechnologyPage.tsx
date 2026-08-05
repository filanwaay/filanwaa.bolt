import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function TechnologyPage() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

  const languages = [
    { title: 'Python', desc: lang === 'so' ? 'Luqadda ugu fudud ee la bilaabo' : lang === 'ar' ? 'أسهل لغة للبدء بها' : 'The easiest language to start with', icon: '🐍', color: '#3776AB', bg: '#E8F5F0' },
    { title: 'HTML', desc: lang === 'so' ? 'Qaab-dhismeedka websaydhyada' : lang === 'ar' ? 'هيكل المواقع الإلكترونية' : 'The structure of websites', icon: '🌐', color: '#E34F26', bg: '#FEF6E6' },
    { title: 'CSS', desc: lang === 'so' ? 'Naqshadaynta websaydhyada' : lang === 'ar' ? 'تصميم المواقع الإلكترونية' : 'Styling websites', icon: '🎨', color: '#1572B6', bg: '#E8F5F0' },
    { title: 'PHP', desc: lang === 'so' ? 'Backend-ka websaydhyada' : lang === 'ar' ? 'خلفية المواقع الإلكترونية' : 'Website backends', icon: '🐘', color: '#777BB4', bg: '#EEF2F0' },
    { title: 'R', desc: lang === 'so' ? 'Falanqaynta xogta iyo istaatistigga' : lang === 'ar' ? 'تحليل البيانات والإحصاء' : 'Data analysis and statistics', icon: '📊', color: '#276DC3', bg: '#E8F5F0' },
    { title: 'Java', desc: lang === 'so' ? 'Barnaamij-sameynta Android' : lang === 'ar' ? 'برمجة تطبيقات Android' : 'Android programming', icon: '☕', color: '#ED8B00', bg: '#FEF6E6' },
    { title: 'C++', desc: lang === 'so' ? 'Barnaamij-sameynta xawaaraga sare' : lang === 'ar' ? 'البرمجة عالية الأداء' : 'High-performance programming', icon: '⚙️', color: '#00599C', bg: '#E8F5F0' },
    { title: 'SQL', desc: lang === 'so' ? 'Database-yada iyo xogta maareynta' : lang === 'ar' ? 'قواعد البيانات وإدارة البيانات' : 'Databases and data management', icon: '🗄️', color: '#4479A1', bg: '#EEF2F0' },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
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
            {t.techTitle}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.techDesc}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
            className="tech-grid"
          >
            {languages.map((item, i) => (
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
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.16)'
                  e.currentTarget.style.borderColor = item.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.06)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                onClick={() => {
                  if (i === 0) navigate('/python')
                  if (i === 1) navigate('/html')
                  if (i === 2) navigate('/css')
                  if (i === 3) navigate('/php')
                  if (i === 4) navigate('/r')
                  if (i === 5) navigate('/java')
                  if (i === 6) navigate('/cpp')
                  if (i === 7) navigate('/sql')
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '20px',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: item.color,
                  marginBottom: '12px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#525C57',
                  fontSize: '0.9rem',
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
    </div>
  )
}