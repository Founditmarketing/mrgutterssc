import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import PreFooter from '../components/home/PreFooter';

const serviceData = {
  cleaning: {
    title: "Gutter Cleaning",
    heroImage: "/mrgutters-gutters1.jpg",
    description: "Professional removal of leaves, twigs, and debris. Prevent costly water damage with our comprehensive cleaning service.",
    benefits: ["Clears clogs in gutters & downspouts", "Prevents foundation damage", "Includes free inspection", "No mess left behind"]
  },
  repair: {
    title: "Gutter Repair",
    heroImage: "/mrgutters-gutters2.jpg",
    description: "Expert repairs for leaks, sagging gutters, and loose components. We extend the life of your existing system.",
    benefits: ["Seals leaks and joints", "Re-secures loose gutters", "Replaces damaged sections", "Cost-effective alternative to replacement"]
  },
  guards: {
    title: "Gutter Guards",
    heroImage: "/mrgutters-gutters3.jpg",
    description: "Premium micromesh guard installation. Never clean your gutters again, backed by an industry-leading warranty.",
    benefits: ["Blocks pine needles & leaves", "Handles heavy rain flow", "Fits existing gutters", "No-clog guarantee"]
  },
  seamless: {
    title: "Seamless Gutters",
    heroImage: "/mrgutters-bluehouse.jpg",
    description: "Custom-fitted, continuous aluminum gutter systems installed to perfection. No seams means no leaks.",
    benefits: ["Custom cut on-site", "Rust-resistant aluminum", "Variety of colors available", "Enhances curb appeal"]
  },
  "fascia-soffit": {
    title: "Fascia & Soffit",
    heroImage: "/mrgutters-gutters6.jpg",
    description: "Repair and replacement of damaged fascia boards and soffits to protect your roofline and ventilation.",
    benefits: ["Prevents roof rot", "Improves attic ventilation", "Removes pest entry points", "Color matched to your home"]
  },
  commercial: {
    title: "Commercial Services",
    heroImage: "/mrgutters-brickhouse.jpg",
    description: "Heavy-duty gutter solutions tailored for commercial properties, ensuring optimal water diversion for large roofs.",
    benefits: ["Box gutters & custom sizes", "Property management contracts", "Fully licensed and insured", "Minimal business disruption"]
  }
};

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  
  const service = id && id in serviceData ? serviceData[id as keyof typeof serviceData] : serviceData.cleaning;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white">
      {/* Interior Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('${service.heroImage}')`,
            backgroundBlendMode: 'overlay', 
            backgroundColor: 'rgba(5, 46, 103, 0.8)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 opacity-90"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20 text-center pt-20">
          <div className="flex items-center justify-center space-x-2 text-accent text-sm font-bold uppercase tracking-widest mb-4">
             <Link to="/" className="hover:text-white transition-colors">Home</Link>
             <ChevronRight size={16} />
             <span className="text-gray-300">Services</span>
             <ChevronRight size={16} />
             <span className="text-white">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">{service.title}</h1>
        </div>
        
        {/* Bottom zig zag */}
        <div className="absolute bottom-[-1px] w-full h-[40px] text-white overflow-hidden z-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[200%] absolute top-0 fill-current">
            <polygon points="0,100 100,100 100,50 97.5,100 95,50 92.5,100 90,50 87.5,100 85,50 82.5,100 80,50 77.5,100 75,50 72.5,100 70,50 67.5,100 65,50 62.5,100 60,50 57.5,100 55,50 52.5,100 50,50 47.5,100 45,50 42.5,100 40,50 37.5,100 35,50 32.5,100 30,50 27.5,100 25,50 22.5,100 20,50 17.5,100 15,50 12.5,100 10,50 7.5,100 5,50 2.5,100 0,50" />
          </svg>
        </div>
      </section>

      {/* Main Content & Form Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Content Side */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-black text-primary mb-6">Expert {service.title} in South Carolina</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {service.description} At Mr Gutter SC, we utilize the best tools and techniques to ensure your home is fully protected from water damage. Our experienced technicians provide thorough, honest assessments and high-quality workmanship.
              </p>
              
              <h3 className="text-2xl font-bold text-primary mb-6">Benefits of Our Service</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-md border border-gray-100">
                    <CheckCircle2 className="text-accent mr-3 h-5 w-5 shrink-0" />
                    <span className="font-semibold">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
                 <div>
                   <h4 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h4>
                   <p className="text-gray-300">Our team is ready to deploy. Call us directly for fast service.</p>
                 </div>
                 <a href="tel:8033608890" className="mt-6 md:mt-0 bg-accent text-primary px-6 py-3 font-black text-sm uppercase rounded btn-effect flex items-center justify-center whitespace-nowrap">
                    <Phone size={20} className="mr-2" />
                    (803) 360-8890
                 </a>
              </div>
            </div>

            {/* Embedded Form Side (Sticky) */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 p-2">
                <div className="bg-gray-50 p-6 text-center rounded-t-lg border-b border-gray-100">
                  <h3 className="text-xl font-black text-primary">Request a Quote</h3>
                  <p className="text-sm text-gray-500 mt-1">Get a free estimate for {service.title.toLowerCase()}.</p>
                </div>
                <form className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="(803) 555-0192" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="29201" />
                  </div>
                  <button type="button" className="w-full bg-accent text-primary py-3 rounded font-black text-sm uppercase mt-4 btn-effect">
                    Get Estimate
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <PreFooter />
    </div>
  );
}
