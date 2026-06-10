import { CheckCircle2, Award, Users, ThumbsUp, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DROPS = Array.from({ length: 25 }, (_, i) => ({
  left: (i * 4.1) % 100,
  delay: (i * 0.17) % 3,
  duration: 0.6 + (i % 6) * 0.11,
  height: 45 + (i % 5) * 20,
}));

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2,500+', label: 'Homes Served' },
  { value: '5★', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    body: "We show up on time, give honest quotes, and never upsell services you don't need. Your trust is worth more than any single job.",
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    body: 'Every installation and repair is done to last. We use premium materials and hold ourselves to the highest workmanship standards in the industry.',
  },
  {
    icon: Users,
    title: 'Community Rooted',
    body: "We live and work in South Carolina. Protecting our neighbors' homes isn't just a job — it's a responsibility we take seriously.",
  },
  {
    icon: ThumbsUp,
    title: 'Guaranteed Results',
    body: "We stand behind every project with a satisfaction guarantee. If something isn't right, we make it right — no runaround, no excuses.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/mrgutters-brickhouse.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-3 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">About Mr Gutter SC</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">A family-built business dedicated to protecting South Carolina homes — one gutter at a time.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
                <div className="text-primary/70 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2 relative">
              <img
                src="/mrgutters-bluehouse.jpg"
                alt="Mr Gutter SC Team"
                className="rounded-xl shadow-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl p-6 shadow-xl hidden lg:block">
                <p className="text-primary font-black text-4xl leading-none">15+</p>
                <p className="text-primary/70 text-sm font-bold uppercase tracking-wide mt-1">Years Serving SC</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-6">Built on Trust,<br/>Backed by Experience</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Mr Gutter SC was founded with one simple goal: to give homeowners in South Carolina a gutter company they could actually trust. No pressure tactics, no hidden fees — just straight talk and quality work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                What started as a one-truck operation has grown into one of the most recognized gutter companies in the Midlands. We've protected thousands of homes across Columbia, Lexington, Irmo, and beyond — and we treat every single one like it's our own.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Licensed & insured in South Carolina',
                  'Free estimates with no obligation',
                  'Same-week appointments available',
                  'All work backed by our satisfaction guarantee',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 font-black text-sm uppercase rounded btn-effect border border-primary hover:bg-white hover:text-primary">
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <v.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-black text-primary text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 mt-8">Ready to Work With Us?</h2>
          <p className="text-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied South Carolina homeowners who trust Mr Gutter SC to protect their homes.
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
