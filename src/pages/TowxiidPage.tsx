import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function TowxiidPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Tawxiidka?', body: 'Tawxiidku waa aasaaska ugu weyn ee diinta Islaamka. Waxa uu ka dhigan yahay in la caqiidsado oo la aqoonsado in Alle (Subxaanahu wa Ta\'aala) Keligiis yahay Ilaaha xaqa ah ee mudan in la caabudo, aan wax la wadaagin xukunkiisa, amarkiisa, magacyadiisa iyo sifooyinkiisa. Waa macnaha ugu dheer ee kalimada "Laa ilaaha illa Allah" — ma jiro Ilaah xaq ah oo la caabudo Alle mooyee.' },
      { title: '2. Muhiimadda Tawxiidka', body: 'Tawxiidku waa shuruudda ugu horeysa ee camal loo aqbalo Eebe agtiisa. Nabiyadii oo dhan, laga bilaabo Aadam (CS) ilaa Muxammad (SCW), waxay ku wada yimaadeen hal fariin oo ah: caabuda Alle oo keliya. Alle wuxuu Quraanka ku yiri: "Waxaana kuu soo dirin Rasuul kastoo aan hortaa aan waxyoon inuu Aniga mooyaane Ilaah kale ma jiro ee I caabuda" (Suuratul-Anbiyaa: 25). Camal kastoo lagu sameeyo niyad shirko ku jirto, Alle ma aqbalo.' },
      { title: '3. Nooca 1aad: Tawxiidu Ruboobiyah', body: 'Waa aqoonsiga in Alle Keligiis yahay Abuuraha, Arsaaqaha (kan wax siiya rizqiga), Nooleeyaha, Dilaaha, iyo Maamulaha caalamka oo dhan — samada, dhulka, iyo waxa u dhexeeya — aan sharikba lahayn arrintaas. Xitaa mushrikiintii Makkah ee Nabiga (SCW) la diriray waxay aqbaleen nooca Tawxiidkan (Suuratul-Zukhruf: 87), laakiin taasi keligeed kuma filna in qofku Muslim noqdo.' },
      { title: '4. Nooca 2aad: Tawxiidu Uluuhiyah', body: 'Waa nooca ugu muhiimsan, waana kan ay ku khilaafeen dadka hore. Waxa uu ka dhigan yahay in cibaadada oo dhan — salaadda, duco, xoolo la bixiyo (nadar/qurbaan), soonka, tawakal, cabsi, iyo rajo — kaliya loo diro Alle, aan waxba loogu jeedin xabaal, wali, ama makhluuq kasta. Kani waa halka ay ku dhacaan dadka qaarkood marka ay u ducaystaan quburaha ama waliyaasha — taasi waa shirk ka horjeeda Tawxiidkan.' },
      { title: '5. Nooca 3aad: Tawxiidu Asmaa\' wa Sifaat', body: 'Waa in la aqoonsado oo la caqiidsado magacyada iyo sifooyinka Alle ee ugu yimid Quraanka iyo Sunnada saxiixa ah, iyada oo aan (1) lala shabbaho khalqiga (tamthiil), (2) sifada aan la eryin (ta\'tiil), (3) aan la weyddiin sida ay u dhacaan (takyiif), (4) aan la qeexqeexin macnaha (tahriif). Tusaale, Alle waa "As-Samii\' " (Maqle) iyo "Al-Baseer" (Arag) — waxaan la yiraahdaa "sida" ama "sidee" — waana loo aqbalaa sidii ay u timid.' },
      { title: '6. Halbeegga u dhexeeya Islaamka iyo Shirka', body: 'Ka soo horjeedka Tawxiidka waa Shirku — kaas oo ah in Alle lala wadaajiyo cibaado ama xukun. Shirku waa dembiga ugu weyn ee Alle aan cafiyeynin haddii qofku ku dhinto isagoo aan ka toobad keenin, sida uu Quraanku sheegay: "Hubaal Eebe kama cafiyo in lala wadaajiyo (shirko), wuuna cafiyaa waxa ka soo hooseeya (dambiyada kale) qofkuu doono" (Suuratul-Nisaa: 48).' },
      { title: '7. Faa\'iidada Tawxiidka Nolosha', body: 'Qofka si sax ah u fahmay oo u caqiidsaday Tawxiidka wuxuu helaa xasilooni maskaxeed iyo nabad qalbi ah, maadaama uu og yahay in wax kastaa ay ku jiraan gacanta Alle. Wuxuu ka xoreeyaa qofka cabsida makhluuqa, khuraafaadka, iyo cibaadada aan micno lahayn. Waxaana lagu abaalmariyaa aakhiro Jannada ku dhawaaqidda ugu dambaysa ee Tawxiidka.' },
      { title: '8. Sida Loo Xoojiyo Tawxiidka Qalbiga', body: 'Tawxiidka waxaa lagu xoojiyaa: (1) barashada magacyada iyo sifooyinka Alle iyo macnahooda, (2) akhrinta iyo ka fikirida aayadaha Quraanka ee ku saabsan Abuurista iyo Nidaamka Kawnka, (3) iska ilaalinta khuraafaadka iyo aragtida qaarba-qaarba (tawasul aan sharciga ahayn), (4) barashada seeratka Nabiga (SCW) iyo sida uu ugu adkaystay Tawxiidka Makkah muddo 13 sano ah.' },
      { title: '9. Khaladaadka Caadiga ah', body: 'Dad badan ayaa isku khaldiya inay yiraahdaan Alle way jirtaa (aqoonsi guud) iyo inay dhab ahaan u caabudaan Alle Keliya. Sidoo kale, qaar waxay u maleeyaan in tukashada iyo cibaadada la sameeyo si loo raali geliyo dadka (riyaa) ay Tawxiidka ka gudbeyso — taasina waa shirk yar (shirk asghar) oo laga digay.' },
      { title: '10. Gunaanad', body: 'Tawxiidku waa saldhigga oo dhan ee Islaamka — camal kasta wuxuu ku dhisan yahay. Sida guri aan salka lahayn uusan taagnaan karin, camalkuna haddii uusan ku dhisnayn Tawxiid saxaa ma leh qiimo Aakhiro. Waxaa muhiim ah in Muslim kastaa mar walba dib u cusboonaysiiyo caqiidadiisa isagoo baraya oo fahamsan saddexda nooc ee Tawxiidka.' },
    ],
    en: [
      { title: '1. What Is Tawhid?', body: 'Tawhid is the greatest foundation of Islam. It means believing and acknowledging that Allah alone is the true God deserving worship, without any partner in His rule, command, names, or attributes. It is the full meaning of "There is no god but Allah" — no one deserves worship except Allah.' },
      { title: '2. The Importance of Tawhid', body: 'Tawhid is the first condition for any deed to be accepted by Allah. All prophets, from Adam to Muhammad (peace be upon them), carried the same message: worship Allah alone. Allah says in the Quran: "And We did not send any messenger before you except that We revealed to him that there is no deity except Me, so worship Me" (Al-Anbiya: 25). A deed mixed with any form of shirk (associating partners with Allah) is not accepted.' },
      { title: '3. Category 1: Tawhid al-Rububiyyah', body: 'This is acknowledging that Allah alone is the Creator, Sustainer, Giver of life and death, and Ruler of the entire universe — the heavens, the earth, and everything between them — with no partner whatsoever. Even the pagans of Makkah accepted this category of Tawhid (Quran, Az-Zukhruf: 87), yet that alone did not make them Muslims.' },
      { title: '4. Category 2: Tawhid al-Uluhiyyah', body: 'This is the most important category, and the one over which past nations differed. It means directing all acts of worship — prayer, supplication, sacrifice, fasting, reliance, fear, and hope — to Allah alone, not to any grave, saint, or created being. This is where many people fall into error by supplicating to graves or saints — which contradicts this Tawhid.' },
      { title: '5. Category 3: Tawhid al-Asma wa Sifat', body: 'This means affirming Allah\'s names and attributes exactly as they came in the Quran and authentic Sunnah, without (1) likening them to creation, (2) denying them, (3) asking "how" they are, or (4) distorting their meaning. For example, Allah is "As-Sami\'" (All-Hearing) and "Al-Basir" (All-Seeing) — we do not ask "how" — we simply affirm them as they came.' },
      { title: '6. The Line Between Islam and Shirk', body: 'The opposite of Tawhid is Shirk — associating partners with Allah in worship or authority. Shirk is the greatest sin, one Allah does not forgive if a person dies upon it without repentance, as the Quran states: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills" (An-Nisa: 48).' },
      { title: '7. The Benefits of Tawhid in Life', body: 'A person who truly understands and believes in Tawhid attains peace of mind and heart, knowing everything is in Allah\'s hands. It frees a person from fear of creation, superstition, and meaningless rituals. It is also rewarded in the Hereafter with the final declaration of Tawhid granting entry to Paradise.' },
      { title: '8. Strengthening Tawhid in the Heart', body: 'Tawhid is strengthened by: (1) learning Allah\'s names and attributes and their meanings, (2) reading and reflecting on Quranic verses about creation and the order of the universe, (3) avoiding superstition and unlawful intermediation (tawassul), (4) studying the Prophet\'s (peace be upon him) life and his 13-year struggle to establish Tawhid in Makkah.' },
      { title: '9. Common Misconceptions', body: 'Many people confuse believing Allah exists (general acknowledgment) with truly worshipping Him alone. Others assume that praying and worshipping to be seen or praised by people (riya) does not affect their Tawhid — but this is actually a minor form of shirk that is warned against.' },
      { title: '10. Conclusion', body: 'Tawhid is the entire foundation of Islam — every deed is built upon it. Just as a house cannot stand without a foundation, deeds not built on correct Tawhid hold no value in the Hereafter. It is essential for every Muslim to continually renew and deepen their understanding of the three categories of Tawhid.' },
    ],
    ar: [
      { title: '1. ما هو التوحيد؟', body: 'التوحيد هو أعظم أساس في الإسلام. يعني الاعتقاد والإقرار بأن الله وحده هو الإله الحق المستحق للعبادة، دون شريك له في حكمه وأمره وأسمائه وصفاته. وهو المعنى الكامل لكلمة "لا إله إلا الله" - لا أحد يستحق العبادة إلا الله.' },
      { title: '2. أهمية التوحيد', body: 'التوحيد هو الشرط الأول لقبول أي عمل عند الله. جميع الأنبياء، من آدم إلى محمد عليهم الصلاة والسلام، حملوا نفس الرسالة: عبادة الله وحده. يقول الله في القرآن: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ" (الأنبياء: 25).' },
      { title: '3. القسم الأول: توحيد الربوبية', body: 'هو الإقرار بأن الله وحده هو الخالق، الرازق، المحيي، المميت، ومدبر الكون كله - السماوات والأرض وما بينهما - دون أي شريك. حتى مشركو مكة أقروا بهذا النوع من التوحيد (سورة الزخرف: 87)، لكن ذلك وحده لم يجعلهم مسلمين.' },
      { title: '4. القسم الثاني: توحيد الألوهية', body: 'هذا هو أهم قسم، وهو ما اختلفت فيه الأمم السابقة. يعني توجيه جميع العبادات - الصلاة، الدعاء، الذبح، الصوم، التوكل، الخوف، الرجاء - إلى الله وحده، وليس إلى أي قبر أو ولي أو مخلوق. هنا يقع كثير من الناس في الخطأ بدعاء القبور أو الأولياء.' },
      { title: '5. القسم الثالث: توحيد الأسماء والصفات', body: 'يعني إثبات أسماء الله وصفاته كما جاءت في القرآن والسنة الصحيحة، دون (1) تشبيهها بالمخلوقات، (2) نفيها، (3) السؤال عن كيفيتها، (4) تحريف معناها. فالله "السميع" و"البصير" - ولا نسأل "كيف" - بل نثبتها كما جاءت.' },
      { title: '6. الخط الفاصل بين الإسلام والشرك', body: 'ضد التوحيد هو الشرك - إشراك آخرين مع الله في العبادة أو الحكم. الشرك أعظم الذنوب، ولا يغفره الله لمن مات عليه دون توبة، كما قال تعالى: "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ" (النساء: 48).' },
      { title: '7. فوائد التوحيد في الحياة', body: 'من فهم التوحيد حقًا واعتقده يحصل على طمأنينة القلب والعقل، لعلمه أن كل شيء بيد الله. يحرره من الخوف من المخلوقات والخرافات والطقوس الفارغة. كما يُثاب عليه في الآخرة بدخول الجنة بشهادة التوحيد الأخيرة.' },
      { title: '8. تقوية التوحيد في القلب', body: 'يُقوَّى التوحيد بـ: (1) تعلم أسماء الله وصفاته ومعانيها، (2) قراءة والتفكر في آيات القرآن عن الخلق ونظام الكون، (3) تجنب الخرافات والتوسل غير المشروع، (4) دراسة سيرة النبي صلى الله عليه وسلم وكفاحه 13 عامًا لترسيخ التوحيد في مكة.' },
      { title: '9. أخطاء شائعة', body: 'كثير من الناس يخلطون بين الاعتقاد بوجود الله (إقرار عام) وبين عبادته وحده حقًا. كما يظن البعض أن الصلاة والعبادة للرياء (لإظهارها للناس) لا تؤثر على توحيدهم - لكن هذا في الواقع شرك أصغر محذر منه.' },
      { title: '10. الخاتمة', body: 'التوحيد هو الأساس الكامل للإسلام - كل عمل مبني عليه. كما لا يقوم بيت بلا أساس، فالأعمال غير المبنية على التوحيد الصحيح لا قيمة لها في الآخرة. من الضروري أن يجدد كل مسلم فهمه لأقسام التوحيد الثلاثة باستمرار.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,165,55,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>☪️</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Tawxiidka' : lang === 'ar' ? 'التوحيد' : 'Tawhid'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Tiirka koowaad ee Islaamka — Aqoonsiga in Alle Keligiis leeyahay xaqa la caabudo.' : lang === 'ar' ? 'الركن الأول من أركان الإسلام - الإقرار بأن الله وحده يستحق العبادة.' : 'The first pillar of Islam — acknowledging that Allah alone deserves worship.'}
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '48px', boxShadow: '0 12px 32px rgba(15,76,58,0.08)' }}>
            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: i < sections.length - 1 ? '32px' : '0', paddingBottom: i < sections.length - 1 ? '32px' : '0', borderBottom: i < sections.length - 1 ? '1px solid #D8DFDB' : 'none' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#D4A537', marginBottom: '12px' }}>{section.title}</h2>
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