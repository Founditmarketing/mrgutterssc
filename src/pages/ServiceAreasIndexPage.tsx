import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

const areas = [
  'Columbia', 'Lexington', 'Irmo', 'Cayce', 'West Columbia',
  'Forest Acres', 'Blythewood', 'Camden', 'Lugoff', 'Elgin',
  'Newberry', 'Prosperity', 'Winnsboro', 'Sumter', 'Orangeburg',
  'Saint Matthews', 'Swansea', 'Gaston', 'Pelion', 'Batesburg-Leesville', 'Saluda',
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function ServiceAreasIndexPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
            <span className="text-white">Service Areas</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Service Areas</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Mr Gutter SC proudly serves communities throughout the South Carolina Midlands. Find your city below.</p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map(name => (
              <Link
                key={name}
                to={`/service-areas/${toSlug(name)}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-200"
              >
                <MapPin size={16} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-primary font-black text-sm group-hover:text-accent transition-colors">{name}, SC</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
