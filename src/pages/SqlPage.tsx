import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function SqlPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay SQL?', body: 'SQL (Structured Query Language) waa luqad loo isticmaalo in lala hadlo database-yada — meesha xogta lagu kaydiyo. Website kasta oo aad isticmaasho waxay isticmaashaa database si ay u kaydiso xogta isticmaaleyaasha. SQL waa "hadalka" ee lagula hadlo database-yaas — waxaad ku weydiisan kartaa xogta, ku darsan kartaa xog cusub, ama ka saari kartaa xog.' },
      { title: '2. Sababta Loo Barto SQL', body: 'Ku dhawaad shirkad kasta oo xog haysata waxay u baahan tahay qof yaqaan SQL. Waxaa loo isticmaalaa Data Analysts, Backend Developers, iyo xitaa marketers-ka si ay u falanqeeyaan xogta. SQL waa mid ka mid ah xirfadaha ugu la iibsan badan xagga IT-ga.' },
      { title: '3. Sida Loo Bilaabo', body: 'Si aad SQL u barato, waxaad u baahan tahay database, sida MySQL (bilaash) ama SQLite (aad ugu fudud). Waxaad soo dejin kartaa MySQL Workbench si aad si tijaabo ah ula shaqeyso database-yada.' },
      { title: '4. Aasaaska: SELECT', body: 'Amarka ugu isticmaalka badan ee SQL waa SELECT, oo loo isticmaalo in xog laga soo saaro table. Tusaale: SELECT * FROM isticmaaleyaal; wuxuu soo saarayaa dhammaan xogta table-ka. Waxaad sidoo kale doorasho gaar ah samayn kartaa: SELECT magac, email FROM isticmaaleyaal;.' },
      { title: '5. Filtering: WHERE', body: 'WHERE waxaa loo isticmaalaa in la xaddido natiijada. Tusaale: SELECT * FROM isticmaaleyaal WHERE da\'da > 18; wuxuu soo saarayaa kaliya isticmaaleyaasha ka weyn 18 sano. Waxaad isticmaali kartaa AND, OR si aad shuruudo badan ugu daro.' },
      { title: '6. Ku Darid iyo Beddelidda Xogta', body: 'Waxaad isticmaashaa INSERT INTO si aad xog cusub ugu darto. Si aad xog jirta u beddesho, waxaad isticmaashaa UPDATE.' },
      { title: '7. Ka Saarida Xogta: DELETE', body: 'Si aad xog uga saarto database-ka, waxaad isticmaashaa DELETE. Fiiro gaar ah: Had iyo jeer isticmaal WHERE marka aad DELETE samaynayso — haddii kale, waxaad ka saari doontaa xogta table-ka OO DHAN!' },
      { title: '8. Isku Xirka Tables (JOIN)', body: 'Database-yada dhabta ah waxay leeyihiin tables badan oo isku xiran. JOIN wuxuu kuu ogolaadaa inaad isku darto xog laba table ah oo la xiriira.' },
      { title: '9. Talooyin Ku Saabsan Barashada', body: 'Si aad si degdeg ah u barato SQL: (1) Samee database yar oo tijaabo ah. (2) Ku celceli SELECT, WHERE, iyo JOIN. (3) Isticmaal websaydhyada tijaabada bilaashka ah sida SQLZoo ama W3Schools SQL. (4) Barasho SQL waxay la socotaa Python ama PHP.' },
      { title: '10. Gunaanad', body: 'SQL waa xirfad lagama maarmaan ah oo aad ugu baahan tahay qofkasta oo la shaqeeya xogta. SQL waxay bixisaa awood aad muhiim ugu tahay Data Analysis, Backend Development, iyo xogta maareynta.' },
    ],
    en: [
      { title: '1. What Is SQL?', body: 'SQL (Structured Query Language) is a language used to communicate with databases — where data is stored. Every website you use uses a database to store user data. SQL is the "language" used to talk to those databases — you can ask for data, add new data, or remove data.' },
      { title: '2. Why Learn SQL', body: 'Almost every company holding data needs someone who knows SQL. It\'s used by Data Analysts, Backend Developers, and even marketers to analyze data. SQL is one of the most in-demand skills in IT.' },
      { title: '3. How to Get Started', body: 'To learn SQL, you need a database, like MySQL (free) or SQLite (the simplest). You can download MySQL Workbench to practice working with databases.' },
      { title: '4. Basics: SELECT', body: 'The most commonly used SQL command is SELECT, used to retrieve data from a table. For example: SELECT * FROM users; retrieves all data. You can also select specific columns: SELECT name, email FROM users;.' },
      { title: '5. Filtering: WHERE', body: 'WHERE is used to filter results. For example: SELECT * FROM users WHERE age > 18; retrieves only users older than 18. You can use AND and OR to add multiple conditions.' },
      { title: '6. Adding and Updating Data', body: 'You use INSERT INTO to add new data. To change existing data, you use UPDATE.' },
      { title: '7. Removing Data: DELETE', body: 'To remove data from a database, you use DELETE. Important: Always use WHERE when performing a DELETE — otherwise, you\'ll delete the ENTIRE table\'s data!' },
      { title: '8. Connecting Tables (JOIN)', body: 'Real databases have many connected tables. JOIN lets you combine data from two related tables.' },
      { title: '9. Tips for Learning', body: 'To learn SQL quickly: (1) Build a small practice database. (2) Practice SELECT, WHERE, and JOIN. (3) Use free practice websites like SQLZoo or W3Schools SQL. (4) Learning SQL goes hand in hand with Python or PHP.' },
      { title: '10. Conclusion', body: 'SQL is an essential skill for anyone working with data. It provides power that is essential for Data Analysis, Backend Development, and data management.' },
    ],
    ar: [
      { title: '1. ما هي لغة SQL؟', body: 'إس كيو إل (SQL) هي لغة تُستخدم للتواصل مع قواعد البيانات - حيث تُخزّن البيانات. كل موقع تستخدمه يستخدم قاعدة بيانات لتخزين بيانات المستخدمين. SQL هي "اللغة" المستخدمة للتحدث مع تلك القواعد.' },
      { title: '2. لماذا تتعلم SQL', body: 'تحتاج كل شركة تقريبًا تمتلك بيانات إلى شخص يعرف SQL. يستخدمها محللو البيانات، ومطورو الخلفية، وحتى المسوقون. تُعتبر SQL من أكثر المهارات طلبًا في مجال IT.' },
      { title: '3. كيفية البدء', body: 'لتتعلم SQL، تحتاج إلى قاعدة بيانات، مثل MySQL (مجانية) أو SQLite (الأبسط). يمكنك تنزيل MySQL Workbench للتدرب.' },
      { title: '4. الأساسيات: SELECT', body: 'الأمر الأكثر استخدامًا في SQL هو SELECT، المستخدم لاسترجاع البيانات من جدول. على سبيل المثال: SELECT * FROM users; يسترجع كل البيانات.' },
      { title: '5. التصفية: WHERE', body: 'يُستخدم WHERE لتصفية النتائج. على سبيل المثال: SELECT * FROM users WHERE age > 18; يسترجع فقط المستخدمين الأكبر من 18 عامًا.' },
      { title: '6. إضافة وتحديث البيانات', body: 'تستخدم INSERT INTO لإضافة بيانات جديدة. لتغيير بيانات موجودة، تستخدم UPDATE.' },
      { title: '7. حذف البيانات: DELETE', body: 'لحذف بيانات من قاعدة البيانات، تستخدم DELETE. مهم: استخدم دائمًا WHERE عند تنفيذ DELETE - وإلا ستحذف بيانات الجدول بأكمله!' },
      { title: '8. ربط الجداول (JOIN)', body: 'تحتوي قواعد البيانات الحقيقية على جداول عديدة مترابطة. يتيح لك JOIN دمج بيانات من جدولين مرتبطين.' },
      { title: '9. نصائح للتعلم', body: 'لتتعلم SQL بسرعة: (1) ابنِ قاعدة بيانات صغيرة للتدريب. (2) تدرّب على SELECT وWHERE وJOIN. (3) استخدم مواقع تدريب مجانية مثل SQLZoo أو W3Schools SQL. (4) يسير تعلّم SQL جنبًا إلى جنب مع بايثون أو PHP.' },
      { title: '10. الخاتمة', body: 'SQL مهارة أساسية لأي شخص يعمل مع البيانات. توفر قوة أساسية لتحليل البيانات، وتطوير الخلفية، وإدارة البيانات.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(68,121,161,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🗄️</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Barashada SQL' : lang === 'ar' ? 'تعلم SQL' : 'Learning SQL'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Hage dhamaystiran oo bilowga ah, oo lagu barto database-yada iyo xogta maareynta.' : lang === 'ar' ? 'دليل شامل للمبتدئين لتعلم قواعد البيانات وإدارة البيانات.' : "A complete beginner's guide to databases and data management."}
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '48px', boxShadow: '0 12px 32px rgba(15,76,58,0.08)' }}>
            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: i < sections.length - 1 ? '32px' : '0', paddingBottom: i < sections.length - 1 ? '32px' : '0', borderBottom: i < sections.length - 1 ? '1px solid #D8DFDB' : 'none' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#4479A1', marginBottom: '12px' }}>{section.title}</h2>
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