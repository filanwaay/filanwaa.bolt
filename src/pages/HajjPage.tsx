import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function HajjPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Xajka?', body: 'Xajku waa tiirka shanaad ee Islaamka. Waa safar diimeed oo Muslimka uu u tago Maka (Makkah) si uu u guto waajibaadka diinta. Alle wuxuu Quraanka ku yiri: "Haddii aad awooddo inaad aaddo Jidka, xajka Alle ha ku xajee" (Suuratul-Imraan: 97).' },
      { title: '2. Muhiimadda Xajka', body: 'Xajku waa faral korkiisa mid kasta oo Muslim ah oo awooda (jir iyo maal). Wuxuu ka dhigaa Muslimka mid la mid ah kuwii hore ee Nabiga (SCW) la socday. Xajku wuxuu tirtiraa dambiyadii hore, sida Rasuulka (SCW) sheegay: "Kuwa xajka gudan oo aan wax xun ka hadlin ama wax xun samayn, waxay ka soo laaban doonaa sida maalintii uu hooygiis dhashay."' },
      { title: '3. Shuruudaha Xajka', body: 'Shuruudaha Xajku waa: (1) Muslim ahaan, (2) caqli buuxda leh, (3) baaligh/baaligad ahaan, (4) xor ahaan (aan addoon ahayn), (5) awood jir iyo maal ahaan, (6) jidka ammaan ah, (7) mahram la leh haweenka. Qof aan shuruudahan lahayn ma aha inuu xajiyo, laakiin haddii uu awoodo waa inuu guto.' },
      { title: '4. Noocyada Xajka', body: 'Xajku waxaa uu leeyahay saddex nooc: (1) Ifraad — xajka keliya, (2) Tamattu\' — cumrada iyo xajka isku biirid, (3) Qiraan — xajka iyo cumrada isla waqtiga. Tamattu\' waa ugu fudud, Ifraad waa ugu daran. Qofku wuxuu dooran karaa midkood sida uu rabo.' },
      { title: '5. Mawaaxiidka Xajka (Manasik)', body: 'Mawaaxiidka Xajku waa: (1) Ihraam — xirashada dharkii xajka iyo niyadda, (2) Tawaaf — ku wareegidda Kacda, (3) Sacii — dhexmaridda Safaa iyo Marwaa, (4) Wuquuf Arafaat — joogidda Arafaat maalinta 9-aad, (5) Ramy al-Jimaar — dhagaxlaynta shaydaanka, (6) Halq/Qasr — timaha jaridda, (7) Tawaaf al-Ifaadah — Tawaafka dambe.' },
      { title: '6. Wuquufka Arafaat', body: 'Wuquufka Arafaat (joogidda Arafaat maalinta 9-aad ee Dul-Xijjah) waa ugu muhiimsan mawaaxiidka Xajka. Rasuulka (SCW) wuxuu yiri: "Xajku waa Arafaat." Qof aan joogin Arafaat maalintaas xajkiisu ma dhammaystirna. Waa maalinta ugu weyn ee Xajka oo Muslimku Alle uga toobad keenayo.' },
      { title: '7. Xajka iyo Cumadda', body: 'Cumaddu waa xajka yar. Waxay ka kooban tahay: Ihraam, Tawaaf, Sacii, iyo Halq/Qasr. Cumaddu ma aha faral sida Xajka, laakiin waa sunnad weyn. Dad badan waxay ku biiraan Xajka iyagoo marka hore Cumadda gudanaya (Tamattu\').' },
      { title: '8. Xajka Dhaqaalaha', body: 'Xajku wuxuu u baahan yahay dhaqaale ku filan. Qofku wuxuu u baahan yahay inuu bixiyo safarka, cuntada, hoyga, iyo waxyaabo kale. Alle wuxuu yiri: "Alle wuxuu u baahan yahay inaad wax ka bixisaan xajka" (Suuratul-Baqarah: 196). Waa in qofku si fiican ugu talagalo dhaqaalihiisa.' },
      { title: '9. Faa\'iidada Xajka', body: 'Xajku wuxuu keenaa: (1) dhaqan nadiif ah oo Alle la dhow, (2) isbeddel nololeed oo wanaagsan, (3) isdifaac dambiyada, (4) barasho Muslim kale oo kala duwan, (5) xasilooni qalbiga ah, (6) Jannada haddii Alle idmo. Waa safar nolosha beddela.' },
      { title: '10. Gunaanad', body: 'Xajku waa tiirka ugu dambeeya ee shanta tiir ee Islaamka. Waa waajib korkiisa mid kasta oo Muslim ah oo awooda. Waa in la guto si qalbiga ah oo Alle la dhow, aan la isku dayin in wax la sameeyo oo kaliya oo la muujiyo dadka. Xajka saxda ah wuxuu ka dhigaa qofka mid la mid ah kuwii hore ee Alle caabuday.' },
    ],
    en: [
      { title: '1. What Is Hajj?', body: 'Hajj is the fifth pillar of Islam. It is a religious journey that a Muslim undertakes to Makkah (Mecca) to fulfill religious obligations. Allah says in the Quran: "And perform Hajj and Umrah for Allah" (Al-Imran: 97).' },
      { title: '2. The Importance of Hajj', body: 'Hajj is obligatory for every Muslim who is physically and financially able. It makes the Muslim equal to those who accompanied the Prophet (peace be upon him). The Prophet said: "Whoever performs Hajj and does not commit any obscenity or transgression, he returns as the day his mother gave birth to him."' },
      { title: '3. Conditions of Hajj', body: 'The conditions of Hajj are: (1) being Muslim, (2) being of sound mind, (3) being adult (baligh), (4) being free (not a slave), (5) being physically and financially capable, (6) having a safe route, (7) women must have a mahram. One who does not meet these conditions is not required to perform Hajj.' },
      { title: '4. Types of Hajj', body: 'Hajj has three types: (1) Ifrad — Hajj only, (2) Tamattu\' — combining Umrah and Hajj, (3) Qiran — performing Hajj and Umrah simultaneously. Tamattu\' is the easiest, Ifrad is the most difficult. One can choose whichever they prefer.' },
      { title: '5. Hajj Rituals (Manasik)', body: 'The rituals of Hajj are: (1) Ihram — wearing the Hajj garment and making intention, (2) Tawaf — circling the Kaaba, (3) Sa\'i — walking between Safa and Marwa, (4) Wuquuf at Arafat — standing at Arafat on the 9th day, (5) Ramy al-Jamarat — stoning the devil, (6) Halq/Qasr — cutting hair, (7) Tawaf al-Ifadah — the farewell Tawaf.' },
      { title: '6. Wuquuf at Arafat', body: 'Wuquuf at Arafat (standing at Arafat on the 9th of Dhul-Hijjah) is the most important ritual of Hajj. The Prophet (peace be upon him) said: "Hajj is Arafat." One who does not stand at Arafat on that day, their Hajj is incomplete. It is the greatest day of Hajj when Muslims seek forgiveness from Allah.' },
      { title: '7. Hajj and Umrah', body: 'Umrah is the lesser Hajj. It consists of: Ihram, Tawaf, Sa\'i, and Halq/Qasr. Umrah is not obligatory like Hajj, but it is a highly recommended Sunnah. Many people combine Umrah with Hajj (Tamattu\').' },
      { title: '8. Financial Aspect of Hajj', body: 'Hajj requires sufficient financial means. One must pay for travel, food, accommodation, and other expenses. Allah says: "And take provisions, but indeed, the best provision is Taqwa" (Al-Baqarah: 197). One must plan their finances carefully.' },
      { title: '9. Benefits of Hajj', body: 'Hajj brings: (1) pure character close to Allah, (2) positive life change, (3) forgiveness of sins, (4) meeting Muslims from different backgrounds, (5) peace of heart, (6) Paradise if Allah wills. It is a life-changing journey.' },
      { title: '10. Conclusion', body: 'Hajj is the final pillar of the five pillars of Islam. It is obligatory for every able Muslim. It must be performed with a sincere heart close to Allah, not merely for show. Correct Hajj makes one like those who worshipped Allah before.' },
    ],
    ar: [
      { title: '1. ما هو الحج؟', body: 'الحج هو الركن الخامس من أركان الإسلام. هو رحلة دينية يقوم بها المسلم إلى مكة لأداء الفرائض الدينية. يقول الله في القرآن: "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ" (آل عمران: 97).' },
      { title: '2. أهمية الحج', body: 'الحج فرض على كل مسلم قادر بدنياً ومالياً. يجعل المسلم مساوياً لمن صحب النبي صلى الله عليه وسلم. قال النبي صلى الله عليه وسلم: "من حج فلم يرفث ولم يفسق، رجع كيوم ولدته أمه".' },
      { title: '3. شروط الحج', body: 'شروط الحج هي: (1) الإسلام، (2) العقل، (3) البلوغ، (4) الحرية، (5) القدرة البدنية والمالية، (6) سلامة الطريق، (7) وجود محرم للمرأة. من لا تتوفر فيه هذه الشروط لا يجب عليه الحج.' },
      { title: '4. أنواع الحج', body: 'للحج ثلاثة أنواع: (1) الإفراد - الحج فقط، (2) التمتع - الجمع بين العمرة والحج، (3) القران - أداء الحج والعمرة في آن واحد. التمتع هو الأسهل، والإفراد هو الأصعب. يمكن للشخص اختيار ما يشاء.' },
      { title: '5. مناسك الحج', body: 'مناسك الحج هي: (1) الإحرام - لباس الإحرام والنية، (2) الطواف - الدوران حول الكعبة، (3) السعي - المشي بين الصفا والمروة، (4) الوقوف بعرفة - في اليوم التاسع، (5) رمي الجمار - رجم الشيطان، (6) الحلق أو التقصير - حلق الشعر، (7) طواف الإفاضة.' },
      { title: '6. الوقوف بعرفة', body: 'الوقوف بعرفة في اليوم التاسع من ذي الحجة هو أهم مناسك الحج. قال النبي صلى الله عليه وسلم: "الحج عرفة". من لم يقف بعرفة في ذلك اليوم، حجه ناقص. وهو أعظم أيام الحج حيث يستغفر المسلمون من الله.' },
      { title: '7. الحج والعمرة', body: 'العمرة هي الحج الأصغر. تتكون من: الإحرام، الطواف، السعي، والحلق/التقصير. العمرة ليست فرضاً مثل الحج، لكنها سنة مؤكدة. كثير من الناس يجمعون العمرة مع الحج (التمتع).' },
      { title: '8. الجانب المالي للحج', body: 'الحج يتطلب وسائل مالية كافية. يجب على الشخص دفع تكاليف السفر والطعام والسكن وغيرها. يقول الله: "وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ" (البقرة: 197). يجب التخطيط المالي الجيد.' },
      { title: '9. فوائد الحج', body: 'الحج يجلب: (1) خلقاً طاهراً مقرباً من الله، (2) تغييراً إيجابياً في الحياة، (3) مغفرة الذنوب، (4) لقاء مسلمين من خلفيات مختلفة، (5) سكينة القلب، (6) الجنة إن شاء الله. إنها رحلة تغير الحياة.' },
      { title: '10. الخاتمة', body: 'الحج هو الركن الأخير من أركان الإسلام الخمسة. هو فرض على كل مسلم قادر. يجب أداؤه بقلب صادق مقرب من الله، لا مجرد رياء. الحج الصحيح يجعل المرء كمن عبدا الله من قبل.' },
    ],
  }

  const sections = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,177,75,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🕋</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            {lang === 'so' ? 'Xajka' : lang === 'ar' ? 'الحج' : 'Hajj'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {lang === 'so' ? 'Tiirka shanaad ee Islaamka — Safarka diimeed ee Maka.' : lang === 'ar' ? 'الركن الخامس من أركان الإسلام - الرحلة الدينية إلى مكة.' : 'The fifth pillar of Islam — The pilgrimage to Mecca.'}
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