import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronRight, HardHat, Shield, Droplets, Wrench, Home as HomeIcon, Building2, Layers, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    slug: 'installation',
    title: 'Gutter Installation',
    icon: HardHat,
    tagline: 'Premium gutters installed right the first time.',
    desc: 'Custom seamless gutters fabricated on-site and fitted to your exact roofline for maximum water diversion and long-term performance.',
  },
  {
    slug: 'guards',
    title: 'Gutter Guard Installation',
    icon: Shield,
    tagline: 'Never clean your gutters again.',
    desc: 'Industry-leading micromesh guard systems that block leaves, pine needles, and debris — backed by a no-clog warranty.',
  },
  {
    slug: 'cleaning',
    title: 'Gutter Cleaning',
    icon: Droplets,
    tagline: 'Clear gutters. Protected home.',
    desc: 'Professional hand-cleaning and downspout flushing with a free inspection included — same-week appointments available.',
  },
  {
    slug: 'repair',
    title: 'Gutter Maintenance & Repair',
    icon: Wrench,
    tagline: 'Fix it before it becomes a big problem.',
    desc: 'Sagging sections, leaking joints, loose fasteners, and pitch corrections — handled quickly before small issues become costly ones.',
  },
  {
    slug: 'seamless',
    title: 'Seamless Gutters',
    icon: HomeIcon,
    tagline: 'The gold standard in gutter systems.',
    desc: 'Continuous-run seamless gutters with no joints or seams along the run, eliminating the most common source of leaks and failures.',
  },
  {
    slug: 'commercial',
    title: 'Commercial Gutters',
    icon: Building2,
    tagline: 'Built for high-volume water management.',
    desc: 'Heavy-duty gutter systems engineered for commercial buildings, multi-family properties, and large-scale drainage demands.',
  },
  {
    slug: 'fascia-soffit',
    title: 'Fascia & Soffit',
    icon: Layers,
    tagline: 'Protect the structure behind your gutters.',
    desc: 'Rotted or damaged fascia and soffit replaced before they compromise your gutter attachment and allow moisture into your roofline.',
  },
  {
    slug: 'christmas-lighting',
    title: 'Christmas Lighting',
    icon: Lightbulb,
    tagline: 'Professional holiday lighting installation.',
    desc: 'Custom roofline and landscape lighting installations that transform your home for the holidays — hung and removed by our team.',
  },
];

export default function ServicesIndexPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/mrgutters-gutters5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">From installation to maintenance, Mr Gutter SC delivers expert gutter solutions across the South Carolina Midlands.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ slug, title, icon: Icon, tagline, desc }) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group flex flex-col rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-primary p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h2 className="text-white font-black text-base leading-snug">{title}</h2>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <p className="text-accent font-black text-xs uppercase tracking-widest mb-2">{tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-primary font-black text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                    Learn More <ArrowRight size={13} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
