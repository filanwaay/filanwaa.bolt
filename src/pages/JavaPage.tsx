import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function JavaPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Java?', body: 'Java waa luqad barnaamij-sameyn oo caan ah, oo sameeyay shirkadda Sun Microsystems sanadkii 1995 (hadda waxaa iska leh Oracle). Java waxay leedahay hal-abuur gaar ah: "Write Once, Run Anywhere" — macnaheedu waa in barnaamijkaaga hal mar la qoro, kadibna uu ku shaqeeyo nooc kasta oo kombiyuutar ah (Windows, Mac, Linux) iyadoon wax beddel ah loo baahnayn. Java waa luqad "object-oriented" ah, taasoo macnaheedu tahay in code-ku loo qaybiyo qaybo la yiraahdo "objects" oo isku shaqeeya.' },
      { title: '2. Sababta Loo Barto Java', body: 'Java waxaa lagu isticmaalaa: samaynta apps-ka Android (inta badan Android apps waxaa lagu qoray Java), nidaamyada waaweyn ee shirkadaha (enterprise systems), banks-ka, iyo mid ka mid ah luqadaha ugu tirada badan ee jaamacadaha lagu barto Computer Science. Haddii aad rabto inaad sameyso Android apps, ama aad u shaqeyso shirkado waaweyn oo IT ah, Java waa luqad aad muhiim u ah.' },
      { title: '3. Sida Loo Rakibo Java', body: 'Waxaad u baahan tahay in aad soo dejiso "Java Development Kit" (JDK) oo laga heli karo website-ka Oracle ama OpenJDK (oo bilaash ah). Kadibna waxaad u baahan tahay "IDE" (Integrated Development Environment) sida IntelliJ IDEA ama Eclipse si aad Java-ga ugu qorto.' },
      { title: '4. Barnaamijkaaga Ugu Horeeya', body: 'Java barnaamij kastaa wuxuu ku jiraa "class." Tusaale: public class Salaan { public static void main(String[] args) { System.out.println("Salaan, Adduunka!"); } }. In kasta oo qoraalku u muuqdo mid dheer marka la barbardhigo Python, waa qayb ka mid ah qaab-dhismeedka Java.' },
      { title: '5. Variables iyo Noocyada Xogta', body: 'Java waa luqad "statically typed" ah, taasoo macnaheedu tahay inaad horay u sheegto nooca xogta variable-ku wado. Tusaale: int da\'da = 25; (tiro), String magac = "Cali"; (qoraal), iyo boolean waa_run = true; (true/false).' },
      { title: '6. Object-Oriented Programming', body: 'Java waxay ku dhisan tahay fikradda "Object-Oriented Programming" (OOP). Waxaad sameysaa "classes" — qaab-dhismeedyo ay ka mid yihiin xogta (data) iyo shaqooyinka (methods). Tusaale: class Xayawaan wuxuu yeelan karaa "properties" sida magac iyo da\'da, iyo "methods" sida cun() ama dhaqaaq().' },
      { title: '7. Loops iyo Conditions', body: 'Java waxay taageertaa if, else, for, iyo while — isla habka luqadaha kale. Tusaale: for (int i = 0; i < 5; i++) { System.out.println(i); } wuxuu daabici doonaa tirooyinka 0 ilaa 4.' },
      { title: '8. Methods (Functions)', body: 'Gudaha Java, functions waxaa loo yaqaanaa "methods." Tusaale: public static int isuKeen(int a, int b) { return a + b; }. Method-kani wuxuu qaadan doonaa laba tiro, kuna soo celin doonaa isuku-darkooda.' },
      { title: '9. Talooyin Ku Saabsan Barashada', body: 'Si aad si degdeg ah u barato Java: (1) Fahan asaaska OOP-ka (classes, objects) marka hore, maadaama Java uu ku dhisan yahay. (2) Isticmaal IntelliJ IDEA Community Edition (bilaash). (3) Samee mashruuc yar sida calculator ama "to-do list app." (4) Barasho Android Development ayaa noqon karta tallaabo xigta haddii aad Java aad u fahanto.' },
      { title: '10. Gunaanad', body: 'Java waa luqad dhabar-adag oo wali aad loo isticmaalo, gaar ahaan xagga Android iyo nidaamyada waaweyn. In kasta oo ay u baahan tahay dulqaad si loo bartaa marka la barbardhigo Python, waxay siisaa saldhig adag oo aad ku fahan karto barnaamij-sameynta "object-oriented" ah.' },
    ],
    en: [
      { title: '1. What Is Java?', body: 'Java is a popular programming language created by Sun Microsystems in 1995 (now owned by Oracle). Java has a unique philosophy: "Write Once, Run Anywhere" — meaning you write your program once, and it runs on any type of computer (Windows, Mac, Linux) without needing changes. Java is an "object-oriented" language, meaning code is organized into "objects" that work together.' },
      { title: '2. Why Learn Java', body: "Java is used for: building Android apps (most Android apps are written in Java), large enterprise systems, banking systems, and it's one of the most commonly taught languages in university Computer Science programs. If you want to build Android apps, or work at large IT companies, Java is an essential language." },
      { title: '3. Installing Java', body: 'You need to download the "Java Development Kit" (JDK), available from Oracle\'s website or OpenJDK (free). You\'ll also need an "IDE" (Integrated Development Environment) like IntelliJ IDEA or Eclipse to write Java code.' },
      { title: '4. Your First Program', body: 'Every Java program lives inside a "class." For example: public class Hello { public static void main(String[] args) { System.out.println("Hello, World!"); } }. Though the code looks long compared to Python, this is simply part of Java\'s structure.' },
      { title: '5. Variables and Data Types', body: 'Java is a "statically typed" language, meaning you must declare a variable\'s data type in advance. For example: int age = 25; (number), String name = "Ali"; (text), and boolean isTrue = true; (true/false).' },
      { title: '6. Object-Oriented Programming', body: 'Java is built on the concept of "Object-Oriented Programming" (OOP). You create "classes" — structures containing data and functions (methods). For example: a class Animal might have "properties" like name and age, and "methods" like eat() or move().' },
      { title: '7. Loops and Conditions', body: 'Java supports if, else, for, and while — just like other languages. For example: for (int i = 0; i < 5; i++) { System.out.println(i); } will print the numbers 0 through 4.' },
      { title: '8. Methods (Functions)', body: 'In Java, functions are called "methods." For example: public static int add(int a, int b) { return a + b; }. This method takes two numbers and returns their sum.' },
      { title: '9. Tips for Learning', body: "To learn Java quickly: (1) Understand OOP basics (classes, objects) first, since Java is built on them. (2) Use IntelliJ IDEA Community Edition (free). (3) Build a small project like a calculator or to-do list app. (4) Learning Android Development can be a great next step once you're comfortable with Java." },
      { title: '10. Conclusion', body: "Java is a robust, still widely-used language, especially for Android and enterprise systems. Though it requires more patience to learn compared to Python, it provides a solid foundation for understanding object-oriented programming." },
    ],
    ar: [
      { title: '1. ما هي لغة Java؟', body: 'جافا (Java) لغة برمجة شهيرة أنشأتها شركة Sun Microsystems عام 1995 (تملكها الآن Oracle). تتبنى جافا فلسفة فريدة: "اكتب مرة، شغّل في أي مكان" - بمعنى أنك تكتب برنامجك مرة واحدة، ويعمل على أي نوع من الحواسيب دون الحاجة إلى تغييرات. جافا لغة "كائنية التوجه"، بمعنى أن الشيفرة تُنظّم في "كائنات" تعمل معًا.' },
      { title: '2. لماذا تتعلم Java', body: 'تُستخدم جافا في: بناء تطبيقات Android، أنظمة المؤسسات الكبرى، الأنظمة المصرفية، وهي من أكثر اللغات تدريسًا في برامج علوم الحاسوب الجامعية. إذا كنت تريد بناء تطبيقات Android، أو العمل في شركات IT كبرى، فإن جافا لغة أساسية.' },
      { title: '3. تثبيت Java', body: 'تحتاج إلى تنزيل "Java Development Kit" (JDK)، متوفر من موقع Oracle أو OpenJDK (مجاني). ستحتاج أيضًا إلى بيئة تطوير متكاملة مثل IntelliJ IDEA أو Eclipse لكتابة شيفرة Java.' },
      { title: '4. برنامجك الأول', body: 'يعيش كل برنامج Java داخل "صنف". على سبيل المثال: public class Hello { public static void main(String[] args) { System.out.println("Hello, World!"); } }. رغم أن الشيفرة تبدو طويلة مقارنة ببايثون، إلا أن هذا جزء من هيكل جافا ببساطة.' },
      { title: '5. المتغيرات وأنواع البيانات', body: 'جافا لغة "ذات كتابة ثابتة"، بمعنى أنه يجب عليك تحديد نوع بيانات المتغير مسبقًا. على سبيل المثال: int age = 25; (رقم)، String name = "Ali"; (نص)، وboolean isTrue = true; (صح/خطأ).' },
      { title: '6. البرمجة كائنية التوجه', body: 'تُبنى جافا على مفهوم "البرمجة كائنية التوجه". تُنشئ "أصنافًا" - هياكل تحتوي على بيانات ودوال. على سبيل المثال: قد يحتوي صنف Animal على "خصائص" مثل name وage، و"دوال" مثل eat() أو move().' },
      { title: '7. الحلقات والشروط', body: 'تدعم جافا if وelse وfor وwhile - تمامًا مثل اللغات الأخرى. على سبيل المثال: for (int i = 0; i < 5; i++) { System.out.println(i); } سيطبع الأرقام من 0 إلى 4.' },
      { title: '8. الدوال (Methods)', body: 'في جافا، تُسمى الدوال "methods". على سبيل المثال: public static int add(int a, int b) { return a + b; }. تأخذ هذه الدالة رقمين وتُرجع مجموعهما.' },
      { title: '9. نصائح للتعلم', body: 'لتتعلم Java بسرعة: (1) افهم أساسيات OOP أولاً، لأن جافا مبنية عليها. (2) استخدم IntelliJ IDEA Community Edition (مجاني). (3) ابنِ مشروعًا صغيرًا مثل آلة حاسبة أو تطبيق قائمة مهام. (4) قد يكون تعلّم تطوير Android خطوة رائعة بعد أن ترتاح مع جافا.' },
      { title: '10. الخاتمة', body: 'جافا لغة قوية وراسخة لا تزال تُستخدم على نطاق واسع، خاصة في Android وأنظمة المؤسسات. رغم أنها تتطلب صبرًا أكبر للتعلم مقارنة ببايثون، إلا أنها توفر أساسًا متينًا لفهم البرمجة كائنية التوجه.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,139,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>☕</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Barashada Java' : lang === 'ar' ? 'تعلم Java' : 'Learning Java'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto barnaamij-sameynta object-oriented.' : lang === 'ar' ? 'دليل شامل للمبتدئين لتعلم البرمجة كائنية التوجه.' : "A complete beginner's guide to object-oriented programming."}
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '48px', boxShadow: '0 12px 32px rgba(15,76,58,0.08)' }}>
            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: i < sections.length - 1 ? '32px' : '0', paddingBottom: i < sections.length - 1 ? '32px' : '0', borderBottom: i < sections.length - 1 ? '1px solid #D8DFDB' : 'none' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ED8B00', marginBottom: '12px' }}>{section.title}</h2>
                <p style={{ color: '#525C57', fontSize: '1rem', lineHeight: 1.8 }}>{section.body}</p>
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