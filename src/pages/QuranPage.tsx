import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { PageHero } from '../components/PageHero'

const COLORS = { gold: '#C89B3C', goldLight: '#E8C468', sand: '#F6F1E4', ink: '#12211B', deep: '#0B3D2E', deepDark: '#06251C', slate: '#4A554E' }

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
  { id: 'afs', name: 'Mishary Rashid Alafasy', server: 'https://server8.mp3quran.net/afs/' },
  { id: 'sds', name: 'Abdurrahmaan As-Sudais', server: 'https://server11.mp3quran.net/sds/' },
  { id: 'maher', name: 'Maher Al Muaiqly', server: 'https://server12.mp3quran.net/maher/' },
  { id: 'basit', name: 'Abdul Basit (Murattal)', server: 'https://server7.mp3quran.net/basit/' },
  { id: 'sufi', name: 'Abdul Rashid Ali Sufi (Assosi)', server: 'https://server16.mp3quran.net/download/soufi/Rewayat-Assosi-A-n-Abi-Amr/' },
]

const SPEED_OPTIONS = [0.5, 0.75, 1, 1.25, 1.5, 2]

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function QuranPage() {
  const { t } = useLanguage()
  const [selectedSurah, setSelectedSurah] = useState<Surah>(SURAHS[0])
  const [selectedReciter, setSelectedReciter] = useState(RECITERS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [speed, setSpeed] = useState(1)
  const [error, setError] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement>(null)

  const audioUrl = `${selectedReciter.server}${String(selectedSurah.number).padStart(3, '0')}.mp3`

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    audio.playbackRate = speed
    audio.volume = volume
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setError(null)
    audio.load()
  }, [selectedSurah, selectedReciter])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed
  }, [speed])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      await audio.play()
      setIsPlaying(true)
    } catch (err) {
      console.error('Audio play error:', err)
      setError('Codka lama furi karo. Fadlan isku day mar kale.')
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }, [isPlaying])

  const handleRewind = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, audio.currentTime - 10)
  }, [])

  const handleForward = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !isFinite(audio.duration)) return
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10)
  }, [])

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !isFinite(audio.duration)) return
    const newTime = (parseFloat(e.target.value) / 100) * audio.duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setCurrentTime(audio.currentTime)
    const onMeta = () => setDuration(audio.duration)
    const onEnd = () => setIsPlaying(false)
    const onErr = () => {
      setError('Codka lama soo dejisan karo. Fadlan hubi internet-kaaga.')
      setIsPlaying(false)
    }
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('error', onErr)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('error', onErr)
    }
  }, [])

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div style={{ background: COLORS.sand }}>
      <PageHero icon="📖" title={t.quran.title} subtitle={t.quran.subtitle} />

      {/* Player */}
      <section className="section">
        <div className="container">
          <div style={{
            maxWidth: '640px',
            margin: '0 auto',
            background: '#302d2f',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 24px 60px rgba(30, 15, 243, 0.35)',
            border: '1px solid #08f808',
          }}>
            {/* Title bar, like a desktop media player window */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', background: '#181414',
              borderBottom: '1px solid #2E332E',
            }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#E06456' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: COLORS.gold }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5FA872' }} />
              <span style={{ color: 'rgba(246,241,228,0.5)', fontSize: '0.78rem', fontWeight: 600, margin: '0 auto', paddingRight: 40 }}>
                Filanwaa Quran Player
              </span>
            </div>

            {/* Now playing display */}
            <div style={{ padding: '02px 02px 02px', textAlign: 'center' }}>
              <p style={{
                color: 'rgba(231, 192, 91, 0.4)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10,
              }}>
                {isPlaying ? 'Hadda Socda' : 'Diyaar'}
              </p>
              <h2 style={{
                fontFamily: 'Amiri, serif', fontSize: '2.4rem', color: COLORS.goldLight,
                marginBottom: '6px', fontWeight: 700,
              }}>
                {selectedSurah.arabicName}
              </h2>
              <p style={{ color: COLORS.sand, fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>
                {selectedSurah.name} · {selectedSurah.ayahs} Ayahs
              </p>
              <p style={{ color: 'rgba(246,241,228,0.45)', fontSize: '0.82rem' }}>
                {selectedReciter.name}
              </p>

              {/* Equalizer-style visualizer */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, height: 36, margin: '20px 0 4px' }}>
                {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
                  <span key={i} style={{
                    width: 9, borderRadius: 2, background: COLORS.gold,
                    height: isPlaying ? undefined : 9,
                    animation: isPlaying ? `eqbar 0.${8 + (i % 5)}s ease-in-out infinite alternate` : 'none',
                    animationDelay: `${i * 0.07}s`,
                    opacity: isPlaying ? 0.85 : 0.3,
                  }} />
                ))}
              </div>
            </div>

            {/* Seek bar */}
            <div style={{ padding: '0 32px 18px' }}>
              <input
                type="range"
                className="audio-slider"
                min="0"
                max="100"
                step="0.1"
                value={progressPercent}
                onChange={handleSeek}
                disabled={duration === 0}
                style={{ '--progress': `${progressPercent}%` } as React.CSSProperties}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(248, 248, 247, 0.5)', marginTop: '6px', fontFamily: 'monospace' }}>
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
              </div>
            </div>

            {error && (
              <div style={{ margin: '0 32px 16px', padding: '10px 14px', borderRadius: '6px', background: 'rgba(224,100,86,0.15)', color: '#E06456', fontSize: '0.85rem', border: '1px solid rgba(224,100,86,0.3)' }}>
                ⚠️ {error}
              </div>
            )}

            {/* Transport controls, VLC-style row */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
              padding: '4px 32px 28px',
            }}>
              <button
                onClick={handleRewind}
                title="Gadaal 10 il-biriqsi"
                style={{
                  width: 50, height: 42, borderRadius: '50%', border: 'none',
                  background: 'transparent', color: COLORS.sand, fontSize: '1.3rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: 0.75,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.75' }}
              >⏪</button>

              <button
                onClick={togglePlay}
                disabled={isLoading}
                style={{
                  width: 66, height: 66, borderRadius: '50%', border: 'none',
                  background: COLORS.gold, color: '#1B1F1C', fontSize: '1.7rem',
                  cursor: isLoading ? 'wait' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                  boxShadow: '0 8px 24px rgba(200,155,60,0.4)', opacity: isLoading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.transform = 'scale(1.06)' }}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >{isLoading ? '⏳' : isPlaying ? '⏸' : '▶'}</button>

              <button
                onClick={handleForward}
                title="Hore 10 il-biriqsi"
                style={{
                  width: 42, height: 42, borderRadius: '50%', border: 'none',
                  background: 'transparent', color: COLORS.sand, fontSize: '1.3rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: 0.75,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.75' }}
              >⏩</button>
            </div>

            {/* Bottom console: surah/reciter/speed/volume, like a player's settings tray */}
            <div style={{ background: '#141816', borderTop: '1px solid #2E332E', padding: '24px 32px 28px' }}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'rgba(246,241,228,0.5)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  📖 {t.quran.selectSurah}
                </label>
                <select
                  value={selectedSurah.number}
                  onChange={(e) => {
                    const s = SURAHS.find(x => x.number === parseInt(e.target.value))
                    if (s) setSelectedSurah(s)
                  }}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '6px',
                    border: '1px solid #2E332E', background: '#1B1F1C',
                    fontSize: '0.92rem', color: COLORS.sand, fontFamily: 'inherit',
                    cursor: 'pointer', outline: 'none',
                  }}
                >
                  {SURAHS.map(s => (
                    <option key={s.number} value={s.number}>{s.number}. {s.name} — {s.arabicName}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'rgba(246,241,228,0.5)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🎙️ {t.quran.selectReciter}
                </label>
                <select
                  value={selectedReciter.id}
                  onChange={(e) => {
                    const r = RECITERS.find(x => x.id === e.target.value)
                    if (r) setSelectedReciter(r)
                  }}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '6px',
                    border: '1px solid #2E332E', background: '#1B1F1C',
                    fontSize: '0.92rem', color: COLORS.sand, fontFamily: 'inherit',
                    cursor: 'pointer', outline: 'none',
                  }}
                >
                  {RECITERS.map(r => (
                    <option key={r.id} value={r.id}>{r.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(246,241,228,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>⚡ Xawaaraha</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: COLORS.gold }}>{speed}x</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {SPEED_OPTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => setSpeed(s)}
                        style={{
                          flex: '1 1 auto', minWidth: 44, padding: '6px 8px', borderRadius: '4px',
                          border: speed === s ? `1px solid ${COLORS.gold}` : '1px solid #2E332E',
                          background: speed === s ? 'rgba(200,155,60,0.15)' : 'transparent',
                          color: speed === s ? COLORS.gold : 'rgba(246,241,228,0.6)',
                          fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                        }}
                      >{s}x</button>
                    ))}
                  </div>
                </div>

                <div style={{ flex: '1 1 160px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(246,241,228,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>🔊 Codka</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: COLORS.gold }}>{Math.round(volume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    className="audio-slider"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    style={{ '--progress': `${volume * 100}%` } as React.CSSProperties}
                  />
                </div>
              </div>

              <audio ref={audioRef} src={audioUrl} preload="metadata" style={{ display: 'none' }} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes eqbar {
          from { height: 4px; }
          to { height: 34px; }
        }
      `}</style>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}