import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

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

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)',
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
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✉️</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.contact.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 12px 32px rgba(15,76,58,0.08)',
          }}>
            {isSuccess && (
              <div style={{
                padding: '16px 20px',
                borderRadius: '12px',
                background: '#E8F5F0',
                border: '1px solid #2E8B5C',
                color: '#0F4C3A',
                fontSize: '0.95rem',
                marginBottom: '24px',
                animation: 'fadeIn 0.3s ease-out',
              }}>
                ✓ {t.contact.success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}
                className="form-grid"
              >
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#3E4642',
                    marginBottom: '8px',
                  }}>
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D8DFDB',
                      background: '#F8FAF9',
                      fontSize: '1rem',
                      color: '#1A1F1C',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'all 0.2s',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#3E4642',
                    marginBottom: '8px',
                  }}>
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D8DFDB',
                      background: '#F8FAF9',
                      fontSize: '1rem',
                      color: '#1A1F1C',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'all 0.2s',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#3E4642',
                  marginBottom: '8px',
                }}>
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D8DFDB',
                    background: '#F8FAF9',
                    fontSize: '1rem',
                    color: '#1A1F1C',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#3E4642',
                  marginBottom: '8px',
                }}>
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D8DFDB',
                    background: '#F8FAF9',
                    fontSize: '1rem',
                    color: '#1A1F1C',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'all 0.2s',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s',
                  boxShadow: '0 12px 32px rgba(15,76,58,0.3)',
                  opacity: isSending ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSending) e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {isSending ? `⏳ ${t.contact.sending}` : `➤ ${t.contact.send}`}
              </button>
            </form>

            {/* Email */}
            <div style={{
              marginTop: '40px',
              paddingTop: '32px',
              borderTop: '1px solid #D8DFDB',
              textAlign: 'center',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 28px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #E8F5F0, #F8FAF9)',
                border: '1px solid #C8E6D5',
                marginBottom: '32px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <a
                  href="mailto:filanwaa@gmail.com"
                  style={{
                    color: '#0F4C3A',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#E8B14B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0F4C3A'}
                >
                  filanwaa@gmail.com
                </a>
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0F4C3A', marginBottom: '20px' }}>
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
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#F8FAF9',
                      border: '1px solid #D8DFDB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: social.color,
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.borderColor = social.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F8FAF9'
                      e.currentTarget.style.color = social.color
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.borderColor = '#D8DFDB'
                    }}
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
    </div>
  )
}
