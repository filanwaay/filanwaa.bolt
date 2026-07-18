import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function StoryPage() {
  const { lang } = useLanguage()

  const content: Record<string, { intro: string; paragraphs: string[]; closingNote: string }> = {
    so: {
      intro: 'Qisadan oo si qurux badan loogu qoray afka Ingiriiska waxaan ka cudurdaaranayaa haddii aanan usoo gudbin sidii ay u qortay gabadha sheekada soo diyaarisay.',
      paragraphs: [
        'Magacayga waxaa la yiraahdaa Cassie, waxaan ahay 23 jir sanadkan ka soo qalin-jabiyay iskuulka kalkaalinta caafimaadka. Shaqadii iigu horeysay waxaan ka helay meesha lagu xannaaneeyo dadka waayeelka (Home Nurse).',
        "Qofkii iigu horeeyay ee la i siiyay wuxuu ahaa oday 80 jir ah oo Ingiriis ah oo qaba cudurka Alzheimer's. Maalintii iigu horeysay ee aan shaqada soo galay ayaa la i siiyay faylka bukaanka. Haddii aan isha la raacay waxaa ku qoran inuu diinta Islaamka galay oo uu yahay convert.",
        'Horay ayaan u ogaa in hab-dhaqameedka meesha (home nurse) qaarkiis uu kahor imaan doono diintiisa, sidaas darteed waxaan u baahnaa inaan fahmo waxyaabaha uu u baahan yahay si aan ugu adeego sida ugu wanaagsan.',
        'Waxaan u soo iibin jiray hilib xalaal ah oo si gooni ah loo kariyo. Waxaan ka fogeeyay dhammaan wixii leh hilibka doofaarka iyo khamriga. Waxaas oo dhan waxaan ku ogaaday kadib markii aan sameeyay baaritaan ku saabsan waxyaabaha ay Muslimiintu diidan yihiin.',
        'Dhibanahan wuxuu ahaa qof xaaladiisa caafimaad ay aad u liidato oo ay adag tahay in loo adeego. Xitaa saaxiibaday ayaa la yaabi jiray sida aan ugu dadaalayo qof xaaladiisu sidaas tahay oo hadana haysta diin qariib ah. Anigase waxaan u arkayay "qof diintiisa daacad u ah oo u baahan in la ixtiraamo."',
        'Si kastaba ha ahaatee, usbuucyo yar haddii aan la joogay waxay indhahayga ku dhaceen isagoo samaynaya xarakaat isu eg.',
        "Ugu horeyntii waxaan u qaatay inuu ku dayanayo qof kale, laakiin waxaa ii muuqday inuu ku soo celcelinayo waqtiyo gaar ah sida subaxa, galabta iyo fiidka. Waa xarakaat gacmaha kor loo taagayo, foorarsi, madaxa oo dhulka la dhigo, iyo kuwo kale oo aan fahmi waayay waxa ay ka dhigan yihiin. Wuxuu ahaa mid akhriya jumlado aan fahmi waayay luuqadooda, in kasta oo aanu si fiican u hadli karin markiisa horaba xanuunka dartiis.",
        '"Wuxuu ahaa mid iga diiday inaan gacanta bidix ku quudiyo, in kasta oo aan ahaa qof guran. "Malaha waa arrin diintiisa salka ku haysa oo aan weli fahmin sababta."',
        'Goor aan isla wareersanahay ayaa qof aan saaxiibo aheyn ii sheegay inuu jiro paltalk lagaga dooda arrimaha diinta, oo laga yaabo inay iga jaahil bixiyaan waxyaabaha uu samaynayo iyo sida aan ula macaamili lahaa. Waxaan is idhi malaha waa fikrad wanaagsan inaan Muslimiinta weydiiyo.',
        'Ficlan, waxaan galay qol la yiraahdo "True Message." Halkii ayaan dadka ku weydiiyay su\'aalo ku saabsan wixii aan ku arkay bukaanka; waxaana la ii sheegay inay tahay sida loo tukado salaadda. Ma aan haysan jawaabtii laga bixiyay ilaa uu qof kale soo galiyay YouTube-ka "Islamic prayer."',
        'Yaab iyo amakaag ayuu Ilaahay ii keenay — qof ay ka dhuntay xusuusta oo dhan, xitaa caruurtiisa magacyadooda, oo cunitaanka iyo cabitaanka uu dhib ku yahay, ayaa weli sii xasuustay salaadda iyo sida loo tukado! Kaaga daranna, xitaa Qur\'aankii ayuu sii xasuustay oo ku qoran luuqad kale oo aanu ku dhalan.',
        'Waxay igu noqotay wax aanan qaadan karin; waxaana ii cadaatay inuu daacad ka yahay diintiisa, taas oo iga dhalisay inaan barto diintiisa si aan ugu adeego sida ugu wanaagsan.',
        "Waxaan caadaystay inaan maalin kasta soo galo Paltalk. Waxaa la i siiyay link — meel aan ka akhrin karo Qur'aanka, turjumaaddiisa iyo dhagaysigiisa labadaba.",
        'Waxaan aad ugu heli jiray Suuratu An-Nahl ("Shinnida"), oo aan maalintii dhowr jeer dhagaysan jiray.',
        'Waxaan go\'aansaday inaan Qur\'aanka wax ka gaarsiiyo odayga bukaanka. Qur\'aanka ayaan ku soo duubay iPod-kayga, kadibna u geeyay si uu u dhagaysto.',
        'Cajiib ah — Qur\'aanka marka uu dhagaysto, mar wuu ooyaa, mar kalena wuu dhoola-cadeeyaa! Anigoo yaaban sida ay wax u yihiin ayaan fiiriyay turjumaaddii aayadaha, markaas ayaan fahmay sababta. Wuxuu ahaa mid ooya marka uu maqlo aayadaha ka sheekeynaya cadaabta, wuxuuna faraxaa marka laga sheekeynayo jannada!',
        "Waxaan isku dayay inaan ku dhaqmo wixii aan ka bartay Paltalk, haseyeeshee waxaan is arkay anigoo naftayda weydiinaya su'aalo aanan waligay jaanis u helin inaan isweydiiyo — sida aabbahay iyo meesha uu ku dhammaaday; hooyaday waxay dhimatay anigoo 3 jir ah. Aniga iyo walaalkay waxaa na soo koriyay awoowgeen iyo ayeeyadeen, oo hadda sii mootan 4 sano. Waxaa hadda nool aniga iyo walaalkay oo kaliya ah. In kasta oo dhibaatooyin badan ii soo gaareen, weli waan ku faraxsanahay.",
        'Joogitaanka aan la joogay bukaankan ayaan dareemay inay wax iga maqan yihiin. Waxaan qalad ka fahmi jiray waxa ay yihiin xasilloonida iyo dagannaanta (peace and tranquillity).',
        'Gabar aan ka bartay Paltalk ayaa i siisay magacyada masaajidyada ku yaal meesha aan degganahay; waxaana booqday mid ka mid ah. Waxaan daawaday sida salaadda loo tukado, indhahaygana waxaa ku soo istaagi jiray ilmo! Masaajidka ayaa naftayda la jeclaystay.',
        "Imaamka iyo xaaskiisa ayaa aad ii soo dhoweeyay, oo i siiyay cajaladaha iyo buugaagta aan ka faa'iidaysto, iyagoo weliba iiga jawaabi jiray wixii su'aalo ah oo aan qabay.",
        "Dadkii aan ka baray Paltalk, su'aal kasta oo aan weydiiyo si sahlan oo cajiib ah ayay iigu jawaabaan, taasoo qasab igu noqotay inaan aqbalo.",
        'Horay wax diin ah oo aan aaminsanaa ma jirin, laakiin had iyo jeer waxaan rumaysnaa inuu jiro Ilaahay, in kasta oo aanan garanayn sidii aan u caabudi lahaa.',
      ],
      closingNote: 'Walaasheen Cassie waxay dhimatay Oktoobar 2010, kadib markii ay Islaamka ugu yeertay walaalkeed, oo uu soo islaamay. (Innaa Lillaahi wa innaa Ilayhi Raaji\'uun)',
    },
    en: {
      intro: 'This story was beautifully written in English, and I apologize if I have not fully done justice to how the young woman who prepared it originally wrote it.',
      paragraphs: [
        'My name is Cassie. I am 23 years old, and I graduated this year from nursing school. My very first job was at a home caring for the elderly (as a home nurse).',
        "The first person assigned to me was an 80-year-old English man suffering from Alzheimer's. On my first day at work, I was handed the patient's file. Skimming through it, I saw it noted that he had converted to Islam.",
        'I already knew that some aspects of home-nursing care would come up against his religious practices, so I needed to understand what he required in order to serve him in the best way possible.',
        'I began buying halal meat specially, cooked separately. I removed anything containing pork or alcohol. I learned all of this after researching what things Muslims are forbidden from.',
        'This patient was in a very poor state of health, and it was difficult to care for him. Even my friends were astonished at how hard I worked for someone in his condition — who, on top of that, held a religion foreign to them. I, however, saw him as "a person sincerely devoted to his faith, who deserved to be respected."',
        'In any case, after being with him for a few weeks, I began noticing him making the same repeated movements.',
        "At first, I assumed he was imitating someone else, but it became clear to me that he repeated them at specific times — morning, afternoon, and evening. These were movements of raising the hands, bowing, placing the head to the ground, and others I couldn't understand the meaning of. He would also recite sentences in a language I couldn't understand, even though by then his illness had already made it hard for him to speak clearly.",
        'He refused to let me feed him with my left hand, even though I am left-handed. "Perhaps this is rooted in his religion, though I still don\'t understand why," I thought.',
        'At a point when I was truly confused, someone who wasn\'t even a friend told me there was a Paltalk chatroom where religious matters were discussed, and that they might think me ignorant for the things he was doing and how I was handling them. I told myself: perhaps it\'s a good idea to ask Muslims directly.',
        'So I did — I entered a room called "True Message." There, I asked people questions about what I had observed in my patient; I was told it was how one performs the prayer (salah). I wasn\'t satisfied with the answer until someone else shared a YouTube video titled "Islamic prayer."',
        "What God brought me to was astonishing — a man who had lost all his memory, even forgetting his own children's names, who struggled even to eat and drink, still remembered the prayer and how to perform it! Even more remarkable — he still remembered the Qur'an, recited in a language he was not even born into.",
        'It became something I could no longer dismiss; it became clear to me that he was truly devoted to his faith, and that stirred in me a desire to learn about his religion so I could serve him in the best way.',
        "I made it a habit to log into Paltalk every day. I was given a link — a place where I could both read the Qur'an's translation and listen to its recitation.",
        'I found myself especially drawn to Surah An-Nahl ("The Bee"), which I would listen to several times a day.',
        'I decided to bring some of the Qur\'an to the elderly patient. I recorded it onto my iPod and brought it to him so he could listen.',
        "Remarkably — when he listened to the Qur'an, sometimes he would cry, and other times he would smile! Puzzled by this, I looked into the translation of the verses, and then I understood why. He would cry when hearing verses describing the Hellfire, and he would be joyful when hearing about Paradise.",
        'I tried to apply what I had learned on Paltalk, but I found myself asking questions I had never before had the chance to ask myself — like about my father, and what became of him; my mother passed away when I was three years old. My brother and I were raised by our grandfather and grandmother, who have now also been gone for four years. Now, only my brother and I remain alive. Despite all the hardships that have come my way, I still find myself happy.',
        'Being with this patient, I felt that something was missing in me. I had misunderstood what peace and tranquility truly meant.',
        'A young woman I had come to know through Paltalk gave me the names of mosques near where I lived, and I visited one of them. I watched how the prayer was performed, and tears would well up in my eyes! The mosque became something my soul grew to love.',
        'The imam and his wife welcomed me warmly, and gave me recordings and books to benefit from, and they continued to answer any questions I had.',
        'The people I learned from on Paltalk — whatever question I asked, they would answer it so simply and remarkably that I found myself compelled to accept it.',
        "I never had any particular religion I believed in before, but I always believed there was a God, even though I didn't know how I should worship Him.",
      ],
      closingNote: 'Our sister Cassie passed away in October 2010, after she had invited her brother to Islam, and he accepted it and became Muslim. (Indeed we belong to Allah, and indeed to Him we shall return.)',
    },
    ar: {
      intro: 'كُتبت هذه القصة بشكل جميل باللغة الإنجليزية، وأعتذر إن لم أوفِّها حقها كما كتبتها الفتاة التي أعدّتها أصلًا.',
      paragraphs: [
        'اسمي كاسي، عمري 23 عامًا، وقد تخرجت هذا العام من كلية التمريض. كانت وظيفتي الأولى في دار لرعاية كبار السن (كممرضة منزلية).',
        'كان أول شخص أُسند إليّ رجلًا إنجليزيًا في الثمانين من عمره يعاني من مرض الزهايمر. في أول يوم لي في العمل، سُلِّمت ملف المريض. وعند تصفحي له، وجدت مكتوبًا أنه اعتنق الإسلام.',
        'كنت أعلم مسبقًا أن بعض جوانب الرعاية المنزلية قد تتعارض مع ممارساته الدينية، لذا احتجت إلى فهم ما يحتاجه لأخدمه بأفضل طريقة ممكنة.',
        'بدأت بشراء لحم حلال خصيصًا له، يُطهى بشكل منفصل. وأبعدت كل ما يحتوي على لحم الخنزير أو الكحول. عرفت كل هذا بعد أن بحثت عن الأشياء التي يحرّمها المسلمون.',
        'كان هذا المريض في حالة صحية سيئة جدًا، وكان من الصعب رعايته. حتى صديقاتي كنّ يستغربن مدى اجتهادي في خدمة شخص في حالته - يحمل، فوق ذلك، دينًا غريبًا عنهن. أما أنا، فكنت أراه "شخصًا مخلصًا لدينه، يستحق الاحترام."',
        'على أي حال، بعد أسابيع قليلة معه، بدأت ألاحظ أنه يقوم بحركات متكررة ومتشابهة.',
        'في البداية، ظننت أنه يقلّد شخصًا آخر، لكن تبيّن لي أنه يكرر هذه الحركات في أوقات محددة: الصباح، والظهيرة، والمساء. كانت حركات رفع اليدين، والانحناء، ووضع الرأس على الأرض، وحركات أخرى لم أفهم معناها. كان يتلو جملًا بلغة لم أفهمها، رغم أن مرضه كان قد جعل من الصعب عليه التحدث بوضوح أصلًا.',
        'كان يرفض أن أطعمه بيدي اليسرى، رغم أنني أعسر. قلت في نفسي: "ربما هذا أمر متجذر في دينه، رغم أنني لا أفهم السبب بعد."',
        'في لحظة كنت فيها في حيرة شديدة، أخبرني شخص لم يكن حتى صديقًا لي أن هناك غرفة على Paltalk يُناقش فيها أمور الدين، وأنهم قد يظنونني جاهلة بما يفعله وكيف أتعامل معه. قلت لنفسي: ربما فكرة جيدة أن أسأل المسلمين أنفسهم.',
        'بالفعل، دخلت غرفة تُدعى "الرسالة الحقيقية". هناك، سألت الناس أسئلة عما لاحظته على مريضي؛ فأُخبرت أن ذلك هو كيفية أداء الصلاة. لم أقتنع بالجواب حتى شارك أحدهم مقطع يوتيوب بعنوان "الصلاة الإسلامية".',
        'ما جاء به الله لي كان أمرًا مذهلًا - رجل فقد كل ذاكرته، حتى نسي أسماء أبنائه، ويجد صعوبة حتى في الأكل والشرب، لكنه ما زال يتذكر الصلاة وكيفية أدائها! والأعجب من ذلك، أنه ما زال يتذكر القرآن، الذي يتلوه بلغة لم يولد بها.',
        'أصبح الأمر شيئًا لا يمكنني تجاهله؛ تبيّن لي أنه مخلص حقًا لدينه، وهذا أثار فيّ رغبة في تعلّم دينه لأخدمه بأفضل طريقة.',
        'جعلت من عادتي الدخول إلى Paltalk كل يوم. أُعطيت رابطًا - مكانًا يمكنني فيه قراءة ترجمة القرآن والاستماع إلى تلاوته.',
        'وجدت نفسي منجذبة بشكل خاص إلى سورة النحل، التي كنت أستمع إليها عدة مرات في اليوم.',
        'قررت أن أُسمع المريض المسن جزءًا من القرآن. سجّلته على جهاز iPod الخاص بي، ثم أحضرته له ليستمع.',
        'المدهش أنه عندما كان يستمع إلى القرآن، كان أحيانًا يبكي، وأحيانًا أخرى يبتسم! حائرة من ذلك، بحثت في ترجمة الآيات، وحينها فهمت السبب. كان يبكي عند سماع الآيات التي تصف النار، ويفرح عند سماع الحديث عن الجنة.',
        'حاولت أن أطبّق ما تعلّمته على Paltalk، لكنني وجدت نفسي أسأل نفسي أسئلة لم تُتح لي الفرصة لطرحها من قبل - مثل والدي، وما آل إليه أمره؛ توفيت والدتي وأنا في الثالثة من عمري. رُبّيت أنا وأخي على يد جدّي وجدتي، اللذين توفيا أيضًا منذ أربع سنوات. الآن، لم يبقَ على قيد الحياة سوى أنا وأخي. رغم كل الصعاب التي واجهتنا، ما زلت أجد نفسي سعيدة.',
        'خلال وجودي مع هذا المريض، شعرت أن هناك شيئًا ينقصني. كنت أفهم بشكل خاطئ معنى السلام والطمأنينة الحقيقيين.',
        'أعطتني فتاة تعرّفت عليها عبر Paltalk أسماء المساجد القريبة من مكان سكني، فزرت أحدها. شاهدت كيف تُؤدى الصلاة، وكانت الدموع تنهمر من عينيّ! أحبّت روحي المسجد.',
        'رحّب بي الإمام وزوجته بحرارة، وأعطياني تسجيلات وكتبًا لأستفيد منها، وواصلا الإجابة عن أي أسئلة كانت لديّ.',
        'الناس الذين تعلّمت منهم عبر Paltalk، كانوا يجيبون على أي سؤال أطرحه بطريقة بسيطة ومذهلة، لدرجة أنني وجدت نفسي مضطرة لتقبّل الأمر.',
        'لم يكن لديّ من قبل دين معيّن أؤمن به، لكنني كنت دائمًا أؤمن بوجود إله، رغم أنني لم أكن أعرف كيف يجب أن أعبده.',
      ],
      closingNote: 'توفيت أختنا كاسي في أكتوبر 2010، بعد أن دعت أخاها إلى الإسلام، فأسلم. (إنا لله وإنا إليه راجعون)',
    },
  }

  const c = content[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #3E4642 0%, #1A1D1B 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📖</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Qisadii Cassie' : lang === 'ar' ? 'قصة كاسي' : 'The Story of Cassie'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            {c.intro}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {c.paragraphs.map((p, i) => (
              <p key={i} style={{
                color: '#3A3F3C',
                fontSize: '1.05rem',
                lineHeight: 1.9,
                marginBottom: '22px',
              }}>
                {p}
              </p>
            ))}
            <div style={{
              marginTop: '40px',
              padding: '24px 28px',
              background: '#F8FAF9',
              borderRadius: '12px',
              borderLeft: '4px solid #E8B14B',
            }}>
              <p style={{ color: '#525C57', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                {c.closingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}