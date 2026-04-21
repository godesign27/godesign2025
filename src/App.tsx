import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';

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
    const routes: { [key: string]: string } = {
      'home': '/',
    };
    navigate(routes[page] || '/');
  };

  const currentPage = 'fractional-saas-designer';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<FractionalSaasDesigner setCurrentPage={setCurrentPage} />} />
          <Route path="/fractional-saas-designer" element={<FractionalSaasDesigner setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
