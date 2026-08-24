import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

interface Surah {
  number: number
  name: string
  arabicName: string
  ayahs: number
}

const SURAHS: Surah[] = [
  { number: 1, name: 'Al-Fatiha', arabicName: 'الفاتحة', ayahs: 7 },
  { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', ayahs: 286 },
  { number: 3, name: 'Aal-E-Imran', arabicName: 'آل عمران', ayahs: 200 },
  { number: 4, name: 'An-Nisa', arabicName: 'النساء', ayahs: 176 },
  { number: 5, name: 'Al-Maidah', arabicName: 'المائدة', ayahs: 120 },
  { number: 6, name: 'Al-Anam', arabicName: 'الأنعام', ayahs: 165 },
  { number: 7, name: 'Al-Araf', arabicName: 'الأعراف', ayahs: 206 },
  { number: 8, name: 'Al-Anfal', arabicName: 'الأنفال', ayahs: 75 },
  { number: 9, name: 'At-Tawbah', arabicName: 'التوبة', ayahs: 129 },
  { number: 10, name: 'Yunus', arabicName: 'يونس', ayahs: 109 },
  { number: 11, name: 'Hud', arabicName: 'هود', ayahs: 123 },
  { number: 12, name: 'Yusuf', arabicName: 'يوسف', ayahs: 111 },
  { number: 13, name: 'Ar-Rad', arabicName: 'الرعد', ayahs: 43 },
  { number: 14, name: 'Ibrahim', arabicName: 'إبراهيم', ayahs: 52 },
  { number: 15, name: 'Al-Hijr', arabicName: 'الحجر', ayahs: 99 },
  { number: 16, name: 'An-Nahl', arabicName: 'النحل', ayahs: 128 },
  { number: 17, name: 'Al-Isra', arabicName: 'الإسراء', ayahs: 111 },
  { number: 18, name: 'Al-Kahf', arabicName: 'الكهف', ayahs: 110 },
  { number: 19, name: 'Maryam', arabicName: 'مريم', ayahs: 98 },
  { number: 20, name: 'Ta-Ha', arabicName: 'طه', ayahs: 135 },
  { number: 21, name: 'Al-Anbiya', arabicName: 'الأنبياء', ayahs: 112 },
  { number: 22, name: 'Al-Hajj', arabicName: 'الحج', ayahs: 78 },
  { number: 23, name: 'Al-Muminun', arabicName: 'المؤمنون', ayahs: 118 },
  { number: 24, name: 'An-Nur', arabicName: 'النور', ayahs: 64 },
  { number: 25, name: 'Al-Furqan', arabicName: 'الفرقان', ayahs: 77 },
  { number: 26, name: 'Ash-Shuara', arabicName: 'الشعراء', ayahs: 227 },
  { number: 27, name: 'An-Naml', arabicName: 'النمل', ayahs: 93 },
  { number: 28, name: 'Al-Qasas', arabicName: 'القصص', ayahs: 88 },
  { number: 29, name: 'Al-Ankabut', arabicName: 'العنكبوت', ayahs: 69 },
  { number: 30, name: 'Ar-Rum', arabicName: 'الروم', ayahs: 60 },
  { number: 31, name: 'Luqman', arabicName: 'لقمان', ayahs: 34 },
  { number: 32, name: 'As-Sajdah', arabicName: 'السجدة', ayahs: 30 },
  { number: 33, name: 'Al-Ahzab', arabicName: 'الأحزاب', ayahs: 73 },
  { number: 34, name: 'Saba', arabicName: 'سبأ', ayahs: 54 },
  { number: 35, name: 'Fatir', arabicName: 'فاطر', ayahs: 45 },
  { number: 36, name: 'Ya-Sin', arabicName: 'يس', ayahs: 83 },
  { number: 37, name: 'As-Saffat', arabicName: 'الصافات', ayahs: 182 },
  { number: 38, name: 'Sad', arabicName: 'ص', ayahs: 88 },
  { number: 39, name: 'Az-Zumar', arabicName: 'الزمر', ayahs: 75 },
  { number: 40, name: 'Ghafir', arabicName: 'غافر', ayahs: 85 },
  { number: 41, name: 'Fussilat', arabicName: 'فصلت', ayahs: 54 },
  { number: 42, name: 'Ash-Shura', arabicName: 'الشورى', ayahs: 53 },
  { number: 43, name: 'Az-Zukhruf', arabicName: 'الزخرف', ayahs: 89 },
  { number: 44, name: 'Ad-Dukhan', arabicName: 'الدخان', ayahs: 59 },
  { number: 45, name: 'Al-Jathiyah', arabicName: 'الجاثية', ayahs: 37 },
  { number: 46, name: 'Al-Ahqaf', arabicName: 'الأحقاف', ayahs: 35 },
  { number: 47, name: 'Muhammad', arabicName: 'محمد', ayahs: 38 },
  { number: 48, name: 'Al-Fath', arabicName: 'الفتح', ayahs: 29 },
  { number: 49, name: 'Al-Hujurat', arabicName: 'الحجرات', ayahs: 18 },
  { number: 50, name: 'Qaf', arabicName: 'ق', ayahs: 45 },
  { number: 51, name: 'Adh-Dhariyat', arabicName: 'الذاريات', ayahs: 60 },
  { number: 52, name: 'At-Tur', arabicName: 'الطور', ayahs: 49 },
  { number: 53, name: 'An-Najm', arabicName: 'النجم', ayahs: 62 },
  { number: 54, name: 'Al-Qamar', arabicName: 'القمر', ayahs: 55 },
  { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', ayahs: 78 },
  { number: 56, name: 'Al-Waqiah', arabicName: 'الواقعة', ayahs: 96 },
  { number: 57, name: 'Al-Hadid', arabicName: 'الحديد', ayahs: 29 },
  { number: 58, name: 'Al-Mujadila', arabicName: 'المجادلة', ayahs: 22 },
  { number: 59, name: 'Al-Hashr', arabicName: 'الحشر', ayahs: 24 },
  { number: 60, name: 'Al-Mumtahanah', arabicName: 'الممتحنة', ayahs: 13 },
  { number: 61, name: 'As-Saff', arabicName: 'الصف', ayahs: 14 },
  { number: 62, name: 'Al-Jumuah', arabicName: 'الجمعة', ayahs: 11 },
  { number: 63, name: 'Al-Munafiqun', arabicName: 'المنافقون', ayahs: 11 },
  { number: 64, name: 'At-Taghabun', arabicName: 'التغابن', ayahs: 18 },
  { number: 65, name: 'At-Talaq', arabicName: 'الطلاق', ayahs: 12 },
  { number: 66, name: 'At-Tahrim', arabicName: 'التحريم', ayahs: 12 },
  { number: 67, name: 'Al-Mulk', arabicName: 'الملك', ayahs: 30 },
  { number: 68, name: 'Al-Qalam', arabicName: 'القلم', ayahs: 52 },
  { number: 69, name: 'Al-Haqqah', arabicName: 'الحاقة', ayahs: 52 },
  { number: 70, name: 'Al-Maarij', arabicName: 'المعارج', ayahs: 44 },
  { number: 71, name: 'Nuh', arabicName: 'نوح', ayahs: 28 },
  { number: 72, name: 'Al-Jinn', arabicName: 'الجن', ayahs: 28 },
  { number: 73, name: 'Al-Muzzammil', arabicName: 'المزمل', ayahs: 20 },
  { number: 74, name: 'Al-Muddaththir', arabicName: 'المدثر', ayahs: 56 },
  { number: 75, name: 'Al-Qiyamah', arabicName: 'القيامة', ayahs: 40 },
  { number: 76, name: 'Al-Insan', arabicName: 'الإنسان', ayahs: 31 },
  { number: 77, name: 'Al-Mursalat', arabicName: 'المرسلات', ayahs: 50 },
  { number: 78, name: 'An-Naba', arabicName: 'النبأ', ayahs: 40 },
  { number: 79, name: 'An-Naziat', arabicName: 'النازعات', ayahs: 46 },
  { number: 80, name: 'Abasa', arabicName: 'عبس', ayahs: 42 },
  { number: 81, name: 'At-Takwir', arabicName: 'التكوير', ayahs: 29 },
  { number: 82, name: 'Al-Infitar', arabicName: 'الانفطار', ayahs: 19 },
  { number: 83, name: 'Al-Mutaffifin', arabicName: 'المطففين', ayahs: 36 },
  { number: 84, name: 'Al-Inshiqaq', arabicName: 'الانشقاق', ayahs: 25 },
  { number: 85, name: 'Al-Buruj', arabicName: 'البروج', ayahs: 22 },
  { number: 86, name: 'At-Tariq', arabicName: 'الطارق', ayahs: 17 },
  { number: 87, name: 'Al-Ala', arabicName: 'الأعلى', ayahs: 19 },
  { number: 88, name: 'Al-Ghashiyah', arabicName: 'الغاشية', ayahs: 26 },
  { number: 89, name: 'Al-Fajr', arabicName: 'الفجر', ayahs: 30 },
  { number: 90, name: 'Al-Balad', arabicName: 'البلد', ayahs: 20 },
  { number: 91, name: 'Ash-Shams', arabicName: 'الشمس', ayahs: 15 },
  { number: 92, name: 'Al-Layl', arabicName: 'الليل', ayahs: 21 },
  { number: 93, name: 'Ad-Duha', arabicName: 'الضحى', ayahs: 11 },
  { number: 94, name: 'Ash-Sharh', arabicName: 'الشرح', ayahs: 8 },
  { number: 95, name: 'At-Tin', arabicName: 'التين', ayahs: 8 },
  { number: 96, name: 'Al-Alaq', arabicName: 'العلق', ayahs: 19 },
  { number: 97, name: 'Al-Qadr', arabicName: 'القدر', ayahs: 5 },
  { number: 98, name: 'Al-Bayyinah', arabicName: 'البينة', ayahs: 8 },
  { number: 99, name: 'Az-Zalzalah', arabicName: 'الزلزلة', ayahs: 8 },
  { number: 100, name: 'Al-Adiyat', arabicName: 'العاديات', ayahs: 11 },
  { number: 101, name: 'Al-Qariah', arabicName: 'القارعة', ayahs: 11 },
  { number: 102, name: 'At-Takathur', arabicName: 'التكاثر', ayahs: 8 },
  { number: 103, name: 'Al-Asr', arabicName: 'العصر', ayahs: 3 },
  { number: 104, name: 'Al-Humazah', arabicName: 'الهمزة', ayahs: 9 },
  { number: 105, name: 'Al-Fil', arabicName: 'الفيل', ayahs: 5 },
  { number: 106, name: 'Quraysh', arabicName: 'قريش', ayahs: 4 },
  { number: 107, name: 'Al-Maun', arabicName: 'الماعون', ayahs: 7 },
  { number: 108, name: 'Al-Kawthar', arabicName: 'الكوثر', ayahs: 3 },
  { number: 109, name: 'Al-Kafirun', arabicName: 'الكافرون', ayahs: 6 },
  { number: 110, name: 'An-Nasr', arabicName: 'النصر', ayahs: 3 },
  { number: 111, name: 'Al-Masad', arabicName: 'المسد', ayahs: 5 },
  { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', ayahs: 4 },
  { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', ayahs: 5 },
  { number: 114, name: 'An-Nas', arabicName: 'الناس', ayahs: 6 },
]

const RECITERS = [
  { id: 'afs', name: 'Mishary Rashid Alafasy', arabicName: 'مشاري راشد العفاسي', server: 'https://server8.mp3quran.net/afs/' },
  { id: 'sds', name: 'Abdurrahmaan As-Sudais', arabicName: 'عبد الرحمن السديس', server: 'https://server11.mp3quran.net/sds/' },
  { id: 'maher', name: 'Maher Al Muaiqly', arabicName: 'ماهر المعيقلي', server: 'https://server12.mp3quran.net/maher/' },
  { id: 'abdulbasit', name: 'Abdul Basit (Murattal)', arabicName: 'عبد الباسط (مرتل)', server: 'https://server7.mp3quran.net/basit/' },
]

export function QuranPage() {
  const { t } = useLanguage()
  const [selectedSurah, setSelectedSurah] = useState<Surah>(SURAHS[0])
  const [selectedReciter, setSelectedReciter] = useState(RECITERS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const audioUrl = `${selectedReciter.server}${String(selectedSurah.number).padStart(3, '0')}.mp3`

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      setIsPlaying(false)
    }
  }, [selectedSurah, selectedReciter])

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      setIsLoading(true)
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        console.error('Audio error:', err)
      }
      setIsLoading(false)
    }
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #082E23 100%)',
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
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📖</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.quran.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.quran.subtitle}
          </p>
        </div>
      </section>

      {/* Player */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(15,76,58,0.12)',
          }}>
            {/* Now Playing */}
            <div style={{
              background: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-10%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,177,75,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                border: '2px solid rgba(232,177,75,0.3)',
                position: 'relative',
              }}>
                📖
                {isPlaying && (
                  <div style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: '2px solid rgba(232,177,75,0.5)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                )}
              </div>
              <p style={{
                fontFamily: 'Amiri, serif',
                fontSize: '2.5rem',
                color: '#E8B14B',
                marginBottom: '8px',
                fontWeight: 700,
              }}>
                {selectedSurah.arabicName}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                {selectedSurah.name} • {selectedSurah.ayahs} Ayahs
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginTop: '8px' }}>
                {selectedReciter.name}
              </p>
            </div>

            {/* Controls */}
            <div style={{ padding: '32px 48px' }}>
              {/* Surah Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#3E4642',
                  marginBottom: '10px',
                }}>
                  {t.quran.selectSurah}
                </label>
                <select
                  value={selectedSurah.number}
                  onChange={(e) => {
                    const surah = SURAHS.find(s => s.number === parseInt(e.target.value))
                    if (surah) setSelectedSurah(surah)
                  }}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D8DFDB',
                    background: '#F8FAF9',
                    fontSize: '1rem',
                    color: '#1A1F1C',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                >
                  {SURAHS.map((surah) => (
                    <option key={surah.number} value={surah.number}>
                      {surah.number}. {surah.name} — {surah.arabicName} ({surah.ayahs})
                    </option>
                  ))}
                </select>
              </div>

              {/* Reciter Selector */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#3E4642',
                  marginBottom: '10px',
                }}>
                  {t.quran.selectReciter}
                </label>
                <select
                  value={selectedReciter.id}
                  onChange={(e) => {
                    const reciter = RECITERS.find(r => r.id === e.target.value)
                    if (reciter) setSelectedReciter(reciter)
                  }}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D8DFDB',
                    background: '#F8FAF9',
                    fontSize: '1rem',
                    color: '#1A1F1C',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#0F4C3A'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#D8DFDB'}
                >
                  {RECITERS.map((reciter) => (
                    <option key={reciter.id} value={reciter.id}>
                      {reciter.name} — {reciter.arabicName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Play Button */}
              <button
                onClick={togglePlay}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '16px',
                  background: isPlaying
                    ? 'linear-gradient(135deg, #C0392B, #8E2B1F)'
                    : 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
                  color: 'white',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.3s',
                  boxShadow: isPlaying
                    ? '0 12px 32px rgba(192,57,43,0.3)'
                    : '0 12px 32px rgba(15,76,58,0.3)',
                  opacity: isLoading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {isLoading ? (
                  <>⏳ {t.quran.loading}</>
                ) : isPlaying ? (
                  <>⏸ {t.quran.pause}</>
                ) : (
                  <>▶ {t.quran.play}</>
                )}
              </button>

              <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}
