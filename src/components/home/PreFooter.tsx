import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DROPS = Array.from({ length: 25 }, (_, i) => ({
  left: (i * 4.1) % 100,
  delay: (i * 0.17) % 3,
  duration: 0.6 + (i % 6) * 0.11,
  height: 45 + (i % 5) * 20,
}));

export default function PreFooter() {
  return (
    <section className="relative py-20 bg-accent overflow-hidden">

      {/* Rain drops — wrapper controls overall faintness */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.18 }}>
        {DROPS.map((d, i) => (
          <div
            key={i}
            className="absolute top-0 rounded-full"
            style={{
              left: `${d.left}%`,
              width: '2px',
              height: `${d.height}px`,
              backgroundColor: '#052e67',
              animation: `rain ${d.duration}s linear ${d.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
         <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 mt-8">Ready To Protect Your Home?</h2>
         <p className="text-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
           Don't wait for water damage to occur. Get a free, no-obligation quote from South Carolina's trusted gutter experts today.
         </p>

         <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto bg-primary text-white font-black py-4 px-10 rounded btn-effect hover:bg-white hover:text-primary uppercase tracking-widest text-lg border-2 border-primary text-center">
              Get Your Free Quote
            </Link>
            <span className="text-primary font-black">OR</span>
            <a href="tel:8033608890" className="w-full sm:w-auto flex items-center justify-center bg-white text-primary font-black py-4 px-10 rounded btn-effect hover:bg-transparent hover:text-primary uppercase tracking-widest text-lg border-2 border-white">
              <Phone size={20} className="mr-2" />
              (803) 360-8890
            </a>
         </div>
      </div>
    </section>
  );
}
