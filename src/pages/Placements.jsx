import { useState } from 'react';
import {
  Award, Briefcase, GraduationCap, CheckCircle, ArrowRight,
  TrendingUp, BookOpen, ShieldAlert, Sparkles, UserCheck, Star
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const placementStats = [
  { value: '94%', label: 'Placement Rate', sub: 'Batches 2023–25' },
  { value: '12 LPA', label: 'Highest Package', sub: 'Offered by Zoho' },
  { value: '4.2 LPA', label: 'Average Package', sub: 'Across Departments' },
  { value: '350+', label: 'Recruitment Offers', sub: 'Last Academic Year' },
];

const topRecruiters = [
  { name: 'Zoho Corporation', color: '#E01E26', darkText: false, category: 'Product Tech' },
  { name: 'Tata Consultancy Services (TCS)', color: '#006B95', darkText: false, category: 'IT Services' },
  { name: 'Wipro', color: '#1B1A55', darkText: false, category: 'IT Services' },
  { name: 'Infosys', color: '#007CC3', darkText: false, category: 'IT Services' },
  { name: 'Cognizant (CTS)', color: '#182C61', darkText: false, category: 'Consulting' },
  { name: 'Accenture', color: '#A124F0', darkText: false, category: 'Consulting' },
  { name: 'ICICI Bank', color: '#FF7F3E', darkText: false, category: 'Banking & Finance' },
  { name: 'Muthoot Finance', color: '#B31312', darkText: false, category: 'Banking & Finance' },
];

const trainingRoadmap = [
  {
    year: 'Semester I & II (First Year)',
    title: 'Communication & Foundation',
    desc: 'Public speaking, English communication labs, structured group discussions, and personality enhancement programmes.',
    skills: ['Spoken English', 'Presentation Skills', 'Basic Aptitude'],
    icon: BookOpen,
  },
  {
    year: 'Semester III & IV (Second Year)',
    title: 'Aptitude & Technical Proficiency',
    desc: 'Quantitative aptitude, logical reasoning, data structures & algorithms basics, and advanced database SQL bootcamps.',
    skills: ['Quantitative Aptitude', 'Data Structures', 'SQL Training'],
    icon: TrendingUp,
  },
  {
    year: 'Semester V & VI (Third Year)',
    title: 'Mock Drives & Corporate Readiness',
    desc: 'Company-specific mock coding tests, professional HR/Technical interviews, resume reviews, and HR grooming seminars.',
    skills: ['Mock Interviews', 'Company Patterns', 'Resume Optimization'],
    icon: UserCheck,
  },
];

const placedStudents = [
  {
    name: 'Suresh Kumar R',
    dept: 'B.Sc Computer Science',
    company: 'Zoho Corporation',
    role: 'Associate Software Developer',
    package: '7.5 LPA',
    quote: 'The placement cell mock coding tests and Zoho-specific bootcamps in my third year gave me the confidence to crack the technical rounds.',
  },
  {
    name: 'Priya Dharshini K',
    dept: 'BCA (Computer Applications)',
    company: 'Cognizant (CTS)',
    role: 'Programmer Analyst Trainee',
    package: '4.2 LPA',
    quote: 'The soft skills and communication classes during my first and second years built my confidence for the corporate round.',
  },
  {
    name: 'Kavin Balaji M',
    dept: 'B.Com Computer Applications',
    company: 'ICICI Bank',
    role: 'Senior Officer - Operations',
    package: '3.8 LPA',
    quote: 'The Quantitative Aptitude training during Semester IV was crucial for passing the ICICI banking aptitude assessment test.',
  },
];

export default function Placements() {
  const [activeTab, setActiveTab] = useState('statistics');

  return (
    <>
      <SEOMeta
        title="Placements &amp; Careers Cell"
        description="Learn about the Placements Cell at RD National College, Erode — training roadmap, top recruiters, statistics, and recruitment drives."
      />

      {/* Hero Header */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 100,
        paddingBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ maxWidth: 640, paddingBottom: 64 }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: BLUE,
                backgroundColor: 'rgba(0,103,184,0.12)',
                padding: '5px 12px',
                borderRadius: 2,
                border: '1px solid rgba(0,103,184,0.25)',
                marginBottom: 24,
              }}>
                Placements &amp; Training Cell
              </span>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 20,
              }}>
                Engineering <br />
                <span style={{ color: BLUE }}>Career Outcomes.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16.5,
                color: '#A6A6A6',
                lineHeight: 1.65,
              }}>
                Empowering students with systematic quantitative, technical, and communication training. Securing top recruitments in product tech, consulting, and finance.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Bar */}
          <ScrollReveal delay={0.1}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }} className="grid grid-cols-2 lg:grid-cols-4">
              {placementStats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '28px 24px',
                    borderRight: i < placementStats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(28px, 3.5vw, 42px)',
                    color: BLUE,
                    lineHeight: 1.1,
                    marginBottom: 4,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 13.5,
                    color: WHITE,
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 11.5,
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: 2,
                  }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <main style={{ backgroundColor: GRAY, paddingBottom: 96 }}>

        {/* ── RECRUITERS GRID ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 40, textAlign: 'center' }}>
                <span className="section-eyebrow">Industry Trust</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 6,
                }}>
                  Our Key Recruitment Partners
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topRecruiters.map((company, idx) => (
                <ScrollReveal key={company.name} delay={idx * 0.05}>
                  <div
                    style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      padding: '24px 16px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 120,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    className="hover:shadow-md hover:border-slate-300"
                  >
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 14.5,
                      color: company.color,
                      marginBottom: 6,
                      lineHeight: 1.2,
                    }}>
                      {company.name}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9.5,
                      color: MUTED,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}>
                      {company.category}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLACEMENT TRAINING TIMELINE ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 48 }}>
                <span className="section-eyebrow">Training &amp; Development</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 6,
                }}>
                  Structured Grooming Roadmap
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: MUTED,
                  maxWidth: 540,
                  marginTop: 8,
                }}>
                  Systematic readiness training starting from the first semester onwards to mold industry-ready professionals.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {trainingRoadmap.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.year} delay={idx * 0.08}>
                    <div style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderTop: `4px solid ${BLUE}`,
                      borderRadius: 4,
                      padding: 32,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.01)',
                    }}>
                      <div>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 10.5,
                          fontWeight: 600,
                          color: BLUE,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          display: 'block',
                          marginBottom: 12,
                        }}>
                          {item.year}
                        </span>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                          <div style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: '#F3F8FC',
                            color: BLUE,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            <Icon size={16} />
                          </div>
                          <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: 17,
                            color: DARK,
                          }}>
                            {item.title}
                          </h3>
                        </div>

                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          color: MUTED,
                          lineHeight: 1.6,
                          marginBottom: 20,
                        }}>
                          {item.desc}
                        </p>
                      </div>

                      <div>
                        <div style={{
                          borderTop: `1px solid ${BORDER}`,
                          paddingTop: 16,
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 6,
                        }}>
                          {item.skills.map(s => (
                            <span
                              key={s}
                              style={{
                                fontSize: 10,
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 600,
                                color: DARK,
                                padding: '4px 10px',
                                backgroundColor: GRAY,
                                border: `1px solid ${BORDER}`,
                                borderRadius: 10,
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PLACED STUDENTS TESTIMONIALS ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 48, textAlign: 'center' }}>
                <span className="section-eyebrow">Placed Spotlights</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 6,
                }}>
                  Student Success Stories
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {placedStudents.map((stud, idx) => (
                <ScrollReveal key={stud.name} delay={idx * 0.05}>
                  <div
                    style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 6,
                      padding: 32,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.01)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}
                  >
                    <div>
                      {/* Quote Mark */}
                      <span style={{
                        position: 'absolute',
                        right: 24,
                        top: 16,
                        fontSize: 64,
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        color: '#F0F0F0',
                        lineHeight: 1,
                        userSelect: 'none',
                        zIndex: 0,
                      }}>
                        “
                      </span>

                      <div style={{ display: 'flex', gap: 2, color: '#FFB900', marginBottom: 16, position: 'relative', zIndex: 1 }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="#FFB900" />
                        ))}
                      </div>

                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14,
                        color: MUTED,
                        lineHeight: 1.65,
                        fontStyle: 'italic',
                        marginBottom: 24,
                        position: 'relative',
                        zIndex: 1,
                      }}>
                        "{stud.quote}"
                      </p>
                    </div>

                    <div style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: 16,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: DARK }}>
                          {stud.name}
                        </h4>
                        <span style={{ fontSize: 11.5, color: MUTED, display: 'block' }}>
                          {stud.dept}
                        </span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          fontSize: 11.5,
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: BLUE,
                          display: 'block',
                        }}>
                          {stud.company}
                        </span>
                        <span style={{
                          fontSize: 10,
                          backgroundColor: '#F0F9F0',
                          border: '1px solid #107C10',
                          color: '#107C10',
                          padding: '2px 8px',
                          borderRadius: 2,
                          display: 'inline-block',
                          marginTop: 4,
                          fontWeight: 600,
                        }}>
                          {stud.package}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>



      </main>
    </>
  );
}
