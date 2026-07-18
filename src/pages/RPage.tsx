import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function RPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      {
        title: '1. Waa Maxay R?',
        body: 'R waa luqad barnaamij-sameyn oo si gaar ah loogu talogalay falanqaynta xogta (data analysis), istaatistigga (statistics), iyo muuqaalinta xogta (data visualization). Waxaa sameeyay laba culimo ah oo la yiraahdo Ross Ihaka iyo Robert Gentleman sanadkii 1993. Halka Python uu yahay luqad general-purpose ah (loo isticmaalo wax kasta), R waxaa loo dhisay gaar ahaan xogta iyo istaatistigga — taasi waxay ka dhigan tahay mid aad ugu fiican falanqaynta xogta.',
      },
      {
        title: '2. Sababta Loo Barto R',
        body: 'Haddii aad xiiseyneyso xogta (data science), cilmiga bulshada (social science), cilmiga caafimaadka, ama cilmi-baaris kasta oo u baahan istaatistig, R waa luqad muhiim ah. Waxaa loo isticmaalaa jaamacadaha, cilmi-baarista caafimaadka, dhaqaalaha, iyo shirkadaha waaweyn si loo falanqeeyo xogta si sax ah. R waxay leedahay maktabado (libraries) aad u tiro badan oo gaar ugu talagalay muuqaalinta xogta oo qurux badan (sida ggplot2).',
      },
      {
        title: '3. Sida Loo Rakibo R',
        body: 'Waxaad R ka soo dejin kartaa website-ka rasmiga ah (r-project.org). Marka aad soo dejiso, waxaan kula talinaynaa inaad sidoo kale soo dejiso RStudio — barnaamij bilaash ah oo ka dhigaya R mid aad u fudud in la isticmaalo, isagoo leh qaab-dhismeed la eegi karo (interface) oo casri ah.',
      },
      {
        title: '4. Barnaamijkaaga Ugu Horeeya',
        body: 'Marka aad RStudio furto, waxaad qori kartaa: print("Salaan, Adduunka!"). Riix "Run" (ama Ctrl+Enter), waxaad arki doontaa natiijada. R waxay sidoo kale u ogolaataa inaad si toos ah tirooyin ugu qorto, tusaale 5 + 3 wuxuu si toos ah soo celin doonaa 8.',
      },
      {
        title: '5. Variables iyo Vectors',
        body: 'Gudaha R, waxaad variable u sameysaa adigoo isticmaalaya arrow-ka (<-) (halkii =). Tusaale: magac <- "Cali". Mid ka mid ah waxyaabaha ugu awoodda badan ee R waa "vectors" — liisas tirooyin ah. Tusaale: tirooyin <- c(1, 2, 3, 4, 5) wuxuu sameeyaa vector ka kooban 5 tiro.',
      },
      {
        title: '6. Loops iyo Conditions',
        body: 'R waxay taageertaa if, else, iyo for loops. Tusaale: for (i in 1:5) { print(i) } wuxuu daabici doonaa tirooyinka 1 ilaa 5. Sidoo kale, if (da\'da >= 18) { print("Waa qof weyn") } wuxuu tijaabin doonaa xaalad.',
      },
      {
        title: '7. Data Frames',
        body: '"Data Frame" waa mid ka mid ah waxyaabaha ugu muhiimsan ee R — waxay u eg tahay xaashi Excel ah oo leh saf iyo tiir. Tusaale: xogta <- data.frame(magac = c("Cali", "Faadumo"), da\'da = c(25, 30)). Data Frames waxaa lagu kaydiyaa xog dhab ah oo la falanqayn karo — sida xogta xarunta caafimaadka, iibka shirkadda, iwm.',
      },
      {
        title: '8. Muuqaalinta Xogta (Data Visualization)',
        body: 'Mid ka mid ah sababaha R uu ugu caansan yahay waa awoodda uu ku leeyahay muuqaalinta xogta. Maktabadda ggplot2 waxay kuu ogolaataa inaad samayso jaantusyo (charts) qurux badan oo casri ah — bar charts, line graphs, iyo scatter plots — hal sadar oo code ah oo kaliya. Tusaale: plot(xogta$da\'da) wuxuu si degdeg ah u sameeyaa jaantus fudud.',
      },
      {
        title: '9. Talooyin Ku Saabsan Barashada',
        body: 'Si aad si degdeg ah u barato R: (1) Isticmaal RStudio, maadaama uu ka dhigayo barashada mid aad u fudud. (2) Bilow xog yar oo dhab ah, sida xogta cimilada ama iibka, oo isku day inaad falanqayso. (3) Baro ggplot2 marka hore, maadaama uu yahay maktabadda ugu awoodda badan xagga muuqaalinta. (4) Isticmaal DataCamp iyo websaydhyada kale ee bilaashka ah ee ku takhasusay R.',
      },
      {
        title: '10. Gunaanad',
        body: 'R waa qalab awood badan oo aad muhiim ugu tahay qofkasta oo rabo inuu ka shaqeeyo xogta, istaatistigga, ama cilmi-baarista. In kasta oo aanay caansanayn sida Python, waxay siisaa awood gaar ah oo ku takhasusay falanqaynta xogta oo aan luqado kale la heli karin si fudud.',
      },
    ],
    en: [
      {
        title: '1. What Is R?',
        body: 'R is a programming language specifically designed for data analysis, statistics, and data visualization. It was created by two scholars, Ross Ihaka and Robert Gentleman, in 1993. While Python is a general-purpose language (used for everything), R was built specifically for data and statistics — which makes it exceptionally strong for analyzing data.',
      },
      {
        title: '2. Why Learn R',
        body: 'If you\'re interested in data science, social science, healthcare research, or any research field requiring statistics, R is an essential language. It\'s used across universities, medical research, economics, and major companies to accurately analyze data. R has an enormous number of libraries specifically built for beautiful data visualization (such as ggplot2).',
      },
      {
        title: '3. Installing R',
        body: 'You can download R from its official website (r-project.org). Once downloaded, we recommend also downloading RStudio — a free program that makes R much easier to use, with a modern, user-friendly interface.',
      },
      {
        title: '4. Your First Program',
        body: 'Once you open RStudio, you can write: print("Hello, World!"). Click "Run" (or Ctrl+Enter), and you\'ll see the output. R also lets you type numbers directly — for example, 5 + 3 will automatically return 8.',
      },
      {
        title: '5. Variables and Vectors',
        body: 'In R, you create a variable using the arrow (<-) instead of =. For example: name <- "Ali". One of R\'s most powerful features is "vectors" — lists of numbers. For example: numbers <- c(1, 2, 3, 4, 5) creates a vector made of 5 numbers.',
      },
      {
        title: '6. Loops and Conditions',
        body: 'R supports if, else, and for loops. For example: for (i in 1:5) { print(i) } will print the numbers 1 through 5. Similarly, if (age >= 18) { print("Adult") } tests a condition.',
      },
      {
        title: '7. Data Frames',
        body: 'A "Data Frame" is one of R\'s most essential features — it works like an Excel sheet with rows and columns. For example: data <- data.frame(name = c("Ali", "Fatima"), age = c(25, 30)). Data Frames are used to store real-world data that can be analyzed — like healthcare records, company sales, and more.',
      },
      {
        title: '8. Data Visualization',
        body: 'One of the reasons R is so popular is its data visualization power. The ggplot2 library lets you create beautiful, modern charts — bar charts, line graphs, and scatter plots — in just a single line of code. For example: plot(data$age) quickly produces a simple chart.',
      },
      {
        title: '9. Tips for Learning',
        body: 'To learn R quickly: (1) Use RStudio, since it makes learning much easier. (2) Start with a small, real dataset, like weather or sales data, and try analyzing it. (3) Learn ggplot2 early, as it\'s the most powerful library for visualization. (4) Use DataCamp and other free websites specializing in R.',
      },
      {
        title: '10. Conclusion',
        body: "R is a powerful tool that's essential for anyone working with data, statistics, or research. Though not as popular as Python overall, it offers specialized strength in data analysis that other languages can't easily match.",
      },
    ],
    ar: [
      {
        title: '1. ما هي لغة R؟',
        body: 'آر (R) هي لغة برمجة مصممة خصيصًا لتحليل البيانات والإحصاء وتصور البيانات. أنشأها عالمان هما Ross Ihaka وRobert Gentleman عام 1993. بينما تُعتبر بايثون لغة عامة الغرض، بُنيت R خصيصًا للبيانات والإحصاء - ما يجعلها قوية بشكل استثنائي في تحليل البيانات.',
      },
      {
        title: '2. لماذا تتعلم R',
        body: 'إذا كنت مهتمًا بعلم البيانات، أو العلوم الاجتماعية، أو البحث الصحي، أو أي مجال بحثي يتطلب الإحصاء، فإن R لغة أساسية. تُستخدم في الجامعات، والبحث الطبي، والاقتصاد، والشركات الكبرى لتحليل البيانات بدقة. تمتلك R عددًا هائلاً من المكتبات المصممة خصيصًا لتصور البيانات بشكل جميل (مثل ggplot2).',
      },
      {
        title: '3. تثبيت R',
        body: 'يمكنك تنزيل R من موقعها الرسمي (r-project.org). بعد التنزيل، نوصي أيضًا بتنزيل RStudio - برنامج مجاني يجعل استخدام R أسهل بكثير، بواجهة حديثة وسهلة الاستخدام.',
      },
      {
        title: '4. برنامجك الأول',
        body: 'بمجرد فتح RStudio، يمكنك كتابة: print("Hello, World!"). اضغط على "Run" (أو Ctrl+Enter)، وسترى الناتج. تتيح لك R أيضًا كتابة الأرقام مباشرة - على سبيل المثال، 5 + 3 سيُرجع تلقائيًا 8.',
      },
      {
        title: '5. المتغيرات والمتجهات (Vectors)',
        body: 'في R، تنشئ متغيرًا باستخدام السهم (<-) بدلاً من =. على سبيل المثال: name <- "Ali". من أقوى ميزات R هي "المتجهات" (vectors) - قوائم من الأرقام. على سبيل المثال: numbers <- c(1, 2, 3, 4, 5) ينشئ متجهًا مكونًا من 5 أرقام.',
      },
      {
        title: '6. الحلقات والشروط',
        body: 'تدعم R if وelse وحلقات for. على سبيل المثال: for (i in 1:5) { print(i) } سيطبع الأرقام من 1 إلى 5. وبالمثل، if (age >= 18) { print("بالغ") } يختبر شرطًا معينًا.',
      },
      {
        title: '7. أطر البيانات (Data Frames)',
        body: '"إطار البيانات" (Data Frame) من أهم ميزات R - يعمل مثل جدول Excel بصفوف وأعمدة. على سبيل المثال: data <- data.frame(name = c("Ali", "Fatima"), age = c(25, 30)). تُستخدم أطر البيانات لتخزين بيانات واقعية يمكن تحليلها - مثل السجلات الصحية، مبيعات الشركات، وأكثر.',
      },
      {
        title: '8. تصور البيانات (Data Visualization)',
        body: 'من أسباب شهرة R قوتها في تصور البيانات. تتيح لك مكتبة ggplot2 إنشاء رسوم بيانية جميلة وعصرية - أعمدة بيانية، رسوم خطية، ورسوم انتشار - في سطر واحد فقط من الشيفرة. على سبيل المثال: plot(data$age) ينتج بسرعة رسمًا بيانيًا بسيطًا.',
      },
      {
        title: '9. نصائح للتعلم',
        body: 'لتتعلم R بسرعة: (1) استخدم RStudio، لأنه يجعل التعلم أسهل بكثير. (2) ابدأ بمجموعة بيانات صغيرة وواقعية، مثل بيانات الطقس أو المبيعات، وحاول تحليلها. (3) تعلّم ggplot2 مبكرًا، فهي أقوى مكتبة للتصور. (4) استخدم DataCamp ومواقع مجانية أخرى متخصصة في R.',
      },
      {
        title: '10. الخاتمة',
        body: 'R أداة قوية أساسية لأي شخص يعمل مع البيانات أو الإحصاء أو البحث. رغم أنها ليست شائعة مثل بايثون بشكل عام، إلا أنها توفر قوة متخصصة في تحليل البيانات لا تستطيع لغات أخرى مجاراتها بسهولة.',
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
          background: 'radial-gradient(circle, rgba(39,109,195,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📊</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Barashada R' : lang === 'ar' ? 'تعلم R' : 'Learning R'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto falanqaynta xogta iyo istaatistigga.'
              : lang === 'ar'
              ? 'دليل شامل للمبتدئين لتعلم تحليل البيانات والإحصاء.'
              : "A complete beginner's guide to data analysis and statistics."}
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
                  color: '#276DC3',
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