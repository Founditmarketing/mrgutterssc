import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageSquare, X, Mail } from 'lucide-react';

export default function FAB() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const nearFooter = footer ? window.scrollY + window.innerHeight >= footer.offsetTop - 40 : false;
      if (isHome) {
        const hero = document.querySelector('section');
        const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
        setIsVisible(window.scrollY >= heroBottom - 80 && !nearFooter);
      } else {
        setIsVisible(!nearFooter);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <>
      {/* --- DESKTOP FAB (Hidden on Mobile) --- */}
      <div className={`hidden md:flex fixed bottom-8 right-8 z-50 transition-all duration-500 max-w-sm ${isVisible && !isSlideOutOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsSlideOutOpen(true)}
          className="flex items-center gap-3 bg-accent text-primary p-2 pl-6 pr-2 rounded-full font-black text-sm uppercase btn-effect group border-2 border-white"
        >
          Quick Contact
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <MessageSquare size={18} fill="currentColor" />
          </div>
        </button>
      </div>

      {/* --- MOBILE STICKY FOOTER (Hidden on Desktop) --- */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] border-t border-gray-100 flex items-center justify-around z-40 px-2 pt-3 transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`} style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
        <a href="tel:8033608890" className="flex flex-col items-center justify-center text-primary group flex-1 pb-1">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-1 group-active:bg-primary group-active:text-white transition-colors">
            <Phone size={18} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Call</span>
        </a>

        <button onClick={() => setIsSlideOutOpen(true)} className="flex flex-col items-center justify-center text-primary group flex-1 -mt-8 relative z-50">
          <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center border-[6px] border-white mb-1 group-active:scale-95 transition-transform outline-none">
             <MessageSquare size={24} fill="currentColor" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent drop-shadow-sm">Quote</span>
        </button>
        
        <a href="mailto:thomas@mrguttersc.com" className="flex flex-col items-center justify-center text-primary group flex-1 pb-1">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-1 group-active:bg-primary group-active:text-white transition-colors">
            <Mail size={18} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Email</span>
        </a>
      </div>

      {/* --- SLIDE OUT PANEL (Shared) --- */}
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isSlideOutOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSlideOutOpen(false)}
      />

      {/* Slide Out Window */}
      <div className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-[420px] bg-white z-[101] transition-transform duration-300 ease-out flex flex-col ${isSlideOutOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50 shrink-0">
           <div>
             <h3 className="text-xl font-black text-primary uppercase">How can we help?</h3>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Fast & Reliable Service</p>
           </div>
           <button onClick={() => setIsSlideOutOpen(false)} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors border border-gray-200">
             <X size={18} className="text-gray-500" />
           </button>
        </div>

        <div className="flex-1 flex flex-col p-5 gap-4 min-h-0">
           {/* Call Action */}
           <div className="bg-primary rounded-xl px-5 py-4 text-center text-white relative group shrink-0">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <h4 className="text-accent font-black text-xs uppercase tracking-widest mb-1 relative z-10">Need immediate help?</h4>
              <p className="text-gray-300 text-xs mb-3 relative z-10 font-medium">Our experts are standing by to take your call.</p>
              <a href="tel:8033608890" className="relative z-10 inline-flex items-center justify-center gap-2 bg-accent text-primary w-full py-3 rounded font-black text-base btn-effect uppercase tracking-wide">
                <Phone size={18} fill="currentColor" />
                (803) 360-8890
              </a>
           </div>

           {/* Divider */}
           <div className="flex items-center gap-3 shrink-0">
             <span className="flex-1 h-px bg-gray-200"></span>
             <span className="text-primary font-black text-[10px] uppercase tracking-widest opacity-60">Or Request a Quote</span>
             <span className="flex-1 h-px bg-gray-200"></span>
           </div>

           {/* Form */}
           <form className="flex flex-col gap-3 flex-1" onSubmit={(e) => { e.preventDefault(); setIsSlideOutOpen(false); }}>
             <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium" required />
             <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium" required />
             <select className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium appearance-none" required defaultValue="">
               <option value="" disabled>Select a Service</option>
               <option value="installation">Gutter Installation</option>
               <option value="guards">Gutter Guard Installation</option>
               <option value="cleaning">Gutter Cleaning</option>
               <option value="repair">Gutter Maintenance & Repair</option>
               <option value="seamless">Seamless Gutters</option>
               <option value="commercial">Commercial Gutters</option>
               <option value="fascia-soffit">Fascia & Soffit</option>
               <option value="christmas-lighting">Christmas Lighting</option>
               <option value="other">Not Sure / Other</option>
             </select>
             <button type="submit" className="w-full bg-primary text-white py-3 rounded font-black uppercase tracking-widest text-sm btn-effect mt-auto">
               Send Message
             </button>
           </form>
        </div>
      </div>
    </>
  );
}
