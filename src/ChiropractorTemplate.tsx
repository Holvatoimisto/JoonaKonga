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
} from 'lucide-react';

const serviceDropdownItems = [
  { label: 'Selkä- ja niskakivut', href: '/palvelut/selka-ja-niskakivut' },
  { label: 'Olkapää- ja nivelvaivat', href: '/palvelut/olkapaa-ja-nivelvaivat' },
  { label: 'Urheiluvammat', href: '/palvelut/urheiluvammat' },
  { label: 'Raskausajan kivut', href: '/palvelut/raskausajan-kivut' },
];

const templateData = {
  business: {
    name: 'Kiropraktikko Joona Konga',
    tagline: 'Velnas Hyvinvointikeskus, Laajasalo',
    fullTagline: 'KIROPRAKTIKKO JOONA KONGA',
    address: 'Yliskylän puistokatu 11, 00840 Helsinki',
    address2: '',
    phone: '045 676 8408',
    phoneLink: 'tel:+358456768408',
    email: 'joona.konga@gmail.com',
    emailLink: 'mailto:joona.konga@gmail.com',
    bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
    googleReviewUrl: 'https://www.google.com/search?q=Kiropraktikko+Joona+Konga+/+VELNAS+Arvostelut',
    googleMapsUrl: 'https://maps.google.com/?q=Yliskyl%C3%A4n+puistokatu+11,+00840+Helsinki',
    facebookUrl: 'https://www.facebook.com/kiropraktikkojoona',
    instagramUrl: 'https://www.instagram.com/kiropraktikkojoona',
  },
  navigation: {
    logo: '/assets/jk_logo.png',
    logoDark: '/assets/jk_logo.png',
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
    ctaButton: { label: 'Varaa aika', href: 'https://varaa.timma.fi/velnas#kiropraktiikka' },
  },
  hero: {
    backgroundImage: '/assets/jk_hero.webp',
    eyebrow: 'KIROPRAKTIKKO JOONA KONGA',
    headline: 'Asiantuntevaa kiropraktiikkaa Helsingin Laajasalossa',
    subheadline: 'Valviran rekisteröimä kiropraktikko Velnas Hyvinvointikeskuksessa Laajasalossa. Yli 10 vuoden kokemus selkä- ja niskakipujen, päänsärkyjen ja urheiluvammojen hoidosta.',
    ctaPrimary: { label: 'Varaa aika', href: 'https://varaa.timma.fi/velnas#kiropraktiikka' },
    ctaSecondary: { label: 'Soita 045 676 8408', href: 'tel:+358456768408' },
    stats: [
      { value: '5.0', label: 'Google (82 arvostelua)' },
      { value: '2014', label: 'Vuodesta lähtien' },
      { value: 'Laajasalo', label: 'Helsinki' },
    ],
  },
  intro: {
    text: 'Kiropraktikko erikoistunut selkä- ja niskakipuihin, päänsärkyihin ja tuki- ja liikuntaelinten vaivoihin',
    backgroundColor: '#212121',
  },
  services: {
    eyebrow: 'HOITO',
    headline: 'Miten kiropraktikko voi auttaa sinua?',
    body: 'Kiropraktikkona keskityn tuki- ja liikuntaelinten ongelmiin, niiden tehokkaaseen hoitoon sekä terveyden edistämiseen. Yksilöllisesti suunniteltua hoitoa Laajasalossa.',
    reassurance: 'Etkö ole varma voisiko kiropraktikko auttaa sinua? Soita 045 676 8408 ja kysy.',
    primaryServices: [
      {
        image: '/assets/jk_hero.webp',
        title: 'Selkä- ja niskakivut',
        description: 'Ylä-, keski- ja alaselkäkipu, niskahartiaseudun vaivat, iskias ja käsiin säteilevät kivut. Niska- ja hartiaperäinen päänsärky ja niskaperäinen huimaus.',
        linkText: 'Lue lisää hoidosta',
        linkHref: '/palvelut/selka-ja-niskakivut',
      },
      {
        image: '/assets/jk_img2.jpg',
        title: 'Olkapää-, lonkka- ja nivelvaivat',
        description: 'Niska-, hartia- ja olkapäävaivat, lonkkakivut, lapaluun viereiset kivut ja rintakivut. Raajojen hermo-, lihas- ja nivelperäiset säryt, puutumisoireet ja jäykkyydet.',
        linkText: 'Lue lisää hoidosta',
        linkHref: '/palvelut/olkapaa-ja-nivelvaivat',
      },
    ],
    secondaryLabel: 'Myös hoidettavissa',
    secondaryServices: [
      { image: '/assets/jk_img3.jpg', title: 'Urheiluvammat', linkHref: '/palvelut/urheiluvammat' },
      { image: '/assets/jk_joona.jpg', title: 'Raskausajan kivut', linkHref: '/palvelut/raskausajan-kivut' },
    ],
  },
  pricing: {
    eyebrow: 'HINNASTO',
    headline: 'Selkeät hinnat',
    body: 'Meillä käyvät myös E-passi, Smartum ja Edenred.',
    tabs: [
      {
        key: 'yksittainen',
        label: 'Kiropraktiikka',
        description: 'Ensimmäinen käynti sisältää aina haastattelun, tutkimuksen ja hoidon.',
        items: [
          { duration: 'Ensikäynti 45 min', price: '90' },
          { duration: 'Jatkokäynti 30 min', price: '80' },
          { duration: 'Jatkokäynti 15 min', price: '65' },
        ],
      },
      {
        key: 'lahjakortti',
        label: 'Lahjakortit',
        description: 'Velnaksen lahjakortti on mukava lahjaidea läheiselle.',
        items: [
          { duration: 'Lahjakortti Velnakseen (alk.)', price: '65' },
        ],
      },
    ],
  },
  reviews: {
    eyebrow: 'KOKEMUKSIA',
    headline: 'Mitä asiakkaamme sanovat',
    description: 'Aidot asiakaskokemukset. 5.0/5 tähteä 82 Google-arvostelussa.',
    items: [
      { name: 'Timo', avatar: '', text: 'Käyntini jälkeen tunsin ensimmäistä kertaa onnettomuuteni jälkeen, miltä kivuton ja rentoutunut kroppa tuntuu.', service: 'Laskuvarjourheilija' },
      { name: 'Kayleigh', avatar: '', text: 'Chiropractic and Joona surpassed my expectation on the first visit and I have continually visited since then.', service: 'Cheerleading-maailmanmestari' },
      { name: 'Mintie', avatar: '', text: 'I\u2019m not kidding if I say if it were not for Joona, I would not have been able to finish writing my book.', service: 'Kirjailija' },
    ],
  },
  team: {
    eyebrow: 'TUTUSTU KIROPRAKTIKKOON',
    headline: 'Joona Konga',
    members: [
      {
        name: 'Joona Konga',
        firstName: 'Joonalta',
        title: 'Kiropraktikko',
        role: 'Kiropraktikko',
        image: '/assets/jk_joona.jpg',
        avatar: '/assets/jk_joona.jpg',
        bio: 'Olen kiropraktikko Joona Konga. Valmistuin kiropraktikoksi vuonna 2014 (MChiro, University of South Wales) ja olen Valviran rekisteröimä terveydenhuollon ammattilainen.\n\nVastaanottoni sijaitsee Velnas Hyvinvointikeskuksessa Helsingin Laajasalossa. Erityisosaamistani ovat selkä- ja niskakivut, olkapää- ja lonkkavaivat, puutumisoireet sekä päänsäryt.\n\nHoito sisältää aina huolellisen tutkimuksen, yksilöllisesti suunnitellun käsittelyn ja tarvittaessa harjoitteet paranemisen tueksi.',
        testimonial: 'Tavoitteeni on löytää vaivan syy ja hoitaa sitä turvallisesti ja tehokkaasti.',
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
        answer: 'Vastaanotto sijaitsee Velnas Hyvinvointikeskuksessa Laajasalossa, Yliskylän puistokatu 11, Kauppakeskus Saaren vastapäätä. Alueella on hyvin kadunvarsipysäköintiä.',
        includePhone: false,
      },
    ],
  },
  finalCta: {
    backgroundImage: '/assets/jk_img2.jpg',
    eyebrow: 'OTA YHTEYTTÄ',
    headline: 'Kivun kanssa ei tarvitse pärjätä yksin',
    supportText: 'Ensimmäinen käynti alkaa aina huolellisella kartoituksella, jotta hoito voidaan suunnitella turvallisesti tilanteesi mukaan.',
    phone: '045 676 8408',
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
          { label: '045 676 8408', href: 'tel:+358456768408' },
          { label: 'joona.konga@gmail.com', href: 'mailto:joona.konga@gmail.com' },
          { label: 'Yliskylän puistokatu 11, Helsinki', href: '#' },
        ],
      },
    ],
    bottom: '\u00A9 2026 Kiropraktikko Joona Konga',
    credits: 'Valviran rekisteröimä kiropraktikko, Velnas Hyvinvointikeskus',
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
        bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
      };
    }
    if (answers[0] === 'leuka' || (answers[0] === 'niska' && symptom === 'paansarky')) {
      return {
        title: 'Kiropraktiikka voi auttaa niska- ja päänsärkyihin',
        description: 'Niska-hartiaseudun jännitykset ja niiden yhteys päänsärkyyn ovat yleisiä syitä hakeutua kiropraktiseen hoitoon. Kiropraktinen käsittely voi auttaa vähentämään lihasjännitystä ja parantamaan alueen toimintaa.',
        serviceLink: '/palvelut/selka-ja-niskakivut',
        bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
      };
    }
    if (symptom === 'urheiluvamma' || answers[3] === 'palautuminen') {
      return {
        title: 'Kiropraktiikka urheilijoille ja aktiivisille',
        description: 'Kiropraktinen hoito tukee palautumista, ylläpitää liikkuvuutta ja auttaa harjoittelun aiheuttamissa lihasjännityksissä. Sopii niin ammattiurheilijoille kuin kuntoilijoille.',
        serviceLink: '/palvelut/urheiluvammat',
        bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
      };
    }
    if (answers[0] === 'selka' && (duration === '6kk' || duration === 'toistuu' || duration === 'yli6kk')) {
      return {
        title: 'Kiropraktinen tutkimus pitkittyneisiin selkäoireisiin',
        description: 'Pitkään jatkuneet selkäoireet vaativat usein perusteellisempaa tutkimusta. Kiropraktinen lähestymistapa auttaa löytämään oireiden taustalla olevat syyt ja rakentamaan yksilöllisen hoitosuunnitelman.',
        serviceLink: '/palvelut/selka-ja-niskakivut',
        bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
      };
    }
    return {
      title: 'Kiropraktiikka voi sopia tilanteeseesi',
      description: 'Kiropraktinen hoito sopii monenlaisiin tuki- ja liikuntaelinten vaivoihin. Se auttaa lihaskireyksiin, nivelongelmiin ja edistää kehon omaa palautumiskykyä. Ensimmäinen käynti sisältää aina tutkimuksen ja hoidon.',
      serviceLink: '/palvelut/selka-ja-niskakivut',
      bookingUrl: 'https://varaa.timma.fi/velnas#kiropraktiikka',
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
    <div className="min-h-[100dvh] font-madefor antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(22,22,26,0.72)] backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] border-b border-[rgba(255,255,255,0.18)]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-[90px] h-[86px] md:h-[96px] flex items-center justify-between">
          <Link to="/" className="relative z-10 md:-ml-8 md:mr-12">
            <img
              src="/assets/jk_logo.png"
              alt={templateData.business.name}
              className="h-8 md:h-[40px] w-auto max-w-[130px] md:max-w-[154px] transition-opacity duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 md:gap-8">
            {/* Etusivu */}
            <a
              href="#"
              className="font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#FFFFFF] transition-colors duration-300"
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
                className="flex items-center gap-1 font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#FFFFFF] transition-colors duration-300 bg-transparent border-none cursor-pointer"
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
                  className="absolute top-full left-0 mt-1 w-[240px] bg-white rounded-lg shadow-[0_8px_32px_rgba(47,43,54,0.12)] border border-[rgba(47,43,54,0.08)] py-2 overflow-hidden"
                >
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2.5 font-madefor text-[13px] text-[#2F2B36]/80 hover:text-[#000000] hover:bg-[rgba(47,43,54,0.03)] transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-[rgba(47,43,54,0.08)] mt-1 pt-1">
                    <a
                      href="#palvelut"
                      className="block px-4 py-2.5 font-madefor text-[12px] font-semibold uppercase tracking-wider text-[#212121]/80 hover:text-[#000000] transition-colors duration-200"
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
              className="font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#FFFFFF] transition-colors duration-300"
            >
              Hinnasto
            </a>

            {/* Yhteystiedot */}
            <a
              href="#yhteystiedot"
              className="font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/90 hover:text-[#FFFFFF] transition-colors duration-300"
            >
              Yhteystiedot
            </a>

            {/* Extra links */}
            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/70 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-madefor text-[13px] font-semibold uppercase tracking-[0.005em] text-white/70 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}

            {/* CTA Button */}
            <a
              href={templateData.navigation.ctaButton.href}
              className={`inline-flex items-center justify-center px-8 py-3 rounded font-madefor text-[13px] font-semibold tracking-[0.02em] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap ${
                scrolled
                  ? 'bg-[#FFFFFF] text-[#212121] border border-[#FFFFFF] hover:bg-[#EDEDED] hover:border-[#EDEDED]'
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
            className="md:hidden absolute top-full left-0 right-0 bg-[#F7F7F7] border-t border-[rgba(47,43,54,0.08)] px-5 py-6"
          >
            <a href="#" onClick={() => setMobileOpen(false)} className="block font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/90 py-3 border-b border-[rgba(47,43,54,0.08)]">Etusivu</a>

            {/* Mobile services dropdown */}
            <div className="border-b border-[rgba(47,43,54,0.08)]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/90 bg-transparent border-none cursor-pointer"
              >
                <span>Kiropraktiikka</span>
                <ChevronDown size={16} strokeWidth={1.5} className={`text-[#2F2B36]/50 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 pl-3">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 font-madefor text-[13px] text-[#2F2B36]/70 hover:text-[#000000] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a href="#palvelut" onClick={() => setMobileOpen(false)} className="block py-2 font-madefor text-[12px] font-semibold uppercase tracking-wider text-[#212121]/70 hover:text-[#000000]">Kaikki palvelut →</a>
                </div>
              )}
            </div>

            <a href="#hinnasto" onClick={() => setMobileOpen(false)} className="block font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/90 py-3 border-b border-[rgba(47,43,54,0.08)]">Hinnasto</a>
            <a href="#yhteystiedot" onClick={() => setMobileOpen(false)} className="block font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/90 py-3 border-b border-[rgba(47,43,54,0.08)]">Yhteystiedot</a>

            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/70 py-3 border-b border-[rgba(47,43,54,0.08)] last:border-0"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-madefor text-[14px] font-semibold uppercase tracking-wider text-[#2F2B36]/70 py-3 border-b border-[rgba(47,43,54,0.08)] last:border-0"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="mt-4 pt-4 border-t border-[rgba(47,43,54,0.08)]">
              <a
                href={templateData.navigation.ctaButton.href}
                className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded font-madefor text-[14px] font-semibold tracking-[0.02em] bg-[#212121] text-white hover:bg-[#16161A] transition-colors duration-300 whitespace-nowrap"
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(47,43,54,0.42) 0%, rgba(15,14,18,0.60) 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px', opacity: 0.03 }} />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-[60px]">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#EDEDED] mb-3"
          >
            {templateData.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-mona text-[32px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] leading-[1.02] tracking-[-0.035em] mb-5 max-w-[900px]"
          >
            {templateData.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-madefor text-[13px] md:text-[15px] text-[rgba(255,255,255,0.82)] leading-[1.7] mb-9 max-w-[580px]"
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
              className="inline-flex items-center justify-center px-12 py-4 rounded font-madefor text-[14px] font-bold tracking-[0.01em] bg-[#212121] text-white border border-[#212121] shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:bg-[#000000] hover:border-[#000000] transition-all duration-300 whitespace-nowrap"
            >
              {templateData.hero.ctaPrimary.label}
            </a>
            <a
              href={templateData.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded font-madefor text-[13px] font-medium tracking-[0.06em] text-[#FFFFFF]/80 border border-[#FFFFFF]/25 hover:border-[#FFFFFF]/50 hover:text-[#FFFFFF] transition-all duration-300 whitespace-nowrap"
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
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                <p className="font-madefor text-[21px] md:text-[25px] font-semibold text-[#FFFFFF] leading-none mb-1.5">{stat.value}</p>
                <p className="font-madefor text-[10px] text-[#EDEDED] tracking-[0.06em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Symptoms — Editorial Premium */}
      <section className="bg-[#F7F7F7] pt-14 md:pt-20 pb-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121] mb-4">
                YLEISIMPIÄ OIREITA
              </p>
              <h2 className="font-mona text-[28px] md:text-[36px] text-[#2F2B36] tracking-[-0.025em] leading-[1.08] mb-5">
                Miksi vastaanotolleni tullaan?
              </h2>
              <p className="font-madefor text-[15px] text-[rgba(47,43,54,0.65)] leading-[1.7] max-w-[480px] mx-auto">
                Kiropraktiikka voi auttaa esimerkiksi seuraavissa tilanteissa.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="rounded-[20px] px-6 py-4 md:px-10 md:py-6"
              style={{
                background: 'rgba(26,24,32,0.85)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 24px 60px rgba(15,14,18,0.25), 0 2px 8px rgba(15,14,18,0.12)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
                {[
                  'Selkä- ja niskakivut',
                  'Iskias ja säteilyoireet',
                  'Päänsärky ja migreeni',
                  'Olkapää- ja lonkkavaivat',
                  'Puutumisoireet',
                  'Urheiluvammat ja palautuminen',
                ].map((symptom, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-5 md:py-6 border-b border-[rgba(255,255,255,0.10)]"
                  >
                    <div className="shrink-0 w-[7px] h-[7px] rounded-full bg-[#FFFFFF]/40" />
                    <span className="font-madefor text-[17px] md:text-[18px] font-medium text-[#F7F7F7] tracking-[0.01em] leading-[1.4]">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Symptom Survey — Premium Inline CTA */}
          <div className="mt-10 md:mt-12 max-w-[540px] mx-auto">
            {surveyStep === 0 ? (
              /* Intro view */
              <div className="text-center">
                <p className="font-madefor text-[13px] text-[rgba(47,43,54,0.55)] leading-[1.7] mb-5">
                  Etkö löytänyt omaa oirettasi? Vastaa muutamaan kysymykseen ja selvitä, voisiko kiropraktiikka sopia tilanteeseesi.
                </p>
                <button
                  onClick={() => { setSurveyStep(1); setSurveyAnswers([]); }}
                  className="group inline-flex items-center gap-2 font-madefor text-[13px] font-semibold text-[#212121] hover:text-[#5D5D61] transition-colors duration-300 cursor-pointer"
                >
                  <span className="border-b border-[#212121]/25 pb-0.5 group-hover:border-[#5D5D61]/40">Tee oirekysely</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ) : surveyStep <= 4 ? (
              /* Question views */
              <div>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="font-madefor text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(47,43,54,0.50)]">Vaihe {surveyStep} / 4</span>
                  <div className="flex-1 h-[1px] bg-[rgba(47,43,54,0.08)] rounded-full overflow-hidden">
                    <div className="h-full bg-[#212121] rounded-full transition-all duration-500" style={{ width: `${(surveyStep / 4) * 100}%` }} />
                  </div>
                </div>
                {/* Question */}
                <h3 className="font-mona text-[20px] md:text-[22px] text-[#2F2B36] tracking-[-0.015em] leading-[1.35] mb-6">{surveyQuestions[surveyStep - 1].question}</h3>
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
                      className="text-left px-4 py-3.5 rounded-lg bg-white/60 border border-[rgba(47,43,54,0.08)] hover:bg-white hover:border-[rgba(47,43,54,0.18)] hover:shadow-[0_2px_8px_rgba(47,43,54,0.04)] transition-all duration-200 cursor-pointer"
                    >
                      <span className="font-madefor text-[13px] text-[#2F2B36]">{opt.label}</span>
                    </button>
                  ))}
                </div>
                {/* Back button */}
                {surveyStep > 1 && (
                  <button
                    onClick={() => { setSurveyStep(surveyStep - 1); }}
                    className="font-madefor text-[12px] text-[rgba(47,43,54,0.55)] hover:text-[#2F2B36] transition-colors cursor-pointer"
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
                    <p className="font-madefor text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(47,43,54,0.50)] mb-4">KIROPRAKTIIKKA VOISI AUTTAA</p>
                    <h3 className="font-mona text-[22px] md:text-[24px] text-[#2F2B36] tracking-[-0.015em] leading-[1.3] mb-4">{rec.title}</h3>
                    <p className="font-madefor text-[14px] text-[rgba(47,43,54,0.72)] leading-[1.75] mb-8">{rec.description}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={rec.bookingUrl}
                        className="inline-flex items-center justify-center px-10 py-3.5 rounded font-madefor text-[13px] font-bold tracking-[0.06em] bg-[#212121] text-white shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:bg-[#16161A] transition-all duration-300"
                      >
                        Varaa aika
                      </a>
                      <button
                        onClick={() => { setSurveyStep(0); setSurveyAnswers([]); }}
                        className="font-madefor text-[12px] text-[rgba(47,43,54,0.55)] hover:text-[#2F2B36] transition-colors cursor-pointer"
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
      <section id="palvelut" className="bg-[#EDEDED] pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[rgba(47,43,54,0.75)] mb-5">{templateData.services.eyebrow}</p>
              <h2 className="font-mona text-[26px] md:text-[32px] text-[#2F2B36] tracking-[-0.025em] leading-[1.35] mb-6">{templateData.services.headline}</h2>
              <p className="font-madefor text-[14px] text-[#2F2B36] leading-[1.75] max-w-[440px] mx-auto">{templateData.services.body}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {templateData.services.primaryServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link to={service.linkHref} className="group block rounded-[12px] overflow-hidden bg-[#EDEDED] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
                  <div className="relative overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" className="w-full aspect-[16/10.5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(86,86,86,0.018) 0%, transparent 40%, rgba(222,222,222,0.15) 100%)', mixBlendMode: 'multiply' }} />
                  </div>
                  <div className="px-8 pt-7 pb-9 md:px-10 md:pt-8 md:pb-10">
                    <h3 className="font-mona text-[26px] md:text-[28px] text-[#2F2B36] mb-4">{service.title}</h3>
                    <p className="font-madefor text-[14px] text-[rgba(47,43,54,0.75)] leading-[1.75] mb-8 max-w-[340px]">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-madefor text-[13px] text-[#2F2B36]/45 group-hover:text-[rgba(47,43,54,0.75)] transition-colors duration-300">
                      {service.linkText}
                      <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-18 md:mt-22 pt-12 border-t border-[#212121]/[0.04]">
              <p className="font-madefor text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(47,43,54,0.75)]/70 text-center mb-10">{templateData.services.secondaryLabel}</p>
              <div className="grid grid-cols-3 gap-4 md:gap-5">
                {templateData.services.secondaryServices.map((service, i) => (
                  <Link key={i} to={service.linkHref} className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                    <div className="relative overflow-hidden aspect-[4/3.2]">
                      <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" style={service.title === 'Dry Needling' ? { objectPosition: 'left center' } : undefined} />
                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(43,43,43,0.3) 100%)' }} />
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <p className="font-mona text-[15px] md:text-[17px] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.28)]">{service.title}</p>
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
      <section id="asiantuntijat" className="bg-[#F7F7F7] pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Image */}
            <ScrollReveal>
              <div className="pt-4 md:pt-8 h-full flex flex-col">
                <div className="rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] max-w-[60%] mx-auto">
                  <img
                    src="/assets/jk_joona.jpg"
                    alt={activeTeamMember.name}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                </div>

                {/* Quote */}
                <blockquote className="mt-8 max-w-[60%] mx-auto text-center">
                  <p className="font-madefor text-[15px] md:text-[16px] italic text-[rgba(47,43,54,0.82)] leading-[1.7]">
                    &ldquo;Käyntini jälkeen tunsin ensimmäistä kertaa onnettomuuteni jälkeen, miltä kivuton ja rentoutunut kroppa tuntuu.&rdquo;
                  </p>
                  <footer className="mt-3 font-madefor text-[12px] tracking-[0.04em] text-[#76747B]">
                    Timo, Google-arvostelu
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <ScrollReveal delay={0.15}>
              <div className="pt-0 md:pt-2">
                {/* Eyebrow */}
                <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121] mb-3">
                  KUKA SINUA HOITAA?
                </p>

                {/* Name */}
                <h2 className="font-mona text-[36px] md:text-[48px] text-[#2F2B36] leading-[0.95] font-normal mb-2">
                  Joona Konga
                </h2>

                {/* Subtitle */}
                <p className="font-madefor text-[14px] md:text-[16px] text-[#2F2B36] font-normal mb-6 md:mb-8">
                  Kiropraktikko, MChiro | Valviran rekisteröimä | Vuodesta 2014
                </p>

                {/* Body text */}
                <div className="space-y-3 mb-6 md:mb-8 max-w-[580px]">
                  <p className="font-madefor text-[15px] text-[rgba(47,43,54,0.82)] leading-[1.6]">
                    Olen Joona Konga, kiropraktikko Helsingin Laajasalossa. Valmistuin kiropraktikoksi vuonna 2014 University of South Walesista ja olen Valviran rekisteröimä terveydenhuollon ammattilainen.
                  </p>
                  <p className="font-madefor text-[15px] text-[rgba(47,43,54,0.82)] leading-[1.6]">
                    Vastaanottoni toimii Velnas Hyvinvointikeskuksessa, jonne on helppo tulla niin autolla kuin julkisillakin. Erityisosaamistani ovat selkä- ja niskakivut, olkapää- ja lonkkavaivat, puutumisoireet sekä päänsäryt. Hoitokäyntiin kuuluu aina huolellinen tutkimus, yksilöllisesti suunniteltu hoito ja tarvittaessa harjoitteet paranemisen tueksi.
                  </p>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-madefor text-[14px] font-medium text-[#212121] hover:opacity-75 transition-opacity duration-300"
                >
                  <span className="border-b border-[#212121]/30 pb-0.5">Lue lisää Joonasta</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="arvostelut" className="bg-[#2F2B36] pt-16 md:pt-24 pb-14 md:pb-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#D9D9DE] mb-5">{templateData.reviews.eyebrow}</p>
              <h2 className="font-mona text-[26px] md:text-[32px] text-[#FFFFFF] tracking-[-0.025em] leading-[1.35] mb-4">{templateData.reviews.headline}</h2>
              <p className="font-madefor text-[14px] text-[rgba(255,255,255,0.72)] leading-[1.7] max-w-[420px] mx-auto">{templateData.reviews.description}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              {/* Arrow buttons on sides */}
              <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-0 right-0 z-10 pointer-events-none">
                <button onClick={prevReview} className="pointer-events-auto w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] bg-white/10 backdrop-blur-sm flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:text-white hover:border-white/40 transition-colors cursor-pointer -ml-5">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} className="pointer-events-auto w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] bg-white/10 backdrop-blur-sm flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:text-white hover:border-white/40 transition-colors cursor-pointer -mr-5">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile arrows */}
              <div className="flex md:hidden justify-center gap-3 mb-4">
                <button onClick={prevReview} className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:text-white hover:border-white/40 transition-colors bg-transparent cursor-pointer">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-[rgba(255,255,255,0.6)] hover:text-white hover:border-white/40 transition-colors bg-transparent cursor-pointer">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {visibleReviews.map((review, i) => (
                  <div key={`${reviewIndex}-${i}`} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                    <div
                      className="rounded-[18px] p-8 md:p-9 h-full flex flex-col"
                      style={{
                        background: 'rgba(15,14,18,0.55)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        boxShadow: '0 18px 45px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10)',
                      }}
                    >
                      <p className="font-madefor text-[14px] text-[rgba(255,255,255,0.88)] leading-[1.75] italic flex-1">&ldquo;{review.text}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[rgba(255,255,255,0.12)]">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-[rgba(255,255,255,0.18)] overflow-hidden">
                          {review.avatar ? (
                            <img src={review.avatar} alt={review.name} loading="lazy" className="w-full h-full object-cover" />
                          ) : (
                            <span className="font-mona text-[15px] text-[#EDEDED]">{review.name.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-madefor text-[14px] font-bold text-[#FFFFFF]">{review.name}</p>
                          <p className="font-madefor text-[11px] text-[#D9D9DE]">{review.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 md:mt-10">
                <a
                  href="https://www.google.com/search?q=Kiropraktikko+Joona+Konga+/+VELNAS+Arvostelut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded font-madefor text-[13px] font-semibold tracking-[0.02em] bg-[#FFFFFF] text-[#212121] hover:bg-[#EDEDED] transition-all duration-300"
                >
                  Katso kaikki arvostelut
                </a>
                <a
                  href="https://www.google.com/search?q=Kiropraktikko+Joona+Konga+/+VELNAS+Arvostelut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded font-madefor text-[13px] font-semibold tracking-[0.02em] text-white border border-[rgba(255,255,255,0.28)] hover:bg-white/10 transition-all duration-300"
                >
                  Jätä arvostelu
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="hinnasto" className="bg-[#F7F7F7] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[rgba(47,43,54,0.75)] mb-5">{templateData.pricing.eyebrow}</p>
              <h2 className="font-mona text-[26px] md:text-[30px] text-[#2F2B36] leading-[1.35] mb-4">{templateData.pricing.headline}</h2>
              <p className="font-madefor text-[14px] text-[#2F2B36]/80 leading-[1.75] max-w-[400px] mx-auto">{templateData.pricing.body}</p>
            </div>
          </ScrollReveal>

          {/* Tab selector */}
          <ScrollReveal delay={0.1}>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-8 pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {templateData.pricing.tabs.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => setActivePricingTab(i)}
                  className={`shrink-0 px-4 py-2.5 rounded-lg font-madefor text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer border ${
                    i === activePricingTab
                      ? 'bg-[#212121] text-white border-[#212121] shadow-[0_2px_8px_rgba(0,0,0,0.18)]'
                      : 'bg-transparent text-[#2F2B36] border-[#212121]/[0.18] hover:bg-[#EDEDED] hover:text-[#2F2B36]'
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
              <p className="font-madefor text-[13px] text-[rgba(47,43,54,0.75)] mb-4">{templateData.pricing.tabs[activePricingTab].description}</p>
              <div className="border-t border-[#212121]/[0.1]">
                {templateData.pricing.tabs[activePricingTab].items.map((item, ii) => (
                  <div
                    key={ii}
                    className={`flex justify-between items-baseline py-4 ${
                      ii < templateData.pricing.tabs[activePricingTab].items.length - 1 ? 'border-b border-[#212121]/[0.08]' : ''
                    }`}
                  >
                    <span className="font-madefor text-[15px] font-medium text-[#2F2B36]">{item.duration}</span>
                    <span className="flex items-baseline gap-1">
                      <span className="font-madefor text-[22px] font-semibold text-[#2F2B36]">{item.price}</span>
                      <span className="font-madefor text-[13px] text-[rgba(47,43,54,0.65)]">&euro;</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {false && (<> {/* What is Chiropractic — Editorial (hidden for now) */}
      <section className="bg-[#F7F7F7] pt-14 md:pt-20 pb-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#5D5D61] mb-4">
                  TIETOA KIROPRAKTIIKASTA
                </p>
                <h2 className="font-mona text-[30px] md:text-[38px] lg:text-[44px] text-[#2F2B36] leading-[1.08] mb-6 whitespace-nowrap">
                  Mitä kiropraktiikka on?
                </h2>
                <div className="space-y-3 max-w-[480px]">
                  <p className="font-madefor text-[15px] md:text-[16px] text-[rgba(47,43,54,0.78)] leading-[1.65]">
                    Kiropraktiikka on terveydenhuollon ala, joka keskittyy tuki- ja liikuntaelimistön toimintahäiriöiden tutkimiseen, hoitoon ja ennaltaehkäisyyn.
                  </p>
                  <p className="font-madefor text-[15px] md:text-[16px] text-[rgba(47,43,54,0.78)] leading-[1.65]">
                    Kiropraktikko hoitaa erityisesti selän, niskan, nivelten ja hermoston toimintaan liittyviä vaivoja manuaalisilla hoitotekniikoilla. Tavoitteena ei ole vain lievittää oiretta, vaan ymmärtää mistä kipu tai liikerajoitus voi johtua.
                  </p>
                  <p className="font-madefor text-[14px] md:text-[15px] text-[rgba(47,43,54,0.68)] leading-[1.65]">
                    Hoito suunnitellaan aina yksilöllisesti asiakkaan tilanteen mukaan.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/palvelut/selka-ja-niskakivut"
                    className="group inline-flex items-center gap-2 font-madefor text-[13px] font-semibold text-[#212121] hover:text-[#5D5D61] transition-colors duration-300"
                  >
                    <span className="border-b border-[#212121]/25 pb-0.5 group-hover:border-[#5D5D61]/40">Lue lisää kiropraktiikasta</span>
                    <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Image */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-[16px] overflow-hidden shadow-[0_12px_40px_rgba(47,43,54,0.08)]">
                <img src="/assets/jk_img2.jpg" alt="Kiropraktinen hoito" className="w-full h-[240px] md:h-[320px] object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </>)} {/* End hidden What is Chiropractic */}

      {/* Location — Velnas Laajasalo */}
      <section className="bg-[#F1F1F1] pt-[43px] md:pt-[54px] pb-[43px] md:pb-[54px] px-6 md:px-12">
        <div className="max-w-[1060px] mx-auto">
          {/* Main two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-7 items-center">
            {/* Left: Image */}
            <ScrollReveal delay={0.15}>
              <div className="block relative rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(47,43,54,0.10)] aspect-video">
                <img
                  src="/assets/velnas-ulko.png"
                  alt="Kiropraktinen hoito Velnas Hyvinvointikeskuksessa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Label */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span className="inline-block px-3 py-[6px] md:px-3.5 md:py-2 rounded-full bg-[#212121]/80 backdrop-blur-sm font-madefor text-[12px] md:text-[13px] font-medium text-white tracking-wide">
                    Laajasalo, Helsinki
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <ScrollReveal>
              <div className="md:pl-[8%] md:pr-0">
                {/* Eyebrow */}
                <p className="font-madefor text-[12px] font-bold uppercase tracking-[0.16em] text-[#5D5D61] mb-4">
                  VASTAANOTTO
                </p>
                {/* Headline */}
                <h2 className="font-mona text-[32px] md:text-[41px] lg:text-[45px] text-[#2F2B36] tracking-[-0.025em] leading-[1.08] font-normal mb-4 max-w-[470px]">
                  Velnas Hyvinvointikeskuksessa Laajasalossa
                </h2>
                {/* Body */}
                <p className="font-madefor text-[14px] md:text-[15px] text-[rgba(47,43,54,0.78)] leading-[1.65] max-w-[470px] mb-6">
                  Vastaanotto sijaitsee Kauppakeskus Saaren vastapäätä osoitteessa Yliskylän puistokatu 11. Velnaksen monipuoliset hyvinvointipalvelut saman katon alta tukevat hoitoa ja palautumista. Perille pääsee helposti autolla tai Herttoniemen kautta julkisilla.
                </p>
                {/* CTA */}
                <a
                  href="https://velnas.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-madefor text-[12px] md:text-[13px] font-semibold text-[#212121] hover:text-[#5D5D61] transition-colors duration-300"
                >
                  <span className="border-b border-[#212121]/25 pb-0.5 group-hover:border-[#5D5D61]/40">Tutustu Velnakseen</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Premium Trust Strip */}
      <section className="bg-[#F1F1F1] pt-6 md:pt-8 pb-8 md:pb-10 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#5D5D61] mb-5 md:mb-6">
              MIKSI KIROPRAKTIKKO JOONA KONGA
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
              {[
                { num: '10+', label: 'Vuotta kokemusta' },
                { num: '5.0', label: 'Google-arvostelu', star: true },
                { num: 'Valvira', label: 'Rekisteröity ammattilainen' },
                { num: 'MChiro', label: 'University of South Wales' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-0">
                  <div className="text-center md:px-8 lg:px-10">
                    <p className="font-madefor text-[28px] md:text-[32px] font-semibold text-[#2F2B36] leading-[1]">
                      {stat.num}{stat.star && <span className="text-[#5D5D61]">★</span>}
                    </p>
                    <p className="font-madefor text-[11px] md:text-[12px] text-[#76747B] tracking-[0.04em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block w-px h-10 bg-[rgba(47,43,54,0.10)]" />
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(47,43,54,0.62) 0%, rgba(0,0,0,0.66) 100%)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} />
        <div className="relative z-10 w-full max-w-[520px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-madefor text-[13px] font-bold uppercase tracking-[0.16em] text-[#EDEDED] mb-3">{templateData.finalCta.eyebrow}</p>
              <h2 className="font-mona text-[28px] md:text-[36px] text-[#FFFFFF] leading-[1.2] mb-4">{templateData.finalCta.headline}</h2>
              <p className="font-madefor text-[14px] md:text-[15px] text-[rgba(255,255,255,0.84)] leading-[1.65] mb-7 max-w-[420px] mx-auto">{templateData.finalCta.supportText}</p>

              <div className="mb-5">
                <a href={templateData.business.bookingUrl} className="inline-flex items-center justify-center px-14 py-4 rounded font-madefor text-[14px] font-bold tracking-[0.01em] bg-[#212121] text-white border border-[#212121] shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-[#000000] hover:border-[#000000] transition-all duration-300 w-full max-w-[280px]">
                  {templateData.finalCta.ctaLabel}
                </a>
              </div>

              <div className="mb-6">
                <a href={templateData.business.phoneLink} className="inline-flex items-center justify-center gap-2 font-madefor text-[14px] font-semibold text-white tracking-wide no-underline hover:text-[#EDEDED] transition-colors duration-300">
                  <Phone size={14} strokeWidth={1.5} />
                  Soita {templateData.finalCta.phone}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <span className="font-madefor text-[12px] text-[rgba(255,255,255,0.72)] tracking-wide">★ 5.0/5 Google-arvostelut &bull; Valviran rekisteröimä &bull; Kiropraktikkona vuodesta 2014</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="yhteystiedot" className="bg-[#16161A] border-t border-[#FFFFFF]/[0.08] pt-14 md:pt-16 pb-10 md:pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
            <div>
              <h3 className="font-mona text-[18px] text-[#FFFFFF] mb-1">{templateData.business.name}</h3>
              <p className="font-madefor text-[13px] text-[rgba(255,255,255,0.78)]/60 mb-4">{templateData.business.tagline}</p>
              <ul className="space-y-2">
                <li className="font-madefor text-[14px] text-[rgba(255,255,255,0.78)] flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" /> {templateData.business.address}
                </li>
                <li>
                  <a href={templateData.business.phoneLink} className="font-madefor text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Phone size={14} className="shrink-0" /> {templateData.business.phone}
                  </a>
                </li>
                <li>
                  <a href={templateData.business.emailLink} className="font-madefor text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Mail size={14} className="shrink-0" /> {templateData.business.email}
                  </a>
                </li>
              </ul>
            </div>
            {templateData.footer.columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-madefor text-[13px] font-semibold uppercase tracking-wider text-[#FFFFFF] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="font-madefor text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</Link>
                      ) : (
                        <a href={link.href} className="font-madefor text-[14px] text-[rgba(255,255,255,0.78)] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="border-t border-[#EDEDED]/[0.16] pt-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-madefor text-[12px] font-semibold uppercase tracking-[0.12em] text-[#EDEDED]/60 mb-2">Laajasalo, Helsinki</p>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                  <iframe
                    src="https://www.google.com/maps?q=Yliskyl%C3%A4n+puistokatu+11,+00840+Helsinki&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kiropraktikko Joona Konga - Velnas, Laajasalo"
                  />
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>

          <div className="border-t border-[#EDEDED]/[0.16] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-madefor text-[12px] text-[rgba(255,255,255,0.78)]/45">{templateData.footer.bottom}</p>
            <p className="font-madefor text-[12px] text-[rgba(255,255,255,0.78)]/35">{templateData.footer.credits}</p>
            <div className="flex gap-4">
              <a href={templateData.business.instagramUrl} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#2F2B36]/70 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.facebookUrl} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#FFFFFF]/70 transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.phoneLink} className="text-[rgba(255,255,255,0.78)]/50 hover:text-[#FFFFFF]/70 transition-colors"><Phone size={18} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
