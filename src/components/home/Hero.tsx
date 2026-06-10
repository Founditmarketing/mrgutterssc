import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const rotatingWords = ['Professionals.', 'Specialists.', 'Experts.'];

const slides = [
  '/mrgutters-bluehouse.jpg',
  '/mrgutters-whitehouse.jpg',
  '/mrgutters-brickhouse.jpg',
  '/mrgutters-grayhouse.jpg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordPhase, setWordPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timer = setInterval(() => setWordPhase('out'), 2800);
    return () => clearInterval(timer);
  }, []);

  const handleWordAnimEnd = () => {
    if (wordPhase === 'out') {
      setWordIndex(i => (i + 1) % rotatingWords.length);
      setWordPhase('in');
    }
  };

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 800);
  }, [animating, current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-[600px] flex items-center py-32 bg-primary overflow-hidden">

      {/* Carousel Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[800ms]"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : (i === prev ? 0 : -1),
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2]" style={{ backgroundColor: 'rgba(5, 46, 103, 0.80)' }} />

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col lg:flex-row" style={{ zIndex: 3 }}>

        {/* Left Content Column */}
        <div className="w-full lg:w-3/5 text-white pr-0 lg:pr-12 md:max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-[11px] uppercase tracking-widest py-1.5 px-4 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            South Carolina's #1 Gutter Company
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-lg mb-6">
            Columbia's Most <br/>Trusted Gutter{' '}
            <span
              key={`${wordIndex}-${wordPhase}`}
              className="text-accent inline-block"
              style={{
                animation: wordPhase === 'out'
                  ? 'wordExit 0.32s ease-in forwards'
                  : 'wordEnter 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards',
              }}
              onAnimationEnd={handleWordAnimEnd}
            >
              {rotatingWords[wordIndex]}
            </span>
          </h1>
          <p className="text-lg opacity-90 max-w-lg mb-6 leading-relaxed">
            Quality gutter installation and guard systems built to last. Protected by our lifetime satisfaction guarantee.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-accent text-primary px-6 py-3 font-black text-sm uppercase rounded btn-effect text-center">
              Book Cleaning Now
            </Link>
            <a href="tel:8033608890" className="px-6 py-3 bg-transparent text-white font-black text-sm uppercase rounded border border-white hover:bg-white/10 transition-all text-center">
              Call (803) 360-8890
            </a>
          </div>
        </div>

        {/* Right Form Column (Visible on lg+) */}
        <div className="relative z-20 hidden lg:flex w-full lg:w-2/5 md:pl-8 items-center justify-center">
          <div className="relative w-full p-8 rounded border border-white/25 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-black text-[10px] uppercase tracking-widest py-1.5 px-3 rounded-full mb-4 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Fast & Free
              </div>
              <h3 className="text-white font-black text-3xl mb-2 tracking-tight leading-none">Request Your Estimate</h3>
              <p className="text-gray-300 text-sm mb-6 font-medium">Locked-in pricing valid for 30 days.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded p-3.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-medium" required />
                  <input type="text" placeholder="Last Name" className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded p-3.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-medium" required />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded p-3.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-medium" required />
                <input type="text" placeholder="Zip Code" className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded p-3.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-medium" required />
                <button className="w-full bg-accent text-primary py-4 rounded font-black text-sm uppercase mt-4 btn-effect tracking-wide shadow-lg shadow-accent/20">Estimate My Project</button>
              </form>
          </div>
        </div>

      </div>

      {/* Vertical Navigation — right side */}
      <div className="absolute right-4 top-6 md:right-8 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center gap-2 md:gap-4" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex flex-col items-center gap-1 md:gap-2"
          >
            {/* Number — hidden on mobile */}
            <span className={`hidden md:block text-[11px] font-black tracking-widest transition-all duration-300 ${
              i === current ? 'text-accent' : 'text-white/40 group-hover:text-white/70'
            }`}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Vertical track — smaller on mobile, full size on desktop */}
            <span
              className="relative rounded-full overflow-hidden bg-white/20 md:w-[3px] md:h-[80px]"
              style={{ width: '2px', height: i === current ? '36px' : '24px', transition: 'height 0.3s' }}
            >
              {i === current ? (
                <span
                  key={`fill-${current}`}
                  className="absolute top-0 left-0 w-full rounded-full bg-accent origin-top"
                  style={{ height: '100%', animation: 'slideProgress 5s linear forwards' }}
                />
              ) : (
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/50 transition-colors duration-300 rounded-full" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom zig zag */}
      <div className="absolute bottom-[-1px] w-full h-[40px] text-white overflow-hidden pointer-events-none" style={{ zIndex: 4 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[200%] absolute top-0 fill-current">
          <polygon points="0,100 100,100 100,50 97.5,100 95,50 92.5,100 90,50 87.5,100 85,50 82.5,100 80,50 77.5,100 75,50 72.5,100 70,50 67.5,100 65,50 62.5,100 60,50 57.5,100 55,50 52.5,100 50,50 47.5,100 45,50 42.5,100 40,50 37.5,100 35,50 32.5,100 30,50 27.5,100 25,50 22.5,100 20,50 17.5,100 15,50 12.5,100 10,50 7.5,100 5,50 2.5,100 0,50" />
        </svg>
      </div>
    </section>
  );
}
