import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { LessonPage } from '../components/LessonPage'

export function PrivacyPage() {
  const { t, lang } = useLanguage()

  const fallback = {
    so: { title: 'Siyaasadda Sirta', subtitle: 'Sida aan u ilaalino xogtaada' },
    en: { title: 'Privacy Policy', subtitle: 'How we protect your information' },
    ar: { title: 'سياسة الخصوصية', subtitle: 'كيف نحمي معلوماتك' },
  }[lang as 'so' | 'en' | 'ar']

  const pageTitle = t.privacy?.title || fallback.title
  const pageSubtitle = t.privacy?.subtitle || fallback.subtitle


  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Hordhac', body: 'Siyaasadan sirta ah waxay sharraxaysaa sida Filanwaa u aruuriso, u isticmaasho, uguna ilaaliyo macluumaadka shakhsi ahaaneed marka aad booqato mareegtayada. Anagoo ah xarun aqoon oo u adeegta bulshada Soomaaliyeed, waxaan aad ugu tixgelinaa ilaalinta sirtaada.' },
      { title: '2. Xogta Aan Aruurino', body: 'Waxaan aruuri karnaa laba nooc oo xog ah: kuwa aad si toos ah noo siiso (magacaaga, email-kaaga, iyo fariimaha aad noogu soo dirto bogga Nala Soo Xiriir), iyo kuwa si toos ah loo aruuriyo (cinwaanka IP-gaaga, nooca browser-ka iyo device-ka, bogagga aad booqato, iyo cookies-ka).' },
      { title: '3. Sida Aan U Isticmaalno Xogta', body: 'Macluumaadka waxaan u isticmaalnaa in aan uga jawaabno fariimahaaga, aan hagaajino mareegta iyo waxyaabaha lagu soo bandhigo, aan kula wadaagno content cusub, iyo in aan aragno sida booqdayaashu u isticmaalaan Filanwaa si aan uga wanaajino mustaqbalka.' },
      { title: '4. Cookies iyo Tignoolajiyada Raadraaca', body: 'Filanwaa waxa uu isticmaalaa cookies si uu u xasuusto luqadda aad doorbidday, u falanqeeyo sida booqdayaashu u isticmaalaan bogagga, una soo bandhigo xayaysiisyo la xiriira. Waxaad xakameyn kartaa ama xannibi kartaa cookies-ka gudaha dejinta browser-kaaga, in kasta oo ay saameyn ku yeelan karto qaar ka mid ah astaamaha mareegta.' },
      { title: '5. Xayaysiiska Google AdSense', body: 'Filanwaa waxay isticmaashaa Google AdSense si ay u soo bandhigto xayaysiisyo. Google, oo ah dhinac saddexaad, waxay isticmaashaa cookies si ay u soo bandhigto xayaysiis ku salaysan booqashadaada hore ee mareegtan iyo kuwa kale. Waxaad ka bixi kartaa xayaysiiska la kaashan iyada oo la maraayo Google Ads Settings (adssettings.google.com).' },
      { title: '6. Amniga iyo Kaydinta Xogta', body: 'Waxaan qaadanaa tallaabooyin amaan ah oo la habboon si aan uga ilaalino macluumaadkaaga helitaan aan la oggolayn, isticmaal khaldan, ama shaacin. Xogta fariimaha waxaan kaydinaa kaliya intii lagama maarmaan ahayd si aan uga jawaabno codsigaaga. Marnaba kama iibinno xogtaada shakhsi ahaaneed dad kale.' },
      { title: '7. Xuquuqda Isticmaalaha', body: 'Waxaad xaq u leedahay inaad hesho, saxdo, ama codsato in la tirtiro xogtaada shakhsi ahaaneed. Si aad u fulliso xuquuqdaan, fadlan nagala soo xiriir bogga Nala Soo Xiriir.' },
      { title: '8. Sirta Carruurta', body: 'Filanwaa uma talogalin carruur ka yar 13 sano jir ah, kumana ururino ognaanshaha macluumaad shakhsi ahaaneed oo ku saabsan carruurta.' },
      { title: '9. Isbeddelka Siyaasadan', body: 'Filanwaa waxay xaq u leedahay inay isbeddesho siyaasadan sirta ah waqti kasta. Isbeddel kastaa wuxuu shaqeyn bilaabayaa marka la daabaco bogga, taariikhda cusboonaysiinta oo la beddelo.' },
      { title: '10. Nala Soo Xiriir', body: 'Haddii aad qabto su\'aalo ku saabsan siyaasadan sirta ah, fadlan nagala soo xiriir bogga Nala Soo Xiriir.' },
    ],
    en: [
      { title: '1. Introduction', body: 'This Privacy Policy explains how Filanwaa collects, uses, and protects your personal information when you visit our site. As a knowledge hub serving the Somali-speaking community, we take the protection of your privacy seriously.' },
      { title: '2. Information We Collect', body: 'We collect two types of information: information you provide directly (your name, email, and messages sent through our Contact page), and information collected automatically (your IP address, browser and device type, pages visited, and cookies).' },
      { title: '3. How We Use Your Information', body: 'We use your information to respond to your messages, improve our site and the content we offer, share new content with you, and understand how visitors use Filanwaa so we can improve it going forward.' },
      { title: '4. Cookies and Tracking Technologies', body: 'Filanwaa uses cookies to remember your language preference, analyze how visitors use our pages, and serve relevant advertising. You can control or disable cookies through your browser settings, though this may affect some site features.' },
      { title: '5. Google AdSense Advertising', body: 'Filanwaa uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting Google Ads Settings (adssettings.google.com).' },
      { title: '6. Data Security and Retention', body: 'We take reasonable security measures to protect your information from unauthorized access, misuse, or disclosure. Contact form data is retained only as long as necessary to respond to your inquiry. We never sell your personal information to third parties.' },
      { title: '7. Your Rights', body: 'You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please reach out to us through our Contact page.' },
      { title: '8. Children\'s Privacy', body: 'Filanwaa is not directed at children under 13, and we do not knowingly collect personal information from children.' },
      { title: '9. Changes to This Policy', body: 'Filanwaa reserves the right to update this Privacy Policy at any time. Changes take effect once posted on this page, along with an updated revision date.' },
      { title: '10. Contact Us', body: 'If you have any questions about this Privacy Policy, please reach out to us through our Contact Us page.' },
    ],
    ar: [
      { title: '١. مقدمة', body: 'توضح سياسة الخصوصية هذه كيف تجمع فلنواء وتستخدم وتحمي معلوماتك الشخصية عند زيارتك لموقعنا. بصفتنا منصة معرفية تخدم المجتمع الناطق بالصومالية، نولي حماية خصوصيتك أهمية كبيرة.' },
      { title: '٢. البيانات التي نجمعها', body: 'نجمع نوعين من المعلومات: معلومات تقدمها مباشرة (اسمك وبريدك الإلكتروني والرسائل المرسلة عبر صفحة اتصل بنا)، ومعلومات تُجمع تلقائيًا (عنوان IP، نوع المتصفح والجهاز، الصفحات التي تمت زيارتها، وملفات تعريف الارتباط).' },
      { title: '٣. كيف نستخدم بياناتك', body: 'نستخدم معلوماتك للرد على رسائلك، وتحسين موقعنا والمحتوى الذي نقدمه، ومشاركة محتوى جديد معك، وفهم كيفية استخدام الزوار لفلنواء لتحسينها مستقبلًا.' },
      { title: '٤. ملفات تعريف الارتباط وتقنيات التتبع', body: 'تستخدم فلنواء ملفات تعريف الارتباط لتذكر لغتك المفضلة، وتحليل كيفية استخدام الزوار لصفحاتنا، وعرض إعلانات ذات صلة. يمكنك التحكم في ملفات تعريف الارتباط أو تعطيلها عبر إعدادات متصفحك.' },
      { title: '٥. إعلانات Google AdSense', body: 'تستخدم فلنواء خدمة Google AdSense لعرض الإعلانات. تستخدم Google، كطرف ثالث، ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لهذا الموقع ومواقع أخرى. يمكنك إلغاء الاشتراك في الإعلانات المخصصة عبر إعدادات إعلانات Google (adssettings.google.com).' },
      { title: '٦. أمن البيانات والاحتفاظ بها', body: 'نتخذ تدابير أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو سوء الاستخدام أو الإفصاح. نحتفظ ببيانات نموذج الاتصال فقط طالما كان ذلك ضروريًا للرد على استفسارك. لا نبيع معلوماتك الشخصية لأطراف ثالثة أبدًا.' },
      { title: '٧. حقوقك', body: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو طلب حذفها. لممارسة هذه الحقوق، يرجى التواصل معنا عبر صفحة اتصل بنا.' },
      { title: '٨. خصوصية الأطفال', body: 'لا تستهدف فلنواء الأطفال دون سن 13 عامًا، ولا نجمع عن علم معلومات شخصية عن الأطفال.' },
      { title: '٩. تغييرات على هذه السياسة', body: 'تحتفظ فلنواء بالحق في تحديث سياسة الخصوصية هذه في أي وقت. تسري التغييرات فور نشرها على هذه الصفحة، مع تحديث تاريخ المراجعة.' },
      { title: '١٠. اتصل بنا', body: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر صفحة اتصل بنا.' },
    ],
  }

  return (
    <>
      <LessonPage
        icon="🔒"
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