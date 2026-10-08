import React, { useState } from 'react';
import { Users, Clock, CheckCircle2, ArrowRight, ShieldCheck, Building2, GraduationCap } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/common/MotionWrapper';
import { WORKSHOPS_DATA } from '../data/content';

export const WorkshopsPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string>('Corporate Financial Wellness');

  const handleBookWorkshop = (title: string) => {
    setSelectedWorkshop(`Workshop Booking: ${title}`);
    setConsultationOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Investor Awareness Programmes & Corporate Workshops | Rathi Wealth"
        description="Non-commercial, strictly educational financial wellness workshops for corporate employees, campuses, and business forums conducted by Umesh Rathi."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Financial Education · Over 100 Sessions Delivered
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Investor Awareness Programmes
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Empowering organizations with non-commercial, unbiased financial literacy. We teach employees and leaders how to de-risk family finances, navigate compounding, and avoid speculative traps.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Organizations Invite Rathi Wealth */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#E6F1FB] text-[#0A1F44] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#0A1F44]">100% Non-Commercial</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    No schemes, insurance products, or investment funds are ever sold or marketed during our sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#E6F1FB] text-[#0A1F44] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#0A1F44]">Proven Corporate Impact</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Trusted by leading multinational IT companies, manufacturing firms, and professional associations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#E6F1FB] text-[#0A1F44] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#0A1F44]">Practical & Jargon-Free</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Complex financial mechanics explained with interactive calculators, relatable math, and live Q&A.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Workshop Tracks */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Curated Curriculum
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Available Workshop Tracks
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sessions can be delivered in-person at your offices or virtually via high-engagement webinars.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS_DATA.map((ws) => (
              <StaggerItem key={ws.id}>
                <AnimatedCard className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                      <span className="font-semibold text-[#0A1F44] bg-[#E6F1FB] px-2.5 py-1 rounded">
                        Audience: {ws.targetAudience}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {ws.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                      {ws.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ws.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        Key Takeaways Covered:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {ws.keyTakeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleBookWorkshop(ws.title)}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-medium text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Workshop for Your Organization</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                    </button>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={selectedWorkshop}
      />
    </>
  );
};

