import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Video, Mic, ExternalLink, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';

export const MediaPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const mediaItems = [
    {
      type: 'Publication & Commentary',
      title: 'De-biasing Family Portfolios During Market All-Time Highs',
      outlet: 'Financial Express Wealth Forum',
      date: 'August 2026',
      summary: 'Umesh Rathi discusses why rebalancing into defensive allocations during prolonged bull runs is the true hallmark of disciplined risk management.',
      icon: Newspaper,
    },
    {
      type: 'Panel Discussion',
      title: 'Navigating Retirement Inflation for Indian Urban Households',
      outlet: 'Economic Times Investor Roundtable',
      date: 'June 2026',
      summary: 'An exploration of medical inflation, longevity risk, and multi-bucket systematic withdrawal frameworks for corporate retirees.',
      icon: Video,
    },
    {
      type: 'Educational Masterclass',
      title: 'The Real Math of Human Life Value vs Endowment Policies',
      outlet: 'National Wealth Conclave',
      date: 'March 2026',
      summary: 'Why separating investment from protection is the single most critical structural decision an Indian investor can make.',
      icon: Mic,
    },
    {
      type: 'Thought Leadership',
      title: 'Succession Planning: Why Nominations Don’t Guarantee Legal Title',
      outlet: 'Maharashtra Chamber of Commerce Journal',
      date: 'January 2026',
      summary: 'A practical legal guide for business owners on coordinating bank nominations, family registries, and testamentary Wills.',
      icon: Newspaper,
    },
  ];

  return (
    <>
      <SEOHead
        title="Media & Published Perspectives | Umesh Rathi"
        description="Media coverage, market commentaries, expert panels, and publications by Umesh Rathi and Rathi Wealth."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Thought Leadership & Public Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Media & Publications
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Articles, expert panels, and public commentary sharing Rathi Wealth’s fiduciary perspective on Indian capital markets and family finance.
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-[#0A1F44] flex items-center gap-1.5">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                        {item.type}
                      </span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#0A1F44]">
                      {item.title}
                    </h3>

                    <span className="text-xs font-semibold text-slate-500 block">
                      Published via {item.outlet}
                    </span>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Author: Umesh Rathi</span>
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="text-[#0A1F44] hover:text-[#C9A84C] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire On Topic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Media Topic Inquiry"
      />
    </>
  );
};
