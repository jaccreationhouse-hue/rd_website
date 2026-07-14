import { useState } from 'react';
import { Search, MessageCircle, Clock, Users, ChevronDown, ChevronUp, BookOpen, Layers, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import { ugCourses, pgCourses, doctoralCourses } from '../data/courses';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const WHITE = '#FFFFFF';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

// Map departments to Fluent brand colors
const deptColors = {
  'Computer Science & IT': '#0067B8',    // Fluent Blue
  'Commerce & Management': '#107C10',    // Fluent Green
  'Arts & Design': '#D83B01',            // Fluent Rust/Orange
};

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const accentColor = deptColors[course.department] || BLUE;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: WHITE,
        border: `1px solid ${hovered ? accentColor : BORDER}`,
        borderLeft: `4px solid ${accentColor}`,
        borderRadius: 4,
        padding: '24px',
        boxShadow: hovered 
          ? '0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)' 
          : '0 2px 4px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.01)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div>
        {/* Header meta */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9.5,
            fontWeight: 600,
            color: accentColor,
            textTransform: 'uppercase',
            backgroundColor: `${accentColor}10`,
            padding: '2px 8px',
            borderRadius: 2,
            letterSpacing: '0.04em',
          }}>
            {course.department}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9.5,
            fontWeight: 600,
            color: MUTED,
            textTransform: 'uppercase',
            backgroundColor: '#F0F0F0',
            padding: '2px 8px',
            borderRadius: 2,
            letterSpacing: '0.04em',
          }}>
            {course.level.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 18,
          color: DARK,
          marginBottom: 8,
          lineHeight: 1.3,
        }}>
          {course.name}
        </h3>

        {/* Stats Row */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Clock size={13} style={{ color: MUTED }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: MUTED }}>
              {course.duration}
            </span>
          </div>
          {course.seats && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Users size={13} style={{ color: MUTED }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: MUTED }}>
                {course.seats} Intake
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13.5,
          color: MUTED,
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'unset' : '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {course.description}
        </p>
      </div>

      {/* Expanded Actions & Details */}
      {expanded ? (
        <div 
          style={{ marginTop: 20, paddingTop: 16, borderTop: `1px dashed ${BORDER}` }}
          onClick={e => e.stopPropagation()} // Prevent card toggle on action click
        >
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link 
              to="/admissions" 
              className="fluent-btn-primary" 
              style={{ 
                padding: '6px 14px', 
                fontSize: 12.5, 
                backgroundColor: accentColor 
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = `${accentColor}DD`}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = accentColor}
            >
              Apply Now
            </Link>
            <a
              href={`https://wa.me/917373747474?text=Hi! I am interested in ${encodeURIComponent(course.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fluent-btn-secondary"
              style={{ padding: '6px 14px', fontSize: 12.5 }}
            >
              <MessageCircle size={13} /> Enquire
            </a>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            justifyContent: 'center',
            marginTop: 14,
            fontSize: 11,
            color: accentColor,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>
            Collapse Details <ChevronUp size={12} />
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          justifyContent: 'flex-end',
          marginTop: 16,
          fontSize: 11.5,
          color: accentColor,
          fontWeight: 600,
          textTransform: 'uppercase',
        }}>
          Learn More &amp; Apply <ChevronDown size={12} />
        </div>
      )}
    </div>
  );
}

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeDept, setActiveDept] = useState('all');
  const [search, setSearch] = useState('');

  // 1. Flatten and normalize all streams into a unified search list
  const allCourses = [
    ...Object.entries(ugCourses).flatMap(([dept, list]) => 
      list.map(c => ({ ...c, level: 'ug', department: dept }))
    ),
    ...pgCourses.map(c => {
      let dept = 'Arts & Design';
      if (c.id === 'msc-cs' || c.id === 'mca') dept = 'Computer Science & IT';
      if (c.id === 'mcom-ca') dept = 'Commerce & Management';
      return { ...c, level: 'pg', department: dept };
    }),
    ...doctoralCourses.map(c => {
      let dept = 'Commerce & Management';
      if (c.id === 'phd-cs') dept = 'Computer Science & IT';
      return { ...c, level: 'phd', department: dept };
    })
  ];

  // 2. Perform catalog filtering
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.shortName?.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    const matchesLevel = activeLevel === 'all' || course.level === activeLevel;
    const matchesDept = activeDept === 'all' || course.department === activeDept;

    return matchesSearch && matchesLevel && matchesDept;
  });

  // 3. Count helper for filter labels
  const getLevelCount = (lvl) => allCourses.filter(c => c.level === lvl).length;
  const getDeptCount = (dept) => allCourses.filter(c => c.department === dept).length;

  return (
    <>
      <SEOMeta
        title="Courses &amp; Programmes"
        description="Explore 21 UG, PG, and Doctoral programmes at RD National College — Computer Science, AI, Cyber Security, Commerce, BBA, Visual Communication and more."
      />

      {/* Page Header */}
      <section style={{
        backgroundColor: DARK,
        color: WHITE,
        paddingTop: 140,
        paddingBottom: 80,
        borderBottom: `1px solid ${BORDER}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle grid pattern background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: BLUE,
              display: 'block',
              marginBottom: 16,
              fontWeight: 600,
            }}>
              Academics Catalog
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              color: WHITE,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}>
              Academic Programs &amp; Streams
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              color: '#A6A6A6',
              maxWidth: 600,
              lineHeight: 1.6,
            }}>
              Explore 21 industry-aligned undergraduate, postgraduate, and research programmes designed to build software developers, financial experts, and visual communicators.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Catalog Explorer Section */}
      <main style={{ backgroundColor: GRAY, minHeight: '80vh', padding: '60px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Filter (col-span-3) */}
            <div className="lg:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              
              {/* Search Box Card */}
              <div style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: DARK,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 12,
                }}>
                  Search streams
                </div>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: MUTED,
                  }} />
                  <input
                    type="search"
                    placeholder="Search e.g. BCA, AI..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px 10px 36px',
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: DARK,
                      backgroundColor: GRAY,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      outline: 'none',
                      transition: 'all 0.15s ease',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = BLUE;
                      e.target.style.backgroundColor = WHITE;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = BORDER;
                      e.target.style.backgroundColor = GRAY;
                    }}
                  />
                </div>
              </div>

              {/* Levels Filter Card */}
              <div style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: '24px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: DARK,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 16,
                }}>
                  Program Levels
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { key: 'all', label: 'All Levels', count: allCourses.length },
                    { key: 'ug', label: 'Undergraduate', count: getLevelCount('ug') },
                    { key: 'pg', label: 'Postgraduate', count: getLevelCount('pg') },
                    { key: 'phd', label: 'Research (Ph.D)', count: getLevelCount('phd') },
                  ].map(lvl => {
                    const isSelected = activeLevel === lvl.key;
                    return (
                      <button
                        key={lvl.key}
                        onClick={() => setActiveLevel(lvl.key)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: isSelected ? '#F0F6FA' : 'transparent',
                          borderTop: 'none',
                          borderRight: 'none',
                          borderBottom: 'none',
                          borderLeft: isSelected ? `3px solid ${BLUE}` : '3px solid transparent',
                          borderRadius: 2,
                          textAlign: 'left',
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? BLUE : DARK,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        className="hover:bg-[#F9F9F9]"
                      >
                        <span>{lvl.label}</span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 9.5,
                          padding: '1px 6px',
                          backgroundColor: isSelected ? BLUE : '#E5E5E5',
                          color: isSelected ? WHITE : MUTED,
                          borderRadius: 2,
                          fontWeight: 600,
                        }}>
                          {lvl.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Department Filter Card */}
              <div style={{
                backgroundColor: WHITE,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                padding: '24px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: DARK,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 16,
                }}>
                  Schools &amp; Departments
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { key: 'all', label: 'All Departments', count: allCourses.length },
                    { key: 'Computer Science & IT', label: 'Computer Science & IT', count: getDeptCount('Computer Science & IT') },
                    { key: 'Commerce & Management', label: 'Commerce & Management', count: getDeptCount('Commerce & Management') },
                    { key: 'Arts & Design', label: 'Arts & Design', count: getDeptCount('Arts & Design') },
                  ].map(dept => {
                    const isSelected = activeDept === dept.key;
                    const accent = deptColors[dept.key] || BLUE;
                    return (
                      <button
                        key={dept.key}
                        onClick={() => setActiveDept(dept.key)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: isSelected ? `${accent}10` : 'transparent',
                          borderTop: 'none',
                          borderRight: 'none',
                          borderBottom: 'none',
                          borderLeft: isSelected ? `3px solid ${accent}` : '3px solid transparent',
                          borderRadius: 2,
                          textAlign: 'left',
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13.5,
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? accent : DARK,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        className="hover:bg-[#F9F9F9]"
                      >
                        <span>{dept.label}</span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 9.5,
                          padding: '1px 6px',
                          backgroundColor: isSelected ? accent : '#E5E5E5',
                          color: isSelected ? WHITE : MUTED,
                          borderRadius: 2,
                          fontWeight: 600,
                        }}>
                          {dept.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Catalog Panel (col-span-9) */}
            <div className="lg:col-span-9">
              <ScrollReveal>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${BORDER}`,
                  paddingBottom: 16,
                  marginBottom: 24,
                }}>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                  }}>
                    {activeLevel === 'all' ? 'All Catalog Programmes' : 
                     activeLevel === 'ug' ? 'Undergraduate Streams' :
                     activeLevel === 'pg' ? 'Postgraduate Streams' : 'Research Programmes'}
                  </h2>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: MUTED,
                  }}>
                    Showing {filteredCourses.length} of {allCourses.length}
                  </span>
                </div>
              </ScrollReveal>

              {filteredCourses.length === 0 ? (
                <div style={{
                  backgroundColor: WHITE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: '60px 24px',
                  textAlign: 'center',
                }}>
                  <Layers size={36} style={{ color: MUTED, marginBottom: 16 }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: DARK, marginBottom: 6 }}>
                    No Results Found
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: MUTED, maxWidth: 360, margin: '0 auto' }}>
                    Adjust your search query or department filters to find matching academic streams.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course, idx) => (
                    <ScrollReveal key={course.id} delay={(idx % 2) * 0.05}>
                      <CourseCard course={course} />
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
