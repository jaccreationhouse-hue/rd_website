import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children with a fade-up animation triggered by IntersectionObserver.
 * Usage: <ScrollReveal delay={0.2}><YourComponent /></ScrollReveal>
 */
export default function ScrollReveal({ children, delay = 0, className = '', threshold = 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
