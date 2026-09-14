import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
import { LessonPage } from '../components/LessonPage'

export function SalaahPage() {
  const { lang } = useLanguage()

  const content: Record<string, { title: string; body: string }[]> = {
    so: [
      { title: '1. Waa Maxay Salaadda?', body: 'Salaadu waa tiirka labaad ee Islaamka, waana cibaadada jidhka ah ee ugu weyn. Waa isku-xirka toosan ee u dhexeeya addoonka iyo Alle, oo lagu sameeyo shan jeer maalintiiba. Salaadu waxay ka kooban tahay hadal (Quraan, tasbiix, ducooyin) iyo dhaqdhaqaaq (istaag, rukuuc, sujuud) oo dhammaantiis loola jeedo cibaadada Alle Keliya.' },
      { title: '2. Muhiimadda Salaadda', body: 'Salaadu waa camalka ugu horeysa ee la weydiin doono Qiyaamada. Nabiga (SCW) wuxuu yiri: "Waxa ugu horreeya ee laga xisaabtami doono addoonka Maalinta Qiyaamaha waa salaadda — haddii ay hagaagto, wuu liibaanay; haddii ay xumaato, wuu khasaaray." Sidoo kale, Salaadu waa qayb ka mid ah shanta Rukun ee Islaamka, kaas oo aan Islaamku dhisnayn la\'aantiis.' },
      { title: '3. Shanta Salaadood Maalinlaha ah', body: 'Muslinku wuxuu tukadaa shan salaadood oo waajib ah maalin kasta: (1) Salaadda Subax (2 rakco), (2) Salaadda Duhur (4 rakco), (3) Salaadda Casar (4 rakco), (4) Salaadda Maghrib (3 rakco), (5) Salaadda Cisha (4 rakco). Salaad kastaa waxay leedahay wakhti gaar ah oo la tukado, kuwaas oo lagu go\'aamiyo dhaca qorraxda.' },
      { title: '4. Shuruudaha Salaadda', body: 'Ka hor inta aan salaad la tukan, waxaa lagama maarmaan ah: (1) Islaamnimo, (2) Miyir qabnimo, (3) Gaadhay da\'da tamiiznimo, (4) Nadaafad (wadaxaaqid iyo cadaadis haddii loo baahdo), (5) Dabooshan cawrada, (6) Ka wajahnaanshaha Qiblada (Kacbada), (7) Wakhtiga saxda ah.' },
      { title: '5. Sida Loo Tukado (Tartiibka Guud)', body: 'Salaadu waxay bilaabataa Niyad iyo Takbiirat-ul-Ixraam ("Allahu Akbar"), ka dibna waxaa la akhriyaa Suuratal-Faatixa iyo suurad kale (rakco 1aad iyo 2aad). Waxaa xiga Rukuuc (foororid), Sujuud (laba jeer, hal dhexdhexaad ah oo fadhiid ah), ka dibna Tashahhud dhamaadka. Salaadu waxay ku dhammaataa Salaam (jeedin midig iyo bidix).' },
      { title: '6. Salaadda Jamaacada', body: 'Salaadda lagu tukado jamaaco (masjidka) ayaa 27 jeer u fiican tahay tan kali ah, sida uu Nabigu (SCW) sheegay. Ragga waxaa lagu dhiirrigeliyaa inay masjidka ku tukadaan, gaar ahaan Duhur, Casar, Maghrib, iyo Cisha.' },
      { title: '7. Salaadda Jimcaha', body: 'Maalinta Jimcaha, raggu waxay tukadaan Salaadda Duhur oo loo beddelay Salaadda Jimca, taas oo lagu daro khudbo laba qaybood ah oo Imaamku ka hor jeediyo Salaadda. Waa maalin gaar ah oo barako leh, waxaana lagu dhaqaaqaa suurada Al-Kahf la akhriyo.' },
      { title: '8. Wax Ka Yaraynta Salaadda (Qasr) iyo Isku-darka', body: 'Marka Muslin socdaal ku jiro (masaafo qeexan), waxaa loo oggol yahay inuu Qasr (yareeyo) salaadaha afar-rakcada ah oo laga dhigo laba, sidoo kalena wuxuu isku dari karaa Duhur-Casar iyo Maghrib-Cisha si uu ugu fududaysto socdaalka.' },
      { title: '9. Dhibaatooyinka Ka Dhaafida Salaadda', body: 'Ka dhaafida salaadda si ula kac ah waa dembi weyn, waxaana Nabigu (SCW) ku tilmaamay inay tahay xadka u dhexeeya Muslinnimada iyo Gaalnimada. Waxaa lagu dhiirrigeliyaa in la ilaaliyo salaadaha shanta ah wakhti kasta, xitaa xaalado adag sida cudur ama socdaal.' },
      { title: '10. Gunaanad', body: 'Salaadu waa xarigga u dhexeeya addoonka iyo Alle, waxayna siisaa qalbiga nabad iyo xasilooni maalin kasta. Waa cibaadada koowaad ee lagu joogsan doono Aakhiro, waxaana Muslin kastaa waajib ku ah inuu si joogto ah u ilaaliyo shanta salaadood ee maalinlaha ah.' },
    ],
    en: [
      { title: '1. What Is Salah?', body: 'Salah is the second pillar of Islam and the greatest physical act of worship. It is the direct connection between the servant and Allah, performed five times a day. Salah combines speech (Quran, remembrance, supplications) and movement (standing, bowing, prostration) all directed solely to the worship of Allah.' },
      { title: '2. The Importance of Salah', body: 'Salah is the first deed a person will be questioned about on the Day of Judgment. The Prophet (peace be upon him) said: "The first matter that the slave will be brought to account for on the Day of Judgment is Salah — if it is sound, the rest of his deeds will be sound." Salah is one of the five Pillars of Islam, without which Islam cannot stand.' },
      { title: '3. The Five Daily Prayers', body: 'A Muslim prays five obligatory prayers each day: (1) Fajr (Dawn, 2 rakats), (2) Dhuhr (Noon, 4 rakats), (3) Asr (Afternoon, 4 rakats), (4) Maghrib (Sunset, 3 rakats), (5) Isha (Night, 4 rakats). Each prayer has a specific time window, determined by the position of the sun.' },
      { title: '4. Conditions of Salah', body: 'Before performing prayer, certain conditions must be met: (1) Being Muslim, (2) Being of sound mind, (3) Reaching the age of discernment, (4) Purity (ablution/wudu, and full bath if needed), (5) Covering the awrah (private parts), (6) Facing the Qiblah (the Kaaba), (7) Praying within the correct time.' },
      { title: '5. How Prayer Is Performed (General Steps)', body: 'Prayer begins with intention and Takbirat al-Ihram ("Allahu Akbar"), followed by reciting Surah Al-Fatiha and another surah (in the 1st and 2nd rakat). This is followed by Ruku (bowing), Sujud (prostration, twice, with a brief sitting between), and finally Tashahhud. Prayer ends with Salam (turning the head right and left).' },
      { title: '6. Praying in Congregation', body: 'Praying in congregation (at the mosque) is 27 times more rewarding than praying alone, as stated by the Prophet (peace be upon him). Men are especially encouraged to pray in the mosque, particularly for Dhuhr, Asr, Maghrib, and Isha.' },
      { title: '7. Friday Prayer (Jumu\'ah)', body: 'On Fridays, men pray Jumu\'ah instead of Dhuhr, which includes two sermons (khutbahs) delivered by the Imam before the prayer. It is a special, blessed day, and it is recommended to recite Surah Al-Kahf.' },
      { title: '8. Shortening and Combining Prayers', body: 'When a Muslim is traveling (a defined distance), it is permissible to shorten (Qasr) the four-rakat prayers to two, and to combine Dhuhr with Asr, and Maghrib with Isha, to ease the journey.' },
      { title: '9. The Dangers of Neglecting Salah', body: 'Deliberately abandoning prayer is a major sin, and the Prophet (peace be upon him) described it as the line between a believer and a disbeliever. Muslims are strongly encouraged to maintain the five daily prayers at all times, even in difficult circumstances such as illness or travel.' },
      { title: '10. Conclusion', body: 'Salah is the bond between the servant and Allah, bringing peace and stability to the heart every day. It is the first act of worship to be judged in the Hereafter, and every Muslim is obligated to consistently maintain the five daily prayers.' },
    ],
    ar: [
      { title: '1. ما هي الصلاة؟', body: 'الصلاة هي الركن الثاني من أركان الإسلام وأعظم عبادة بدنية. هي الصلة المباشرة بين العبد وربه، تؤدى خمس مرات يوميًا. تجمع الصلاة بين القول (القرآن، الذكر، الدعاء) والحركة (القيام، الركوع، السجود) كلها موجهة لعبادة الله وحده.' },
      { title: '2. أهمية الصلاة', body: 'الصلاة أول ما يُحاسب عليه العبد يوم القيامة. قال النبي صلى الله عليه وسلم: "أول ما يحاسب به العبد يوم القيامة الصلاة، فإن صلحت صلح سائر عمله." الصلاة أحد أركان الإسلام الخمسة التي لا يقوم الإسلام إلا بها.' },
      { title: '3. الصلوات الخمس اليومية', body: 'يصلي المسلم خمس صلوات مفروضة يوميًا: (1) الفجر (ركعتان)، (2) الظهر (4 ركعات)، (3) العصر (4 ركعات)، (4) المغرب (3 ركعات)، (5) العشاء (4 ركعات). لكل صلاة وقت محدد يُحدَّد بموقع الشمس.' },
      { title: '4. شروط الصلاة', body: 'قبل أداء الصلاة، يجب توفر شروط معينة: (1) الإسلام، (2) العقل، (3) البلوغ أو التمييز، (4) الطهارة (الوضوء والغسل عند الحاجة)، (5) ستر العورة، (6) استقبال القبلة (الكعبة)، (7) دخول الوقت.' },
      { title: '5. كيفية أداء الصلاة (الخطوات العامة)', body: 'تبدأ الصلاة بالنية وتكبيرة الإحرام ("الله أكبر")، تليها قراءة الفاتحة وسورة أخرى (في الركعتين الأولى والثانية). يليها الركوع والسجود (مرتين، مع جلسة قصيرة بينهما)، ثم التشهد في النهاية. تنتهي الصلاة بالتسليم (يمينًا ويسارًا).' },
      { title: '6. صلاة الجماعة', body: 'صلاة الجماعة في المسجد أفضل من صلاة الفرد بسبع وعشرين درجة، كما ورد عن النبي صلى الله عليه وسلم. يُشجَّع الرجال بشكل خاص على الصلاة في المسجد، وخاصة الظهر والعصر والمغرب والعشاء.' },
      { title: '7. صلاة الجمعة', body: 'يوم الجمعة، يصلي الرجال الجمعة بدلاً من الظهر، وتشمل خطبتين يلقيهما الإمام قبل الصلاة. وهو يوم مبارك خاص، ويُستحب فيه قراءة سورة الكهف.' },
      { title: '8. قصر الصلاة والجمع بينها', body: 'عندما يكون المسلم مسافرًا (مسافة محددة)، يجوز له قصر الصلاة الرباعية إلى ركعتين، والجمع بين الظهر والعصر، وبين المغرب والعشاء تيسيرًا للسفر.' },
      { title: '9. مخاطر ترك الصلاة', body: 'ترك الصلاة عمدًا ذنب عظيم، وقد وصفه النبي صلى الله عليه وسلم بأنه الفاصل بين الإيمان والكفر. يُشجَّع المسلمون بشدة على المحافظة على الصلوات الخمس في جميع الأحوال، حتى في ظروف المرض أو السفر.' },
      { title: '10. الخاتمة', body: 'الصلاة هي الرابط بين العبد وربه، تجلب السكينة والطمأنينة للقلب كل يوم. وهي أول عمل يُحاسب عليه في الآخرة، وكل مسلم مُلزَم بالمحافظة المستمرة على الصلوات الخمس اليومية.' },
    ],
  }

  const titles = {
    so: { title: 'Salaadda', sub: 'Tiirka labaad ee Islaamka — cibaadada jidhka ee lagu tukado shan jeer maalintiiba.' },
    en: { title: 'Salah', sub: 'The second pillar of Islam — the physical worship performed five times daily.' },
    ar: { title: 'الصلاة', sub: 'الركن الثاني من أركان الإسلام - العبادة البدنية التي تؤدى خمس مرات يوميًا.' },
  }[lang as 'so' | 'en' | 'ar']

  return (
    <>
      <LessonPage
        icon="🤲"
        title={titles.title}
        subtitle={titles.sub}
        sections={content[lang]}
        accentColor="#C89B3C"
      />
      <AdBanner />
      <SubscribeSection />
    </>
  )
}