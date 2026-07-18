import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function CountryPage() {
  const { lang } = useLanguage()

  const labels = {
    so: { title: 'Baro Dalkaada', subtitle: 'Gobollada Soomaaliya iyo degmooyinka ka tirsan — aqoonso dhulkaaga.', capital: 'Caasimadda', districts: 'Degmooyinka' },
    en: { title: 'Learn Your Country', subtitle: "Somalia's regions and their districts — know your land.", capital: 'Capital', districts: 'Districts' },
    ar: { title: 'تعرف على بلدك', subtitle: 'مناطق الصومال ومقاطعاتها - تعرّف على أرضك.', capital: 'العاصمة', districts: 'المقاطعات' },
  }

  const regions = [
    { name: 'Banaadir', capital: 'Muqdisho', districts: ['Cabdi Casiis', 'Boondheere', 'Xamar Jajab', 'Xamar Weyne', 'Hawl Wadaag', 'Heliwaa', 'Hodan', 'Kaaraan', 'Shangaani', 'Shibis', 'Waaberi', 'Wada Jir', 'Wardhiigley', 'Yaaqshiid', 'Dharkeynley', 'Kaxda', 'Daaru-salaam'] },
    { name: 'Woqooyi Galbeed', capital: 'Hargeysa', districts: ['Dacar Budhuq', 'Berbera', 'Gebiley'] },
    { name: 'Awdal', capital: 'Boorame', districts: ['Lughaya', 'Saylac', 'Baki'] },
    { name: 'Bari', capital: 'Boosaaso', districts: ['Caluula', 'Badarbeyla', 'Rako', 'Ufeyn', 'Waaciye', 'Qandala', 'Qardho', 'Xaafuun', 'Iskushuban'] },
    { name: 'Togdheer', capital: 'Burco', districts: ['Buuhoodle', 'Sheekh', 'Oodweyne'] },
    { name: 'Sool', capital: 'Laascaanood', districts: ['Caynabo', 'Xudun', 'Taleex'] },
    { name: 'Galguduud', capital: 'Dhuusamareeb', districts: ['Cadaado', 'Ceelbuur', 'Ceeldheere', 'Caabudwaaq'] },
    { name: 'Hiiraan', capital: 'Beledweyne', districts: ['Buulobarde', 'Jalalaqsi', 'Maxaas', 'Mataban'] },
    { name: 'Gedo', capital: 'Garbahaarey', districts: ['Baardheere', 'Beledxaawo', 'Doolow', 'Ceelwaaq', 'Luuq'] },
    { name: 'Mudug', capital: 'Gaalkacyo', districts: ['Galdogob', 'Xaradheere', 'Hobyo', 'Jiriiban'] },
    { name: 'Shabeellaha Dhexe', capital: 'Jowhar', districts: ['Balcad', 'Mahaday', 'Cadale', 'Aadan Yabaal', 'Warsheekh', 'Runirgood'] },
    { name: 'Shabeellaha Hoose', capital: 'Marka', districts: ['Afgooye', 'Aw-Dheegle', 'Baraawe', 'Kuntiwaarey', 'Qoryooley', 'Sablaale'] },
    { name: 'Bay', capital: 'Baydhabo', districts: ['Buur-Hakaba', 'Diinsoor', 'Qansaxdheere', 'Bardaale'] },
    { name: 'Bakool', capital: 'Xudur', districts: ['Ceelbarde', 'Rabdhure', 'Tiyeglow', 'Biyooley'] },
    { name: 'Jubbada Dhexe', capital: "Bu'aale", districts: ['Dujuma', 'Jilib', 'Saakow'] },
    { name: 'Sanaag', capital: 'Ceerigaabo', districts: ['Ceel Afweyn', 'Laasqoray', 'Badhan'] },
    { name: 'Jubbada Hoose', capital: 'Kismaayo', districts: ['Afmadow', 'Badhaadhe', 'Xagar', 'Jamaame'] },
    { name: 'Nugaal', capital: 'Garoowe', districts: ['Dangorayo', 'Ayl', 'Burtinle'] },
  ]

  const l = labels[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🇸🇴</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>{l.subtitle}</p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {regions.map((region, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,76,58,0.14)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  background: '#E8F5F0',
                  color: '#0F4C3A',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}>
                  {l.capital}: {region.capital}
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '12px' }}>
                  {region.name}
                </h2>
                <p style={{ color: '#8A7A3F', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                  {l.districts}:
                </p>
                <p style={{ color: '#525C57', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  {region.districts.join(' • ')}
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