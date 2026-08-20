# Tech Spec — The Back Room

## Dependencies

| Paketti | Versio | Tarkoitus |
|---------|--------|-----------|
| `react` | ^19.0.0 | UI-kirjasto |
| `react-dom` | ^19.0.0 | DOM-renderöinti |
| `react-router-dom` | ^7.0.0 | Monisivuisuus (10 sivua, SEO-ystävälliset URL:t) |
| `framer-motion` | ^12.0.0 | Scroll-reveal, staggered anims, hero-ingressio, hover-efektit |
| `lucide-react` | ^0.470.0 | Ikonit (Leaf, Shield, User, MapPin, Target, AlertCircle, Activity, Move, Zap, Clock, TrendingUp, Heart, Menu, X, ChevronDown, Phone, ArrowRight) |

### Google Fonts (HTML:link, ei npm)

| Kirjasin | Painot | Käyttö |
|----------|--------|--------|
| Marcellus | 400, 500, 600 | Otsikot (H1–H4) |
| Plus Jakarta Sans | 400, 600 | Leipäteksti, navigaatio, caption |

---

## Komponenttilista

### Layout (kaikilla sivuilla)

| Komponentti | Lähde | Käyttö |
|-------------|-------|--------|
| `Navigation` | Custom | Kiinteä navigaatio, läpinäkyvä → valkoinen scrollatessa, mobiili-overlay |
| `Footer` | Custom | 4-sarakeinen footer, yhteinen kaikilla sivuilla |
| `PageLayout` | Custom | Wrapper: Navigaatio + {children} + Footer, sivun fade-in ingressio |

### Yhteiset komponentit (jaetut useiden sivujen välillä)

| Komponentti | Lähde | Käyttö |
|-------------|-------|--------|
| `CTAButton` | Custom | Primary (kultainen) ja Secondary (border) variantit |
| `ServiceCard` | Custom | Kuva + otsikko + kuvaus + linkki, hover-zoom |
| `ReviewCard` | Custom | Tähdet + lainaus + nimi, hover-lift |
| `PriceCard` | Custom | Otsikko + hinta + yksikkö |
| `SymptomCard` | Custom | Ikoni + teksti |
| `TrustItem` | Custom | Ikoni + otsikko + teksti |
| `ScrollReveal` | Custom | Wrapper-komponentti: IntersectionObserver + framer-motion fade-in |

### Etusivun sektiot

| Komponentti | Käyttö |
|-------------|--------|
| `HeroSection` | Koko ruudun video + teksti + CTA:t + trust-palkki |
| `TrustSection` | 4 trust-korttia ruudukossa |
| `ServicesSection` | 3 palvelukorttia |
| `ExpertSection` | Krista Ketelän esittely (kuva + teksti) |
| `SymptomsSection` | 8 oire-korttia 4×2-ruudukossa |
| `ReviewsSection` | 3 arvostelukorttia |
| `AboutChiroSection` | "Mitä on kiropraktiikka?" teksti + kuva |
| `PricingPreviewSection` | 3 hinta-korttia + CTA |
| `FinalCTASection` | Keskitetty CTA gradient-taustalla |

### Sisältösivujen sektiot

| Komponentti | Sivu | Käyttö |
|-------------|------|--------|
| `ServiceHero` | Palvelu- ja yksittäispalvelusivut | Koko leveyden kuva + otsikko + CTA |
| `ServiceListSection` | /palvelut/ | 3 täysleveää palvelukorttia |
| `ChiroProcessSection` | /kiropraktiikka/ | 4-vaiheinen hoitoprosessi (numerot) |
| `TeamGridSection` | /tiimi/ | 4 asiantuntijan profiilia |
| `PricingTableSection` | /hinnasto/ | Hinnastotaulukot kategorioittain |
| `ReviewsGridSection` | /arvostelut/ | 2×4 arvosteluruudukko |
| `StorySection` | /meista/ | Yrityksen tarina + arvot |
| `ContactInfoSection` | /yhteystiedot/ | Tiedot + Google Maps -upotus |
| `ContactFormSection` | /yhteystiedot/ | Yhteydenottolomake |

### Hooks

| Hook | Käyttö |
|------|--------|
| `useScrollPosition` | Navigaation taustan muutos (scroll > 100px) |
| `useScrollReveal` | IntersectionObserver-pohjainen reveal-triggeri (ScrollReveal-komponentin sisällä) |

---

## Animaatiototeutus

| Animaatio | Kirjasto | Toteutus | Kompleksisuus |
|-----------|----------|----------|---------------|
| Sivun ingressio (fade-in) | framer-motion | `AnimatePresence` + `motion.div`, opacity 0→1, y 20→0 | Matala |
| Scroll-reveal (sektiot) | framer-motion | `whileInView`, viewport once 20%, opacity + y 30→0 | Matala |
| Staggered reveal (kortit) | framer-motion | `variants` + `staggerChildren: 0.15`, yksittäiset `motion.div` | Matala |
| Navigaation taustan vaihto | CSS transition | `useScrollPosition` togglaa className, CSS hoitaa `transition: all 0.4s` | Matala |
| Mobiilimenun avautuminen | framer-motion | `AnimatePresence` + `motion.div`, opacity + x-slide | Matala |
| Hero-tekstin staggered ingressio | framer-motion | `variants` + `staggerChildren: 0.2`, badge→otsikko→kuvaus→CTA→trust | Matala |
| Scroll-hiipivinkin bounce | CSS @keyframes | `translateY(0→8→0)`, 2s infinite | Matala |
| Kortin hover-lift | CSS transition | `transform: translateY(-4px)`, `transition: 0.4s ease-out` | Matala |
| Kuvan hover-zoom | CSS transition | Container `overflow:hidden`, kuva `transform: scale(1.03)`, 0.6s | Matala |
| CTA-painikkeen hover | CSS transition | `transform: scale(1.02)`, taustavärin vaihto, box-shadow, 0.3s | Matala |
| Asiantuntija-sektion slide-in | framer-motion | Kuva: `whileInView` x -40→0, teksti: y 20→0, delay 0.2s | Matala |
| Final CTA scale-ingressio | framer-motion | `whileInView`, scale 0.95→1.0, opacity 0→1 | Matala |

**Kaikki animaatiot ovat matalan kompleksisuuden tasolla** — ei tarvetta WebGL:lle, canvasille tai kolmannen osapuolen animaatiokirjastoille. framer-motion hoitaa kaikki reaktiiviset ja scroll-triggeröidyt animaatiot, CSS transitions hoitaa hover-efektit.

---

## Tilanhallinta

Tämä projekti on **esityssivusto ilman dynaamista tilaa**. Kaikki data (tiimin tiedot, palvelukuvaukset, hinnat, arvostelut) on staattista. **Ei tarvetta** Zustandille, Reduxille tai Context API:lle.

Ainoa tila:
- Navigaation scroll-tila (`useScrollPosition` hook → boolean)
- Mobiilimenun auki/kiinni (Navigation-komponentin local state)
- Mahdollinen yhteydenottolomake (lomake-komponentin local state, ei tallennusta)

---

## Muut keskeiset päätökset

### Monisivuisuus ja reititys
- `react-router-dom` BrowserRouter + Routes/Route
- 10 sivua: /, /palvelut, /palvelut/kiropraktiikka, /palvelut/hieronta, /palvelut/personal-training, /tiimi, /hinnasto, /arvostelut, /meista, /yhteystiedot
- Scroll-to-top jokaisella navigaatiolla (`useEffect` + `window.scrollTo(0,0)`)
- Sivukohtaiset `<title>` ja `<meta name="description">` React Helmet Async:lla

### SEO
- `react-helmet-async` — sivukohtaiset title, description, og-tagit
- Rakenteellinen data: JSON-LD (LocalBusiness, Person) injektoitu `<script type="application/ld+json">`
- Kaikki otsikot semanttisesti oikein (h1–h4)

### Suorituskyky
- Kuvat: `loading="lazy"` kaikissa paitsi hero (hero-kuva/video eager)
- Google Fonts: `display=swap`, preconnect hintit
- Framer-motion: `whileInView` käyttää natiivia IntersectionObserveria
- Ei tarvetta code-splittingille (sivusto on kevyt, ~10 sivua)

### Saavutettavuus
- `@media (prefers-reduced-motion: reduce)` → kaikki animaatiot pois päältä
- Focus-visible kehykset kaikilla interaktiivisilla elementeillä
- Alt-tekstit kaikissa kuvissa suomeksi
- `lang="fi"` HTML-tagiin
