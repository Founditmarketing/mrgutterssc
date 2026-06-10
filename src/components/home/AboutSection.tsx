import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Section Title (Faint Watermark) */}
      <h2 className="absolute bottom-[-0.2em] left-0 text-[18vw] md:text-[150px] lg:text-[180px] font-black text-primary opacity-[0.05] select-none leading-none pointer-events-none whitespace-nowrap">WHY CHOOSE US</h2>

      <div className="container mx-auto px-8 max-w-screen-2xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Image — renders below text on mobile */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img
              src="/mrgutters-whitebrickhouse.jpg"
              alt="Gutter Professional"
              className="rounded-lg shadow-xl w-full relative z-10 h-[280px] sm:h-[380px] lg:h-[520px] object-cover"
            />
            <div className="absolute bottom-4 left-4 lg:bottom-10 lg:left-6 w-3/5 lg:w-1/2 p-3 lg:p-4 bg-white rounded-lg shadow-2xl z-20 border-l-4 border-accent">
               <div className="flex items-center space-x-3">
                 <div className="text-2xl lg:text-4xl font-extrabold text-primary">15+</div>
                 <div className="text-xs lg:text-sm font-bold text-gray-500 uppercase leading-tight">Years<br/>Experience</div>
               </div>
            </div>
          </div>

          {/* Right: Text & Benefits — renders first on mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-6">The Mr Gutter SC Difference</h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We aren't just another contractor. We are a dedicated team of gutter specialists serving South Carolina with a commitment to excellence, transparency, and doing the job right the first time. We treat every home like it's our own.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
               <div className="flex items-start">
                 <CheckCircle2 className="text-accent mt-1 mr-3 shrink-0" size={24} />
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Local Experts</h4>
                   <p className="text-sm text-gray-600">We deeply understand SC weather and its impact on homes.</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <CheckCircle2 className="text-accent mt-1 mr-3 shrink-0" size={24} />
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Upfront Pricing</h4>
                   <p className="text-sm text-gray-600">No hidden fees, no surprises. Detailed quotes provided.</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <CheckCircle2 className="text-accent mt-1 mr-3 shrink-0" size={24} />
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Guaranteed Work</h4>
                   <p className="text-sm text-gray-600">Our installations and repairs are backed by strong warranties.</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <CheckCircle2 className="text-accent mt-1 mr-3 shrink-0" size={24} />
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Clean & Respectful</h4>
                   <p className="text-sm text-gray-600">We leave your property cleaner than we found it.</p>
                 </div>
               </div>
            </div>

            <button className="bg-primary text-white border border-primary px-6 py-3 font-black text-sm uppercase rounded btn-effect hover:bg-white hover:text-primary">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
