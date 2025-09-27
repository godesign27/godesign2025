import React from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Update document title
    document.title = 'GO Design | Human-Centered Digital Design Agency';
    
    // Find the element with the data-default attribute and update favicon if it exists
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      // Update favicon
      const faviconLink = document.querySelector('link[rel="icon"]');
      if (faviconLink) {
        faviconLink.setAttribute('href', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_logo.svg');
      }
    }
  }, []);

  // Reset selectedCaseStudy when changing pages
  React.useEffect(() => {
    if (currentPage !== 'solutions' && selectedCaseStudy) {
      setSelectedCaseStudy(null);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Partners />
            <ValueProposition />
            <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
            <Testimonials />
            <SpecializedExpertise setCurrentPage={setCurrentPage} />
            <CTA setCurrentPage={setCurrentPage} />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'marketing-web-design':
        return <MarketingWebDesign setCurrentPage={setCurrentPage} />;
      case 'saas-product-design':
        return <SaasProductDesign setCurrentPage={setCurrentPage} />;
      case 'mobile-web-design':
        return <MobileWebDesign setCurrentPage={setCurrentPage} />;
      case 'solutions':
        if (selectedCaseStudy === 'CoreTechs SaaS Healthcare Product') {
          return <CaseStudyDetail setCurrentPage={setCurrentPage} />;
        } else if (selectedCaseStudy === 'Accenture - Employee Onboarding') {
          return <CaseStudyDetail2 setCurrentPage={setCurrentPage} />;
        } else if (selectedCaseStudy === 'Jim Beam - The Cocktail Project') {
          return <CaseStudyDetail3 setCurrentPage={setCurrentPage} />;
        } else {
          return (
            <Solutions 
              setCurrentPage={setCurrentPage} 
              setSelectedCaseStudy={setSelectedCaseStudy}
            />
          );
        }
      default:
        return null;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;