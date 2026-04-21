import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ValueProposition from './components/ValueProposition';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Solutions from './components/Solutions';
import CaseStudyDetail from './components/CaseStudyDetail';
import CaseStudyDetail2 from './components/CaseStudyDetail2';
import CaseStudyDetail3 from './components/CaseStudyDetail3';
import MarketingWebDesign from './components/MarketingWebDesign';
import SpecializedExpertise from './components/SpecializedExpertise';
import SaasProductDesign from './components/SaasProductDesign';
import MobileWebDesign from './components/MobileWebDesign';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.title = 'GO Design | Human-Centered Digital Design Agency';
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const setCurrentPage = (page: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'contact': '/contact',
      'services': '/services',
      'solutions': '/solutions',
      'marketing-web-design': '/services/marketing-web-design',
      'saas-product-design': '/services/saas-product-design',
      'mobile-web-design': '/services/mobile-web-design'
    };
    navigate(routes[page] || '/');
  };

  const currentPage = React.useMemo(() => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/services') return 'services';
    if (path === '/solutions') return 'solutions';
    if (path.startsWith('/services/')) {
      const service = path.split('/services/')[1];
      return service;
    }
    return 'home';
  }, [location.pathname]);

  const HomePage = () => (
    <>
      <Hero />
      <Partners />
      <ValueProposition />
      <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
      <Testimonials />
      <SpecializedExpertise setCurrentPage={setCurrentPage} />
      <CTA setCurrentPage={setCurrentPage} />
    </>
  );

  const SolutionsPage = () => {
    if (selectedCaseStudy === 'CoreTechs SaaS Healthcare Product') {
      return <CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
    } else if (selectedCaseStudy === 'Accenture - Employee Onboarding') {
      return <CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
    } else if (selectedCaseStudy === 'Jim Beam - The Cocktail Project') {
      return <CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
    }
    return <Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services setCurrentPage={setCurrentPage} />} />
          <Route path="/services/marketing-web-design" element={<MarketingWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/services/saas-product-design" element={<SaasProductDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/services/mobile-web-design" element={<MobileWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/fractional-saas-designer" element={<FractionalSaasDesigner setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;