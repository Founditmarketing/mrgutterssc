import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Faint 'MR GUTTER SC' watermark */}
      <div className="absolute font-extrabold text-[#ffffff06] leading-none bottom-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden" style={{ fontSize: 'clamp(4rem, 13vw, 14rem)' }}>
        MR GUTTER SC
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="mb-6">
              <img src="/newmrgutterslogo.png" alt="Mr Gutter SC" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              South Carolina's most trusted choice for professional gutter cleaning, rapid repairs, and premium guard installations. Protecting your home, guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61552459374488" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/mrguttersc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-accent font-black text-xs uppercase mb-3 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services/cleaning" className="text-gray-400 hover:text-accent transition-colors">Gutter Cleaning</Link></li>
              <li><Link to="/services/repair" className="text-gray-400 hover:text-accent transition-colors">Gutter Repair</Link></li>
              <li><Link to="/services/guards" className="text-gray-400 hover:text-accent transition-colors">Gutter Guards</Link></li>
              <li><Link to="/service-areas" className="text-gray-400 hover:text-accent transition-colors">Areas We Serve</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-accent font-black text-xs uppercase mb-3 tracking-wide">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3 shrink-0" size={20} />
                <span className="text-gray-400">123 Service Road, Suite B<br/>Columbia, SC 29201</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3 shrink-0" size={20} />
                <a href="tel:8033608890" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">(803) 360-8890</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3 shrink-0" size={20} />
                <a href="mailto:thomas@mrguttersc.com" className="text-gray-400 hover:text-white transition-colors">thomas@mrguttersc.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact Form */}
          <div>
            <h4 className="text-accent font-black text-xs uppercase mb-3 tracking-wide">Quick Contact</h4>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                rows={3}
                placeholder="How can we help?"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent text-primary py-2.5 rounded font-black text-xs uppercase tracking-widest btn-effect"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mr Gutter SC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/contact" className="text-gray-500 hover:text-white transition-colors">Contact Us</Link>
            <Link to="/about" className="text-gray-500 hover:text-white transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
