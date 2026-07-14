import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import { events } from '../data/events';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

export default function Events() {
  return (
    <>
      <SEOMeta
        title="Events"
        description="Upcoming events at RD National College — Annual Cultural Fest 2026 and RD National Hackathon 2026, a 48-hour innovation marathon with ₹1 lakh+ prize pool."
      />

      {/* Page Header */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 120,
        paddingBottom: 64,
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <ScrollReveal>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: BLUE,
              display: 'block',
              marginBottom: 20,
            }}>
              What's On
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.08,
              color: WHITE,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}>
              Events &amp; Activities
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: '#A6A6A6',
              maxWidth: 540,
              lineHeight: 1.7,
            }}>
              Cultural celebrations, tech marathons, and everything that makes college life extraordinary at RD National.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <main style={{ backgroundColor: GRAY }}>

        {/* Upcoming Events */}
        <section style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>
            <ScrollReveal>
              <span className="section-eyebrow">Upcoming</span>
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
                Upcoming Events 2026
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 0.1}>
                  <div style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    overflow: 'hidden',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = BLUE;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                      e.currentTarget.style.borderColor = BORDER;
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={event.image}
                        alt={event.title}
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
                        top: 16,
                        left: 16,
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        backgroundColor: WHITE,
                        color: DARK,
                        padding: '4px 10px',
                        border: `1px solid ${BORDER}`,
                        borderRadius: 2,
                      }}>
                        {event.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '32px' }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: BLUE,
                        marginBottom: 12,
                      }}>
                        {event.date}
                      </div>
                      <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 22,
                        color: DARK,
                        marginBottom: 12,
                        lineHeight: 1.25,
                      }}>
                        {event.title}
                      </h2>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14.5,
                        color: MUTED,
                        lineHeight: 1.65,
                        marginBottom: 24,
                      }}>
                        {event.description}
                      </p>

                      {event.highlights && (
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                          {event.highlights.slice(0, 3).map(h => (
                            <li key={h} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 8,
                              fontFamily: 'var(--font-sans)',
                              fontSize: 13.5,
                              color: MUTED,
                            }}>
                              <span style={{
                                width: 6,
                                height: 6,
                                backgroundColor: BLUE,
                                borderRadius: 1,
                                flexShrink: 0,
                                marginTop: 6,
                              }} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link to={`/events/${event.slug}`} className="fluent-btn-primary" style={{ padding: '8px 20px', fontSize: 13.5 }}>
                        View Details <ArrowRight size={14} style={{ marginLeft: 4 }} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Past Highlights */}
        <section style={{ backgroundColor: WHITE, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>
            <ScrollReveal>
              <span className="section-eyebrow">Archive</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: DARK,
                letterSpacing: '-0.02em',
                marginBottom: 40,
                paddingBottom: 28,
                borderBottom: `1px solid ${BORDER}`,
              }}>
                Past Cultural Highlights
              </h2>
            </ScrollReveal>

            <div style={{
              gap: 8,
            }} className="grid grid-cols-2 lg:grid-cols-4">
              {/* Featured */}
              <div style={{
                gridColumn: '1 / 3',
                gridRow: '1 / 3',
                overflow: 'hidden',
                borderRadius: 4,
                border: `1px solid ${BORDER}`,
              }}>
                <img
                  src="/images/CULTURAL & EVENTS/radar2.jpg"
                  alt="RADAR Fest"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="hover:scale-103"
                />
              </div>
              {[
                '/images/CULTURAL & EVENTS/Cdance.jpg',
                '/images/CULTURAL & EVENTS/radar1.jpg',
                '/images/CULTURAL & EVENTS/music.jpg',
                '/images/CULTURAL & EVENTS/Cdance1.jpg',
              ].map((src, i) => (
                <div key={i} style={{ overflow: 'hidden', borderRadius: 4, border: `1px solid ${BORDER}` }}>
                  <img
                    src={src}
                    alt="Cultural event"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="hover:scale-103"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
