import { useState } from 'react';
import { Phone, MessageCircle, Mail, Share2, MapPin, Clock, ArrowRight, Navigation } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import EnquiryForm from '../components/EnquiryForm';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const contactChannels = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7373 747 474',
    sub: 'Mon–Sat, 9 AM – 5 PM',
    href: 'tel:+917373747474',
    color: '#0067B8',
    lightBg: '#F3F8FC',
    cta: 'Call Now',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat Instantly',
    sub: 'Quickest response channel',
    href: 'https://wa.me/917373747474?text=Hi! I have an enquiry about RD National College.',
    color: '#107C10',
    lightBg: '#F0F9F0',
    cta: 'Open WhatsApp',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@rdcollege.in',
    sub: 'Response within 24 hours',
    href: 'mailto:info@rdcollege.in',
    color: '#D83B01',
    lightBg: '#FFF5F1',
    cta: 'Send Email',
  },
  {
    icon: Share2,
    label: 'Instagram',
    value: '@rdnationalcollegeerode',
    sub: 'Follow for events & updates',
    href: 'https://www.instagram.com/rdnationalcollegeerode',
    color: '#8660A9',
    lightBg: '#F8F3FF',
    cta: 'Follow Us',
    external: true,
  },
];

const officeHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [activeChannel, setActiveChannel] = useState(0);

  return (
    <>
      <SEOMeta
        title="Contact Us"
        description="Contact RD National College of Arts and Science, Erode — call, WhatsApp, email, or visit us at Chinniyampalayam, Karur Main Road, Erode 638151."
      />

      {/* ── HERO HEADER ── */}
      <section style={{
        backgroundColor: DARK,
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

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 640, paddingBottom: 72 }}>
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
                Get in Touch
              </span>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                lineHeight: 1.05,
                color: WHITE,
                letterSpacing: '-0.025em',
                marginBottom: 20,
              }}>
                We'd Love to<br />
                <span style={{ color: BLUE }}>Hear from You.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
              }}>
                Reach out for admissions queries, campus visits, collaborations, or general enquiries. We respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Channel Cards — attached to hero bottom */}
          <ScrollReveal delay={0.1}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {contactChannels.map((ch, i) => {
                const Icon = ch.icon;
                const isActive = activeChannel === i;
                return (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    onMouseEnter={() => setActiveChannel(i)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      padding: '28px 24px',
                      borderRight: i < contactChannels.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      textDecoration: 'none',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                      borderBottom: isActive ? `3px solid ${ch.color}` : '3px solid transparent',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: 4,
                      backgroundColor: isActive ? ch.color : 'rgba(255,255,255,0.06)',
                      color: isActive ? WHITE : 'rgba(255,255,255,0.5)',
                      transition: 'all 0.2s ease',
                    }}>
                      <Icon size={17} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: isActive ? ch.color : 'rgba(255,255,255,0.35)',
                        marginBottom: 4,
                        transition: 'color 0.2s',
                      }}>
                        {ch.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 14,
                        color: WHITE,
                        marginBottom: 3,
                      }}>
                        {ch.value}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.4)',
                      }}>
                        {ch.sub}
                      </div>
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12,
                      fontWeight: 600,
                      color: isActive ? ch.color : 'rgba(255,255,255,0.25)',
                      transition: 'color 0.2s',
                      marginTop: 4,
                    }}>
                      {ch.cta} <ArrowRight size={11} />
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <main>

        {/* ── MAP + FORM ── */}
        <section style={{ backgroundColor: GRAY, borderBottom: `1px solid ${BORDER}` }}>
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Map + Address */}
            <div className="lg:col-span-5" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: `1px solid ${BORDER}`,
            }}>
              {/* Google Map */}
              <div style={{ height: 380, backgroundColor: '#E8E3DB', flexShrink: 0 }}>
                <iframe
                  title="RD National College location map"
                  src="https://maps.google.com/maps?q=RD+National+College+of+Arts+and+Science+Erode&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ display: 'block', border: 'none' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address Card */}
              <div style={{
                padding: '40px 40px',
                backgroundColor: WHITE,
                borderTop: `1px solid ${BORDER}`,
                flex: 1,
              }}>
                <ScrollReveal>
                  <span className="section-eyebrow">Campus Address</span>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                    marginTop: 8,
                    marginBottom: 16,
                  }}>
                    RD National College of Arts &amp; Science
                  </h2>

                  <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      backgroundColor: '#F3F8FC',
                      color: BLUE,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      <MapPin size={16} />
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14.5,
                      color: MUTED,
                      lineHeight: 1.7,
                    }}>
                      Chinniyampalayam, Karur Main Road<br />
                      Erode – 638 151<br />
                      Tamil Nadu, India
                    </p>
                  </div>

                  {/* Office Hours */}
                  <div style={{
                    backgroundColor: GRAY,
                    borderRadius: 4,
                    border: `1px solid ${BORDER}`,
                    padding: '16px 20px',
                    marginBottom: 24,
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 12,
                    }}>
                      <Clock size={13} style={{ color: BLUE }} />
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        fontWeight: 600,
                        color: MUTED,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        Office Hours
                      </span>
                    </div>
                    {officeHours.map(({ day, time }) => (
                      <div key={day} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 6,
                      }}>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: MUTED }}>{day}</span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, color: DARK }}>{time}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://maps.google.com/?q=RD+National+College+Erode"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 20px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: 14,
                      color: WHITE,
                      backgroundColor: BLUE,
                      borderRadius: 4,
                      textDecoration: 'none',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#005A9E'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = BLUE}
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </ScrollReveal>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7" style={{
              padding: '64px 48px',
              backgroundColor: WHITE,
            }}>
              <ScrollReveal delay={0.08}>
                <span className="section-eyebrow">Send a Message</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 32,
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 8,
                  marginBottom: 8,
                }}>
                  Enquiry Form
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14.5,
                  color: MUTED,
                  lineHeight: 1.6,
                  marginBottom: 32,
                }}>
                  Have a question about a programme, fees, hostel, or anything else? We're here to help.
                </p>
                <EnquiryForm variant="light" />
              </ScrollReveal>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
