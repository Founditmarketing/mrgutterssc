import { Award, ShieldCheck, ThumbsUp, Star } from 'lucide-react';

const bannerItems = [
  { icon: Award, text: "Top Rated in South Carolina" },
  { icon: ShieldCheck, text: "Fully Licensed & Insured" },
  { icon: Star, text: "5-Star Google Reviews" },
  { icon: ThumbsUp, text: "100% Satisfaction Guarantee" },
  // Duplicate for seamless infinite scrolling
  { icon: Award, text: "Top Rated in South Carolina" },
  { icon: ShieldCheck, text: "Fully Licensed & Insured" },
  { icon: Star, text: "5-Star Google Reviews" },
  { icon: ThumbsUp, text: "100% Satisfaction Guarantee" },
];

export default function TrustBanner() {
  return (
    <div className="bg-white border-y border-gray-100 py-4 overflow-hidden relative z-10 flex">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

      <div className="animate-marquee flex items-center space-x-16 whitespace-nowrap w-max">
        {bannerItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 group cursor-default">
            <span className="text-accent font-black"><item.icon size={16} className="fill-current inline-block mr-1"/></span>
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
