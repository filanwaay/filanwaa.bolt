import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function TermsPage() {
  const { t, lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Guud ahaan', body: 'Isticmaalka website-ka Filanwaa waxa ay ka dhigan tahay aqballitaada shuruudahan. Haddii aad aqbalin, fadlan isticmaal website-ka.' },
      { title: '2. Isticmaalka Muhtada', body: 'Waxaad u isticmaali kartaa website-ka si waxbarasho iyo macluumaad. Ma lagu oggola yahay inaad isticmaalto wax xun ama ka hor istaaga sharciga.' },
      { title: '3. Xaqa Daabacaadda', body: 'Dhamaan macluumaadka, maqaallada iyo muuqaalada ku jira website-ka Filanwaa waa xaqa Filanwaa. Ma lagu oggola yahay in la daabaco ama la qaybiyo idinko oggolaansho.' },
      { title: '4. Xirfadaha Xogta', body: 'Filanwaa mas\'uul kama aha xogta isticmaalaha ee shakhsi ahaan, laakiin waxa aan ku ilaashaneynaa sida ay sharciga ku xeranyihiin.' },
      { title: '5. Xiriirka Saddexaad', body: 'Website-ka waxa uu xiriir karaa website-yada kale. Filanwaa mas\'uul kama aha nuxurka website-yada kale.' },
      { title: '6. Isbeddelka Shuruudaha', body: 'Filanwaa waxa uu xaq u leeyahay in uu isbeddelo shuruudahan wakhti kasta. Isbeddelka waxa uu shaqeeyaan marka la daabaco bogga.' },
      { title: '7. Xiriir', body: 'Haddii aad su\'aal qabto, fadlan nala soo xiriir bogga Contact Us.' },
    ],
    en: [
      { title: '1. General', body: 'By using the Filanwaa website, you agree to these terms. If you do not agree, please do not use the website.' },
      { title: '2. User Conduct', body: 'You may use the website for educational and informational purposes. You may not use it for any illegal or harmful purpose.' },
      { title: '3. Copyright', body: 'All content, articles, and media on the Filanwaa website are the property of Filanwaa. You may not reproduce or distribute without permission.' },
      { title: '4. Data Protection', body: 'Filanwaa is not responsible for user personal data, but we protect it in accordance with applicable laws.' },
      { title: '5. Third-Party Links', body: 'The website may link to other websites. Filanwaa is not responsible for the content of other websites.' },
      { title: '6. Changes to Terms', body: 'Filanwaa reserves the right to change these terms at any time. Changes take effect when posted on the site.' },
      { title: '7. Contact', body: 'If you have any questions, please contact us through the Contact Us page.' },
    ],
    ar: [
      { title: '١. عام', body: 'باستخدام موقع فلنواء، فإنك توافق على هذه الشروط. إذا لم توافق، يرجى عدم استخدام الموقع.' },
      { title: '٢. سلوك المستخدم', body: 'يمكنك استخدام الموقع لأغراض تعليمية ومعلوماتية. لا يجوز استخدامه لأي غرض غير قانوني أو ضار.' },
      { title: '٣. حقوق النشر', body: 'جميع المحتويات والمقالات والوسائط على موقع فلنواء هي ملك لفلنواء. لا يجوز إعادة إنتاجها أو توزيعها دون إذن.' },
      { title: '٤. حماية البيانات', body: 'فلنواء غير مسؤول عن البيانات الشخصية للمستخدم، لكننا نحميها وفقاً للقوانين المعمول بها.' },
      { title: '٥. روابط الطرف الثالث', body: 'قد يرتبط الموقع بمواقع أخرى. فلنواء غير مسؤول عن محتوى المواقع الأخرى.' },
      { title: '٦. تغيير الشروط', body: 'يحتفظ فلنواء بالحق في تغيير هذه الشروط في أي وقت. تسري التغييرات عند نشرها على الموقع.' },
      { title: '٧. اتصل بنا', body: 'إذا كان لديك أي أسئلة، يرجى الاتصال بنا عبر صفحة اتصل بنا.' },
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
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📋</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.terms.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.terms.subtitle}
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
