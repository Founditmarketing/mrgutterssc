import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, ChevronLeft, ChevronRight, Droplets, Wrench, Shield, Home as HomeIcon, HardHat, Building2, Layers, Lightbulb } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    path: '/services/installation',
    title: 'Gutter Installation',
    description: 'New gutter systems expertly installed on any home. We use only premium materials built to handle South Carolina weather.',
    icon: HardHat,
    image: '/mrgutters-gutters5.jpg',
  },
  {
    path: '/services/guards',
    title: 'Gutter Guard Installation',
    description: 'Premium micromesh guard installation. Never clean your gutters again, backed by an industry-leading no-clog warranty.',
    icon: Shield,
    image: '/mrgutters-gutters3.jpg',
  },
  {
    path: '/services/cleaning',
    title: 'Gutter Cleaning',
    description: 'Complete removal of leaves, twigs, and debris. We ensure free-flowing downspouts to protect your foundation.',
    icon: Droplets,
    image: '/mrgutters-gutters1.jpg',
  },
  {
    path: '/services/repair',
    title: 'Gutter Maintenance & Repair',
    description: 'Fixing leaks, sagging gutters, and re-securing loose components. Prolong the life of your existing system.',
    icon: Wrench,
    image: '/mrgutters-gutters2.jpg',
  },
  {
    path: '/services/seamless',
    title: 'Seamless Gutters',
    description: 'Custom-fitted, continuous aluminum gutter systems installed to perfection. No seams means no leaks.',
    icon: HomeIcon,
    image: '/mrgutters-gutters4.jpg',
  },
  {
    path: '/services/commercial',
    title: 'Commercial Gutters',
    description: 'Heavy-duty gutter solutions for commercial properties. Box gutters, custom sizing, and property management contracts available.',
    icon: Building2,
    image: '/mrgutters-brickhouse.jpg',
  },
  {
    path: '/services/fascia-soffit',
    title: 'Fascia & Soffit',
    description: 'Repair and replacement of damaged fascia boards and soffits to protect your roofline and improve ventilation.',
    icon: Layers,
    image: '/mrgutters-gutters6.jpg',
  },
  {
    path: '/services/christmas-lighting',
    title: 'Christmas Lighting',
    description: 'Professional holiday lighting installation and takedown. Let us handle the lights while you enjoy the season.',
    icon: Lightbulb,
    image: '/christmaslights.png',
  },
];

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Section Title (Faint Watermark) */}
      <h2 className="absolute bottom-[-0.2em] left-0 text-[18vw] md:text-[150px] lg:text-[180px] font-black text-primary opacity-[0.05] select-none leading-none pointer-events-none whitespace-nowrap">SERVICES</h2>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-2 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Our Premium Services</h2>
            <p className="text-gray-600 mt-4 text-lg">We offer a complete suite of exterior water management solutions designed to protect your home from water damage.</p>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0">
             <button 
              onClick={scrollPrev} 
              disabled={!prevBtnEnabled}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                prevBtnEnabled ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer' : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
              onClick={scrollNext} 
              disabled={!nextBtnEnabled}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                nextBtnEnabled ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer' : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next"
             >
               <ChevronRight size={24} />
             </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
          <div className="flex -ml-4">
            {services.map((service, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                
                {/* Service Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  
                  {/* Image Container with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                       <div className="bg-accent/90 p-2 rounded-md inline-block mb-3">
                         <service.icon size={24} className="text-primary" />
                       </div>
                       <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between bg-white relative">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link to={service.path} className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors group/btn">
                      Learn More
                      <ArrowRight size={14} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA below carousel */}
        <div className="mt-16 text-center">
           <button className="bg-accent text-primary px-6 py-3 font-black text-sm uppercase rounded btn-effect">
             View All Services
           </button>
        </div>

      </div>
    </section>
  );
}
