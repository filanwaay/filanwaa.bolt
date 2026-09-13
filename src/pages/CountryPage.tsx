import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { PageHero } from '../components/PageHero'

const COLORS = { gold: '#C89B3C', sand: '#F6F1E4', ink: '#12211B', slate: '#4A554E' }

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
    <div style={{ background: COLORS.sand }}>
      <PageHero icon="🇸🇴" title={l.title} subtitle={l.subtitle} />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: '#E2D9C8', border: '1px solid #E2D9C8' }}>
            {regions.map((region, i) => (
              <div key={i} style={{ background: 'white', padding: '28px', borderTop: `3px solid ${COLORS.gold}` }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px', borderRadius: 20,
                  background: 'rgba(200,155,60,0.1)',
                  color: COLORS.gold,
                  fontSize: '0.75rem', fontWeight: 700,
                  marginBottom: '12px',
                }}>
                  {l.capital}: {region.capital}
                </div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 700, color: COLORS.ink, marginBottom: '12px' }}>
                  {region.name}
                </h2>
                <p style={{ color: COLORS.slate, fontSize: '0.78rem', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {l.districts}
                </p>
                <p style={{ color: COLORS.slate, fontSize: '0.92rem', lineHeight: 1.7 }}>
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
