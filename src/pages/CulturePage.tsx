import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function CulturePage() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

 const topics = [
  {
    title: t.culture.proverbs,
    desc: t.culture.proverbsDesc,
    icon: '💬',
    gradient: 'linear-gradient(135deg, #7C5817, #E8B14B)',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: t.culture.wisdom,
    desc: t.culture.wisdomDesc,
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
    image: 'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: t.culture.poetry,
    desc: t.culture.poetryDesc,
    icon: '📜',
    gradient: 'linear-gradient(135deg, #3E4642, #6B7872)',
    image: 'https://images.pexels.com/photos/1762821/pexels-photo-1762821.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: t.culture.songs,
    desc: t.culture.songsDesc,
    icon: '🎵',
    gradient: 'linear-gradient(135deg, #A8781F, #E8B14B)',
    image: 'https://images.pexels.com/photos/4754019/pexels-photo-4754019.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: lang === 'so' ? 'Sheekooyinka' : lang === 'ar' ? 'القصص' : 'Stories',
    desc: lang === 'so' ? 'Sheekooyin dhab ah oo taaban, oo ka hadlaya nolosha iyo badalka.' : lang === 'ar' ? 'قصص واقعية مؤثرة تتحدث عن الحياة والتغيير.' : 'Real, moving stories about life and transformation.',
    icon: '📖',
    gradient: 'linear-gradient(135deg, #3E4642, #1A1D1B)',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: lang === 'so' ? 'Baro Dalkaada' : lang === 'ar' ? 'تعرف على بلدك' : 'Learn Your Country',
    desc: lang === 'so' ? 'Gobollada Soomaaliya iyo degmooyinka ka tirsan — aqoonso dhulkaaga.' : lang === 'ar' ? 'مناطق الصومال ومقاطعاتها.' : "Somalia's regions and their districts.",
    icon: '🇸🇴',
    gradient: 'linear-gradient(135deg, #0F4C3A, #7C5817)',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #7C5817 0%, #2A1D08 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📜</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.culture.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.culture.subtitle}
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
            className="culture-grid"
          >
            {topics.map((topic, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
                  transition: 'all 0.4s',
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                  cursor: (i === 0 || i === 1) ? 'pointer' : 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.16)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
                }}
                onClick={() => {
                   if (i === 0) navigate('/maahmaah')
                   if (i === 1) navigate('/xikmad')
                   if (i === 3) navigate('/heeso')
                   if (i === 4) navigate('/sheeko')
                   if (i === 5) navigate('/baro-dalkaaga')
                }}
              >
                <div style={{
                  height: '200px',
                  background: topic.gradient,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.7,
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '4rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  }}>
                    {topic.icon}
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0F4C3A',
                    marginBottom: '12px',
                  }}>
                    {topic.title}
                  </h3>
                  <p style={{
                    color: '#525C57',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  }}>
                    {topic.desc}
                  </p>
                </div>
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