import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, FileText, Download, Award, Briefcase, GraduationCap,
  Building, User, CreditCard, ClipboardList, Image, Database, BookOpen, CheckCircle,
  Code, Cpu, Camera, TrendingUp
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';

// Fluent system style colors
const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const quickAccessTiles = [
  { title: 'Admissions', desc: 'Admission guidance, online applications & instructions.', to: '/admissions', size: 'col-span-1 md:col-span-2', icon: GraduationCap, highlight: true },
  { title: 'Departments', desc: 'Explore our 4 core academic wings.', to: '/courses', size: 'col-span-1', icon: Building },
  { title: 'Student Portal', desc: 'Access class logs, results & circulars.', to: '/admissions', size: 'col-span-1', icon: User },
  { title: 'Fee Structure', desc: 'Direct university fee schedules.', to: '/admissions', size: 'col-span-1', icon: CreditCard },
  { title: 'Scholarships', desc: 'Financial assistance programs.', to: '/admissions', size: 'col-span-1', icon: Award },
  { title: 'Placements', desc: 'Placement records & recruiters drives.', to: '/about', size: 'col-span-1 md:col-span-2', icon: Briefcase, highlight: true },
  { title: 'Exam Cell', desc: 'Schedules, datesheets & results.', to: '/admissions', size: 'col-span-1', icon: ClipboardList },
  { title: 'Campus Gallery', desc: 'Tour campus spaces visually.', to: '/campus-life', size: 'col-span-1', icon: Image },
  { title: 'Research & Labs', desc: 'Specialized technology research labs.', to: '/about', size: 'col-span-1', icon: Database },
  { title: 'Library Catalog', desc: '20,000+ reference volumes.', to: '/campus-life', size: 'col-span-1', icon: BookOpen },
  { title: 'Downloads', desc: 'Syllabus, formats & brochures.', to: '/contact', size: 'col-span-1', icon: Download },
];




function InfoTile({ tile }) {
  const [hovered, setHovered] = useState(false);
  const Icon = tile.icon;
  const isHighlighted = tile.highlight;

  return (
    <Link
      to={tile.to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: 160,
        backgroundColor: isHighlighted 
          ? (hovered ? '#EBF3FC' : '#F3F8FC')
          : (hovered ? '#FFFFFF' : '#FAFAFA'),
        border: hovered ? '1px solid #0067B8' : '1px solid #E5E5E5',
        borderLeft: isHighlighted 
          ? '4px solid #0067B8' 
          : (hovered ? '4px solid #0078D4' : '4px solid transparent'),
        borderRadius: 4,
        padding: '24px',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: hovered 
          ? '0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)' 
          : '0 2px 4px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.01)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          {Icon && (
            <Icon 
              size={22} 
              style={{ 
                color: hovered ? '#0067B8' : (isHighlighted ? '#0067B8' : '#666666'),
                transform: hovered ? 'scale(1.1) translateY(-2px)' : 'none',
                transition: 'transform 0.2s ease, color 0.2s ease',
              }} 
            />
          )}
        </div>
        
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 16.5,
          color: '#1B1B1B',
          marginBottom: 6,
        }}>
          {tile.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          color: '#666666',
          lineHeight: 1.45,
        }}>
          {tile.desc}
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 16,
      }}>
        <ArrowRight 
          size={14} 
          style={{ 
            color: '#0067B8',
            transform: hovered ? 'translateX(4px)' : 'none',
            transition: 'transform 0.2s ease',
          }} 
        />
      </div>
    </Link>
  );
}

const academicPrograms = [
  {
    name: 'Computer Applications',
    desc: 'Focus on full-stack application development, software engineering, and database management systems. High-intensity practical coding hours in our specialized computer laboratories.',
    degree: 'BCA (3 Years)',
    image: '/images/life at rd/lib4.jpg',
    to: '/courses',
    keyHighlights: [
      'Apple iOS Ecosystem integration',
      'Full-stack JS/TS specialization',
      'Incubated in Stark Labs',
      'Direct Zoho recruiter link'
    ]
  },
  {
    name: 'Science & Information Technology',
    desc: 'Accredited degree courses spanning B.Sc Computer Science, B.Sc Artificial Intelligence & Data Science, and B.Sc Cyber Security. Co-designed with global technology leaders to deliver modern competencies.',
    degree: 'B.Sc Degrees (3 Years)',
    image: '/images/life at rd/stark.jpg',
    to: '/courses',
    keyHighlights: [
      'Microsoft Azure sandbox access',
      'AI model training hardware',
      'Cyber Security red-team lab',
      'Python AI curriculum'
    ]
  },
  {
    name: 'Arts & Media Communications',
    desc: 'Nurturing visual storytellers and creators through B.Sc Visual Communication. Hands-on access to premium camera gear, dedicated photography shoot floors, and post-production studios.',
    degree: 'B.Sc VisCom (3 Years)',
    image: '/images/life at rd/cdf.jpg',
    to: '/courses',
    keyHighlights: [
      'Dedicated visual studio shoot floors',
      'High-end DSLR & cinema rigs',
      'Audio dubbing & post suite',
      'Annual media showcases'
    ]
  },
  {
    name: 'Commerce & Management Studies',
    desc: 'Providing analytical, corporate finance, and administrative skills through BBA and multiple B.Com disciplines. Integrates placement preparation and guest lectures from industry professionals.',
    degree: 'BBA & B.Com (3 Years)',
    image: '/images/life at rd/boardgame.jpg',
    to: '/courses',
    keyHighlights: [
      'Corporate accounting systems prep',
      'Soft skills & management mock modules',
      'Stock market simulator labs',
      'Internships with top banks'
    ]
  },
];

const editorialWhyBlocks = [
  {
    title: 'Industry Connected Curriculum',
    desc: 'We continuously sync our course curriculum with modern technological advancements, incorporating certifications from industry leaders including Apple, Microsoft, and Zoho.',
  },
  {
    title: 'Experienced Faculty Guidance',
    desc: 'Our academic directors and senior professors hold advanced doctoral research degrees and bring years of combined teaching and industrial consultancy experience.',
  },
  {
    title: 'Modern Lab Infrastructure',
    desc: 'From our Stark Industries Lab to professional photography studio shoot floors, our students train on professional-grade equipment, hardware, and high-speed network systems.',
  },
  {
    title: 'Placement & Career Focus',
    desc: 'Our placements cell organises regular placement drives, professional resume writing sessions, mock interviews, and technical mock challenges to secure immediate employment.',
  },
];

const recruiterLogos = ['Microsoft', 'Infosys', 'TCS', 'Zoho', 'Accenture', 'Wipro', 'HCL', 'Tech Mahindra'];

const newsArticles = [
  {
    title: 'RD National Hackathon 2026 Concludes with 48-Hour Innovation Drive',
    desc: 'Over 120 student programmers competed to build software prototypes solving rural Erode healthcare and logistical challenges. Top cash prizes awarded by industry judges.',
    date: 'July 12, 2026',
    category: 'Technology',
    image: '/images/life at rd/microsoft.jpg',
  },
  {
    title: 'Apple Developer Academy Registrations Open for New Batch',
    desc: 'Eligible B.Sc and BCA students can apply for the Apple Developer certification course starting next month.',
    date: 'July 10, 2026',
    category: 'Academics',
  },
  {
    title: 'Costume Design & Fashion Annual Exhibition Showcases Student Wearables',
    desc: 'Our annual creative apparel showcase featured sustainable costume designs completely patterned and stitched by CDF students.',
    date: 'July 05, 2026',
    category: 'Events',
  },
];

const eventsTimeline = [
  {
    title: 'Admissions & Selection Counselling',
    desc: 'Verification of eligibility documents, selection list releases, and student onboarding briefings.',
    date: 'July 15 – 30, 2026',
    status: 'Upcoming',
  },
  {
    title: 'Commencement of Odd Semester Classes',
    desc: 'Official academic session inauguration, class schedules rollout, and induction program.',
    date: 'August 03, 2026',
    status: 'Upcoming',
  },
  {
    title: 'Continuous Internal Assessment (CIA) - I',
    desc: 'Written progress tests and laboratory assessment modules for all departments.',
    date: 'September 14 – 19, 2026',
    status: 'Upcoming',
  },
];

const testimonials = [
  {
    quote: "Training in the Stark Industries Lab and taking the Apple Developer course directly enabled me to build a portfolio that stood out. I secured an immediate placement offer at Zoho right after graduation.",
    author: "Pranesh K.",
    meta: "BCA Graduate, Batch of 2025",
    image: "/images/team/radha.jpg", // Student photo or placeholder
  },
  {
    quote: "The visual communication infrastructure here is unmatched. The shoot floors and camera equipment we use daily are exactly what professionals use in the industry. It made my transition to media production seamless.",
    author: "Sneha M.",
    meta: "B.Sc VisCom Student",
    image: "/images/team/keerthana.jpg",
  }
];

export default function Home() {
  const [activeStream, setActiveStream] = useState(0);

  return (
    <>
      <SEOMeta
        title="RD National College of Arts and Science, Erode"
        description="Empowering Future Leaders through Microsoft Fluent inspired education. Browse BCA, B.Sc AI & Data Science, VisCom, and Commerce degrees. Admissions open 2026–27."
      />

      {/* ── HERO SECTION (Cinematic split layout) ── */}
      <section 
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: GRAY,
          paddingTop: 64,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 lg:py-24">
            
            {/* Hero Left Text */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: BLUE,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 16,
                }}>
                  RD National College · admissions 2026–27
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 4.5vw, 64px)',
                  lineHeight: 1.15,
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginBottom: 24,
                }}>
                  Empowering Future Leaders Through Knowledge, Innovation &amp; Excellence
                </h1>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(16px, 1.25vw, 20px)',
                  color: MUTED,
                  lineHeight: 1.6,
                  maxWidth: 600,
                  marginBottom: 40,
                }}>
                  A future-ready institution committed to academic excellence, industry collaboration, research, and holistic student development. Join us to engineer your professional career path.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Link to="/admissions" className="fluent-btn-primary" style={{ minWidth: 160 }}>
                    Apply Now
                  </Link>
                  <Link to="/courses" className="fluent-btn-secondary" style={{ minWidth: 160 }}>
                    Explore Programs
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Right Image (Fluent Clean) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.1}>
                <div style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                  backgroundColor: WHITE,
                  padding: 8,
                }}>
                  <img
                    src="/images/life at rd/frontviewiland.jpg"
                    alt="RD National College Cinematic Campus Front View"
                    style={{
                      width: '100%',
                      height: 380,
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK ACCESS ADAPTIVE TILES ── */}
      <section style={{ backgroundColor: WHITE, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48, maxWidth: 640 }}>
              <span className="section-eyebrow">Quick Access</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 32,
                color: DARK,
                letterSpacing: '-0.01em',
              }}>
                Fluent Information Portal
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: MUTED, marginTop: 12 }}>
                Click on any tile below to navigate directly to student services, departments, and downloads.
              </p>
            </div>
          </ScrollReveal>

          {/* Adaptive Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quickAccessTiles.map((tile, i) => (
              <ScrollReveal key={tile.title} delay={i * 0.05} className={tile.size}>
                <InfoTile tile={tile} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── ABOUT SECTION (Split layout) ── */}
      <section style={{ backgroundColor: GRAY, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: About Image */}
            <ScrollReveal>
              <div style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                backgroundColor: WHITE,
                padding: 6,
              }}>
                <img
                  src="/images/life at rd/ilandopen.jpg"
                  alt="RD National iLand Collaborative Workspace Welcome"
                  style={{
                    width: '100%',
                    height: 420,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Editorial Typography Messages */}
            <div>
              <ScrollReveal delay={0.1}>
                <span className="section-eyebrow">About the Institution</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 36,
                  color: DARK,
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                }}>
                  Commitment to Quality &amp; Innovation
                </h2>
                
                {/* Tabs / Messages blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: 'uppercase', color: BLUE, marginBottom: 6 }}>
                      Vision &amp; Mission
                    </h3>
                    <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.6 }}>
                      To be a premier institution that integrates industry certification, academic knowledge, and research excellence to groom ethical, capable global citizens.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: 'uppercase', color: BLUE, marginBottom: 6 }}>
                      Chairman's Message
                    </h3>
                    <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.6 }}>
                      "We build environments where modern tech practices intersect with academic fundamentals. Innovation thrives where curiosity meets opportunity." — Mr. Raghul S, Chairman
                    </p>
                  </div>
                </div>

                <Link to="/about" className="fluent-btn-secondary">
                  Learn More About Us
                </Link>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── ACADEMIC PROGRAMS (Premium Grid Layout) ── */}
      <section style={{ backgroundColor: WHITE, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          
          <ScrollReveal>
            <div style={{ marginBottom: 64, maxWidth: 640 }}>
              <span className="section-eyebrow">Academics</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 32,
                color: DARK,
                letterSpacing: '-0.01em',
              }}>
                Academic Programs &amp; Streams
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: MUTED, marginTop: 12 }}>
                Explore modern curriculum tracks customized to deliver solid placements and software build capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid of 4 Academic Stream Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(() => {
              const streamMeta = [
                { icon: Code, color: '#0067B8', lightBg: '#F3F8FC' },          // BCA -> Blue
                { icon: Cpu, color: '#4F46E5', lightBg: '#F5F3FF' },           // Science & IT -> Indigo
                { icon: Camera, color: '#D83B01', lightBg: '#FFF5F1' },        // Arts -> Rust/Orange
                { icon: TrendingUp, color: '#107C10', lightBg: '#F0F9F0' }     // Commerce -> Green
              ];

              return academicPrograms.map((program, idx) => {
                const meta = streamMeta[idx] || { icon: BookOpen, color: BLUE, lightBg: '#F5F5F5' };
                const Icon = meta.icon;

                return (
                <ScrollReveal key={program.name} delay={idx * 0.05}>
                  <div 
                    style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderTop: `4px solid ${meta.color}`,
                      borderRadius: 6,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    className="hover:-translate-y-1.5 hover:shadow-lg group"
                  >
                    {/* Header Image Block */}
                    <div style={{ height: 220, overflow: 'hidden', position: 'relative', backgroundColor: GRAY }}>
                      <img 
                        src={program.image} 
                        alt={program.name} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                        className="group-hover:scale-103"
                      />
                      {/* Floating Degree Tag */}
                      <span style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: WHITE,
                        backgroundColor: meta.color,
                        padding: '4px 12px',
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      }}>
                        {program.degree}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: meta.lightBg,
                            color: meta.color,
                          }}>
                            <Icon size={16} />
                          </div>
                          <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: 20,
                            color: DARK,
                          }}>
                            {program.name}
                          </h3>
                        </div>

                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14,
                          color: MUTED,
                          lineHeight: 1.6,
                        }}>
                          {program.desc}
                        </p>

                        {/* Highlights */}
                        <div style={{ marginTop: 12, marginBottom: 20 }}>
                          <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 9.5,
                            fontWeight: 600,
                            color: DARK,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 10,
                          }}>
                            Key Focus Areas
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {program.keyHighlights.map((hl) => (
                              <div key={hl} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <CheckCircle size={13} style={{ color: meta.color, flexShrink: 0 }} />
                                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: DARK }}>
                                  {hl}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: `1px solid ${BORDER}` }}>
                        <Link 
                          to={program.to} 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontFamily: 'var(--font-sans)',
                            fontSize: 14,
                            fontWeight: 600,
                            color: meta.color,
                            textDecoration: 'none',
                            transition: 'gap 0.2s',
                          }}
                          className="hover:gap-3"
                        >
                          Explore Stream Catalog <ArrowRight size={14} />
                        </Link>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            });
          })()}
          </div>
        </div>
      </section>

      {/* ── WHY RD NATIONAL (Editorial typography, no icons) ── */}
      <section style={{ backgroundColor: GRAY, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 64, maxWidth: 640 }}>
              <span className="section-eyebrow">Institutional Strengths</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 32,
                color: DARK,
                letterSpacing: '-0.01em',
              }}>
                A Legacy of Educational Rigour
              </h2>
            </div>
          </ScrollReveal>

          {/* Editorial Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {editorialWhyBlocks.map((block, i) => (
              <ScrollReveal key={block.title} delay={i * 0.05}>
                <div style={{
                  borderLeft: `3px solid ${BLUE}`,
                  paddingLeft: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    color: MUTED,
                    lineHeight: 1.6,
                  }}>
                    {block.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── PLACEMENTS SECTION (Modern stats dashboard & Recruiter logos grid) ── */}
      <section style={{ backgroundColor: WHITE, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Placements Stats Panel */}
            <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ScrollReveal>
                <span className="section-eyebrow">Career Desk</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 36,
                  color: DARK,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}>
                  Corporate Placement desk
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  color: MUTED,
                  lineHeight: 1.65,
                }}>
                  Our dedicated placements division collaborates directly with national and multi-national technology corporations to secure competitive career launchpads for final-year students.
                </p>
              </ScrollReveal>

              {/* Counter Statistics List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 12 }}>
                {[
                  { value: '94%', label: 'Placement Rate (Last Term)' },
                  { value: '₹6.5 LPA', label: 'Highest Salary Package' },
                  { value: '2500+', label: 'Students Placed Globally' },
                ].map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={i * 0.05}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: 28,
                        color: BLUE,
                      }}>{stat.value}</span>
                      <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14.5,
                        color: DARK,
                        fontWeight: 500,
                      }}>{stat.label}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Recruiter Logos Grid */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  backgroundColor: GRAY,
                  padding: '32px',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: MUTED,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 24,
                    textAlign: 'center',
                  }}>
                    Principal Recruitment Partners
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {recruiterLogos.map((logo) => (
                      <div
                        key={logo}
                        style={{
                          backgroundColor: WHITE,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 2,
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 700,
                          fontSize: 14,
                          color: '#A6A6A6',
                          transition: 'color 0.2s, border-color 0.2s',
                          cursor: 'default',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = BLUE;
                          e.currentTarget.style.borderColor = BLUE;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = '#A6A6A6';
                          e.currentTarget.style.borderColor = BORDER;
                        }}
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE Bento Showcase ── */}
      <section style={{ backgroundColor: GRAY, padding: '120px 0', borderBottom: `1.5px solid ${BORDER}` }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 48, maxWidth: 640 }}>
              <span className="section-eyebrow">Campus Tour</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 32,
                color: DARK,
                letterSpacing: '-0.01em',
              }}>
                Immersive Campus Spaces
              </h2>
            </div>
          </ScrollReveal>

          {/* Gallery Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/life at rd/lib4.jpg', label: 'Central Library Catalog', span: 'lg:col-span-2' },
              { src: '/images/life at rd/stark.jpg', label: 'Robotics Incubation Lab' },
              { src: '/images/life at rd/shadowzone.jpg', label: 'Shadow Zone E-Sports' },
              { src: '/images/life at rd/meateat.jpg', label: 'Let\'s Meat & Eat Dining', span: 'lg:col-span-2' },
            ].map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} className={img.span}>
                <div style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: 300,
                  position: 'relative',
                  backgroundColor: WHITE,
                  cursor: 'pointer',
                }}>
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="hover:scale-103"
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    padding: '16px 20px',
                    background: 'linear-gradient(to top, rgba(27,27,27,0.85) 0%, transparent 100%)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: 13.5,
                      color: WHITE,
                    }}>
                      {img.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── NEWS & ACADEMIC CALENDAR (Premium Editorial Layout) ── */}
      <section style={{ backgroundColor: '#FAFAFA', padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">

          {/* Section Header Row */}
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="section-eyebrow">Campus Pulse</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 36,
                  color: DARK,
                  letterSpacing: '-0.015em',
                  marginTop: 8,
                }}>
                  News &amp; Academic Calendar
                </h2>
              </div>
              <Link to="/events" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-sans)',
                fontSize: 13.5,
                fontWeight: 600,
                color: BLUE,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>
                View All News <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── LEFT: Featured + Secondary News ── */}
            <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

              {/* Hero Featured Article */}
              <ScrollReveal delay={0.04}>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 6,
                    overflow: 'hidden',
                    height: 340,
                    backgroundColor: DARK,
                    cursor: 'pointer',
                  }}
                  className="group"
                >
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, transition: 'transform 0.4s ease, opacity 0.3s ease' }}
                    className="group-hover:scale-103 group-hover:opacity-65"
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
                  }} />
                  {/* Content */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        fontWeight: 700,
                        color: WHITE,
                        backgroundColor: BLUE,
                        padding: '3px 10px',
                        borderRadius: 2,
                        textTransform: 'uppercase',
                      }}>
                        {newsArticles[0].category}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                        {newsArticles[0].date}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 22,
                      color: WHITE,
                      lineHeight: 1.25,
                      marginBottom: 14,
                    }}>
                      {newsArticles[0].title}
                    </h3>
                    <Link to="/events" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }} className="hover:text-white">
                      Read Full Article <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Secondary Articles Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {newsArticles.slice(1).map((art, idx) => (
                  <ScrollReveal key={art.title} delay={0.08 + idx * 0.04}>
                    <div
                      style={{
                        backgroundColor: WHITE,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 6,
                        padding: '24px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'box-shadow 0.2s, border-color 0.2s',
                        cursor: 'pointer',
                      }}
                      className="hover:shadow-md hover:border-blue-300"
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 9,
                            fontWeight: 700,
                            color: BLUE,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}>
                            {art.category}
                          </span>
                          <span style={{ fontSize: 11, color: MUTED }}>{art.date}</span>
                        </div>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 15,
                          color: DARK,
                          lineHeight: 1.35,
                          marginBottom: 10,
                        }}>
                          {art.title}
                        </h3>
                        <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.55, marginBottom: 14 }}>
                          {art.desc}
                        </p>
                      </div>
                      <Link to="/events" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: BLUE,
                        textDecoration: 'none',
                      }}>
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>

            {/* ── RIGHT: Academic Calendar Panel ── */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.06}>
                <div style={{
                  backgroundColor: DARK,
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  {/* Calendar Header */}
                  <div style={{
                    padding: '28px 32px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.45)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'block',
                        marginBottom: 6,
                      }}>
                        Academic Calendar
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: 22,
                        color: WHITE,
                        letterSpacing: '-0.01em',
                      }}>
                        Odd Semester 2026–27
                      </h3>
                    </div>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.4)',
                    }}>
                      <Calendar size={16} />
                    </div>
                  </div>

                  {/* Timeline Events */}
                  <div style={{ padding: '24px 32px 32px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {eventsTimeline.map((ev, i) => (
                      <div
                        key={ev.title}
                        style={{
                          display: 'flex',
                          gap: 20,
                          paddingTop: i === 0 ? 0 : 24,
                          paddingBottom: 24,
                          borderBottom: i < eventsTimeline.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                          position: 'relative',
                        }}
                      >
                        {/* Date Chip */}
                        <div style={{ flexShrink: 0, width: 56 }}>
                          <div style={{
                            backgroundColor: ev.status === 'Upcoming' ? 'rgba(0,103,184,0.25)' : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${ev.status === 'Upcoming' ? 'rgba(0,103,184,0.4)' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: 4,
                            padding: '6px 4px',
                            textAlign: 'center',
                          }}>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: 18,
                              fontWeight: 800,
                              color: ev.status === 'Upcoming' ? '#6BB5F0' : 'rgba(255,255,255,0.35)',
                              lineHeight: 1,
                              display: 'block',
                            }}>
                              {ev.date.split(' ')[1]?.replace(',', '') || ev.date.split('–')[0].trim().split(' ').pop()}
                            </span>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: 8,
                              color: ev.status === 'Upcoming' ? 'rgba(107,181,240,0.7)' : 'rgba(255,255,255,0.25)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                            }}>
                              {ev.date.split(' ')[0]}
                            </span>
                          </div>
                        </div>

                        {/* Event Detail */}
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: 8.5,
                              fontWeight: 700,
                              color: ev.status === 'Upcoming' ? '#6EE784' : 'rgba(255,255,255,0.3)',
                              backgroundColor: ev.status === 'Upcoming' ? 'rgba(110,231,132,0.12)' : 'rgba(255,255,255,0.05)',
                              padding: '2px 7px',
                              borderRadius: 2,
                              textTransform: 'uppercase',
                            }}>
                              {ev.status}
                            </span>
                            <span style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: 11,
                              color: 'rgba(255,255,255,0.35)',
                            }}>
                              {ev.date}
                            </span>
                          </div>
                          <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: 14.5,
                            color: WHITE,
                            lineHeight: 1.3,
                            marginBottom: 5,
                          }}>
                            {ev.title}
                          </h4>
                          <p style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: 12.5,
                            color: 'rgba(255,255,255,0.45)',
                            lineHeight: 1.5,
                          }}>
                            {ev.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Calendar Footer CTA */}
                  <div style={{
                    padding: '20px 32px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Link to="/events" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#6BB5F0',
                      textDecoration: 'none',
                    }}>
                      View Full Academic Calendar <ArrowRight size={13} />
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESEARCH SUMMARY ── */}
      <section style={{ backgroundColor: GRAY, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal>
              <span className="section-eyebrow">Publications &amp; Research</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 36,
                color: DARK,
                letterSpacing: '-0.01em',
                marginBottom: 20,
              }}>
                Academic Innovation Hub
              </h2>
              <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.65, marginBottom: 28 }}>
                Our student and faculty teams continuously publish research monographs in recognized international journals (IEEE, Springer, and Scopus), focusing on advanced computing, microfinance dynamics, and media communications.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <FileText size={16} style={{ color: BLUE }} />
                  <span style={{ fontSize: 14.5, fontWeight: 500, color: DARK }}>30+ Faculty Peer-Reviewed Journal Articles</span>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <Award size={16} style={{ color: BLUE }} />
                  <span style={{ fontSize: 14.5, fontWeight: 500, color: DARK }}>Joint Research Collaborations with 10+ Tech Partners</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: '32px',
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: 'uppercase', color: BLUE, marginBottom: 16 }}>
                  Selected Publications Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: BLUE, display: 'block', marginBottom: 4 }}>IEEE ACCESS · 2025</span>
                    <h4 style={{ fontWeight: 700, fontSize: 16, color: DARK, marginBottom: 6 }}>ML Crop Yield Prediction in Semi-Arid Soil Zones</h4>
                    <p style={{ fontSize: 13.5, color: MUTED }}>
                      Author: Dr. R. Karthik (Science &amp; IT) · Developed algorithmic predictions for cotton yield optimization in Erode basins.
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: BLUE, display: 'block', marginBottom: 4 }}>CYBER SECURITY JOURNAL · 2026</span>
                    <h4 style={{ fontWeight: 700, fontSize: 16, color: DARK, marginBottom: 6 }}>Zero-Trust Campus Networks Subnet Authentication</h4>
                    <p style={{ fontSize: 13.5, color: MUTED }}>
                      Author: Prof. P. Sneha (Computer Applications) · Modeling security metrics in segmented high-density Wi-Fi environments.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (Minimal quote, student photographs, no speech bubbles) ── */}
      <section style={{ backgroundColor: WHITE, padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 64, maxWidth: 640 }}>
              <span className="section-eyebrow">Student Testimonies</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 32,
                color: DARK,
                letterSpacing: '-0.01em',
              }}>
                Student &amp; Alumni Stories
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {testimonials.map((test, i) => (
              <ScrollReveal key={test.author} delay={i * 0.05}>
                <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }} className="flex-col sm:flex-row">
                  {/* Photo */}
                  <img
                    src={test.image}
                    alt={test.author}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `1px solid ${BORDER}`,
                      flexShrink: 0,
                    }}
                  />
                  {/* Quotation details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 15.5,
                      color: DARK,
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}>
                      "{test.quote}"
                    </p>
                    <div>
                      <h4 style={{ fontSize: 14.5, fontWeight: 700, color: BLUE }}>
                        {test.author}
                      </h4>
                      <span style={{ fontSize: 12.5, color: MUTED }}>
                        {test.meta}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADMISSIONS CTA (Large full-width section) ── */}
      <section 
        style={{ 
          backgroundColor: DARK, 
          color: WHITE, 
          padding: '120px 0', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 600,
              color: BLUE,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: 16,
            }}>
              Admissions 2026–27
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}>
              Begin Your Journey at RD National
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: '#A6A6A6',
              lineHeight: 1.6,
              maxWidth: 580,
              margin: '0 auto 40px auto',
            }}>
              Select your academic specialization from our 21 accredited courses and gain hands-on expertise with direct industry backing.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
              <Link to="/admissions" className="fluent-btn-primary" style={{ minWidth: 160 }}>
                Apply Now
              </Link>
              <a 
                href="/Circular_Brochure_RD.pdf"
                download 
                className="fluent-btn-secondary" 
                style={{ 
                  minWidth: 160, 
                  backgroundColor: 'transparent', 
                  color: WHITE, 
                  borderColor: 'rgba(255,255,255,0.2)' 
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Download size={14} /> Download Brochure
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
