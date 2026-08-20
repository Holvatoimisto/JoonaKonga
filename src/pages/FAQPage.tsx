import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowLeft } from 'lucide-react';

const faqs = [
  {
    question: 'Mikä on kiropraktiikka?',
    answer: 'Kiropraktiikka on terveydenhuoltoala, joka keskittyy tuki- ja liikuntaelinten toimintahäiriöiden tutkimiseen, hoitoon ja ennaltaehkäisyyn. Kiropraktikko käyttää manuaalisia hoitotekniikoita, kuten nivelten mobilisaatiota ja manipulaatiota.',
  },
  {
    question: 'Onko kiropraktikko turvallinen?',
    answer: 'Kyllä. Kiropraktikko on Valviran rekisteröimä terveydenhuollon ammattilainen, jolla on laaja koulutus. Hoidot ovat turvallisia ja yksilöllisesti suunniteltuja.',
  },
  {
    question: 'Mihin kiropraktiikka auttaa?',
    answer: 'Selkä- ja niskakipuihin, päänsärkyyn, olkapäävaivoihin, iskiakseen, urheiluvammoihin, raskausajan kipuihin ja yleiseen hyvinvointiin.',
  },
  {
    question: 'Kuinka pitkä hoitokerta on?',
    answer: 'Ensimmäinen käynti kestää noin 45–60 minuuttia (sisältää haastattelun ja tutkimuksen). Jatkokäynnit noin 15–30 minuuttia.',
  },
  {
    question: 'Missä vastaanottonne sijaitsee?',
    answer: 'Helsinki: Runeberginkatu 8 C 17 (Kamppi). Kirkkonummi: Purokummuntie 1. Molemmissa ilmainen pysäköinti.',
  },
  {
    question: 'Miten perun ajan?',
    answer: 'Peruutus tulee tehdä viimeistään 24 tuntia ennen varattua aikaa. Voit peruuttaa soittamalla, tekstiviestillä tai netin kautta.',
  },
  {
    question: 'Maksaako hoito Kela-korvausta?',
    answer: 'Valitettavasti kiropraktikkohoito ei ole Kelan korvaama Suomessa. Meillä käy kuitenkin E-passi.',
  },
  {
    question: 'Sattuuko hoito?',
    answer: 'Kiropraktinen hoito ei yleensä sattu. Joissain tapauksissa voi tuntua lievää epämukavuutta, mutta hoito on aina hellävaraista ja turvallista.',
  },
];

export function FAQPage() {
  return (
    <div className="bg-[#F8FAFA] min-h-[100dvh]">
      <div className="h-[60px] md:h-[68px]" />

      <section className="pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <Link to="/" className="group inline-flex items-center gap-2 font-inter text-[13px] text-[rgba(16,42,50,0.7)] hover:text-[#123F3D] transition-colors duration-300 mb-10">
              <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Takaisin etusivulle
            </Link>
            <p className="font-inter text-[10px] font-medium uppercase tracking-[0.2em] text-[rgba(16,42,50,0.7)]/70 mb-5">USEIN KYSYTTYÄ</p>
            <h1 className="font-cormorant text-[26px] md:text-[32px] text-[#102A32] leading-[1.25] mb-5">Vastauksia yleisimpiin kysymyksiin</h1>
            <p className="font-inter text-[14px] text-[#102A32]/80 leading-[1.7] mb-12 max-w-[440px]">Jos et löydä vastausta kysymykseesi, soita 040 415 1611.</p>
          </ScrollReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-t border-[#123F3D]/[0.08] py-6">
                  <h3 className="font-inter text-[16px] font-semibold text-[#102A32] leading-[1.5] mb-3">{faq.question}</h3>
                  <p className="font-inter text-[14px] text-[rgba(16,42,50,0.7)] leading-[1.75]">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-[#123F3D]/[0.08]" />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="font-inter text-[14px] text-[#102A32] mb-5">Etkö löytänyt vastausta?</p>
              <a href="tel:+358404151611" className="inline-flex items-center justify-center px-10 py-[14px] rounded font-inter text-[14px] font-bold bg-[#123F3D] text-white hover:bg-[#00B8B5] transition-colors duration-300">
                Soita 040 415 1611
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
