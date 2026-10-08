import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { marked } from 'marked';
import { ChevronRight, Share2, Check, ArrowRight, Calculator, MessageSquare, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { BLOG_POSTS } from '../data/posts';
import { CALCULATORS_CATALOG, BRAND_INFO } from '../data/content';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Parse markdown content safely
  const htmlContent = useMemo(() => {
    return marked.parse(post.content);
  }, [post.content]);

  // Related calculator
  const relatedCalc = post.relatedCalculatorId
    ? CALCULATORS_CATALOG.find((c) => c.id === post.relatedCalculatorId)
    : CALCULATORS_CATALOG[0];

  // Other articles in Knowledge Centre
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Read this financial essay: "${post.title}" - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Knowledge Centre`}
        description={post.excerpt}
      />

      <article className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Clean unboxed text */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#0A1F44] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/blog" className="hover:text-[#0A1F44] transition-colors">Knowledge Centre</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate">{post.title}</span>
          </nav>

          {/* Article Header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs mb-8">
            <div className="space-y-4">
              {/* Unboxed Metadata with Typographic Separator */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-[#0A1F44]">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A1F44] text-[#C9A84C] font-bold text-sm flex items-center justify-center">
                    UR
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{post.author.name}</span>
                    <span className="text-[11px] text-slate-500">{post.author.role} · Rathi Wealth</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied' : 'Share'}</span>
                  </button>

                  <button
                    onClick={handleShareWhatsApp}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Markdown Rendered Body */}
            <div
              className="mt-8 pt-8 border-t border-slate-100 prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4
                prose-headings:font-serif prose-headings:text-[#0A1F44] prose-headings:font-bold
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-blockquote:border-l-4 prose-blockquote:border-[#C9A84C] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-800
                prose-a:text-[#0A1F44] prose-a:font-semibold prose-a:underline hover:prose-a:text-[#C9A84C]
                prose-ul:list-disc prose-ul:pl-5 prose-li:my-1
                prose-table:w-full prose-table:text-xs prose-th:bg-slate-100 prose-th:p-2 prose-td:p-2 prose-td:border-b prose-td:border-slate-100"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Contextual Calculator Callout */}
            {relatedCalc && (
              <div className="mt-10 p-6 bg-[#E6F1FB]/60 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1F44] block">
                    Interactive Planning Companion
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#0A1F44]">
                    Calculate your own scenario with the {relatedCalc.name}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {relatedCalc.tagline}
                  </p>
                </div>
                <Link
                  to={`/calculators/${relatedCalc.slug}`}
                  className="shrink-0 px-5 py-2.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Launch Calculator</span>
                </Link>
              </div>
            )}

            {/* End of Article Consultation CTA */}
            <div className="mt-10 p-8 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                Have questions regarding your own financial portfolio?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Connect directly with Umesh Rathi for an objective, confidential discussion of your family balance sheet.
              </p>
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-3 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#C9A84C]" />
                <span>Schedule a 30-Minute Call</span>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A1F44]">
              More Educational Essays
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  to={`/blog/${other.slug}`}
                  className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0A1F44] transition-all group shadow-xs block"
                >
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    {other.category} · {other.readTime}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#C9A84C] transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {other.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={`Discussion from Article: ${post.title}`}
      />
    </>
  );
};
