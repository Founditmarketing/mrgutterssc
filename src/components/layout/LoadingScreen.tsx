import { useEffect, useState } from 'react';

const DROPS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: ((i * 2.17 + Math.sin(i * 5.3) * 20 + 50) % 100),
  delay: (i * 0.11) % 3,
  duration: 0.55 + (i % 6) * 0.12,
  height: 50 + (i % 5) * 22,
  opacity: 0.2 + (i % 4) * 0.1,
  blur: i % 4 === 0 ? 0.5 : 0,
}));

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setFadingOut(true), 3200);
    const t3 = setTimeout(() => onDone(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ transition: 'opacity 0.7s ease-in-out', opacity: fadingOut ? 0 : 1 }}
    >
      {/* Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {DROPS.map(drop => (
          <div
            key={drop.id}
            style={{
              position: 'absolute',
              left: `${drop.left}%`,
              top: '-60px',
              width: '1.5px',
              height: `${drop.height}px`,
              background: 'linear-gradient(to bottom, transparent, #b0bec5, transparent)',
              opacity: drop.opacity,
              borderRadius: '999px',
              filter: drop.blur ? `blur(${drop.blur}px)` : undefined,
              animation: `rain ${drop.duration}s ${drop.delay}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* GIF */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ transition: 'opacity 0.7s ease-out, transform 0.7s ease-out', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
      >
        <img
          src="/loadscreen/mrgutterloadscreen.gif"
          alt="Mr Gutter SC"
          className="w-72 md:w-96 object-contain"
        />
      </div>

      {/* Loading line */}
      <div
        className="relative z-10 mt-4 h-px bg-primary/20 rounded-full overflow-hidden"
        style={{ width: '120px', transition: 'opacity 0.5s ease-out 0.3s', opacity: visible ? 1 : 0 }}
      >
        <div
          className="h-full bg-primary rounded-full"
          style={{ transition: 'width 2.4s ease-in-out 0.4s', width: visible ? '100%' : '0%' }}
        />
      </div>
    </div>
  );
}
