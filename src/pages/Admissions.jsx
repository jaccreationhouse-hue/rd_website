import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, FileText, Phone, Users, GraduationCap,
  BookOpen, ClipboardList, CreditCard, ChevronRight
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import EnquiryForm from '../components/EnquiryForm';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const fees = [
  {
    level: 'Undergraduate',
    code: 'UG',
    icon: BookOpen,
    accent: '#0067B8',
    lightBg: '#F3F8FC',
    items: [
      { label: 'Tuition Fee', amount: '₹20,000', period: 'per semester' },
      { label: 'Transport Fee', amount: '₹6,000', period: 'per semester', note: 'Optional' },
      { label: 'Hostel Fee', amount: '₹6,000', period: 'per month', note: 'Optional' },
    ],
    eligibility: [
      'Passed Class 12 (10+2) from a recognized board',
      'Minimum 50% aggregate marks (45% for SC/ST)',
      'No age bar for most programmes',
    ],
  },
  {
    level: 'Postgraduate',
    code: 'PG',
    icon: GraduationCap,
    accent: '#4F46E5',
    lightBg: '#F5F3FF',
    items: [
      { label: 'Tuition Fee', amount: '₹4,950', period: 'per semester' },
      { label: 'Transport Fee', amount: '₹6,000', period: 'per semester', note: 'Optional' },
      { label: 'Hostel Fee', amount: '₹6,000', period: 'per month', note: 'Optional' },
    ],
    eligibility: [
      'Relevant UG degree from a recognized university',
      'Minimum 50% aggregate marks in UG (45% for SC/ST)',
      'Candidates awaiting UG results may also apply',
    ],
  },
  {
    level: 'Doctoral',
    code: 'PhD',
    icon: ClipboardList,
    accent: '#107C10',
    lightBg: '#F0F9F0',
    items: [
      { label: 'Tuition Fee', amount: 'Contact Us', period: 'per year' },
    ],
    eligibility: [
      'Relevant PG degree with minimum 55% marks',
      'Research proposal outlining area of study',
      'NET/SET qualification preferred but not mandatory',
      'Interview with Research Committee required',
    ],
  },
];

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Fill Enquiry Form',
    desc: 'Complete the online enquiry form below or call us directly to register your interest.',
    color: '#0067B8',
  },
  {
    num: '02',
    icon: Phone,
    title: 'Counselling Session',
    desc: 'Our admissions team schedules a free counselling call to understand your goals and guide you to the right programme.',
    color: '#4F46E5',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Submit Documents',
    desc: 'Provide mark sheets, transfer certificate, identity proof, and a passport photograph.',
    color: '#D83B01',
  },
  {
    num: '04',
    icon: CreditCard,
    title: 'Fee Payment & Admission',
    desc: 'Pay the semester fee and receive your official admission confirmation letter.',
    color: '#107C10',
  },
];

const highlights = [
  { value: '3,200+', label: 'Students Enrolled' },
  { value: '94%', label: 'Placement Rate' },
  { value: '25+', label: 'Programmes Offered' },
  { value: '1992', label: 'Year Established' },
];

export default function Admissions() {
  return (
    <>
      <SEOMeta
        title="Admissions 2026–27"
        description="Apply to RD National College — fee structure, eligibility criteria, and enquiry form for UG, PG, and Doctoral programmes."
      />

      {/* ── HERO HEADER ── */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 100,
        paddingBottom: 0,
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Subtle grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 760 }}>
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
                Admissions 2026–27
              </span>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                lineHeight: 1.05,
                color: WHITE,
                letterSpacing: '-0.025em',
                marginBottom: 24,
              }}>
                Start Your<br />
                <span style={{ color: BLUE }}>Journey Here.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: 40,
              }}>
                Transparent fees, simple eligibility, and a streamlined process — from enquiry to enrollment in 4 simple steps.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#enquiry-form" className="fluent-btn-primary" style={{ gap: 8 }}>
                  Apply Now <ArrowRight size={15} />
                </a>
                <a href="#fee-structure" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 20px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 4,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  View Fee Structure <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Bar */}
          <ScrollReveal delay={0.1}>
            <div style={{
              marginTop: 64,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
            }} className="grid grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, i) => (
                <div key={h.label} style={{
                  padding: '32px 28px',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 32,
                    color: WHITE,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{h.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}>{h.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <main>

        {/* ── FEE STRUCTURE ── */}
        <section id="fee-structure" style={{ backgroundColor: GRAY, padding: '96px 0', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 56 }}>
                <span className="section-eyebrow">Fee Structure</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 8,
                }}>
                  Transparent &amp; Affordable Fees
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: MUTED, marginTop: 10, maxWidth: 520 }}>
                  No hidden charges. All fees are listed per programme category below.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {fees.map((level, li) => {
                const Icon = level.icon;
                return (
                  <ScrollReveal key={level.code} delay={li * 0.07}>
                    <div style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderTop: `4px solid ${level.accent}`,
                      borderRadius: 6,
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    }}>
                      {/* Card Header */}
                      <div style={{ padding: '28px 28px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: 4,
                            backgroundColor: level.lightBg,
                            color: level.accent,
                          }}>
                            <Icon size={20} />
                          </div>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10,
                            fontWeight: 700,
                            color: level.accent,
                            backgroundColor: level.lightBg,
                            padding: '3px 10px',
                            borderRadius: 2,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}>
                            {level.code}
                          </span>
                        </div>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 20,
                          color: DARK,
                          marginBottom: 4,
                        }}>
                          {level.level}
                        </h3>
                      </div>

                      {/* Fee Rows */}
                      <div style={{ borderTop: `1px solid ${BORDER}`, flex: 1 }}>
                        {level.items.map((item, i) => (
                          <div key={item.label} style={{
                            padding: '16px 28px',
                            borderBottom: i < level.items.length - 1 ? `1px solid ${BORDER}` : 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: DARK, fontWeight: 500 }}>
                                {item.label}
                              </span>
                              {item.note && (
                                <span style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: 9,
                                  color: level.accent,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.04em',
                                }}>
                                  {item.note}
                                </span>
                              )}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                fontSize: 17,
                                color: level.accent,
                              }}>
                                {item.amount}
                              </div>
                              <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 10,
                                color: MUTED,
                                textTransform: 'uppercase',
                              }}>
                                {item.period}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Eligibility */}
                      <div style={{ padding: '20px 28px 28px', borderTop: `1px solid ${BORDER}`, backgroundColor: GRAY }}>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 9.5,
                          fontWeight: 600,
                          color: MUTED,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: 12,
                        }}>
                          Eligibility
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {level.eligibility.map((e, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                              <CheckCircle size={13} style={{ color: level.accent, flexShrink: 0, marginTop: 3 }} />
                              <span style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 12.5,
                                color: MUTED,
                                lineHeight: 1.5,
                              }}>
                                {e}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW TO APPLY (Process) ── */}
        <section style={{ backgroundColor: WHITE, padding: '96px 0', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 64, textAlign: 'center', maxWidth: 560, margin: '0 auto 64px' }}>
                <span className="section-eyebrow">Process</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 8,
                }}>
                  How to Apply
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: MUTED, marginTop: 10 }}>
                  Simple, transparent, and completed in 4 guided steps.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.num} delay={i * 0.07}>
                    <div style={{
                      padding: '36px 28px',
                      borderRight: i < steps.length - 1 ? `1px solid ${BORDER}` : 'none',
                      borderBottom: `1px solid ${BORDER}`,
                      borderTop: `1px solid ${BORDER}`,
                      borderLeft: i === 0 ? `1px solid ${BORDER}` : 'none',
                      position: 'relative',
                      transition: 'background-color 0.2s',
                    }} className="hover:bg-[#FAFAFA]">
                      {/* Step Number */}
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        fontWeight: 700,
                        color: step.color,
                        letterSpacing: '0.04em',
                        marginBottom: 16,
                      }}>
                        {step.num}
                      </div>
                      {/* Icon */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: 4,
                        backgroundColor: `${step.color}12`,
                        color: step.color,
                        marginBottom: 18,
                      }}>
                        <Icon size={20} />
                      </div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 17,
                        color: DARK,
                        marginBottom: 10,
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13.5,
                        color: MUTED,
                        lineHeight: 1.65,
                      }}>
                        {step.desc}
                      </p>
                      {/* Connector Arrow */}
                      {i < steps.length - 1 && (
                        <ChevronRight
                          size={18}
                          style={{
                            position: 'absolute',
                            right: -10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: BORDER,
                            zIndex: 1,
                          }}
                        />
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ENQUIRY FORM ── */}
        <section id="enquiry-form" style={{ backgroundColor: GRAY, padding: '96px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left: Copy */}
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <span className="section-eyebrow">Enquiry Form</span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    color: DARK,
                    letterSpacing: '-0.02em',
                    marginTop: 8,
                    marginBottom: 16,
                  }}>
                    Ready to Apply?<br />Let's Talk.
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    color: MUTED,
                    lineHeight: 1.7,
                    marginBottom: 36,
                  }}>
                    Fill in the form and our admissions counsellor will reach out within 24 hours to guide you through the process.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { icon: Phone, label: 'Call Us', value: '+91 7373 747 474' },
                      { icon: Users, label: 'Walk-in Counselling', value: 'Mon–Sat, 9 AM – 5 PM' },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{
                          width: 36,
                          height: 36,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0,103,184,0.08)',
                          color: BLUE,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
                          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: DARK }}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Form Card */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.08}>
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    padding: '40px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                  }}>
                    <EnquiryForm variant="light" title="" />
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
