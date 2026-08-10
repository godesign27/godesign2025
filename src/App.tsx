import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { usePageTracking } from './hooks/usePageTracking';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Partners from './components/Partners';
import HomeEditorial from './components/HomeEditorial';
import SpecializedExpertise from './components/SpecializedExpertise';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Services from './components/Services';
import Solutions from './components/Solutions';
import SolutionsLanding from './components/SolutionsLanding';
import SolutionDetail from './components/SolutionDetail';
import About from './components/About';
import Contact from './components/Contact';
import SaasProductDesign from './components/SaasProductDesign';
import MarketingWebDesign from './components/MarketingWebDesign';
import MobileWebDesign from './components/MobileWebDesign';
import CaseStudyDetail from './components/CaseStudyDetail';
import CaseStudyDetail2 from './components/CaseStudyDetail2';
import CaseStudyDetail3 from './components/CaseStudyDetail3';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';
import AgenticExperience from './components/AgenticExperience';
import AIExperienceArchitecturePage from './components/AIExperienceArchitecturePage';
import EnterpriseUXConsulting from './components/EnterpriseUXConsulting';
import SpeakingWorkshops from './components/SpeakingWorkshops';
import StrategySessions from './components/StrategySessions';
import WorkWithMe from './components/WorkWithMe';
import Perspectives from './components/Perspectives';
import MyPhilosophy from './components/MyPhilosophy';
import HowIWork from './components/HowIWork';
import PerspectiveDetail from './components/PerspectiveDetail';
import WritingHub from './components/WritingHub';
import ThemeShowcase from './components/ThemeShowcase';
import SEOHead from './components/SEOHead';
import { BASE_URL, SITE_NAME } from './lib/site';

const Analytics = lazy(() => import('./components/Analytics'));

function HomePage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="GO Design, Inc. — Agentic AI Design & Agentic Design Systems | Chicago"
        description="GO Design is a Chicago design agency specializing in agentic AI design, agentic design systems, and enterprise SaaS. 15+ years designing trust-by-design, human-in-the-loop AI products for Accenture, TransUnion, and CoreTechs. Schedule a free consultation."
        canonical="/"
        keywords="agentic AI design, agentic design systems, agentic UX design, AI-native product design, trust-by-design, human-in-the-loop UX, enterprise UX design agency, Chicago design agency"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'GO Design, Inc. — Agentic AI Design & Agentic Design Systems',
            description: 'Chicago design agency specializing in agentic AI design, agentic design systems, and enterprise SaaS.',
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
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does GO Design specialize in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "GO Design is a Chicago design agency specializing in agentic AI design, agentic design systems, and enterprise SaaS platforms. Founded and led by Timothy McGuire, an Agentic AI Design Director with 15+ years of experience, we design trust-by-design, human-in-the-loop AI products for healthcare, fintech, pharma, and enterprise software clients including Accenture, TransUnion, and CoreTechs.",
                },
              },
              {
                '@type': 'Question',
                name: 'What is an agentic AI designer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "An agentic AI designer specializes in designing products where AI agents act autonomously — browsing, reasoning, executing multi-step tasks, and making decisions on a user's behalf. The discipline requires expertise in trust-by-design, human-in-the-loop patterns, agentic oversight UI, and graceful AI failure design.",
                },
              },
              {
                '@type': 'Question',
                name: 'What are agentic design systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Agentic design systems are component libraries, token architectures, and pattern frameworks purpose-built for AI-native and agentic products, including components for agent status indicators, confidence signaling, and human-in-the-loop decision checkpoints.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is GO Design available for agentic AI design consulting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We accept agentic AI design consulting engagements, fractional design director partnerships, and focused AI UX strategy sessions.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I hire GO Design?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Contact us and describe your product, your users, and what you're trying to build. We respond to every inquiry and will let you know if the engagement fits.",
                },
              },
            ],
          },
        ]}
      />
      <Hero setCurrentPage={setCurrentPage} />
      <Partners />
      <HomeEditorial setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
      <ValueProposition />
      <SpecializedExpertise setCurrentPage={setCurrentPage} />
      <Testimonials />
      <FAQ />
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
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI + Agentic Experience' } },
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

function SolutionsLandingPage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="Solutions - Case Studies & Areas of Practice | GO Design"
        description="Explore GO Design's solution areas and case studies: enterprise SaaS, AI-native products, design systems, healthcare UX, fintech UX, and product modernization, backed by real client work."
        canonical="/solutions"
        keywords="UX solutions, design portfolio, enterprise SaaS design, AI-native product design, design systems, healthcare UX, fintech UX, product modernization"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Solutions',
          description: 'Solution areas and case studies covering enterprise SaaS, AI-native products, design systems, healthcare UX, fintech UX, and product modernization.',
          url: `${BASE_URL}/solutions`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <SolutionsLanding setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

function CaseStudiesPage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
      <SEOHead
        title="Design Portfolio & Case Studies - Healthcare SaaS, Enterprise UX | GO Design"
        description="Explore GO Design's portfolio of digital transformation projects. Case studies featuring CoreTechs healthcare SaaS, Accenture enterprise onboarding for 500K+ employees, and Jim Beam's cocktail discovery platform. Real results from user-centered design."
        canonical="/case-studies"
        keywords="UX case studies, design portfolio, healthcare SaaS design, enterprise UX design, digital transformation, CoreTechs, Accenture, Jim Beam"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Design Portfolio & Case Studies',
          description: 'Portfolio of digital transformation projects including healthcare SaaS, enterprise onboarding, and consumer experience design.',
          url: `${BASE_URL}/case-studies`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
    </>
  );
}

const solutionSEO: Record<string, { title: string; description: string; keywords: string }> = {
  'solutions-enterprise-saas': {
    title: 'Enterprise SaaS Design - Complex Platform UX | GO Design',
    description: 'Designing complex, multi-tenant SaaS platforms that scale without sacrificing usability: role-based access, dense information architecture, and enterprise-grade design systems.',
    keywords: 'enterprise SaaS design, multi-tenant platform UX, role-based access design, enterprise information architecture',
  },
  'solutions-ai-native-products': {
    title: 'Agentic AI Design - AI-Native Products & Trust Architecture | GO Design',
    description: 'Agentic AI design for products where AI is a first-class participant: trust-by-design architecture, confidence signaling, human-in-the-loop oversight interfaces, and agentic UX patterns.',
    keywords: 'agentic AI design, AI-native product design, agentic UX, trust-by-design, human-in-the-loop design, AI confidence signaling',
  },
  'solutions-design-systems': {
    title: 'Agentic Design Systems - Token Architecture & Component Libraries | GO Design',
    description: 'Agentic design systems: token architecture, component libraries, and pattern frameworks purpose-built for AI-native and agentic products, giving teams a shared language for shipping at speed.',
    keywords: 'agentic design systems, design systems, token architecture, component library design, pattern frameworks, design system governance',
  },
  'solutions-healthcare-ux': {
    title: 'Healthcare UX Design - Clinical & Patient Experiences | GO Design',
    description: 'Clinical and patient-facing experiences where clarity, trust, and compliance are non-negotiable, with HIPAA-aware design and human-centered workflows.',
    keywords: 'healthcare UX design, clinical workflow design, patient-facing UX, HIPAA-aware design',
  },
  'solutions-fintech-ux': {
    title: 'Fintech UX Design - Trustworthy Financial Products | GO Design',
    description: 'Designing financial products that are trustworthy, compliant, and genuinely easy to use: risk communication, regulatory UI, and explainable AI in financial contexts.',
    keywords: 'fintech UX design, financial product design, regulatory UI, risk communication design',
  },
  'solutions-product-modernization': {
    title: 'Product Modernization - Legacy Product Redesign | GO Design',
    description: 'Redesigning legacy products that have accumulated years of complexity, debt, and user frustration, while keeping business continuity and stakeholder trust intact.',
    keywords: 'product modernization, legacy product redesign, platform modernization UX',
  },
};

function SolutionDetailPage({ page, setCurrentPage }: { page: string; setCurrentPage: (page: string) => void }) {
  const seo = solutionSEO[page];
  return (
    <>
      {seo && (
        <SEOHead
          title={seo.title}
          description={seo.description}
          canonical={`/${page.replace('solutions-', 'solutions/')}`}
          keywords={seo.keywords}
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: seo.title.split(' - ')[0],
            provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
            description: seo.description,
            areaServed: { '@type': 'Country', name: 'United States' },
          }}
        />
      )}
      <SolutionDetail page={page} setCurrentPage={setCurrentPage} />
    </>
  );
}

function AboutPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="About GO Design - Timothy McGuire, 15+ Years Experience Design | Chicago"
        description="Meet Timothy McGuire, founder of GO Design with 15+ years of experience in user-centered design. Specializing in enterprise SaaS, AI-native products, and design systems. Based in Chicago, serving clients nationwide."
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
      <About setCurrentPage={setCurrentPage} />
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
  setSelectedCaseStudy: (study: string | null) => void;
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
  setSelectedCaseStudy: (study: string | null) => void;
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
  setSelectedCaseStudy: (study: string | null) => void;
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

function AgenticExperiencePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Agentic AI Design & Agentic Experience | GO Design"
        description="Agentic AI design and agentic experience design for SaaS and enterprise products. Trust-by-design frameworks, human-in-the-loop patterns, and agentic oversight UI that turn AI into something usable, controlled, and built for the real world."
        canonical="/agentic-experience"
        keywords="agentic AI design, agentic experience design, agentic UX design, AI UX design, trust-by-design framework, human-in-the-loop design, agentic oversight UI, agentic AI UX"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Agentic Experience Design',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'AI and agentic experience design services including trust-by-design frameworks, mental model mapping, AI interaction pattern selection, and responsible AI design for SaaS and enterprise products.',
          serviceType: 'AI & Agentic Experience Design',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <AgenticExperience setCurrentPage={setCurrentPage} />
    </>
  );
}

function AIExperienceArchitecturePageWrapper({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="AI Experience Architecture™ - A Framework for Trustworthy AI Products | GO Design"
        description="AI Experience Architecture™ is GO Design's framework for designing intelligent enterprise products that people understand, trust, and confidently adopt: five pillars covering signal architecture, human oversight, agentic design systems, trust architecture, and AI governance UX."
        canonical="/ai-experience-architecture"
        keywords="AI experience architecture, AI design framework, trust by design, agentic design systems, AI governance UX, human oversight design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Experience Architecture',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'A framework for designing intelligent enterprise products that people understand, trust, and confidently adopt.',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <AIExperienceArchitecturePage setCurrentPage={setCurrentPage} />
    </>
  );
}

function EnterpriseUXConsultingPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Enterprise UX Consulting & AI Strategy | GO Design"
        description="Senior UX expertise for complex enterprise products: platform redesign, UX audit and research, design systems, stakeholder alignment, and AI/UX strategy for enterprise product teams."
        canonical="/services/enterprise-ux-consulting"
        keywords="enterprise UX consulting, platform redesign, UX audit, design systems consulting, stakeholder alignment, enterprise AI strategy"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Enterprise UX Consulting',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Senior UX consulting for complex enterprise products including platform redesign, UX audits, design systems, and AI/UX strategy.',
          serviceType: 'Enterprise UX Consulting',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <EnterpriseUXConsulting setCurrentPage={setCurrentPage} />
    </>
  );
}

function SpeakingWorkshopsPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Speaking & Workshops - AI Design, Enterprise UX, Design Systems | GO Design"
        description="Conference talks and facilitated workshops on AI-native UX, agentic workflow design, design systems strategy, and enterprise UX principles, grounded in real product work."
        canonical="/services/speaking-workshops"
        keywords="UX speaking engagements, design workshops, AI design talks, design systems workshop, enterprise UX training"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Speaking & Workshops',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Conference talks and facilitated workshops on AI design, design systems, and enterprise UX.',
          serviceType: 'Speaking & Workshops',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <SpeakingWorkshops setCurrentPage={setCurrentPage} />
    </>
  );
}

function StrategySessionsPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Strategy Sessions - Focused Time With a Senior Design Team | GO Design"
        description="Short, structured design sessions for product teams and founders: design audits, AI UX strategy, advisory sessions, and team workshops. Come with a specific question, leave with a direct answer."
        canonical="/services/strategy-sessions"
        keywords="design strategy session, design audit, AI UX strategy session, design advisory, team workshop"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Strategy Sessions',
          provider: { '@type': 'ProfessionalService', name: SITE_NAME, url: BASE_URL },
          description: 'Focused, structured design strategy sessions including design audits, AI UX strategy, and advisory sessions.',
          serviceType: 'Strategy Sessions',
          areaServed: { '@type': 'Country', name: 'United States' },
        }}
      />
      <StrategySessions setCurrentPage={setCurrentPage} />
    </>
  );
}

function WorkWithMePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Work With Us - Engagement Models & Getting Started | GO Design"
        description="Find the right way to work with GO Design: enterprise UX consulting, fractional SaaS design leadership, strategy sessions, speaking and workshops, or a full-scale product redesign."
        canonical="/work-with-me"
        keywords="hire UX design agency, design engagement models, fractional design leadership, enterprise design consulting"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Work With Us',
          url: `${BASE_URL}/work-with-me`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <WorkWithMe setCurrentPage={setCurrentPage} />
    </>
  );
}

function PerspectivesPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Perspectives - How We Think About Design | GO Design"
        description="A collection of essays, frameworks, and working principles on design, AI-native product design, enterprise UX, and design systems from GO Design."
        canonical="/perspectives"
        keywords="design perspectives, design philosophy, AI-native design thinking, design process essays"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Perspectives',
          url: `${BASE_URL}/perspectives`,
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
        }}
      />
      <Perspectives setCurrentPage={setCurrentPage} />
    </>
  );
}

function MyPhilosophyPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Our Philosophy - Design Principles | GO Design"
        description="The principles that guide every design decision at GO Design: clarity over cleverness, complexity in the system not the screen, trust earned through detail, systems thinking, and inclusive design."
        canonical="/perspectives/our-philosophy"
        keywords="design philosophy, design principles, UX design values"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Design is a translation act.',
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          url: `${BASE_URL}/perspectives/our-philosophy`,
        }}
      />
      <MyPhilosophy setCurrentPage={setCurrentPage} />
    </>
  );
}

function HowIWorkPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="How We Work - Our Design Process | GO Design"
        description="Our design process from discovery through delivery: discover, define, explore, build, and ship and learn, plus how we collaborate with product managers, engineers, and stakeholders."
        canonical="/perspectives/how-we-work"
        keywords="UX design process, design methodology, design collaboration, design handoff process"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'From ambiguous problem to shipped product.',
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          url: `${BASE_URL}/perspectives/how-we-work`,
        }}
      />
      <HowIWork setCurrentPage={setCurrentPage} />
    </>
  );
}

function PerspectiveDetailPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="AI-Native Design - Perspectives | GO Design"
        description="How we think about designing products where AI is a first-class participant: trust, human-in-the-loop patterns, error UX, and mental model mapping."
        canonical="/perspectives/ai-native-design"
        keywords="AI-native design, AI UX perspectives, human-in-the-loop design, AI trust design"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'AI-Native Design',
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          url: `${BASE_URL}/perspectives/ai-native-design`,
        }}
      />
      <PerspectiveDetail setCurrentPage={setCurrentPage} />
    </>
  );
}

function WritingHubPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <SEOHead
        title="Writing - Essays on Design, AI, and Product | GO Design"
        description="Essays and articles from GO Design on AI-native design, enterprise UX, design systems, and the craft of building products that real people use."
        canonical="/perspectives/writing"
        keywords="UX writing, design essays, AI design articles, design systems articles"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'GO Design Writing',
          publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
          url: `${BASE_URL}/perspectives/writing`,
        }}
      />
      <WritingHub setCurrentPage={setCurrentPage} />
    </>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPageState] = useState('home');
  const [, setSelectedCaseStudy] = useState<string | null>(null);

  usePageTracking();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    const routes: { [key: string]: string } = {
      'home': '/',
      'services': '/services',
      'solutions': '/solutions',
      'case-studies': '/case-studies',
      'solutions-enterprise-saas': '/solutions/enterprise-saas',
      'solutions-ai-native-products': '/solutions/ai-native-products',
      'solutions-design-systems': '/solutions/design-systems',
      'solutions-healthcare-ux': '/solutions/healthcare-ux',
      'solutions-fintech-ux': '/solutions/fintech-ux',
      'solutions-product-modernization': '/solutions/product-modernization',
      'about': '/about',
      'contact': '/contact',
      'saas-product-design': '/saas-product-design',
      'marketing-web-design': '/marketing-web-design',
      'mobile-web-design': '/mobile-web-design',
      'case-study-1': '/case-study/1',
      'case-study-2': '/case-study/2',
      'case-study-3': '/case-study/3',
      'fractional-saas-designer': '/fractional-saas-designer',
      'agentic-experience': '/agentic-experience',
      'ai-experience-architecture': '/ai-experience-architecture',
      'enterprise-ux-consulting': '/services/enterprise-ux-consulting',
      'speaking-workshops': '/services/speaking-workshops',
      'strategy-sessions': '/services/strategy-sessions',
      'work-with-me': '/work-with-me',
      'perspectives': '/perspectives',
      'perspectives-our-philosophy': '/perspectives/our-philosophy',
      'perspectives-how-we-work': '/perspectives/how-we-work',
      'perspectives-ai-native-design': '/perspectives/ai-native-design',
      'perspectives-writing': '/perspectives/writing',
    };
    navigate(routes[page] ?? (page.startsWith('/') ? page : '/'));
  };

  React.useEffect(() => {
    const path = location.pathname;
    const pageMap: { [key: string]: string } = {
      '/': 'home',
      '/services': 'services',
      '/solutions': 'solutions',
      '/case-studies': 'case-studies',
      '/solutions/enterprise-saas': 'solutions-enterprise-saas',
      '/solutions/ai-native-products': 'solutions-ai-native-products',
      '/solutions/design-systems': 'solutions-design-systems',
      '/solutions/healthcare-ux': 'solutions-healthcare-ux',
      '/solutions/fintech-ux': 'solutions-fintech-ux',
      '/solutions/product-modernization': 'solutions-product-modernization',
      '/about': 'about',
      '/contact': 'contact',
      '/saas-product-design': 'saas-product-design',
      '/marketing-web-design': 'marketing-web-design',
      '/mobile-web-design': 'mobile-web-design',
      '/case-study/1': 'case-study-1',
      '/case-study/2': 'case-study-2',
      '/case-study/3': 'case-study-3',
      '/fractional-saas-designer': 'fractional-saas-designer',
      '/agentic-experience': 'agentic-experience',
      '/ai-experience-architecture': 'ai-experience-architecture',
      '/services/enterprise-ux-consulting': 'enterprise-ux-consulting',
      '/services/speaking-workshops': 'speaking-workshops',
      '/services/strategy-sessions': 'strategy-sessions',
      '/work-with-me': 'work-with-me',
      '/perspectives': 'perspectives',
      '/perspectives/our-philosophy': 'perspectives-our-philosophy',
      '/perspectives/how-we-work': 'perspectives-how-we-work',
      '/perspectives/ai-native-design': 'perspectives-ai-native-design',
      '/perspectives/writing': 'perspectives-writing',
    };
    setCurrentPageState(pageMap[path] || 'home');
  }, [location.pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/services" element={<ServicesPage setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions" element={<SolutionsLandingPage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-studies" element={<CaseStudiesPage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/solutions/enterprise-saas" element={<SolutionDetailPage page="solutions-enterprise-saas" setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions/ai-native-products" element={<SolutionDetailPage page="solutions-ai-native-products" setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions/design-systems" element={<SolutionDetailPage page="solutions-design-systems" setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions/healthcare-ux" element={<SolutionDetailPage page="solutions-healthcare-ux" setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions/fintech-ux" element={<SolutionDetailPage page="solutions-fintech-ux" setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions/product-modernization" element={<SolutionDetailPage page="solutions-product-modernization" setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/saas-product-design" element={<SaasPage setCurrentPage={setCurrentPage} />} />
          <Route path="/marketing-web-design" element={<MarketingPage setCurrentPage={setCurrentPage} />} />
          <Route path="/mobile-web-design" element={<MobilePage setCurrentPage={setCurrentPage} />} />
          <Route path="/case-study/1" element={<CaseStudy1Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/2" element={<CaseStudy2Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/3" element={<CaseStudy3Page setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/fractional-saas-designer" element={<FractionalPage setCurrentPage={setCurrentPage} />} />
          <Route path="/agentic-experience" element={<AgenticExperiencePage setCurrentPage={setCurrentPage} />} />
          <Route path="/ai-experience-architecture" element={<AIExperienceArchitecturePageWrapper setCurrentPage={setCurrentPage} />} />
          <Route path="/services/enterprise-ux-consulting" element={<EnterpriseUXConsultingPage setCurrentPage={setCurrentPage} />} />
          <Route path="/services/speaking-workshops" element={<SpeakingWorkshopsPage setCurrentPage={setCurrentPage} />} />
          <Route path="/services/strategy-sessions" element={<StrategySessionsPage setCurrentPage={setCurrentPage} />} />
          <Route path="/work-with-me" element={<WorkWithMePage setCurrentPage={setCurrentPage} />} />
          <Route path="/perspectives" element={<PerspectivesPage setCurrentPage={setCurrentPage} />} />
          <Route path="/perspectives/our-philosophy" element={<MyPhilosophyPage setCurrentPage={setCurrentPage} />} />
          <Route path="/perspectives/how-we-work" element={<HowIWorkPage setCurrentPage={setCurrentPage} />} />
          <Route path="/perspectives/ai-native-design" element={<PerspectiveDetailPage setCurrentPage={setCurrentPage} />} />
          <Route path="/perspectives/writing" element={<WritingHubPage setCurrentPage={setCurrentPage} />} />
          <Route path="/analytics" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-6 h-6 border-2 border-neutral-300 border-t-neutral-800 rounded-full animate-spin" /></div>}><Analytics /></Suspense>} />
          <Route path="/design-preview" element={<ThemeShowcase />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
