import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function PythonPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      {
        title: '1. Waa Maxay Python?',
        body: 'Python waa luqad barnaamij-sameyn (programming language) oo aad u fudud in la bartay, laakiin awood weyn leh. Waxaa sameeyay nin la yiraahdo Guido van Rossum sanadkii 1991, waxaana loo dhisay si code-ku ugu noqdo mid la akhrin karo oo u eg af caadi ah — halkii uu ka mid noqon lahaa qoraal adag oo kaliya khubarada fahmi karaan. Sababtan darteed, Python waxay noqotay luqadda ugu caansan ee loo baro bilowga barnaamij-sameynta adduunka oo dhan.',
      },
      {
        title: '2. Sababta Loo Barto Python',
        body: 'Python waxaa lagu isticmaalaa meelo aad u kala duwan: samaynta websaydhyada, falanqaynta xogta (data analysis), aqoonsiga cirbadeed (AI/Machine Learning), automation-ka (hawlaha si toos ah loo qabto), cybersecurity, iyo xitaa cilmiga fiisigiska iyo bayoolajiga. Shirkado waaweyn sida Google, Netflix, Instagram, iyo NASA waxay isticmaalaan Python maalin walba. Haddii aad rabto inaad shaqo IT ah hesho — gaar ahaan xagga AI iyo Data Science — Python waa luqadda ugu muhiimsan ee aad bari kartid.',
      },
      {
        title: '3. Sida Loo Rakibo Python',
        body: 'Si aad Python u isticmaasho, waxaad marka hore ka soo dejisaa website-ka rasmiga ah (python.org). Riix "Downloads", dooro nooca kombiyuutarkaaga (Windows, Mac, ama Linux), soo deji, kadibna install-garee. Marka aad dhammayso, waxaad furan kartaa "Command Prompt" (Windows) ama "Terminal" (Mac/Linux), ku qorto `python --version` si aad u hubiso in uu si sax ah u rakibmay.',
      },
      {
        title: '4. Barnaamijkaaga Ugu Horeeya',
        body: 'Marka aad Python rakibto, waxaad qori kartaa barnaamijkaaga ugu horeeya. Fur qoraal (text editor) kasta — sida Notepad ama VS Code — ku qor sadar kaliya ah: `print("Salaan, Adduunka!")`. Kaydi file-ka magac ah `hello.py`, kadibna terminal-ka ku qor `python hello.py`. Waxaad arki doontaa qoraalka "Salaan, Adduunka!" oo soo baxaya shaashadda — taasi waa barnaamijkaaga ugu horeeya!',
      },
      {
        title: '5. Aasaaska: Variables (Doorsooyinka)',
        body: 'Gudaha Python, "variable" waa meel aad xog ku kaydiso, sida magac ama tiro. Tusaale: `magac = "Cali"` waxay kaydisaa qoraalka "Cali" gudaha variable-ka la yiraahdo `magac`. Sidoo kale, `da\'da = 25` wuxuu kaydiyaa tirada 25. Python ma u baahna inaad horay u sheegto nooca xogta (sida luqadaha kale ee adag) — wuxuu si toos ah u ogaadaa.',
      },
      {
        title: '6. Aasaaska: Loops iyo Conditions',
        body: 'Python waxay kuu ogolaataa inaad code-kaaga ku celceliso adigoo isticmaalaya `for` iyo `while` loops. Tusaale: `for i in range(5): print(i)` wuxuu daabici doonaa tirooyinka 0 ilaa 4. Sidoo kale, `if` statements waxay kuu ogolaataan inaad go\'aan ku sameyso xaaladaha kala duwan, tusaale: `if da\'da >= 18: print("Waa qof weyn")`.',
      },
      {
        title: '7. Functions (Shaqooyinka)',
        body: 'Function waa qayb code ah oo aad mar qoro, kadibna isticmaal karto marar badan. Tusaale: `def salaan(magac): return f"Salaan, {magac}!"`. Marka aad qorto `salaan("Cali")`, wuxuu ku soo celin doonaa "Salaan, Cali!". Functions waxay kaa caawiyaan inaad code-kaaga u qaybiso qaybo yaryar oo la maareyn karo, halkii aad isku celin lahayd isla qoraalka.',
      },
      {
        title: '8. Maktabadaha (Libraries)',
        body: 'Mid ka mid ah waxyaabaha ugu awoodda badan ee Python waa "libraries" — kuwaas oo ah kooxo code ah oo horay loo qoray oo aad isticmaali karto si aad u fududeyso shaqadaada. Tusaale: `pandas` waxaa loo isticmaalaa falanqaynta xogta, `requests` waxaa loo isticmaalaa in internet-ka lagala shaqeeyo, iyo `django` oo loo isticmaalo in websaydh la sameeyo. Waxaad ku rakibi kartaa maktabad kasta adigoo isticmaalaya amarka `pip install [magaca maktabadda]`.',
      },
      {
        title: '9. Talooyin Ku Saabsan Barashada',
        body: 'Si aad si degdeg ah u barato Python: (1) Isku day inaad maalin walba wax yar qorto, xitaa haddii ay tahay 15 daqiiqo. (2) Ha ka baqin khaladaadka (errors) — waa qayb ka mid ah barashada. (3) Samee mashaariic yaryar sida calculator ama "to-do list" si aad u tijaabiso waxa aad baratay. (4) Isticmaal YouTube iyo websaydhyada bilaashka ah sida freeCodeCamp. (5) Ku biir bulshooyinka barnaamij-sameeyayaasha si aad wax uga weydiiso oo aad wax u sheegto.',
      },
      {
        title: '10. Gunaanad',
        body: 'Python waa albaab furan oo kuu horseedi kara adduunka barnaamij-sameynta, dijitaalka, iyo teknoolajiyada casriga ah. Adigoo dulqaad iyo dadaal leh, mar kasta ayaad u dhawaan doontaa inaad noqoto barnaamij-sameeye xirfad leh. Bilow maanta — barnaamijkaaga ugu horeeya wuxuu kaa fog yahay kaliya sadar kaliya oo code ah!',
      },
    ],
    en: [
      {
        title: '1. What Is Python?',
        body: 'Python is a programming language that is remarkably easy to learn, yet powerful enough to build almost anything. Created by Guido van Rossum in 1991, Python was designed so that code reads almost like plain English — rather than the dense, cryptic syntax found in many other languages. This is precisely why Python has become the most popular first language for people beginning their programming journey worldwide.',
      },
      {
        title: '2. Why Learn Python',
        body: "Python is used across an extraordinary range of fields: building websites, analyzing data, powering artificial intelligence and machine learning, automating repetitive tasks, cybersecurity, and even physics and biology research. Major companies like Google, Netflix, Instagram, and NASA rely on Python every single day. If you're aiming for a career in tech — especially in AI or Data Science — Python is the single most valuable language you can learn.",
      },
      {
        title: '3. Installing Python',
        body: 'To start using Python, download it from the official website (python.org). Click "Downloads," choose your operating system (Windows, Mac, or Linux), download the installer, and run it. Once installed, open Command Prompt (Windows) or Terminal (Mac/Linux) and type `python --version` to confirm it installed correctly.',
      },
      {
        title: '4. Your First Program',
        body: 'Once Python is installed, you can write your very first program. Open any text editor — Notepad or VS Code work fine — and type a single line: `print("Hello, World!")`. Save the file as `hello.py`, then run `python hello.py` in your terminal. You\'ll see "Hello, World!" appear on screen — congratulations, that\'s your first program!',
      },
      {
        title: '5. Basics: Variables',
        body: 'In Python, a "variable" is a place where you store data, like a name or a number. For example: `name = "Ali"` stores the text "Ali" in a variable called `name`. Similarly, `age = 25` stores the number 25. Unlike many other languages, Python doesn\'t require you to declare the data type in advance — it figures that out automatically.',
      },
      {
        title: '6. Basics: Loops and Conditions',
        body: 'Python lets you repeat code using `for` and `while` loops. For example, `for i in range(5): print(i)` will print the numbers 0 through 4. Similarly, `if` statements let you make decisions based on conditions, for example: `if age >= 18: print("You are an adult")`.',
      },
      {
        title: '7. Functions',
        body: 'A function is a block of code you write once and can reuse many times. For example: `def greet(name): return f"Hello, {name}!"`. When you call `greet("Ali")`, it returns "Hello, Ali!". Functions help you break your code into small, manageable pieces instead of repeating the same logic over and over.',
      },
      {
        title: '8. Libraries',
        body: 'One of Python\'s greatest strengths is its "libraries" — pre-written collections of code you can use to simplify your work. For example: `pandas` is used for data analysis, `requests` for interacting with the internet, and `django` for building websites. You can install any library using the command `pip install [library name]`.',
      },
      {
        title: '9. Tips for Learning',
        body: "To learn Python quickly: (1) Try to code a little every day, even if it's just 15 minutes. (2) Don't fear errors — they're part of learning. (3) Build small projects like a calculator or a to-do list to practice what you've learned. (4) Use free resources like YouTube and freeCodeCamp. (5) Join programming communities where you can ask questions and share what you've learned.",
      },
      {
        title: '10. Conclusion',
        body: "Python is a doorway into the world of programming, digital technology, and modern innovation. With patience and consistent effort, you'll be closer than you think to becoming a skilled programmer. Start today — your first program is just one line of code away!",
      },
    ],
    ar: [
      {
        title: '1. ما هي لغة Python؟',
        body: 'بايثون (Python) هي لغة برمجة سهلة التعلم بشكل ملحوظ، لكنها قوية بما يكفي لبناء أي شيء تقريبًا. صممها Guido van Rossum عام 1991 بحيث تُقرأ الشيفرة البرمجية وكأنها لغة إنجليزية عادية - بدلًا من الصياغة المعقدة الموجودة في لغات أخرى كثيرة. لهذا السبب بالتحديد، أصبحت بايثون اللغة الأولى الأكثر شيوعًا لمن يبدأون رحلتهم في البرمجة حول العالم.',
      },
      {
        title: '2. لماذا تتعلم بايثون',
        body: 'تُستخدم بايثون في مجالات متنوعة بشكل استثنائي: بناء المواقع الإلكترونية، تحليل البيانات، تشغيل الذكاء الاصطناعي والتعلم الآلي، أتمتة المهام المتكررة، الأمن السيبراني، وحتى في أبحاث الفيزياء والأحياء. تعتمد شركات كبرى مثل Google وNetflix وInstagram وNASA على بايثون يوميًا. إذا كنت تطمح لمهنة في التقنية - خاصة في الذكاء الاصطناعي أو علم البيانات - فبايثون هي أكثر لغة تستحق التعلم.',
      },
      {
        title: '3. تثبيت بايثون',
        body: 'لبدء استخدام بايثون، قم بتنزيلها من الموقع الرسمي (python.org). اضغط على "Downloads"، اختر نظام التشغيل الخاص بك (Windows أو Mac أو Linux)، نزّل ملف التثبيت، وقم بتشغيله. بعد التثبيت، افتح Command Prompt (على ويندوز) أو Terminal (على Mac/Linux) واكتب `python --version` للتأكد من أنها تم تثبيتها بشكل صحيح.',
      },
      {
        title: '4. برنامجك الأول',
        body: 'بمجرد تثبيت بايثون، يمكنك كتابة برنامجك الأول. افتح أي محرر نصوص - مثل Notepad أو VS Code - واكتب سطرًا واحدًا: `print("Hello, World!")`. احفظ الملف باسم `hello.py`، ثم شغّل `python hello.py` في الطرفية (Terminal). ستظهر عبارة "Hello, World!" على الشاشة - تهانينا، هذا برنامجك الأول!',
      },
      {
        title: '5. الأساسيات: المتغيرات',
        body: 'في بايثون، "المتغير" (variable) هو مكان تُخزّن فيه بيانات، مثل اسم أو رقم. على سبيل المثال: `name = "Ali"` يخزّن النص "Ali" في متغير يُسمى `name`. وبالمثل، `age = 25` يخزّن الرقم 25. على عكس لغات أخرى كثيرة، لا تتطلب بايثون منك تحديد نوع البيانات مسبقًا - فهي تكتشف ذلك تلقائيًا.',
      },
      {
        title: '6. الأساسيات: الحلقات والشروط',
        body: 'تتيح لك بايثون تكرار الشيفرة البرمجية باستخدام حلقات `for` و`while`. على سبيل المثال، `for i in range(5): print(i)` سيطبع الأرقام من 0 إلى 4. وبالمثل، تتيح لك جمل `if` اتخاذ قرارات بناءً على شروط، مثال: `if age >= 18: print("أنت بالغ")`.',
      },
      {
        title: '7. الدوال (Functions)',
        body: 'الدالة هي جزء من الشيفرة البرمجية تكتبه مرة واحدة ويمكنك إعادة استخدامه مرات عديدة. على سبيل المثال: `def greet(name): return f"Hello, {name}!"`. عندما تستدعي `greet("Ali")`، سيُرجع "Hello, Ali!". تساعدك الدوال على تقسيم شيفرتك إلى أجزاء صغيرة يسهل التعامل معها بدلًا من تكرار نفس المنطق مرارًا.',
      },
      {
        title: '8. المكتبات (Libraries)',
        body: 'من أعظم نقاط قوة بايثون هي "المكتبات" - مجموعات من الشيفرة البرمجية مكتوبة مسبقًا يمكنك استخدامها لتسهيل عملك. على سبيل المثال: `pandas` تُستخدم لتحليل البيانات، `requests` للتفاعل مع الإنترنت، و`django` لبناء المواقع الإلكترونية. يمكنك تثبيت أي مكتبة باستخدام الأمر `pip install [اسم المكتبة]`.',
      },
      {
        title: '9. نصائح للتعلم',
        body: 'لتتعلم بايثون بسرعة: (1) حاول أن تكتب شيفرة برمجية كل يوم، ولو لمدة 15 دقيقة فقط. (2) لا تخف من الأخطاء - فهي جزء من التعلم. (3) اصنع مشاريع صغيرة مثل آلة حاسبة أو قائمة مهام لتطبيق ما تعلمته. (4) استخدم مصادر مجانية مثل YouTube وfreeCodeCamp. (5) انضم إلى مجتمعات المبرمجين حيث يمكنك طرح الأسئلة ومشاركة ما تعلمته.',
      },
      {
        title: '10. الخاتمة',
        body: 'بايثون هي بوابة إلى عالم البرمجة والتقنية الرقمية والابتكار الحديث. بالصبر والجهد المستمر، ستكون أقرب مما تتصور لتصبح مبرمجًا ماهرًا. ابدأ اليوم - برنامجك الأول يبعد عنك سطرًا واحدًا فقط من الشيفرة البرمجية!',
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
          background: 'radial-gradient(circle, rgba(55,118,171,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🐍</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Barashada Python' : lang === 'ar' ? 'تعلم بايثون' : 'Learning Python'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto luqadda barnaamij-sameynta ee ugu caansan adduunka.'
              : lang === 'ar'
              ? 'دليل شامل للمبتدئين لتعلم لغة البرمجة الأكثر شيوعًا في العالم.'
              : "A complete beginner's guide to the world's most popular programming language."}
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
                  color: '#3776AB',
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