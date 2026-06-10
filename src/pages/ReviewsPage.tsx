import { Star, ExternalLink } from 'lucide-react';
import { reviews } from '../data/reviewsData';

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base shrink-0"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/mrgutters-gutters1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-3 block">What Our Customers Say</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Customer Reviews</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Real feedback from real homeowners across Columbia, SC and surrounding areas.</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-7xl font-black text-primary leading-none">5.0</div>
              <div className="flex justify-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1 font-semibold">76 Google Reviews</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gray-200" />
            <div className="flex flex-col gap-2 w-48">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 w-3">{star}</span>
                  <Star size={12} className="text-yellow-400 fill-yellow-400 shrink-0" />
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: star === 5 ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden sm:block w-px h-20 bg-gray-200" />
            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/Mr+Gutter+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-primary font-black text-sm uppercase px-6 py-3 rounded btn-effect tracking-widest"
              >
                Write a Review <ExternalLink size={14} />
              </a>
              <p className="text-gray-400 text-xs mt-2">Takes less than 60 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <Avatar initials={review.initials} color={review.avatarColor} />
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-primary text-sm leading-tight truncate">{review.name}</p>
                    <StarRow count={review.rating} />
                    <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
                  </div>
                  {/* Google G */}
                  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review.text}"</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-primary rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/mrgutters-gutters5.jpg')", backgroundSize: 'cover' }} />
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Happy With Our Work?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Your review helps other homeowners find trusted gutter services in Columbia, SC.</p>
              <a
                href="https://www.google.com/maps/place/Mr+Gutter+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-primary font-black text-sm uppercase px-8 py-4 rounded btn-effect tracking-widest"
              >
                Leave Us a Google Review <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
