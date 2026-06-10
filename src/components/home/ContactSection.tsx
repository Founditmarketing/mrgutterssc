import { Star, ExternalLink } from 'lucide-react';
import { reviews } from '../../data/reviewsData';

export default function ContactSection() {
  return (
    <section className="bg-gray-100 relative">
      <div className="w-full relative z-10">
        <div className="bg-gray-50 flex flex-col lg:flex-row">

          {/* Reviews Side */}
          <div className="w-full lg:w-1/2 bg-primary flex flex-col p-10 lg:p-14">

            {/* Header */}
            <div className="mb-8">
              <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Google Reviews</span>
              <h2 className="text-3xl font-black text-white tracking-tight mb-3">What Our Customers Say</h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-black text-xl">5.0</span>
              </div>
            </div>

            {/* Review Cards */}
            <div className="flex flex-col gap-4 flex-1">
              {reviews.slice(0, 3).map((review, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-white text-sm leading-tight">{review.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-white/40 text-[10px] shrink-0">{review.date}</span>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/search?q=mr+gutter+sc&rlz=1C5CHFA_enUS1003US1005&oq=mr&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGMcBGLEDGNEDGIAEMgoIAhAuGLEDGIAEMgYIAxBFGDsyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDExMDFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x88f8bd02623270d3:0x7f1c09f2229c7761,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-black text-xs uppercase px-5 py-3 rounded btn-effect tracking-widest"
              >
                Leave Us a Review <ExternalLink size={13} />
              </a>
              <a
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-black text-xs uppercase px-5 py-3 rounded hover:bg-white/10 transition-colors tracking-widest"
              >
                Read All Reviews
              </a>
            </div>

          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Reach Out</span>
            <h2 className="text-3xl lg:text-4xl font-black text-primary tracking-tight mb-8">Send Us A Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="(803) 555-1234" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email (Optional)</label>
                <input type="email" className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="you@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">How can we help?</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors resize-none" placeholder="Describe your gutter needs..."></textarea>
              </div>
              
              <button type="submit" className="bg-primary text-white border border-primary px-6 py-3 font-black text-sm uppercase rounded btn-effect hover:bg-white hover:text-primary">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
