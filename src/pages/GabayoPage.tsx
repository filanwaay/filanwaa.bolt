import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function GabayoPage() {
  const { lang } = useLanguage()

  const labels = {
    so: { title: 'Gabayada', subtitle: 'Gabayo dhaqameed oo Soomaaliyeed — hido, taariikh, iyo xikmad.', by: 'Abwaan' },
    en: { title: 'Gabay Poetry', subtitle: 'Classical Somali oral poetry — heritage, history, and wisdom.', by: 'Poet' },
    ar: { title: 'قصائد الغابای', subtitle: 'الشعر الصومالي الكلاسيكي - تراث وتاريخ وحكمة.', by: 'الشاعر' },
  }

  const poems = [
    {
      title: 'Guuguulle',
      poet: 'Ismaaciil Mirre',
      text: `Guuguulihiiyow haddaad guga u ooyayso,
Oo aad moodday keligaa inuu gubayo jiilaalku,
Oo aad gamoorahakan maran gama' la'aan diiday,

Ayna gocosho awgeed ilmadu kaaga gobo'laysay,
Guumays cirroobaan ahaye war an ku gaarsiiyo,
Gartaa maaha keligaa inaad gaar u cabataaye,

Giddigood addoomaha waxaa gaaray nabar weyne,
Abaar gaag ma reebaa dhacdiyo gaatamoo kale e,
Geelii adduunka u adkaa gobollo waydowye,

Golihii ka kici waa raggii gaydho hayn jiraye,
Tuuladay ilgabadlaynayaan gobol barbaartiiye,
Ninkii timirta goob dhigi lahaa jiingaduu geline,

Ninna uma garaabeen haddaan gaadhka laga hayne,
Gammaankii ka maray dhoodi iyo galaxyadeediiye,
Gumburigii bar baa joogsadiyo goroyo cawshiiye,

Saryankii garbaha weyn lahaa geed ka kici waaye,
Wuxuu gooni daaqii habsaday gubaddadii Hawde,
Garanuugti iyo deeradii gaag yar baa haraye,

Gobay iyo askari geyfan baa goodirkii jaraye,
Guuyadiyo jiiskii hadday kala gol waayeene,
Kama guuxo aar goonlihii geliga toomoode,

Shabeelkii gabraar lagu idlee giiro layn jiraye,
Oo gododka kama soo ciyaan gabannadiisiiye,
Hargihiisa nimankii gataa guuldarraw sidaye,

Gaadiidkii la dhaansanahayiyo giindhaygii maraye,
Ahmigii la gawrici jiriyo gaabay adhigiiye,
Goggii subagga laga buuxin jirey hataan gorofaadye,

Basaas bay timihii uga go'een gaaridii dumare,
Galowgiiiyo fiintii naf bay giida la hayaane,
Gorgorkiyo dhurwaagii laftaad galayax mooddaaye.

Garaad Faaraxiyo Maxamuud Garaad ma leh gammaankiiye,
Cood kama gurxamo dooxadii garada fiicnayde,
Garoowe iyo Bookh bay harraad qaar u go'ayaane,

Gaajiyo rafaad bay qabaan garow la'aaneede,
Ayaxii geyiga joogi jirey guuto lagu saarye,
Gubniyaa hareeraha ka maray gaariyaal wada e,

Geedaha sun baa loogu daray geerinaw badaye,
Wax ma galabsanine maalin baa loo guddoonsadaye,
Adigaaba lagu gaadayaa waadan garanayne,

Guuxiyo cabaadkiyo haddaad gooha damin waydo,
Quruumahakan wada geyfan baa baalka kaa guriye,
Gaagaabso oo aamu yaan gaar lagaa qabane!!!`,
    },
    {
      title: 'Gunburo',
      poet: 'Ismaaciil Mirre',
      text: `Gelin dhexe xalaan Maxamadow geyrtay oo kacaye,
Gam'ina waayey hadalkay i tiri gacallow naagtiiye,
Adigay gabley tiri markaad gaaska wadateene.

Waxay tiri adaa igu gondolay garangartaan iile,
Waxay tiri aday guridhigoo ma lihi gaadiide,
Waxay tiri adaa gelengel tubay garayartaydiiye,
Waxay tiri guyaalkii adaa gaajo ii dilaye,
Waxay tiri gurboodkii adaa geesuhuu dhigaye,
Guhaadeeda aan jirin balaan gabay ka soo qaado.

Gumburo iyo cagaarweyne iyo geedkii Daratoole,
Goobtii Jidbaaliyo Xargaga guuldarradii joogtay,
Gembigii ka dhacay Ruuga iyo gudurigii haagay,
Gabooddeeda Beerdhiga wixii la isku gooraamay,
Maydkii gabraday seerigay Good ku tumanaysay,

Gawarkaad maraysaba laftaad galayaxaa mooddo,
Ogaadeenka gaanka ah wixii geydho laga qaaday,
Iiddoor cayuun godan wixii gelin la waydaarshay,
Shirshooraha gudbani cayr wuxuu gorof la meeraystay,
Garcas iyo Majeerteen wixii guuyo laga dhaarshay,

Gob ninkii ahaan jirey wuxuu gibil madoobaadey,
Giddigiis naflaa'iga wixii gobolba meel aaday,
Dayuuradaha gowliyo wixii samada guuraayey,
Daarihii gelgelintaa noqodiyo gebiyadii ciiray,

Wixii guuldarriyo hoog ka dhacay dunida guudkeeda,
Gembiyo jahaadkii arlada gaday wixii joogay,
Gaaliyo Daraawiish wixii uunka kala gaaray,
Keligey ma wada geysannine la isku geeryooye,
Geyigii rogmaday oo dhan baad guudka ii suriye,

Waxbana hay gurraynine dembaad galabsanaysaaye,
Gartaa maaha naag yahay inaad ii gilgilataaye,
Gashi kaama qabo oo ma layn gabannadaadiiye,
Gambana kaama furan baan u fili gulufyadaydiiye,
Naa gefkiyo beenta daa yadan gelin godadkii naareede.`,
    },
    {
      title: 'Ragow Kibirka Waa Lagu Kufaa',
      poet: 'Ismaaciil Mirre',
      text: `Kulligood adoomaha rabboow qaybsha kibistiiye
Qof kastoo kabtiya ama kalaha ama kur dheer fuula
Bad kalluun ku jirra kollay ku tahay amase koob shaah ah
Ninba kadabkii loo qoray Ilaah wuu la kulansiine
Inaan ruuxna soo korodhsanayn kaa ha la ogaado

Ninkase koob nimca ah fuuqsadee kadin irmaan maala
In karuurka uu qubo horay kaafka ugu tiille
Killigiiba Reer-Hagar anaa kiin ah baa rogaye
Kamma Sugulle maankii sidii kuray carruureede
Kas xumaa hoddaye naagta way kala fogaayeene
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Lixda koos ee Reer Cali-gariye kaw iskaga siiyey
Kasi waaye wuxu waa qabaal waadna kabataane
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Kaysaha adduun Ina Amaan kuma qarraacnayne
Ragbaa keeno gali buu is yidhi waad u koraysaaye
Misna kama fileyn mana hadayn kii Israa'ilaye
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Af xakame karkabadii u ay iyo kulaylkiiye
Ka dambee Calluu yidhi intuu Kaaha guursadaye
Isna kaal u tumay weyn intuu kariyey waabeeye
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Kalmadduu lahaa Ina Galaydh kohay gadaashiiye
Kaarkuba ma joogeen hadduu keeno tuluddiiye
Baallacad kalyaha kuma jareen kii uu quudhsadaye
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Raguu muxumud waal raray haduu saanta uga kaadsho
Kulcad uma ay dileen oo hadana koor magaliyeene
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Cartan dhuurta kooraha markuu kor ugu laalaayey
Garaad Faarax dhay iyo karuur kala macaanaaye
Misna kala khadhaadhaa dhunkaal kulankii goobeede
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Adaa dunida kaligaa leh buu Koofil eersadaye
Kashiisaba ma galin wiilalbaa keebka kuu qabane
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Kaakici wadaadkii dagaal laguna kaalmeeye
Kumanyaal laguug duub cad buu keenay Beerdhiga e
Waxse kadabkii go'ay maalintuu kaday raggiisiiye
Kabaalkiisii baa jabay markuu kariyey Reer Kheyre
Ragow kibirka waa lagu kufaa kaa ha la ogaado

Mid kuwaa ka dhigan baan arkoon kibis u laabneyne
Inta uu kashbacay oo kibroo kamman wan weyn yeeshay
Yuu niman karaamiyo colba leh kiish ka buuxsadaye
Kashib dhaha Adoomahoow naftii kii ladnaa gadaye`,
    },
    {
      title: 'Iibsi Lacageed',
      poet: 'Ismaaciil Mirre',
      text: `Nimanyahow awow iyo awow iyo abkaan sheegto
iyo aniga abidkay ma arag iibsi lacageede
Adduun buu lahaan jirey raaggaan ka isirraa waaye
Ololahaan wax kaga qaybsan jirey ululuf duullaane
mar uun baan amaamuday waxaan aabahay faline
afar waxaan u dhaxay tuuladii awrta loo raraye
albaabkii Burcaan tegey anoo aaladii sida eh
Amminkiiba lay yimid sidii eegta lay yahaye
Ooggii horey nagu kaceen adhi dillaalkiiye
Dar iimaanka laga qaaday baa noo aloogsadaye
Amankaagay goortay wankii adhaxda tuujeene
Inta weeye iyo maahadii la is ilaaqaayey
Asaraartankii baa qalbiga aad wax ii dhimaye
Afka reer magaaluhu yaqaan waan ka oodnahaye
Ii-maroojihii bay khatalay kii aan aaminaye
afar bawlad laga gooyey bay igu aluubeene
Anigoo arkaayaa gacmaha laygu iibsadaye
kuwo boqonta ood laga sudhay ila ahaayeene
usha, jeedal iyo suufaf bay igu illaaweene
Ashcaartaba rag baa iga badshee idinku weydiiya.`,
    },
    {
      title: 'Annagoo Taleex Naal',
      poet: 'Ismaaciil Mirre',
      text: `Annagoo Taleex naal jahaad taladi soo qaadnay,
Toddobaatan boqol oo Darwiish togatay neef doorka,
Sayidkeennu tii uu na yiri Torog ku heensaynnay.

Wareegada waxay uga tawalin yaan wax kaa tegine,
Sibraar caana geel loo tabcaday Talax ku sii maallay,
Misna tawlka qaalmaha niniyo tulud u soo saarray.

Ilaahay ha tabantaabiyee noogu tacab khayrka,
Shakadaha intuu noo tamilay tiisa nagu waani,
Tiirkii Rasuulkiyo sharciga toog ku wada fuullay.

Galabtaa taxaabiyo kadlaba toobiyaha qaadnay,
Habeenkii fardaha waw turnaye taag ku sii mirannay,
Tun biciida lagu qoofalyoo xamashka loo taabay.

Goortii ay Talaaduhu dhaceen talalayoo reemay,
Tixda gabay kolkii aan akhriyey toosi niman jiifay,
Tiraabkaygu meeshu ka baxay la isku soo tuumi.

Salaaddii markii loo tukaday yaari kaga taagnay,
Togga Ulasameed dooyadii horay u tuuryaynnay,
Intay Timacad noo soo arkeen marada noo taage.

Sengeyaal tabaadihiyo gool weerarka u tooxnay,
Sidii Teyse rooboo onkoday tiririgtii yeedhay,
Teeriyo Berbera qayladii tahan la waydaaray.

Warka Tuurre waa laga hayaa taniyo Iimeeye,
Waa Xamar tarraaroo haddana taab ku sii daraye,
Taltallaabsigiisiyo kadlaha tabo kalaw dheere.

Kolay toban riyaad tahay adduun waydin tirayaaye,
Tunkaana waan ka soo xirahayaa Timirki dheeraaye,
Ma baddaa tuldaha loola kici Tuurre naaxsadaye?

Tafantoofka gaalkuu u dilay waa tix geliyaaye,
Suuldaan Ruunna loo tebi inaan tuuladii gubaye,
Tulud uma godlaan reeruhuu tawl ka saanyadaye,
Anigana tis bay galay intaan col ugu taagnaaye.`,
    },
    {
      title: 'Hanfi iyo Hunguri',
      poet: 'Ismaaciil Mirre',
      text: `Hanfi iyo hunguri soo dhiciyo, hinif dabayl baa leh
Hanqar iyo hillaac bililigliyo, halalac roob baa leh
Cir habqamay xareed laga harqaday, haradigeed baa leh.

Xiin hawle iyo heega curan, hogol daruuraa leh
Hir doogliyo caleen hamasha iyo, habatac ciid baa leh
Maal hooray ciir laga hanfaqay, seben hagaagaa leh

Caanaa had iyo jeera iyo heeshi, ramag baa leh
Qumba lala hagoogtiyo hilbiyo, hawl yar ari baa leh
Hayinnimo wax lagu qaato iyo, ku hinji awr baa leh.

Habaqliyo harraad iyo kulayl, hilin abaaraa leh
Hadii hadowga geedood engego, horasho ceel baa leh
Hagahagi hunguri duulayiyo, hogo kaliil baa leh

Harac iyo qabow lala herjado, hadh iyo raaxaa leh.
Hawo iyo hilow gacalo iyo, hurud nabdoon baa leh.
Hanfariir in loo kala ordiyo, hunuf dareen baa leh

Lugi waa higiishee himmiyo, halabsi neef baa leh
Haad iyo haldhaa roori iyo, huguf gammaan baa leh
Gorgor samada heehaabi iyo, huguguf Dhooddaa leh.

Hanaf booddo iyo xoog sengiyo, hadafa buubaa leh
Himbiriirsi meel foga magaan, higigifleeya leh
Hadii nadigu haaraha ku dhigo, haawis xamar baa leh

Aar soo hingoodiyo bad iyo, hugun rasaas baa leh
Habaas kacay halaakiga dhacsiga, halowna geesaa leh
Haliilyaale aan dhiirran iyo, haadiis fuley baa leh

Hankakoobsi iyo booto iyo, hoobsi guluf baa leh
Hamham iyo humsiga reenka iyo, higilla guutaa leh
Hannas weerar iyo qaylo iyo, hirif colaad baa leh

Heeraa in laysula bixiyo, heeggan dirir baa leh
Hirey iyo wirey maalintey, humuro joogtaa leh
Haadaa qabiilnimo nimaan, lagu holeyn baa leh

Hawa beena Soomalidaa, hadafka raacdaa leh
Hadal ruma Daraawiishta iyo, weli hanoonaa leh
Ragga diinta hooyga u noqdiyo, hanad Shirshooraa leh.

Hulqihii dad bari soo baxshiyo, hoogay dumar baa leh
Wixii habar majeerteen iyo, halamash naagaa leh
Xaar laysku heylaamiyiyo, halalac Mooraa leh.

Hammuunaan damayn iyo hunguri, lala hadaqaayo.
Handadka iyo heemada markuu, hadawga leefayo
Warsengaligu haybtuu yihiyo, horor dugaag baa leh

Hoobaaq laguu qodahayiyo, hagar shisheeyaa leh
Hundhur iyo caloolxumo ninkii, cadawgi heeraa leh
Hankuugyo uurgulguluc ninkii, hiijo qabay baa leh.

Inaad luqunta hoogaamisiyo, hogosho ciil baa leh
Meeshiyo habeen aakhiraad, hibasho maag ba leh
Haakaalle Eebbow ninkii, libin hoyaadshaa leh.

Hoh! iyo caku iyo hiif ninkii, hawkar galay baa leh.
Halaaka iyo laandeyr ninkii, marin habaabaa leh
Hinji iyo habaar waaq ninkii, huray astaadkaa leh.

Heeggaa in loo maro arlada, habi la'aan baa leh,
Hor Ilaah in loo jeensadiyo, haajir culimaa leh
Haawiyada naareed ninkii, ferenji haystaa leh

Iidoorka hoosada Berbera, ka hawisaa hey! leh
Harag uraya Muusa-Carrihii hoodhi jirey baa leh,
Hadduu niriggu heeryada ka rido, hogey Arab baa leh

Xaal hadura habaryonis iyo herer nin joogaa leh.
Ciisaha baqtiga hiigayiyo, haqay midgaan baa leh
Huurale Cali Jamaac iyo, huluq dameer baa leh.

Xididnimo habboonkeed ninkii, lagu hirtaabaa leh
Hargaamooyin iyo ceeb ninkii, gun u hoydaa leh,
Hidda xumo gobey heerle iyo, horinta cawl baa leh.

Hub wanaagsan heensiyo fardiyo, haybad iyo luuli
Hodya deeqa hoo iyo waxsiin, hor Alla geystaa leh,
Hannaan qurux san haashaar gobeed, hodon Dariiqaa leh.

Horweynkiyo haleelada nirgaha, loo hitiqinaayo
Haamaha karuurkee la shuban, holaca jiilaalka
Heel xoola laga buuxiyiyo, hibana Eebbaa leh.

Hal madow higgaad iyo Quraan, "H" iyo "W" reebban,
Harannimiyo hooyaale gabay heello iyo maanso,
Nin kaleba naftiisa ha hafree, hoodo anigow leh.`,
    },
    {
      title: 'Koofil',
      poet: 'Sayid Maxamed Cabdulle Xasan',
      text: `Annagoo taleex naal, jahaad taladii soo qaadnay
Toddobaatan boqol oo darwiish, toogatay neef doora
Sayidkeennu tii uu na yiri torog ku heensaynnay.

Adaa Koofilow jiitayaan, dunida joogeynee
Adigaa jidkii la gugu wadi, jimicla'aaneede
Jahannamo la geeyow haddaad, aakhirow jihato

Nimankii jannow kacay war, bay jirin inshaalleeye
Jameecooyinkii iyo haddaad, jawhartii aragto
Sida Eebahey kuu jirabay, mari jawaabteeda

Daraawiish jikaar naga ma deyn, tan iyo jeerkii dheh
Ingiriis jabyoo waxaa ku dhacay, jac iyo baaruud dheh
Waxay noo janjuunteenba waa, jibashadiinnii dheh

Jigta weerar bay goor barqaa, nagu jiteeyeen dheh
Anigana Jikrey ila heleen, shalay jihaadkii dheh
Jeeniga hortiisey rasaas, igaga joojeen dheh

Jiiraayaday ila dhaceen, jilic afkoodii dheh
Siday kuugu jeexeen magliga, jararacdii sheego
Billaawuhu siduu kuu jarjaray, jiirarka u muuji

Nafjeclaysigii baan ku idhi, jaallow iga daa dheh
Jaljalleecadii baa wadnaha, jeeb ka soo ruqay dheh
Jeedaaladii baa indhuhu kor, ii jillaadmeen dheh

Jimic kagama helin tuugmadaan, jeriyey ruuxii dheh
Kolkaan juuq idhaahdaba afkey, iga jifeeyeen dheh
Dhaaxaan jalleecaye dheg baan, jalaq la ii siinin dheh

Goortaan jarreeraba gafoo, nolol ka jaan qaaday
Sida janannadii hore tashigu, igu jaguugnaa dheh
Taladii jinnigu ii hormaray, jaasadeed helay dheh

Jiidaha xanuunka leh markii, la igu jeeraarshay
Jibaadka iga soo baxay dadkii, jiifka qaban waa dheh
makay rubaddu jow tidhi or bay, iga ag jiibsheen dheh

Jidhkaygii bahal baa cunoo, jiitay hilibkii dheh
Jurmidiyo baruurtii dhurwaa, jugux ka siiyaa dheh
Jiljilladiyo seedaha tukay, igaga jaadeen dheh

Haddaan lays jikraareyn tolkay, laga jil roonaa dheh
Weligood waxaa lagu jaraa jilibdhig duullaan dheh
Daraawiishi waa jibindhowga iyo jowga soo bixi dheh`,
    },
    {
      title: 'Ragga Ayl u Kacayow',
      poet: 'Sayid Maxamed Cabdulle Xasan',
      text: `Ragga Ayl u kacaayow fariin aada iga geeya
Aw jaamac dhaha aakhiriyo Eebbe ha illaawin
Nabsigaan ayaan soo dhaxayn adigu haw yeeran

Uquubiyo inkaar aadan qabin abid ha soo jiidan
Nin ikhwaanahoo kula arrimin maqal akhbaartiisa
Halkii kuu ekaad adigu tahay anafo haw yeelin

Arrinkaad waddaa waa hunguri ababadiisiiye
Ururkaaga uun dhereg la doon waa allow sahale
U adkayso gaajada wadaad aaqilaad tahaye

Arigaaga dhaqo cayri waa taad abuur garane
Adarka ha ku ridin koolahaad ku amranaydeene
Adduunyada ku tacab maanta waa aakhiruu sebene

Astaadkiyo Ismaaciil wax ku ururin maayaane
Arsuqaaga Eebban haye axanka hays dhaafin`,
    },
    {
      title: 'Allahu Akbar',
      poet: 'Cali Dhuux Aadan',
      text: `Allaahu akbar eedaanku waa kaa af iyo beene
Ashahaaday gaalkubase waa ehelu naarkiiye
Ubbo weyso waan kugu arkaa agab salaadeede
Asaxaabihii olol ku dhace wow abtiriyaaye
Hadduu uurka kaa jiro werdigu kaama orodneene
Abtiyaalladaa iyo ku nece ururtii Reer Khayre
Arboow Jaamac iyo Aadan iyo Oogle kaa tage e
Waxaan uubateeyaba tolkey oodda soo jebiye
Axmaqyahow kuwaad ku amranayd idinka ma ahayne
Waa uur gaslow Aadan-dhagax odayadaadiiye
Abtirsiinadaa waxay gashaa eyda Reer Xamare
Arxan nimaan u gelihaynin oo ina Ogaadeena
Aabowda uun bay hayaan kii arsaa'ilaye`,
    },
  ]

  const l = labels[lang]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #3E4642 0%, #1A1D1B 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📜</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>{l.subtitle}</p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {poems.map((poem, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
              }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '4px' }}>
                  {poem.title}
                </h2>
                <p style={{ color: '#8A7A3F', fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px' }}>
                  {l.by}: {poem.poet}
                </p>
                <p style={{ color: '#525C57', fontSize: '1rem', lineHeight: 2, whiteSpace: 'pre-line' }}>
                  {poem.text}
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