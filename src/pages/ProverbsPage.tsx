import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'
export function ProverbsPage() {
  const { lang } = useLanguage()

  const proverbGroups: { letter: string; items: { so: string; en: string; ar: string }[] }[] = [
    { letter: 'B', items: [
      { so: 'Bidaari sibiq bey kugu gashaa', en: 'A single spark can set you ablaze.', ar: 'شرارة واحدة قد تشعلك بالنار.' },
      { so: 'Barasho horteed ha i nicin', en: "Don't hate me before you get to know me.", ar: 'لا تكرهني قبل أن تعرفني.' },
      { so: 'Barasho u yeelo geedkaad cugsan doonto', en: 'Get to know well the tree you intend to lean on.', ar: 'تعرّف جيدًا على الشجرة التي تنوي الاتكاء عليها.' },
      { so: 'Bartii yaqaan, bari uma korodho', en: 'One who already knows a place does not grow further in it.', ar: 'من يعرف المكان جيدًا لا يزداد فيه نموًا.' },
      { so: 'Baruur quruntay ayaa baruuro qurmisa', en: 'One spoiled piece of fat spoils the rest.', ar: 'القطعة الفاسدة الواحدة تُفسد البقية.' },
      { so: 'Baryo badan iyo bukaan badan waa laysku nacaa', en: 'Too much begging and too much illness both wear out patience.', ar: 'كثرة التوسل وكثرة المرض يُنفّران الناس.' },
      { so: 'Baryo iyo is daluuc layskuma daro', en: "Begging and self-respect don't mix.", ar: 'التوسل واحترام الذات لا يجتمعان.' },
      { so: 'Baso waa baso si kastoo loo subko', en: 'A cat is still a cat no matter how you groom it.', ar: 'القطة تبقى قطة مهما زيّنتها.' },
      { so: 'Bawdo rag, maalinba midbaa qaawan', en: "Among men's thighs, one is bare each day.", ar: 'بين أفخاذ الرجال، واحد يكون عاريًا كل يوم.' },
    ]},
    { letter: 'T', items: [
      { so: 'Tabcadaa ma tuuggo', en: "A weakling doesn't steal.", ar: 'الضعيف لا يسرق.' },
      { so: 'Talo adigaa ku nool ee iyadu kuguma noola', en: "You live by your own decision — it doesn't live by you.", ar: 'أنت من يعيش بقرارك، لا القرار من يعيش بك.' },
      { so: 'Talo laba adin dhexdood bay ka dhalataa', en: 'Good counsel is born between two minds.', ar: 'الرأي السديد يُولد بين عقلين.' },
      { so: "Tol la'aani waa tows", en: 'Having no kinship is a hardship.', ar: 'انعدام القرابة مصيبة.' },
      { so: 'Tol yarraaday, tafo naagood baa laga dayaa', en: "When kinship shrinks, one relies on other means.", ar: 'عندما تقل القرابة، يُلجأ إلى حيلة النساء.' },
      { so: 'Toladu waa mar aad gaadhi waydo iyo mar aad garan waydo', en: "Kinship shows itself when you can't reach or understand something.", ar: 'القرابة تظهر عندما تعجز عن بلوغ شيء أو فهمه.' },
      { so: 'Tolkaa maw talisay, mase tuugtay', en: 'Your kin may advise you, but not deceive you.', ar: 'قومك قد ينصحونك، لكنهم لا يخدعونك.' },
      { so: 'Tolkaaga iyo xaaskaaga midna looma xoog weynaado', en: 'Neither your kin nor spouse should be dominated by force.', ar: 'لا قرابتك ولا زوجتك يُقهران بالقوة.' },
      { so: 'Tuug la qabtay talo ma laha', en: 'A caught thief has no say.', ar: 'اللص الذي أُمسك به لا رأي له.' },
      { so: 'Tuug tuug ma xado', en: "One thief doesn't steal from another.", ar: 'اللص لا يسرق من لص مثله.' },
    ]},
    { letter: 'J', items: [
      { so: 'Jacayl biri ma goyso, biyana kaama maydhaan', en: 'Love cannot be cut by iron, nor washed away by water.', ar: 'الحب لا يقطعه الحديد ولا يغسله الماء.' },
      { so: 'Jidh qalaad waa dhul qalaad', en: 'A foreign body is like foreign land.', ar: 'الجسد الغريب كالأرض الغريبة.' },
      { so: 'Jiid aan ku jiidee waa gacmo daalis', en: "Pulling a rope that doesn't pull back only tires your hands.", ar: 'شد حبل لا يُقاومك يُتعب يديك فقط.' },
      { so: 'Jinni, ninkii keenaa bixiya', en: 'It is the one who brought the trouble who must resolve it.', ar: 'من جلب المشكلة عليه حلّها.' },
    ]},
    { letter: 'X', items: [
      { so: 'Xabaallo waalid baa xoolo lagala baxaa', en: "It's at a parent's graveside that inheritance disputes emerge.", ar: 'عند قبر الوالد تظهر نزاعات الميراث.' },
      { so: 'Xargo geel ma wada xidhaan', en: "You don't tether all the camels with one rope.", ar: 'لا تُربط كل الإبل بحبل واحد.' },
      { so: 'Xaglo laaban xoolo kuma yimaadaan', en: "Wealth doesn't come to folded knees.", ar: 'الثروة لا تأتي للكسول.' },
      { so: 'Xarrago dumar xanuun ma leh', en: "Women's vanity causes no real harm.", ar: 'تباهي النساء لا يسبب ضررًا حقيقيًا.' },
      { so: 'Xiiso iyo xoorba way gudhaan', en: 'Both enthusiasm and foam eventually dry up.', ar: 'الحماس والرغوة يجفّان في النهاية.' },
      { so: 'Xog mooge xaajo waa dilaa', en: 'One ignorant of the facts ruins the matter.', ar: 'الجاهل بالحقائق يُفسد الأمر.' },
      { so: 'Xoolo lama cunee dadkoodaa la cunaa', en: "It's not the wealth that's consumed, but its owners.", ar: 'لا تُؤكل الثروة، بل أصحابها.' },
      { so: 'Xoolo quudheed waa la qaataa, soor quudheedse lama qaato', en: "You may take another's livestock, but not their prepared food.", ar: 'يمكن أخذ ماشية الغير، لكن لا طعامه المُعد.' },
      { so: 'Xoorkii laga dhamay xagaagii iyo xusuus baa geel lagu xer geeyaa', en: "Camels are herded by the memory of last season's milk-foam.", ar: 'تُقاد الإبل بذكرى الموسم الماضي.' },
    ]},
    { letter: 'D', items: [
      { so: 'Durduro geel baa ku jaba', en: "It's the rushing herd that breaks (a branch).", ar: 'القطيع المندفع هو من يكسر.' },
      { so: 'Doqontu xeerna ma hoyso, xoolana ma hoyso', en: 'The fool respects neither law nor property.', ar: 'الأحمق لا يحترم القانون ولا الممتلكات.' },
      { so: 'Dudumo dheeraataa dhulkuun bay ku noqotaa', en: 'A shadow that stretches too far returns to the ground.', ar: 'الظل الممتد يعود في النهاية إلى الأرض.' },
      { so: 'Dukhsi biyo ku dabaal bartay fuud buu ku bakhtiyaa', en: 'A fly used to swimming in water drowns in froth.', ar: 'الذبابة المعتادة على السباحة تغرق في الرغوة.' },
      { so: 'Dukhsi dantiisuu ugu jiraa', en: "The fly's interest lies in the filth.", ar: 'مصلحة الذبابة تكمن في القذارة.' },
      { so: 'Dukulush timir gaari waayay, kharaaraa tuf yiri', en: "When it couldn't reach the dates, it called them bitter.", ar: 'العنب الحامض — من لم يصل لشيء يقلل من شأنه.' },
      { so: 'Dul qaadasho yey noqon tii dibiga', en: "Don't let your burden-bearing be silent like the ox.", ar: 'لا تجعل تحمّلك كتحمّل الثور الصامت.' },
      { so: 'Dumaal ninka xishooday kama ilmo dhalo', en: 'A widower too shy fathers no more children.', ar: 'الأرمل الخجول لا يُنجب أطفالًا بعد ذلك.' },
      { so: 'Dumar iyo dheri toona yar yaraysi malaha', en: 'Neither women nor pots should be underestimated for size.', ar: 'لا النساء ولا القدور يُستهان بهما.' },
      { so: 'Dumarka been baa lagu soo xero geliyaa, runa waa lagu dhaqaa', en: 'Women are drawn in with lies, but kept with truth.', ar: 'تُستدرج النساء بالكذب، ويُحافظ عليهن بالصدق.' },
      { so: 'Duqsi, caanuu ku dabaal bartaa, fuudbuuse ku gubtaa', en: 'The fly is used to milk, but gets scalded in the froth.', ar: 'الذبابة معتادة على الحليب، لكنها تحترق في رغوته.' },
      { so: 'Durduro waxarood xanan (qodax) bay kula gashaa', en: 'A rushing flash-flood carries thorns along with it.', ar: 'السيل المندفع يجرف الأشواك معه.' },
    ]},
    { letter: 'R', items: [
      { so: 'Raad arrooryo dib looma raaco', en: "A morning's tracks are not followed backward.", ar: 'لا يُتبع أثر الصباح إلى الوراء.' },
      { so: 'Rag gar baa kala saarta, dumarna jaan', en: 'Men are distinguished by judgment, women by grace.', ar: 'يتميز الرجال بالحكمة، والنساء بالجمال.' },
      { so: 'Rag jidiin baa walaaleeya', en: 'It is shared hardship that bonds men as brothers.', ar: 'المعاناة المشتركة تجعل الرجال إخوة.' },
      { so: "Rag la'aan waxba kuma yeeshee, rag xumaa ku disha", en: "The absence of men does no harm — bad men destroy.", ar: 'غياب الرجال لا يضر، بل الرجال السيئون.' },
      { so: 'Rag qawl baa xidha, dumarna meher', en: 'Men are bound by their word, women by dowry.', ar: 'يُقيَّد الرجال بكلمتهم، والنساء بالمهر.' },
      { so: 'Rag waa talo keen iyo talo raac', en: 'A man is either one who brings counsel or follows it.', ar: 'الرجل إما صاحب رأي أو تابع له.' },
      { so: 'Rag waa raggii hore, hadalna waa intuu yidhi', en: 'Men are measured by the men of old.', ar: 'يُقاس الرجال بالرجال الأوائل.' },
      { so: 'Rag waa shaah, dumarna waa sheeko', en: 'Men are like tea, women are like conversation.', ar: 'الرجال كالشاي، والنساء كالحديث.' },
      { so: 'Rag walaalow wuxuu ku dhaamo la waa', en: "A brother's excellence over you is still shared with you.", ar: 'تفوق الأخ عليك لا يزال مشتركًا معك.' },
    ]},
    { letter: 'S', items: [
      { so: 'Socod aanan loo dhalan lix saamood ma dhaafo', en: "A journey you weren't destined for doesn't last.", ar: 'الرحلة التي لم تُخلق لها لا تدوم.' },
      { so: 'Soomaali been waa sheegtaa, beense ma maahmaahdo', en: 'A Somali may lie, but never turns a lie into a proverb.', ar: 'الصومالي قد يكذب، لكنه لا يجعل الكذب مثلاً.' },
    ]},
    { letter: 'DH', items: [
      { so: 'Dhakac-dhakac hore, dhabana heys dambe ayay leedahay', en: 'Early effort sets the stage; the true outcome comes later.', ar: 'المحاولة الأولى للتمهيد، والنتيجة الحقيقية لاحقًا.' },
      { so: 'Dharigii fara bataa waa fuud xaraareeyaa', en: 'Too many hands involved only heats up the froth.', ar: 'كثرة الأيدي المتدخلة تُعقّد الأمور البسيطة.' },
    ]},
    { letter: 'C', items: [
      { so: 'Carab iyo labadiisa daan baa isugu dhaw, iyana way is qaniinaan', en: 'Even close relations can clash.', ar: 'حتى الأقربون قد يتخاصمون.' },
      { so: "Carab lo'aad caws looma tilmaamo", en: "Don't explain the obvious to an expert.", ar: 'لا تشرح البديهي لخبير.' },
      { so: 'Caro walaal waa la bariiyaa', en: "A brother's anger is waited out.", ar: 'غضب الأخ يُنتظر حتى يهدأ.' },
      { so: 'Carrab dalab leh waa la gartaa, ee uur dadbanse lama garto', en: 'A spoken request is understood, but hidden intent is not.', ar: 'الطلب المُعلن يُفهم، أما النية الخفية فلا.' },
      { so: 'Carruuri kor cabsooday leedahaye, kal cabsooda ma leh', en: 'Children fear visible authority more than inner conscience.', ar: 'الأطفال يخافون مما هو ظاهر أكثر من الداخل.' },
      { so: 'Carruurta bulaca cayaar bay u dishaa; isagana waa u dil', en: "Children may not recognize real danger — adults must protect them.", ar: 'الأطفال لا يدركون الخطر — على الكبار حمايتهم.' },
      { so: 'Caruuri waa ciil laga waynaado', en: 'Raising children is a grief one grows out of.', ar: 'تربية الأطفال حزن يُكبر منه المرء لاحقًا.' },
      { so: 'Casaan qurux kama tagana', en: 'A fair complexion never lacks beauty.', ar: 'البشرة الفاتحة لا تفارقها الجمال.' },
      { so: 'Casarkii wixii kugu dhacaa, cishihii lagugu caayaa', en: "What befalls you in daylight is mocked by night.", ar: 'ما يصيبك نهارًا يُعيَّر به عليك مساءً.' },
      { so: 'Ceeb looma dhinto, cara lalama qarxo', en: "One doesn't die of shame, nor explode from anger.", ar: 'لا يُموت المرء من العار، ولا ينفجر من الغضب.' },
      { so: 'Ceebtaada oo ay kow ogtahay, kun looma sheego', en: "Don't spread what's already sensitive to one person.", ar: 'عيبك الذي يعرفه واحد، لا تُخبر به الألف.' },
      { so: 'Ceel dad liqa, ul baa lagu dayaa', en: 'Learn from past tragedy before proceeding.', ar: 'تعلّم من التجارب السابقة قبل المضي.' },
      { so: 'Ceesaan ninkii weyddiinteda kugu dhiba, kaxaynteedaa lagu dhibaa', en: "A difficult courtship means a more difficult marriage.", ar: 'الخطبة الصعبة تعني زواجًا أصعب.' },
      { so: 'Ceesaantii arigeeda diidda, orgi shisheeyaa fuula', en: 'Rejecting the right choice can lead to a worse outcome.', ar: 'رفض الخيار الصحيح يؤدي لنتيجة أسوأ.' },
    ]},
    { letter: 'F', items: [
      { so: 'Far keligeed fool ma dhaqdo', en: 'One finger alone cannot wash a face — unity is needed.', ar: 'إصبع واحد لا يغسل وجهًا — التعاون ضروري.' },
      { so: 'Fardo fagaaro jooga la isuguma faano', en: "Don't celebrate before results are certain.", ar: 'لا تحتفل قبل ظهور النتيجة.' },
      { so: 'Fardo laysu hayo maxaa laysugu faana', en: "Don't take pride in what isn't truly yours.", ar: 'لا تفخر بما ليس ملكًا لك.' },
      { so: 'Farihii dufan leh ayaa wax duuga', en: 'Those with resources benefit most.', ar: 'من يملك الموارد يستفيد أكثر.' },
      { so: 'Faro ka ciyaar, futo ka ciyaar ayaa ka roon', en: 'Better to be careful than to gamble recklessly.', ar: 'الحذر خير من المخاطرة الكاملة.' },
      { so: 'Farsamo xumo, futada cankeeday ku goysaa', en: 'Incompetence causes failure even where success should be easy.', ar: 'قلة الكفاءة تُفشل حتى الأمور السهلة.' },
      { so: 'Faruurow, maxaa berbera ku geeyey? waa faduul', en: 'Getting involved beyond your place leads to trouble.', ar: 'التدخل فيما لا يعنيك يجلب المتاعب.' },
      { so: 'Fulay hooyadii ma goblanto', en: "A wicked person's own mother is not spared.", ar: 'الشرير لا يوفّر حتى والدته.' },
      { so: 'Fulay wax ka wadne weyn', en: "A wicked person's heart is bigger than anything.", ar: 'قلب الشرير أكبر من كل شيء.' },
      { so: 'Fulay kaa ulo badan', en: 'A wicked person has more tricks than you.', ar: 'الشرير يملك حيلًا أكثر منك.' },
      { so: 'Fullayoow, guuli kuu dhawaydaa', en: 'O wicked one, success stays close to you (through cunning).', ar: 'أيها الشرير، النجاح قريب منك.' },
      { so: 'Futo iyo dhul isma huraan', en: 'The body and the ground are inseparable.', ar: 'الجسد والأرض لا ينفصلان.' },
    ]},
    { letter: 'Q', items: [
      { so: 'Qalad laguma saxo', en: 'A mistake is not corrected with another mistake.', ar: 'الخطأ لا يُصحَّح بخطأ آخر.' },
    ]},
    { letter: 'K', items: [
      { so: 'Kaadi badane waa loo gogol badiyaa', en: 'Accommodate people according to their needs.', ar: 'يُراعى كل شخص بحسب حاجته.' },
      { so: 'Kab xume ma hadho ee kab laawaa hadha', en: "Something imperfect is still better than nothing.", ar: 'الناقص خير من العدم.' },
      { so: 'Kaftan iyo kaadi baa laysku cadaaba', en: 'Know when to hold back a joke.', ar: 'اعرف متى تكبح المزاح.' },
      { so: "Karis xun iyana ku wax la'", en: 'Poor cooking also leaves you lacking.', ar: 'الطهي السيئ يتركك محرومًا.' },
      { so: 'Kibir waa lagu kufaa, laguna kala jabaa', en: 'Arrogance leads to downfall.', ar: 'الكبر يؤدي إلى السقوط.' },
      { so: 'Kitaab meelaan lagu fasirayn laguma furfuro', en: "Don't handle something without proper guidance.", ar: 'لا تتعامل مع أمر دون إرشاد صحيح.' },
      { so: "Kolka weylaha la helo ayaa lo'da la maalaa", en: 'Things happen in their proper order.', ar: 'الأمور تحدث بترتيبها الصحيح.' },
      { so: 'Kuftin jillib iyo habaar waalid, midina sahal kuma hadho', en: "Some wounds — physical or spiritual — run deep.", ar: 'بعض الجراح، جسدية أو روحية، عميقة.' },
    ]},
    { letter: 'L', items: [
      { so: 'La jiifiyaana bannaan, la joojiyaana bannaan', en: 'Life and death both return to the same open earth.', ar: 'الحياة والموت يعودان لنفس الأرض المفتوحة.' },
      { so: 'Laabtu low ma aha, hadba la laalaabi karo', en: 'Conscience has firm limits.', ar: 'الضمير له حدود ثابتة.' },
      { so: 'Laba layskuma daro: bidaar iyo timo, tuugmo iyo ad-adayg', en: "Two things don't mix: baldness and hair, theft and honesty.", ar: 'أمران لا يجتمعان: الصلع والشعر، السرقة والاستقامة.' },
      { so: 'Laba qaawan isma qaaddo', en: "Two people lacking the same thing can't help each other.", ar: 'عاريان لا يستر أحدهما الآخر.' },
      { so: 'Laba tallaabo dhexdood baa talo ka dhalataa', en: 'Wisdom is born between two perspectives.', ar: 'الحكمة تُولد بين وجهتي نظر.' },
      { so: 'Labaatan jir intuu geed ka boodo, talo ka boodaa', en: 'Youth often leaps before it thinks.', ar: 'الشباب يتصرف بتهور دون تفكير.' },
      { so: 'Labadii qaydhin ku qaybsatay, bisayl iskuma cawrido', en: "Sharing by lot leaves nothing to hide.", ar: 'من يتقاسمان بالقرعة لا يخفيان شيئًا.' },
      { so: 'Labadii xaqdaro ku heshiisa, xaqay ku diriraan', en: 'Unjust agreements eventually collapse into conflict.', ar: 'الاتفاقات الظالمة تنتهي بالتقاتل.' },
      { so: 'Labo bukta ma is baaniyaan', en: 'Two sick people cannot nurse each other.', ar: 'مريضان لا يعتني أحدهما بالآخر.' },
      { so: 'Lacagina lacag bay dhashaa, injirina qindhicil', en: 'Like produces like.', ar: 'الشبيه يُنجب شبيهه.' },
      { so: 'Laf jabtay sideedii ma noqoto', en: 'A broken bone never returns to how it was.', ar: 'العظم المكسور لا يعود كما كان.' },
      { so: 'Lafo geri iyagaa laysku jebshaa', en: 'Only their own kind can match something as tough.', ar: 'فقط النظير يستطيع مواجهة النظير القوي.' },
      { so: 'Lama gano falaadh kugu soo noqon doonta', en: "Don't shoot an arrow that will come back to you.", ar: 'لا ترمِ سهمًا سيعود إليك.' },
      { so: 'Lama huraan waa caws jiilaal', en: 'The inevitable is scarce but unavoidable.', ar: 'الحتمي نادر لكنه لا مفر منه.' },
    ]},
    { letter: 'M', items: [
      { so: 'Maahmaahdu waa murti, beentu ay ka maran tahay', en: 'A proverb is wisdom, entirely free of falsehood.', ar: 'المثل حكمة خالية تمامًا من الكذب.' },
    ]},
    { letter: 'N', items: [
      { so: 'Nin kaa weyn hortaa buu xanaqaa', en: 'A man greater than you gets angry right in front of you.', ar: 'الرجل الأكبر منك يغضب أمامك مباشرة.' },
      { so: 'Nin waalan walaalkiis ayaa u miirqabo', en: "A madman's own brother should restrain him.", ar: 'أخو المجنون هو من يكبح جماحه.' },
      { so: 'Nin habaarani ma harsadoo', en: "A curse carries real weight.", ar: 'اللعنة تحمل وزنًا حقيقيًا.' },
      { so: 'Nacaska usha agtiisa ku dhufo; haddii fahmi waayana dusha uga dhufo', en: 'Give warning before harsher correction.', ar: 'أعطِ إنذارًا قبل التصحيح القاسي.' },
      { so: 'Naar meel qaboow ma leh', en: 'Fire has no cool place — danger has no safe corner.', ar: 'النار ليس لها مكان بارد.' },
      { so: 'Nin aanan aarsan, uurka habartiis uu jiifaa', en: "Manhood is tied to standing up for justice.", ar: 'الرجولة الحقيقية ترتبط بالدفاع عن الحق.' },
    ]},
    { letter: 'W', items: [
      { so: 'Waano abuuris baa ka horeysay', en: 'Wisdom/guidance is fundamental and eternal.', ar: 'النصيحة سبقت الخلق نفسه.' },
      { so: 'Waranloow, warkaa waa kaa soo horeeyay', en: 'Word travels faster than you can act.', ar: 'الخبر يسبقك دائمًا.' },
      { so: 'Waari mayside war hakaa hadho', en: 'One does not live forever, but legacy remains.', ar: 'لا أحد يعيش للأبد، لكن السيرة تبقى.' },
      { so: 'Waayeel ha soocine, wax aqoonta sooca', en: "Don't judge by age — it's knowledge that distinguishes people.", ar: 'لا تُميّز بالعمر، بل بالمعرفة.' },
      { so: 'Waayeel hadalkiisa kaftan buu ku dhamaystaa', en: 'An elder ends serious speech with a joke.', ar: 'الحكيم ينهي كلامه الجاد بنكتة.' },
      { so: 'Waayeel hortiisaa caano loogu badhxaa', en: 'Elders receive priority and honor.', ar: 'يُكرَّم الحكيم ويُعطى الأولوية.' },
      { so: 'Wadaanta isha ka xumaataa, faylkay la tagtaa', en: 'A flawed leader misguides those who follow.', ar: 'القائد المعيب يُضل أتباعه.' },
      { so: 'Wadaantii geeleeda kaafida, baa mid kalena kaalmeysa', en: 'Leadership and support go both ways.', ar: 'القيادة والدعم في اتجاهين.' },
      { so: 'Wadar iyo waaxid yaa waalan', en: 'Only a madman confuses the whole with a part.', ar: 'المجنون فقط من يخلط بين الكل والجزء.' },
      { so: 'Wadiiqada yari, wadada wayn bay kugu ridaa', en: 'Small missteps can lead to major outcomes.', ar: 'الأخطاء الصغيرة قد تقود لعواقب كبرى.' },
      { so: 'Wax kaa tegay tiigsimaad ma leh', en: 'What has passed you by cannot be reached again.', ar: 'ما فاتك لا يُدرَك.' },
      { so: 'Walaalkaa dhuux tagoogaa loogu soo subkadaa', en: 'Family shares even the last, most precious resource.', ar: 'من أجل أخيك، حتى الأثمن يُقدَّم له.' },
      { so: 'Walaalkaa markhaatiga ku fur, magtana la bixi', en: 'Loyalty includes honesty and shared responsibility.', ar: 'الولاء يشمل الصدق وتقاسم الأعباء.' },
      { so: 'Walaalo is necebi way xoola yareeyaan, wayna xabaalo badiyaan', en: 'Family conflict brings ruin and death.', ar: 'الإخوة المتباغضون يُقلّلون الثروة ويُكثرون القبور.' },
    ]},
    { letter: 'H', items: [
      { so: 'Hadal waxuu amaan yahay intaadan oran', en: 'A word is safe only before you speak it.', ar: 'الكلمة تكون آمنة فقط قبل أن تُقال.' },
      { so: 'Hashu uurkeyga gadaye ma misaar bey liqday', en: 'A sharp retort questioning a suspicious claim.', ar: 'رد ساخر على ادعاء سخيف.' },
      { so: 'Hal maqaar diidee, meelo dulduleelo ayey ka daydaa', en: 'Rejecting proper treatment leads to worse refuge.', ar: 'رفض العلاج المناسب يقود لمكان أسوأ.' },
      { so: 'Hadal aan laga fiirsan, iyo caano aan fiiqsi loo dhamin, feeraha ayay wax yeelaan', en: 'Careless words and careless actions both cause harm.', ar: 'الكلام دون تفكير يؤذي كما يؤذي الإهمال.' },
      { so: 'Hubsiimo hal geela baa la siistaa', en: 'Certainty is precious — verify before acting.', ar: 'التأكد ثمين — تحقق قبل أن تتصرف.' },
      { so: 'Hadal yar iyo howl badan', en: 'Few words, much work.', ar: 'كلام قليل وعمل كثير.' },
      { so: 'Haddii la yaabo, yaasiinka', en: 'In moments of shock, turn to prayer/faith.', ar: 'وقت الصدمة، اللجوء إلى الدين.' },
    ]},
    { letter: 'A', items: [
      { so: 'Amaano cir diid, dhulna diid', en: 'A trust must be returned to its rightful owner.', ar: 'الأمانة يجب أن تُرد لصاحبها.' },
      { so: 'Allaah uunkiisa ka adag, hooyana gabadheeda ka adag', en: 'God is greater than creation; a mother greater than her child can repay.', ar: 'الله أعظم من خلقه، والأم أعظم من أن تُرد جميلها.' },
      { so: 'Af aamusani dahab dheh', en: 'Silence is golden.', ar: 'الصمت من ذهب.' },
      { so: 'Amaano kugu raagtay lihi bey noqotaa', en: "Be careful about holding onto what isn't yours too long.", ar: 'كن حذرًا من الاحتفاظ بما ليس لك طويلاً.' },
    ]},
    { letter: 'I', items: [
      { so: 'Int aadan fali ka fiirso', en: 'Think it over before you act.', ar: 'تدبّر الأمر قبل أن تفعله.' },
      { so: 'Inan iyo abeeso afkoodey u dhintaan', en: 'Careless words or greed can lead to ruin.', ar: 'الكلام المتهور أو الطمع قد يكون سبب الهلاك.' },
    ]},
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #7C5817 0%, #2A1D08 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💬</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Maahmaahyada Soomaaliyeed' : lang === 'ar' ? 'الأمثال الصومالية' : 'Somali Proverbs'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Xigmad ka dhalatay khibrad qarniyo ah oo Soomaaliyeed, kala saaran xarfaha.'
              : lang === 'ar'
              ? 'حكمة وُلدت من تجربة صومالية عمرها قرون، مرتبة حسب الحروف.'
              : 'Wisdom born from centuries of Somali lived experience, organized alphabetically.'}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          {proverbGroups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#E8B14B',
                marginBottom: '16px',
                borderBottom: '2px solid #E8B14B',
                paddingBottom: '8px',
                display: 'inline-block',
              }}>
                {group.letter}
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {group.items.map((item, ii) => (
                  <div key={ii} style={{
                    background: '#F8FAF9',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    borderLeft: '4px solid #0F4C3A',
                  }}>
                    <p style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0F4C3A',
                      marginBottom: lang === 'so' ? 0 : '8px',
                    }}>
                      {item.so}
                    </p>
                    {lang !== 'so' && (
                      <p style={{ color: '#525C57', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {lang === 'ar' ? item.ar : item.en}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}