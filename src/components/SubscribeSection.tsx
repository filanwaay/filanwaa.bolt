export function SubscribeSection() {
  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#0B3D2E', textAlign: 'center' }}>
      <h2 style={{ color: '#D4A537', fontSize: '1.8rem', marginBottom: '12px' }}>Subscribe</h2>
      <p style={{ color: '#F5EDE0', marginBottom: '16px' }}>YouTube: @filanwaa</p>
      <a
        href="https://youtube.com/@filanwaa"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: '#D4A537',
          color: '#06251C',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Subscribe Now
      </a>
    </section>
  )
}