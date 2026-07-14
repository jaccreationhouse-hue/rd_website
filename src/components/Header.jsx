import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/courses', label: 'Academics' },
  { to: '/placements', label: 'Placements' },
  { to: '/campus-life', label: 'Campus Life' },
  { to: '/events', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E5E5',
          transition: 'box-shadow 0.2s ease',
          boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}>

            {/* Logo Wordmark */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                textDecoration: 'none',
                transition: 'opacity 0.15s ease',
              }}
              className="hover:opacity-80"
            >
              <img
                src="/images/logo/rd.png"
                alt="RD National Logo"
                style={{ width: 36, height: 36, objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#1B1B1B',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}>
                  RD National College
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  fontSize: 8.5,
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: 1,
                }}>
                  Arts &amp; Science · Erode
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    padding: '6px 8px',
                    fontFamily: "var(--font-sans)",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 13,
                    color: isActive ? '#0067B8' : '#1B1B1B',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  })}
                  className={({ isActive }) =>
                    `fluent-nav-link ${isActive ? 'fluent-nav-link-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Search, Portal, Apply */}
            <div className="hidden lg:flex items-center gap-4">
              
              {/* Refined Expandable Search Option */}
              {searchOpen ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '1px solid #E5E5E5',
                  padding: '4px 10px',
                  borderRadius: 4,
                  backgroundColor: '#F5F5F5',
                  transition: 'width 0.2s ease',
                }}>
                  <input
                    type="text"
                    placeholder="Search site..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{
                      border: 'none',
                      background: 'none',
                      outline: 'none',
                      fontSize: 13,
                      color: '#1B1B1B',
                      width: 140,
                    }}
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 11,
                      color: '#666666',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    aria-label="Close search"
                  >
                    <X size={13} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1B1B1B',
                    cursor: 'pointer',
                    padding: 6,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 4,
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  aria-label="Open search"
                >
                  <Search size={16} />
                </button>
              )}

              <Link
                to="/portal"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#1B1B1B',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s ease',
                }}
                className="hover:text-[#0067B8]"
              >
                <User size={14} />
                Student Portal
              </Link>

              <Link
                to="/admissions"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 18px',
                  backgroundColor: '#0067B8',
                  color: '#FFFFFF',
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 13,
                  textDecoration: 'none',
                  borderRadius: 4,
                  transition: 'background-color 0.15s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#005A9E';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0067B8';
                }}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Navigation Toggle (Hamburger button) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center"
              style={{
                background: 'none',
                border: 'none',
                padding: 8,
                cursor: 'pointer',
                color: '#1B1B1B',
              }}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          backgroundColor: '#FFFFFF',
          paddingTop: 64,
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid #E5E5E5',
        }}>
          <nav style={{ padding: '16px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '12px 0',
                  fontFamily: "var(--font-sans)",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 16,
                  color: isActive ? '#0067B8' : '#1B1B1B',
                  textDecoration: 'none',
                  borderBottom: '1px solid #F5F5F5',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ padding: '24px', backgroundColor: '#F5F5F5', borderTop: '1px solid #E5E5E5' }}>
            <Link
              to="/admissions"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                backgroundColor: '#0067B8',
                color: '#FFFFFF',
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                borderRadius: 4,
                marginBottom: 12,
              }}
            >
              Apply Now
            </Link>
            <Link
              to="/portal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: '#1B1B1B',
                textDecoration: 'none',
              }}
            >
              <User size={15} />
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
