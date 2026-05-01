import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import SpecializedExpertise from './components/SpecializedExpertise';
import SuccessStories from './components/SuccessStories';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Services from './components/Services';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import MarketingWebDesign from './components/MarketingWebDesign';
import SaasProductDesign from './components/SaasProductDesign';
import MobileWebDesign from './components/MobileWebDesign';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';
import CaseStudyDetail from './components/CaseStudyDetail';
import CaseStudyDetail2 from './components/CaseStudyDetail2';
import CaseStudyDetail3 from './components/CaseStudyDetail3';

const CASE_STUDY_ROUTES: Record<string, string> = {
  'CoreTechs SaaS Healthcare Product': '/solutions/coretechs',
  'Accenture - Employee Onboarding': '/solutions/accenture-onboarding',
  'Jim Beam - The Cocktail Project': '/solutions/jim-beam-cocktail-project',
};

const PAGE_ROUTES: Record<string, string> = {
  home: '/',
  services: '/services',
  solutions: '/solutions',
  about: '/about',
  contact: '/contact',
  'marketing-web-design': '/services/marketing-web-design',
  'saas-product-design': '/services/saas-product-design',
  'mobile-web-design': '/services/mobile-web-design',
  'fractional-saas-designer': '/fractional-saas-designer',
};

const HomePage: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const setSelectedCaseStudy = (study: string) => {
    const caseStudyRoute = CASE_STUDY_ROUTES[study];
    if (caseStudyRoute) {
      setCurrentPage(caseStudyRoute);
    }
  };

  return (
    <>
      <Hero />
      <ValueProposition />
      <SpecializedExpertise setCurrentPage={setCurrentPage} />
      <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
      <Partners />
      <Testimonials />
      <CTA setCurrentPage={setCurrentPage} />
    </>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    document.title = 'Fractional SaaS Designer | GO Design';
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const setCurrentPage = (page: string) => {
    navigate(PAGE_ROUTES[page] || page);
  };

  const currentPage = React.useMemo(() => {
    const pathname = location.pathname;
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/services')) return 'services';
    if (pathname.startsWith('/solutions')) return 'solutions';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname === '/fractional-saas-designer') return 'fractional-saas-designer';
    return 'home';
  }, [location.pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} />} />
          <Route path="/services" element={<Services setCurrentPage={setCurrentPage} />} />
          <Route
            path="/solutions"
            element={
              <Solutions
                setCurrentPage={setCurrentPage}
                setSelectedCaseStudy={(study) => navigate(CASE_STUDY_ROUTES[study] || '/solutions')}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/marketing-web-design" element={<MarketingWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/services/saas-product-design" element={<SaasProductDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/services/mobile-web-design" element={<MobileWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/fractional-saas-designer" element={<FractionalSaasDesigner setCurrentPage={setCurrentPage} />} />
          <Route
            path="/solutions/coretechs"
            element={<CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={() => {}} />}
          />
          <Route
            path="/solutions/accenture-onboarding"
            element={<CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={() => {}} />}
          />
          <Route
            path="/solutions/jim-beam-cocktail-project"
            element={<CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={() => {}} />}
          />
          <Route path="*" element={<HomePage setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
