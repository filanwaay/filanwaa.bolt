import { useLanguage } from '../i18n/LanguageContext'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#C89B3C',
  goldLight: '#E8C468', terracotta: '#B5622E', sand: '#F6F1E4',
  ink: '#12211B', slate: '#4A554E',
}

function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 24, height: 24, zIndex: 5, ...pos[corner] }} />
}

const sites: { name: string; url: string; icon: string; lang: string; desc: { so: string; en: string; ar: string } }[] = [
  { name: 'Khan Academy', url: 'https://khanacademy.org', icon: '🎓', lang: 'Ingiriisi', desc: { so: 'Casharo bilaash ah oo xisaab, sayniska iyo dhigashada guud', en: 'Free lessons in math, science and general education', ar: 'دروس مجانية في الرياضيات والعلوم' } },
  { name: 'freeCodeCamp', url: 'https://freecodecamp.org', icon: '💻', lang: 'Ingiriisi', desc: { so: 'Baro coding oo dhammaystiran, bilaash ah', en: 'Full coding curriculum, completely free', ar: 'منهج برمجة كامل ومجاني' } },
  { name: 'Coursera', url: 'https://coursera.org', icon: '🏫', lang: 'Ingiriisi', desc: { so: 'Koorsooyin jaamacadeed oo online ah', en: 'University-level courses online', ar: 'دورات جامعية عبر الإنترنت' } },
  { name: 'edX', url: 'https://edx.org', icon: '📚', lang: 'Ingiriisi', desc: { so: 'Koorsooyin ka yimaada Harvard, MIT iyo kuwo kale', en: 'Courses from Harvard, MIT and more', ar: 'دورات من هارفارد و إم آي تي' } },
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu', icon: '🔬', lang: 'Ingiriisi', desc: { so: 'Maadooyinka MIT oo bilaash ah', en: 'MIT course materials, free', ar: 'مواد إم آي تي مجانًا' } },
  { name: 'W3Schools', url: 'https://w3schools.com', icon: '🌐', lang: 'Ingiriisi', desc: { so: 'Baro HTML, CSS, JavaScript iyo kuwo kale', en: 'Learn HTML, CSS, JavaScript and more', ar: 'تعلم HTML و CSS و JavaScript' } },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: '🦊', lang: 'Ingiriisi', desc: { so: 'Reference-ka rasmiga ah ee web development', en: 'The official web development reference', ar: 'المرجع الرسمي لتطوير الويب' } },
  { name: 'The Odin Project', url: 'https://theodinproject.com', icon: '⚔️', lang: 'Ingiriisi', desc: { so: 'Full-stack web development, bilaash ah', en: 'Free full-stack web development path', ar: 'مسار تطوير ويب كامل مجاني' } },
  { name: 'CS50 Harvard', url: 'https://cs50.harvard.edu', icon: '🏛️', lang: 'Ingiriisi', desc: { so: 'Cilmiga computer-ka, Harvard', en: 'Introduction to computer science, Harvard', ar: 'مقدمة في علوم الحاسوب، هارفارد' } },
  { name: 'Codecademy', url: 'https://codecademy.com', icon: '🖥️', lang: 'Ingiriisi', desc: { so: 'Baro coding si interactive ah', en: 'Learn coding interactively', ar: 'تعلم البرمجة بشكل تفاعلي' } },
  { name: 'SQLZoo', url: 'https://sqlzoo.net', icon: '🗄️', lang: 'Ingiriisi', desc: { so: 'Tababbaro SQL oo interactive ah', en: 'Interactive SQL practice', ar: 'تدريب SQL تفاعلي' } },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: '🧩', lang: 'Ingiriisi', desc: { so: 'Tababbaro su\'aalo coding ah', en: 'Coding interview practice problems', ar: 'تدريب على أسئلة البرمجة' } },
  { name: 'Duolingo', url: 'https://duolingo.com', icon: '🦜', lang: 'Badan', desc: { so: 'Baro luqado cusub si ciyaar ah', en: 'Learn new languages, gamified', ar: 'تعلم لغات جديدة بطريقة ممتعة' } },
  { name: 'BBC Learning English', url: 'https://bbc.co.uk/learningenglish', icon: '🇬🇧', lang: 'Ingiriisi', desc: { so: 'Baro Ingiriisiga BBC', en: 'Learn English with the BBC', ar: 'تعلم الإنجليزية مع بي بي سي' } },
  { name: 'Typing.com', url: 'https://typing.com', icon: '⌨️', lang: 'Ingiriisi', desc: { so: 'Baro typing-ka degdegga ah', en: 'Learn fast, accurate typing', ar: 'تعلم الكتابة السريعة' } },
  { name: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com', icon: '🔍', lang: 'Ingiriisi', desc: { so: 'Xirfado digital ah oo bilaash ah', en: 'Free digital skills training', ar: 'تدريب مجاني على المهارات الرقمية' } },
  { name: 'HubSpot Academy', url: 'https://academy.hubspot.com', icon: '📊', lang: 'Ingiriisi', desc: { so: 'Baro marketing iyo ganacsiga online', en: 'Learn marketing and online business', ar: 'تعلم التسويق والأعمال عبر الإنترنت' } },
  { name: 'Canva Design School', url: 'https://designschool.canva.com', icon: '🎨', lang: 'Ingiriisi', desc: { so: 'Baro naqshadeynta (design)', en: 'Learn graphic design fundamentals', ar: 'تعلم أساسيات التصميم الجرافيكي' } },
  { name: 'YouTube Edu', url: 'https://youtube.com', icon: '▶️', lang: 'Badan', desc: { so: 'Muqaallo waxbarasho oo aan xad lahayn', en: 'Endless educational video content', ar: 'محتوى تعليمي بالفيديو بلا حدود' } },
  { name: 'TED-Ed', url: 'https://ed.ted.com', icon: '🎤', lang: 'Ingiriisi', desc: { so: 'Casharo gaagaaban oo firfircoon', en: 'Short, engaging animated lessons', ar: 'دروس متحركة قصيرة وجذابة' } },
  { name: 'Crash Course', url: 'https://thecrashcourse.com', icon: '💥', lang: 'Ingiriisi', desc: { so: 'Taariikh, sayniska iyo kuwo kale', en: 'History, science and more, fast-paced', ar: 'تاريخ وعلوم بوتيرة سريعة' } },
  { name: 'GCFGlobal', url: 'https://gcfglobal.org', icon: '🌍', lang: 'Ingiriisi/Isbaanish', desc: { so: 'Xirfado nolosha iyo shaqada', en: 'Life and work skills', ar: 'مهارات الحياة والعمل' } },
  { name: 'Cybrary', url: 'https://cybrary.it', icon: '🔒', lang: 'Ingiriisi', desc: { so: 'Baro cybersecurity-ga', en: 'Learn cybersecurity fundamentals', ar: 'تعلم أساسيات الأمن السيبراني' } },
  { name: 'DataCamp', url: 'https://datacamp.com', icon: '📈', lang: 'Ingiriisi', desc: { so: 'Baro cilmiga xogta (data science)', en: 'Learn data science and analytics', ar: 'تعلم علوم البيانات والتحليل' } },
  { name: 'Kaggle Learn', url: 'https://kaggle.com/learn', icon: '🤖', lang: 'Ingiriisi', desc: { so: 'Machine learning oo dhammaystiran', en: 'Hands-on machine learning courses', ar: 'دورات تعلم آلي عملية' } },
  { name: 'Brilliant.org', url: 'https://brilliant.org', icon: '💡', lang: 'Ingiriisi', desc: { so: 'Xisaab iyo sayniska si interactive ah', en: 'Interactive math and science', ar: 'رياضيات وعلوم تفاعلية' } },
  { name: 'Open Library', url: 'https://openlibrary.org', icon: '📖', lang: 'Badan', desc: { so: 'Buugaag milyoono ah oo bilaash ah', en: 'Millions of free books to read', ar: 'ملايين الكتب المجانية' } },
  { name: 'Project Gutenberg', url: 'https://gutenberg.org', icon: '📜', lang: 'Badan', desc: { so: '70,000+ buug oo bilaash ah', en: '70,000+ free e-books', ar: '+70,000 كتاب إلكتروني مجاني' } },
  { name: 'Alison', url: 'https://alison.com', icon: '🎯', lang: 'Ingiriisi', desc: { so: 'Shahaado bilaash ah oo mowduucyo badan', en: 'Free certificate courses, many topics', ar: 'دورات شهادات مجانية' } },
  { name: 'Class Central', url: 'https://classcentral.com', icon: '🗺️', lang: 'Ingiriisi', desc: { so: 'Raadi koorsooyin online ah oo dhammaan', en: 'Search all online courses in one place', ar: 'ابحث عن جميع الدورات في مكان واحد' } },
]

export function FreeSitesPage() {
  const { lang } = useLanguage()
  const l = lang as 'so' | 'en' | 'ar'

  const text = {
    so: { title: '30 Site Bilaash', subtitle: 'Ururin 30 goob waxbarasho oo bilaash ah, taxdaha ku dhow adiga.', visit: 'Booqo →' },
    en: { title: '30 Free Sites', subtitle: 'A curated list of 30 free learning resources, close at hand.', visit: 'Visit →' },
    ar: { title: '30 موقع مجاني', subtitle: 'قائمة مختارة من 30 موردًا تعليميًا مجانيًا.', visit: 'زيارة ←' },
  }[l]

  return (
    <div style={{ background: COLORS.sand }}>
      {/* Framed banner, matching the homepage hero treatment */}
      <div style={{ background: COLORS.ink, padding: '28px 6vw' }}>
        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }}>
          <CornerMark corner="tl" />
          <CornerMark corner="tr" />
          <CornerMark corner="bl" />
          <CornerMark corner="br" />
          <div style={{
            border: `1px solid rgba(200,155,60,0.5)`, padding: '52px 6vw',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.6rem', marginBottom: 14 }}>🌐</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", color: COLORS.sand,
              fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, marginBottom: 14,
            }}>{text.title}</h1>
            <p style={{ color: 'rgba(246,241,228,0.75)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto' }}>
              {text.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of sites */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20,
          }}>
            {sites.map((site, i) => (
              <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', flexDirection: 'column', gap: 10,
                background: 'white', padding: '22px 22px 20px', textDecoration: 'none',
                borderLeft: `3px solid ${COLORS.gold}`, boxShadow: '0 2px 8px rgba(18,33,27,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 26px rgba(18,33,27,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(18,33,27,0.05)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.6rem' }}>{site.icon}</span>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontSize: '0.85rem', color: COLORS.gold, fontWeight: 600,
                  }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.15rem', fontWeight: 600, color: COLORS.ink, margin: 0 }}>
                  {site.name}
                </h3>
                <p style={{ color: COLORS.slate, fontSize: '0.88rem', lineHeight: 1.5, margin: 0, flex: 1 }}>
                  {site.desc[l]}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginTop: 6, paddingTop: 12, borderTop: '1px solid #EFE9DA',
                }}>
                  <span style={{
                    fontSize: '0.72rem', color: COLORS.terracotta, fontWeight: 700,
                    background: 'rgba(181,98,46,0.08)', padding: '3px 10px', borderRadius: 20,
                  }}>{site.lang}</span>
                  <span style={{ color: COLORS.deep, fontWeight: 700, fontSize: '0.85rem' }}>{text.visit}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}