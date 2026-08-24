import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function PhpPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      {
        title: '1. Waa Maxay PHP?',
        body: 'PHP (Hypertext Preprocessor) waa luqad barnaamij-sameyn oo loo isticmaalo in la sameeyo qaybta "backend" ee websaydhyada — taasi waa qaybta aan la arki karin ee ka shaqeysa server-ka, halka HTML/CSS ay yihiin qaybta la arki karo (frontend). PHP waxay awoodaa inay xogta ka soo saarto database-yada, ka aqriso xogta foomamka, iyo inay bogagga u sameyso mid "dynamic" ah (isbedbeddela) halkii ay ka ahaan lahaayeen mid go\'an oo aan bedelin.',
      },
      {
        title: '2. Sababta Loo Barto PHP',
        body: 'PHP waxaa ku dhisan in ka badan 75% dhammaan websaydhyada adduunka — oo ay ku jiraan WordPress (kaas oo lagu dhisay malaayiin websaydh), Facebook (asal ahaan), iyo Wikipedia. Haddii aad rabto inaad si buuxda u fahanto sida websaydhyada dhabta ah loo dhiso — sida "login" iyo "sign up," bogagga bakhaarka (e-commerce), ama sida xogta loo kaydiyo — PHP waa mid ka mid ah luqadaha ugu muhiimsan ee aad bari kartid.',
      },
      {
        title: '3. Sida Loo Rakibo PHP',
        body: 'Si aad PHP u tijaabiso kombiyuutarkaaga, waxaad u baahan tahay "local server" — waxaa jira barnaamijyo bilaash ah oo la yiraahdo XAMPP ama WAMP oo kuu sameeya server dhammaystiran (PHP + MySQL database) hal mar. Soo deji XAMPP, install-garee, kadibna bilow "Apache" server-ka gudaha control panel-ka.',
      },
      {
        title: '4. Barnaamijkaaga Ugu Horeeya',
        body: 'PHP code-ku wuxuu ku jiraa file .php ah, oo bilaabma <?php una dhamaadaa ?>. Tusaale: <?php echo "Salaan, Adduunka!"; ?>. Marka bogga la booqdo browser-ka, waxaa la arki doonaa "Salaan, Adduunka!" — code-ka PHP-ga qudhiisu si toos ah looma arki karo, waxa la arkaa waa natiijada uu soo saaray.',
      },
      {
        title: '5. Variables iyo Xogta',
        body: 'Gudaha PHP, variables waxay bilaabmaan calaamadda $. Tusaale: $magac = "Cali"; wuxuu kaydiyaa qoraalka "Cali". PHP waxay taageertaa noocyo kala duwan oo xog ah: strings (qoraal), integers (tirooyin), booleans (true/false), iyo arrays (liisas). Tusaale array: $xayawaanno = ["libaax", "maroodi", "geel"];.',
      },
      {
        title: '6. Loops iyo Conditions',
        body: 'PHP waxay taageertaa if, else, for, iyo while — isla habka luqadaha kale ee barnaamij-sameynta. Tusaale: if ($da\'da >= 18) { echo "Waa qof weyn"; } else { echo "Wali ma weynin"; }. Loops-ku waxay kuu ogolaanayaan inaad ku celceliso hawlo, sida for ($i = 0; $i < 10; $i++) { echo $i; }.',
      },
      {
        title: '7. Functions',
        body: 'Sida Python iyo luqadaha kale, PHP waxay taageertaa functions — qaybo code ah oo mar la qoro oo dib loo isticmaali karo. Tusaale: function salaan($magac) { return "Salaan, " . $magac; }. Marka la yeero salaan("Cali"), wuxuu soo celin doonaa "Salaan, Cali".',
      },
      {
        title: '8. PHP iyo Database-yada',
        body: 'Mid ka mid ah waxyaabaha ugu muhiimsan ee PHP waa awoodda uu ku leeyahay inuu la shaqeeyo database-yada, gaar ahaan MySQL. Tusaale, websaydh caadi ah oo login ah wuxuu isticmaalaa PHP si uu u hubiyo magaca-isticmaale iyo password-ka gudaha database-ka, kadibna uu isticmaalaha u oggolaado inuu galo (login) haddii macluumaadku sax yahay.',
      },
      {
        title: '9. Talooyin Ku Saabsan Barashada',
        body: 'Si aad si degdeg ah u barato PHP: (1) Hubi inaad horay u fahantay HTML asaasiga ah ka hor inta aadan PHP bilaabin. (2) Samee mashruuc yar sida "guest book" oo isticmaalayaasha fariimo ku qori karaan. (3) Barasho MySQL waxay la socotaa PHP — labaduba way iskaashi jiraan. (4) Isticmaal "PHP: The Right Way" oo ah hage bilaash ah oo casri ah.',
      },
      {
        title: '10. Gunaanad',
        body: 'PHP wali waa mid ka mid ah luqadaha ugu isticmaalka badan interneka, in kasta oo ay jiraan luqado kale oo casri ah oo soo baxay. Haddii aad rabto inaad fahanto sida websaydhyada dhabta ah loo dhiso — gaar ahaan kuwa xogta bedelaya — PHP waa meel wanaagsan oo aad ka bilaabi karto.',
      },
    ],
    en: [
      {
        title: '1. What Is PHP?',
        body: 'PHP (Hypertext Preprocessor) is a programming language used to build the "backend" of websites — the invisible part that runs on the server, while HTML/CSS make up the visible part (frontend). PHP can pull data from databases, read form input, and make pages "dynamic" (changing) rather than fixed and unchanging.',
      },
      {
        title: '2. Why Learn PHP',
        body: 'PHP powers over 75% of all websites on the internet — including WordPress (which powers millions of sites), Facebook (originally), and Wikipedia. If you want to truly understand how real websites are built — things like "login" and "sign up," e-commerce pages, or how data gets stored — PHP is one of the most valuable languages you can learn.',
      },
      {
        title: '3. Installing PHP',
        body: 'To test PHP on your computer, you need a "local server" — free tools called XAMPP or WAMP set up a complete server (PHP + MySQL database) all at once. Download XAMPP, install it, then start the "Apache" server from the control panel.',
      },
      {
        title: '4. Your First Program',
        body: 'PHP code lives in a .php file, starting with <?php and ending with ?>. For example: <?php echo "Hello, World!"; ?>. When you visit the page in your browser, you\'ll see "Hello, World!" — the PHP code itself isn\'t visible; what you see is the output it produces.',
      },
      {
        title: '5. Variables and Data',
        body: 'In PHP, variables start with a $ sign. For example: $name = "Ali"; stores the text "Ali". PHP supports various data types: strings (text), integers (numbers), booleans (true/false), and arrays (lists). Example array: $animals = ["lion", "elephant", "camel"];.',
      },
      {
        title: '6. Loops and Conditions',
        body: 'PHP supports if, else, for, and while — just like other programming languages. For example: if ($age >= 18) { echo "Adult"; } else { echo "Not yet an adult"; }. Loops let you repeat tasks, like for ($i = 0; $i < 10; $i++) { echo $i; }.',
      },
      {
        title: '7. Functions',
        body: 'Like Python and other languages, PHP supports functions — reusable blocks of code written once. For example: function greet($name) { return "Hello, " . $name; }. When you call greet("Ali"), it returns "Hello, Ali".',
      },
      {
        title: '8. PHP and Databases',
        body: 'One of PHP\'s most important strengths is its ability to work with databases, especially MySQL. For example, a typical login website uses PHP to check the username and password against a database, then allows the user to log in if the information is correct.',
      },
      {
        title: '9. Tips for Learning',
        body: 'To learn PHP quickly: (1) Make sure you already understand basic HTML before starting PHP. (2) Build a small project like a "guest book" where users can write messages. (3) Learning MySQL goes hand in hand with PHP — the two work closely together. (4) Use "PHP: The Right Way," a free, modern guide.',
      },
      {
        title: '10. Conclusion',
        body: "PHP remains one of the most widely used languages on the internet, even as newer languages have emerged. If you want to understand how real, data-driven websites are built, PHP is a great place to start.",
      },
    ],
    ar: [
      {
        title: '1. ما هي لغة PHP؟',
        body: 'بي إتش بي (PHP) هي لغة برمجة تُستخدم لبناء "الخلفية" (backend) للمواقع الإلكترونية - الجزء غير المرئي الذي يعمل على الخادم، بينما تشكّل HTML وCSS الجزء المرئي (الواجهة الأمامية). يمكن لـ PHP سحب البيانات من قواعد البيانات، وقراءة مدخلات النماذج، وجعل الصفحات "ديناميكية" (متغيرة) بدلًا من ثابتة لا تتغير.',
      },
      {
        title: '2. لماذا تتعلم PHP',
        body: 'تُشغّل PHP أكثر من 75% من جميع المواقع الإلكترونية على الإنترنت - بما في ذلك WordPress (الذي يُشغّل ملايين المواقع)، وFacebook (في الأصل)، وWikipedia. إذا كنت تريد أن تفهم حقًا كيف تُبنى المواقع الإلكترونية الحقيقية - أشياء مثل "تسجيل الدخول" و"إنشاء حساب"، وصفحات التجارة الإلكترونية، أو كيفية تخزين البيانات - فإن PHP من أكثر اللغات التي تستحق التعلم.',
      },
      {
        title: '3. تثبيت PHP',
        body: 'لاختبار PHP على جهازك، تحتاج إلى "خادم محلي" - أدوات مجانية تُسمى XAMPP أو WAMP تُعدّ خادمًا كاملاً (PHP + قاعدة بيانات MySQL) دفعة واحدة. نزّل XAMPP، ثبّته، ثم شغّل خادم "Apache" من لوحة التحكم.',
      },
      {
        title: '4. برنامجك الأول',
        body: 'تعيش شيفرة PHP في ملف .php، تبدأ بـ <?php وتنتهي بـ ?>. على سبيل المثال: <?php echo "Hello, World!"; ?>. عند زيارة الصفحة في متصفحك، سترى "Hello, World!" - شيفرة PHP نفسها غير مرئية؛ ما تراه هو الناتج الذي تنتجه.',
      },
      {
        title: '5. المتغيرات والبيانات',
        body: 'في PHP، تبدأ المتغيرات بعلامة $. على سبيل المثال: $name = "Ali"; يخزّن النص "Ali". تدعم PHP أنواعًا مختلفة من البيانات: النصوص (strings)، الأعداد الصحيحة (integers)، القيم المنطقية (true/false)، والمصفوفات (arrays). مثال على مصفوفة: $animals = ["lion", "elephant", "camel"];.',
      },
      {
        title: '6. الحلقات والشروط',
        body: 'تدعم PHP if وelse وfor وwhile - تمامًا مثل لغات البرمجة الأخرى. على سبيل المثال: if ($age >= 18) { echo "بالغ"; } else { echo "لم يبلغ بعد"; }. تتيح لك الحلقات تكرار المهام، مثل for ($i = 0; $i < 10; $i++) { echo $i; }.',
      },
      {
        title: '7. الدوال (Functions)',
        body: 'مثل بايثون ولغات أخرى، تدعم PHP الدوال - أجزاء من الشيفرة قابلة لإعادة الاستخدام تُكتب مرة واحدة. على سبيل المثال: function greet($name) { return "Hello, " . $name; }. عند استدعاء greet("Ali")، سيُرجع "Hello, Ali".',
      },
      {
        title: '8. PHP وقواعد البيانات',
        body: 'من أهم نقاط قوة PHP قدرتها على العمل مع قواعد البيانات، خاصة MySQL. على سبيل المثال، يستخدم موقع تسجيل دخول نموذجي PHP للتحقق من اسم المستخدم وكلمة المرور مقابل قاعدة بيانات، ثم يسمح للمستخدم بتسجيل الدخول إذا كانت المعلومات صحيحة.',
      },
      {
        title: '9. نصائح للتعلم',
        body: 'لتتعلم PHP بسرعة: (1) تأكد من أنك تفهم بالفعل أساسيات HTML قبل البدء بـ PHP. (2) ابنِ مشروعًا صغيرًا مثل "دفتر زوار" حيث يمكن للمستخدمين كتابة رسائل. (3) يسير تعلّم MySQL جنبًا إلى جنب مع PHP - يعمل الاثنان معًا بشكل وثيق. (4) استخدم "PHP: The Right Way"، وهو دليل مجاني وحديث.',
      },
      {
        title: '10. الخاتمة',
        body: 'لا تزال PHP واحدة من أكثر اللغات استخدامًا على الإنترنت، حتى مع ظهور لغات أحدث. إذا كنت تريد أن تفهم كيف تُبنى المواقع الإلكترونية الحقيقية المعتمدة على البيانات، فإن PHP نقطة انطلاق ممتازة.',
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
          background: 'radial-gradient(circle, rgba(119,123,180,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🐘</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Barashada PHP' : lang === 'ar' ? 'تعلم PHP' : 'Learning PHP'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto backend-ka websaydhyada.'
              : lang === 'ar'
              ? 'دليل شامل للمبتدئين لتعلم خلفية المواقع الإلكترونية.'
              : "A complete beginner's guide to website backends."}
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
                  color: '#777BB4',
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