import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2, Briefcase, GraduationCap, Quote, Mail, MapPin } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard, Counter } from '../components/common/MotionWrapper';
import { BRAND_INFO, CREDIBILITY_METRICS, TEAM_MEMBERS } from '../data/content';

export const AboutPage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<string>('all');

  const values = [
    {
      title: 'Blending Finance with Life Coaching',
      description: 'We go beyond traditional numbers and spreadsheets to ensure your wealth is intimately aligned with your life purpose, family values, and long-term peace of mind.',
    },
    {
      title: 'Systems-Driven Precision & Continuity',
      description: 'Legacies are not sustained by visibility, but by reliability. Our internal systems and processes are deliberate, measured, and built to endure across generations.',
    },
    {
      title: 'Education Before Persuasion',
      description: 'We believe understanding must always precede complexity. We empower families to make informed, calm choices without commercial pressure or product quotas.',
    },
    {
      title: 'Decades of Fiduciary Accountability',
      description: 'With over two decades of advisory heritage in Central India and pan-India reach, we serve as our clients’ lifelong Personal CFO across bull runs, market crashes, and transitions.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us & Leadership Team | Rathi Wealth"
        description="Meet the leadership at Rathi Wealth: Umesh Rathi (MD & CEO), Vibhuti Rathi (Director), and Raghav Rathi (Head of Business Development). Authentic wealth stewardship and life coaching."
      />

      {/* Hero / Header with Scroll Animation */}
      <section className="relative bg-gradient-to-b from-[#0A1F44] via-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  <span>About Rathi Wealth Private Limited</span>
                  <span aria-hidden="true">·</span>
                  <span>AMFI Registered</span>
                  <span aria-hidden="true">·</span>
                  <span>Est. 2021</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Redefining Financial Empowerment.
                </h1>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                  At Rathi Wealth, we go beyond traditional methods by seamlessly blending exceptional financial services with life coaching. This unique approach ensures your wealth aligns with your aspirations, unlocking your full potential and helping you achieve holistic financial well-being.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center text-center max-w-xs shadow-xl">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 p-3 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3">
                    <img
                      src="/images/logo-tight.png"
                      alt="Rathi Wealth Official Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-serif font-bold text-white">Rathi Wealth Private Limited</span>
                  <span className="text-[11px] text-[#C9A84C] tracking-wider uppercase font-medium mt-0.5">Wealth For Generations</span>
                  <span className="text-[10px] text-slate-400 mt-1">CIN: U66190MP2021PTC058448</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership Team Spotlight — The 3 People from rathiwealth.in */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Authentic Leadership Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                The Stewards Behind Rathi Wealth
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meet the three leaders guiding Rathi Wealth’s advisory philosophy, internal architecture, and client experience.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {TEAM_MEMBERS.map((member, idx) => {
              const isEven = idx % 2 === 1;
              const initials = member.name.split(' ').map(n => n[0]).join('');

              return (
                <FadeIn key={member.id} direction="up" delay={idx * 0.15}>
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-md transition-all">
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Left / Avatar & Quick Credentials */}
                      <div className="lg:col-span-4 space-y-5">
                        <div className="bg-gradient-to-br from-[#0A1F44] to-[#162f5e] rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden group">
                          {/* Accent watermark */}
                          <div className="absolute -right-4 -bottom-4 text-white/5 font-serif font-bold text-9xl select-none pointer-events-none">
                            {initials}
                          </div>

                          <div className="relative z-10 space-y-4">
                            {member.image ? (
                              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#C9A84C] shadow-md bg-white">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] font-bold text-2xl border border-[#C9A84C]/40">
                                {initials}
                              </div>
                            )}

                            <div>
                              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                                {member.name}
                              </h3>
                              <p className="text-xs font-semibold text-[#C9A84C] tracking-wider uppercase mt-1">
                                {member.role}
                              </p>
                              <p className="text-[11px] text-slate-300 mt-1 font-mono">
                                {member.credentials}
                              </p>
                            </div>

                            {member.experience && (
                              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                                <Award className="w-4 h-4 text-[#C9A84C] shrink-0" />
                                <span>{member.experience}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Specializations list */}
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                            Core Disciplines:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {member.specialization.map((spec, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right / Comprehensive Bio & Philosophy */}
                      <div className="lg:col-span-8 space-y-6">
                        {member.quote && (
                          <div className="p-5 rounded-2xl bg-[#E6F1FB]/60 border-l-4 border-[#0A1F44] text-xs sm:text-sm text-slate-800 leading-relaxed italic flex items-start gap-3">
                            <Quote className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                            <span>"{member.quote}"</span>
                          </div>
                        )}

                        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {member.bio.map((paragraph, pIdx) => (
                            <p key={pIdx}>
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="font-semibold text-slate-700">Rathi Wealth Private Limited</span>
                            <span aria-hidden="true">·</span>
                            <span>Indore, MP</span>
                          </div>

                          <button
                            onClick={() => setConsultationOpen(true)}
                            className="px-4 py-2 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Consult with {member.name.split(' ')[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credibility Numbers with Rolling Counter Animation — "Our Happy Figures" */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Our Happy Figures
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Led by Experience, Trust, and Collaborative Efforts
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <FadeIn delay={0.05}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={25} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Years in Industry
                </div>
                <p className="text-[10px] text-slate-400">
                  Central India's 1st CFP®
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={150} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Happy Families
                </div>
                <p className="text-[10px] text-slate-400">
                  Generational trust
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={200} prefix="₹" suffix="Cr+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  AUM Advised
                </div>
                <p className="text-[10px] text-slate-400">
                  Assets under management
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={3000} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  People Educated
                </div>
                <p className="text-[10px] text-slate-400">
                  Target: 10,000 by 2028
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={200} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Articles Published
                </div>
                <p className="text-[10px] text-slate-400">
                  Financial wisdom columns
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={70} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Investor Programs
                </div>
                <p className="text-[10px] text-slate-400">
                  Awareness programmes
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission from rathiwealth.in */}
      <section className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4 h-full relative overflow-hidden">
                <div className="w-12 h-1 bg-[#C9A84C] rounded-full mb-2" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]">
                  Our Vision
                </span>
                <blockquote className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                  "At Rathi Wealth, we envision to be more than just a financial service firm—to be lifelong partners for individuals and families, empowering them with the clarity, confidence and tools to live a financially secure, independent, peaceful and meaningful life."
                </blockquote>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C9A84C] tracking-wide">
                    “Empowering Dreams, Nurturing Prosperity”
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Umesh Rathi — MD & CEO</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4 h-full relative overflow-hidden">
                <div className="w-12 h-1 bg-[#0A1F44] rounded-full mb-2" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Our Mission for 2028
                </span>
                <blockquote className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                  "At Rathi Wealth, by 2028 we aim to spread financial literacy by educating 10,000+ individuals and helping 1,000+ families in their overall financial wellbeing by empowering them and building lasting legacies."
                </blockquote>
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Wealth Pyramid: Security before growth, clarity before complexity, intention before accumulation.</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Planning Wealth Pyramid Section */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Core Advisory Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight">
                The Wealth Pyramid Philosophy
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                At Rathi Wealth, we build from the foundation up: <strong>security before growth, clarity before complexity, and intention before accumulation.</strong>
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    <h4 className="text-sm font-bold text-slate-900">1. Foundation: Wealth Protection</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-4.5">
                    Before deploying aggressive capital into market assets, we secure emergency buffers, medical health covers, and pure term life protection.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A1F44]"></span>
                    <h4 className="text-sm font-bold text-slate-900">2. Middle Tier: Wealth Creation & Goals</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-4.5">
                    Systematic Investment Plans (SIP), asset allocation, and disciplined equity & debt compounding aligned with milestone timeframes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]"></span>
                    <h4 className="text-sm font-bold text-slate-900">3. Apex Tier: Legacy & Wealth Transfer</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-4.5">
                    Intergenerational wealth succession, testamentary wills, private trust advisory, and family estate governance.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-6 flex justify-center">
              <div className="bg-gradient-to-br from-slate-50 to-[#E6F1FB]/40 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md w-full max-w-lg text-center space-y-4">
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm p-4">
                  <img
                    src="/images/wealth-pyramid.png"
                    alt="Rathi Wealth Investment Planning Pyramid"
                    className="w-full h-auto object-contain max-h-[380px] mx-auto hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs font-serif font-bold text-[#0A1F44] block">
                    Investment Planning Pyramid
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Rathi Wealth Structured Financial Framework
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Fiduciary Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                What We Stand For
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Our Fiduciary Philosophy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The founding ethos that guides every client conversation, internal workflow, and portfolio review.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="p-8 bg-slate-50/70 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 h-full">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#C9A84C]">0{idx + 1}.</span>
                    <h3 className="text-lg font-serif font-bold text-[#0A1F44]">{v.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Office & Consultation CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0A1F44] bg-[#E6F1FB] px-3 py-1.5 rounded-full mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Headquartered in Indore, Madhya Pradesh</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
              Start Your Journey with Rathi Wealth
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mt-2">
              Visit our office at 222, Krishna Business Center, Vijay Nagar, Indore, or connect online for a calm, 30-minute discovery conversation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Discovery Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </button>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0A1F44] font-medium text-sm transition-colors border border-slate-200"
              >
                Office Location & Map
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Meeting with Rathi Wealth Leadership"
      />
    </>
  );
};
