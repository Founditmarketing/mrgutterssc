import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Clock, Tag, ChevronRight, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const DROPS = Array.from({ length: 25 }, (_, i) => ({
  left: (i * 4.1) % 100,
  delay: (i * 0.17) % 3,
  duration: 0.6 + (i % 6) * 0.11,
  height: 45 + (i % 5) * 20,
}));

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = postIndex !== -1 ? blogPosts[postIndex] : null;
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center px-4">
        <h2 className="text-3xl font-black text-primary mb-4">Post Not Found</h2>
        <p className="text-gray-500 mb-8">We couldn't find that blog post.</p>
        <Link to="/blog" className="bg-accent text-primary font-black px-6 py-3 rounded uppercase tracking-widest text-sm btn-effect">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${post.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white truncate max-w-[200px]">{post.title}</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="bg-accent/20 text-accent font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 flex items-center gap-1.5">
              <Tag size={11} /> {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center gap-6 text-white/50 text-sm font-medium">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Article */}
            <article className="w-full lg:w-2/3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md mb-10"
              />

              {/* Blog body content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-black prose-headings:text-primary prose-headings:tracking-tight
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-primary
                  prose-ul:text-gray-600 prose-li:marker:text-accent
                  prose-blockquote:border-l-accent prose-blockquote:text-gray-500 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Prev / Next */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-10 border-t border-gray-100">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="group flex items-center gap-3 text-left max-w-xs">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:text-primary transition-colors">
                      <ArrowLeft size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">Previous</p>
                      <p className="text-sm font-black text-primary group-hover:text-accent transition-colors leading-snug">{prevPost.title}</p>
                    </div>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-3 text-right max-w-xs ml-auto">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">Next</p>
                      <p className="text-sm font-black text-primary group-hover:text-accent transition-colors leading-snug">{nextPost.title}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:text-primary transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 flex flex-col gap-8">

              {/* CTA Card */}
              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="font-black text-xl mb-3 tracking-tight">Get a Free Quote</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Ready to protect your home? Our team is standing by for same-week service throughout South Carolina.</p>
                <Link to="/contact" className="block w-full bg-accent text-primary font-black py-3 rounded btn-effect uppercase tracking-widest text-sm text-center mb-3">
                  Request an Estimate
                </Link>
                <a href="tel:8033608890" className="flex items-center justify-center gap-2 w-full border-2 border-white/20 text-white font-black py-3 rounded uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                  <Phone size={16} />
                  (803) 360-8890
                </a>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-5 pb-3 border-b border-gray-100">Recent Posts</h3>
                <div className="flex flex-col gap-4">
                  {related.map(p => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex items-start gap-4">
                      <img src={p.image} alt={p.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div>
                        <span className="text-accent text-xs font-black uppercase tracking-widest">{p.category}</span>
                        <p className="text-primary font-black text-sm leading-snug group-hover:text-accent transition-colors mt-0.5">{p.title}</p>
                        <p className="text-gray-400 text-xs mt-1">{p.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to blog */}
              <Link to="/blog" className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest hover:text-accent transition-colors">
                <ArrowLeft size={14} /> Back to All Posts
              </Link>

            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-accent overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.18 }}>
          {DROPS.map((d, i) => (
            <div key={i} className="absolute top-0 rounded-full" style={{ left: `${d.left}%`, width: '2px', height: `${d.height}px`, backgroundColor: '#052e67', animation: `rain ${d.duration}s linear ${d.delay}s infinite` }} />
          ))}
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 mt-8">Ready To Protect Your Home?</h2>
          <p className="text-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Don't wait for water damage to occur. Get a free, no-obligation quote from South Carolina's trusted gutter experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto bg-primary text-white font-black py-4 px-10 rounded btn-effect hover:bg-white hover:text-primary uppercase tracking-widest text-lg border-2 border-primary">
              Get Your Free Quote
            </Link>
            <span className="text-primary font-black">OR</span>
            <a href="tel:8033608890" className="w-full sm:w-auto flex items-center justify-center bg-white text-primary font-black py-4 px-10 rounded btn-effect hover:bg-transparent hover:text-primary uppercase tracking-widest text-lg border-2 border-white">
              <Phone size={20} className="mr-2" />
              (803) 360-8890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
