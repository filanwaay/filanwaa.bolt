interface AdBannerProps {
  slot?: string
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  style?: React.CSSProperties
}

export function AdBanner({ slot = '1234567890', format = 'auto', style }: AdBannerProps) {
  return (
    <div style={{
      margin: '40px auto',
      maxWidth: '1000px',
      padding: '0 24px',
      ...style,
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #F8FAF9 0%, #EEF2F0 100%)',
        border: '1px dashed #B5C0BB',
        borderRadius: '12px',
        minHeight: format === 'vertical' ? '600px' : '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8A9892',
        fontSize: '0.85rem',
        textAlign: 'center',
        padding: '20px',
      }}>
        <div>
          <p style={{ fontWeight: 600, marginBottom: '4px' }}>Google AdSense</p>
          <p style={{ fontSize: '0.75rem' }}>Advertisement</p>
        </div>
      </div>
    </div>
  )
}
