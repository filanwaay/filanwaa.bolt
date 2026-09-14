import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { PageHero } from '../components/PageHero'

const COLORS = { deep: '#0B3D2E', gold: '#C89B3C', sand: '#F6F1E4', ink: '#12211B', slate: '#4A554E' }

export function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSending(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@filanwaa', icon: '▶', color: '#FF0000' },
    { name: 'Instagram', url: 'https://instagram.com/filanwaa', icon: '📷', color: '#E4405F' },
    { name: 'Facebook', url: 'https://facebook.com/filanwaaa', icon: 'f', color: '#1877F2' },
    { name: 'Twitter', url: 'https://twitter.com/filanwaay', icon: '𝕏', color: '#1DA1F2' },
  ]

  const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: '4px',
    border: '1px solid #E2D9C8', background: COLORS.sand,
    fontSize: '1rem', color: COLORS.ink, fontFamily: 'inherit',
    outline: 'none', transition: 'all 0.2s',
  }

  return (
    <div style={{ background: COLORS.sand }}>
      <PageHero icon="✉️" title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', background: 'white', padding: '48px', border: '1px solid #E2D9C8' }}>
            {isSuccess && (
              <div style={{
                padding: '14px 20px', background: 'rgba(200,155,60,0.1)',
                border: `1px solid ${COLORS.gold}`, color: COLORS.deep,
                fontSize: '0.95rem', marginBottom: '24px',
              }}>
                ✓ {t.contact.success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: COLORS.ink, marginBottom: '8px' }}>{t.contact.name}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = COLORS.gold}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2D9C8'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: COLORS.ink, marginBottom: '8px' }}>{t.contact.email}</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = COLORS.gold}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2D9C8'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: COLORS.ink, marginBottom: '8px' }}>{t.contact.subject}</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = COLORS.gold}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2D9C8'}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: COLORS.ink, marginBottom: '8px' }}>{t.contact.message}</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = COLORS.gold}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2D9C8'}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                style={{
                  width: '100%', padding: '17px', background: COLORS.deep,
                  color: 'white', fontSize: '1.05rem', fontWeight: 700,
                  transition: 'all 0.3s', opacity: isSending ? 0.7 : 1, border: 'none',
                }}
                onMouseEnter={(e) => { if (!isSending) e.currentTarget.style.background = COLORS.gold }}
                onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.deep }}
              >
                {isSending ? `⏳ ${t.contact.sending}` : `➤ ${t.contact.send}`}
              </button>
            </form>

            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #E2D9C8', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                padding: '14px 26px', background: COLORS.sand,
                border: `1px solid ${COLORS.gold}`, marginBottom: '32px',
              }}>
                <span style={{ fontSize: '1.4rem' }}>✉️</span>
                <a href="mailto:filanwaa@gmail.com" style={{ color: COLORS.deep, fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none' }}>
                  filanwaa@gmail.com
                </a>
              </div>

              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700, color: COLORS.ink, marginBottom: '20px' }}>
                {t.contact.followUs}
              </h3>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '46px', height: '46px', background: COLORS.sand,
                      border: '1px solid #E2D9C8', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700,
                      color: social.color, transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = social.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.sand; e.currentTarget.style.color = social.color; e.currentTarget.style.transform = 'translateY(0)' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />

      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}