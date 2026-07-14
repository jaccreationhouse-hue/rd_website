import { useState } from 'react';
import {
  User, BookOpen, FileText, Calendar, Shield, Award, Download,
  AlertCircle, CheckCircle, Eye, EyeOff, Lock, Database, Search,
  Building, Clock, ArrowRight, X, Info
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

// ── MOCK DATA ──
const portalsList = [
  {
    id: 'student',
    title: 'Student Portal',
    desc: 'Access grades, semester attendance logs, exam hall tickets, and fee transaction histories.',
    icon: User,
    color: '#0067B8',
    lightBg: '#F3F8FC',
    role: 'Student ID (e.g. RD202601)'
  },
  {
    id: 'staff',
    title: 'Staff & Faculty Portal',
    desc: 'Log student attendance, input Continuous Internal Assessment (CIA) marks, and manage leave plans.',
    icon: Database,
    color: '#4F46E5',
    lightBg: '#F5F3FF',
    role: 'Employee Code'
  },
  {
    id: 'library',
    title: 'E-Library & OPAC',
    desc: 'Browse physical library catalogs, search e-journals (IEEE, DELNET), and check book renewals.',
    icon: BookOpen,
    color: '#107C10',
    lightBg: '#F0F9F0',
    role: 'Library Card Number'
  },
  {
    id: 'alumni',
    title: 'Alumni Association Network',
    desc: 'Register for networking events, apply for job referrals, or request official transcript forms.',
    icon: Award,
    color: '#D83B01',
    lightBg: '#FFF5F1',
    role: 'Registration Number / Email'
  }
];

const syllabiData = [
  { course: 'BCA (Computer Applications)', batch: '2025–28', link: '#', size: '1.2 MB' },
  { course: 'B.Sc Computer Science', batch: '2025–28', link: '#', size: '1.1 MB' },
  { course: 'B.Sc Artificial Intelligence & DS', batch: '2025–28', link: '#', size: '1.4 MB' },
  { course: 'B.Sc Visual Communication', batch: '2025–28', link: '#', size: '1.8 MB' },
  { course: 'B.Sc Costume Design & Fashion', batch: '2025–28', link: '#', size: '2.1 MB' },
  { course: 'BBA (Business Administration)', batch: '2025–28', link: '#', size: '0.9 MB' },
  { course: 'B.Com & B.Com CA / PA', batch: '2025–28', link: '#', size: '1.5 MB' },
];

const timetableData = [
  { title: 'Odd Semester End-Examinations Schedule', date: 'October 2026 Session', size: '420 KB' },
  { title: 'Continuous Internal Assessment (CIA-I) Timetable', date: 'August 2026 Session', size: '240 KB' },
  { title: 'Practical Laboratory Board Exam Batches', date: 'November 2026 Session', size: '310 KB' },
  { title: 'Sports Quota Selection Trial Calendar', date: 'July 2026 Session', size: '180 KB' },
];

const formsData = [
  { title: 'Government Post-Metric Scholarship Application Form', type: 'PDF Form', size: '650 KB' },
  { title: 'Application Form for Transcript & Migration Certificates', type: 'PDF Form', size: '380 KB' },
  { title: 'Hostel Accommodation Booking & Undertaking Form', type: 'PDF Form', size: '450 KB' },
  { title: 'Bus Route Allocation / Change Request Application', type: 'PDF Form', size: '290 KB' },
];

const complianceData = [
  {
    title: 'Internal Quality Assurance Cell (IQAC)',
    content: 'Established to monitor and evaluate quality enhancement measures, the IQAC cell prepares the Annual Quality Assurance Report (AQAR) and maintains institutional documentation in alignment with NAAC criteria.'
  },
  {
    title: 'NAAC Accreditation Status',
    content: 'RD National College of Arts and Science is accredited by the National Assessment and Accreditation Council (NAAC) with a distinguished grade, verifying institutional standards of infrastructure and pedagogy.'
  },
  {
    title: 'NIRF & AISHE Mandatory Disclosures',
    content: 'All details regarding our participation in the National Institutional Ranking Framework (NIRF) and our annual reports to the All India Survey on Higher Education (AISHE) are openly published for public audit.'
  },
  {
    title: 'Anti-Ragging Committee & Discipline Mandates',
    content: 'RD National enforces a strict zero-tolerance policy towards ragging. A specialized disciplinary committee consisting of academic directors, local magistrates, and student advisors meets weekly.'
  }
];

export default function PortalHub() {
  const [activeTab, setActiveTab] = useState('syllabi');
  const [searchQuery, setSearchQuery] = useState('');
  const [loginModal, setLoginModal] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Disciplinary complaint states
  const [complaintName, setComplaintName] = useState('');
  const [complaintType, setComplaintType] = useState('Anti-Ragging');
  const [complaintText, setComplaintText] = useState('');
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginError('Please enter both code and password.');
      return;
    }
    setLoginError('');
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setLoginModal(null);
      setUsername('');
      setPassword('');
    }, 1500);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (!complaintText) return;
    setComplaintSubmitted(true);
    setTimeout(() => {
      setComplaintSubmitted(false);
      setComplaintName('');
      setComplaintText('');
    }, 3000);
  };

  const filteredSyllabi = syllabiData.filter(s =>
    s.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOMeta
        title="Student & Resources Portal Hub"
        description="Access Student, Staff, E-Library, and Alumni portals. Download official course syllabi, timetables, IQAC files, and NAAC compliance forms."
      />

      {/* Hero Header */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 100,
        paddingBottom: 64,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
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
              Academic Portals &amp; Compliance Hub
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}>
              Portal &amp; Digital Resources
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16.5,
              color: '#A6A6A6',
              maxWidth: 580,
              lineHeight: 1.65,
            }}>
              One-stop access to single-sign-on administrative portals, official syllabus downloads, exam schedules, and institutional quality disclosures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <main style={{ backgroundColor: GRAY, paddingBottom: 96 }}>

        {/* ── SECTION 1: INTERACTIVE PORTALS GRID ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div className="container">
            <ScrollReveal>
              <div style={{ marginBottom: 40 }}>
                <span className="section-eyebrow">Single Sign-On</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 28,
                  color: DARK,
                  letterSpacing: '-0.01em',
                }}>
                  Digital Campus Portals
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portalsList.map((portal) => {
                const Icon = portal.icon;
                return (
                  <ScrollReveal key={portal.id}>
                    <div
                      onClick={() => setLoginModal(portal)}
                      style={{
                        backgroundColor: WHITE,
                        border: `1px solid ${BORDER}`,
                        borderTop: `4px solid ${portal.color}`,
                        borderRadius: 6,
                        padding: 28,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                      className="hover:-translate-y-1 hover:shadow-lg group"
                    >
                      <div>
                        <div style={{
                          width: 38,
                          height: 38,
                          borderRadius: 4,
                          backgroundColor: portal.lightBg,
                          color: portal.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 20,
                        }}>
                          <Icon size={18} />
                        </div>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 17.5,
                          color: DARK,
                          marginBottom: 10,
                        }}>
                          {portal.title}
                        </h3>
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          color: MUTED,
                          lineHeight: 1.6,
                        }}>
                          {portal.desc}
                        </p>
                      </div>
                      <div style={{
                        marginTop: 20,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: portal.color,
                      }}>
                        Launch Portal <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ACADEMIC DOWNLOAD CENTER ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Tab switcher and search */}
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <span className="section-eyebrow">Resource Center</span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 28,
                    color: DARK,
                    letterSpacing: '-0.01em',
                    marginBottom: 24,
                  }}>
                    Academic Downloads
                  </h2>

                  {/* Tabs Selector list */}
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    marginBottom: 20,
                  }}>
                    {[
                      { id: 'syllabi', label: 'Program Syllabi', count: syllabiData.length },
                      { id: 'timetables', label: 'Schedules & Calendars', count: timetableData.length },
                      { id: 'forms', label: 'Applications & Circulars', count: formsData.length },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setSearchQuery('');
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderTop: 'none',
                          borderRight: 'none',
                          borderBottom: 'none',
                          backgroundColor: activeTab === tab.id ? 'rgba(0,103,184,0.06)' : 'transparent',
                          color: activeTab === tab.id ? BLUE : DARK,
                          borderLeft: activeTab === tab.id ? `3px solid ${BLUE}` : '3px solid transparent',
                          borderRadius: 4,
                          cursor: 'pointer',
                          fontWeight: activeTab === tab.id ? 600 : 500,
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14,
                          textAlign: 'left',
                          transition: 'all 0.15s ease',
                        }}
                        className="hover:bg-[#F9F9F9]"
                      >
                        <span>{tab.label}</span>
                        <span style={{
                          fontSize: 11,
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: activeTab === tab.id ? WHITE : GRAY,
                          color: MUTED,
                          padding: '2px 8px',
                          borderRadius: 10,
                          border: `1px solid ${activeTab === tab.id ? BORDER : 'transparent'}`,
                        }}>
                          {tab.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Filter Search Input (only shown for Syllabi) */}
                  {activeTab === 'syllabi' && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      padding: '8px 14px',
                    }}>
                      <Search size={14} style={{ color: MUTED }} />
                      <input
                        type="text"
                        placeholder="Search syllabi..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        style={{
                          border: 'none',
                          outline: 'none',
                          fontSize: 13,
                          width: '100%',
                          color: DARK,
                        }}
                      />
                    </div>
                  )}
                </ScrollReveal>
              </div>

              {/* Right Column: Files Grid list */}
              <div className="lg:col-span-8">
                <ScrollReveal>
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  }}>
                    {/* Header */}
                    <div style={{
                      padding: '16px 24px',
                      backgroundColor: DARK,
                      color: WHITE,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <span>Resource Name</span>
                      <span>Action / Details</span>
                    </div>

                    {/* Body contents */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      
                      {/* SYLLABI TAB */}
                      {activeTab === 'syllabi' && (
                        filteredSyllabi.length > 0 ? (
                          filteredSyllabi.map((item, idx) => (
                            <div
                              key={item.course}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '18px 24px',
                                borderBottom: idx < filteredSyllabi.length - 1 ? `1px solid ${BORDER}` : 'none',
                              }}
                            >
                              <div>
                                <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: DARK }}>
                                  {item.course}
                                </h4>
                                <span style={{ fontSize: 12, color: MUTED }}>Batch Syllabus: {item.batch}</span>
                              </div>
                              <a
                                href={item.link}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  fontSize: 12.5,
                                  fontWeight: 600,
                                  color: BLUE,
                                  textDecoration: 'none',
                                }}
                              >
                                <Download size={13} /> PDF ({item.size})
                              </a>
                            </div>
                          ))
                        ) : (
                          <div style={{ padding: '48px 24px', textAlign: 'center', color: MUTED }}>
                            <Info size={24} style={{ marginBottom: 12, color: MUTED }} />
                            <p style={{ fontSize: 14.5 }}>No program syllabi matched your search.</p>
                          </div>
                        )
                      )}

                      {/* TIMETABLES TAB */}
                      {activeTab === 'timetables' && (
                        timetableData.map((item, idx) => (
                          <div
                            key={item.title}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '18px 24px',
                              borderBottom: idx < timetableData.length - 1 ? `1px solid ${BORDER}` : 'none',
                            }}
                          >
                            <div>
                              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: DARK }}>
                                {item.title}
                              </h4>
                              <span style={{ fontSize: 12, color: MUTED }}>Published: {item.date}</span>
                            </div>
                            <a
                              href="#"
                              style={{
                                display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  fontSize: 12.5,
                                  fontWeight: 600,
                                  color: BLUE,
                                  textDecoration: 'none',
                              }}
                            >
                              <Download size={13} /> Download ({item.size})
                            </a>
                          </div>
                        ))
                      )}

                      {/* FORMS TAB */}
                      {activeTab === 'forms' && (
                        formsData.map((item, idx) => (
                          <div
                            key={item.title}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '18px 24px',
                              borderBottom: idx < formsData.length - 1 ? `1px solid ${BORDER}` : 'none',
                            }}
                          >
                            <div>
                              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: DARK }}>
                                {item.title}
                              </h4>
                              <span style={{ fontSize: 12, color: MUTED }}>Category: {item.type}</span>
                            </div>
                            <a
                              href="#"
                              style={{
                                display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  fontSize: 12.5,
                                  fontWeight: 600,
                                  color: BLUE,
                                  textDecoration: 'none',
                              }}
                            >
                              <Download size={13} /> Fill PDF ({item.size})
                            </a>
                          </div>
                        ))
                      )}

                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 3: IQAC ACCREDITATION & DISCLOSURES ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Accordion List (Governance) */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <span className="section-eyebrow">Mandatory Disclosures</span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 28,
                    color: DARK,
                    letterSpacing: '-0.01em',
                    marginBottom: 32,
                  }}>
                    IQAC, NAAC &amp; Governance
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {complianceData.map((item, idx) => {
                      const isOpen = activeAccordion === idx;
                      return (
                        <div
                          key={item.title}
                          style={{
                            backgroundColor: WHITE,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            overflow: 'hidden',
                          }}
                        >
                          <button
                            onClick={() => setActiveAccordion(isOpen ? -1 : idx)}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                              padding: '18px 24px',
                              backgroundColor: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <span style={{
                              fontFamily: 'var(--font-heading)',
                              fontWeight: 700,
                              fontSize: 15.5,
                              color: isOpen ? BLUE : DARK,
                              transition: 'color 0.15s ease',
                            }}>
                              {item.title}
                            </span>
                            <span style={{
                              fontSize: 12,
                              color: MUTED,
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }}>
                              ▼
                            </span>
                          </button>
                          
                          {isOpen && (
                            <div style={{
                              padding: '0 24px 24px',
                              fontFamily: 'var(--font-sans)',
                              fontSize: 14,
                              color: MUTED,
                              lineHeight: 1.6,
                              borderTop: `1px solid ${BORDER}`,
                              paddingTop: 16,
                            }}>
                              {item.content}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </ScrollReveal>
              </div>

              {/* Student Support Cells and Grievance submission */}
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    padding: '32px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      fontWeight: 600,
                      color: BLUE,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: 10,
                    }}>
                      Student Redressal
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 20,
                      color: DARK,
                      marginBottom: 8,
                    }}>
                      Grievance Registry Cell
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13.5,
                      color: MUTED,
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}>
                      Submit complaints, suggestions, or reports directly to the anti-ragging or grievances board anonymously.
                    </p>

                    <form onSubmit={handleComplaintSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4, color: DARK }}>
                          Student ID / Reference (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. RD202611"
                          value={complaintName}
                          onChange={e => setComplaintName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            fontSize: 13,
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4, color: DARK }}>
                          Target Committee
                        </label>
                        <select
                          value={complaintType}
                          onChange={e => setComplaintType(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            fontSize: 13,
                            backgroundColor: WHITE,
                          }}
                        >
                          <option value="Anti-Ragging">Anti-Ragging Board</option>
                          <option value="Grievance">General Grievance Redressal</option>
                          <option value="Hostel">Hostel Disciplinary Panel</option>
                          <option value="Exam">Examination Disciplinary Cell</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4, color: DARK }}>
                          Detailed Description *
                        </label>
                        <textarea
                          placeholder="Please provide specifics..."
                          rows={4}
                          required
                          value={complaintText}
                          onChange={e => setComplaintText(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: `1px solid ${BORDER}`,
                            borderRadius: 4,
                            fontSize: 13,
                            resize: 'vertical',
                          }}
                        />
                      </div>

                      {complaintSubmitted && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 12px',
                          backgroundColor: 'rgba(16,124,16,0.1)',
                          border: '1px solid #107C10',
                          borderRadius: 4,
                          fontSize: 12.5,
                          color: '#107C10',
                        }}>
                          <CheckCircle size={14} /> Report submitted successfully. Reference ID generated.
                        </div>
                      )}

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          border: 'none',
                          padding: '10px 16px',
                          backgroundColor: BLUE,
                          color: WHITE,
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          fontWeight: 600,
                          borderRadius: 4,
                          cursor: 'pointer',
                        }}
                      >
                        Submit Report
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── MOCK LOGIN PORTAL OVERLAY ── */}
      {loginModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 16,
        }}>
          <div
            className="fluent-fade-in"
            style={{
              backgroundColor: WHITE,
              border: `1px solid ${BORDER}`,
              borderRadius: 6,
              width: '100%',
              maxWidth: 420,
              boxShadow: '0 20px 48px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '24px 28px',
              borderBottom: `1px solid ${BORDER}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: loginModal.lightBg,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: loginModal.color }}><Lock size={18} /></span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: DARK }}>
                  {loginModal.title} Login
                </span>
              </div>
              <button
                onClick={() => {
                  setLoginModal(null);
                  setLoginError('');
                  setUsername('');
                  setPassword('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: MUTED,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Login Form */}
            <form onSubmit={handleLoginSubmit} style={{ padding: '28px' }}>
              
              {loginSuccess ? (
                <div style={{
                  padding: '24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'center',
                }}>
                  <CheckCircle size={40} style={{ color: '#107C10' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: DARK }}>
                    SSO Handshake Successful!
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: MUTED, maxWidth: 260 }}>
                    Redirecting to institutional dashboard...
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: DARK, marginBottom: 6 }}>
                      {loginModal.role} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RD261099"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: `1px solid ${BORDER}`,
                        borderRadius: 4,
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: DARK, marginBottom: 6 }}>
                      Portal Access Password *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          paddingRight: 40,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 4,
                          fontSize: 14,
                          outline: 'none',
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: 12,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: MUTED,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 12px',
                      backgroundColor: '#FDE8E8',
                      border: '1px solid #A80000',
                      borderRadius: 4,
                      fontSize: 12.5,
                      color: '#A80000',
                    }}>
                      <AlertCircle size={14} /> {loginError}
                    </div>
                  )}

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      border: 'none',
                      padding: '10px 16px',
                      backgroundColor: loginModal.color,
                      color: WHITE,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      fontWeight: 600,
                      borderRadius: 4,
                      cursor: 'pointer',
                      marginTop: 10,
                    }}
                  >
                    Authenticate SSO
                  </button>
                </div>
              )}

            </form>
          </div>
        </div>
      )}
    </>
  );
}
