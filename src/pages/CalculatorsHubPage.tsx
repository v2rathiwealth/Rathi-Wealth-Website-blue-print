import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/common/MotionWrapper';
import { CALCULATORS_CATALOG } from '../data/content';

export const CalculatorsHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All 10 Calculators' },
    { id: 'wealth', label: 'Wealth & SIPs' },
    { id: 'retirement', label: 'Retirement & Monthly Income' },
    { id: 'protection', label: 'Family Protection & Health' },
    { id: 'goals', label: 'Education & Family Goals' },
  ];

  const filteredCalculators = CALCULATORS_CATALOG.filter((calc) => {
    const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
    const matchesSearch =
      calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Free Financial Calculators | SIP, Retirement, Health Check"
        description="Explore 10 free, simple financial planning calculators from Rathi Wealth. Calculate SIP compounding, retirement pension, insurance need, and financial health."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                <Calculator className="w-4 h-4" />
                <span>Free Planning Tools</span>
                <span aria-hidden="true">·</span>
                <span>100% Free · No Signup Required</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Simple Tools to Plan Your Future in Minutes
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Calculate how much your monthly SIP will grow, how much money you need to retire comfortably, or test your family's financial health. 100% free with zero ads and zero signups.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Search and Categories */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              {/* Category tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#0A1F44] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search calculators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A1F44] focus:border-transparent"
                />
              </div>
            </div>
          </FadeIn>

          {/* Cards Grid */}
          {filteredCalculators.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No calculators found matching your query.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-semibold text-[#0A1F44] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalculators.map((calc) => (
                <StaggerItem key={calc.id}>
                  <Link
                    to={`/calculators/${calc.slug}`}
                    className="group block h-full"
                  >
                    <AnimatedCard className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#0A1F44] shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="uppercase tracking-wider font-bold text-[#0A1F44]">
                            {calc.category}
                          </span>
                          {calc.priority === 'P0' && (
                            <span className="text-[11px] font-semibold text-[#C9A84C]">
                              Signature / P0
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-serif font-bold text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors">
                          {calc.name}
                        </h2>

                        <p className="text-xs font-medium text-slate-700 italic">
                          "{calc.tagline}"
                        </p>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {calc.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0A1F44]">
                        <span>Open Calculator</span>
                        <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </AnimatedCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Fiduciary Notice Box */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-16 p-6 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 text-xs text-slate-600 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-slate-800">Deterministic Client-Side Code:</strong>
                <p>
                  All calculations are executed instantaneously in your browser using mathematical time-value-of-money formulas. We never transmit your inputs to an external server or require lead capture before revealing outputs.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

