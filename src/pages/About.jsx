import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Award, BookOpen, Clock, Heart, Users, Target,
  Cpu, Compass, CheckCircle2, ChevronRight, Briefcase
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import { teamMembers } from '../data/team';
import { achievements } from '../data/stats';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const timelineMilestones = [
  {
    year: '2019',
    title: 'Official Establishment',
    desc: 'The RD National Arts and Science Co-Education College was officially established in Erode, Tamil Nadu.',
  },
  {
    year: '2020–22',
    title: 'Curriculum Expansion',
    desc: 'The college expanded its undergraduate curriculum to offer full-time 3-year degrees across four primary streams: Business Management, Accounting & Commerce, Humanities & Social Sciences, and Science.',
  },
  {
    year: '2025',
    title: 'NEP Alignment',
    desc: 'The institute updated its curriculum framework to align with the National Education Policy (NEP), rolling out updated examination schedules, ATKT examinations, and additional academic sessions.',
  },
  {
    year: '2026',
    title: 'Innovative Hackathon',
    desc: 'Hosted an innovative, car-based competitive hackathon on campus, combining speed, engineering, and strategic combat in March 2026.',
  },
  {
    year: 'Present',
    title: 'Leadership & Modern Zones',
    desc: 'The college continues to operate under the leadership of Chairman Raghul S, maintaining specialized campus innovation spaces such as "iLand," "Shadow Zone," and the "Jurassic Park" collaborative zones.',
  },
];

const coreValues = [
  { icon: Shield, name: 'Integrity', desc: 'Upholding strict ethical codes, moral discipline, and intellectual honesty.' },
  { icon: Target, name: 'Excellence', desc: 'Striving for highest quality in pedagogy, campus placements, and research.' },
  { icon: Cpu, name: 'Innovation', desc: 'Pioneering cutting-edge digital integrations (Microsoft, Apple Developer programs).' },
  { icon: Heart, name: 'Inclusivity', desc: 'Ensuring accessible, affordable higher education for students from all socio-economic backgrounds.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');
  const [timelineIndex, setTimelineIndex] = useState(0);

  return (
    <>
      <SEOMeta
        title="About Us"
        description="Discover the story, mission, legacy, and leadership of RD National College of Arts &amp; Science, Erode. Explore our NAAC accreditation and tech academy collaborations."
      />

      {/* ── HERO HEADER ── */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 100,
        paddingBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7" style={{ paddingBottom: 64 }}>
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
                  marginBottom: 28,
                }}>
                  Academic Excellence since 2019
                </span>
                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  lineHeight: 1.05,
                  color: WHITE,
                  letterSpacing: '-0.025em',
                  marginBottom: 24,
                }}>
                  Our Legacy,<br />
                  <span style={{ color: BLUE }}>Their Future.</span>
                </h1>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16.5,
                  color: '#A6A6A6',
                  maxWidth: 540,
                  lineHeight: 1.7,
                }}>
                  Founded with a vision to democratize tech-enabled higher education in Erode, Tamil Nadu. Today, we stand as a premier institution where industry collaboration meets academic discipline.
                </p>
              </ScrollReveal>
            </div>

            {/* Right side teaser card */}
            <div className="lg:col-span-5 hidden lg:flex" style={{
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              padding: '48px',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.02)',
            }}>
              <ScrollReveal delay={0.1}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: BLUE,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  Stat Spotlight
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 36,
                  fontWeight: 800,
                  color: WHITE,
                  marginBottom: 8,
                }}>
                  7+ Years
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}>
                  Of rapid academic growth, expanding cross-disciplinary streams and specialized campus innovation zones.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <main style={{ backgroundColor: GRAY, paddingBottom: 96 }}>

        {/* ── INTERACTIVE VISION, MISSION & VALUES ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Tab Switcher Panel */}
              <div className="lg:col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <ScrollReveal>
                  <span className="section-eyebrow">College Identity</span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 28,
                    color: DARK,
                    letterSpacing: '-0.01em',
                    marginBottom: 20,
                  }}>
                    Founding Philosophy
                  </h2>
                </ScrollReveal>

                {[
                  { id: 'vision', label: 'Institutional Vision', icon: Compass },
                  { id: 'mission', label: 'Transformational Mission', icon: Target },
                  { id: 'values', label: 'Our Core Values', icon: Shield },
                ].map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <ScrollReveal key={tab.id} delay={idx * 0.05}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          width: '100%',
                          padding: '16px 20px',
                          borderTop: 'none',
                          borderRight: 'none',
                          borderBottom: 'none',
                          backgroundColor: isActive ? WHITE : 'transparent',
                          borderLeft: isActive ? `3px solid ${BLUE}` : '3px solid transparent',
                          borderRadius: 4,
                          cursor: 'pointer',
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14.5,
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? BLUE : DARK,
                          textAlign: 'left',
                          boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.02)' : 'none',
                          transition: 'all 0.15s ease',
                        }}
                        className="hover:bg-slate-100"
                      >
                        <Icon size={16} />
                        {tab.label}
                      </button>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Contents Viewer Panel */}
              <div className="lg:col-span-8">
                <ScrollReveal>
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    padding: 48,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  }}>
                    {activeTab === 'vision' && (
                      <div className="fluent-fade-in">
                        <span style={{ fontSize: 10.5, fontFamily: 'var(--font-mono)', color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          Institutional Vision
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, color: DARK, marginTop: 12, marginBottom: 16 }}>
                          To build a globally competent center of digital learning.
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, color: MUTED, lineHeight: 1.75 }}>
                          We nurture intellectual curiosity, technological proficiency, and ethical leadership. We produce graduates who drive structural innovation and positive social change in Erode and across the country.
                        </p>
                      </div>
                    )}

                    {activeTab === 'mission' && (
                      <div className="fluent-fade-in">
                        <span style={{ fontSize: 10.5, fontFamily: 'var(--font-mono)', color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          Transformational Mission
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, color: DARK, marginTop: 12, marginBottom: 16 }}>
                          Transforming lives through accessible and affordable tech-centric pedagogy.
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, color: MUTED, lineHeight: 1.75 }}>
                          We integrate academic rigour with corporate-aligned training modules, cloud labs, and placement-readiness mentorships. We ensure every student, regardless of background, can compete at the highest tech/commerce tables.
                        </p>
                      </div>
                    )}

                    {activeTab === 'values' && (
                      <div className="fluent-fade-in">
                        <span style={{ fontSize: 10.5, fontFamily: 'var(--font-mono)', color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          Our Core Values
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, color: DARK, marginTop: 12, marginBottom: 24 }}>
                          The Principles Behind Our Pedagogy
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {coreValues.map((val) => {
                            const ValIcon = val.icon;
                            return (
                              <div key={val.name} style={{ display: 'flex', gap: 12 }}>
                                <div style={{
                                  width: 32, height: 32, borderRadius: 4, backgroundColor: '#F3F8FC', color: BLUE,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                }}>
                                  <ValIcon size={15} />
                                </div>
                                <div>
                                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14.5, color: DARK, marginBottom: 4 }}>
                                    {val.name}
                                  </h4>
                                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: MUTED, lineHeight: 1.5 }}>
                                    {val.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── INTERACTIVE LEGACY TIMELINE ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 48, textAlign: 'center' }}>
                <span className="section-eyebrow">Our Legacy</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 6,
                }}>
                  The RD Legacy Timeline
                </h2>
              </div>
            </ScrollReveal>

            {/* Horizontal Timeline Bar */}
            <ScrollReveal>
              <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 800,
                margin: '0 auto 40px',
                padding: '0 20px',
              }}>
                {/* Horizontal line connector */}
                <div style={{
                  position: 'absolute',
                  left: 40,
                  right: 40,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: 2,
                  backgroundColor: BORDER,
                  zIndex: 0,
                }} />

                {timelineMilestones.map((milestone, idx) => {
                  const isActive = timelineIndex === idx;
                  return (
                    <button
                      key={milestone.year}
                      onClick={() => setTimelineIndex(idx)}
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: isActive ? BLUE : WHITE,
                        color: isActive ? WHITE : DARK,
                        border: `2px solid ${isActive ? BLUE : BORDER}`,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 13,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                        transition: 'all 0.2s ease',
                      }}
                      className="hover:scale-110 hover:border-[#0067B8] transition-all"
                    >
                      {milestone.year}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Selected Milestone content card */}
            <ScrollReveal>
              <div style={{
                maxWidth: 700,
                margin: '0 auto',
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 6,
                padding: 40,
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
              }} className="fluent-fade-in">
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: BLUE,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  Milestone Achievement — {timelineMilestones[timelineIndex].year}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 22,
                  color: DARK,
                  marginTop: 12,
                  marginBottom: 12,
                }}>
                  {timelineMilestones[timelineIndex].title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14.5,
                  color: MUTED,
                  lineHeight: 1.65,
                  maxWidth: 520,
                  margin: '0 auto',
                }}>
                  {timelineMilestones[timelineIndex].desc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── ACCREDITATIONS & ACHIEVEMENTS BENTO GRID ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 48 }}>
                <span className="section-eyebrow">Quality &amp; Standards</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 6,
                }}>
                  Accreditations &amp; Recognitions
                </h2>
              </div>
            </ScrollReveal>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Card 1: NAAC (Large grid-col-span-7) */}
              <div className="md:col-span-7 hover:border-[#0067B8] hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default" style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <ScrollReveal>
                  <div style={{ width: 36, height: 36, borderRadius: 4, backgroundColor: 'rgba(0,103,184,0.08)', color: BLUE, display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', marginBottom: 20 }}>
                    <Award size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19.5, color: DARK, marginBottom: 8 }}>
                    NAAC State Accreditation
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginBottom: 20 }}>
                    Formally accredited by the National Assessment and Accreditation Council, confirming state standards in laboratory infrastructure, student placements outcomes, and qualification criteria.
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: BLUE, backgroundColor: '#F3F8FC', padding: '4px 10px', borderRadius: 2 }}>
                    Quality Assurance Compliant
                  </span>
                </ScrollReveal>
              </div>

              {/* Card 2: Apple Developer Program (grid-col-span-5) */}
              <div className="md:col-span-5 hover:border-[#D83B01] hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default" style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <ScrollReveal>
                  <div style={{ width: 36, height: 36, borderRadius: 4, backgroundColor: 'rgba(216,59,1,0.08)', color: '#D83B01', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', marginBottom: 20 }}>
                    <Cpu size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19.5, color: DARK, marginBottom: 8 }}>
                    Apple Developer Academy
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginBottom: 20 }}>
                    First-of-its-kind mobile app development center integrated directly inside our computer applications laboratory curriculum.
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#D83B01', backgroundColor: '#FFF5F1', padding: '4px 10px', borderRadius: 2 }}>
                    Active iOS Lab Hub
                  </span>
                </ScrollReveal>
              </div>

              {/* Card 3: Microsoft Cloud Curriculum (grid-col-span-5) */}
              <div className="md:col-span-5 hover:border-[#107C10] hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default" style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <ScrollReveal>
                  <div style={{ width: 36, height: 36, borderRadius: 4, backgroundColor: 'rgba(16,124,16,0.08)', color: '#107C10', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', marginBottom: 20 }}>
                    <BookOpen size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19.5, color: DARK, marginBottom: 8 }}>
                    Microsoft Cloud Curricula
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginBottom: 20 }}>
                    Direct curriculum mapping with Microsoft Learn for Azure Cloud engineering, AI foundations, and system administration modules.
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#107C10', backgroundColor: '#F0F9F0', padding: '4px 10px', borderRadius: 2 }}>
                    Azure Cloud Certified Hub
                  </span>
                </ScrollReveal>
              </div>

              {/* Card 4: UGC / AICTE approvals (grid-col-span-7) */}
              <div className="md:col-span-7 hover:border-[#8660A9] hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default" style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <ScrollReveal>
                  <div style={{ width: 36, height: 36, borderRadius: 4, backgroundColor: 'rgba(134,96,169,0.08)', color: '#8660A9', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', marginBottom: 20 }}>
                    <Shield size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19.5, color: DARK, marginBottom: 8 }}>
                    UGC Section 2(f) &amp; 12(B) Recognition
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginBottom: 20 }}>
                    Fully recognized by the University Grants Commission (UGC) of India, enabling funding eligibilities for academic developmental schemes, faculty projects, and research grants.
                  </p>
                  <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#8660A9', backgroundColor: '#F8F3FF', padding: '4px 10px', borderRadius: 2 }}>
                    Government Recognized
                  </span>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── LEADERSHIP PROFILES ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <span className="section-eyebrow">College Trustees</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: DARK,
                letterSpacing: '-0.02em',
                marginBottom: 48,
                paddingBottom: 28,
                borderBottom: `1px solid ${BORDER}`,
              }}>
                The People Behind RD National
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.id} delay={i * 0.07}>
                  <div style={{
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    backgroundColor: WHITE,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {/* Photo panel */}
                    <div style={{
                      height: 280,
                      overflow: 'hidden',
                      backgroundColor: GRAY,
                    }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                      />
                    </div>
                    {/* Bio details */}
                    <div style={{
                      padding: '28px',
                      backgroundColor: WHITE,
                      borderTop: `1px solid ${BORDER}`,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 17.5,
                          color: DARK,
                          marginBottom: 4,
                        }}>
                          {member.name}
                        </h4>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: BLUE,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: 16,
                        }}>
                          {member.role}
                        </div>
                      </div>
                      
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13.5,
                        color: MUTED,
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        borderLeft: `2px solid ${BLUE}`,
                        paddingLeft: 12,
                      }}>
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{
                backgroundColor: DARK,
                color: WHITE,
                borderRadius: 6,
                padding: '72px 48px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Radial Glow overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,103,184,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  color: WHITE,
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Join Our Growing Community
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  color: '#A6A6A6',
                  lineHeight: 1.7,
                  marginBottom: 36,
                  maxWidth: 580,
                  margin: '0 auto 36px',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Explore academic programs, review fee structures, and secure your admission for the 2026–27 academic batch today.
                </p>
                <Link
                  to="/admissions"
                  className="fluent-btn-primary animate-pulse"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 28px',
                    backgroundColor: BLUE,
                    color: WHITE,
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 14.5,
                    textDecoration: 'none',
                    borderRadius: 4,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Apply Online <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
