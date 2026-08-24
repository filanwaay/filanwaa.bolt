import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function DownloadPage() {
  const { lang } = useLanguage()

  const labels: Record<string, { title: string; subtitle: string; download: string }> = {
    so: { title: 'Download - Softwarayaal Bilaash ah', subtitle: '20 software oo bilaash ah oo aad u baahan tahay — programming, design, iyo kuwo kale.', download: 'Soo Deji' },
    en: { title: 'Download - Free Software', subtitle: '20 essential free tools — programming, design, and more.', download: 'Download' },
    ar: { title: 'تنزيل - برامج مجانية', subtitle: '20 أداة مجانية أساسية - برمجة وتصميم والمزيد.', download: 'تنزيل' },
  }

  const software: Record<string, { name: string; category: string; desc: string; link: string; icon: string }[]> = {
    so: [
      { name: 'Visual Studio Code', category: 'Programming', desc: 'Editor-ka koodhka ee ugu caansan, taageeraya dhammaan luuqadaha barnaamijyada.', link: 'https://code.visualstudio.com', icon: '💻' },
      { name: 'Git', category: 'Programming', desc: 'Version control-ka lagu maareeyo isbeddelada koodhka.', link: 'https://git-scm.com', icon: '🔧' },
      { name: 'Python', category: 'Programming', desc: 'Luuqad barnaamijyeed oo fudud, loo isticmaalo AI, web, iyo automation.', link: 'https://python.org', icon: '🐍' },
      { name: 'Node.js', category: 'Programming', desc: 'JavaScript runtime-ka lagu dhiso backend-yada web-ka.', link: 'https://nodejs.org', icon: '🟢' },
      { name: 'XAMPP', category: 'Programming', desc: 'Server local ah oo leh PHP, MySQL, iyo Apache si loo tijaabiyo websites.', link: 'https://www.apachefriends.org', icon: '🖥️' },
      { name: 'MySQL Workbench', category: 'Programming', desc: 'Qalab lagu maamulo database-yada MySQL.', link: 'https://dev.mysql.com/downloads/workbench', icon: '🗄️' },
      { name: 'Postman', category: 'Programming', desc: 'Qalab lagu tijaabiyo API-yada barnaamijyada.', link: 'https://www.postman.com/downloads', icon: '📡' },
      { name: 'Docker Desktop', category: 'Programming', desc: 'Qalab lagu kansalaayo (containerize) barnaamijyada.', link: 'https://www.docker.com/products/docker-desktop', icon: '🐳' },
      { name: 'Notepad++', category: 'Programming', desc: 'Editor koodh oo fudud oo Windows ah.', link: 'https://notepad-plus-plus.org', icon: '📝' },
      { name: 'Sublime Text', category: 'Programming', desc: 'Editor koodh oo degdeg ah, leh muuqaal fiican.', link: 'https://www.sublimetext.com', icon: '✏️' },
      { name: 'GIMP', category: 'Design', desc: 'Barnaamij sawir-hagaajin oo bilaash ah, u dhigma Photoshop.', link: 'https://www.gimp.org', icon: '🎨' },
      { name: 'Inkscape', category: 'Design', desc: 'Barnaamij lagu sameeyo sawirro vector ah (SVG).', link: 'https://inkscape.org', icon: '✒️' },
      { name: 'Blender', category: 'Design', desc: 'Barnaamij 3D modeling iyo animation oo bilaash ah.', link: 'https://www.blender.org', icon: '🧊' },
      { name: 'VLC Media Player', category: 'Media', desc: 'Ciyaariyaha muusigga iyo filimada ee ugu caansan, taageera dhammaan noocyada.', link: 'https://www.videolan.org', icon: '🎬' },
      { name: 'OBS Studio', category: 'Media', desc: 'Qalab lagu duubto shaashadda iyo live streaming.', link: 'https://obsproject.com', icon: '🎥' },
      { name: 'Audacity', category: 'Media', desc: 'Barnaamij lagu tafatiro codka iyo muusigga.', link: 'https://www.audacityteam.org', icon: '🎙️' },
      { name: '7-Zip', category: 'Utility', desc: 'Qalab lagu xidho/furfuro files-ka, bilaash ah.', link: 'https://www.7-zip.org', icon: '📦' },
      { name: 'LibreOffice', category: 'Office', desc: 'Suite dukumentiyada oo bilaash ah, u dhigma Microsoft Office.', link: 'https://www.libreoffice.org', icon: '📄' },
      { name: 'AnyDesk', category: 'Utility', desc: 'Barnaamij lagu maamulo kombuyuutar meel fog ah.', link: 'https://anydesk.com', icon: '🖱️' },
      { name: 'Discord', category: 'Communication', desc: 'App-ka wada-hadalka bulshada IT-ga iyo ciyaaraha.', link: 'https://discord.com/download', icon: '💬' },
    ],
    en: [
      { name: 'Visual Studio Code', category: 'Programming', desc: 'The most popular code editor, supporting all programming languages.', link: 'https://code.visualstudio.com', icon: '💻' },
      { name: 'Git', category: 'Programming', desc: 'Version control system for tracking code changes.', link: 'https://git-scm.com', icon: '🔧' },
      { name: 'Python', category: 'Programming', desc: 'A simple programming language used for AI, web, and automation.', link: 'https://python.org', icon: '🐍' },
      { name: 'Node.js', category: 'Programming', desc: 'JavaScript runtime for building web backends.', link: 'https://nodejs.org', icon: '🟢' },
      { name: 'XAMPP', category: 'Programming', desc: 'Local server with PHP, MySQL, and Apache for testing websites.', link: 'https://www.apachefriends.org', icon: '🖥️' },
      { name: 'MySQL Workbench', category: 'Programming', desc: 'Tool for managing MySQL databases.', link: 'https://dev.mysql.com/downloads/workbench', icon: '🗄️' },
      { name: 'Postman', category: 'Programming', desc: 'Tool for testing application APIs.', link: 'https://www.postman.com/downloads', icon: '📡' },
      { name: 'Docker Desktop', category: 'Programming', desc: 'Tool for containerizing applications.', link: 'https://www.docker.com/products/docker-desktop', icon: '🐳' },
      { name: 'Notepad++', category: 'Programming', desc: 'A simple, fast code editor for Windows.', link: 'https://notepad-plus-plus.org', icon: '📝' },
      { name: 'Sublime Text', category: 'Programming', desc: 'A fast code editor with a clean interface.', link: 'https://www.sublimetext.com', icon: '✏️' },
      { name: 'GIMP', category: 'Design', desc: 'Free image editing software, similar to Photoshop.', link: 'https://www.gimp.org', icon: '🎨' },
      { name: 'Inkscape', category: 'Design', desc: 'Software for creating vector graphics (SVG).', link: 'https://inkscape.org', icon: '✒️' },
      { name: 'Blender', category: 'Design', desc: 'Free 3D modeling and animation software.', link: 'https://www.blender.org', icon: '🧊' },
      { name: 'VLC Media Player', category: 'Media', desc: 'The most popular media player, supporting all formats.', link: 'https://www.videolan.org', icon: '🎬' },
      { name: 'OBS Studio', category: 'Media', desc: 'Tool for screen recording and live streaming.', link: 'https://obsproject.com', icon: '🎥' },
      { name: 'Audacity', category: 'Media', desc: 'Software for editing audio and music.', link: 'https://www.audacityteam.org', icon: '🎙️' },
      { name: '7-Zip', category: 'Utility', desc: 'Free file compression and extraction tool.', link: 'https://www.7-zip.org', icon: '📦' },
      { name: 'LibreOffice', category: 'Office', desc: 'Free office suite, similar to Microsoft Office.', link: 'https://www.libreoffice.org', icon: '📄' },
      { name: 'AnyDesk', category: 'Utility', desc: 'Remote desktop software for managing computers remotely.', link: 'https://anydesk.com', icon: '🖱️' },
      { name: 'Discord', category: 'Communication', desc: 'Communication app for IT communities and gaming.', link: 'https://discord.com/download', icon: '💬' },
    ],
    ar: [
      { name: 'Visual Studio Code', category: 'Programming', desc: 'محرر الأكواد الأكثر شعبية، يدعم جميع لغات البرمجة.', link: 'https://code.visualstudio.com', icon: '💻' },
      { name: 'Git', category: 'Programming', desc: 'نظام تحكم بالإصدارات لتتبع تغييرات الكود.', link: 'https://git-scm.com', icon: '🔧' },
      { name: 'Python', category: 'Programming', desc: 'لغة برمجة بسيطة تُستخدم في الذكاء الاصطناعي والويب والأتمتة.', link: 'https://python.org', icon: '🐍' },
      { name: 'Node.js', category: 'Programming', desc: 'بيئة تشغيل JavaScript لبناء خلفيات الويب.', link: 'https://nodejs.org', icon: '🟢' },
      { name: 'XAMPP', category: 'Programming', desc: 'خادم محلي يحتوي على PHP وMySQL وApache لاختبار المواقع.', link: 'https://www.apachefriends.org', icon: '🖥️' },
      { name: 'MySQL Workbench', category: 'Programming', desc: 'أداة لإدارة قواعد بيانات MySQL.', link: 'https://dev.mysql.com/downloads/workbench', icon: '🗄️' },
      { name: 'Postman', category: 'Programming', desc: 'أداة لاختبار واجهات برمجة التطبيقات API.', link: 'https://www.postman.com/downloads', icon: '📡' },
      { name: 'Docker Desktop', category: 'Programming', desc: 'أداة لتحزيم التطبيقات.', link: 'https://www.docker.com/products/docker-desktop', icon: '🐳' },
      { name: 'Notepad++', category: 'Programming', desc: 'محرر أكواد بسيط وسريع لنظام Windows.', link: 'https://notepad-plus-plus.org', icon: '📝' },
      { name: 'Sublime Text', category: 'Programming', desc: 'محرر أكواد سريع بواجهة أنيقة.', link: 'https://www.sublimetext.com', icon: '✏️' },
      { name: 'GIMP', category: 'Design', desc: 'برنامج تحرير صور مجاني، مشابه لـ Photoshop.', link: 'https://www.gimp.org', icon: '🎨' },
      { name: 'Inkscape', category: 'Design', desc: 'برنامج لإنشاء الرسومات المتجهة (SVG).', link: 'https://inkscape.org', icon: '✒️' },
      { name: 'Blender', category: 'Design', desc: 'برنامج مجاني للنمذجة والتحريك ثلاثي الأبعاد.', link: 'https://www.blender.org', icon: '🧊' },
      { name: 'VLC Media Player', category: 'Media', desc: 'مشغل الوسائط الأكثر شعبية، يدعم جميع الصيغ.', link: 'https://www.videolan.org', icon: '🎬' },
      { name: 'OBS Studio', category: 'Media', desc: 'أداة لتسجيل الشاشة والبث المباشر.', link: 'https://obsproject.com', icon: '🎥' },
      { name: 'Audacity', category: 'Media', desc: 'برنامج لتحرير الصوت والموسيقى.', link: 'https://www.audacityteam.org', icon: '🎙️' },
      { name: '7-Zip', category: 'Utility', desc: 'أداة مجانية لضغط وفك ضغط الملفات.', link: 'https://www.7-zip.org', icon: '📦' },
      { name: 'LibreOffice', category: 'Office', desc: 'مجموعة مكتبية مجانية، مشابهة لـ Microsoft Office.', link: 'https://www.libreoffice.org', icon: '📄' },
      { name: 'AnyDesk', category: 'Utility', desc: 'برنامج سطح مكتب بعيد لإدارة أجهزة الكمبيوتر عن بعد.', link: 'https://anydesk.com', icon: '🖱️' },
      { name: 'Discord', category: 'Communication', desc: 'تطبيق تواصل لمجتمعات تقنية المعلومات والألعاب.', link: 'https://discord.com/download', icon: '💬' },
    ],
  }

  const items = software[lang]
  const l = labels[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(68,121,161,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⬇️</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>{l.subtitle}</p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  background: '#E8F5F0',
                  color: '#0F4C3A',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  alignSelf: 'flex-start',
                }}>
                  {item.category}
                </div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '8px' }}>
                  {item.name}
                </h2>
                <p style={{ color: '#525C57', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {item.desc}
                </p>
                
                 <a href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: '#4479A1',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  {l.download}
                </a>
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