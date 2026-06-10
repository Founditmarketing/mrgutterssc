import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, ZoomIn } from 'lucide-react';

const images = [
  { src: '/mrgutters-gutters1.jpg',          alt: 'Gutter installation close-up' },
  { src: '/mrgutters-bluehouse.jpg',          alt: 'Blue house gutter installation' },
  { src: '/mrgutters-gutters2.jpg',           alt: 'Seamless gutter detail' },
  { src: '/mrgutters-whitehouse.jpg',         alt: 'White house with new gutters' },
  { src: '/mrgutters-gutters3.jpg',           alt: 'Gutter guard installation' },
  { src: '/mrgutters-brickhouse.jpg',         alt: 'Brick house gutter system' },
  { src: '/mrgutters-gutters4.jpg',           alt: 'Downspout installation' },
  { src: '/mrgutters-grayhouse.jpg',          alt: 'Gray house seamless gutters' },
  { src: '/mrgutters-gutters5.jpg',           alt: 'Gutter cleaning service' },
  { src: '/mrgutters-whitebrickhouse.jpg',    alt: 'White brick home gutter work' },
  { src: '/mrgutters-gutters6.jpg',           alt: 'Completed gutter installation' },
  { src: '/mrgutters-brickhouse2.jpg',        alt: 'Brick home exterior gutters' },
  { src: '/mrgutters-whitehouse2.jpg',        alt: 'Colonial home gutter system' },
  { src: '/mrgutters-grayhouse2.jpg',         alt: 'Gray home roofline gutters' },
  { src: '/mrgutters-whitebrickhouse2.jpg',   alt: 'White brick home new gutters' },
  { src: '/mrgutters-newhouse.jpg',           alt: 'New construction gutter install' },
  { src: '/mrgutters-whitebrickhouse3.jpg',   alt: 'Gutter system on brick home' },
  { src: '/mrgutters-whitehouse3.jpg',        alt: 'White home gutter installation' },
  { src: '/mrgutters-whitehouse4.jpg',        alt: 'Residential gutter project' },
  { src: '/christmaslights.png',              alt: 'Christmas lighting installation' },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + images.length) % images.length);
  }, []);

  const next = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % images.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, prev, next]);

  // Scroll lock while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/mrgutters-bluehouse.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Our Work</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">A showcase of gutter installations, repairs, and home protection projects across the South Carolina Midlands.</p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3"
            style={{ columnFill: 'balance' }}
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                className="break-inside-avoid mb-3 relative group cursor-pointer rounded-lg overflow-hidden shadow-sm"
                onClick={() => open(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold uppercase tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2"
            onClick={close}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRightIcon size={36} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
            {images[lightboxIndex].alt}
          </div>
        </div>
      )}
    </>
  );
}
