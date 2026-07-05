import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function PrivacyPage() {
  const { t, lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Hordhac', body: 'Siyaasada siraha ee Filanwaa waxa ay sharaxaysaa sida aan u aruuriyo, isticmaalno, iyo ilaashano xogtada shakhsi ah.' },
      { title: '2. Xogta aan Aruuriyo', body: 'Waxaan aruuri karnaa macluumaadka sida magacaaga, email-ka, iyo fariimaha aad nala soo xiriirto. Xogtan waxa ay noo caawisaa inaan ku caawino adeegga.' },
      { title: '3. Sida aan u Isticmaalno Xogta', body: 'Xogtada waxa aan u isticmaalnaa si aan uga jawaabno fariimahaaga, u wanaajino adeegga, iyo inaan kula wadaagno muuqaalo cusub.' },
      { title: '4. Cookies', body: 'Filanwaa waxa uu isticmaalaa cookies si uu u xakameeyo doorashada luqada iyo waxa aad rabto inaad aragto. Waxa aad xakamayn kartaa cookies-ka browser-kaaga.' },
      { title: '5. Xirfadaha Xogta', body: 'Waxaan qaadan tallaabooyin amaan ah si aan u ilaashano xogtada. Xogtada ma wadaagno shirkadaha kale idinko oggolaansho.' },
      { title: '6. Xuquuqda isticmaalaha', body: 'Waxaad xaq u leedahay inaad weydiiso inaan tirtirno xogtada. Fadlan nala soo xiriir bogga Contact Us.' },
      { title: '7. Isbeddelka Siyaasada', body: 'Filanwaa waxa uu xaq u leeyahay in uu isbeddelo siyaasadan wakhti kasta. Isbeddelka waxa uu shaqeeyaan marka la daabaco bogga.' },
    ],
    en: [
      { title: '1. Introduction', body: 'The Filanwaa privacy policy explains how we collect, use, and protect your personal data.' },
      { title: '2. Data We Collect', body: 'We may collect information such as your name, email, and messages you send us. This data helps us provide our service.' },
      { title: '3. How We Use Data', body: 'We use your data to respond to your messages, improve our service, and share new content with you.' },
      { title: '4. Cookies', body: 'Filanwaa uses cookies to manage language preferences and what you want to see. You can control cookies in your browser.' },
      { title: '5. Data Security', body: 'We take security measures to protect your data. We do not share your data with other companies without permission.' },
      { title: '6. User Rights', body: 'You have the right to request that we delete your data. Please contact us through the Contact Us page.' },
      { title: '7. Policy Changes', body: 'Filanwaa reserves the right to change this policy at any time. Changes take effect when posted on the site.' },
    ],
    ar: [
      { title: '١. مقدمة', body: 'تشرح سياسة الخصوصية لفلنواء كيف نجمع ونستخدم ونحمي بياناتك الشخصية.' },
      { title: '٢. البيانات التي نجمعها', body: 'قد نجمع معلومات مثل اسمك وبريدك الإلكتروني والرسائل التي ترسلها لنا. تساعدنا هذه البيانات في تقديم خدمتنا.' },
      { title: '٣. كيف نستخدم البيانات', body: 'نستخدم بياناتك للرد على رسائلك وتحسين خدمتنا ومشاركة محتوى جديد معك.' },
      { title: '٤. ملفات تعريف الارتباط', body: 'يستخدم فلنواء ملفات تعريف الارتباط لإدارة تفضيلات اللغة وما تريد رؤيته. يمكنك التحكم فيها في متصفحك.' },
      { title: '٥. أمن البيانات', body: 'نتخذ تدابير أمنية لحماية بياناتك. لا نشارك بياناتك مع شركات أخرى دون إذن.' },
      { title: '٦. حقوق المستخدم', body: 'لديك الحق في طلب حذف بياناتك. يرجى الاتصال بنا عبر صفحة اتصل بنا.' },
      { title: '٧. تغيير السياسة', body: 'يحتفظ فلنواء بالحق في تغيير هذه السياسة في أي وقت. تسري التغييرات عند نشرها على الموقع.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔒</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.privacy.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.privacy.subtitle}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 12px 32px rgba(15,76,58,0.08)',
          }}>
            {sections.map((section, i) => (
              <div key={i} style={{
                marginBottom: i < sections.length - 1 ? '32px' : '0',
                paddingBottom: i < sections.length - 1 ? '32px' : '0',
                borderBottom: i < sections.length - 1 ? '1px solid #D8DFDB' : 'none',
              }}>
                <h2 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#0F4C3A',
                  marginBottom: '12px',
                }}>
                  {section.title}
                </h2>
                <p style={{
                  color: '#525C57',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                }}>
                  {section.body}
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
