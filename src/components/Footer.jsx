import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Admissions 2026–27', to: '/admissions' },
  { label: 'Academic Programs', to: '/courses' },
  { label: 'Career & Placements', to: '/placements' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Latest News & Events', to: '/events' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const departments = [
  { label: 'Computer Science & IT', to: '/courses' },
  { label: 'Artificial Intelligence', to: '/courses' },
  { label: 'Cyber Security', to: '/courses' },
  { label: 'Commerce & Accounting', to: '/courses' },
  { label: 'Business Administration', to: '/courses' },
  { label: 'Visual Communication', to: '/courses' },
];

const resources = [
  { label: 'Student Portal', to: '/portal' },
  { label: 'Online Fees Payment', to: '/portal' },
  { label: 'Academic Calendar', to: '/portal' },
  { label: 'Exam Results', to: '/portal' },
  { label: 'Downloads & Circulars', to: '/portal' },
  { label: 'Library Catalog', to: '/portal' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#1B1B1B',
        color: '#FFFFFF',
        borderTop: '1px solid #2D2D2D',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Top Footer Columns */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <img
                src="/images/logo/rd.png"
                alt="RD National College Logo"
                style={{ width: 32, height: 32, objectFit: 'contain' }}
              />
              <span style={{
                fontWeight: 700,
                fontSize: 16,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
              }}>
                RD National College
              </span>
            </Link>
            <p style={{
              fontSize: 14,
              color: '#A6A6A6',
              lineHeight: 1.6,
              maxWidth: 260,
            }}>
              A premier institution in Erode, Tamil Nadu, committed to engineering a future of academic excellence, tech innovation, and career success.
            </p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {['NAAC Accredited', 'UGC Recognized', 'AICTE Approved'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 9,
                    fontFamily: 'var(--font-mono)',
                    color: '#0067B8',
                    padding: '3px 8px',
                    backgroundColor: 'rgba(0,103,184,0.1)',
                    border: '1px solid rgba(0,103,184,0.2)',
                    borderRadius: 2,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#F5F5F5',
              marginBottom: 18,
            }}>
              Admissions &amp; Quick Links
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={{ fontSize: 13.5, color: '#A6A6A6', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#F5F5F5',
              marginBottom: 18,
            }}>
              Departments
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {departments.map((dept) => (
                <li key={dept.label}>
                  <Link
                    to={dept.to}
                    style={{ fontSize: 13.5, color: '#A6A6A6', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    className="hover:text-white"
                  >
                    {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <h3 style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#F5F5F5',
                marginBottom: 12,
              }}>
                Campus Address
              </h3>
              <p style={{ fontSize: 13.5, color: '#A6A6A6', lineHeight: 1.6 }}>
                Chinniyampalayam, Karur Main Road,<br />
                Erode – 638 151, Tamil Nadu, India
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#F5F5F5',
                marginBottom: 8,
              }}>
                Enquiries
              </h3>
              <p style={{ fontSize: 13.5, color: '#A6A6A6', lineHeight: 1.6 }}>
                Email: <a href="mailto:info@rdcollege.in" style={{ color: '#0067B8', textDecoration: 'none' }} className="hover:underline">info@rdcollege.in</a><br />
                Phone: <a href="tel:+917373747474" style={{ color: '#0067B8', textDecoration: 'none' }} className="hover:underline">+91 7373 747 474</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div style={{ borderTop: '1px solid #2D2D2D', backgroundColor: '#111111' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 12,
          color: '#7A7A7A',
        }}>
          <div>
            © {currentYear} RD National College of Arts &amp; Science. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Affiliated to Periyar University, Salem</span>
            <span>NAAC Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
