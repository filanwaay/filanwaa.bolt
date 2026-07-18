import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function CppPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay C++?', body: 'C++ waa luqad barnaamij-sameyn oo awood badan, oo lagu dhisay luqadda C sanadkii 1985 adigoo raacaya Bjarne Stroustrup. C++ waxay kuu ogolaataa inaad si toos ah ula shaqeyso "memory"-ga kombiyuutarka, taasoo ka dhigaysa mid aad u dhaqso badan — waana sababta ay ugu isticmaasho barnaamijyada ugu awoodda badan ee adduunka.' },
      { title: '2. Sababta Loo Barto C++', body: 'C++ waxaa lagu isticmaalaa: ciyaaraha video-ga (video games) — engines-ka ugu waaweyn sida Unreal Engine waxaa lagu qoray C++, nidaamyada hawada (operating systems), browsers-ka, iyo software-ka aad u dhaqso badan ee loo baahan yahay. Haddii aad rabto inaad noqoto game developer ama aad ka shaqeyso software adag, C++ waa luqad muhiim ah.' },
      { title: '3. Sida Loo Rakibo C++', body: 'Waxaad u baahan tahay "compiler" (barnaamij barnaamijkaaga u beddela luqad kombiyuutarku fahmi karo), sida GCC (bilaash) ama Visual Studio (oo leh nooc bilaash ah). Waxaad sidoo kale isticmaali kartaa IDE sida Code::Blocks ama VS Code oo leh extensions C++.' },
      { title: '4. Barnaamijkaaga Ugu Horeeya', body: 'C++ program wuxuu u baahan yahay function la yiraahdo main(). Tusaale: #include <iostream> — int main() { std::cout << "Salaan, Adduunka!"; return 0; }. Xariiqda #include <iostream> waxay kuu ogolaataa inaad isticmaasho cout si aad qoraal u daabacdo.' },
      { title: '5. Variables iyo Noocyada Xogta', body: 'C++ waa luqad "statically typed" ah, sida Java. Tusaale: int da\'da = 25; (tiro), string magac = "Cali"; (qoraal), iyo float qiimo = 5.5; (tiro leh jajab). Waxaad u baahan tahay inaad horay u sheegto nooca xogta.' },
      { title: '6. Pointers iyo Memory', body: 'Mid ka mid ah waxyaabaha C++ ugu gaarka ah waa "pointers" — variables kaydiya cinwaanka (address) meesha xogta kale ku jirto memory-ga. Fikraddan waa mid adag oo cusub, laakiin waxay kuu ogolaataa awood weyn oo la maareynta memory-ga kombiyuutarka.' },
      { title: '7. Loops iyo Conditions', body: 'C++ waxay taageertaa if, else, for, iyo while — isla habka luqadaha kale. Tusaale: for (int i = 0; i < 5; i++) { std::cout << i; } wuxuu daabici doonaa tirooyinka 0 ilaa 4.' },
      { title: '8. Functions iyo Classes', body: 'C++ waxay taageertaa functions (sida int isuKeen(int a, int b) { return a + b; }) iyo classes (Object-Oriented Programming, sida Java). Taasi waxay ka dhigaysa C++ luqad "multi-paradigm" ah, taasoo macnaheedu tahay inaad isticmaali karto habab kala duwan oo barnaamij-sameyn ah.' },
      { title: '9. Talooyin Ku Saabsan Barashada', body: 'Si aad si degdeg ah u barato C++: (1) Isticmaal maktabad casri ah oo bilaash ah sida "Learn C++" (learncpp.com). (2) Ha ku qasbin naftaada barashada pointers-ka isla mar — waa mid u baahan waqti. (3) Isku day inaad barato asaaska C++ ka hor inta aanad tijaabin ciyaaraha video-ga. (4) Ku celceli qoraalka code-ka gacantaada si aad u xasuusato syntax-ka.' },
      { title: '10. Gunaanad', body: 'C++ waa luqad awood badan oo aad ugu isticmaasho meelaha loo baahan yahay xawaare iyo xakameyn adag oo memory-ga ah. In kasta oo ay adag tahay marka la barbardhigo Python, waxay siisaa fahamka hoose ee sida kombiyuutarku u shaqeeyo.' },
    ],
    en: [
      { title: '1. What Is C++?', body: "C++ is a powerful programming language, built on the C language in 1985 by Bjarne Stroustrup. C++ lets you work directly with your computer's memory, making it extremely fast — which is why it's used for some of the world's most demanding software." },
      { title: '2. Why Learn C++', body: 'C++ is used for: video games — the biggest engines like Unreal Engine are written in C++, operating systems, browsers, and high-performance software in general. If you want to become a game developer or work on demanding software, C++ is an essential language.' },
      { title: '3. Installing C++', body: 'You need a "compiler" (a program that turns your code into something the computer understands), like GCC (free) or Visual Studio (which has a free version). You can also use an IDE like Code::Blocks or VS Code with C++ extensions.' },
      { title: '4. Your First Program', body: 'A C++ program needs a function called main(). For example: #include <iostream> — int main() { std::cout << "Hello, World!"; return 0; }. The line #include <iostream> lets you use cout to print text.' },
      { title: '5. Variables and Data Types', body: 'C++ is a "statically typed" language, like Java. For example: int age = 25; (number), string name = "Ali"; (text), and float value = 5.5; (decimal number). You must declare the data type in advance.' },
      { title: '6. Pointers and Memory', body: "One of C++'s most unique features is \"pointers\" — variables that store the address of where other data is located in memory. This is a challenging new concept, but it gives you powerful control over your computer's memory." },
      { title: '7. Loops and Conditions', body: 'C++ supports if, else, for, and while — just like other languages. For example: for (int i = 0; i < 5; i++) { std::cout << i; } will print the numbers 0 through 4.' },
      { title: '8. Functions and Classes', body: 'C++ supports functions (like int add(int a, int b) { return a + b; }) and classes (Object-Oriented Programming, like Java). This makes C++ a "multi-paradigm" language, meaning you can use different programming approaches.' },
      { title: '9. Tips for Learning', body: 'To learn C++ quickly: (1) Use a modern, free resource like "Learn C++" (learncpp.com). (2) Don\'t force yourself to learn pointers all at once — they take time. (3) Try to learn C++ basics before jumping into video game development. (4) Practice writing code by hand to memorize the syntax.' },
      { title: '10. Conclusion', body: "C++ is a powerful language used wherever speed and precise memory control are needed. Though harder than Python, it gives you a deeper understanding of how computers actually work." },
    ],
    ar: [
      { title: '1. ما هي لغة C++؟', body: 'سي++ (C++) لغة برمجة قوية، بُنيت على لغة C عام 1985 على يد Bjarne Stroustrup. تتيح لك C++ العمل مباشرة مع ذاكرة حاسوبك، ما يجعلها سريعة للغاية.' },
      { title: '2. لماذا تتعلم C++', body: 'تُستخدم C++ في: ألعاب الفيديو - أكبر المحركات مثل Unreal Engine مكتوبة بـ C++، أنظمة التشغيل، المتصفحات، والبرمجيات عالية الأداء بشكل عام. إذا كنت تريد أن تصبح مطور ألعاب أو تعمل على برمجيات متطلبة، فإن C++ لغة أساسية.' },
      { title: '3. تثبيت C++', body: 'تحتاج إلى "مترجم" - برنامج يحوّل شيفرتك إلى ما يفهمه الحاسوب - مثل GCC (مجاني) أو Visual Studio. يمكنك أيضًا استخدام بيئة تطوير مثل Code::Blocks أو VS Code مع إضافات C++.' },
      { title: '4. برنامجك الأول', body: 'يحتاج برنامج C++ إلى دالة تُسمى main(). على سبيل المثال: #include <iostream> — int main() { std::cout << "Hello, World!"; return 0; }.' },
      { title: '5. المتغيرات وأنواع البيانات', body: 'C++ لغة "ذات كتابة ثابتة"، مثل جافا. على سبيل المثال: int age = 25; (رقم)، string name = "Ali"; (نص)، وfloat value = 5.5; (رقم عشري).' },
      { title: '6. المؤشرات والذاكرة', body: 'من أكثر ميزات C++ تفردًا هي "المؤشرات" - متغيرات تُخزّن عنوان مكان وجود بيانات أخرى في الذاكرة. هذا مفهوم جديد وصعب، لكنه يمنحك تحكمًا قويًا في ذاكرة حاسوبك.' },
      { title: '7. الحلقات والشروط', body: 'تدعم C++ if وelse وfor وwhile - تمامًا مثل اللغات الأخرى. على سبيل المثال: for (int i = 0; i < 5; i++) { std::cout << i; } سيطبع الأرقام من 0 إلى 4.' },
      { title: '8. الدوال والأصناف', body: 'تدعم C++ الدوال والأصناف (البرمجة كائنية التوجه، مثل جافا). هذا يجعل C++ لغة "متعددة النماذج".' },
      { title: '9. نصائح للتعلم', body: 'لتتعلم C++ بسرعة: (1) استخدم مصدرًا مثل "Learn C++" (learncpp.com). (2) لا تُجبر نفسك على تعلّم المؤشرات دفعة واحدة. (3) حاول تعلّم أساسيات C++ قبل الانتقال إلى تطوير ألعاب الفيديو. (4) مارس كتابة الشيفرة يدويًا.' },
      { title: '10. الخاتمة', body: 'C++ لغة قوية تُستخدم حيثما تكون السرعة والتحكم الدقيق في الذاكرة ضروريين. رغم أنها أصعب من بايثون، إلا أنها تمنحك فهمًا أعمق لكيفية عمل الحواسيب.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,89,156,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚙️</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Barashada C++' : lang === 'ar' ? 'تعلم C++' : 'Learning C++'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto barnaamij-sameynta xawaaraga sare leh.' : lang === 'ar' ? 'دليل شامل للمبتدئين لتعلم البرمجة عالية الأداء.' : "A complete beginner's guide to high-performance programming."}
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '48px', boxShadow: '0 12px 32px rgba(15,76,58,0.08)' }}>
            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: i < sections.length - 1 ? '32px' : '0', paddingBottom: i < sections.length - 1 ? '32px' : '0', borderBottom: i < sections.length - 1 ? '1px solid #D8DFDB' : 'none' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#00599C', marginBottom: '12px' }}>{section.title}</h2>
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