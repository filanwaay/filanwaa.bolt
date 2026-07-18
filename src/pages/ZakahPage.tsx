import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function ZakahPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Zakada?', body: 'Zakadu waa tiirka afaraad ee Islaamka. Waa qayb go\'an oo xoolaha lagu bixiyo dadka u baahan (masaakiinta), taas oo Alle ku waajibiyay Muslin kasta oo xoolo hodan ah leh, oo gaadhay xad go\'an (nisaab) oo sanad buuxa ku sii jiray (xawlka).' },
      { title: '2. Muhiimadda Zakada', body: 'Alle wuxuu Quraanka ku yiri: "Ka qaad xoolahooda sadaqad aad ku daahiriso oo ku nadiifiso" (At-Tawbah: 103). Zakadu waxay nadiifisaa xoolaha iyo qalbiga qofka, waxayna yareysaa dabeecadda hunguri iyo bakhaylnimo.' },
      { title: '3. Kuwa Zakadu Waajib Ku Tahay', body: 'Zakadu waxay waajib ku tahay Muslin kasta oo: (1) xor ah, (2) xoolo leh oo gaadhay Nisaabka (xadka ugu yar), (3) xoolaha ay sii jireen sanad Islaami ah oo dhan (xawl), (4) xoolaha ay tahay noocyada Zakada la xiriira (lacag, deeq, xoolo, dhoobo hore, iwm).' },
      { title: '4. Qadarka Zakada', body: 'Qadarka guud ee Zakada lacagta iyo dahabka/lacagta caadiga ah waa 2.5% (rubuc-cushur) ee xoolaha la haysto muddo sannad ah oo dhan haddii ay gaadhaan Nisaabka. Beeraha iyo xoolaha nool (sida geel, lo\', ari) waxay leeyihiin xisaabo gaar ah oo ka duwan.' },
      { title: '5. Kuwa Zakadu U Dhigan Tahay (8 Nooc)', body: 'Alle Quraanka wuxuu ku qeexay siddeed nooc oo Zakadu u dhigan tahay: (1) Masaakiinta, (2) Saboolka, (3) Kuwa ka shaqeeya ururinta Zakada, (4) Kuwa qalbigooda loo soo jiitayo, (5) Addoommada la xoreeyo, (6) Dad deyn ku jira, (7) Jidka Alle (jihaad iyo waxbarasho), (8) Socdaalaha maqan xoolihiisa.' },
      { title: '6. Sadaqada Fitrka', body: 'Sadaqada Fitrku waa nooc kale oo Zakad ah oo waajib ah, oo lagu bixiyo dhamaadka Ramadaan ka hor Salaadda Ciidda, qof kasta oo Muslim ah (yar iyo weyn, lab iyo dhaddig), si loo caawiyo saboolka inuu ku farxo Ciidda.' },
      { title: '7. Farqiga u Dhexeeya Zakada iyo Sadaqada', body: 'Zakadu waa waajib qeexan oo leh xisaab iyo xad go\'an, halka Sadaqadu (ikhtiyaari ah) ay tahay wax kastoo khayr ah oo qofku ku bixiyo ikhtiyaarkiisa, aan lahayn xad ama waqti go\'an.' },
      { title: '8. Faa\'iidada Zakada Bulshada', body: 'Zakadu waxay yareysaa kala qaybsanaanta dhaqaale ee bulshada, waxayna gargaartaa saboolka iyo masaakiinta, waxayna dhisaa isu-kaalmayn iyo wada-noolaansho bulsho oo caafimaad qaba.' },
      { title: '9. Khaladaadka Caadiga ah', body: 'Qaar waxay u maleeyaan Zakadu waa ikhtiyaari, laakiin waa waajib sida Salaadda. Sidoo kale, qaar kuma bixiyaan Zakada xoolaha maalka ah (sida dahabka haweenka) iyagoo u maleynaya inaanay ku jirin — taasi waa khalad, dahabka iyo lacagtu Zako way leeyihiin haddii ay gaadhaan Nisaabka.' },
      { title: '10. Gunaanad', body: 'Zakadu waa tiirka afaraad ee Islaamka, oo isku dara cibaadada iyo bulsho-nololeedka. Waxay nadiifisaa xoolaha iyo qalbiga, waxayna gargaartaa kuwa u baahan. Muslin kastaa waa in uu si sax ah u xisaabiyo oo u bixiyo Zakadiisa sannad kasta.' },
    ],
    en: [
      { title: '1. What Is Zakah?', body: 'Zakah is the fourth pillar of Islam. It is a fixed portion of wealth given to those in need, obligated by Allah upon every wealthy Muslim whose wealth reaches a specific threshold (nisab) and has been held for a full lunar year (hawl).' },
      { title: '2. The Importance of Zakah', body: 'Allah says in the Quran: "Take from their wealth a charity by which you purify them and cause them increase" (At-Tawbah: 103). Zakah purifies both wealth and the heart, reducing greed and stinginess.' },
      { title: '3. Who Zakah Is Obligatory On', body: 'Zakah is obligatory on every Muslim who: (1) is free, (2) possesses wealth reaching the nisab (minimum threshold), (3) has held the wealth for a full Islamic year (hawl), (4) the wealth is of the types subject to Zakah (cash, savings, livestock, gold/silver, trade goods, etc.).' },
      { title: '4. The Amount of Zakah', body: 'The standard rate of Zakah on cash and gold/silver is 2.5% of wealth held for a full year, once it reaches the nisab. Crops and livestock (camels, cattle, sheep) have their own specific calculations.' },
      { title: '5. The Eight Categories of Zakah Recipients', body: 'Allah specified eight categories in the Quran: (1) the poor, (2) the needy, (3) those who administer Zakah, (4) those whose hearts are to be reconciled, (5) freeing slaves, (6) those in debt, (7) in the cause of Allah (jihad, education), (8) the stranded traveler.' },
      { title: '6. Zakat al-Fitr', body: 'Zakat al-Fitr is another obligatory form of Zakah, given at the end of Ramadan before the Eid prayer, by every Muslim (young and old, male and female), to help the poor celebrate Eid.' },
      { title: '7. The Difference Between Zakah and Sadaqah', body: 'Zakah is a defined obligation with a specific calculation and threshold, while Sadaqah (voluntary charity) is anything given voluntarily, with no fixed amount or time.' },
      { title: '8. The Social Benefits of Zakah', body: 'Zakah reduces economic disparity in society, assists the poor and needy, and builds mutual support and healthy social cohesion.' },
      { title: '9. Common Misconceptions', body: 'Some assume Zakah is optional, but it is obligatory like prayer. Others don\'t pay Zakah on personal gold jewelry, thinking it\'s exempt — this is incorrect; gold and silver are subject to Zakah if they reach the nisab.' },
      { title: '10. Conclusion', body: 'Zakah is the fourth pillar of Islam, combining worship and social responsibility. It purifies wealth and the heart, and helps those in need. Every Muslim must correctly calculate and pay their Zakah each year.' },
    ],
    ar: [
      { title: '1. ما هي الزكاة؟', body: 'الزكاة هي الركن الرابع من أركان الإسلام. هي جزء محدد من المال يُعطى للمحتاجين، فرضه الله على كل مسلم غني بلغ ماله النصاب واستمر معه حولاً كاملاً.' },
      { title: '2. أهمية الزكاة', body: 'يقول الله تعالى: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا" (التوبة: 103). تطهر الزكاة المال والقلب، وتقلل من الجشع والبخل.' },
      { title: '3. من تجب عليه الزكاة', body: 'تجب الزكاة على كل مسلم: (1) حر، (2) يملك مالاً بلغ النصاب، (3) استمر معه المال حولاً كاملاً، (4) المال من الأنواع الخاضعة للزكاة (نقد، مواشي، ذهب وفضة، عروض تجارة).' },
      { title: '4. مقدار الزكاة', body: 'المعدل القياسي لزكاة النقد والذهب والفضة هو 2.5% من المال المحتفظ به لمدة عام كامل، عند بلوغ النصاب. المحاصيل والمواشي (الإبل والبقر والغنم) لها حسابات خاصة.' },
      { title: '5. مصارف الزكاة الثمانية', body: 'حدد الله ثمانية أصناف في القرآن: (1) الفقراء، (2) المساكين، (3) العاملون عليها، (4) المؤلفة قلوبهم، (5) في الرقاب، (6) الغارمون، (7) في سبيل الله، (8) ابن السبيل.' },
      { title: '6. زكاة الفطر', body: 'زكاة الفطر هي شكل آخر واجب من الزكاة، تُعطى في نهاية رمضان قبل صلاة العيد، من كل مسلم (صغيرًا وكبيرًا، ذكرًا وأنثى)، لمساعدة الفقراء على الاحتفال بالعيد.' },
      { title: '7. الفرق بين الزكاة والصدقة', body: 'الزكاة واجب محدد له حساب ونصاب معين، بينما الصدقة (تطوعية) هي أي شيء يُعطى طواعية، دون مقدار أو وقت محدد.' },
      { title: '8. الفوائد الاجتماعية للزكاة', body: 'تقلل الزكاة من التفاوت الاقتصادي في المجتمع، وتساعد الفقراء والمحتاجين، وتبني التكافل والتماسك الاجتماعي الصحي.' },
      { title: '9. أخطاء شائعة', body: 'يظن البعض أن الزكاة اختيارية، لكنها واجبة كالصلاة. كما لا يدفع البعض زكاة الذهب الشخصي (كحلي المرأة) ظنًا منهم أنه معفى - وهذا خطأ، فالذهب والفضة تجب فيهما الزكاة إذا بلغا النصاب.' },
      { title: '10. الخاتمة', body: 'الزكاة هي الركن الرابع من أركان الإسلام، تجمع بين العبادة والمسؤولية الاجتماعية. تطهر المال والقلب، وتساعد المحتاجين. يجب على كل مسلم حساب زكاته ودفعها بشكل صحيح كل عام.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,165,55,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💰</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Zakada' : lang === 'ar' ? 'الزكاة' : 'Zakah'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Tiirka afaraad ee Islaamka — bixinta xoolaha loo baahan yahay masaakiinta.' : lang === 'ar' ? 'الركن الرابع من أركان الإسلام - إعطاء المال للمحتاجين.' : 'The fourth pillar of Islam — giving wealth to those in need.'}
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