import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function SongsPage() {
  const { lang } = useLanguage()

  const songs: { title: string; file: string }[] = [
    { title: 'Afrikaay Haseexan', file: 'afrikaay-haseexan.mp3' },
    { title: 'Allahu Akbar', file: 'allahu-akbar.mp3' },
    { title: 'Ayaamaha Ilaahay', file: 'ayaamaha-ilaahay.mp3' },
    { title: 'Balanteenu Waa Shaqo', file: 'balanteenu-waa-shaqo.mp3' },
    { title: 'Calool Baahaney', file: 'calool-baahaney.mp3' },
    { title: 'Dadkaagaa Dhinac Karaac', file: 'dadkaagaa-dhinac-karaac.mp3' },
    { title: 'Darajo Iyo Xil Yaa Mudan', file: 'darajo-iyo-xil-yaa-mudan.mp3' },
    { title: 'Dawladnimo', file: 'dawladnimo.mp3' },
    { title: 'Dhalinyahy Dhamaanteen', file: 'dhalinyahy-dhamaanteen.mp3' },
    { title: 'Erya Erya', file: 'erya-erya.mp3' },
    { title: 'Guusha Iyagaa Leh', file: 'guusha-iyagaa-leh.mp3' },
    { title: 'Wadaniga halgamayoow', file: 'heeso-kala-duwan.mp3' },
    { title: 'Halay Helo Aan Habaabo', file: 'halay-helo-aan-habaabo.mp3' },
    { title: 'Hawlaha Arlada', file: 'hawlaha-arlada.mp3' },
    { title: 'Heesta Badda (Remix)', file: 'heesta-badda-remix.mp3' },
    { title: 'Ilays', file: 'ilays.mp3' },
    { title: 'Inuu Yahay Askari Sow Lama Oga', file: 'inuu-yahay-askari-sow-lama-oga.mp3' },
    { title: 'Kol Hadaan Hantiyey', file: 'kol-hadaan-hantiyey.mp3' },
    { title: 'Maan Gaab Inuu Yahay Sow Lama Oga', file: 'maan-gaab-inuu-yahay-sow-lama-oga.mp3' },
    { title: 'Maskax Gaabanaa', file: 'maskax-gaabanaa.mp3' },
    { title: 'Maxaad Taqaan', file: 'maxaad-taqaan.mp3' },
    { title: 'Midnimo U Adeeg', file: 'midnimo-u-adeeg.mp3' },
    { title: 'Muraqiina Maalooo', file: 'muraqiina-maalooo.mp3' },
    { title: 'Soomaali Baan Ahay', file: 'soomaali-baan-ahay.mp3' },
    { title: 'Talisku Nugulee', file: 'talisku-nugulee.mp3' },
    { title: 'Waa Loo Dhashaa Wadani', file: 'waa-loo-dhashaa-wadani.mp3' },
    { title: 'Wacad Baa Inoo Yaala', file: 'wacad-baa-inoo-yaala.mp3' },
    { title: 'Waxaa Hoog Leh', file: 'waxaa-hoog-leh.mp3' },
    { title: 'Waxbarta Aan Barwaaqo Gaarnee', file: 'waxbarta-aan-barwaaqo-gaarnee.mp3' },
    { title: 'Aduunkaan Isdaba Maray', file: 'aduunkaan-isdaba-maray.mp3' },
    { title: 'Alif La Kordhabay', file: 'akif-la-kordhabay.mp3' },
    { title: 'Dhukayagu Sabool Maahan', file: 'dhukayagu-sabool-maahan.mp3' },
    { title: 'Durduro Geel Baa Ku Jabo', file: 'durduro-geel-baa-ku-jabo.mp3' },
    { title: 'Ha Ina Baxo Hobolada Waabari', file: 'ha-ina-baxo-hobolada-waabari.mp3' },
    { title: 'Hoheey Afrikaay Hurudooy', file: 'hoheey-afrikaay-hurudooy.mp3' },
    { title: 'Ishii Buktaay Ku Bikacso', file: 'ishii-buktaay-ku-bikacso.mp3' },
    { title: 'Maad Naga Tagtaan Nama Taqaaniine', file: 'maad-naga-tagtaan-nama-taqaaniine.mp3' },
    { title: 'Shinbirayahoow Heesa', file: 'shinbirayahoow-heesa.mp3' },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #A8781F 0%, #4A3608 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎵</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Heesaha Wadaniga' : lang === 'ar' ? 'الأغاني الوطنية' : 'National Songs'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Ururin heeso wadaniga ah oo Soomaaliyeed, xuska dhaqanka iyo taariikhda.'
              : lang === 'ar'
              ? 'مجموعة من الأغاني الوطنية الصومالية، احتفاءً بالتراث والتاريخ.'
              : 'A collection of Somali national songs, celebrating heritage and history.'}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
            {songs.map((song, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px 24px',
                boxShadow: '0 4px 12px rgba(15,76,58,0.06)',
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F4C3A',
                  marginBottom: '12px',
                }}>
                  {i + 1}. {song.title}
                </p>
                <audio controls style={{ width: '100%' }}>
                  <source src={`/audio/heeso/${song.file}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
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