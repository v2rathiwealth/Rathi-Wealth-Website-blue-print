import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Compass,
  CheckCircle2,
  ChevronDown,
  Calculator,
  MessageSquare,
  BookOpen,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEOHead } from '../components/common/SEOHead';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard, Counter, ScaleIn } from '../components/common/MotionWrapper';
import {
  BRAND_INFO,
  CREDIBILITY_METRICS,
  SERVICE_PILLARS,
  WEALTH_PYRAMID_LEVELS,
  CALCULATORS_CATALOG,
  TESTIMONIALS,
  FAQS,
  WORKSHOPS_DATA,
  TEAM_MEMBERS
} from '../data/content';
import { BLOG_POSTS } from '../data/posts';

export const HomePage: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedPillar, setSelectedPillar] = useState(SERVICE_PILLARS[0].id);

  const popularCalculators = CALCULATORS_CATALOG.filter((c) =>
    ['sip', 'retirement', 'financial-health', 'life-insurance', 'goal-planning', 'swp'].includes(c.id)
  );

  return (
    <>
      <SEOHead
        title="Wealth For Generations | Personal CFO & Financial Planning"
        description="Rathi Wealth Private Limited provides holistic wealth management, Personal CFO guidance, life coaching, and public financial calculators. Founded by Umesh Rathi (CFP® 2008)."
      />

      {/* 1. HERO SECTION WITH ENHANCED ANIMATIONS */}
      <section className="relative bg-gradient-to-b from-[#0A1F44] via-[#0A1F44] to-[#0d2757] text-white pt-20 pb-24 sm:pb-32 overflow-hidden">
        {/* Subtle geometric background grid for quiet elegance */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-6">
              {/* Kicker - Zero pill discipline: clean unboxed text */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                <span>Personal CFO for Families</span>
                <span aria-hidden="true">·</span>
                <span>AMFI Registered</span>
                <span aria-hidden="true">·</span>
                <span>Indore & Pan-India</span>
                <span aria-hidden="true">·</span>
                <span>Over 20 Years Experience</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]"
              >
                Wealth For Generations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light"
              >
                Managing your money should give you complete peace of mind, not stress. At Rathi Wealth, we act as your family’s <strong>Personal CFO</strong> — helping you protect your savings, grow your wealth with disciplined SIPs, plan for your children's future and retirement, and pass on your hard-earned assets safely to the next generation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConsultationOpen(true)}
                  className="px-7 py-3.5 rounded-lg bg-[#C9A84C] hover:bg-[#b8973d] text-[#0A1F44] font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/calculators"
                    className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/20 flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-[#C9A84C]" />
                    <span>Try Free Planning Calculators</span>
                  </Link>
                </motion.div>
              </motion.div>

              <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  <span>Central India's 1st CFP® (2008)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  <span>100% Unbiased — No Sales Targets</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  <span>Guiding 150+ Families Across India</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE FINANCIAL PROBLEM (Why Money Must Work Together) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Common Money Mistakes
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44] tracking-tight">
                Is your hard-earned money working as hard as you do?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most families work very hard to earn money, but their savings and investments are scattered all over the place. A few mutual funds bought on casual advice, expensive insurance policies that offer very low returns, and no clear roadmap for the future.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                When financial decisions are made in bits and pieces without a plan, wealth grows slowly and unnecessary risks creep in.
              </p>
            </FadeIn>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">Scattered Mutual Funds</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Holding 15–20 different mutual funds across various apps with no clear idea whether they match your real family milestones.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">Low-Return Insurance Policies</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Paying heavy premiums for traditional endowment or ULIP policies that yield only 4–5% return while leaving your family under-protected.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">No Emergency Safety Cushion</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Investing aggressively into stocks or locking money away without a 6-month liquid emergency fund and proper family health cover.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-[#0A1F44] text-white rounded-xl shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">The Rathi Solution</div>
                    <h3 className="text-base font-bold text-white">The Personal CFO Model</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      One trusted family advisor who organizes your investments, taxes, health cover, and children's future into one simple masterplan.
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERSONAL CFO OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Dedicated Guidance For Your Family
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                What If Your Family Had a Dedicated Personal CFO?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Large corporations hire a Chief Financial Officer to manage every rupee with discipline and foresight. We bring that exact care and expertise to your family household.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <AnimatedCard className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                  One Trusted Partner for Everything
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No more juggling between bank relationship managers, insurance agents, and tax advisors. We look after your entire financial picture together.
                </p>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                  Calm Guidance in Ups & Downs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Financial success comes from emotional discipline. When markets rise or crash, we guide you calmly so you never make panic decisions that hurt your wealth.
                </p>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                  Protecting What You Pass On
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We help you write a clear Will, update bank nominations, and teach your children healthy money habits so your wealth passes on peacefully.
                </p>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              to="/personal-cfo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1F44] hover:text-[#C9A84C] transition-colors"
            >
              <span>See how the Personal CFO engagement works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE WEALTH PYRAMID (With Scroll Stagger) */}
      <section className="py-20 bg-[#0A1F44] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Our Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                The Rathi Wealth Pyramid
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Just like constructing a strong building, lasting wealth requires a solid foundation first. Taking big risks without safety nets leads to stress; proper sequencing ensures complete security.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-[#C9A84C]">Our Golden Rule:</p>
                <p>Safety comes first, growth comes second. Never jump into aggressive investments before your emergency funds and family insurance are in place.</p>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <StaggerContainer className="space-y-3">
                {WEALTH_PYRAMID_LEVELS.map((level) => (
                  <StaggerItem key={level.step}>
                    <motion.div
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A84C]/50 transition-colors flex items-start gap-4"
                    >
                      <span className="text-sm font-mono font-bold text-[#C9A84C] pt-0.5">
                        LEVEL {level.step}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-white">{level.title}</h4>
                          <span className="text-xs text-slate-400">({level.theme})</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {level.focus}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINANCIAL CALCULATORS SECTION (Animated Cards) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Free Tools · Know Your Numbers</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                  Simple Financial Planning Calculators
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  See how small monthly investments grow over time, or find out how much you need to retire comfortably. 100% free, no phone number or signup required.
                </p>
              </div>
              <Link
                to="/calculators"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0A1F44] bg-slate-100 hover:bg-[#E6F1FB] transition-colors border border-slate-200 shrink-0 self-start md:self-auto"
              >
                <span>View All 10 Calculators</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </FadeIn>

          {/* Featured Calculator Grid with Staggered reveal */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCalculators.map((calc) => (
              <StaggerItem key={calc.id}>
                <Link
                  to={`/calculators/${calc.slug}`}
                  className="group block h-full"
                >
                  <AnimatedCard className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0A1F44] shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="uppercase tracking-wider font-semibold text-[#0A1F44]">
                          {calc.category}
                        </span>
                        <span className="text-slate-400">· 100% Free</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors">
                        {calc.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {calc.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A1F44]">
                      <span>Try Calculator</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 p-6 rounded-2xl bg-[#E6F1FB]/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
                  Free 2-Minute Diagnostic
                </span>
                <h4 className="text-lg font-serif font-bold text-[#0A1F44]">
                  Not sure where to begin? Take our quick Financial Health Checkup
                </h4>
                <p className="text-xs text-slate-600">
                  Check your emergency savings, insurance cover, loan safety, and family preparedness in 5 easy questions.
                </p>
              </div>
              <Link
                to="/calculators/financial-health-check"
                className="shrink-0 px-6 py-3 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Take 2-Minute Test</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FIVE SERVICE PILLARS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                How We Help You
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                Five Pillars of Lifelong Wealth Management
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From starting your very first monthly SIP to passing on your assets peacefully to your children, we guide you at every step.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Pillars Nav */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {SERVICE_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  selectedPillar === pillar.id
                    ? 'bg-[#0A1F44] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {pillar.name}
              </button>
            ))}
          </div>

          {/* Active Pillar Card with Animation */}
          {(() => {
            const current = SERVICE_PILLARS.find((p) => p.id === selectedPillar) || SERVICE_PILLARS[0];
            return (
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 space-y-3">
                      <span className="text-xs font-mono font-bold text-[#C9A84C]">PILLAR: {current.name}</span>
                      <h3 className="text-2xl font-serif font-bold text-[#0A1F44]">
                        {current.tagline}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {current.summary}
                      </p>
                      <div className="pt-3">
                        <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                          Best Suited For:
                        </span>
                        <p className="text-xs text-slate-800 font-medium mt-1">
                          {current.idealFor}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        What We Do For You:
                      </span>
                      <ul className="space-y-2.5 text-xs text-slate-700">
                        {current.offerings.map((off, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                            <span>{off}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-200">
                        <Link
                          to={`/services#${current.id}`}
                          className="text-xs font-bold text-[#0A1F44] hover:text-[#C9A84C] flex items-center gap-1.5"
                        >
                          <span>Learn more about this pillar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })()}
        </div>
      </section>

      {/* 7. VERIFIED CREDIBILITY METRICS (Animated Rolling Counters) */}
      <section className="py-16 bg-[#0A1F44] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Our Numbers at a Glance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Built on 25+ Years of Trust and Personal Relationships
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <FadeIn delay={0.05}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={25} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Years Guiding Families
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
                  Across India & abroad
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={200} prefix="₹" suffix="Cr+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Savings & Wealth Guided
                </div>
                <p className="text-[10px] text-slate-400">
                  Disciplined mutual funds
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
                  In free money basics
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={200} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Guides & Articles
                </div>
                <p className="text-[10px] text-slate-400">
                  Simple everyday advice
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#C9A84C]">
                  <Counter target={70} suffix="+" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Free Workshops
                </div>
                <p className="text-[10px] text-slate-400">
                  For offices and groups
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER SPOTLIGHT — UMESH RATHI & THE 3 LEADERS PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-68 h-88 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#0A1F44] to-[#162f5e] p-8 flex flex-col justify-between text-white shadow-xl border border-slate-200">
                  <div className="space-y-2">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#C9A84C] bg-white shadow-md">
                      <img
                        src="/images/team/umesh-rathi.png"
                        alt={BRAND_INFO.founder.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold block pt-4">
                      Founder Profile
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {BRAND_INFO.founder.name}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {BRAND_INFO.founder.title} · Rathi Wealth
                    </p>
                    <p className="text-[11px] text-[#C9A84C] font-mono mt-1">
                      {BRAND_INFO.founder.credentials}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4 text-xs text-slate-300">
                    <p className="font-semibold text-white">Central India's 1st CFP® (2008)</p>
                    <p className="text-[11px] text-slate-400">222 Krishna Business Center, Indore, MP</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Meet Our Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                  "Managing money isn't just about spreadsheets. It's about giving your family a peaceful, secure future."
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {BRAND_INFO.founder.bio}
              </p>

              {/* 3 Leadership Pillars Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {TEAM_MEMBERS.map((m) => (
                  <div key={m.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <strong className="text-slate-900 block font-serif">{m.name}</strong>
                    <span className="text-[11px] text-[#C9A84C] block font-medium">{m.role}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1F44] hover:text-[#C9A84C] transition-colors"
                >
                  <span>Read full bios of Umesh, Vibhuti & Raghav Rathi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. INVESTOR AWARENESS WORKSHOPS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Financial Literacy For Everyone
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                  Free Investor Awareness Workshops
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We run free, zero-sales educational sessions for company employees, colleges, and family groups to teach practical money basics that anyone can follow.
                </p>
              </div>
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0A1F44] bg-white hover:bg-slate-100 transition-colors border border-slate-200 shrink-0 self-start md:self-auto"
              >
                <span>View Workshop Topics</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKSHOPS_DATA.slice(0, 2).map((workshop) => (
              <StaggerItem key={workshop.id}>
                <AnimatedCard className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 h-full">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#0A1F44]">{workshop.targetAudience}</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0A1F44]">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {workshop.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    {workshop.keyTakeaways.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
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

      {/* 10. KNOWLEDGE CENTRE / LATEST BLOGS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  Learn Money Basics
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                  Knowledge Centre
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Simple, jargon-free articles answering everyday money questions, explaining mutual funds, and helping you make smart financial choices.
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1F44] hover:text-[#C9A84C] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}>
                <article className="group h-full">
                  <AnimatedCard className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0A1F44] transition-all h-full">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-[#0A1F44]">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="text-slate-500">{post.date}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="font-semibold text-[#0A1F44] group-hover:text-[#C9A84C] flex items-center gap-1"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </AnimatedCard>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 11. GENUINE TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Real Family Stories
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                What Families Say About Rathi Wealth
              </h2>
              <p className="text-sm text-slate-600">
                Words from doctors, entrepreneurs, and senior executives who have partnered with Umesh Rathi for years.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 h-full">
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                      <p className="text-xs text-slate-500">{t.designation}, {t.city}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#0A1F44] bg-[#E6F1FB] px-2.5 py-1 rounded-md">
                      {t.associationYears}
                    </span>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Clear Answers
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'transform rotate-180 text-[#0A1F44]' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-5 pt-0 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#162f5e] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <FadeIn direction="up">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Let's Talk About Your Family Goals
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white max-w-2xl mx-auto leading-tight mt-2">
              Ready to make your money simple, organized, and stress-free?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mt-2">
              Connect with Umesh Rathi and our team in Indore or book a friendly 30-minute discovery video call. No sales pitch, no pressure.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#C9A84C] hover:bg-[#b8973d] text-[#0A1F44] font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book a Free 30-Minute Consultation</span>
              </motion.button>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/20"
              >
                Indore Office Location & Phone
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
