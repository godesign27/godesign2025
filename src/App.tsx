import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Partners from './components/Partners';
import SpecializedExpertise from './components/SpecializedExpertise';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Services from './components/Services';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import SaasProductDesign from './components/SaasProductDesign';
import MarketingWebDesign from './components/MarketingWebDesign';
import MobileWebDesign from './components/MobileWebDesign';
import CaseStudyDetail from './components/CaseStudyDetail';
import CaseStudyDetail2 from './components/CaseStudyDetail2';
import CaseStudyDetail3 from './components/CaseStudyDetail3';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';
import SEOHead, { BASE_URL, SITE_NAME } from './components/SEOHead';

function HomePage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="GO Design, Inc. - Expert UI/UX Design & Product Development | Chicago"
        description="GO Design is a Chicago-based UI/UX design agency specializing in SaaS product design, mobile app design, and marketing websites. 12+ years of experience transforming digital products for brands like Accenture, Jim Beam, and CoreTechs. Schedule a free consultation."
        canonical="/"
        keywords="UI/UX design agency Chicago, SaaS product design, mobile app design, marketing web design, user experience design, digital product development, fractional designer"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'GO Design, Inc. - Expert UI/UX Design & Product Development',
          description: 'Chicago-based UI/UX design agency specializing in SaaS product design, mobile app design, and marketing websites.',
          url: BASE_URL,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
          about: {
            '@type': 'ProfessionalService',
            name: SITE_NAME,
            areaServed: [
              { '@type': 'City', name: 'Chicago' },
              { '@type': 'State', name: 'Illinois' },
              { '@type': 'Country', name: 'United States' },
            ],
          },
        }}
      />
      <Hero />
      <ValueProposition />
      <Partners />
      <SpecializedExpertise setCurrentPage={setCurrentPage} />
      <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
      <Testimonials />
      <CTA setCurrentPage={setCurrentPage} />
    </>
  );
}

function ServicesPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="UI/UX Design Services - UX Consulting, Research & Brand Design | GO Design"
        description="Full-spectrum UI/UX design services: experience research, UX consulting, brand identity design, SaaS product design, mobile app design, and marketing web design. User-centered design process that drives measurable business results."
        canonical="/services"
        keywords="UX design services, UI design consulting, user research, brand identity design, design systems, wireframing, prototyping, heuristic analysis, Chicago UX agency"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'UI/UX Design Services',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Full-spectrum UI/UX design services including experience research, UX consulting, brand identity, SaaS product design, mobile app design, and marketing web design.',
          areaServed: { '@type': 'Country', name: 'United States' },
          serviceType: 'UI/UX Design',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Design Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UX/UI Design Consulting' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Experience Research' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand & Identity Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Product Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Web Design' } },
            ],
          },
        }}
      />
      <Services setCurrentPage={setCurrentPage} />
    </>
  );
}

function SolutionsPage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="Design Portfolio & Case Studies - Healthcare SaaS, Enterprise UX | GO Design"
        description="Explore GO Design's portfolio of digital transformation projects. Case studies featuring CoreTechs healthcare SaaS, Accenture enterprise onboarding for 500K+ employees, and Jim Beam's cocktail discovery platform. Real results from user-centered design."
        canonical="/solutions"
        keywords="UX case studies, design portfolio, healthcare SaaS design, enterprise UX design, digital transformation, CoreTechs, Accenture, Jim Beam"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Design Portfolio & Case Studies',
          description: 'Portfolio of digital transformation projects including healthcare SaaS, enterprise onboarding, and consumer experience design.',
          url: `${BASE_URL}/solutions`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <SEOHead
        title="About GO Design - Timothy McGuire, 12+ Years Experience Design | Chicago"
        description="Meet Timothy McGuire, founder of GO Design with 12+ years of experience in user-centered design. Specializing in SaaS platform redesign, mobile-first experiences, and digital transformation. Based in Chicago, serving clients nationwide."
        canonical="/about"
        keywords="Timothy McGuire designer, Chicago UX designer, experience designer, SaaS design expert, user-centered design, digital transformation consultant"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About GO Design',
            url: `${BASE_URL}/about`,
            isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Timothy McGuire',
            jobTitle: 'Experience Designer & Founder',
            worksFor: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
            knowsAbout: ['UI/UX Design', 'SaaS Product Design', 'Mobile App Design', 'User Research', 'Design Systems'],
            address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
          },
        ]}
      />
      <About />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact GO Design - Free UI/UX Design Consultation | Chicago"
        description="Start your next design project with GO Design. Request a free consultation for SaaS product design, mobile app design, or marketing web design. Based in Chicago, working with clients across the United States."
        canonical="/contact"
        keywords="contact UX designer, free design consultation, hire UI/UX designer Chicago, design project inquiry, SaaS designer for hire"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact GO Design',
          description: 'Request a free consultation for UI/UX design services.',
          url: `${BASE_URL}/contact`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <Contact />
    </>
  );
}

function SaasPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="SaaS Product Design Services - UI/UX for Software Products | GO Design"
        description="SaaS product design that drives growth. Expert UI/UX design for software platforms including user research, design systems, workflow optimization, and information architecture. Build scalable, user-centric SaaS products that increase engagement and retention."
        canonical="/saas-product-design"
        keywords="SaaS product design, SaaS UI/UX, software product design, design systems, SaaS workflow optimization, information architecture, SaaS user research"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SaaS Product Design',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Expert SaaS product design including user research, design systems, workflow optimization, and information architecture for scalable software products.',
          serviceType: 'SaaS Product Design',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <SaasProductDesign setCurrentPage={setCurrentPage} />
    </>
  );
}

function MarketingPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Marketing Web Design - High-Converting Websites & Landing Pages | GO Design"
        description="Marketing web design that drives results. Conversion-optimized websites with compelling storytelling and brand alignment. Featured projects include Aramark site redesign, Chrysler user-first redesign, and Accenture enterprise experiences."
        canonical="/marketing-web-design"
        keywords="marketing web design, conversion optimization, website redesign, landing page design, brand website design, Aramark, Chrysler, high-converting websites"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Marketing Web Design',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'High-converting marketing websites and landing pages with compelling storytelling, brand alignment, and conversion optimization.',
          serviceType: 'Marketing Web Design',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <MarketingWebDesign setCurrentPage={setCurrentPage} />
    </>
  );
}

function MobilePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Mobile App Design - iOS & Android UX/UI Design Services | GO Design"
        description="Mobile app design that drives engagement. Native and responsive mobile-first design for iOS and Android. Intuitive user experiences, multi-device optimization, and beautiful interfaces that users love."
        canonical="/mobile-web-design"
        keywords="mobile app design, iOS app design, Android app design, mobile UX design, responsive design, mobile-first design, app UI design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Mobile App Design',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Mobile-first app design for iOS and Android platforms with intuitive user experiences and multi-device optimization.',
          serviceType: 'Mobile App Design',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <MobileWebDesign setCurrentPage={setCurrentPage} />
    </>
  );
}

function CaseStudy1Page({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="CoreTechs Healthcare SaaS Case Study - Data-Driven Patient Management | GO Design"
        description="How GO Design transformed CoreTechs' healthcare SaaS platform with data-driven insights. Redesigned UI for value-based patient management, contract optimization, population risk management, and performance analytics."
        canonical="/case-study/1"
        ogType="article"
        keywords="healthcare SaaS case study, CoreTechs, patient management UX, healthcare data platform, medical software design, value-based care design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CoreTechs Healthcare SaaS - Transform Healthcare Decisions with Data-Driven Insights',
          author: { '@type': 'Person', name: 'Timothy McGuire' },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          description: 'Case study: Redesigning CoreTechs healthcare SaaS platform for value-based patient management and data-driven decision making.',
          url: `${BASE_URL}/case-study/1`,
          about: { '@type': 'Thing', name: 'Healthcare SaaS Design' },
        }}
      />
      <CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

function CaseStudy2Page({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="Accenture Employee Onboarding Case Study - Enterprise UX for 500K+ Users | GO Design"
        description="How GO Design redesigned Accenture's employee onboarding experience for 500,000+ global employees. Streamlined pre-boarding, intuitive task navigation, accessible design systems, and measurable improvements in new hire confidence."
        canonical="/case-study/2"
        ogType="article"
        keywords="Accenture case study, enterprise onboarding UX, employee experience design, large-scale UX, onboarding redesign, accessible design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Accenture Employee Onboarding - Redesigning the Journey for 500K+ Employees',
          author: { '@type': 'Person', name: 'Timothy McGuire' },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          description: 'Case study: Redesigning Accenture employee onboarding experience to inspire confidence from day one across a global workforce.',
          url: `${BASE_URL}/case-study/2`,
          about: { '@type': 'Thing', name: 'Enterprise UX Design' },
        }}
      />
      <CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

function CaseStudy3Page({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="Jim Beam Cocktail Project Case Study - Mobile-First Recipe Platform | GO Design"
        description="How GO Design created Jim Beam's Cocktail Project, a mobile-first recipe discovery platform. Designed trending content rails, contextual CTAs, recipe save/share functionality, and responsive web experience for Suntory Lab and Jim Beam."
        canonical="/case-study/3"
        ogType="article"
        keywords="Jim Beam case study, cocktail app design, mobile recipe platform, consumer experience design, Suntory Lab, beverage brand design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Jim Beam Cocktail Project - A Mobile-First Recipe Discovery Platform',
          author: { '@type': 'Person', name: 'Timothy McGuire' },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          description: 'Case study: Designing a frictionless cocktail recipe discovery platform for Jim Beam and Suntory Lab.',
          url: `${BASE_URL}/case-study/3`,
          about: { '@type': 'Thing', name: 'Consumer Experience Design' },
        }}
      />
      <CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

function FractionalPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Fractional SaaS Designer - Part-Time Senior UX/UI Design | GO Design"
        description="Hire a fractional SaaS designer for your team. Senior-level UI/UX expertise on a part-time basis: design system evolution, workflow optimization, UI modernization, and information architecture. Direct collaboration without the overhead of a full-time hire."
        canonical="/fractional-saas-designer"
        keywords="fractional designer, fractional SaaS designer, part-time UX designer, contract UI designer, design system consultant, SaaS design expert for hire"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Fractional SaaS Designer',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Senior-level UI/UX design expertise on a fractional basis. Design system evolution, workflow optimization, UI modernization, and information architecture for SaaS products.',
          serviceType: 'Fractional Design Services',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <FractionalSaasDesigner setCurrentPage={setCurrentPage} />
    </>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPageState] = useState('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    const routes: { [key: string]: string } = {
      'home': '/',
      'services': '/services',
      'solutions': '/solutions',
      'about': '/about',
      'contact': '/contact',
      'saas-product-design': '/saas-product-design',
      'marketing-web-design': '/marketing-web-design',
      'mobile-web-design': '/mobile-web-design',
      'case-study-1': '/case-study/1',
      'case-study-2': '/case-study/2',
      'case-study-3': '/case-study/3',
      'fractional-saas-designer': '/fractional-saas-designer',
    };
    navigate(routes[page] || '/');
  };

  React.useEffect(() => {
    const path = location.pathname;
    const pageMap: { [key: string]: string } = {
      '/': 'home',
      '/services': 'services',
      '/solutions': 'solutions',
      '/about': 'about',
      '/contact': 'contact',
      '/saas-product-design': 'saas-product-design',
      '/marketing-web-design': 'marketing-web-design',
      '/mobile-web-design': 'mobile-web-design',
      '/case-study/1': 'case-study-1',
      '/case-study/2': 'case-study-2',
      '/case-study/3': 'case-study-3',
      '/fractional-saas-designer': 'fractional-saas-designer',
    };
    setCurrentPageState(pageMap[path] || 'home');
  }, [location.pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/services" element={<ServicesPage setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions" element={<SolutionsPage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/saas-product-design" element={<SaasPage setCurrentPage={setCurrentPage} />} />
          <Route path="/marketing-web-design" element={<MarketingPage setCurrentPage={setCurrentPage} />} />
          <Route path="/mobile-web-design" element={<MobilePage setCurrentPage={setCurrentPage} />} />
          <Route path="/case-study/1" element={<CaseStudy1Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/2" element={<CaseStudy2Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/3" element={<CaseStudy3Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/fractional-saas-designer" element={<FractionalPage setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
