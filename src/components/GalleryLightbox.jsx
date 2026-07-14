import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

/**
 * GalleryLightbox — masonry/grid gallery with lazy loading, skeleton loaders, and lightbox.
 * @param {Array} images - [{src, alt, caption}]
 */
export default function GalleryLightbox({ images }) {
  const [loaded, setLoaded] = useState({});
  const [lightbox, setLightbox] = useState(null); // index of currently open image

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const handleLoad = (src) => setLoaded((prev) => ({ ...prev, [src]: true }));

  return (
    <>
      {/* Masonry Grid */}
      <div
        style={{
          columns: 'auto 280px',
          columnGap: '16px',
          gap: '16px',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img.src}
            style={{
              breakInside: 'avoid',
              marginBottom: '16px',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: '#e2e8f0',
            }}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View image: ${img.alt}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
          >
            {/* Skeleton */}
            {!loaded[img.src] && (
              <div
                className="skeleton"
                style={{ width: '100%', paddingTop: '66%' }}
                aria-hidden="true"
              />
            )}

            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onLoad={() => handleLoad(img.src)}
              style={{
                display: loaded[img.src] ? 'block' : 'none',
                width: '100%',
                height: 'auto',
                transition: 'transform 0.4s ease',
              }}
            />

            {/* Hover overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,34,64,0.85) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '16px',
              }}
              className="gallery-overlay"
            >
              <span
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                {img.caption || img.alt}
              </span>
              <ZoomIn size={16} style={{ color: '#D4AF37', marginTop: 4 }} />
            </div>

            {/* Hover effect via pseudo — use onMouseEnter/Leave for inline styles */}
            <style>{`.gallery-overlay { transition: opacity 0.3s; } [role="button"]:hover .gallery-overlay { opacity: 1; } [role="button"]:hover img { transform: scale(1.03); }`}</style>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0,0,0,0.93)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: 16,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div style={{ maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                borderRadius: '12px',
                objectFit: 'contain',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              }}
            />
            {images[lightbox].caption && (
              <p
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.75)',
                  marginTop: 16,
                  fontWeight: 600,
                }}
              >
                {images[lightbox].caption}
              </p>
            )}
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>
              {lightbox + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: 16,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
