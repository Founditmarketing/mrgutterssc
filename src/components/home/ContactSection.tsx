export default function ContactSection() {
  return (
    <section className="bg-gray-100 relative">
      <div className="w-full relative z-10">
        <div className="bg-gray-50 flex flex-col lg:flex-row">
          
          {/* Map/Location Side */}
          <div className="w-full lg:w-1/2 bg-gray-200 relative min-h-[500px]">
             {/* Simulated Map (Replace with Google Maps iframe if needed) */}
             <div className="absolute inset-0 overflow-hidden">
               <img src="/mrgutters-grayhouse2.jpg" alt="Map Area" className="w-full h-full object-cover object-top opacity-90" />
               <div className="absolute inset-0 bg-primary/20"></div>
             </div>
             
             {/* Overlay Info Card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-2xl z-10 border-t-4 border-accent">
               <h3 className="text-2xl font-bold text-primary mb-2">Service Area</h3>
               <p className="text-gray-600 mb-4 text-sm">Proudly serving Columbia, SC and surrounding areas within a 50-mile radius.</p>
               <div className="flex justify-between items-center bg-gray-50 p-4 rounded border border-gray-200">
                  <span className="font-bold text-gray-800">Main Office</span>
                  <span className="text-accent font-bold">Open Today 8am - 6pm</span>
               </div>
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
