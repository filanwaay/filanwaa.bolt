import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function WisdomPage() {
  const { lang } = useLanguage()

  const wisdomItems: { so: string; en: string; ar: string }[] = [
    { so: 'Rag saddex ayaa u xun: ma toshiye, ma tashade, iyo ma tashiishe.', en: "Three kinds of men are bad: one who doesn't think, one who doesn't consult others, and one who doesn't plan ahead.", ar: 'ثلاثة من الرجال سيئون: من لا يفكر، ومن لا يستشير، ومن لا يخطط للمستقبل.' },
    { so: 'Rag saddex ka oggow: gacan gudhan, gar weecsan, iyo guddoon jilicsan.', en: 'Beware of three kinds of men: the stingy hand, the biased judge, and the weak decision-maker.', ar: 'احذر من ثلاثة رجال: اليد البخيلة، والقاضي المتحيز، وصاحب القرار الضعيف.' },
    { so: 'Saddex Ilaah waa awoodaa, mase dhacdo: "Ilaahow guursan maayee caruur i sii," "Ilaahow shaqaysan maayee xoolo i sii," iyo "Ilaahow ku caabudi maayee jannadaada i geli."', en: 'God is capable of three things, but they never happen: "O God, give me children without marrying," "O God, give me wealth without working," and "O God, let me enter Paradise without worshipping You."', ar: 'ثلاثة أمور يقدر عليها الله لكنها لا تحدث: "اللهم ارزقني أولادًا دون زواج"، "اللهم ارزقني مالاً دون عمل"، و"اللهم أدخلني جنتك دون عبادتك."' },
    { so: 'Saddex lama arkaa: marti nin ka yar, muddo maalin ka yar, iyo salaad hal rakaco ka yar.', en: "Three things don't exist: a guest smaller than a person, a duration shorter than a day, and a prayer with fewer than one rak'ah.", ar: 'ثلاثة أشياء لا وجود لها: ضيف أصغر من إنسان، ومدة أقصر من يوم، وصلاة أقل من ركعة واحدة.' },
    { so: 'Saddex lama raaco: ma horreeye, ma hambeeye, iyo ma haasaawshe.', en: "Three kinds of people are not to be followed: one who doesn't lead, one who doesn't participate, and one who doesn't engage in conversation.", ar: 'ثلاثة لا يُتبعون: من لا يتقدم، ومن لا يشارك، ومن لا يتحدث.' },
    { so: 'Rag saddex lama raaco: ma fakare, ma faa\'iidayste, iyo ma foorarsade.', en: "Three kinds of men are not to be followed: one who doesn't reflect, one who brings no benefit, and one who doesn't humble himself.", ar: 'ثلاثة رجال لا يُتبعون: من لا يتأمل، ومن لا يفيد، ومن لا يتواضع.' },
    { so: 'Saddex looma adkeysto: gaajo guri og, gardarro garab og, iyo cudur geeri og.', en: 'Three things cannot be endured: hunger known throughout the household, injustice backed by strength, and illness known to lead to death.', ar: 'ثلاثة أشياء لا تُحتمل: الجوع المعروف في البيت، والظلم المدعوم بالقوة، والمرض المعروف أنه يؤدي إلى الموت.' },
    { so: 'Saddex markaad bartaan ka gaboobaan: dab ololintiis, caruur aamusinteed, iyo awr carraabintiis.', en: "Three things become harder with old age even after mastering them: lighting a fire, quieting children, and handling a bull camel's temperament.", ar: 'ثلاثة أشياء تصعب مع التقدم في العمر حتى بعد إتقانها: إشعال النار، وتهدئة الأطفال، والتعامل مع مزاج الجمل الفحل.' },
    { so: 'Saddex wal-walkaaga kugu kordhiyaan: gaadiid xun, naag xun, iyo guri xun.', en: 'Three things increase your worries: a bad vehicle, a bad wife, and a bad house.', ar: 'ثلاثة أشياء تزيد همومك: مركبة سيئة، وزوجة سيئة، ومنزل سيئ.' },
    { so: 'Saddex col ayaa jira: col cad, col cas, iyo col madow — colka cad waa biyaha, colka casna waa dabka, colka madowna waa dadka.', en: 'There are three enemies: the white enemy, the red enemy, and the black enemy — the white enemy is water, the red enemy is fire, and the black enemy is people.', ar: 'هناك ثلاثة أعداء: العدو الأبيض، والعدو الأحمر، والعدو الأسود — العدو الأبيض هو الماء، والعدو الأحمر هو النار، والعدو الأسود هو الناس.' },
    { so: 'Rag waxa ugu faan badan mar dhoof iyo mar duul. Rag waxa ugu liita ciil kama baxe iyo calooshiisa la ciyaare.', en: 'What men boast about most is a journey and a raid. The worst in men is one who cannot let go of a grudge, and one whose hunger can be used against him.', ar: 'أكثر ما يفتخر به الرجال هو السفر والغزو. وأسوأ ما في الرجال من لا يتخلى عن الحقد، ومن يمكن استغلال جوعه ضده.' },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🧠</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {lang === 'so' ? 'Xikmadaha Soomaaliyeed' : lang === 'ar' ? 'الحكم الصومالية' : 'Somali Wisdom'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'so'
              ? 'Murti ka dhalatay khibrad nololeed, oo si gaar ah loogu qaabeeyay saddex saddex.'
              : lang === 'ar'
              ? 'حكمة وُلدت من تجربة الحياة، مصاغة بأسلوب الثلاثيات المميز.'
              : 'Wisdom born from life experience, uniquely shaped in threes.'}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {wisdomItems.map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px 28px',
                borderLeft: '4px solid #0F4C3A',
                boxShadow: '0 4px 12px rgba(15,76,58,0.06)',
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F4C3A',
                  marginBottom: lang === 'so' ? 0 : '8px',
                  lineHeight: 1.6,
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
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}