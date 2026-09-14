import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { LessonPage } from '../components/LessonPage'

export function TermsPage() {
  const { t, lang } = useLanguage()

  const fallback = {
    so: { title: 'Shuruudaha Adeegga', subtitle: 'Shuruudaha isticmaalka website-ka' },
    en: { title: 'Terms of Service', subtitle: 'The terms for using this website' },
    ar: { title: 'شروط الخدمة', subtitle: 'شروط استخدام الموقع' },
  }[lang as 'so' | 'en' | 'ar']

  const pageTitle = t.terms?.title || fallback.title
  const pageSubtitle = t.terms?.subtitle || fallback.subtitle


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

  return (
    <>
      <LessonPage
        icon="📋"
        title={pageTitle}
        subtitle={pageSubtitle}
        sections={content[lang]}
        accentColor="#C89B3C"
      />
      <AdBanner />
      <SubscribeSection />
    </>
  )
}