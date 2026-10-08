import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Calculator } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, AnimatedCard } from '../components/common/MotionWrapper';
import { SERVICE_PILLARS, CALCULATORS_CATALOG } from '../data/content';

export const ServicesPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Holistic Portfolio & Financial Diagnostic');

  const handleOpenConsultation = (topic: string) => {
    setSelectedTopic(topic);
    setConsultationOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Comprehensive Wealth Advisory Services | Plan, Grow, Protect, Prepare, Preserve"
        description="Explore Rathi Wealth's five core advisory pillars: Financial Planning, Wealth Creation (SIP & Mutual Funds), Risk Protection, Retirement & Education Preparation, and Estate Legacy Preservation."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Five Pillars of Complete Financial Peace
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                We don’t sell random financial products. We help you build a clear, step-by-step plan for your family — covering everyday planning, disciplined SIP investments, family protection, children’s milestones, and peaceful wealth transfer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Five Pillars In Detail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICE_PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.id} direction="up" delay={idx * 0.1}>
              <div
                id={pillar.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#0A1F44] bg-[#E6F1FB] px-2.5 py-1 rounded-md">
                        PILLAR 0{idx + 1}
                      </span>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#C9A84C]">
                        {pillar.name}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1F44]">
                      {pillar.tagline}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.summary}
                    </p>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-1">Best Suited For:</strong>
                      {pillar.idealFor}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleOpenConsultation(`${pillar.name}: Advisory Engagement`)}
                        className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>Talk to Us About {pillar.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-xl border border-slate-100 space-y-5">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-slate-700">
                      What We Do For You:
                    </h3>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      {pillar.offerings.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Contextual Link to Relevant Calculator */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Try our free calculators:</span>
                      <Link
                        to="/calculators"
                        className="font-bold text-[#0A1F44] hover:text-[#C9A84C] flex items-center gap-1.5"
                      >
                        <Calculator className="w-3.5 h-3.5 text-[#C9A84C]" />
                        <span>Explore Planning Calculators</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Investment Planning Pyramid Alignment */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Our Proven Philosophy
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                How the Five Pillars Map to the Wealth Pyramid
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We always build from the foundation up: protecting your family with safety nets before taking investment risks. This guarantees that life’s emergencies will never wipe out your hard-earned wealth.
              </p>
              <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-[#0A1F44] text-[#C9A84C] font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                  <span><strong>Foundation (Safety First):</strong> 6-month emergency buffer, pure term life cover, and health insurance.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-[#0A1F44] text-[#C9A84C] font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                  <span><strong>Growth (Wealth Building):</strong> Goal-based mutual funds and disciplined monthly SIPs that beat inflation.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-[#0A1F44] text-[#C9A84C] font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                  <span><strong>Future & Legacy:</strong> Child higher education, worry-free retirement, and clear registered Wills.</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm max-w-md w-full text-center">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-inner">
                  <img
                    src="/images/wealth-pyramid.png"
                    alt="Investment Planning Pyramid"
                    className="w-full h-auto object-contain max-h-[340px] mx-auto hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs font-bold text-[#0A1F44] mt-3">
                  Investment Planning Framework · Rathi Wealth
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Link to Personal CFO */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <FadeIn direction="up">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              All-In-One Guidance
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">
              Want Someone to Handle All Five Pillars Together?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mt-2">
              Our Personal CFO model brings all five pillars together under one roof, giving your family a dedicated financial guide for life.
            </p>
            <div className="pt-4">
              <Link
                to="/personal-cfo"
                className="px-6 py-3 rounded-lg bg-[#C9A84C] hover:bg-[#b8973d] text-[#0A1F44] font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Explore The Personal CFO Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={selectedTopic}
      />
    </>
  );
};

