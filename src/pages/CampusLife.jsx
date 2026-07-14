import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, Heart, Activity, Compass, Shield } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const zones = [
  {
    title: 'Stark Industries Lab',
    desc: 'High-tech incubation and robotics lab. Where students build the products of tomorrow.',
    img: '/images/life at rd/stark.jpg',
  },
  {
    title: 'Shadow Zone',
    desc: 'E-sports arena and competitive coding centre. Open late for hackathons and team builds.',
    img: '/images/life at rd/shadowzone.jpg',
  },
  {
    title: "Let's Meat & Eat",
    desc: 'Premium campus restaurant with multi-cuisine menus — non-veg, snacks, and healthy options.',
    img: '/images/life at rd/meateat.jpg',
  },
  {
    title: 'iLand Workspace',
    desc: 'A flexible, open collaborative space designed for group projects and casual learning.',
    img: '/images/life at rd/iland.jpg',
  },
];

export default function CampusLife() {
  return (
    <>
      <SEOMeta
        title="Campus Life"
        description="Discover life at RD National College — state-of-the-art labs, central library, sports turf, cafeteria, and vibrant campus culture in Erode."
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
              Campus
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
              Life at RD National
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: '#A6A6A6',
              maxWidth: 540,
              lineHeight: 1.7,
            }}>
              A vibrant campus where learning extends beyond the classroom — themed labs, sports, culture, and community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <main style={{ backgroundColor: GRAY }}>

        {/* Photo Masonry */}
        <section style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>
            <ScrollReveal>
              <span className="section-eyebrow">Gallery</span>
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
                A Glimpse of Campus Life
              </h2>
            </ScrollReveal>

            {/* Bento grid */}
            <div style={{
              gap: 8,
            }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              
              {/* Large featured image */}
              <div style={{
                gridColumn: '1 / 3',
                gridRow: '1 / 3',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#1a2e48',
                borderRadius: 4,
                border: `1px solid ${BORDER}`,
              }}>
                <img
                  src="/images/life at rd/ilandopen.jpg"
                  alt="iLand Workspace"
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
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '12px 16px',
                  background: 'linear-gradient(to top, rgba(27,27,27,0.85) 0%, transparent 100%)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}>
                  iLand — Collaborative Workspace
                </div>
              </div>

              {/* Other images */}
              {[
                { src: '/images/life at rd/lib4.jpg', label: 'Central Library' },
                { src: '/images/life at rd/microsoft.jpg', label: 'Industry Partnership' },
                { src: '/images/CULTURAL & EVENTS/radar1.jpg', label: 'RADAR Fest' },
                { src: '/images/life at rd/cdf.jpg', label: 'Fashion Studio' },
                { src: '/images/life at rd/boardgame.jpg', label: 'Student Recreation' },
                { src: '/images/life at rd/shootfloor.jpg', label: 'Shoot Floor' },
              ].map((item, i) => (
                <div key={i} style={{
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#E8E3DB',
                  borderRadius: 4,
                  border: `1px solid ${BORDER}`,
                }}>
                  <img
                    src={item.src}
                    alt={item.label}
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
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(to top, rgba(27,27,27,0.8) 0%, transparent 100%)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section style={{ backgroundColor: WHITE, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
            <ScrollReveal>
              <span className="section-eyebrow">Facilities</span>
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
                Spaces Designed to Inspire
              </h2>
            </ScrollReveal>

            <div style={{
              gap: 0,
            }} className="grid grid-cols-1 sm:grid-cols-2">
              {zones.map((zone, i) => (
                <ScrollReveal key={zone.title} delay={i * 0.07}>
                  <div style={{
                    borderRight: (i + 1) % 2 !== 0 ? `1px solid ${BORDER}` : 'none',
                    borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none',
                    overflow: 'hidden',
                  }}>
                    {/* Image */}
                    <div style={{ height: 200, overflow: 'hidden' }}>
                      <img
                        src={zone.img}
                        alt={zone.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                        className="hover:scale-103"
                      />
                    </div>
                    {/* Text */}
                    <div style={{ padding: '28px 32px', borderTop: `1px solid ${BORDER}`, backgroundColor: WHITE }}>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: 20,
                        color: DARK,
                        marginBottom: 10,
                      }}>
                        {zone.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14.5,
                        color: MUTED,
                        lineHeight: 1.65,
                      }}>
                        {zone.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural strip */}
        <section style={{ borderBottom: `1px solid ${BORDER}`, overflow: 'hidden' }}>
          <div style={{
            height: 280,
          }} className="grid grid-cols-1 sm:grid-cols-3">
            {[
              { src: '/images/CULTURAL & EVENTS/Cdance.jpg', label: 'Classical Dance' },
              { src: '/images/CULTURAL & EVENTS/music.jpg', label: 'Music & Arts' },
              { src: '/images/CULTURAL & EVENTS/image10.jpg', label: 'Cultural Events' },
            ].map((item, i) => (
              <div key={i} style={{
                position: 'relative',
                overflow: 'hidden',
                borderRight: i < 2 ? `1px solid rgba(255,255,255,0.2)` : 'none',
              }}>
                <img
                  src={item.src}
                  alt={item.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="hover:scale-103"
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(to top, rgba(27,27,27,0.85) 0%, transparent 100%)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Clubs & Support Societies */}
        <section style={{ backgroundColor: GRAY, padding: '96px 0', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 56 }}>
                <span className="section-eyebrow">Student Development</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: DARK,
                  letterSpacing: '-0.02em',
                  marginTop: 8,
                }}>
                  Clubs, Wings &amp; Societies
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: MUTED, marginTop: 10, maxWidth: 520 }}>
                  Empowering student interests beyond classrooms through leadership cells, coding guilds, and social responsibility forums.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'RD Coding Guild',
                  desc: 'A student-driven collective developing software apps, hosting code challenges, and organizing the annual 48-Hour Hackathon.',
                  icon: Code,
                  color: '#0067B8',
                  lightBg: '#F3F8FC'
                },
                {
                  name: 'NSS & NCC Wings',
                  desc: 'Cultivating leadership, character, and discipline through regular drills, community sanitation camps, and social awareness drives.',
                  icon: Shield,
                  color: '#107C10',
                  lightBg: '#F0F9F0'
                },
                {
                  name: 'Fine Arts Association',
                  desc: 'Nurturing classical dance, theatre, music, and painting talents. Organizes RADAR cultural activities and Inter-collegiate fests.',
                  icon: Users,
                  color: '#D83B01',
                  lightBg: '#FFF5F1'
                },
                {
                  name: 'Eco & Red Cross Cell',
                  desc: 'Driving campus environmental initiatives, sapling planting campaigns, and organizing volunteer blood donation drives in Erode.',
                  icon: Heart,
                  color: '#8660A9',
                  lightBg: '#F8F3FF'
                }
              ].map((club, idx) => {
                const Icon = club.icon;
                return (
                  <ScrollReveal key={club.name} delay={idx * 0.05}>
                    <div style={{
                      backgroundColor: WHITE,
                      border: `1px solid ${BORDER}`,
                      borderTop: `4px solid ${club.color}`,
                      borderRadius: 4,
                      padding: '28px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    }}>
                      <div>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 38,
                          height: 38,
                          borderRadius: 4,
                          backgroundColor: club.lightBg,
                          color: club.color,
                          marginBottom: 16,
                        }}>
                          <Icon size={18} />
                        </div>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 16.5,
                          color: DARK,
                          marginBottom: 8,
                        }}>
                          {club.name}
                        </h3>
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          color: MUTED,
                          lineHeight: 1.6,
                        }}>
                          {club.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: DARK, color: WHITE, padding: '80px 32px', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: WHITE,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              Experience it in Person
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: '#A6A6A6',
              lineHeight: 1.7,
              marginBottom: 40,
            }}>
              Schedule a campus visit and see our labs, spaces, and community firsthand.
            </p>
            <Link to="/contact" className="fluent-btn-primary" style={{ minWidth: 160 }}>
              Book a Campus Visit <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
