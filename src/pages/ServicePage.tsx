import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Phone, HardHat, Shield, Droplets, Wrench, Home as HomeIcon, Building2, Layers, Lightbulb } from 'lucide-react';

const DROPS = Array.from({ length: 25 }, (_, i) => ({
  left: (i * 4.1) % 100,
  delay: (i * 0.17) % 3,
  duration: 0.6 + (i % 6) * 0.11,
  height: 45 + (i % 5) * 20,
}));

const serviceData = {
  installation: {
    title: 'Gutter Installation',
    icon: HardHat,
    heroImage: '/mrgutters-gutters5.jpg',
    eyebrow: 'New Installations',
    tagline: 'Premium gutters installed right the first time.',
    intro: 'When it comes to protecting your home from water damage, the foundation starts with a properly installed gutter system. Mr Gutter SC installs high-quality aluminum gutter systems custom-fitted to your roofline, ensuring maximum water diversion and long-term performance.',
    body: "We don't use pre-cut sections or shortcuts. Every installation begins with a thorough assessment of your home's roofline, fascia condition, and drainage needs. We then fabricate and install a system built specifically for your property.",
    stats: [
      { value: '2,500+', label: 'Systems Installed' },
      { value: '15+', label: 'Years Experience' },
      { value: '100%', label: 'Satisfaction Guarantee' },
      { value: 'Same-Week', label: 'Service Available' },
    ],
    benefits: [
      { title: 'Custom Fabricated On-Site', body: 'Gutters are measured and cut to exact length at your home for a perfect, seamless fit.' },
      { title: 'Premium Aluminum', body: 'Rust-resistant, heavy-gauge aluminum in your choice of color to match your exterior.' },
      { title: 'Proper Pitch & Flow', body: 'Every system is pitched to code to ensure water moves efficiently to downspouts.' },
      { title: 'Fast Installation', body: 'Most residential installations completed in a single day with zero mess left behind.' },
    ],
    process: [
      { step: '01', title: 'Free Estimate', body: 'We assess your roofline and provide a no-obligation written quote.' },
      { step: '02', title: 'Material Selection', body: 'Choose your gutter style, size, and color from our full range of options.' },
      { step: '03', title: 'Installation Day', body: 'Our crew arrives on time, fabricates on-site, and installs your complete system.' },
      { step: '04', title: 'Final Walkthrough', body: 'We walk the property with you to confirm everything looks and performs perfectly.' },
    ],
    image: '/mrgutters-bluehouse.jpg',
  },
  guards: {
    title: 'Gutter Guard Installation',
    icon: Shield,
    heroImage: '/mrgutters-gutters3.jpg',
    eyebrow: 'Gutter Protection',
    tagline: 'Never clean your gutters again.',
    intro: 'Gutter guards are the smartest investment a homeowner can make after installing gutters. Our premium micromesh guard systems block leaves, pine needles, and debris while allowing full rainwater flow — eliminating the need for regular cleaning.',
    body: 'We install industry-leading micromesh guards that are compatible with virtually every gutter system. Unlike cheap foam or screen inserts, our guards are built into the gutter profile and backed by a no-clog warranty.',
    stats: [
      { value: 'No-Clog', label: 'Warranty Included' },
      { value: '99%', label: 'Debris Blocked' },
      { value: '2,500+', label: 'Homes Protected' },
      { value: 'Same-Week', label: 'Installation' },
    ],
    benefits: [
      { title: 'Micromesh Technology', body: 'Ultra-fine mesh blocks even the smallest debris while handling heavy rain flow.' },
      { title: 'Works on Any Gutter', body: 'Compatible with existing 5" and 6" K-style and half-round gutter systems.' },
      { title: 'No-Clog Guarantee', body: 'Backed by an industry-leading warranty — if it clogs, we fix it for free.' },
      { title: 'Eliminate Maintenance', body: 'Stop climbing ladders every season. Protect your gutters for good.' },
    ],
    process: [
      { step: '01', title: 'Gutter Inspection', body: 'We inspect your existing gutters and clean them before guard installation.' },
      { step: '02', title: 'Guard Selection', body: 'We recommend the best guard system for your tree coverage and roof type.' },
      { step: '03', title: 'Professional Install', body: 'Guards are securely fitted across your entire gutter system in one visit.' },
      { step: '04', title: 'Warranty Registration', body: 'We register your no-clog warranty and leave you with full documentation.' },
    ],
    image: '/mrgutters-whitebrickhouse2.jpg',
  },
  cleaning: {
    title: 'Gutter Cleaning',
    icon: Droplets,
    heroImage: '/mrgutters-gutters1.jpg',
    eyebrow: 'Professional Cleaning',
    tagline: 'Clear gutters. Protected home.',
    intro: 'Clogged gutters are one of the leading causes of foundation damage, basement flooding, and roof rot. Our professional cleaning service removes all debris from your gutters and downspouts, restoring full flow and protecting your home from costly water damage.',
    body: 'Our technicians clean by hand and flush every section with water to verify flow. We include a free inspection of gutter condition, fasteners, and pitch — and flag any issues we find before they become expensive problems.',
    stats: [
      { value: '1,000+', label: 'Cleanings Per Year' },
      { value: 'Free', label: 'Inspection Included' },
      { value: 'Same-Week', label: 'Appointments' },
      { value: '100%', label: 'Satisfaction Guaranteed' },
    ],
    benefits: [
      { title: 'Full Debris Removal', body: 'Leaves, twigs, shingle grit, and organic buildup cleared from gutters and downspouts.' },
      { title: 'Downspout Flush', body: 'We flush every downspout with water to confirm full, unrestricted flow.' },
      { title: 'Free Visual Inspection', body: 'We check for sagging, leaks, loose fasteners, and improper pitch at no extra charge.' },
      { title: 'No Mess Left Behind', body: 'All debris is bagged and removed. Your property is left cleaner than we found it.' },
    ],
    process: [
      { step: '01', title: 'Schedule', body: 'Book online or by phone — same-week availability in most areas.' },
      { step: '02', title: 'Arrive & Assess', body: 'Our crew walks the roofline and identifies problem areas before starting.' },
      { step: '03', title: 'Clean & Flush', body: 'Hand-clean all gutters, flush downspouts, and test for proper water flow.' },
      { step: '04', title: 'Inspection Report', body: 'We share any findings with you and recommend next steps if needed.' },
    ],
    image: '/mrgutters-grayhouse.jpg',
  },
  repair: {
    title: 'Gutter Maintenance & Repair',
    icon: Wrench,
    heroImage: '/mrgutters-gutters2.jpg',
    eyebrow: 'Repair & Maintenance',
    tagline: 'Extend the life of your gutter system.',
    intro: 'Leaking joints, sagging sections, and loose fasteners are more than cosmetic issues — they allow water to pool against your fascia, foundation, and siding. Our repair service fixes the problem at the source with lasting, professional solutions.',
    body: 'Before recommending a full replacement, our technicians thoroughly assess your existing system. In most cases, targeted repairs restore full performance at a fraction of the cost. We only recommend replacement when it genuinely makes more financial sense.',
    stats: [
      { value: '80%', label: 'Repairs vs. Replacements' },
      { value: 'Same-Day', label: 'Minor Repairs Available' },
      { value: '15+', label: 'Years Experience' },
      { value: '100%', label: 'Honest Assessments' },
    ],
    benefits: [
      { title: 'Leak Sealing', body: 'We re-seal joints, end caps, and miters with professional-grade sealant that lasts.' },
      { title: 'Rehang & Realign', body: 'Sagging gutters are re-pitched and re-secured to restore proper drainage slope.' },
      { title: 'Partial Replacement', body: 'Damaged sections are replaced and color-matched to your existing system.' },
      { title: 'Downspout Repair', body: 'Crushed, disconnected, or improperly routed downspouts corrected on the spot.' },
    ],
    process: [
      { step: '01', title: 'Diagnosis', body: 'Thorough inspection of your full gutter system to identify all issues.' },
      { step: '02', title: 'Honest Quote', body: 'We explain exactly what needs repair and why — no unnecessary upselling.' },
      { step: '03', title: 'Repair Work', body: 'All repairs completed by experienced technicians using quality materials.' },
      { step: '04', title: 'Post-Repair Test', body: 'We test water flow after every repair to confirm the fix before we leave.' },
    ],
    image: '/mrgutters-gutters4.jpg',
  },
  seamless: {
    title: 'Seamless Gutters',
    icon: HomeIcon,
    heroImage: '/mrgutters-whitehouse.jpg',
    eyebrow: 'Seamless Systems',
    tagline: 'No seams. No leaks. No compromises.',
    intro: 'Traditional sectional gutters have joints every 10 feet — and every joint is a potential leak point. Seamless gutters are fabricated in one continuous piece custom-cut to your exact roofline, virtually eliminating leaks and reducing long-term maintenance.',
    body: 'We bring our seamless gutter machine directly to your property. Gutters are formed on-site from a continuous coil of aluminum, ensuring a perfect fit with zero seams along the length of your roofline. Available in over 30 colors.',
    stats: [
      { value: '30+', label: 'Color Options' },
      { value: 'Zero', label: 'Mid-Run Seams' },
      { value: 'On-Site', label: 'Custom Fabrication' },
      { value: '100%', label: 'Aluminum Construction' },
    ],
    benefits: [
      { title: 'Zero Mid-Run Leaks', body: 'Continuous construction eliminates the joints where sectional gutters most commonly fail.' },
      { title: 'Custom Color Match', body: 'Over 30 colors available to complement or match your fascia and siding perfectly.' },
      { title: 'On-Site Fabrication', body: 'Our truck-mounted machine forms gutters to your exact measurements at your home.' },
      { title: 'Longer Lifespan', body: 'Fewer joints means fewer failure points — seamless gutters last significantly longer.' },
    ],
    process: [
      { step: '01', title: 'Measure & Quote', body: 'We measure your full roofline and provide a fixed quote with your color choice.' },
      { step: '02', title: 'Fabrication Day', body: 'Our truck arrives and forms your seamless gutters on-site to exact length.' },
      { step: '03', title: 'Installation', body: 'Gutters are hung, pitched, and secured with hidden hangers every 24 inches.' },
      { step: '04', title: 'Downspout Routing', body: 'Downspouts are placed and routed to direct water away from your foundation.' },
    ],
    image: '/mrgutters-whitebrickhouse.jpg',
  },
  commercial: {
    title: 'Commercial Gutters',
    icon: Building2,
    heroImage: '/mrgutters-brickhouse.jpg',
    eyebrow: 'Commercial Services',
    tagline: 'Heavy-duty solutions for commercial properties.',
    intro: 'Commercial roofs move significantly more water than residential roofs — and standard gutter systems simply are not designed for that volume. Mr Gutter SC offers commercial-grade gutter systems including oversized K-style, box gutters, and custom configurations for any building type.',
    body: 'We work with property managers, HOAs, retail centers, office buildings, and multi-family properties throughout the Columbia area. Our commercial team coordinates around your business hours to minimize disruption and delivers on schedule.',
    stats: [
      { value: '500+', label: 'Commercial Projects' },
      { value: 'Custom', label: 'Sizing Available' },
      { value: 'Licensed', label: '& Fully Insured' },
      { value: 'Contract', label: 'Maintenance Plans' },
    ],
    benefits: [
      { title: 'Box & Oversized Gutters', body: '6" and 7" K-style plus box gutters for high-volume commercial drainage needs.' },
      { title: 'Property Management Plans', body: 'Recurring maintenance contracts available for multi-unit and commercial properties.' },
      { title: 'Minimal Disruption', body: 'We schedule around your business hours and complete work efficiently.' },
      { title: 'Licensed & Insured', body: 'Full commercial liability coverage and licensing for your peace of mind.' },
    ],
    process: [
      { step: '01', title: 'Site Assessment', body: 'We evaluate your building, roof drainage, and current system condition.' },
      { step: '02', title: 'Custom Proposal', body: 'A detailed scope and fixed quote tailored to your building and budget.' },
      { step: '03', title: 'Scheduled Installation', body: 'Work coordinated around your operational needs with a clear timeline.' },
      { step: '04', title: 'Ongoing Maintenance', body: 'Optional service contracts to keep your system performing year-round.' },
    ],
    image: '/mrgutters-brickhouse2.jpg',
  },
  'fascia-soffit': {
    title: 'Fascia & Soffit',
    icon: Layers,
    heroImage: '/mrgutters-gutters6.jpg',
    eyebrow: 'Fascia & Soffit',
    tagline: 'Protect your roofline from the inside out.',
    intro: 'Fascia and soffit are the unsung heroes of your roofline. Damaged fascia leads directly to roof rot, gutter failure, and pest intrusion. Our fascia and soffit repair and replacement service addresses these issues before they compromise your roof structure.',
    body: "Many homeowners don't realize their gutters are failing because of rotted fascia behind them — not the gutters themselves. We inspect and repair the full roofline system, ensuring your new or existing gutters have a solid, healthy foundation to mount to.",
    stats: [
      { value: 'Free', label: 'Roofline Inspection' },
      { value: 'Color', label: 'Matched Wraps' },
      { value: 'Same-Week', label: 'Service Available' },
      { value: '15+', label: 'Years Experience' },
    ],
    benefits: [
      { title: 'Rot Removal & Replacement', body: 'Damaged fascia boards removed, treated, and replaced with moisture-resistant materials.' },
      { title: 'Aluminum Fascia Wraps', body: 'Protective aluminum wraps installed over wood fascia to prevent future moisture damage.' },
      { title: 'Soffit Ventilation', body: 'Properly vented soffits installed to improve attic airflow and prevent heat buildup.' },
      { title: 'Pest Entry Points Sealed', body: 'Gaps in fascia and soffit that allow birds, wasps, and rodents to nest are sealed.' },
    ],
    process: [
      { step: '01', title: 'Roofline Inspection', body: 'We inspect fascia, soffit, and rafter tails for rot, damage, and pest activity.' },
      { step: '02', title: 'Damage Assessment', body: 'A clear report of what needs repair or replacement, with photos if needed.' },
      { step: '03', title: 'Repair & Wrap', body: 'Rotted wood replaced, aluminum wraps installed, and venting restored.' },
      { step: '04', title: 'Gutter Re-mount', body: 'If gutters were removed for access, they are rehung and re-pitched correctly.' },
    ],
    image: '/mrgutters-newhouse.jpg',
  },
  'christmas-lighting': {
    title: 'Christmas Lighting',
    icon: Lightbulb,
    heroImage: '/christmaslights.png',
    eyebrow: 'Holiday Lighting',
    tagline: 'Professional installation. Zero hassle.',
    intro: "The holidays should be spent with family — not on a ladder. Mr Gutter SC's professional Christmas lighting service handles everything from design and installation to takedown and storage, so your home looks stunning without any of the work.",
    body: 'Our lighting crews are the same trusted professionals who install your gutters — licensed, insured, and experienced working at heights. We use commercial-grade LED lighting that is brighter, longer-lasting, and safer than retail store options.',
    stats: [
      { value: 'Commercial', label: 'Grade LED Lights' },
      { value: 'Free', label: 'Design Consultation' },
      { value: 'Includes', label: 'Takedown & Storage' },
      { value: 'Insured', label: 'Installation Crew' },
    ],
    benefits: [
      { title: 'Custom Design', body: 'We design a lighting plan tailored to your home architecture and style preferences.' },
      { title: 'Commercial LED Lights', body: 'Brighter, more energy-efficient, and longer-lasting than anything from a big-box store.' },
      { title: 'Takedown Included', body: 'After the holidays, we return to take everything down and store it for next season.' },
      { title: 'Fully Insured Crew', body: 'Licensed professionals working safely at heights — no homeowner liability.' },
    ],
    process: [
      { step: '01', title: 'Design Consultation', body: 'We visit your home and design a lighting package to fit your style and budget.' },
      { step: '02', title: 'Installation Day', body: 'Our crew installs your full lighting display, typically in just a few hours.' },
      { step: '03', title: 'Enjoy the Season', body: "Sit back and enjoy your beautifully lit home without doing any of the work." },
      { step: '04', title: 'Takedown & Storage', body: 'After the holidays, we return to remove everything and store it safely for next year.' },
    ],
    image: '/christmaslights.png',
  },
};

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();

  const service = id && id in serviceData
    ? serviceData[id as keyof typeof serviceData]
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center px-4">
        <h2 className="text-3xl font-black text-primary mb-4">Service Not Found</h2>
        <p className="text-gray-500 mb-8">We couldn't find that service page.</p>
        <Link to="/" className="bg-accent text-primary font-black px-6 py-3 rounded uppercase tracking-widest text-sm btn-effect">Back to Home</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${service.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">{service.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{service.tagline}</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-2xl w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl p-5 shadow-xl hidden lg:flex items-center gap-3">
                <Icon size={28} className="text-primary shrink-0" />
                <span className="text-primary font-black text-sm uppercase tracking-wide leading-tight">{service.title}</span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-6">{service.title} in South Carolina</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">{service.intro}</p>
              <p className="text-gray-500 leading-relaxed mb-8">{service.body}</p>
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

          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">What's Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={20} className="text-accent" />
                </div>
                <h3 className="font-black text-primary text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Simple & Transparent</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gray-100" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent font-black text-sm mb-4 relative z-10">
                    {p.step}
                  </div>
                  <h3 className="font-black text-primary mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 mt-8">Ready To Protect Your Home?</h2>
          <p className="text-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Don't wait for water damage to occur. Get a free, no-obligation quote from South Carolina's trusted gutter experts today.
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
