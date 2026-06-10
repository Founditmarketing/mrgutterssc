import { Phone, ChevronDown, Menu, X, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const promoMessages = [
  'Serving Columbia, SC & Surrounding Areas',
  'Licensed & Insured — Your Home is in Good Hands',
  'Free Estimates on All Gutter Services',
  '5-Star Rated Gutter Professionals',
  'Same-Week Service Available',
];

const services = [
  { label: 'Gutter Installation', path: '/services/installation' },
  { label: 'Gutter Guard Installation', path: '/services/guards' },
  { label: 'Gutter Cleaning', path: '/services/cleaning' },
  { label: 'Gutter Maintenance & Repair', path: '/services/repair' },
  { label: 'Seamless Gutters', path: '/services/seamless' },
  { label: 'Commercial Gutters', path: '/services/commercial' },
  { label: 'Fascia & Soffit', path: '/services/fascia-soffit' },
  { label: 'Christmas Lighting', path: '/services/christmas-lighting' },
];

const serviceAreas = [
  { label: 'Columbia, SC', path: '/service-areas/columbia' },
  { label: 'Lexington, SC', path: '/service-areas/lexington' },
  { label: 'Irmo, SC', path: '/service-areas/irmo' },
  { label: 'Chapin, SC', path: '/service-areas/chapin' },
  { label: 'Blythewood, SC', path: '/service-areas/blythewood' },
  { label: 'Elgin, SC', path: '/service-areas/elgin' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);
  const [promoVisible, setPromoVisible] = useState(true);

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
    <header className="w-full relative z-50">
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
            <a href="mailto:info@mrguttersc.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
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

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-accent transition-colors py-4">
                  <span>Our Services</span>
                  <ChevronDown size={14} className="text-accent" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-1 group-hover:translate-y-0 flex flex-col overflow-hidden border-t-4 border-accent">
                  {services.map((s) => (
                    <Link key={s.path} to={s.path} className="px-5 py-2.5 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors font-medium text-[12px] border-b border-gray-100 last:border-0 normal-case tracking-normal">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-accent transition-colors py-4">
                  <span>Service Areas</span>
                  <ChevronDown size={14} className="text-accent" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-1 group-hover:translate-y-0 flex flex-col overflow-hidden border-t-4 border-accent">
                  {serviceAreas.map((a) => (
                    <Link key={a.path} to={a.path} className="px-5 py-2.5 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors font-medium text-[12px] border-b border-gray-100 last:border-0 normal-case tracking-normal">
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
              <button className="bg-accent text-primary px-5 py-3 font-black text-sm uppercase rounded btn-effect whitespace-nowrap">
                Get a Free Quote
              </button>
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
            <img src="/newmrgutterslogo.png" alt="Mr Gutter SC" className="h-10 w-auto brightness-0 invert" />
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
