import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  { src: '/mrgutters-gutters1.jpg',        label: 'Gutter Installation' },
  { src: '/mrgutters-whitehouse.jpg',       label: 'Residential Project' },
  { src: '/mrgutters-brickhouse.jpg',       label: 'Brick Home Gutters' },
  { src: '/mrgutters-gutters3.jpg',         label: 'Gutter Guards' },
  { src: '/mrgutters-grayhouse.jpg',        label: 'Full System Install' },
  { src: '/mrgutters-whitebrickhouse2.jpg', label: 'Seamless Gutters' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() => setLightboxIndex(i => i === null ? null : (i - 1 + images.length) % images.length), []);
  const next  = useCallback(() => setLightboxIndex(i => i === null ? null : (i + 1) % images.length), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, prev, next, close]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <h2 className="absolute bottom-[-0.2em] left-0 text-[18vw] md:text-[150px] lg:text-[180px] font-black text-primary opacity-[0.05] select-none leading-none pointer-events-none whitespace-nowrap">GALLERY</h2>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Recent Projects</span>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">See The Results</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Browse through our recent installations, cleanings, and repairs to see the quality of our work firsthand.</p>
        </div>

        {/* Mobile: 2-col equal grid | Desktop: bento mosaic */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {images.map((img, idx) => (
            <GalleryCell key={idx} img={img} onClick={() => open(idx)} className="aspect-square" />
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-4" style={{ gridTemplateRows: '280px 280px 200px' }}>
          <GalleryCell img={images[0]} onClick={() => open(0)} className="col-span-2 row-span-2" />
          <GalleryCell img={images[1]} onClick={() => open(1)} className="col-span-1 row-span-1" />
          <GalleryCell img={images[2]} onClick={() => open(2)} className="col-span-1 row-span-1" />
          <GalleryCell img={images[3]} onClick={() => open(3)} className="col-span-1 row-span-1" />
          <GalleryCell img={images[4]} onClick={() => open(4)} className="col-span-1 row-span-1" />

          {/* [5] Bottom-right */}
          <GalleryCell img={images[5]} onClick={() => open(5)} className="col-span-1 row-span-1" />
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-primary border border-gray-200 px-6 py-3 font-black text-sm uppercase rounded btn-effect hover:border-primary">
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-bold tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-black text-sm uppercase tracking-widest border-b-2 border-accent pb-1">
            {images[lightboxIndex].label}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            key={lightboxIndex}
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].label}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl"
            style={{ animation: 'wordEnter 0.3s ease-out forwards' }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); open(i); }}
                className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === lightboxIndex ? 'border-accent scale-110' : 'border-white/20 opacity-50 hover:opacity-80'}`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryCell({ img, onClick, className }: { img: typeof images[0]; onClick: () => void; className?: string }) {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg bg-gray-100 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Label + zoom icon */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
        <span className="text-white font-bold text-sm uppercase tracking-widest border-b-2 border-accent pb-0.5">{img.label}</span>
        <ZoomIn size={18} className="text-accent shrink-0" />
      </div>
    </div>
  );
}
