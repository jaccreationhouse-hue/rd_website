import { useEffect, useRef, useState } from 'react';

/**
 * StatCounter — animates a number from 0 to `target` when scrolled into view.
 * @param {number} target - Final number value
 * @param {string} suffix - e.g. "+" or "%"
 * @param {string} label - Descriptive label below
 */
export default function StatCounter({ target, suffix = '', label, accent = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          observer.unobserve(el);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const animateCount = () => {
    const duration = 2000; // ms
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease out cubic
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, duration / steps);
  };

  return (
    <div
      ref={ref}
      className="text-center px-4 py-6"
    >
      <div
        className={`font-heading text-[clamp(36px,5vw,52px)] font-bold leading-none tracking-tight ${
          accent ? 'text-accent' : 'text-primary-foreground'
        }`}
      >
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div
        className="font-sans text-sm text-primary-foreground/60 mt-2 font-medium tracking-wide"
      >
        {label}
      </div>
    </div>
  );
}
