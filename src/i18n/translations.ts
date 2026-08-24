export type Language = 'so' | 'en' | 'ar'

export interface LanguageConfig {
  code: Language
  name: string
  nativeName: string
  dir: 'ltr' | 'rtl'
  flag: string
}

export const LANGUAGES: Record<Language, LanguageConfig> = {
  so: { code: 'so', name: 'Somali', nativeName: 'Soomaali', dir: 'ltr', flag: '🇸🇴' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇸🇦' },
}

export interface Translation {
  nav: {
    home: string
    religion: string
    technology: string
    culture: string
    quran: string
    about: string
    contact: string
    terms: string
    privacy: string
  }
  home: {
    heroTitle: string
    heroSubtitle: string
    heroWelcome: string
    heroJoin: string
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
    statsTitle: string
    statArticles: string
    statLanguages: string
    statUsers: string
    statTopics: string
  }
  religion: {
    title: string
    subtitle: string
    tawhid: string
    tawhidDesc: string
    salah: string
    salahDesc: string
    fasting: string
    fastingDesc: string
    hajj: string
    hajjDesc: string
  }
  tech: {
    title: string
    subtitle: string
    python: string
    pythonDesc: string
    html: string
    htmlDesc: string
    css: string
    cssDesc: string
    php: string
    phpDesc: string
    r: string
    rDesc: string
    java: string
    javaDesc: string
    cpp: string
    cppDesc: string
    sql: string
    sqlDesc: string
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
  quran: {
    title: string
    subtitle: string
    selectSurah: string
    selectReciter: string
    play: string
    pause: string
    loading: string
  }
  about: {
    title: string
    subtitle: string
    missionTitle: string
    missionText: string
    visionTitle: string
    visionText: string
    valuesTitle: string
    value1: string
    value1Desc: string
    value2: string
    value2Desc: string
    value3: string
    value3Desc: string
    value4: string
    value4Desc: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    success: string
    followUs: string
  }
  terms: {
    title: string
    subtitle: string
  }
  privacy: {
    title: string
    subtitle: string
  }
  subscribe: {
    title: string
    subtitle: string
    button: string
    youtubeText: string
  }
  footer: {
    about: string
    aboutDesc: string
    quickLinks: string
    connect: string
    rights: string
    madeWith: string
  }
  common: {
    readMore: string
    backToTop: string
    loading: string
  }
}

export const translations: Record<Language, Translation> = {
  so: {
    nav: {
      home: 'Bogga Hore',
      religion: 'Diinta',
      technology: 'Tecnolijiyada',
      culture: 'Suugaanta',
      quran: 'Quraanka',
      about: 'Nagu Baar',
      contact: 'Nala soo Xiriir',
      terms: 'Shuruudaha',
      privacy: 'Siraha',
    },
    home: {
      heroTitle: 'Filanwaa — Hal Mashruuc, Sedex Adduunyo',
      heroSubtitle: 'Diinta, Tecnolijiyada iyo Suugaanta. Waxbarasho qoto dheer oo luqadaha Somali, English iyo Carabi.',
      heroWelcome: 'Filanwaa ku soo dhawoow',
      heroJoin: 'Ku soo biir dunida casriga ah',
      heroCta: 'Bilow Akhriska',
      heroSecondaryCta: 'Dageys Quraanka',
      sectionsTitle: 'Sedexda Cinwaan ee Waaweyn',
      sectionsSubtitle: 'Mashruuca Filanwaa waxa uu isku darayaa sedexda xidhme ee nolosha: Diinta Islaamka, Tecnolijiyada casriga ah, iyo Suugaanta Soomaaliyeed.',
      religionTitle: 'Diinta',
      religionDesc: 'Towxiidka, Salaada, Soonka iyo Xajka — si faahfaahsan oo qoto dheer.',
      techTitle: 'Tecnolijiyada',
      techDesc: 'Luqadaha barnaamijyada sida Python, HTML, CSS, PHP, R, Java, C++ iyo SQL.',
      cultureTitle: 'Suugaanta',
      cultureDesc: 'Maahmaahyada, Xikamadaha, Gabayga iyo Heesaha wadaniga Soomaaliyeed.',
      learnMore: 'Wax Badan Akhri',
      statsTitle: 'Tirada Mashruuca',
      statArticles: 'Maqaallo',
      statLanguages: 'Luqado',
      statUsers: 'Magdhacayaal',
      statTopics: 'Mawduucyo',
    },
    religion: {
      title: 'Diinta Islaamka',
      subtitle: 'Si faahfaahsan u baro tiirarka Islaamka: Towxiidka, Salaada, Soonka iyo Xajka.',
      tawhid: 'Towxiidka',
      tawhidDesc: 'Towxiidka waa xaqiijinta iyo kalidiisa Alle (SWT). Waa tiirka ugu wayn ee Islaamka. Waxa uu kooban yahay sedex nooc: Towxiidka Rubuubiyya, Uluhiyya iyo Asmaa iyo Sifaat.',
      salah: 'Salaada',
      salahDesc: 'Salaada waa tiirka labaad ee Islaamka. Waa faral in lagu tukado shan jeer maalintii: Subax, Duhur, Casar, Magrib iyo Cishaa. Salaada waxa ay isku xirtaa qofka iyo Alle (SWT).',
      fasting: 'Soonka',
      fastingDesc: 'Soonka waa ka hor istaagga cunista, cabitaanka iyo shahwaada laga bilaabo waqtiga fidada ilaa waqtiga magribka. Soonka Ramadaan waa faral, laakiin soonka mustahabka ah waa sunnad.',
      hajj: 'Xajka',
      hajjDesc: 'Xajka waa tiirka shanaad ee Islaamka. Waa safar diimeed oo loo tago Maka oo lagu sameeyo ciidanka Xajka. Waa faral korkiisa mid kasta oo Muslim ah oo awooda.',
    },
    tech: {
      title: 'Tecnolijiyada iyo Barnaamijyada',
      subtitle: 'Baro luqadaha barnaamijyada ee ugu muhiimsan caalamka.',
      python: 'Python',
      pythonDesc: 'Python waa luqad barnaamij oo fudud oo lagu sameeyo wax kasta: AI, data science, web development, iyo automation. Waa luqad ugu fiican bilowga.',
      html: 'HTML',
      htmlDesc: 'HTML (HyperText Markup Language) waa luqada lagu dhisaa bogagga internetka. Waa lafdhabarka bog kasta oo web ah.',
      css: 'CSS',
      cssDesc: 'CSS (Cascading Style Sheets) waa luqada lagu qurxiyo bogagga. Waxa ay xakameeyso midabada, font-yada, iyo dhamaan muuqaalka bogga.',
      php: 'PHP',
      phpDesc: 'PHP waa luqad server-ka ah oo lagu dhiso website-yada firfircoon. WordPress, Facebook hore, iyo website-yada badan waxay isticmaalaan PHP.',
      r: 'R',
      rDesc: 'R waa luqad lagu sameeyo xisaabta iyo daraasaadka data. Waa aalad muhiim ah data science iyo statistics.',
      java: 'Java',
      javaDesc: 'Java waa luqad awood badan oo lagu sameeyo mobile apps (Android), web servers, iyo enterprise systems. Waa "write once, run anywhere".',
      cpp: 'C++',
      cppDesc: 'C++ waa luqad degdeg oo awood badan oo lagu sameeyo games, operating systems, iyo software-ka sakhraanta badan.',
      sql: 'SQL',
      sqlDesc: 'SQL (Structured Query Language) waa luqada lagu maareeyo databases. Waxa ay kuu ogolaataa inaad akhrido, darto, iyo tirtirto xog.',
    },
    culture: {
      title: 'Suugaanta iyo Dhaqanka',
      subtitle: 'Dhaqanka Soomaaliyeed ee ricdhiga badan: maahmaahyada, xikamadaha, gabayga iyo heesaha.',
      proverbs: 'Maahmaahyada',
      proverbsDesc: 'Maahmaahyada Soomaaliyeed waa hadal kooban oo macne badan leh. Waxay ka tarjumeen xigmadda iyo khibrada soomaalida ee qarniyo badan ah. Tusaale: "Geeljire geel waa raartaa, geelna waa raartaa."',
      wisdom: 'Xikamadaha',
      wisdomDesc: 'Xikamadaha waa erayada nolosha ka tarjumaya. Waxay ku dhalan yihiin khibrada iyo waayo-aragnimada. Xikmaddu waa cilmiga la fahmay oo la dhaqmeeyay.',
      poetry: 'Gabayga',
      poetryDesc: 'Gabayga waa nooca ugu sareeya ee suugaanta Soomaaliyeed. Waxa uu leeyahay miisaan, qof iyo maanao. Gabayga waxaa loo tiriyaa si uu u gaadho qof kasta oo maqla.',
      songs: 'Heesaha Wadaniga',
      songsDesc: 'Heesaha wadaniga Soomaaliyeed waxay ka tarjumeen dhaqanka, jacaylka, iyo taariikhda. Heesaha casriga ah iyo kuwa hore waa qayb muhiim ah oo ka mid ah dhaqanka.',
    },
    quran: {
      title: 'Quraanka Kariimka',
      subtitle: 'Dageys Quraanka idaadda qurux badan oo leh qaar ka mid ah khuraafaadka ugu fiican.',
      selectSurah: 'Dooro Surah',
      selectReciter: 'Dooro Qaari',
      play: 'Dhageyso cod macaan',
      pause: 'Jooji',
      loading: 'Socda...',
    },
    about: {
      title: 'Nagu Baar',
      subtitle: 'Filanwaa waa mashruuc caalami ah oo isku daraya Diinta, Tecnolijiyada iyo Suugaanta.',
      missionTitle: 'Hadafkeena',
      missionText: 'Hadafkeena waa inaan siino dadka Soomaaliyeed iyo dadka caalamka baaritaan diimeed, teknolaji iyo suugaan oo qoto dheer, oo lagu helo sedex luqadood: Somali, English iyo Carabi.',
      visionTitle: 'Ruqyadeena',
      visionText: 'Waxaan rajeyneynaa in Filanwaa noqdo website-ka ugu dhammaystiran ee luqadaha Soomaaliga ah, oo dhalinyarada ka caawiyo inay baran diintooda, teknolijiyada iyo dhaqankooda.',
      valuesTitle: 'Qiimahayaga',
      value1: 'Waxbarasho Qoto Dheer',
      value1Desc: 'Waxaan bixinaa maqaallo qoto dheer oo si dhab ah u sharxaya mowduucyada.',
      value2: 'Luqado Badan',
      value2Desc: 'Waxaan helinaa sedex luqadood si dad badan u isticmaali karaan.',
      value3: 'Dhaqan iyo Diin',
      value3Desc: 'Waxaan taageernaa dhaqanka iyo diinta Islaamka.',
      value4: 'Tecnolijiyada',
      value4Desc: 'Waxaan dhalinyarada barinaa teknolijiyada casriga ah.',
    },
    contact: {
      title: 'Nala soo Xiriir',
      subtitle: 'Haddii aad su\'aal qabto ama aad rabto inaad nala wadaagto fikrad, nala soo xiriir.',
      name: 'Magaca',
      email: 'Email',
      subject: 'Mowduuca',
      message: 'Fariinta',
      send: 'Dir',
      sending: 'Diraya...',
      success: 'Fariintaada waa la diray! Mahadsanid.',
      followUs: 'Nala soo xiriir',
    },
    terms: {
      title: 'Shuruudaha iyo Tiirarka',
      subtitle: 'Shuruudaha isticmaalka website-ka Filanwaa.',
    },
    privacy: {
      title: 'Siyaasada Siraha',
      subtitle: 'Sida aan u ilaashano xogtada siraha ah.',
    },
    subscribe: {
      title: 'Ku Biir YouTube-ka Filanwaa',
      subtitle: 'Subscribe dheh si aad u helto muuqaalo cusub oo diineed, teknolaji iyo suugaan ah.',
      button: 'Subscribe @filanwaa',
      youtubeText: 'YouTube.com/@filanwaa',
    },
    footer: {
      about: 'Filanwaa',
      aboutDesc: 'Mashruuc isku daraya Diinta, Tecnolijiyada iyo Suugaanta luqadaha Somali, English iyo Carabi.',
      quickLinks: 'Liinks Degdeg ah',
      connect: 'Nala Xidhiidh',
      rights: 'Xuquuqda oo dhammaysatay 2024 Filanwaa.',
      madeWith: 'Waxaa lagu sameeyay jacayl',
    },
    common: {
      readMore: 'Wax Badan Akhri',
      backToTop: 'Laabo Sare',
      loading: 'Socda...',
    },
  },
  en: {
    nav: {
      home: 'Home',
      religion: 'Religion',
      technology: 'Technology',
      culture: 'Culture',
      quran: 'Quran',
      about: 'About Us',
      contact: 'Contact Us',
      terms: 'Terms',
      privacy: 'Privacy',
    },
    home: {
      heroTitle: 'Filanwaa — One Project, Three Worlds',
      heroSubtitle: 'Religion, Technology, and Culture. Deep education in Somali, English, and Arabic.',
      heroWelcome: 'Welcome to Filanwaa',
      heroJoin: 'Join the modern world',
      heroCta: 'Start Reading',
      heroSecondaryCta: 'Listen to Quran',
      sectionsTitle: 'Three Main Pillars',
      sectionsSubtitle: 'The Filanwaa project combines three essential aspects of life: Islamic Religion, modern Technology, and Somali Culture.',
      religionTitle: 'Religion',
      religionDesc: 'Tawhid, Salah, Fasting, and Hajj — explained in depth.',
      techTitle: 'Technology',
      techDesc: 'Programming languages like Python, HTML, CSS, PHP, R, Java, C++, and SQL.',
      cultureTitle: 'Culture',
      cultureDesc: 'Proverbs, Wisdom, Poetry, and National Songs of Somali culture.',
      learnMore: 'Learn More',
      statsTitle: 'Project Statistics',
      statArticles: 'Articles',
      statLanguages: 'Languages',
      statUsers: 'Users',
      statTopics: 'Topics',
    },
    religion: {
      title: 'Islamic Religion',
      subtitle: 'Learn the pillars of Islam in depth: Tawhid, Salah, Fasting, and Hajj.',
      tawhid: 'Tawhid',
      tawhidDesc: 'Tawhid is the affirmation and oneness of Allah (SWT). It is the greatest pillar of Islam. It consists of three types: Tawhid of Lordship, Worship, and Names & Attributes.',
      salah: 'Salah',
      salahDesc: 'Salah is the second pillar of Islam. It is obligatory to pray five times a day: Fajr, Dhuhr, Asr, Maghrib, and Isha. Salah connects the person with Allah (SWT).',
      fasting: 'Fasting',
      fastingDesc: 'Fasting is abstaining from eating, drinking, and desires from dawn to sunset. Ramadan fasting is obligatory, while voluntary fasting is recommended.',
      hajj: 'Hajj',
      hajjDesc: 'Hajj is the fifth pillar of Islam. It is a religious journey to Mecca to perform the Hajj rituals. It is obligatory for every able-bodied Muslim.',
    },
    tech: {
      title: 'Technology and Programming',
      subtitle: 'Learn the most important programming languages in the world.',
      python: 'Python',
      pythonDesc: 'Python is a simple programming language used for everything: AI, data science, web development, and automation. It is the best language for beginners.',
      html: 'HTML',
      htmlDesc: 'HTML (HyperText Markup Language) is the language used to build websites. It is the backbone of every web page.',
      css: 'CSS',
      cssDesc: 'CSS (Cascading Style Sheets) is the language used to style websites. It controls colors, fonts, and the overall appearance of a page.',
      php: 'PHP',
      phpDesc: 'PHP is a server-side language used to build dynamic websites. WordPress, early Facebook, and many websites use PHP.',
      r: 'R',
      rDesc: 'R is a language used for mathematics and data analysis. It is an important tool for data science and statistics.',
      java: 'Java',
      javaDesc: 'Java is a powerful language used for mobile apps (Android), web servers, and enterprise systems. It is "write once, run anywhere".',
      cpp: 'C++',
      cppDesc: 'C++ is a fast and powerful language used for games, operating systems, and high-performance software.',
      sql: 'SQL',
      sqlDesc: 'SQL (Structured Query Language) is the language used to manage databases. It allows you to read, insert, and delete data.',
    },
    culture: {
      title: 'Culture and Literature',
      subtitle: 'The rich Somali culture: proverbs, wisdom, poetry, and national songs.',
      proverbs: 'Proverbs',
      proverbsDesc: 'Somali proverbs are short sayings with deep meaning. They reflect the wisdom and experience of Somalis over centuries. Example: "A camel herder knows camels, and knows them well."',
      wisdom: 'Wisdom',
      wisdomDesc: 'Wisdom is words that translate life. They are born from experience and knowledge. Wisdom is understood knowledge that is practiced.',
      poetry: 'Poetry',
      poetryDesc: 'Poetry is the highest form of Somali literature. It has meter, rhyme, and meaning. Poetry is recited to reach every listener.',
      songs: 'National Songs',
      songsDesc: 'Somali national songs reflect culture, love, and history. Modern and traditional songs are an important part of the culture.',
    },
    quran: {
      title: 'The Holy Quran',
      subtitle: 'Listen to the Quran with beautiful recitation from the best reciters.',
      selectSurah: 'Select Surah',
      selectReciter: 'Select Reciter',
      play: 'Play',
      pause: 'Pause',
      loading: 'Loading...',
    },
    about: {
      title: 'About Us',
      subtitle: 'Filanwaa is a global project combining Religion, Technology, and Culture.',
      missionTitle: 'Our Mission',
      missionText: 'Our mission is to provide Somali people and the world with deep education in religion, technology, and culture, available in three languages: Somali, English, and Arabic.',
      visionTitle: 'Our Vision',
      visionText: 'We hope that Filanwaa becomes the most comprehensive Somali-language website, helping youth learn their religion, technology, and culture.',
      valuesTitle: 'Our Values',
      value1: 'Deep Education',
      value1Desc: 'We provide in-depth articles that thoroughly explain topics.',
      value2: 'Multiple Languages',
      value2Desc: 'We offer three languages so more people can use our content.',
      value3: 'Culture and Religion',
      value3Desc: 'We support Somali culture and the Islamic religion.',
      value4: 'Technology',
      value4Desc: 'We teach youth modern technology.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'If you have a question or want to share an idea, get in touch with us.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Your message has been sent! Thank you.',
      followUs: 'Connect with us',
    },
    terms: {
      title: 'Terms and Conditions',
      subtitle: 'Terms of use for the Filanwaa website.',
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How we protect your private information.',
    },
    subscribe: {
      title: 'Join Filanwaa YouTube',
      subtitle: 'Subscribe to get new videos on religion, technology, and culture.',
      button: 'Subscribe @filanwaa',
      youtubeText: 'YouTube.com/@filanwaa',
    },
    footer: {
      about: 'Filanwaa',
      aboutDesc: 'A project combining Religion, Technology, and Culture in Somali, English, and Arabic.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: 'All rights reserved 2024 Filanwaa.',
      madeWith: 'Made with love',
    },
    common: {
      readMore: 'Read More',
      backToTop: 'Back to Top',
      loading: 'Loading...',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      religion: 'الدين',
      technology: 'التكنولوجيا',
      culture: 'الثقافة',
      quran: 'القرآن',
      about: 'من نحن',
      contact: 'اتصل بنا',
      terms: 'الشروط',
      privacy: 'الخصوصية',
    },
    home: {
      heroTitle: 'فلنواء — مشروع واحد، ثلاثة عوالم',
      heroSubtitle: 'الدين والتكنولوجيا والثقافة. تعليم عميق باللغات الصومالية والإنجليزية والعربية.',
      heroWelcome: 'مرحباً بك في فلنواء',
      heroJoin: 'انضم إلى العالم الحديث',
      heroCta: 'ابدأ القراءة',
      heroSecondaryCta: 'استمع للقرآن',
      sectionsTitle: 'الأركان الثلاثة الرئيسية',
      sectionsSubtitle: 'يجمع مشروع فلنواء بين ثلاثة جوانب أساسية في الحياة: الدين الإسلامي والتكنولوجيا الحديثة والثقافة الصومالية.',
      religionTitle: 'الدين',
      religionDesc: 'التوحيد والصلاة والصيام والحج — بشرح عميق ومفصل.',
      techTitle: 'التكنولوجيا',
      techDesc: 'لغات البرمجة مثل بايثون و HTML و CSS و PHP و R و Java و C++ و SQL.',
      cultureTitle: 'الثقافة',
      cultureDesc: 'الأمثال والحكم والشعر والأغاني الوطنية الصومالية.',
      learnMore: 'اقرأ المزيد',
      statsTitle: 'إحصائيات المشروع',
      statArticles: 'مقالات',
      statLanguages: 'لغات',
      statUsers: 'مستخدمون',
      statTopics: 'مواضيع',
    },
    religion: {
      title: 'الدين الإسلامي',
      subtitle: 'تعلم أركان الإسلام بعمق: التوحيد والصلاة والصيام والحج.',
      tawhid: 'التوحيد',
      tawhidDesc: 'التوحيد هو إثبات وحدانية الله سبحانه وتعالى. وهو الركن الأعظم في الإسلام. ويتكون من ثلاثة أنواع: توحيد الربوبية والألوهية والأسماء والصفات.',
      salah: 'الصلاة',
      salahDesc: 'الصلاة هي الركن الثاني من أركان الإسلام. يجب الصلاة خمس مرات في اليوم: الفجر والظهر والعصر والمغرب والعشاء. الصلاة تربط الإنسان بالله سبحانه وتعالى.',
      fasting: 'الصيام',
      fastingDesc: 'الصيام هو الامتناع عن الأكل والشرب والشهوات من الفجر إلى المغرب. صيام رمضان فرض، بينما الصيام المستحب سنة.',
      hajj: 'الحج',
      hajjDesc: 'الحج هو الركن الخامس من أركان الإسلام. وهو رحلة دينية إلى مكة لأداء مناسك الحج. وهو فرض على كل مسلم قادر.',
    },
    tech: {
      title: 'التكنولوجيا والبرمجة',
      subtitle: 'تعلم أهم لغات البرمجة في العالم.',
      python: 'بايثون',
      pythonDesc: 'بايثون لغة برمجة بسيطة تستخدم لكل شيء: الذكاء الاصطناعي وعلوم البيانات وتطوير الويب والأتمتة. هي أفضل لغة للمبتدئين.',
      html: 'HTML',
      htmlDesc: 'HTML (لغة ترميز النص التشعبي) هي اللغة المستخدمة لبناء المواقع. وهي العمود الفقري لكل صفحة ويب.',
      css: 'CSS',
      cssDesc: 'CSS (أوراق الأنماط المتتالية) هي اللغة المستخدمة لتصميم المواقع. تتحكم في الألوان والخطوط والمظهر العام للصفحة.',
      php: 'PHP',
      phpDesc: 'PHP لغة من جهة الخادم تستخدم لبناء المواقع الديناميكية. ووردبريس وفيسبوك المبكر والعديد من المواقع تستخدم PHP.',
      r: 'R',
      rDesc: 'R لغة تستخدم للرياضيات وتحليل البيانات. وهي أداة مهمة لعلوم البيانات والإحصاء.',
      java: 'Java',
      javaDesc: 'Java لغة قوية تستخدم لتطبيقات الهاتف (أندرويد) وخوادم الويب وأنظمة المؤسسات. "اكتب مرة واحدة، شغل في أي مكان".',
      cpp: 'C++',
      cppDesc: 'C++ لغة سريعة وقوية تستخدم للألعاب وأنظمة التشغيل والبرامج عالية الأداء.',
      sql: 'SQL',
      sqlDesc: 'SQL (لغة الاستعلام الهيكلية) هي اللغة المستخدمة لإدارة قواعد البيانات. تسمح لك بقراءة وإدراج وحذف البيانات.',
    },
    culture: {
      title: 'الثقافة والأدب',
      subtitle: 'الثقافة الصومالية الغنية: الأمثال والحكم والشعر والأغاني الوطنية.',
      proverbs: 'الأمثال',
      proverbsDesc: 'الأمثال الصومالية أقوال قصيرة ذات معنى عميق. تعكس حكمة وخبرة الصوماليين عبر القرون. مثال: "راعي الإبل يعرف الإبل ويعرفها جيداً".',
      wisdom: 'الحكم',
      wisdomDesc: 'الحكم كلمات تترجم الحياة. تنشأ من الخبرة والمعرفة. الحكمة هي العلم المفهوم والمطبق.',
      poetry: 'الشعر',
      poetryDesc: 'الشعر هو أعلى أشكال الأدب الصومالي. له وزن وقافية ومعنى. يلقى الشعر ليصل إلى كل مستمع.',
      songs: 'الأغاني الوطنية',
      songsDesc: 'الأغاني الوطنية الصومالية تعكس الثقافة والحب والتاريخ. الأغاني الحديثة والتقليدية جزء مهم من الثقافة.',
    },
    quran: {
      title: 'القرآن الكريم',
      subtitle: 'استمع للقرآن بتلاوة جميلة من أفضل القراء.',
      selectSurah: 'اختر السورة',
      selectReciter: 'اختر القارئ',
      play: 'تشغيل',
      pause: 'إيقاف',
      loading: 'جارٍ التحميل...',
    },
    about: {
      title: 'من نحن',
      subtitle: 'فلنواء مشروع عالمي يجمع بين الدين والتكنولوجيا والثقافة.',
      missionTitle: 'مهمتنا',
      missionText: 'مهمتنا هي تزويد الشعب الصومالي والعالم بتعليم عميق في الدين والتكنولوجيا والثقافة، متاح بثلاث لغات: الصومالية والإنجليزية والعربية.',
      visionTitle: 'رؤيتنا',
      visionText: 'نأمل أن يصبح فلنواء الموقع الأكثر شمولاً باللغة الصومالية، يساعد الشباب على تعلم دينهم وتكنولوجياهم وثقافتهم.',
      valuesTitle: 'قيمنا',
      value1: 'تعليم عميق',
      value1Desc: 'نقدم مقالات متعمقة تشرح المواضيع بدقة.',
      value2: 'لغات متعددة',
      value2Desc: 'نقدم ثلاث لغات ليتمكن المزيد من الناس من استخدام محتوانا.',
      value3: 'الثقافة والدين',
      value3Desc: 'ندعم الثقافة الصومالية والدين الإسلامي.',
      value4: 'التكنولوجيا',
      value4Desc: 'نعلم الشباب التكنولوجيا الحديثة.',
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'إذا كان لديك سؤال أو تريد مشاركة فكرة، تواصل معنا.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال رسالتك! شكراً لك.',
      followUs: 'تواصل معنا',
    },
    terms: {
      title: 'الشروط والأحكام',
      subtitle: 'شروط استخدام موقع فلنواء.',
    },
    privacy: {
      title: 'سياسة الخصوصية',
      subtitle: 'كيف نحمي معلوماتك الخاصة.',
    },
    subscribe: {
      title: 'انضم إلى قناة فلنواء على يوتيوب',
      subtitle: 'اشترك للحصول على فيديوهات جديدة عن الدين والتكنولوجيا والثقافة.',
      button: 'اشترك @filanwaa',
      youtubeText: 'YouTube.com/@filanwaa',
    },
    footer: {
      about: 'فلنواء',
      aboutDesc: 'مشروع يجمع بين الدين والتكنولوجيا والثقافة باللغات الصومالية والإنجليزية والعربية.',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل',
      rights: 'جميع الحقوق محفوظة 2024 فلنواء.',
      madeWith: 'صنع بحب',
    },
    common: {
      readMore: 'اقرأ المزيد',
      backToTop: 'العودة للأعلى',
      loading: 'جارٍ التحميل...',
    },
  },
}
