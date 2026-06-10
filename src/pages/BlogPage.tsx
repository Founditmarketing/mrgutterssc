import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/mrgutters-gutters5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="text-accent font-black tracking-widest uppercase text-xs mb-3 block">Tips, Guides & News</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">The Mr Gutter SC Blog</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Expert advice on gutter maintenance, protection, and home care from South Carolina's trusted gutter professionals.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={12} className="text-accent" />
                    <span className="text-accent font-black text-xs uppercase tracking-widest">{post.category}</span>
                  </div>
                  <h3 className="font-black text-primary text-lg leading-snug mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
