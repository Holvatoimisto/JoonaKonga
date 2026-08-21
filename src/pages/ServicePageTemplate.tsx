import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
  eyebrow: string;
}

const services: ServiceDetail[] = [
  {
    slug: 'selka-ja-niskakivut',
    eyebrow: 'SELKÄ- JA NISKAKIVUT',
    title: 'Selkä- ja niskakivut',
    subtitle: 'Ylä-, keski- ja alaselkä, niska, hartiat, iskias',
    description: 'Kiropraktikkona hoidan kaikenlaisia selkä- ja niskakipuja. Olipa vaivasi ylä-, keski- tai alaselkäkipu, niskahartiaseudun jumi, iskias tai käsiin säteilevä kipu, teen aina perusteellisen tutkimisen ja yksilöllisesti suunnitellun hoidon.',
    benefits: ['Vähentää selkä- ja niskakipua', 'Parantaa nivelten liikkuvuutta', 'Lievittää iskiasta', 'Auttaa päänsärkyyn', 'Vähentää hermopinteitä', 'Palauttaa normaalin ryhdin'],
    duration: '15–60 min',
    image: '/assets/jk_hero.webp',
  },
  {
    slug: 'olkapaa-ja-nivelvaivat',
    eyebrow: 'OLKAPÄÄ- JA NIVELVAIVAT',
    title: 'Olkapää- ja nivelvaivat',
    subtitle: 'Olkapää, hartia, lapaluu, rintakehä',
    description: 'Niska-, hartia- ja olkapäävaivat, lapaluun viereiset kivut ja rintakivut ovat yleisiä vaivoja. Kiropraktinen hoito voi auttaa palauttamaan normaalin liikkeen ja vähentämään kipua.',
    benefits: ['Parantaa olkapään liikkuvuutta', 'Vähentää hartiakipua', 'Auttaa lapaluun alueen kipuihin', 'Palauttaa normaalin asennon', 'Lievittää rintakipua', 'Parantaa ylävartalon toimintaa'],
    duration: '15–60 min',
    image: '/assets/jk_img2.jpg',
  },
  {
    slug: 'urheiluvammat',
    eyebrow: 'URHEILUVAMMAJA',
    title: 'Urheiluvammat ja suorituskyky',
    subtitle: 'Urheilijoiden erityisosaamista',
    description: 'Urheiluvammat ja suorituskyvyn parantaminen kuuluvat erityisosaamiseeni. Kiropraktinen hoito auttaa palautumisessa, ehkäisee rasitusvammoja ja parantaa kehon toimintaa.',
    benefits: ['Nopeuttaa palautumista', 'Ehkäisee rasitusvammoja', 'Parantaa liikkuvuutta', 'Optimoi suorituskykyä', 'Korjaa asentovirheitä', 'Yksilöllinen ohjaus'],
    duration: '15–60 min',
    image: '/assets/jk_img3.jpg',
  },
  {
    slug: 'raskausajan-kivut',
    eyebrow: 'RASKAUSAJAN KIVUT',
    title: 'Raskausajan ja sen jälkeiset kivut',
    subtitle: 'Turvallista hoitoa raskausaikana',
    description: 'Raskauden aikana ja sen jälkeen keho käy läpi suuria muutoksia. Kiropraktinen hoito on turvallista raskausaikana ja voi auttaa selkä- ja lantion alueen kipuihin.',
    benefits: ['Lievittää selkäkipua raskausaikana', 'Auttaa lantion alueen kipuihin', 'Parantaa ryhtiä', 'Turvallista ja hellävaraista', 'Jatko-ohjeistus kotihoitoon', 'Tukee palautumista synnytyksen jälkeen'],
    duration: '15–45 min',
    image: '/assets/jk_joona.jpg',
  },
];

export function ServicePageTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="bg-[#F7F7F7] pt-32 pb-20 px-6 text-center">
        <h1 className="font-mona text-2xl text-[#2F2B36] mb-4">Palvelua ei löytynyt</h1>
        <Link to="/" className="font-madefor text-[13px] text-[rgba(47,43,54,0.7)] hover:text-[#212121]">
          Takaisin etusivulle
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F7] min-h-[100dvh]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#212121] shadow-[0_1px_12px_rgba(0,0,0,0.15)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-[60px] md:h-[68px] flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img src="/assets/jk_logo.png" alt="Kiropraktikko Joona Konga" className="h-8 md:h-9 w-auto" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 font-madefor text-[13px] font-semibold uppercase tracking-[0.12em] text-[#D9D9DE]/90 hover:text-[#212121] transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
            Etusivu
          </Link>
        </div>
      </nav>

      <section className="relative pt-[120px] md:pt-[140px] pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Link to="/#palvelut" className="inline-flex items-center gap-1.5 font-madefor text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgba(47,43,54,0.7)] hover:text-[#212121] transition-colors">
                <ArrowLeft size={14} strokeWidth={1.5} />
                Takaisin palveluihin
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <ScrollReveal>
                <p className="font-madefor text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(47,43,54,0.7)] mb-4">{service.eyebrow}</p>
                <h1 className="font-mona text-[30px] md:text-[38px] text-[#2F2B36] leading-[1.25] mb-4">{service.title}</h1>
                <p className="font-madefor text-[15px] text-[rgba(47,43,54,0.7)] leading-[1.7] mb-8">{service.description}</p>

                <div className="mb-8">
                  <p className="font-madefor text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(47,43,54,0.7)] mb-3">Hyödyt</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <ArrowRight size={12} strokeWidth={1.5} className="text-[rgba(47,43,54,0.7)] shrink-0" />
                        <span className="font-madefor text-[14px] text-[#2F2B36]">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://varaa.timma.fi/velnas#kiropraktiikka" className="inline-flex items-center justify-center px-10 py-4 rounded font-madefor text-[14px] font-bold tracking-[0.08em] bg-[#212121] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-[#212121] transition-all duration-300">
                    Varaa aika
                  </a>
                  <Link to="/#hinnasto" className="inline-flex items-center justify-center px-8 py-4 rounded font-madefor text-[14px] font-medium tracking-wide text-[#2F2B36] border border-[#212121]/20 hover:border-[#212121]/40 hover:bg-[#212121]/[0.04] transition-all duration-300">
                    Katso hinnasto
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div className="rounded-xl overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <footer className="bg-[#212121] px-6 md:px-12 py-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-madefor text-[13px] text-[#D9D9DE]">Kiropraktikko Joona Konga, Velnas Laajasalo</p>
          <div className="flex items-center gap-6">
            <span className="font-madefor text-[12px] text-[#D9D9DE]">045 676 8408</span>
            <span className="font-madefor text-[12px] text-[#D9D9DE]">Yliskylän puistokatu 11, Helsinki</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
