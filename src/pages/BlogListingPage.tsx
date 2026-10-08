import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/common/MotionWrapper';
import { BLOG_POSTS } from '../data/posts';

export const BlogListingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Financial Planning', 'Retirement', 'Wealth Creation', 'Protection', 'Legacy'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <>
      <SEOHead
        title="Knowledge Centre | Financial Planning & Compounding Articles"
        description="Read educational financial guides from Umesh Rathi covering retirement planning, SIP compounding mathematics, Human Life Value, and multi-generational estate transmission."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Investor Education & Insights
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                The Knowledge Centre
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Clear, simple money guides to help you make smart, long-term decisions for your family without getting lost in financial jargon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post Spotlight (if no filter active) */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <FadeIn direction="up" delay={0.1}>
              <div className="mb-14 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:border-[#0A1F44] transition-all">
                <div className="max-w-3xl space-y-4">
                  {/* Zero-pill unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-[#C9A84C] uppercase font-bold tracking-wider">Featured Essay</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-700">{featuredPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1F44] hover:text-[#C9A84C] transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      By <strong className="text-slate-800">{featuredPost.author.name}</strong> · {featuredPost.date}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] hover:text-[#C9A84C]"
                    >
                      <span>Read Full Essay</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Filter Bar */}
          <FadeIn direction="up" delay={0.15}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              {/* Interactive category buttons */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0A1F44] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles & guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A1F44]"
                />
              </div>
            </div>
          </FadeIn>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-semibold text-[#0A1F44] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <article className="group h-full">
                    <AnimatedCard className="bg-white rounded-2xl border border-slate-200 hover:border-[#0A1F44] p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all h-full">
                      <div className="space-y-3">
                        {/* Zero-pill metadata with typographic separators */}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="font-semibold text-[#0A1F44]">{post.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#C9A84C] transition-colors leading-snug">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500">{post.date}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="font-bold text-[#0A1F44] group-hover:text-[#C9A84C] flex items-center gap-1"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </AnimatedCard>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
};

