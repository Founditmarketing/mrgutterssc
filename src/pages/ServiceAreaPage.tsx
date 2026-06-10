import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Phone, HardHat, Shield, Droplets, Wrench, Home as HomeIcon, Building2, Layers, Lightbulb } from 'lucide-react';

const DROPS = Array.from({ length: 25 }, (_, i) => ({
  left: (i * 4.1) % 100,
  delay: (i * 0.17) % 3,
  duration: 0.6 + (i % 6) * 0.11,
  height: 45 + (i % 5) * 20,
}));

const areas: Record<string, { name: string; heroImage: string }> = {
  'columbia':             { name: 'Columbia',             heroImage: '/mrgutters-bluehouse.jpg' },
  'lexington':            { name: 'Lexington',            heroImage: '/mrgutters-whitehouse.jpg' },
  'irmo':                 { name: 'Irmo',                 heroImage: '/mrgutters-brickhouse.jpg' },
  'cayce':                { name: 'Cayce',                heroImage: '/mrgutters-grayhouse.jpg' },
  'west-columbia':        { name: 'West Columbia',        heroImage: '/mrgutters-whitebrickhouse.jpg' },
  'forest-acres':         { name: 'Forest Acres',         heroImage: '/mrgutters-whitehouse2.jpg' },
  'blythewood':           { name: 'Blythewood',           heroImage: '/mrgutters-gutters5.jpg' },
  'camden':               { name: 'Camden',               heroImage: '/mrgutters-brickhouse2.jpg' },
  'lugoff':               { name: 'Lugoff',               heroImage: '/mrgutters-gutters1.jpg' },
  'elgin':                { name: 'Elgin',                heroImage: '/mrgutters-gutters3.jpg' },
  'newberry':             { name: 'Newberry',             heroImage: '/mrgutters-whitebrickhouse2.jpg' },
  'prosperity':           { name: 'Prosperity',           heroImage: '/mrgutters-gutters2.jpg' },
  'winnsboro':            { name: 'Winnsboro',            heroImage: '/mrgutters-gutters4.jpg' },
  'sumter':               { name: 'Sumter',               heroImage: '/mrgutters-whitebrickhouse3.jpg' },
  'orangeburg':           { name: 'Orangeburg',           heroImage: '/mrgutters-newhouse.jpg' },
  'saint-matthews':       { name: 'Saint Matthews',       heroImage: '/mrgutters-grayhouse2.jpg' },
  'swansea':              { name: 'Swansea',              heroImage: '/mrgutters-whitehouse3.jpg' },
  'gaston':               { name: 'Gaston',               heroImage: '/mrgutters-whitehouse4.jpg' },
  'pelion':               { name: 'Pelion',               heroImage: '/mrgutters-gutters6.jpg' },
  'batesburg-leesville':  { name: 'Batesburg-Leesville',  heroImage: '/mrgutters-bluehouse.jpg' },
  'saluda':               { name: 'Saluda',               heroImage: '/mrgutters-whitehouse.jpg' },
};

const services = [
  { icon: HardHat,    label: 'Gutter Installation',         path: '/services/installation' },
  { icon: Shield,     label: 'Gutter Guard Installation',   path: '/services/guards' },
  { icon: Droplets,   label: 'Gutter Cleaning',             path: '/services/cleaning' },
  { icon: Wrench,     label: 'Gutter Maintenance & Repair', path: '/services/repair' },
  { icon: HomeIcon,   label: 'Seamless Gutters',            path: '/services/seamless' },
  { icon: Building2,  label: 'Commercial Gutters',          path: '/services/commercial' },
  { icon: Layers,     label: 'Fascia & Soffit',             path: '/services/fascia-soffit' },
  { icon: Lightbulb,  label: 'Christmas Lighting',          path: '/services/christmas-lighting' },
];

export default function ServiceAreaPage() {
  const { city } = useParams<{ city: string }>();
  const area = city && city in areas ? areas[city] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [city]);

  if (!area) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center px-4">
        <h2 className="text-3xl font-black text-primary mb-4">Area Not Found</h2>
        <p className="text-gray-500 mb-8">We couldn't find that service area page.</p>
        <Link to="/" className="bg-accent text-primary font-black px-6 py-3 rounded uppercase tracking-widest text-sm btn-effect">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${area.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/service-areas" className="hover:text-accent transition-colors">Service Areas</Link>
            <ChevronRight size={14} />
            <span className="text-white">{area.name}, SC</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Gutter Services in {area.name}, SC</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">South Carolina's trusted gutter experts — proudly serving {area.name} and surrounding communities.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Local Gutter Experts</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-6">
            Serving {area.name}, SC &amp; Surrounding Areas
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Mr Gutter SC provides professional gutter installation, cleaning, repair, and guard services to homeowners throughout {area.name}, SC. Our local team understands the unique weather challenges South Carolina homes face — from heavy spring rains to debris-dropping pine trees — and builds gutter systems designed to handle it all.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Whether you need a brand-new seamless gutter system, a thorough seasonal cleaning, or a quick repair, we offer same-week service with free estimates and no-obligation quotes. Every job is backed by our satisfaction guarantee.
          </p>
          <div className="space-y-3 mb-8">
            {[
              `Licensed & insured gutter contractor in ${area.name}`,
              'Free estimates with no obligation',
              'Same-week appointments available',
              'All work backed by our satisfaction guarantee',
              'Locally owned and operated',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 font-black text-sm uppercase rounded btn-effect border border-primary hover:bg-white hover:text-primary text-center">
              Get a Free Quote
            </Link>
            <a href="tel:8033608890" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-black text-sm uppercase rounded hover:bg-primary hover:text-white transition-all">
              <Phone size={16} />
              (803) 360-8890
            </a>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              Gutter Services Available in {area.name}
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From new installations to repairs and seasonal cleanings, we offer a full range of gutter services for {area.name} homeowners.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <s.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-black text-primary text-base mb-1 group-hover:text-accent transition-colors">{s.label}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Why {area.name} Homeowners Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">The Mr Gutter SC Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Local Knowledge', body: `We know ${area.name}'s neighborhoods, tree coverage, and rainfall patterns — and we design gutter systems that handle them all.` },
              { title: 'Upfront Pricing', body: 'No hidden fees or surprise charges. You get a detailed written quote before any work begins.' },
              { title: 'Guaranteed Workmanship', body: 'Every installation and repair is backed by our satisfaction guarantee. We make it right, period.' },
              { title: 'Fast, Reliable Service', body: `Same-week appointments available throughout ${area.name} and surrounding communities. We show up when we say we will.` },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-primary mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — matches homepage PreFooter */}
      <section className="relative py-20 bg-accent overflow-hidden text-center">
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
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 mt-8">
            Ready To Protect Your {area.name} Home?
          </h2>
          <p className="text-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote from {area.name}'s trusted gutter experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto bg-primary text-white font-black py-4 px-10 rounded btn-effect hover:bg-white hover:text-primary uppercase tracking-widest text-lg border-2 border-primary">
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
    </>
  );
}
