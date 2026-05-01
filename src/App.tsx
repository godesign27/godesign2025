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

function HomePage({ setCurrentPage, setSelectedCaseStudy }: {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}) {
  return (
    <>
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

  const titleMap: { [key: string]: string } = {
    'home': 'GO Design, Inc. - Expert UI/UX Design & Product Development | Chicago',
    'services': 'Services | GO Design',
    'solutions': 'Solutions | GO Design',
    'about': 'About | GO Design',
    'contact': 'Contact | GO Design',
    'saas-product-design': 'SaaS Product Design | GO Design',
    'marketing-web-design': 'Marketing Web Design | GO Design',
    'mobile-web-design': 'Mobile Web Design | GO Design',
    'fractional-saas-designer': 'Fractional SaaS Designer | GO Design',
  };

  React.useEffect(() => {
    document.title = titleMap[currentPage] || 'GO Design, Inc.';
  }, [currentPage]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/services" element={<Services setCurrentPage={setCurrentPage} />} />
          <Route path="/solutions" element={<Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/saas-product-design" element={<SaasProductDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/marketing-web-design" element={<MarketingWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/mobile-web-design" element={<MobileWebDesign setCurrentPage={setCurrentPage} />} />
          <Route path="/case-study/1" element={<CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/2" element={<CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/case-study/3" element={<CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />} />
          <Route path="/fractional-saas-designer" element={<FractionalSaasDesigner setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
