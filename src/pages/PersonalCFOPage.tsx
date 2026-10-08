import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Calendar, Users, HeartHandshake } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/common/MotionWrapper';

export const PersonalCFOPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const quarters = [
    {
      quarter: 'Quarter 1',
      focus: 'Getting Organized & Reviewing Goals',
      deliverables: [
        'Making a complete list of all your assets (mutual funds, PF, property, gold, and cash)',
        'Checking your monthly income and savings to ensure you have a comfortable emergency fund',
        'Reviewing your big life goals (buying a home, children’s college, and retirement timeline)',
      ],
    },
    {
      quarter: 'Quarter 2',
      focus: 'Protecting What Matters & Smart Tax Saving',
      deliverables: [
        'Checking if your family has enough pure term insurance to cover home loans and family expenses',
        'Reviewing your family health insurance so large medical bills never drain your savings',
        'Planning your tax savings well before March so you never have to scramble at tax time',
      ],
    },
    {
      quarter: 'Quarter 3',
      focus: 'Reviewing & Balancing Your Investments',
      deliverables: [
        'Checking if you have the right balance between equity (growth) and debt (safety)',
        'Removing underperforming funds and eliminating unnecessary fund overlap',
        'Keeping your monthly SIPs aligned with your goals without trying to time the market',
      ],
    },
    {
      quarter: 'Quarter 4',
      focus: 'Clear Wills, Nominations & Family Harmony',
      deliverables: [
        'Checking and updating nominee names on all bank accounts, mutual funds, and properties',
        'Writing or updating a clear, simple Will so your hard-earned wealth is transferred peacefully',
        'Teaching your children the basics of saving and responsible money habits',
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
                Dedicated Family Guidance
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                The Personal CFO: A Trusted Guide for Your Family's Money
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Busy professionals, doctors, and business owners don't need scattered tips or sales calls. You need one reliable, trusted partner who coordinates your investments, insurance, retirement, and family future together.
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
                Why Families Choose Us
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Bank Relationship Manager vs Your Personal CFO
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Here is why having an independent family advisor gives you true peace of mind.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                    <th className="p-4 sm:p-5 font-bold">What Matters Most</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-500">Bank RM / Traditional Agent</th>
                    <th className="p-4 sm:p-5 font-bold text-[#0A1F44] bg-[#E6F1FB]/70">Rathi Wealth Personal CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Main Goal</td>
                    <td className="p-4 sm:p-5 text-slate-600">Meeting monthly sales targets and earning product commissions.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Ensuring all your family life goals are planned for and fully protected.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">What They Look At</td>
                    <td className="p-4 sm:p-5 text-slate-600">Only the specific fund or insurance policy they want to sell you.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Your complete picture: savings, loans, insurance, taxes, and Will.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">During Market Ups & Downs</td>
                    <td className="p-4 sm:p-5 text-slate-600">Often disappear during crashes or push you to trade frequently.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Guides you calmly, keeps your plan steady, and stops costly panic mistakes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Who You Deal With</td>
                    <td className="p-4 sm:p-5 text-slate-600">Changes every 12 to 18 months due to frequent job switches.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Decades of continuity directly with Umesh Rathi and our senior team.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">Next Generation & Family</td>
                    <td className="p-4 sm:p-5 text-slate-600">No help with Will writing, nomination updates, or teaching kids.</td>
                    <td className="p-4 sm:p-5 text-[#0A1F44] font-medium bg-[#E6F1FB]/30">Helps write clear Wills, updates nominations, and teaches your children good money habits.</td>
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
                How We Work With You
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Our 4-Quarter Annual Rhythm
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We don’t just create a plan and forget about it. Every quarter, we review a specific part of your family finances to make sure everything stays on track.
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
              We work closely with a selective number of families to give each family our personal, dedicated attention. Let's start with a friendly, no-obligation conversation.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book an Introductory Discovery Call</span>
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


