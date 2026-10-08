import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, BookOpen, Calculator } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CALCULATORS_CATALOG } from '../data/content';
import { BLOG_POSTS } from '../data/posts';
import { SIPCalculator } from '../components/calculators/SIPCalculator';
import { LumpsumCalculator } from '../components/calculators/LumpsumCalculator';
import { RetirementCalculator } from '../components/calculators/RetirementCalculator';
import { FinancialHealthCheck } from '../components/calculators/FinancialHealthCheck';
import { LifeInsuranceCalculator } from '../components/calculators/LifeInsuranceCalculator';
import { GoalPlanningCalculator } from '../components/calculators/GoalPlanningCalculator';
import { SWPCalculator } from '../components/calculators/SWPCalculator';
import { SIPTopUpCalculator } from '../components/calculators/SIPTopUpCalculator';
import { ChildEducationCalculator } from '../components/calculators/ChildEducationCalculator';
import { CostOfDelayCalculator } from '../components/calculators/CostOfDelayCalculator';

export const CalculatorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentCalc = CALCULATORS_CATALOG.find((c) => c.slug === slug);

  if (!currentCalc) {
    return <Navigate to="/calculators" replace />;
  }

  // Related calculators in the same or complementary category
  const relatedCalculators = CALCULATORS_CATALOG.filter(
    (c) => c.slug !== slug && (c.category === currentCalc.category || c.priority === 'P0')
  ).slice(0, 3);

  // Related blog articles
  const relatedArticles = BLOG_POSTS.filter(
    (post) => post.relatedCalculatorId === currentCalc.id || post.category === 'Financial Planning'
  ).slice(0, 2);

  const renderCalculatorComponent = () => {
    switch (currentCalc.id) {
      case 'sip':
        return <SIPCalculator />;
      case 'lumpsum':
        return <LumpsumCalculator />;
      case 'retirement':
        return <RetirementCalculator />;
      case 'financial-health':
        return <FinancialHealthCheck />;
      case 'life-insurance':
        return <LifeInsuranceCalculator />;
      case 'goal-planning':
        return <GoalPlanningCalculator />;
      case 'swp':
        return <SWPCalculator />;
      case 'sip-top-up':
        return <SIPTopUpCalculator />;
      case 'child-education':
        return <ChildEducationCalculator />;
      case 'cost-of-delay':
        return <CostOfDelayCalculator />;
      default:
        return <SIPCalculator />;
    }
  };

  return (
    <>
      <SEOHead
        title={`${currentCalc.name} | Rathi Wealth`}
        description={currentCalc.description}
      />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Clean unboxed text with typographic separators */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#0A1F44] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/calculators" className="hover:text-[#0A1F44] transition-colors">Calculators</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate">{currentCalc.name}</span>
          </nav>

          {/* Calculator Container */}
          <div className="mb-12">
            {renderCalculatorComponent()}
          </div>

          {/* Related Articles & Complementary Calculators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            {/* Related educational reading */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A1F44] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C9A84C]" />
                <span>Related Educational Articles</span>
              </h3>
              <div className="space-y-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0A1F44] transition-all group"
                  >
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      {article.category} · {article.readTime}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#C9A84C] transition-colors">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other relevant calculators */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A1F44] flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#C9A84C]" />
                <span>Complementary Financial Tools</span>
              </h3>
              <div className="space-y-3">
                {relatedCalculators.map((calc) => (
                  <Link
                    key={calc.id}
                    to={`/calculators/${calc.slug}`}
                    className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0A1F44] transition-all group"
                  >
                    <span className="text-[11px] font-semibold text-[#0A1F44] block mb-1">
                      {calc.category.toUpperCase()}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#C9A84C] transition-colors">
                      {calc.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                      {calc.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
