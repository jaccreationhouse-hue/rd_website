import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PortalHub from './pages/PortalHub';
import Placements from './pages/Placements';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* Main content — push down by header height */}
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<PortalHub />} />
          <Route path="/placements" element={<Placements />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: '80vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '80px 24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontSize: 80,
                    fontWeight: 800,
                    color: '#e2e8f0',
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  404
                </div>
                <h1
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#0A2240',
                    marginBottom: 12,
                  }}
                >
                  Page Not Found
                </h1>
                <p style={{ color: '#64748b', marginBottom: 28, maxWidth: 380, fontSize: 15 }}>
                  The page you're looking for doesn't exist. Head back home or explore our programmes.
                </p>
                <a href="/" className="btn-primary">Go to Home</a>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
