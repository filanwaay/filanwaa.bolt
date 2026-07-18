import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function SawmPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Soonku?', body: 'Soonku waa tiirka saddexaad ee Islaamka. Waa ka joogsiga cunista, cabbida, iyo galmada laga bilaabo waaberiga ilaa qorax dhaca, iyadoo la doonayo Alle si loo caabudo. Soonka ugu weyn waa Ramadaan, oo waajib ku ah Muslin kasta oo qaan-gaar ah, caqli qaba, uuna cudur qabin.' },
      { title: '2. Muhiimadda Soonka', body: 'Alle wuxuu Quraanka ku yiri: "Kuwii rumeeyow waxaa laydinku qoray Soonku sida loogu qoray kuwii idinka horreeyay, si aad uga dhawrsataan" (Al-Baqarah: 183). Soonku wuxuu barbaariyaa dabeecadda takwa (dhawrsashada), samir, iyo naxariista dadka saboolka ah.' },
      { title: '3. Bisha Ramadaan', body: 'Ramadaan waa bisha sagaalaad ee kalandarka Islaamka, taas oo lagu soo dejiyay Quraanka. Muslimiintu waxay soomaan maalin kasta oo bisha ka mid ah, laga bilaabo Fajrka ilaa Maghribka, sanad walba.' },
      { title: '4. Shuruudaha Soonka', body: 'Si soonku u noqdo mid saxa ah waxaa lagama maarmaan ah: (1) Niyad (ujeeddo) laga yeesho subax ka hor, (2) Ka joogsiga cunista, cabbida, iyo galmada, (3) Muslimnimo, (4) Caqli qabnimo, (5) Gaadhitaan da\' ama tamiiznimo.' },
      { title: '5. Kuwa Aan Waajib Ku Ahayn Soonka', body: 'Waxaa laga cafiyaa soonka: bukaanka daran, safarka, dumarka caadada ah ama nifaaska ku jira, haweenka uur leh ama nuujinaysa haddii ay khatar ku aragto, iyo waayeelka aan awoodin. Kuwan waxaa lagu waajibiyaa in ay maalmaha ka maqan bedelaan (qadaa) ama cunto siiyaan miskiin (fidyo) haddii aanay awoodin qadaa.' },
      { title: '6. Waxyaabaha Jebiya Soonka', body: 'Waxaa jebiya soonka: cunista ama cabbida si ula kac ah, galmada, mantiga (mataqid ah), iyo wixii la mid ah ee si ula kac ah loo sameeyo. Halka wixii lagu ilaawo (sida qof ilaaway oo wax cunay) uusan jebinin soonka.' },
      { title: '7. Sahuurka iyo Iftarka', body: 'Sahuurku waa cuntada la cuno waaberiga ka hor, waxaana lagu dhiirrigeliyaa in la daahiyo. Iftarka waa jebinta soonka marka Maghribku galo, waxaana Sunnah ah in lagu bilaabo tamar ama biyo, ka dibna la iftaamo si degdeg ah.' },
      { title: '8. Laylatul Qadr', body: 'Habeenka Qadarka waa habeenka ugu khayrka badan sanadka, oo ku dhex jira toban habeen ee ugu dambeeya Ramadaan (guud ahaan habeenada tayo ah). Camal la sameeyo habeenkaas wuxuu ka wanaagsan yahay kun bilood oo cibaado ah.' },
      { title: '9. Soonka La\'aanla\'aan Sababi Ma Karo', body: 'Ka dhaafida soonka Ramadaan iyada oo aan sabab sharci ah jirin waa dembi weyn. Qofka sidaas yeela waa in uu toobad keeno oo dib u qadaystaa maalmihii ay ka maqnaayeen, ka dibna Alle uga cafis weydiisto.' },
      { title: '10. Gunaanad', body: 'Soonku waa cibaado jidh iyo ruux labadaba wax ka beddesha, waxayna dhisaa dabeecad Islaami ah oo ku dhisan takwa, samir, iyo naxariis. Muslin kastaa waxaa saaran inuu soomo Ramadaan si sax ah, isagoo raadinaya ajarka Alle.' },
    ],
    en: [
      { title: '1. What Is Fasting (Sawm)?', body: 'Sawm is the third pillar of Islam. It is abstaining from food, drink, and marital relations from dawn until sunset, done purely to worship Allah. The obligatory fast is during Ramadan, required of every sane, adult Muslim who is not ill.' },
      { title: '2. The Importance of Fasting', body: 'Allah says in the Quran: "O you who believe, fasting is prescribed for you as it was prescribed for those before you, that you may attain taqwa (God-consciousness)" (Al-Baqarah: 183). Fasting cultivates self-restraint, patience, and compassion for the poor.' },
      { title: '3. The Month of Ramadan', body: 'Ramadan is the ninth month of the Islamic calendar, the month in which the Quran was revealed. Muslims fast every day of this month, from Fajr until Maghrib, every year.' },
      { title: '4. Conditions of a Valid Fast', body: 'For a fast to be valid: (1) intention made before dawn, (2) abstaining from food, drink, and marital relations, (3) being Muslim, (4) being of sound mind, (5) reaching puberty or discernment.' },
      { title: '5. Those Exempt from Fasting', body: 'Exempt from fasting: the seriously ill, travelers, women menstruating or in post-natal bleeding, pregnant or nursing women who fear harm, and the elderly who cannot manage it. These must make up missed days later (qadaa) or feed a poor person (fidyah) if unable to make up the days.' },
      { title: '6. What Breaks the Fast', body: 'The fast is broken by: deliberately eating or drinking, marital relations, and similar deliberate acts. Eating or drinking out of forgetfulness does not break the fast.' },
      { title: '7. Suhoor and Iftar', body: 'Suhoor is the pre-dawn meal, recommended to be delayed close to Fajr. Iftar is breaking the fast at Maghrib, and it is Sunnah to begin with dates or water, then eat promptly.' },
      { title: '8. Laylatul Qadr', body: 'The Night of Decree is the most blessed night of the year, occurring within the last ten nights of Ramadan. Worship performed on this night is better than a thousand months of worship.' },
      { title: '9. Missing the Fast Without Excuse', body: 'Deliberately abandoning the Ramadan fast without a valid excuse is a major sin. One must repent and make up the missed days, and seek Allah\'s forgiveness.' },
      { title: '10. Conclusion', body: 'Fasting is worship that transforms both body and soul, building Islamic character rooted in taqwa, patience, and compassion. Every Muslim is obligated to properly fast Ramadan, seeking Allah\'s reward.' },
    ],
    ar: [
      { title: '1. ما هو الصيام؟', body: 'الصيام هو الركن الثالث من أركان الإسلام. هو الامتناع عن الطعام والشراب والجماع من الفجر إلى غروب الشمس، ابتغاء وجه الله. الصيام المفروض هو صيام رمضان، واجب على كل مسلم بالغ عاقل غير مريض.' },
      { title: '2. أهمية الصيام', body: 'يقول الله تعالى: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ" (البقرة: 183). ينمي الصيام ضبط النفس والصبر والرحمة تجاه الفقراء.' },
      { title: '3. شهر رمضان', body: 'رمضان هو الشهر التاسع في التقويم الإسلامي، وفيه أُنزل القرآن. يصوم المسلمون كل يوم من هذا الشهر، من الفجر إلى المغرب، كل عام.' },
      { title: '4. شروط صحة الصيام', body: 'لصحة الصيام: (1) النية قبل الفجر، (2) الامتناع عن الطعام والشراب والجماع، (3) الإسلام، (4) العقل، (5) البلوغ أو التمييز.' },
      { title: '5. المعفيون من الصيام', body: 'يُعفى من الصيام: المريض مرضًا شديدًا، المسافر، الحائض أو النفساء، الحامل أو المرضع إذا خافت الضرر، وكبار السن غير القادرين. يجب عليهم القضاء لاحقًا أو إطعام مسكين (الفدية) إن تعذر القضاء.' },
      { title: '6. مبطلات الصيام', body: 'يبطل الصيام: الأكل أو الشرب عمدًا، الجماع، وما شابه ذلك من الأفعال المتعمدة. أما الأكل أو الشرب نسيانًا فلا يبطل الصيام.' },
      { title: '7. السحور والإفطار', body: 'السحور هو الوجبة قبل الفجر، ويُستحب تأخيره. الإفطار هو كسر الصيام عند المغرب، ومن السنة البدء بالتمر أو الماء ثم الإفطار سريعًا.' },
      { title: '8. ليلة القدر', body: 'ليلة القدر هي أفضل ليلة في السنة، وتقع ضمن العشر الأواخر من رمضان. العمل فيها خير من ألف شهر.' },
      { title: '9. ترك الصيام بدون عذر', body: 'ترك صيام رمضان عمدًا بدون عذر شرعي ذنب عظيم. يجب التوبة وقضاء الأيام الفائتة، وطلب مغفرة الله.' },
      { title: '10. الخاتمة', body: 'الصيام عبادة تُغيّر الجسد والروح معًا، وتبني شخصية إسلامية قائمة على التقوى والصبر والرحمة. كل مسلم مُلزَم بصيام رمضان بشكل صحيح طلبًا لثواب الله.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1A1F1C 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,165,55,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌙</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Soonka' : lang === 'ar' ? 'الصيام' : 'Sawm'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Tiirka saddexaad ee Islaamka — ka joogsiga cunista iyo cabbida bisha Ramadaan.' : lang === 'ar' ? 'الركن الثالث من أركان الإسلام - الامتناع عن الطعام والشراب في شهر رمضان.' : 'The third pillar of Islam — abstaining from food and drink during Ramadan.'}
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