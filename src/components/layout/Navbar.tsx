import { Phone, ChevronDown, Menu, X, MapPin, Mail, Facebook, Instagram, ArrowRight, HardHat, Shield, Droplets, Wrench, Home as HomeIcon, Building2, Layers, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const promoMessages = [
  'Serving Columbia, SC & Surrounding Areas',
  'Licensed & Insured — Your Home is in Good Hands',
  'Free Estimates on All Gutter Services',
  '5-Star Rated Gutter Professionals',
  'Same-Week Service Available',
];

const services = [
  { label: 'Gutter Installation',        path: '/services/installation',     icon: HardHat,   image: '/mrgutters-gutters5.jpg',        desc: 'Custom seamless systems built for your home.' },
  { label: 'Gutter Guard Installation',  path: '/services/guards',           icon: Shield,    image: '/mrgutters-gutters3.jpg',        desc: 'Never clean your gutters again.' },
  { label: 'Gutter Cleaning',            path: '/services/cleaning',         icon: Droplets,  image: '/mrgutters-gutters1.jpg',        desc: 'Full debris removal & downspout flush.' },
  { label: 'Gutter Maintenance & Repair',path: '/services/repair',           icon: Wrench,    image: '/mrgutters-gutters2.jpg',        desc: 'Fix leaks, sagging, and loose joints.' },
  { label: 'Seamless Gutters',           path: '/services/seamless',         icon: HomeIcon,  image: '/mrgutters-gutters4.jpg',        desc: 'No seams, no leaks — the gold standard.' },
  { label: 'Commercial Gutters',         path: '/services/commercial',       icon: Building2, image: '/mrgutters-brickhouse.jpg',      desc: 'Heavy-duty systems for commercial properties.' },
  { label: 'Fascia & Soffit',            path: '/services/fascia-soffit',    icon: Layers,    image: '/mrgutters-gutters6.jpg',        desc: 'Protect the structure behind your gutters.' },
  { label: 'Christmas Lighting',         path: '/services/christmas-lighting',icon: Lightbulb, image: '/christmaslights.png',          desc: 'Professional holiday lighting installation.' },
];

const serviceAreas = [
  { label: 'Columbia, SC',          path: '/service-areas/columbia' },
  { label: 'Lexington, SC',         path: '/service-areas/lexington' },
  { label: 'Irmo, SC',              path: '/service-areas/irmo' },
  { label: 'Cayce, SC',             path: '/service-areas/cayce' },
  { label: 'West Columbia, SC',     path: '/service-areas/west-columbia' },
  { label: 'Forest Acres, SC',      path: '/service-areas/forest-acres' },
  { label: 'Blythewood, SC',        path: '/service-areas/blythewood' },
  { label: 'Camden, SC',            path: '/service-areas/camden' },
  { label: 'Lugoff, SC',            path: '/service-areas/lugoff' },
  { label: 'Elgin, SC',             path: '/service-areas/elgin' },
  { label: 'Newberry, SC',          path: '/service-areas/newberry' },
  { label: 'Prosperity, SC',        path: '/service-areas/prosperity' },
  { label: 'Winnsboro, SC',         path: '/service-areas/winnsboro' },
  { label: 'Sumter, SC',            path: '/service-areas/sumter' },
  { label: 'Orangeburg, SC',        path: '/service-areas/orangeburg' },
  { label: 'Saint Matthews, SC',    path: '/service-areas/saint-matthews' },
  { label: 'Swansea, SC',           path: '/service-areas/swansea' },
  { label: 'Gaston, SC',            path: '/service-areas/gaston' },
  { label: 'Pelion, SC',            path: '/service-areas/pelion' },
  { label: 'Batesburg-Leesville, SC', path: '/service-areas/batesburg-leesville' },
  { label: 'Saluda, SC',            path: '/service-areas/saluda' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);
  const [promoVisible, setPromoVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const openServices  = () => { clearTimeout(closeTimer.current); setServicesOpen(true); };
  const delayClose    = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120); };

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoVisible(false);
      setTimeout(() => {
        setPromoIndex((i) => (i + 1) % promoMessages.length);
        setPromoVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-[11px] py-2 hidden md:block">
        <div className="w-full grid grid-cols-3 items-center px-8">
          <div className="flex items-center gap-1 opacity-90">
            <MapPin size={12} className="text-accent" />
            <span>1320 Main St Suite 300, Columbia, SC 29201</span>
          </div>
          <div className="flex justify-center overflow-hidden">
            <span
              className="font-semibold tracking-wide whitespace-nowrap transition-all duration-300"
              style={{ opacity: promoVisible ? 1 : 0, transform: `translateY(${promoVisible ? '0px' : '6px'})` }}
            >
              {promoMessages[promoIndex]}
            </span>
          </div>
          <div className="flex items-center gap-6 font-semibold justify-end">
            <a href="tel:8033608890" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={12} className="text-accent" />
              <span>(803) 360-8890</span>
            </a>
            <a href="mailto:thomas@mrguttersc.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={12} className="text-accent" />
              <span>Email Us</span>
            </a>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <a href="https://www.facebook.com/profile.php?id=61552459374488" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">
                <Facebook size={13} />
              </a>
              <a href="https://www.instagram.com/mrguttersc/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">
                <Instagram size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md relative z-40 border-b border-gray-100">
        <div className="w-full px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src="/newmrgutterslogo.png" alt="Mr Gutter SC" className="h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-[13px] font-bold text-primary uppercase tracking-wide">
              <Link to="/" className="hover:text-accent transition-colors py-4">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors py-4">About Us</Link>

              {/* Services Mega Menu Trigger */}
              <div onMouseEnter={openServices} onMouseLeave={delayClose}>
                <Link to="/services" className="flex items-center gap-1 hover:text-accent transition-colors py-4">
                  <span>Our Services</span>
                  <ChevronDown size={14} className={`text-accent transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <Link to="/service-areas" className="flex items-center gap-1 hover:text-accent transition-colors py-4">
                  <span>Service Areas</span>
                  <ChevronDown size={14} className="text-accent" />
                </Link>
                <div className="absolute top-full left-0 w-[420px] bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-1 group-hover:translate-y-0 overflow-hidden border-t-4 border-accent grid grid-cols-2">
                  {serviceAreas.map((a) => (
                    <Link key={a.path} to={a.path} className="px-5 py-2.5 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors font-medium text-[12px] border-b border-gray-100 normal-case tracking-normal">
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/gallery" className="hover:text-accent transition-colors py-4">Gallery</Link>
              <Link to="/blog" className="hover:text-accent transition-colors py-4">Blog</Link>
              <Link to="/contact" className="hover:text-accent transition-colors py-4">Contact Us</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex shrink-0">
              <Link to="/contact" className="bg-accent text-primary px-5 py-3 font-black text-sm uppercase rounded btn-effect whitespace-nowrap">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61552459374488" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors opacity-60 hover:opacity-100">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/mrguttersc/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors opacity-60 hover:opacity-100">
                <Instagram size={18} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-accent transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Mega Menu Panel */}
        {servicesOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-accent z-50"
            onMouseEnter={openServices}
            onMouseLeave={delayClose}
          >
            <div className="flex">
              {/* Left sidebar */}
              <div className="bg-primary text-white w-72 shrink-0 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-accent font-black text-xs uppercase tracking-widest block mb-3">What We Offer</span>
                  <h3 className="text-2xl font-black leading-tight mb-4">Complete Gutter Solutions</h3>
                  <p className="text-white/70 text-sm leading-relaxed">From installation to maintenance, we handle every aspect of your gutter system with expert care.</p>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-center gap-2 bg-accent text-primary font-black text-xs uppercase tracking-widest px-4 py-3 rounded btn-effect"
                  >
                    View All Services <ArrowRight size={14} />
                  </Link>
                  <a href="tel:8033608890" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-bold">
                    <Phone size={14} className="text-accent" />
                    (803) 360-8890
                  </a>
                </div>
              </div>

              {/* Services grid — 4 columns × 2 rows */}
              <div className="flex-1 p-6 grid grid-cols-4 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    onClick={() => setServicesOpen(false)}
                    className="group flex flex-col rounded-lg overflow-hidden border border-gray-100 hover:border-accent hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative h-28 overflow-hidden bg-gray-100">
                      <img src={s.image} alt={s.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors" />
                      <div className="absolute bottom-2 left-2 bg-accent/90 rounded p-1">
                        <s.icon size={16} className="text-primary" />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="font-bold text-primary text-[15px] leading-tight mb-1 normal-case tracking-normal">{s.label}</p>
                      <p className="text-gray-500 text-[11px] leading-snug normal-case tracking-normal">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Slide-out Menu — Portal-style full screen */}
        {/* Backdrop */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide panel */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-primary z-[100] flex flex-col transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><img src="/newmrgutterslogo.png" alt="Mr Gutter SC" className="h-10 w-auto brightness-0 invert" /></Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links — scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">

            {/* Main links */}
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact Us', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-4 rounded-lg text-white font-bold text-base hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
              >
                {item.label}
              </Link>
            ))}

            {/* Services accordion */}
            <div className="mt-1">
              <button
                className="w-full flex items-center justify-between py-3.5 px-4 rounded-lg text-white font-bold text-base hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Our Services</span>
                <ChevronDown size={16} className={`text-accent transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2.5 px-4 rounded-md text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Areas accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between py-3.5 px-4 rounded-lg text-white font-bold text-base hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              >
                <span>Service Areas</span>
                <ChevronDown size={16} className={`text-accent transition-transform duration-300 ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.path}
                      to={a.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2.5 px-4 rounded-md text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: contact + CTA */}
          <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <a href="tel:8033608890" className="flex items-center gap-3 text-white font-bold">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                (803) 360-8890
              </a>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/profile.php?id=61552459374488" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/mrguttersc/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-accent text-primary font-black py-3.5 rounded uppercase tracking-widest text-sm btn-effect"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
