import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'


export function HtmlPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      {
        title: '1. Waa Maxay HTML?',
        body: 'HTML (HyperText Markup Language) ma aha luqad barnaamij-sameyn oo dhab ah, ee waa "markup language" — waxaana loo isticmaalaa in la dhiso qaab-dhismeedka (structure) websaydhyada. Bog kasta oo aad internet-ka ka aragto — cinwaannada, qoraalka, sawirrada, iyo buttons-ka — waxaa lagu dhisay HTML. Haddii aad u malaynayso website-ka sida guri, HTML waa qaab-dhismeedka (loox-ka, derbiyada, iyo saqafka) ee guriga.',
      },
      {
        title: '2. Sababta Loo Barto HTML',
        body: 'HTML waa saldhigga (foundation) ugu horeeya ee la barto marka la barto samaynta websaydhyada. Haddii aad rabto inaad noqoto Web Developer, HTML waa bilowga safarkaaga. Waxay kuu fududaynaysaa inaad hadhow barato CSS (naqshadaynta) iyo JavaScript (dhaqdhaqaaqa), maadaama labadaasba ay ku shaqeeyaan HTML-ka gudihiisa. Sidoo kale, HTML aad bay u fudud tahay in la barto — kuma baahnid khibrad hore.',
      },
      {
        title: '3. Sida Loo Bilaabo',
        body: 'Uma baahnid inaad wax rakibto si aad HTML u barato — kaliya waxaad u baahan tahay browser (sida Chrome) iyo text editor (sida VS Code, oo bilaash ah). Fur VS Code, samee file cusub oo la yiraahdo index.html, kadibna bilow qoraalkaaga.',
      },
      {
        title: '4. Qaab-Dhismeedka Aasaasiga Ah',
        body: 'Bog kasta oo HTML ah wuxuu bilaabmaa qaab la mid ah: DOCTYPE html (ku tilmaamaya browser-ka in bogga uu yahay HTML), html (guudka dhammaan content-ka), head (macluumaad aan la arki karin sida title-ka), iyo body (dhammaan waxa la arki karo — qoraalka, sawirrada, iwm). Qaab-dhismeed kasta wuxuu ku dhamaadaa /html.',
      },
      {
        title: '5. Elements-ka Ugu Muhiimsan',
        body: 'HTML waxay isticmaashaa "tags" si ay u qeexdo qaybaha kala duwan. Tusaale: h1 waxaa loo isticmaalaa cinwaanka ugu weyn, p waxaa loo isticmaalaa jumlado (paragraphs), img waxaa lagu daraa sawirro, a waxaa lagu sameeyaa links (xiriirinta bogag kale), iyo div waxaa loo isticmaalaa in qaybo la kala qeybiyo. Tag kasta wuxuu leeyahay mid furan iyo mid xiran.',
      },
      {
        title: '6. Liisas (Lists)',
        body: 'HTML waxay kuu ogolaataa inaad sameyso liisas laba nooc ah: ul (liis aan tirooyin lahayn, dhibcaha la yiraahdo bullet points) iyo ol (liis tirooyin leh). Gudaha liiskaas, waxaad ku darsataa li (list item) tag kasta oo qayb liiska ka mid ah.',
      },
      {
        title: '7. Foomamka (Forms)',
        body: 'Foomamku waa qayb aad muhiim u ah websaydhyada — waxaa loo isticmaalaa inay isticmaaleyaashu ku qoraan xog, sida magac, email, ama fariin. Waxaad isticmaashaa form tag-ka, gudihiisana input (halka xogta lagu qoro) iyo button (badhanka la riixo si loo gudbiyo).',
      },
      {
        title: '8. Sida Loogu Daro CSS iyo JavaScript',
        body: 'HTML keligeed waxay leedahay kaliya qaab-dhismeed — uma lihi midab ama naqshad. Si aad naqshad ugu dartid, waxaad ku xirtaa file CSS ah adigoo isticmaalaya link tag-ka gudaha head. Si aad dhaqdhaqaaq ugu dartid (sida button oo la riixo), waxaad isticmaashaa script tag-ka si aad JavaScript ugu darto.',
      },
      {
        title: '9. Talooyin Ku Saabsan Barashada',
        body: 'Si aad si degdeg ah u barato HTML: (1) Samee website yar oo bio ah — magacaaga, sawir, iyo qoraal kooban. (2) Isticmaal "Inspect Element" gudaha browser-ka si aad u aragto sida websaydhyada kale loo dhisay. (3) Ha ku qasbin naftaada inaad xasuusato tags-ka oo dhan — waxaad heli kartaa "cheat sheets" bilaash ah. (4) Sii wad barashada CSS marka aad HTML ku qanacsan tahay, si aad naqshad ugu darto.',
      },
      {
        title: '10. Gunaanad',
        body: 'HTML waa albaabka koowaad ee kuu furan kara adduunka Web Development. In kasta oo ay tahay mid fudud oo aan adkeyn, waxay ka dhigan tahay saldhig lagama maarmaan ah oo aad ku dul dhisi karto xirfad weyn. Bilow maanta — samee bogaaga HTML-ka koowaad!',
      },
    ],
    en: [
      {
        title: '1. What Is HTML?',
        body: 'HTML (HyperText Markup Language) isn\'t truly a programming language — it\'s a "markup language" used to build the structure of websites. Every page you see on the internet — the headings, text, images, and buttons — is built with HTML. If you think of a website like a house, HTML is the structure (the floor, walls, and roof) of that house.',
      },
      {
        title: '2. Why Learn HTML',
        body: "HTML is the very first foundation you learn when studying web development. If you want to become a web developer, HTML is the start of your journey. It makes it much easier to later learn CSS (styling) and JavaScript (interactivity), since both of those work within HTML. HTML is also remarkably easy to learn — you don't need any prior experience.",
      },
      {
        title: '3. How to Get Started',
        body: 'You don\'t need to install anything to learn HTML — you only need a browser (like Chrome) and a text editor (like VS Code, which is free). Open VS Code, create a new file called index.html, and start writing.',
      },
      {
        title: '4. Basic Structure',
        body: 'Every HTML page starts with a similar structure: DOCTYPE html (tells the browser this is an HTML page), html (wraps all the content), head (invisible information like the title), and body (everything you can see — text, images, etc.). Every structure ends with the closing html tag.',
      },
      {
        title: '5. Essential Elements',
        body: 'HTML uses "tags" to define different sections. For example: h1 is used for the main heading, p for paragraphs, img to add images, a to create links (connecting to other pages), and div to group sections together. Every tag has an opening and a closing version.',
      },
      {
        title: '6. Lists',
        body: 'HTML lets you create two types of lists: ul (an unordered list, with bullet points) and ol (an ordered list, with numbers). Inside either list, you add an li (list item) tag for each list entry.',
      },
      {
        title: '7. Forms',
        body: 'Forms are a crucial part of websites — used to let users submit data, like a name, email, or message. You use the form tag, and inside it, input (where data is entered) and button (the button that submits it).',
      },
      {
        title: '8. Adding CSS and JavaScript',
        body: 'HTML alone only provides structure — it has no color or design. To add styling, you link a CSS file using the link tag inside head. To add interactivity (like a clickable button), you use the script tag to add JavaScript.',
      },
      {
        title: '9. Tips for Learning',
        body: 'To learn HTML quickly: (1) Build a small personal bio website — your name, a photo, and a short description. (2) Use "Inspect Element" in your browser to see how other websites are built. (3) Don\'t force yourself to memorize every tag — free "cheat sheets" are widely available. (4) Move on to learning CSS once you\'re comfortable with HTML, to start adding style.',
      },
      {
        title: '10. Conclusion',
        body: "HTML is the first door that opens into the world of web development. Though simple and not difficult, it's an essential foundation upon which you can build a great career. Start today — build your very first HTML page!",
      },
    ],
    ar: [
      {
        title: '1. ما هي لغة HTML؟',
        body: 'إتش تي إم إل (HTML) ليست في الحقيقة لغة برمجة - إنها "لغة توصيف" (markup language) تُستخدم لبناء هيكل المواقع الإلكترونية. كل صفحة تراها على الإنترنت - العناوين، النصوص، الصور، والأزرار - مبنية بلغة HTML. إذا تخيلت الموقع الإلكتروني كمنزل، فإن HTML هي الهيكل (الأرضية والجدران والسقف) لهذا المنزل.',
      },
      {
        title: '2. لماذا تتعلم HTML',
        body: 'تُعتبر HTML الأساس الأول الذي تتعلمه عند دراسة تطوير الويب. إذا كنت تريد أن تصبح مطور ويب، فإن HTML هي بداية رحلتك. تجعل من السهل جدًا لاحقًا تعلم CSS (التنسيق) وJavaScript (التفاعلية)، لأن كليهما يعملان داخل HTML. كما أن HTML سهلة التعلم بشكل ملحوظ - لا تحتاج إلى أي خبرة مسبقة.',
      },
      {
        title: '3. كيفية البدء',
        body: 'لا تحتاج إلى تثبيت أي شيء لتعلم HTML - تحتاج فقط إلى متصفح (مثل Chrome) ومحرر نصوص (مثل VS Code، وهو مجاني). افتح VS Code، أنشئ ملفًا جديدًا باسم index.html، وابدأ الكتابة.',
      },
      {
        title: '4. الهيكل الأساسي',
        body: 'تبدأ كل صفحة HTML بهيكل مشابه: DOCTYPE html (يخبر المتصفح أن هذه صفحة HTML)، html (يحتوي كل المحتوى)، head (معلومات غير مرئية مثل العنوان)، وbody (كل ما يمكن رؤيته - النصوص، الصور، إلخ). ينتهي كل هيكل بوسم إغلاق html.',
      },
      {
        title: '5. العناصر الأساسية',
        body: 'تستخدم HTML "الوسوم" (tags) لتحديد الأقسام المختلفة. على سبيل المثال: h1 يُستخدم للعنوان الرئيسي، p للفقرات، img لإضافة الصور، a لإنشاء الروابط (الاتصال بصفحات أخرى)، وdiv لتجميع الأقسام معًا. لكل وسم نسخة افتتاحية ونسخة ختامية.',
      },
      {
        title: '6. القوائم',
        body: 'تتيح لك HTML إنشاء نوعين من القوائم: ul (قائمة غير مرقمة، بنقاط) وol (قائمة مرقمة، بأرقام). داخل أي من القائمتين، تضيف وسم li (عنصر القائمة) لكل عنصر في القائمة.',
      },
      {
        title: '7. النماذج (Forms)',
        body: 'النماذج جزء أساسي من المواقع الإلكترونية - تُستخدم للسماح للمستخدمين بإرسال بيانات، مثل الاسم أو البريد الإلكتروني أو رسالة. تستخدم وسم form، وبداخله input (حيث تُدخل البيانات) وbutton (الزر الذي يرسلها).',
      },
      {
        title: '8. إضافة CSS وJavaScript',
        body: 'توفر HTML وحدها الهيكل فقط - لا لون ولا تصميم فيها. لإضافة التنسيق، تربط ملف CSS باستخدام وسم link داخل head. لإضافة التفاعلية (مثل زر قابل للنقر)، تستخدم وسم script لإضافة JavaScript.',
      },
      {
        title: '9. نصائح للتعلم',
        body: 'لتتعلم HTML بسرعة: (1) ابنِ موقعًا شخصيًا صغيرًا - اسمك، صورة، ووصف قصير. (2) استخدم "Inspect Element" في متصفحك لترى كيف بُنيت مواقع أخرى. (3) لا تُجبر نفسك على حفظ كل وسم - تتوفر "أوراق مرجعية" مجانية على نطاق واسع. (4) انتقل لتعلم CSS بمجرد أن ترتاح مع HTML، لتبدأ إضافة التصميم.',
      },
      {
        title: '10. الخاتمة',
        body: 'HTML هي الباب الأول الذي يفتح على عالم تطوير الويب. رغم أنها بسيطة وغير صعبة، إلا أنها أساس ضروري يمكنك البناء عليه لمسيرة مهنية عظيمة. ابدأ اليوم - ابنِ صفحة HTML الأولى الخاصة بك!',
      },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)',
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
          background: 'radial-gradient(circle, rgba(227,79,38,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌐</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Barashada HTML' : lang === 'ar' ? 'تعلم HTML' : 'Learning HTML'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto qaab-dhismeedka websaydhyada.'
              : lang === 'ar'
              ? 'دليل شامل للمبتدئين لتعلم هيكل المواقع الإلكترونية.'
              : "A complete beginner's guide to structuring websites."}
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
                  color: '#E34F26',
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