import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star, ExternalLink } from 'lucide-react';
import { reviews } from '../data/reviewsData';

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/mrgutters-bluehouse.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-3 block">We'd Love To Hear From You</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Have a question or ready to get started? Reach out and our team will get back to you fast.</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Call Us</h3>
              <a href="tel:8033608890" className="text-gray-600 hover:text-accent transition-colors font-semibold text-lg">(803) 360-8890</a>
              <p className="text-gray-400 text-xs mt-1">Mon – Fri, 7AM – 7PM</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Email Us</h3>
              <a href="mailto:thomas@mrguttersc.com" className="text-gray-600 hover:text-accent transition-colors font-semibold">thomas@mrguttersc.com</a>
              <p className="text-gray-400 text-xs mt-1">We reply within 24 hours</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Our Office</h3>
              <p className="text-gray-600 font-semibold">1320 Main St Suite 300</p>
              <p className="text-gray-400 text-sm">Columbia, SC 29201</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock size={24} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Hours</h3>
              <p className="text-gray-600 font-semibold">Mon – Fri: 7AM – 7PM</p>
              <p className="text-gray-400 text-sm">Saturday: Closed</p>
              <p className="text-gray-400 text-sm">Sunday: Closed</p>
            </div>

          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <div>
              <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Send A Message</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-2">Request A Free Quote</h2>
              <p className="text-gray-500 mb-8">Fill out the form and one of our specialists will be in touch within one business day.</p>

              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">First Name <span className="text-accent">*</span></label>
                    <input type="text" required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Last Name <span className="text-accent">*</span></label>
                    <input type="text" required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone <span className="text-accent">*</span></label>
                    <input type="tel" required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" placeholder="(803) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Email</label>
                    <input type="email" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Needed <span className="text-accent">*</span></label>
                  <select required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white text-gray-700">
                    <option value="">Select a service...</option>
                    <option>Gutter Installation</option>
                    <option>Gutter Guard Installation</option>
                    <option>Gutter Cleaning</option>
                    <option>Gutter Maintenance & Repair</option>
                    <option>Seamless Gutters</option>
                    <option>Commercial Gutters</option>
                    <option>Fascia & Soffit</option>
                    <option>Christmas Lighting</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Property Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" placeholder="123 Main St, Columbia, SC" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={4} className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white resize-none" placeholder="Tell us a bit about your project..." />
                </div>

                <button type="submit" className="w-full bg-accent text-primary font-black py-4 rounded uppercase tracking-widest text-sm btn-effect shadow-lg shadow-accent/20">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Right Side: Map + Social */}
            <div className="flex flex-col gap-8">

              {/* Map embed placeholder */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 h-80 relative">
                <img src="/mrgutters-grayhouse2.jpg" alt="Service Area" className="w-full h-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl px-6 py-4 text-center border-t-4 border-accent">
                    <MapPin size={28} className="text-accent mx-auto mb-2" />
                    <p className="font-black text-primary text-sm">Columbia, SC & Surrounding Areas</p>
                    <p className="text-gray-500 text-xs mt-1">Serving within a 50-mile radius</p>
                  </div>
                </div>
              </div>

              {/* Business info card */}
              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="font-black text-xl mb-6 tracking-tight">Why Customers Choose Us</h3>
                <ul className="space-y-4">
                  {[
                    'Free estimates with no obligation',
                    'Same-week service available',
                    'Licensed, insured & background-checked',
                    'Satisfaction guaranteed on every job',
                    '15+ years serving South Carolina',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#052e67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Follow Us</span>
                  <a href="https://www.facebook.com/profile.php?id=61552459374488" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://www.instagram.com/mrguttersc/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>

              {/* Reviews Widget */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                      </div>
                      <span className="font-black text-primary text-lg">5.0</span>
                    </div>
                    <p className="text-gray-500 text-xs font-semibold mt-0.5">Based on 76 Google reviews</p>
                  </div>
                  <a href="https://www.google.com/maps/place/Mr+Gutter+SC" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest">
                    See all <ExternalLink size={12} />
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  {reviews.slice(0, 3).map((review, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0" style={{ backgroundColor: review.avatarColor }}>
                          {review.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-black text-primary text-xs leading-tight">{review.name}</p>
                          <div className="flex gap-0.5 mt-0.5">
                            {Array.from({ length: review.rating }).map((_, j) => <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />)}
                          </div>
                        </div>
                        <p className="text-gray-400 text-[10px] shrink-0">{review.date}</p>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">"{review.text}"</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
