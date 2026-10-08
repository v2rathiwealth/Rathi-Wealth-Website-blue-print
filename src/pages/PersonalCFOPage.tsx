import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/common/MotionWrapper';

export const PersonalCFOPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const quarters = [
    {
      quarter: 'Quarter 1',
      focus: 'Family Net Worth Audit & Milestone Calibration',
      deliverables: [
        'Consolidated balance sheet assembly (mutual funds, EPF, real estate, cash, gold)',
        'Cash flow audit: Surplus mapping and emergency liquidity buffer verification',
        'Annual goal calibration: Updating target timelines for children, retirement, and real estate',
      ],
    },
    {
      quarter: 'Quarter 2',
      focus: 'Risk Defense, Insurance & Tax Strategy',
      deliverables: [
        'Life insurance Human Life Value (HLV) gap review vs new liabilities',
        'Health insurance policy review (sum insured, super top-up limits, claim history)',
        'Advance tax and capital gains review with your Chartered Accountant',
      ],
    },
    {
      quarter: 'Quarter 3',
      focus: 'Portfolio Rebalancing & Asset Allocation',
      deliverables: [
        'Asset class drift analysis (Equity vs Debt vs Gold vs Liquid)',
        'Disciplined rebalancing to harvest gains and restore baseline risk targets',
        'Scheme performance review against benchmark peers; pruning chronic laggards',
      ],
    },
    {
      quarter: 'Quarter 4',
      focus: 'Estate Succession & Next-Gen Stewardship',
      deliverables: [
        'Comprehensive review of bank, folio, and property nominations',
        'Testamentary Will audit: Incorporating newly acquired assets or family changes',
        'Family financial dialogue: Introducing older children to basic compounding principles',
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Personal CFO For Families | Rathi Wealth"
        description="Discover the Personal CFO model at Rathi Wealth: Holistic, relationship-driven wealth management coordinating investments, risk protection, taxes, and intergenerational legacy."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Signature Advisory Model
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                The Personal CFO: Your Family’s Financial Quarterback
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                High-earning families and business founders need more than scattered investment tips. You need a dedicated, trusted strategist who coordinates every moving piece of your balance sheet.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contrast Table: Traditional vs Personal CFO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                The Fundamental Difference
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Bank Relationship Manager vs Your Personal CFO
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                    <th className="p-4 sm:p-5 font-bold">Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-500">Traditional Distributor / Bank RM</th>
                    <th className="p-4 sm:p-5 font-bold text-[#0A1F44] bg-[#E6F1FB]/70">Rathi Wealth Personal CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Primary Objective</td>
                    <td className="p-4 sm:p-5 text-slate-600">Meeting quarterly product sales quotas and commission targets.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Ensuring all family milestones are systematically funded and protected.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Scope of View</td>
                    <td className="p-4 sm:p-5 text-slate-600">Only the specific fund or insurance scheme they sell you.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Your entire balance sheet: real estate, cash, liabilities, taxes, and Will.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">During Market Crashes</td>
                    <td className="p-4 sm:p-5 text-slate-600">Often disappear or advise switching funds to generate new transaction revenue.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Actively guides behavior, rebalances according to the asset plan, and prevents panic selling.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Relationship Horizon</td>
                    <td className="p-4 sm:p-5 text-slate-600">Changes every 12–18 months due to frequent bank staff turnover.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Decade-long continuity with principal founder Umesh Rathi.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Succession & Heirs</td>
                    <td className="p-4 sm:p-5 text-slate-600">No involvement in family transmission or nominee alignment.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Prepares heirs with financial literacy and manages nomination/Will clarity.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The 4-Quarter Annual Operating Cadence */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Institutional Operating Rhythm
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                The Annual Operating Cadence
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We do not believe in once-in-three-years reviews. Our structured quarterly operating cycle ensures your wealth stays perpetually in sync with your life.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quarters.map((q, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0A1F44] bg-[#E6F1FB] px-2.5 py-1 rounded">
                      {q.quarter}
                    </span>
                    <Calendar className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0A1F44]">
                    {q.focus}
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {q.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-[#C9A84C] font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
              Ready to appoint a Personal CFO for your family?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mt-2">
              We limit our active family relationships to ensure deep principal-level attention. Contact us for an exploratory dialogue.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Initial Discovery Meeting</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Personal CFO Engagement"
      />
    </>
  );
};

