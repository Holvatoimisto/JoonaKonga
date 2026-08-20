import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Play,
} from 'lucide-react';

const serviceDropdownItems = [
  { label: 'Nikamakäsittelyt', href: '/palvelut/nikamakasittelyt' },
  { label: 'SI-nivelhoidot', href: '/palvelut/si-nivelhoidot' },
  { label: 'Pehmytkudoskäsittelyt', href: '/palvelut/pehmytkudoskasittelyt' },
  { label: 'Ergonominen neuvonta', href: '/palvelut/ergonominen-neuvonta' },
];

const templateData = {
  business: {
    name: 'Helsinki Kiropraktiikka',
    tagline: 'Kiropraktikko',
    fullTagline: 'HELSINKI KIROPRAKTIIKKA',
    address: 'Runeberginkatu 8 C 17, 00100 Helsinki',
    address2: 'Purokummuntie 1, 02400 Kirkkonummi',
    phone: '040 415 1611',
    phoneLink: 'tel:+358404151611',
    email: '',
    emailLink: '',
    bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
    googleReviewUrl: 'https://g.co/kgs/6Y5wXzVzsZB6JHTnN',
    googleMapsUrl: 'https://maps.google.com/?q=Helsinki+Kiropraktiikka',
    facebookUrl: 'https://www.facebook.com/HelsinkiKiropraktiikka/',
    instagramUrl: 'https://www.instagram.com/kiropraktikko.kristian/',
  },
  navigation: {
    logo: '/assets/hk_logo.jpg',
    logoDark: '/assets/hk_logo.jpg',
    links: [
      { label: 'ETUSIVU', href: '#' },
      { label: 'Kiropraktiikka', href: '#palvelut' },
      { label: 'Hinnasto', href: '#hinnasto' },
      { label: 'Yhteystiedot', href: '#yhteystiedot' },
    ],
    extraLinks: [
      { label: 'KOKEMUKSIA', href: '#arvostelut' },
      { label: 'UKK', href: '/usein-kysyttya' },
      { label: 'BLOGI', href: '/blogi' },
    ],
    ctaButton: { label: 'Ajanvaraus', href: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus' },
  },
  hero: {
    backgroundImage: '/assets/hk_final_cta.png',
    eyebrow: 'KIROPRAKTIKKO KRISTIAN EKSTRÖM',
    headline: 'Kokonaisvaltaista kivunhoitoa Helsingissä ja Kirkkonummella',
    subheadline: 'Valviran rekisteröimä kiropraktikko Helsingissä ja Kirkkonummella. Yli 20 vuoden kokemus tuki- ja liikuntaelinten ongelmien hoidosta.',
    ctaPrimary: { label: 'Varaa aika', href: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus' },
    ctaSecondary: { label: '040 415 1611', href: 'tel:+358404151611' },
    stats: [
      { value: '4.9', label: 'Google (103 arvostelua)' },
      { value: '2004', label: 'Vuodesta lähtien' },
      { value: 'Helsinki', label: 'ja Kirkkonummi' },
    ],
  },
  intro: {
    text: 'Kiropraktikko erikoistunut tuki- ja liikuntaelinten ongelmiin ja niiden tehokkaaseen hoitoon',
    backgroundColor: '#0E4745',
  },
  services: {
    eyebrow: 'HOITO',
    headline: 'Miten kiropraktikko voi auttaa sinua?',
    body: 'Kiropraktikkona keskityn tuki- ja liikuntaelinten ongelmiin, niiden tehokkaaseen hoitoon sekä terveyden edistämiseen. Yksilöllisesti suunniteltua hoitoa.',
    reassurance: 'Etkö ole varma voisiko kiropraktikko auttaa sinua? Soita 040 415 1611 ja kysy.',
    primaryServices: [
      {
        image: '/assets/hk_hero.jpg',
        title: 'Selkä- ja niskakivut',
        description: 'Ylä-, keski- ja alaselkäkipu, niskahartiaseudun vaivat, iskias ja käsiin säteilevät kivut. Niska- ja hartiaperäinen päänsärky ja niskaperäinen huimaus.',
        linkText: 'Lue lisää hoidosta',
        linkHref: '/palvelut/selka-ja-niskakivut',
      },
      {
        image: '/assets/hk_team.jpg',
        title: 'Olkapää- ja nivelvaivat',
        description: 'Niska-, hartia- ja olkapäävaivat, lapaluun viereiset kivut ja rintakivut. Raajojen hermo-, lihas- ja nivelperäiset säryt ja jäykkyydet.',
        linkText: 'Lue lisää hoidosta',
        linkHref: '/palvelut/olkapaa-ja-nivelvaivat',
      },
    ],
    secondaryLabel: 'Myös hoidettavissa',
    secondaryServices: [
      { image: '/assets/hk_hero.jpg', title: 'Urheiluvammat', linkHref: '/palvelut/urheiluvammat' },
      { image: '/assets/hk_team.jpg', title: 'Raskausajan kivut', linkHref: '/palvelut/raskausajan-kivut' },
    ],
  },
  pricing: {
    eyebrow: 'HINNASTO',
    headline: 'Selkeät hinnat',
    body: 'Meillä käy myös E-passi.',
    tabs: [
      {
        key: 'yksittainen',
        label: 'Yksittäishoidot',
        description: 'Jokainen hoito sisältää tutkimuksen ja hoidon.',
        items: [
          { duration: '1 hoito', price: '75' },
          { duration: 'Opiskelija', price: '60' },
        ],
      },
      {
        key: 'sarja',
        label: 'Sarjahoidot',
        description: 'Sarjahoidot ovat edullisempia ja tukevat pitkäjänteistä hoitoa.',
        items: [
          { duration: '3 hoidon sarja', price: '205' },
          { duration: '5 hoidon sarja', price: '310' },
        ],
      },
    ],
  },
  reviews: {
    eyebrow: 'KOKEMUKSIA',
    headline: 'Mitä asiakkaamme sanovat',
    description: 'Aidot asiakaskokemukset. 4.9/5 tähteä 103 Google-arvostelussa.',
    items: [
      { name: 'Nainen 31v', text: 'Pitkäaikaiset niskahartiaseudun säryt ovat alkaneet merkittävästi helpottamaan jo parin käyntikerran jälkeen. Yksi parhaista sijoituksista terveyteeni.', service: 'Kiropraktikkohoito' },
      { name: 'Nainen 27v', text: 'Kipu hellitti välittömästi ensimmäisen käsittelykerran ansiosta. Kyykkytekniikkani parantui huomattavasti jo muutamien kertojen jälkeen.', service: 'Kiropraktikkohoito' },
      { name: 'Nainen 28v', text: 'Kokonaisvaltaisempaa hoitoa kuin osasin odottaa. Olen saanut paljon tietoa ja apua, jolla voin itse edistää parantumistani.', service: 'Kiropraktikkohoito' },
    ],
  },
  team: {
    eyebrow: 'TUTUSTU KIROPRAKTIKKOON',
    headline: 'Kristian Ekström',
    members: [
      {
        name: 'Kristian Ekström',
        firstName: 'Kristianilta',
        title: 'Kiropraktikko',
        role: 'Kiropraktikko',
        image: '/assets/hk_team.jpg',
        avatar: '/assets/hk_team.jpg',
        bio: 'Olen kiropraktikko Kristian Ekström. Toimin kiropraktikkona vuodesta 2004 ja olen Valviran rekisteröimä terveydenhuollon ammattilainen sekä Suomen Kiropraktikkoliiton jäsen.\n\nHelsinki Kiropraktiikka on perheyritys. Vastaanottoni sijaitsee Helsingin Kampissa ja Kirkkonummella.\n\nKeskityn tuki- ja liikuntaelinten ongelmiin välittävällä otteella. Hoitokäyntiin kuuluu aina alkuhaastattelu, tutkimus ja hoito sekä tarvittaessa jatko-ohjeistus.',
        testimonial: 'Pyrin aina hoitamaan kokonaisuutta välittävällä otteella.',
      },
    ],
  },
  faq: {
    eyebrow: 'ENNEN ENSIMMÄISTÄ KÄYNTIÄ',
    headline: 'Usein kysyttyä',
    items: [
      {
        question: 'Mikä on kiropraktiikka?',
        answer: 'Kiropraktiikka on terveydenhuoltoala, joka keskittyy tuki- ja liikuntaelinten toimintahäiriöiden tutkimiseen, hoitoon ja ennaltaehkäisyyn. Kiropraktikko käyttää manuaalisia hoitotekniikoita, kuten nivelten mobilisaatiota ja manipulaatiota.',
        includePhone: false,
      },
      {
        question: 'Onko kiropraktikko turvallinen?',
        answer: 'Kyllä. Kiropraktikko on Valviran rekisteröimä terveydenhuollon ammattilainen, jolla on laaja koulutus. Hoidot ovat turvallisia ja yksilöllisesti suunniteltuja.',
        includePhone: false,
      },
      {
        question: 'Mihin kiropraktiikka auttaa?',
        answer: 'Selkä- ja niskakipuihin, päänsärkyyn, olkapäävaivoihin, iskiakseen, urheiluvammoihin, raskausajan kipuihin ja yleiseen hyvinvointiin.',
        includePhone: false,
      },
      {
        question: 'Kuinka pitkä hoitokerta on?',
        answer: 'Ensimmäinen käynti kestää noin 45–60 minuuttia (sisältää haastattelun ja tutkimuksen). Jatkokäynnit noin 15–30 minuuttia.',
        includePhone: false,
      },
      {
        question: 'Missä vastaanottonne sijaitsee?',
        answer: 'Helsinki: Runeberginkatu 8 C 17 (Kamppi). Kirkkonummi: Purokummuntie 1. Molemmissa ilmainen pysäköinti.',
        includePhone: false,
      },
    ],
  },
  finalCta: {
    backgroundImage: '/assets/hk_hero.png',
    eyebrow: 'OTA YHTEYTTÄ',
    headline: 'Kivun kanssa ei tarvitse pärjätä yksin',
    supportText: 'Ensimmäinen käynti alkaa aina huolellisella kartoituksella, jotta hoito voidaan suunnitella turvallisesti tilanteesi mukaan.',
    phone: '040 415 1611',
    phoneSupport: '',
    ctaLabel: 'Varaa aika',
  },
  footer: {
    columns: [
      {
        title: 'Hoito',
        links: [
          { label: 'Selkä- ja niskakivut', href: '/palvelut/selka-ja-niskakivut' },
          { label: 'Olkapää- ja nivelvaivat', href: '/palvelut/olkapaa-ja-nivelvaivat' },
          { label: 'Urheiluvammat', href: '/palvelut/urheiluvammat' },
          { label: 'Raskausajan kivut', href: '/palvelut/raskausajan-kivut' },
        ],
      },
      {
        title: 'Tietoa',
        links: [
          { label: 'KOKEMUKSIA', href: '#arvostelut' },
          { label: 'UKK', href: '/usein-kysyttya' },
          { label: 'BLOGI', href: '/blogi' },
          { label: 'Hinnasto', href: '#hinnasto' },
        ],
      },
      {
        title: 'Yhteystiedot',
        links: [
          { label: '040 415 1611', href: 'tel:+358404151611' },
          { label: 'Runeberginkatu 8 C, Helsinki', href: '#' },
          { label: 'Purokummuntie 1, Kirkkonummi', href: '#' },
        ],
      },
    ],
    bottom: '\u00A9 2026 Helsinki Kiropraktiikka',
    credits: 'Valviran rekisteröimä kiropraktikko',
  },
};

export function ChiropractorTemplate() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeTeamIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activePricingTab, setActivePricingTab] = useState(0);
  const [surveyStep, setSurveyStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);

  // Track scroll position for header CTA color change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getRecommendation = (answers: string[]) => {
    const [, symptom, duration] = answers;
    if (symptom === 'puutuminen' || answers[0] === 'useampi') {
      return {
        title: 'Kiropraktinen tutkimus on suositeltavaa',
        description: 'Oireidesi perusteella suosittelemme kiropraktista tutkimusta. Hermoperäiset oireet ja useamman alueen vaivat vaativat usein perusteellisempaa analyysia, jotta oikea hoitomuoto voidaan valita.',
        serviceLink: '/palvelut/selka-ja-niskakivut',
        bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
      };
    }
    if (answers[0] === 'leuka' || (answers[0] === 'niska' && symptom === 'paansarky')) {
      return {
        title: 'Kiropraktiikka voi auttaa niska- ja päänsärkyihin',
        description: 'Niska-hartiaseudun jännitykset ja niiden yhteys päänsärkyyn ovat yleisiä syitä hakeutua kiropraktiseen hoitoon. Kiropraktinen käsittely voi auttaa vähentämään lihasjännitystä ja parantamaan alueen toimintaa.',
        serviceLink: '/palvelut/selka-ja-niskakivut',
        bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
      };
    }
    if (symptom === 'urheiluvamma' || answers[3] === 'palautuminen') {
      return {
        title: 'Kiropraktiikka urheilijoille ja aktiivisille',
        description: 'Kiropraktinen hoito tukee palautumista, ylläpitää liikkuvuutta ja auttaa harjoittelun aiheuttamissa lihasjännityksissä. Sopii niin ammattiurheilijoille kuin kuntoilijoille.',
        serviceLink: '/palvelut/urheiluvammat',
        bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
      };
    }
    if (answers[0] === 'selka' && (duration === '6kk' || duration === 'toistuu' || duration === 'yli6kk')) {
      return {
        title: 'Kiropraktinen tutkimus pitkittyneisiin selkäoireisiin',
        description: 'Pitkään jatkuneet selkäoireet vaativat usein perusteellisempaa tutkimusta. Kiropraktinen lähestymistapa auttaa löytämään oireiden taustalla olevat syyt ja rakentamaan yksilöllisen hoitosuunnitelman.',
        serviceLink: '/palvelut/selka-ja-niskakivut',
        bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
      };
    }
    return {
      title: 'Kiropraktiikka voi sopia tilanteeseesi',
      description: 'Kiropraktinen hoito sopii monenlaisiin tuki- ja liikuntaelinten vaivoihin. Se auttaa lihaskireyksiin, nivelongelmiin ja edistää kehon omaa palautumiskykyä. Ensimmäinen käynti sisältää aina tutkimuksen ja hoidon.',
      serviceLink: '/palvelut/selka-ja-niskakivut',
      bookingUrl: 'https://www.helsinkikiropraktiikka.fi/ajanvaraus',
    };
  };

  const surveyQuestions = [
    {
      question: 'Missä oireesi sijaitsee?',
      options: [
        { label: 'Niska ja hartiat', value: 'niska' },
        { label: 'Selkä', value: 'selka' },
        { label: 'Leuka ja purenta', value: 'leuka' },
        { label: 'Käsi tai olkapää', value: 'kasi' },
        { label: 'Jalka tai lonkka', value: 'jalka' },
        { label: 'Useampi alue', value: 'useampi' },
      ],
    },
    {
      question: 'Mikä kuvaa tilannettasi parhaiten?',
      options: [
        { label: 'Lihaskireys', value: 'kireys' },
        { label: 'Kipu liikkuessa', value: 'kipu' },
        { label: 'Päänsärky tai migreeni', value: 'paansarky' },
        { label: 'Puutuminen tai säteilyoire', value: 'puutuminen' },
        { label: 'Urheiluvamma', value: 'urheiluvamma' },
        { label: 'Palautuminen harjoittelusta', value: 'palautuminen' },
      ],
    },
    {
      question: 'Kuinka kauan oire on jatkunut?',
      options: [
        { label: 'Alle viikon', value: 'viikko' },
        { label: '1–4 viikkoa', value: '4vko' },
        { label: '1–6 kuukautta', value: '6kk' },
        { label: 'Yli 6 kuukautta', value: 'yli6kk' },
        { label: 'Toistuu säännöllisesti', value: 'toistuu' },
      ],
    },
    {
      question: 'Mitä toivot hoidolta eniten?',
      options: [
        { label: 'Kivun lievitystä', value: 'kivunlievitys' },
        { label: 'Parempaa liikkuvuutta', value: 'liikkuvuus' },
        { label: 'Lihaskireyden helpotusta', value: 'kireydenhelpotus' },
        { label: 'Nopeampaa palautumista', value: 'palautuminen' },
        { label: 'Selvyyttä oireen syyhyn', value: 'selvyys' },
      ],
    },
  ];

  const prevReview = () => setReviewIndex((i) => (i === 0 ? templateData.reviews.items.length - 1 : i - 1));
  const nextReview = () => setReviewIndex((i) => (i === templateData.reviews.items.length - 1 ? 0 : i + 1));

  const activeTeamMember = templateData.team.members[activeTeamIndex];
  const visibleReviews = [
    templateData.reviews.items[reviewIndex % templateData.reviews.items.length],
    templateData.reviews.items[(reviewIndex + 1) % templateData.reviews.items.length],
    templateData.reviews.items[(reviewIndex + 2) % templateData.reviews.items.length],
  ];

  return (
    <div className="min-h-[100dvh] font-inter antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(167,201,211,0.78)] backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] border-b border-[rgba(255,255,255,0.18)]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-[90px] h-[86px] md:h-[96px] flex items-center justify-between">
          <Link to="/" className="relative z-10 md:-ml-8 md:mr-12">
            <img
              src="/assets/hk_logo_transparent.png"
              alt={templateData.business.name}
              className="h-8 md:h-[40px] w-auto max-w-[130px] md:max-w-[154px] transition-opacity duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 md:gap-8">
            {/* Etusivu */}
            <a
              href="#"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#EAF7F8] transition-colors duration-300"
            >
              Etusivu
            </a>

            {/* Palvelut dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#EAF7F8] transition-colors duration-300 bg-transparent border-none cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Kiropraktiikka
                <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-[240px] bg-white rounded-lg shadow-[0_8px_32px_rgba(16,42,50,0.12)] border border-[rgba(16,42,50,0.08)] py-2 overflow-hidden"
                >
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2.5 font-inter text-[13px] text-[#102A32]/80 hover:text-[#007F86] hover:bg-[rgba(16,42,50,0.03)] transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-[rgba(16,42,50,0.08)] mt-1 pt-1">
                    <a
                      href="#palvelut"
                      className="block px-4 py-2.5 font-inter text-[12px] font-semibold uppercase tracking-wider text-[#0E4745]/80 hover:text-[#007F86] transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      Kaikki palvelut →
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Hinnasto */}
            <a
              href="#hinnasto"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#EAF7F8] transition-colors duration-300"
            >
              Hinnasto
            </a>

            {/* Yhteystiedot */}
            <a
              href="#yhteystiedot"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#EAF7F8] transition-colors duration-300"
            >
              Yhteystiedot
            </a>

            {/* Extra links */}
            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/70 hover:text-[#EAF7F8] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[13px] font-semibold uppercase tracking-[0.005em] text-white/70 hover:text-[#EAF7F8] transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}

            {/* CTA Button */}
            <a
              href={templateData.navigation.ctaButton.href}
              className={`inline-flex items-center justify-center px-8 py-3 rounded font-inter text-[13px] font-semibold tracking-[0.02em] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap ${
                scrolled
                  ? 'bg-[#00B8B5] text-white border border-[#00B8B5] hover:bg-[#009E9B] hover:border-[#009E9B]'
                  : 'bg-[rgba(255,255,255,0.16)] text-white border border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.24)]'
              }`}
            >
              {templateData.navigation.ctaButton.label}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#A7C9D3] border-t border-[rgba(16,42,50,0.08)] px-5 py-6"
          >
            <a href="#" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/90 py-3 border-b border-[rgba(16,42,50,0.08)]">Etusivu</a>

            {/* Mobile services dropdown */}
            <div className="border-b border-[rgba(16,42,50,0.08)]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/90 bg-transparent border-none cursor-pointer"
              >
                <span>Kiropraktiikka</span>
                <ChevronDown size={16} strokeWidth={1.5} className={`text-[#102A32]/50 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 pl-3">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 font-inter text-[13px] text-[#102A32]/70 hover:text-[#0E6D73] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a href="#palvelut" onClick={() => setMobileOpen(false)} className="block py-2 font-inter text-[12px] font-semibold uppercase tracking-wider text-[#0E4745]/70 hover:text-[#0E6D73]">Kaikki palvelut →</a>
                </div>
              )}
            </div>

            <a href="#hinnasto" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/90 py-3 border-b border-[rgba(16,42,50,0.08)]">Hinnasto</a>
            <a href="#yhteystiedot" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/90 py-3 border-b border-[rgba(16,42,50,0.08)]">Yhteystiedot</a>

            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/70 py-3 border-b border-[rgba(16,42,50,0.08)] last:border-0"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#102A32]/70 py-3 border-b border-[rgba(16,42,50,0.08)] last:border-0"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="mt-4 pt-4 border-t border-[rgba(16,42,50,0.08)]">
              <a
                href={templateData.navigation.ctaButton.href}
                className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded font-inter text-[14px] font-semibold tracking-[0.02em] bg-[#0E4745] text-white hover:bg-[#082F2D] transition-colors duration-300 whitespace-nowrap"
              >
                {templateData.navigation.ctaButton.label}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${templateData.hero.backgroundImage})`, filter: 'contrast(1.04)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(80,135,145,0.46) 0%, rgba(10,60,58,0.56) 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px', opacity: 0.03 }} />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-[60px]">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#D8EBEF] mb-3"
          >
            {templateData.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-geist text-[32px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] leading-[1.02] tracking-[-0.035em] mb-5 max-w-[900px]"
          >
            {templateData.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-[13px] md:text-[15px] text-[rgba(255,255,255,0.82)] leading-[1.7] mb-9 max-w-[580px]"
          >
            {templateData.hero.subheadline}
          </motion.p>

          {/* CTA pair */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-9"
          >
            <a
              href={templateData.hero.ctaPrimary.href}
              className="inline-flex items-center justify-center px-12 py-4 rounded font-inter text-[14px] font-bold tracking-[0.01em] bg-[#00B8B5] text-white border border-[#00B8B5] shadow-[0_4px_20px_rgba(14,71,69,0.18)] hover:-translate-y-1 hover:bg-[#009E9B] hover:border-[#009E9B] transition-all duration-300 whitespace-nowrap"
            >
              {templateData.hero.ctaPrimary.label}
            </a>
            <a
              href={templateData.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded font-inter text-[13px] font-medium tracking-[0.06em] text-[#FFFFFF]/80 border border-[#FFFFFF]/25 hover:border-[#FFFFFF]/50 hover:text-[#FFFFFF] transition-all duration-300 whitespace-nowrap"
            >
              {templateData.hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Stat cards — premium glass */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center justify-center gap-4 md:gap-5"
          >
            {templateData.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center px-5 py-4 md:px-6 md:py-5 rounded-[14px]"
                style={{
                  background: 'rgba(216,235,239,0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(216,235,239,0.22)',
                }}
              >
                <p className="font-inter text-[21px] md:text-[25px] font-semibold text-[#FFFFFF] leading-none mb-1.5">{stat.value}</p>
                <p className="font-inter text-[10px] text-[#D8EBEF] tracking-[0.06em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is Chiropractic — Editorial */}
      <section className="bg-[#EEF3F4] pt-14 md:pt-20 pb-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#00AFAE] mb-4">
                  TIETOA KIROPRAKTIIKASTA
                </p>
                <h2 className="font-geist text-[30px] md:text-[38px] lg:text-[44px] text-[#102A32] leading-[1.08] mb-6 whitespace-nowrap">
                  Mitä kiropraktiikka on?
                </h2>
                <div className="space-y-3 max-w-[480px]">
                  <p className="font-inter text-[15px] md:text-[16px] text-[rgba(16,42,50,0.78)] leading-[1.65]">
                    Kiropraktiikka on terveydenhuollon ala, joka keskittyy tuki- ja liikuntaelimistön toimintahäiriöiden tutkimiseen, hoitoon ja ennaltaehkäisyyn.
                  </p>
                  <p className="font-inter text-[15px] md:text-[16px] text-[rgba(16,42,50,0.78)] leading-[1.65]">
                    Kiropraktikko hoitaa erityisesti selän, niskan, nivelten ja hermoston toimintaan liittyviä vaivoja manuaalisilla hoitotekniikoilla. Tavoitteena ei ole vain lievittää oiretta, vaan ymmärtää mistä kipu tai liikerajoitus voi johtua.
                  </p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[rgba(16,42,50,0.68)] leading-[1.65]">
                    Hoito suunnitellaan aina yksilöllisesti asiakkaan tilanteen mukaan.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/palvelut/selka-ja-niskakivut"
                    className="group inline-flex items-center gap-2 font-inter text-[13px] font-semibold text-[#0E4745] hover:text-[#00AFAE] transition-colors duration-300"
                  >
                    <span className="border-b border-[#0E4745]/25 pb-0.5 group-hover:border-[#00AFAE]/40">Lue lisää kiropraktiikasta</span>
                    <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Image */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-[16px] overflow-hidden shadow-[0_12px_40px_rgba(16,42,50,0.08)]">
                <img src="/assets/hk_hero.jpg" alt="Kiropraktinen hoito" className="w-full h-[240px] md:h-[320px] object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Symptoms — Editorial Premium */}
      <section className="bg-[#E8F3F1] pt-14 md:pt-20 pb-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#0E4745] mb-4">
                YLEISIMPIÄ OIREITA
              </p>
              <h2 className="font-geist text-[28px] md:text-[36px] text-[#102A32] tracking-[-0.025em] leading-[1.08] mb-5">
                Milloin kiropraktikolle?
              </h2>
              <p className="font-inter text-[15px] text-[rgba(16,42,50,0.65)] leading-[1.7] max-w-[480px] mx-auto">
                Kiropraktiikka voi auttaa esimerkiksi seuraavissa tilanteissa.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
              {[
                'Selkä- ja niskakivut',
                'Iskias ja säteilyoireet',
                'Päänsärky ja huimaus',
                'Olkapää- ja hartiavaivat',
                'Urheiluvammat ja suorituskyky',
                'Raskauden ajan kiputilat',
              ].map((symptom, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-5 md:py-6 border-b border-[rgba(16,42,50,0.06)]"
                >
                  <div className="shrink-0 w-[7px] h-[7px] rounded-full bg-[#0E4745]/30" />
                  <span className="font-inter text-[17px] md:text-[18px] font-medium text-[#102A32] tracking-[0.01em] leading-[1.4]">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Symptom Survey — Premium Inline CTA */}
          <div className="mt-10 md:mt-12 max-w-[540px] mx-auto">
            {surveyStep === 0 ? (
              /* Intro view */
              <div className="text-center">
                <p className="font-inter text-[13px] text-[rgba(16,42,50,0.55)] leading-[1.7] mb-5">
                  Etkö löytänyt omaa oirettasi? Vastaa muutamaan kysymykseen ja selvitä, voisiko kiropraktiikka sopia tilanteeseesi.
                </p>
                <button
                  onClick={() => { setSurveyStep(1); setSurveyAnswers([]); }}
                  className="group inline-flex items-center gap-2 font-inter text-[13px] font-semibold text-[#0E4745] hover:text-[#00AFAE] transition-colors duration-300 cursor-pointer"
                >
                  <span className="border-b border-[#0E4745]/25 pb-0.5 group-hover:border-[#00AFAE]/40">Tee oirekysely</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ) : surveyStep <= 4 ? (
              /* Question views */
              <div>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(16,42,50,0.50)]">Vaihe {surveyStep} / 4</span>
                  <div className="flex-1 h-[1px] bg-[rgba(16,42,50,0.08)] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0E4745] rounded-full transition-all duration-500" style={{ width: `${(surveyStep / 4) * 100}%` }} />
                  </div>
                </div>
                {/* Question */}
                <h3 className="font-geist text-[20px] md:text-[22px] text-[#102A32] tracking-[-0.015em] leading-[1.35] mb-6">{surveyQuestions[surveyStep - 1].question}</h3>
                {/* Options grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {surveyQuestions[surveyStep - 1].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        const newAnswers = [...surveyAnswers];
                        newAnswers[surveyStep - 1] = opt.value;
                        setSurveyAnswers(newAnswers);
                        if (surveyStep < 4) {
                          setSurveyStep(surveyStep + 1);
                        } else {
                          setSurveyStep(5);
                        }
                      }}
                      className="text-left px-4 py-3.5 rounded-lg bg-white/60 border border-[rgba(16,42,50,0.08)] hover:bg-white hover:border-[rgba(16,42,50,0.18)] hover:shadow-[0_2px_8px_rgba(16,42,50,0.04)] transition-all duration-200 cursor-pointer"
                    >
                      <span className="font-inter text-[13px] text-[#102A32]">{opt.label}</span>
                    </button>
                  ))}
                </div>
                {/* Back button */}
                {surveyStep > 1 && (
                  <button
                    onClick={() => { setSurveyStep(surveyStep - 1); }}
                    className="font-inter text-[12px] text-[rgba(16,42,50,0.55)] hover:text-[#102A32] transition-colors cursor-pointer"
                  >
                    ← Takaisin
                  </button>
                )}
              </div>
            ) : (
              /* Result view */
              (() => {
                const rec = getRecommendation(surveyAnswers);
                return (
                  <div className="text-center">
                    <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(16,42,50,0.50)] mb-4">KIROPRAKTIIKKA VOISI AUTTAA</p>
                    <h3 className="font-geist text-[22px] md:text-[24px] text-[#102A32] tracking-[-0.015em] leading-[1.3] mb-4">{rec.title}</h3>
                    <p className="font-inter text-[14px] text-[rgba(16,42,50,0.72)] leading-[1.75] mb-8">{rec.description}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={rec.bookingUrl}
                        className="inline-flex items-center justify-center px-10 py-3.5 rounded font-inter text-[13px] font-bold tracking-[0.06em] bg-[#0E4745] text-white shadow-[0_2px_10px_rgba(14,71,69,0.12)] hover:-translate-y-0.5 hover:bg-[#082F2D] transition-all duration-300"
                      >
                        Varaa aika
                      </a>
                      <button
                        onClick={() => { setSurveyStep(0); setSurveyAnswers([]); }}
                        className="font-inter text-[12px] text-[rgba(16,42,50,0.55)] hover:text-[#102A32] transition-colors cursor-pointer"
                      >
                        Tee kysely uudelleen
                      </button>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      </section>

      {false && (<> {/* Services — hidden for chiropractor demo */}
      <section id="palvelut" className="bg-[#D8EBEF] pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[rgba(16,42,50,0.75)] mb-5">{templateData.services.eyebrow}</p>
              <h2 className="font-geist text-[26px] md:text-[32px] text-[#102A32] tracking-[-0.025em] leading-[1.35] mb-6">{templateData.services.headline}</h2>
              <p className="font-inter text-[14px] text-[#102A32] leading-[1.75] max-w-[440px] mx-auto">{templateData.services.body}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {templateData.services.primaryServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link to={service.linkHref} className="group block rounded-[12px] overflow-hidden bg-[#D8EBEF] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
                  <div className="relative overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" className="w-full aspect-[16/10.5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(86,86,86,0.018) 0%, transparent 40%, rgba(222,222,222,0.15) 100%)', mixBlendMode: 'multiply' }} />
                  </div>
                  <div className="px-8 pt-7 pb-9 md:px-10 md:pt-8 md:pb-10">
                    <h3 className="font-geist text-[26px] md:text-[28px] text-[#102A32] mb-4">{service.title}</h3>
                    <p className="font-inter text-[14px] text-[rgba(16,42,50,0.75)] leading-[1.75] mb-8 max-w-[340px]">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-inter text-[13px] text-[#102A32]/45 group-hover:text-[rgba(16,42,50,0.75)] transition-colors duration-300">
                      {service.linkText}
                      <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-18 md:mt-22 pt-12 border-t border-[#0E4745]/[0.04]">
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(16,42,50,0.75)]/70 text-center mb-10">{templateData.services.secondaryLabel}</p>
              <div className="grid grid-cols-3 gap-4 md:gap-5">
                {templateData.services.secondaryServices.map((service, i) => (
                  <Link key={i} to={service.linkHref} className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                    <div className="relative overflow-hidden aspect-[4/3.2]">
                      <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" style={service.title === 'Dry Needling' ? { objectPosition: 'left center' } : undefined} />
                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(43,43,43,0.3) 100%)' }} />
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <p className="font-geist text-[15px] md:text-[17px] text-white drop-shadow-[0_1px_4px_rgba(14,71,69,0.28)]">{service.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </>)} {/* End hidden Services */}

      {/* Team — Light Premium */}
      <section id="asiantuntijat" className="bg-[#F8FAFA] pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Image */}
            <ScrollReveal>
              <div className="pt-4 md:pt-8 h-full flex flex-col">
                <div className="rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] max-w-[60%] mx-auto">
                  <img
                    src="/assets/hk_team.png"
                    alt={activeTeamMember.name}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <ScrollReveal delay={0.15}>
              <div className="pt-0 md:pt-2">
                {/* Eyebrow */}
                <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#0E4745] mb-3">
                  KUKA SINUA HOITAA?
                </p>

                {/* Name */}
                <h2 className="font-geist text-[36px] md:text-[48px] text-[#102A32] leading-[0.95] font-normal mb-2">
                  Kristian Ekström
                </h2>

                {/* Subtitle */}
                <p className="font-inter text-[14px] md:text-[16px] text-[#102A32] font-normal mb-6 md:mb-8">
                  Kiropraktikko | Valviran rekisteröimä | Vuodesta 2004
                </p>

                {/* Body text */}
                <div className="space-y-3 mb-6 md:mb-8 max-w-[580px]">
                  <p className="font-inter text-[15px] text-[rgba(16,42,50,0.82)] leading-[1.6]">
                    Olen Kristian Ekström, kiropraktikko Helsingissä ja Kirkkonummella. Olen toiminut kiropraktikkona vuodesta 2004 ja erityisosaamistani ovat tuki- ja liikuntaelinongelmien kokonaisvaltainen hoito sekä kivun syiden selvittäminen.
                  </p>
                  <p className="font-inter text-[15px] text-[rgba(16,42,50,0.82)] leading-[1.6]">
                    Hoidossa tavoitteeni on ymmärtää, mistä kipu tai liikerajoitus voi johtua, ei vain lievittää yksittäistä oiretta. Hoidan kaikenikäisiä asiakkaita lapsista aikuisiin ja urheilijoihin. Toimimme perheyrityksenä ja vastaanotolla saat manuaalisen hoidon lisäksi myös tietoa, jolla voit itse tukea paranemistasi.
                  </p>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-inter text-[14px] font-medium text-[#0E4745] hover:opacity-75 transition-opacity duration-300"
                >
                  <span className="border-b border-[#0E4745]/30 pb-0.5">Lue lisää Kristianista</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Media Authority — Compact Video Nosto */}
      <section className="bg-[#E6F3F1] pt-[48px] md:pt-[60px] pb-[48px] md:pb-[60px] px-6 md:px-12">
        <div className="max-w-[1180px] mx-auto">
          {/* Main two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center mb-12 md:mb-14">
            {/* Left: Text content */}
            <ScrollReveal>
              <div className="md:pl-[8%] md:pr-0">
                {/* Eyebrow */}
                <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#00AFAE] mb-4">
                  MEDIASSA
                </p>
                {/* Headline */}
                <h2 className="font-geist text-[36px] md:text-[46px] lg:text-[50px] text-[#102A32] tracking-[-0.025em] leading-[1.08] font-normal mb-5 max-w-[520px]">
                  Kristian Huomenta Suomen vieraana
                </h2>
                {/* Body */}
                <p className="font-inter text-[16px] md:text-[17px] text-[rgba(16,42,50,0.78)] leading-[1.65] max-w-[520px] mb-7">
                  Kristian Ekström on ollut Huomenta Suomen vieraana keskustelemassa siitä, mitä kiropraktiikka on ja miten se voi auttaa tuki- ja liikuntaelinten vaivoissa.
                </p>
                {/* CTA */}
                <a
                  href="https://www.youtube.com/watch?v=OuP6DYw07aM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-inter text-[13px] md:text-[14px] font-semibold text-[#0E4745] hover:text-[#00AFAE] transition-colors duration-300"
                >
                  <span className="border-b border-[#0E4745]/25 pb-0.5 group-hover:border-[#00AFAE]/40">Katso video</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* Right: Video thumbnail */}
            <ScrollReveal delay={0.15}>
              <a
                href="https://www.youtube.com/watch?v=OuP6DYw07aM"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(16,42,50,0.10)] aspect-video"
              >
                <img
                  src="/assets/hk_media_video.png"
                  alt="Kristian Ekström Huomenta Suomen vieraana"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68px] h-[68px] md:w-[74px] md:h-[74px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105">
                    <Play size={26} strokeWidth={0} fill="#0E4745" className="ml-1 text-[#0E4745]" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span className="inline-block px-3 py-[6px] md:px-3.5 md:py-2 rounded-full bg-[#0E4745]/80 backdrop-blur-sm font-inter text-[12px] md:text-[13px] font-medium text-white tracking-wide">
                    Huomenta Suomi
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* Media logos row */}
          <ScrollReveal delay={0.2}>
            <div className="border-t border-[#0E4745]/[0.08] pt-6 md:pt-7">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[rgba(16,42,50,0.45)] whitespace-nowrap">
                  Nähty mediassa
                </p>
                <div className="flex items-center justify-center gap-5 md:gap-7 flex-wrap">
                  {[
                    { src: '/assets/logo_yle.png', alt: 'Yle' },
                    { src: '/assets/logo_mtv3.png', alt: 'MTV3' },
                    { src: '/assets/logo_iltasanomat.png', alt: 'Ilta-Sanomat' },
                    { src: '/assets/logo_loop.png', alt: 'Loop' },
                    { src: '/assets/logo_iskelma.png', alt: 'Iskelmä' },
                  ].map((logo, i) => (
                    <img
                      key={i}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-[18px] md:h-[22px] w-auto opacity-40 grayscale hover:opacity-60 transition-opacity duration-300 object-contain"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="arvostelut" className="bg-[#D8EBEF] pt-16 md:pt-24 pb-14 md:pb-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#0E4745] mb-5">{templateData.reviews.eyebrow}</p>
              <h2 className="font-geist text-[26px] md:text-[32px] text-[#102A32] tracking-[-0.025em] leading-[1.35] mb-4">{templateData.reviews.headline}</h2>
              <p className="font-inter text-[14px] text-[rgba(16,42,50,0.76)] leading-[1.7] max-w-[420px] mx-auto">{templateData.reviews.description}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              {/* Arrow buttons on sides */}
              <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-0 right-0 z-10 pointer-events-none">
                <button onClick={prevReview} className="pointer-events-auto w-10 h-10 rounded-full border border-[rgba(16,42,50,0.14)] bg-white/80 backdrop-blur-sm flex items-center justify-center text-[rgba(16,42,50,0.45)] hover:text-[#0E4745] hover:border-[#0E4745]/30 transition-colors cursor-pointer -ml-5">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} className="pointer-events-auto w-10 h-10 rounded-full border border-[rgba(16,42,50,0.14)] bg-white/80 backdrop-blur-sm flex items-center justify-center text-[rgba(16,42,50,0.45)] hover:text-[#0E4745] hover:border-[#0E4745]/30 transition-colors cursor-pointer -mr-5">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile arrows */}
              <div className="flex md:hidden justify-center gap-3 mb-4">
                <button onClick={prevReview} className="w-10 h-10 rounded-full border border-[rgba(16,42,50,0.14)] flex items-center justify-center text-[rgba(16,42,50,0.45)] hover:text-[#0E4745] hover:border-[#0E4745]/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} className="w-10 h-10 rounded-full border border-[rgba(16,42,50,0.14)] flex items-center justify-center text-[rgba(16,42,50,0.45)] hover:text-[#0E4745] hover:border-[#0E4745]/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {visibleReviews.map((review, i) => (
                  <div key={`${reviewIndex}-${i}`} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                    <div className="bg-white rounded-[18px] p-8 md:p-9 shadow-[0_18px_45px_rgba(16,42,50,0.08)] h-full flex flex-col border border-[rgba(16,42,50,0.06)]">
                      <p className="font-inter text-[14px] text-[rgba(16,42,50,0.86)] leading-[1.75] italic flex-1">&ldquo;{review.text}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[rgba(16,42,50,0.08)]">
                        <div className="w-10 h-10 rounded-full bg-[#E8F3F1] flex items-center justify-center">
                          <span className="font-geist text-[15px] text-[#0E4745]">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-inter text-[14px] font-bold text-[#0E4745]">{review.name}</p>
                          <p className="font-inter text-[11px] text-[#5E747A]">{review.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 md:mt-10">
                <a
                  href="https://www.google.com/search?q=helsinki+kiropraktiikka+arvostelut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded font-inter text-[13px] font-semibold tracking-[0.02em] bg-[#0E4745] text-white hover:bg-[#082F2D] transition-all duration-300"
                >
                  Lue kaikki arvostelut
                </a>
                <a
                  href="https://www.google.com/search?q=helsinki+kiropraktiikka+arvostelut#lrd=0x46920f7c7c0e3b1:0x1c0b5c0e5c0e5c0e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded font-inter text-[13px] font-semibold tracking-[0.02em] text-[#0E4745] border border-[rgba(16,42,50,0.20)] hover:bg-[#E8F3F1] transition-all duration-300"
                >
                  Jätä arvostelu
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="hinnasto" className="bg-[#F8FAFA] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[rgba(16,42,50,0.75)] mb-5">{templateData.pricing.eyebrow}</p>
              <h2 className="font-geist text-[26px] md:text-[30px] text-[#102A32] leading-[1.35] mb-4">{templateData.pricing.headline}</h2>
              <p className="font-inter text-[14px] text-[#102A32]/80 leading-[1.75] max-w-[400px] mx-auto">{templateData.pricing.body}</p>
            </div>
          </ScrollReveal>

          {/* Tab selector */}
          <ScrollReveal delay={0.1}>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-8 pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {templateData.pricing.tabs.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => setActivePricingTab(i)}
                  className={`shrink-0 px-4 py-2.5 rounded-lg font-inter text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer border ${
                    i === activePricingTab
                      ? 'bg-[#0E4745] text-white border-[#0E4745] shadow-[0_2px_8px_rgba(14,71,69,0.18)]'
                      : 'bg-transparent text-[#102A32] border-[#0E4745]/[0.18] hover:bg-[#D8EBEF] hover:text-[#102A32]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active tab content */}
          <ScrollReveal delay={0.15}>
            <div className="mb-8">
              <p className="font-inter text-[13px] text-[rgba(16,42,50,0.75)] mb-4">{templateData.pricing.tabs[activePricingTab].description}</p>
              <div className="border-t border-[#0E4745]/[0.1]">
                {templateData.pricing.tabs[activePricingTab].items.map((item, ii) => (
                  <div
                    key={ii}
                    className={`flex justify-between items-baseline py-4 ${
                      ii < templateData.pricing.tabs[activePricingTab].items.length - 1 ? 'border-b border-[#0E4745]/[0.08]' : ''
                    }`}
                  >
                    <span className="font-inter text-[15px] font-medium text-[#102A32]">{item.duration}</span>
                    <span className="flex items-baseline gap-1">
                      <span className="font-inter text-[22px] font-semibold text-[#102A32]">{item.price}</span>
                      <span className="font-inter text-[13px] text-[rgba(16,42,50,0.65)]">&euro;</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Premium Trust Strip */}
      <section className="bg-[#F8FAFA] pt-6 md:pt-8 pb-8 md:pb-10 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#00AFAE] mb-5 md:mb-6">
              MIKSI HELSINKI KIROPRAKTIIKKA
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
              {[
                { num: '20+', label: 'Vuotta kokemusta' },
                { num: '4.9', label: 'Google-arvostelu', star: true },
                { num: 'Valvira', label: 'Rekisteröity ammattilainen' },
                { num: 'Helsinki', label: '& Kirkkonummi' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-0">
                  <div className="text-center md:px-8 lg:px-10">
                    <p className="font-inter text-[28px] md:text-[32px] font-semibold text-[#102A32] leading-[1]">
                      {stat.num}{stat.star && <span className="text-[#00AFAE]">★</span>}
                    </p>
                    <p className="font-inter text-[11px] md:text-[12px] text-[#5E747A] tracking-[0.04em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block w-px h-10 bg-[rgba(16,42,50,0.10)]" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-[70px] md:py-[100px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" style={{ backgroundImage: `url(${templateData.finalCta.backgroundImage})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(16,42,50,0.62) 0%, rgba(14,71,69,0.66) 100%)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} />
        <div className="relative z-10 w-full max-w-[520px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-inter text-[13px] font-bold uppercase tracking-[0.16em] text-[#D8EBEF] mb-3">{templateData.finalCta.eyebrow}</p>
              <h2 className="font-geist text-[28px] md:text-[36px] text-[#FFFFFF] leading-[1.2] mb-4">{templateData.finalCta.headline}</h2>
              <p className="font-inter text-[14px] md:text-[15px] text-[rgba(255,255,255,0.84)] leading-[1.65] mb-7 max-w-[420px] mx-auto">{templateData.finalCta.supportText}</p>

              <div className="mb-5">
                <a href={templateData.business.bookingUrl} className="inline-flex items-center justify-center px-14 py-4 rounded font-inter text-[14px] font-bold tracking-[0.01em] bg-[#00B8B5] text-white border border-[#00B8B5] shadow-[0_4px_20px_rgba(0,184,181,0.18)] hover:-translate-y-0.5 hover:bg-[#009E9B] hover:border-[#009E9B] transition-all duration-300 w-full max-w-[280px]">
                  {templateData.finalCta.ctaLabel}
                </a>
              </div>

              <div className="mb-6">
                <a href={templateData.business.phoneLink} className="inline-flex items-center justify-center gap-2 font-inter text-[14px] font-semibold text-white tracking-wide no-underline hover:text-[#D8EBEF] transition-colors duration-300">
                  <Phone size={14} strokeWidth={1.5} />
                  Soita {templateData.finalCta.phone}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <span className="font-inter text-[12px] text-[rgba(255,255,255,0.72)] tracking-wide">★ 4.9/5 Google-arvostelut &bull; Valviran rekisteröimä &bull; Kiropraktikkona vuodesta 2004</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="yhteystiedot" className="bg-[#082F2D] border-t border-[#FFFFFF]/[0.08] pt-14 md:pt-16 pb-10 md:pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
            <div>
              <h3 className="font-geist text-[18px] text-[#FFFFFF] mb-1">{templateData.business.name}</h3>
              <p className="font-inter text-[13px] text-[rgba(255,255,255,0.78)]/60 mb-4">{templateData.business.tagline}</p>
              <ul className="space-y-2">
                <li className="font-inter text-[14px] text-[rgba(255,255,255,0.78)] flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" /> {templateData.business.address}
                </li>
                <li>
                  <a href={templateData.business.phoneLink} className="font-inter text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Phone size={14} className="shrink-0" /> {templateData.business.phone}
                  </a>
                </li>
                <li>
                  <a href={templateData.business.emailLink} className="font-inter text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Mail size={14} className="shrink-0" /> {templateData.business.email}
                  </a>
                </li>
              </ul>
            </div>
            {templateData.footer.columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-inter text-[13px] font-semibold uppercase tracking-wider text-[#FFFFFF] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="font-inter text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</Link>
                      ) : (
                        <a href={link.href} className="font-inter text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="border-t border-[#D8EBEF]/[0.16] pt-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.12em] text-[#D8EBEF]/60 mb-2">Helsinki</p>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.0!2d24.9254542!3d60.1705103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a3408ca804f%3A0x42234a9323be342a!2sRuneberginkatu%208c%2017%2C%2000100%20Helsinki!5e0!3m2!1sfi!2sfi!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Helsinki Kiropraktiikka - Helsinki"
                  />
                </div>
              </div>
              <div>
                <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.12em] text-[#D8EBEF]/60 mb-2">Kirkkonummi</p>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.0!2d24.429477!3d60.116663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468d8d8d1479a8a3%3A0x47fc5ed68beb39dc!2sPurokummuntie%201%2C%2002400%20Kirkkonummi!5e0!3m2!1sfi!2sfi!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Helsinki Kiropraktiikka - Kirkkonummi"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D8EBEF]/[0.16] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-inter text-[12px] text-[rgba(255,255,255,0.78)]/45">{templateData.footer.bottom}</p>
            <p className="font-inter text-[12px] text-[rgba(255,255,255,0.78)]/35">{templateData.footer.credits}</p>
            <div className="flex gap-4">
              <a href={templateData.business.instagramUrl} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#102A32]/70 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.facebookUrl} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#FFFFFF]/70 transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.phoneLink} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#FFFFFF]/70 transition-colors"><Phone size={18} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
