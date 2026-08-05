import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'so' | 'en' | 'ar'

export interface Translation {
  menuHome: string
  menuReligion: string
  menuTechnology: string
  menuCulture: string
  menuQuran: string
  menuDownload: string
  menuAbout: string
  menuContact: string
  menuFreeSites: string
  heroWelcome: string
  heroJoin: string
  heroSubtitle: string
  heroCta: string
  heroSecondaryCta: string
  sectionsTitle: string
  sectionsSubtitle: string
  religionTitle: string
  religionDesc: string
  techTitle: string
  techDesc: string
  cultureTitle: string
  cultureDesc: string
  learnMore: string
  statArticles: string
  statLanguages: string
  statUsers: string
  statTopics: string
  footerRights: string
  footerTerms: string
  footerPrivacy: string
  religion: {
    title: string
    subtitle: string
    tawhid: string
    tawhidDesc: string
    salah: string
    salahDesc: string
    fasting: string
    fastingDesc: string
    zakah: string
    zakahDesc: string
    hajj: string
    hajjDesc: string
  }
  culture: {
    title: string
    subtitle: string
    proverbs: string
    proverbsDesc: string
    wisdom: string
    wisdomDesc: string
    poetry: string
    poetryDesc: string
    songs: string
    songsDesc: string
  }
  about: {
    title: string
    subtitle: string
    value1: string
    value1Desc: string
    value2: string
    value2Desc: string
    value3: string
    value3Desc: string
    value4: string
    value4Desc: string
    missionTitle: string
    missionText: string
    visionTitle: string
    visionText: string
    valuesTitle: string
  }
  contact: {
    title: string
    subtitle: string
    success: string
    name: string
    email: string
    subject: string
    message: string
    sending: string
    send: string
    followUs: string
  }
  quran: {
    title: string
    subtitle: string
    selectSurah: string
    selectReciter: string
    loading: string
    pause: string
    play: string
  }
}

export const translations: Record<Language, Translation> = {
  so: {
    menuHome: 'Bogga Hore',
    menuReligion: 'Diinta',
    menuTechnology: 'Tecnolijiyada',
    menuCulture: 'Suugaanta',
    menuQuran: 'Quraanka',
    menuDownload: 'Download',
    menuAbout: 'Nagu Baar',
    menuContact: 'Nala soo Xiriir',
    menuFreeSites: '30 Site Bilaash',
    heroWelcome: 'Ku soo dhawoow Filanwaa',
    heroJoin: 'Soo biir bulshadeena',
    heroSubtitle: 'Waxaan u heellannahay inaan u soo bandhigno diinta, teknolijiyada, iyo suugaanta qaab casri ah.',
    heroCta: 'Bilow',
    heroSecondaryCta: 'Dhageyso Qur\'aan',
    sectionsTitle: 'Qaybaha Muhiimka ah',
    sectionsSubtitle: 'Ka faa\'iidayso waxyaabaha aan bixino oo dhan',
    religionTitle: 'Diinta',
    religionDesc: 'Baro diinta Islaamka si qoto dheer',
    techTitle: 'Tecnolijiyada',
    techDesc: 'Raadraac horumarka teknolijiyada iyo cilmiga',
    cultureTitle: 'Suugaanta',
    cultureDesc: 'Dhaqanka, suugaanta, iyo fanka Soomaalida',
    learnMore: 'Akhri wax dheeri',
    statArticles: 'Maqaallo',
    statLanguages: 'Luqado',
    statUsers: 'Isticmaale',
    statTopics: 'Mawduucyo',
    footerRights: 'Dhammaan Xuquuqda Way Dhowran Tahay',
    footerTerms: 'Shuruudaha',
    footerPrivacy: 'Siraha',
    religion: {
      title: 'Diinta Islaamka',
      subtitle: 'Baro shanta rukni ee Islaamka si qoto dheer, oo saddex luqadood ah.',
      tawhid: 'Towxiidka',
      tawhidDesc: 'Aasaaska iimaanka — kaligeenimo Ilaahay.',
      salah: 'Salaadda',
      salahDesc: 'Shanta salaadood ee maalinlaha ah iyo sida loo tukado.',
      fasting: 'Soonka',
      fastingDesc: 'Soonka bisha Ramadaan iyo xikmadiisa.',
      zakah: 'Zakada',
      zakahDesc: 'Sadaqada waajibka ah ee xoolaha.',
      hajj: 'Xajka',
      hajjDesc: 'Safarka rukniga ah ee Makka.',
    },
    culture: {
      title: 'Suugaanta Soomaaliyeed',
      subtitle: 'Xuska dhaqanka, maahmaahyada, iyo fanka Soomaalida.',
      proverbs: 'Maahmaahyo',
      proverbsDesc: 'Maahmaahyo Soomaaliyeed oo kala saaran xarfaha.',
      wisdom: 'Xikmado',
      wisdomDesc: 'Murti ka dhalatay khibrad nololeed.',
      poetry: 'Gabayga',
      poetryDesc: 'Gabayada iyo suugaanta Soomaalida.',
      songs: 'Heesaha Wadaniga',
      songsDesc: 'Ururin heeso wadaniga ah oo Soomaaliyeed.',
    },
    about: {
      title: 'Nagu Baar',
      subtitle: 'Waa maxay Filanwaa iyo sababta loo abuuray.',
      value1: 'Aqoon',
      value1Desc: 'Waxaan bixinaa aqoon tayo sare leh oo Soomaali ah.',
      value2: 'Bulsho',
      value2Desc: 'Waxaan u adeegnaa bulshada Soomaaliyeed adduunka oo dhan.',
      value3: 'Diinta',
      value3Desc: 'Waxaan taageernaa aqoonta Islaamka ee sax ah.',
      value4: 'Tignoolajiyad',
      value4Desc: 'Waxaan barnaa xirfadaha IT-ga ee mustaqbalka.',
      missionTitle: 'Himiladeena',
      missionText: 'Filanwaa waxay u heellan tahay inay noqoto isha ugu weyn ee aqoonta Soomaaliga ah — diinta, teknolijiyada, iyo suugaanta.',
      visionTitle: 'Aragtideena',
      visionText: 'Inaan noqonno mareegta koowaad ee Soomaalidu u tagto marka ay u baahdaan aqoon la isku halayn karo.',
      valuesTitle: 'Qiyamkeena',
    },
    contact: {
      title: 'Nala Soo Xiriir',
      subtitle: 'Waan ku faraxsanahay inaan kaa maqalno.',
      success: 'Fariintaadu waa la diray! Waan kula soo xiriiri doonaa dhawaan.',
      name: 'Magaca',
      email: 'Emailka',
      subject: 'Mawduuca',
      message: 'Fariinta',
      sending: 'Waa la dirayaa...',
      send: 'Dir',
      followUs: 'Nala Soco',
    },
    quran: {
      title: 'Quraanka Kariimka',
      subtitle: 'Dhageyso Qur\'aanka Kariimka ah, aqriyayaal kala duwan.',
      selectSurah: 'Dooro Suurad',
      selectReciter: 'Dooro Aqriyaha',
      loading: 'Waa la soo raraayaa...',
      pause: 'Jooji',
      play: 'Ciyaar',
    },
  },
  en: {
    menuHome: 'Home',
    menuReligion: 'Religion',
    menuTechnology: 'Technology',
    menuCulture: 'Culture',
    menuQuran: 'Quran',
    menuDownload: 'Download',
    menuAbout: 'About',
    menuContact: 'Contact',
    menuFreeSites: '30 Free Sites',
    heroWelcome: 'Welcome to Filanwaa',
    heroJoin: 'Join our community',
    heroSubtitle: 'We are dedicated to presenting religion, technology, and culture in a modern way.',
    heroCta: 'Get Started',
    heroSecondaryCta: 'Listen Quran',
    sectionsTitle: 'Main Sections',
    sectionsSubtitle: 'Explore all the resources we offer',
    religionTitle: 'Religion',
    religionDesc: 'Learn about Islam in depth',
    techTitle: 'Technology',
    techDesc: 'Follow technology and science advancements',
    cultureTitle: 'Culture',
    cultureDesc: 'Somali culture, literature, and arts',
    learnMore: 'Read More',
    statArticles: 'Articles',
    statLanguages: 'Languages',
    statUsers: 'Users',
    statTopics: 'Topics',
    footerRights: 'All Rights Reserved',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    religion: {
      title: 'Islamic Knowledge',
      subtitle: 'Learn the five pillars of Islam in depth, across three languages.',
      tawhid: 'Monotheism',
      tawhidDesc: 'The foundation of faith — the oneness of God.',
      salah: 'Prayer',
      salahDesc: 'The five daily prayers and how to perform them.',
      fasting: 'Fasting',
      fastingDesc: 'Fasting during Ramadan and its wisdom.',
      zakah: 'Zakat',
      zakahDesc: 'The obligatory charity on wealth.',
      hajj: 'Hajj',
      hajjDesc: 'The pilgrimage to Mecca.',
    },
    culture: {
      title: 'Somali Culture',
      subtitle: 'Celebrating Somali heritage, proverbs, and the arts.',
      proverbs: 'Proverbs',
      proverbsDesc: 'Somali proverbs organized alphabetically.',
      wisdom: 'Wisdom',
      wisdomDesc: 'Wisdom born from life experience.',
      poetry: 'Poetry',
      poetryDesc: 'Somali poetry and literature.',
      songs: 'National Songs',
      songsDesc: 'A collection of Somali national songs.',
    },
    about: {
      title: 'About Us',
      subtitle: 'What Filanwaa is and why it was created.',
      value1: 'Knowledge',
      value1Desc: 'We provide high-quality knowledge in the Somali language.',
      value2: 'Community',
      value2Desc: 'We serve the Somali community around the world.',
      value3: 'Faith',
      value3Desc: 'We support accurate knowledge of Islam.',
      value4: 'Technology',
      value4Desc: 'We teach the IT skills of the future.',
      missionTitle: 'Our Mission',
      missionText: 'Filanwaa is dedicated to becoming the leading source of Somali-language knowledge — religion, technology, and culture.',
      visionTitle: 'Our Vision',
      visionText: 'To become the first destination Somalis turn to when they need trustworthy knowledge.',
      valuesTitle: 'Our Values',
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We'd love to hear from you.",
      success: "Your message has been sent! We'll get back to you soon.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sending: 'Sending...',
      send: 'Send',
      followUs: 'Follow Us',
    },
    quran: {
      title: 'The Holy Quran',
      subtitle: 'Listen to the Holy Quran with various reciters.',
      selectSurah: 'Select Surah',
      selectReciter: 'Select Reciter',
      loading: 'Loading...',
      pause: 'Pause',
      play: 'Play',
    },
  },
  ar: {
    menuHome: 'الرئيسية',
    menuReligion: 'الدين',
    menuTechnology: 'التقنية',
    menuCulture: 'الثقافة',
    menuQuran: 'القرآن',
    menuDownload: 'تحميل',
    menuAbout: 'معلومات عنا',
    menuContact: 'اتصل بنا',
    menuFreeSites: '30 موقع مجاني',
    heroWelcome: 'مرحباً بكم في فيلانوا',
    heroJoin: 'انضم إلى مجتمعنا',
    heroSubtitle: 'نحن ملتزمون بتقديم الدين والتقنية والثقافة بطريقة عصرية.',
    heroCta: 'ابدأ الآن',
    heroSecondaryCta: 'استمع للقرآن',
    sectionsTitle: 'الأقسام الرئيسية',
    sectionsSubtitle: 'استكشف جميع الموارد التي نقدمها',
    religionTitle: 'الدين',
    religionDesc: 'تعلم الإسلام بعمق',
    techTitle: 'التقنية',
    techDesc: 'تابع تطورات التقنية والعلوم',
    cultureTitle: 'الثقافة',
    cultureDesc: 'الثقافة والأدب والفنون الصومالية',
    learnMore: 'اقرأ المزيد',
    statArticles: 'مقالات',
    statLanguages: 'لغات',
    statUsers: 'مستخدمين',
    statTopics: 'مواضيع',
    footerRights: 'جميع الحقوق محفوظة',
    footerTerms: 'الشروط',
    footerPrivacy: 'الخصوصية',
    religion: {
      title: 'المعرفة الإسلامية',
      subtitle: 'تعلم أركان الإسلام الخمسة بعمق، بثلاث لغات.',
      tawhid: 'التوحيد',
      tawhidDesc: 'أساس الإيمان - وحدانية الله.',
      salah: 'الصلاة',
      salahDesc: 'الصلوات الخمس اليومية وكيفية أدائها.',
      fasting: 'الصيام',
      fastingDesc: 'صيام رمضان وحكمته.',
      zakah: 'الزكاة',
      zakahDesc: 'الصدقة الواجبة على المال.',
      hajj: 'الحج',
      hajjDesc: 'رحلة الحج إلى مكة.',
    },
    culture: {
      title: 'الثقافة الصومالية',
      subtitle: 'احتفاء بالتراث الصومالي والأمثال والفنون.',
      proverbs: 'الأمثال',
      proverbsDesc: 'أمثال صومالية مرتبة أبجديًا.',
      wisdom: 'الحكم',
      wisdomDesc: 'حكمة وُلدت من تجربة الحياة.',
      poetry: 'الشعر',
      poetryDesc: 'الشعر والأدب الصومالي.',
      songs: 'الأغاني الوطنية',
      songsDesc: 'مجموعة من الأغاني الوطنية الصومالية.',
    },
    about: {
      title: 'من نحن',
      subtitle: 'ما هي فيلانوا ولماذا أُنشئت.',
      value1: 'المعرفة',
      value1Desc: 'نقدم معرفة عالية الجودة باللغة الصومالية.',
      value2: 'المجتمع',
      value2Desc: 'نخدم المجتمع الصومالي حول العالم.',
      value3: 'الإيمان',
      value3Desc: 'ندعم المعرفة الدقيقة بالإسلام.',
      value4: 'التقنية',
      value4Desc: 'نُعلّم مهارات تقنية المعلومات المستقبلية.',
      missionTitle: 'مهمتنا',
      missionText: 'تلتزم فيلانوا بأن تصبح المصدر الرائد للمعرفة باللغة الصومالية - الدين والتقنية والثقافة.',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نصبح الوجهة الأولى التي يلجأ إليها الصوماليون عندما يحتاجون إلى معرفة موثوقة.',
      valuesTitle: 'قيمنا',
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'يسعدنا التواصل معك.',
      success: 'تم إرسال رسالتك! سنتواصل معك قريبًا.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      sending: 'جارٍ الإرسال...',
      send: 'إرسال',
      followUs: 'تابعنا',
    },
    quran: {
      title: 'القرآن الكريم',
      subtitle: 'استمع إلى القرآن الكريم بأصوات قراء متنوعين.',
      selectSurah: 'اختر السورة',
      selectReciter: 'اختر القارئ',
      loading: 'جارٍ التحميل...',
      pause: 'إيقاف',
      play: 'تشغيل',
    },
  },
}

export const LANGUAGES: Record<Language, { name: string; dir: 'ltr' | 'rtl' }> = {
  so: { name: 'Soomaali', dir: 'ltr' },
  en: { name: 'English', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'ltr' },
}

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translation
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('filanwaa-lang')
    if (saved === 'so' || saved === 'en' || saved === 'ar') return saved
    return 'so'
  })

  const dir: 'ltr' | 'rtl' = 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    localStorage.setItem('filanwaa-lang', lang)
  }, [lang, dir])

  const setLang = (newLang: Language) => setLangState(newLang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}