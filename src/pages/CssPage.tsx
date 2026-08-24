import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'


export function CssPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      {
        title: '1. Waa Maxay CSS?',
        body: 'CSS (Cascading Style Sheets) waa luqadda loo isticmaalo in la qurxiyo (naqshadeeyo) websaydhyada. Haddii HTML uu yahay qaab-dhismeedka guriga (loox-ka, derbiyada), CSS waa midabka, sawirrada darbiga, iyo alaabta guriga — waxa ka dhigaya bogga mid qurux badan oo la eegi karo. CSS waxay go\'aamisaa midabada, qaababka, xajmiga, iyo sida qaybaha bogga loo kala qaybiyo.',
      },
      {
        title: '2. Sababta Loo Barto CSS',
        body: 'HTML kaligeed wuxuu ka dhigayaa bogga mid caadi ah oo aan lahayn midab (asalka ahaan qoraal cad iyo madow oo kaliya). CSS waa waxa loo isticmaalo in bog kasta lagu beddelo mid casri ah, xiiso leh, oo iskaashi la yeesho isticmaalayaasha (users). Nin kasta oo rabo inuu noqdo Web Designer ama Front-End Developer, CSS waa xirfad lagama maarmaan ah. Waxaad sidoo kale u baahan tahay CSS si aad website-kaaga ugu habeyso inuu si fiican u shaqeeyo mobile-ka iyo kombiyuutarka labadaba (responsive design).',
      },
      {
        title: '3. Sida CSS Loogu Xiro HTML',
        body: 'Waxaa jira saddex hab oo CSS loogu xiro HTML: (1) Inline — style-ka gudaha HTML tag-ka lagu qoro si toos ah. (2) Internal — style-ka gudaha style tag-ka ee head-ka lagu qoro. (3) External — file gaar ah oo .css ah oo lagu xiro link tag-ka. Habka External-ka ayaa ugu wanaagsan mashaariicda waaweyn, maadaama uu kuu ogolaanayo inaad ku beddesho naqshadeeynta bogag badan hal file oo kaliya.',
      },
      {
        title: '4. Selectors (Doorashada)',
        body: 'CSS waxay isticmaashaa "selectors" si ay u doorato element-ka aad rabto inaad naqshadeyso. Tusaale: h1 { color: blue; } wuxuu ka dhigayaa dhammaan cinwaannada h1 midab buluug ah. Waxaad sidoo kale isticmaali kartaa classes iyo IDs si aad si gaar ah u doorato element gaar ah.',
      },
      {
        title: '5. Midabada iyo Qoraalka',
        body: 'CSS waxay kuu ogolaataa inaad beddesho midabada adigoo isticmaalaya color (qoraalka) iyo background-color (asalka). Midabada waxaad ku qori kartaa magacyo (sida red), ama codes (sida #FF0000). Xagga qoraalka, waxaad isticmaali kartaa font-size (xajmiga), font-family (nooca far-qoraalka), iyo font-weight (culeyska, sida bold).',
      },
      {
        title: '6. Box Model (Qaabka Sanduuqa)',
        body: 'Element kasta oo HTML ah waxaa loo arkaa sida sanduuq. Box Model wuxuu ka kooban yahay: content (waxa gudaha ku jira), padding (booska u dhexeeya content-ka iyo soohdinta), border (soohdinta), iyo margin (booska u dhexeeya element-ka iyo kuwa kale). Fahamka Box Model-ka waa muhiim si aad si sax ah u qaabeyso bogga.',
      },
      {
        title: '7. Flexbox iyo Grid',
        body: 'Flexbox iyo CSS Grid waa laba qalab oo casri ah oo loo isticmaalo in qaybaha bogga si fiican loo kala qaybiyo (layout). display: flex wuxuu kaa caawiyaa inaad qaybo u kala dhigto saf (row) ama tiir (column) si fudud. display: grid waa mid ka awood badan, oo kuu ogolaanaya inaad sameyso qaabab kala duwan oo grid ah — sida websaydhyada casriga ah oo dhan.',
      },
      {
        title: '8. Responsive Design',
        body: 'Maadaama dadku ay isticmaalaan mobile, tablet, iyo kombiyuutarro kala duwan, waa muhiim in website-ku si fiican ugu shaqeeyo dhammaantood. Waxaad isticmaashaa "media queries" (tusaale: @media (max-width: 600px)) si aad naqshadeynta ugu beddesho marka shaashadda ay yar tahay. Taasi waxaa loo yaqaanaa "Responsive Design."',
      },
      {
        title: '9. Talooyin Ku Saabsan Barashada',
        body: 'Si aad si degdeg ah u barato CSS: (1) Bilow beddelidda naqshadeynta bogga HTML-ka aad hore u samaysay. (2) Isticmaal Flexbox marka hore, maadaama uu ka fudud yahay Grid. (3) Ku celceli tijaabinta midabada iyo qaababka kala duwan ilaa aad qaniinsato waxa la eegi doono. (4) Isticmaal "CSS Tricks" iyo "MDN Web Docs" oo ah ilo bilaash ah oo qiimo leh.',
      },
      {
        title: '10. Gunaanad',
        body: 'CSS waa waxa u beddela bogagga HTML-ka noocyo qurux badan oo casri ah. Marka aad isku darto HTML (qaab-dhismeed) iyo CSS (naqshad), waxaad heli kartaa in aad samayso websaydh dhab ah oo bogga u muuqda. Sii wad barashada — xigta wuxuu ahaan doonaa JavaScript, kaas oo dhaqdhaqaaq ku darsan doona.',
      },
    ],
    en: [
      {
        title: '1. What Is CSS?',
        body: 'CSS (Cascading Style Sheets) is the language used to style and design websites. If HTML is the structure of a house (the floor, walls), CSS is the paint color, wall decorations, and furniture — what makes a page beautiful to look at. CSS determines colors, fonts, sizes, and how sections of a page are arranged.',
      },
      {
        title: '2. Why Learn CSS',
        body: 'HTML alone makes a page look plain, with no color at all (just black text on white). CSS is what transforms any page into something modern, engaging, and pleasant for users to interact with. For anyone wanting to become a Web Designer or Front-End Developer, CSS is an essential skill. You also need CSS to make your website work well on both mobile and desktop devices (responsive design).',
      },
      {
        title: '3. How to Link CSS to HTML',
        body: 'There are three ways to connect CSS to HTML: (1) Inline — writing style directly inside an HTML tag. (2) Internal — writing style inside a style tag in the head. (3) External — a separate .css file linked via a link tag. The external method is best for larger projects, since it lets you update the styling of many pages from a single file.',
      },
      {
        title: '4. Selectors',
        body: 'CSS uses "selectors" to choose which element you want to style. For example: h1 { color: blue; } makes all h1 headings blue. You can also use classes and IDs to specifically target a particular element.',
      },
      {
        title: '5. Colors and Text',
        body: 'CSS lets you change colors using color (for text) and background-color (for the background). Colors can be written as names (like red) or codes (like #FF0000). For text, you can use font-size (size), font-family (font type), and font-weight (weight, like bold).',
      },
      {
        title: '6. The Box Model',
        body: 'Every HTML element is treated like a box. The Box Model consists of: content (what\'s inside), padding (space between content and the border), border (the edge), and margin (space between the element and others). Understanding the Box Model is essential for laying out a page correctly.',
      },
      {
        title: '7. Flexbox and Grid',
        body: 'Flexbox and CSS Grid are two modern tools used to arrange page sections (layout). display: flex helps you easily arrange elements in a row or column. display: grid is even more powerful, letting you create various grid-based layouts — like those found across most modern websites.',
      },
      {
        title: '8. Responsive Design',
        body: 'Since people use mobile phones, tablets, and computers of all sizes, it\'s essential that a website works well across all of them. You use "media queries" (for example: @media (max-width: 600px)) to change the styling when the screen is small. This is known as "Responsive Design."',
      },
      {
        title: '9. Tips for Learning',
        body: 'To learn CSS quickly: (1) Start by styling the HTML page you\'ve already built. (2) Learn Flexbox first, since it\'s simpler than Grid. (3) Keep experimenting with different colors and layouts until you get a feel for how they\'ll look. (4) Use resources like "CSS Tricks" and "MDN Web Docs," which are excellent free references.',
      },
      {
        title: '10. Conclusion',
        body: 'CSS is what transforms plain HTML pages into beautiful, modern designs. When you combine HTML (structure) and CSS (styling), you can build a real website that actually looks great. Keep learning — next up is JavaScript, which will add interactivity.',
      },
    ],
    ar: [
      {
        title: '1. ما هي لغة CSS؟',
        body: 'سي إس إس (CSS) هي اللغة المستخدمة لتنسيق وتصميم المواقع الإلكترونية. إذا كانت HTML هي هيكل المنزل (الأرضية، الجدران)، فإن CSS هي لون الطلاء وزخارف الجدران والأثاث - ما يجعل الصفحة جميلة للنظر إليها. تحدد CSS الألوان والخطوط والأحجام وكيفية ترتيب أقسام الصفحة.',
      },
      {
        title: '2. لماذا تتعلم CSS',
        body: 'تجعل HTML وحدها الصفحة تبدو عادية، بلا لون على الإطلاق (فقط نص أسود على أبيض). CSS هي ما يحوّل أي صفحة إلى شيء عصري وجذاب وممتع للمستخدمين للتفاعل معه. لأي شخص يريد أن يصبح مصمم ويب أو مطور واجهات أمامية، تُعتبر CSS مهارة أساسية. تحتاج أيضًا إلى CSS لجعل موقعك يعمل بشكل جيد على الهاتف المحمول وسطح المكتب على حد سواء (التصميم المتجاوب).',
      },
      {
        title: '3. كيفية ربط CSS بـ HTML',
        body: 'هناك ثلاث طرق لربط CSS بـ HTML: (1) داخلي مباشر - كتابة النمط مباشرة داخل وسم HTML. (2) داخلي - كتابة النمط داخل وسم style في head. (3) خارجي - ملف .css منفصل يُربط عبر وسم link. الطريقة الخارجية هي الأفضل للمشاريع الكبيرة، لأنها تتيح لك تحديث تصميم صفحات عديدة من ملف واحد فقط.',
      },
      {
        title: '4. المحددات (Selectors)',
        body: 'تستخدم CSS "المحددات" لاختيار العنصر الذي تريد تنسيقه. على سبيل المثال: h1 { color: blue; } يجعل كل عناوين h1 زرقاء اللون. يمكنك أيضًا استخدام الفئات (class) والمعرّفات (id) لاستهداف عنصر معين بشكل محدد.',
      },
      {
        title: '5. الألوان والنصوص',
        body: 'تتيح لك CSS تغيير الألوان باستخدام color (للنص) وbackground-color (للخلفية). يمكن كتابة الألوان كأسماء (مثل red) أو أكواد (مثل #FF0000). بالنسبة للنص، يمكنك استخدام font-size (الحجم)، وfont-family (نوع الخط)، وfont-weight (السُمك، مثل الخط العريض).',
      },
      {
        title: '6. نموذج الصندوق (Box Model)',
        body: 'يُعامل كل عنصر HTML كصندوق. يتكون نموذج الصندوق من: المحتوى (ما بداخله)، الحشو padding (المسافة بين المحتوى والحدود)، الحدود border، والهامش margin (المسافة بين العنصر والعناصر الأخرى). فهم نموذج الصندوق أساسي لترتيب الصفحة بشكل صحيح.',
      },
      {
        title: '7. Flexbox وGrid',
        body: 'Flexbox وCSS Grid أداتان حديثتان تُستخدمان لترتيب أقسام الصفحة (التخطيط). يساعدك display: flex على ترتيب العناصر بسهولة في صف أو عمود. أما display: grid فهو أكثر قوة، إذ يتيح لك إنشاء تخطيطات شبكية متنوعة - كتلك الموجودة في معظم المواقع الحديثة.',
      },
      {
        title: '8. التصميم المتجاوب',
        body: 'بما أن الناس يستخدمون الهواتف المحمولة والأجهزة اللوحية وأجهزة الكمبيوتر بأحجام مختلفة، من الضروري أن يعمل الموقع بشكل جيد على جميعها. تستخدم "استعلامات الوسائط" (media queries) (مثال: @media (max-width: 600px)) لتغيير التنسيق عندما تكون الشاشة صغيرة. يُعرف هذا بـ "التصميم المتجاوب."',
      },
      {
        title: '9. نصائح للتعلم',
        body: 'لتتعلم CSS بسرعة: (1) ابدأ بتنسيق صفحة HTML التي بنيتها بالفعل. (2) تعلّم Flexbox أولاً، لأنه أبسط من Grid. (3) استمر في تجربة ألوان وتخطيطات مختلفة حتى تكتسب حسًا بكيفية ظهورها. (4) استخدم مصادر مثل "CSS Tricks" و"MDN Web Docs"، وهي مراجع مجانية ممتازة.',
      },
      {
        title: '10. الخاتمة',
        body: 'CSS هي ما يحوّل صفحات HTML العادية إلى تصاميم جميلة وعصرية. عندما تجمع بين HTML (الهيكل) وCSS (التصميم)، يمكنك بناء موقع حقيقي يبدو رائعًا فعلاً. واصل التعلم - القادم هو JavaScript، الذي سيضيف التفاعلية.',
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
          background: 'radial-gradient(circle, rgba(21,114,182,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎨</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Barashada CSS' : lang === 'ar' ? 'تعلم CSS' : 'Learning CSS'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto naqshadaynta websaydhyada.'
              : lang === 'ar'
              ? 'دليل شامل للمبتدئين لتعلم تصميم المواقع الإلكترونية.'
              : "A complete beginner's guide to styling websites."}
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
                  color: '#1572B6',
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