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
                <span>Personal CFO Advisory</span>
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
                At Rathi Wealth, we redefine financial empowerment by seamlessly blending exceptional financial services with life coaching. We act as your <strong>Personal CFO</strong>—ensuring your wealth aligns with your aspirations, unlocking your full potential, and building legacies that endure across generations.
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
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/calculators"
                    className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/20 flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-[#C9A84C]" />
                    <span>Explore Planning Calculators</span>
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
                  <span>Zero Product Sales Quotas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  <span>Life Coaching + Financial Planning</span>
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
                The Fragmented Balance Sheet
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44] tracking-tight">
                Your money should work together, not in isolated silos.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most families do not suffer from an income shortage; they suffer from disconnected decisions. An insurance policy bought for tax savings, random mutual fund folios pitched by bank managers, and outdated nominations that contradict testamentary intent.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                When individual financial choices are made in isolation, risk multiplies and compounding slows down.
              </p>
            </FadeIn>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">Ad-Hoc Product Accumulation</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Collecting 20+ mutual fund schemes with overlapping stock portfolios, resulting in index-matching returns with elevated expense ratios.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">Mixing Insurance with Investment</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Holding traditional endowment or ULIP policies that yield sub-5% returns while leaving dependents severely under-protected.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">Common Trap</div>
                    <h3 className="text-base font-bold text-slate-900">Ignored Succession Architecture</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Assuming bank nominations equal legal inheritance, unintentionally exposing hard-earned wealth to costly intergenerational disputes.
                    </p>
                  </AnimatedCard>
                </StaggerItem>

                <StaggerItem>
                  <AnimatedCard className="p-6 bg-[#0A1F44] text-white rounded-xl shadow-xs space-y-2 h-full">
                    <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">The Rathi Solution</div>
                    <h3 className="text-base font-bold text-white">The Personal CFO Model</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      One dedicated quarterback who orchestrates your investments, taxes, risk protection, and estate transfer into a cohesive masterplan.
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
                Holistic Leadership For Your Family Balance Sheet
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                What If Your Family Had a Chief Financial Officer?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Large corporations employ a CFO to ensure capital allocation, cash buffers, and debt structures work in sync. We bring that exact institutional discipline to your personal household.
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
                  Single Point of Strategic Accountability
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No more coordinating separately between your tax CA, stock broker, insurance agent, and bank manager. We act as your primary fiduciary strategist.
                </p>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                  Life Coaching + Behavioral Discipline
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The biggest determinant of long-term returns is not stock-picking; it is emotional coaching during market peaks and corrections to align wealth with life purpose.
                </p>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1F44]">
                  Multi-Generational Stewardship
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We work not only with you, but prepare your children and heirs to inherit capital with prudence, financial literacy, and family harmony.
                </p>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              to="/personal-cfo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1F44] hover:text-[#C9A84C] transition-colors"
            >
              <span>Learn how the Personal CFO engagement works</span>
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
                Structural Hierarchy of Capital
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                The Rathi Wealth Pyramid
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sustainable multi-generational wealth is constructed like a pyramid. Speculation without a defensive foundation leads to sudden ruin; proper sequencing guarantees resilience.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-[#C9A84C]">The Core Rule:</p>
                <p>Never climb to Level 2 (Growth & Aggressive Equity) before Level 1 (Emergency Buffers & Pure Risk Protection) is firmly in place.</p>
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
                  <span>Plan With Clarity · Know Your Numbers</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                  Public Financial Planning Calculators
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Test real scenarios with our deterministic, client-side planning engines. Completely free, no login or mobile number required.
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
                      <span>Launch Tool</span>
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
                  Signature Diagnostic
                </span>
                <h4 className="text-lg font-serif font-bold text-[#0A1F44]">
                  Not sure where to start? Take the 5-Minute Financial Health Checkup
                </h4>
                <p className="text-xs text-slate-600">
                  Score your emergency funds, protection adequacy, debt burden, and succession readiness.
                </p>
              </div>
              <Link
                to="/calculators/financial-health-check"
                className="shrink-0 px-6 py-3 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Take Checkup Now</span>
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
                Comprehensive Advisory Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                Five Pillars of Lifelong Wealth Management
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From your first SIP to intergenerational succession, our advisory architecture covers every stage of your financial journey.
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
                          Ideal For:
                        </span>
                        <p className="text-xs text-slate-800 font-medium mt-1">
                          {current.idealFor}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        Key Advisory Deliverables:
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
                          <span>Explore full service details</span>
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
                  Authentic Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44]">
                  "Financial advisory is not just about managing money; it is about transforming lives."
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
                  <span>Meet all three leaders on the About Us page</span>
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
                  Financial Literacy Without Product Pitch
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                  Investor Awareness Programmes
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We have conducted 100+ non-commercial investor workshops across top corporate campuses and organizations, empowering thousands of employees with actionable personal finance basics.
                </p>
              </div>
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0A1F44] bg-white hover:bg-slate-100 transition-colors border border-slate-200 shrink-0 self-start md:self-auto"
              >
                <span>Explore Workshop Tracks</span>
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
                  Education & Insights
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                  Knowledge Centre
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Objective financial planning articles tackling real investor questions, compounding mathematics, and family wealth preservation.
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
                Client Fiduciary Relationships
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                What Families Say About Rathi Wealth
              </h2>
              <p className="text-sm text-slate-600">
                Real testimonials from senior professionals and business founders who have partnered with us across market cycles.
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
                Clarity & Transparency
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
              Begin Your Family Office Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white max-w-2xl mx-auto leading-tight mt-2">
              Ready to bring complete order to your family wealth?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mt-2">
              Visit our office in Vijay Nagar, Indore or connect via video call for a calm, 30-minute discovery conversation. No sales pitch, no pushy follow-ups.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#C9A84C] hover:bg-[#b8973d] text-[#0A1F44] font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schedule Confidential Discovery Call</span>
              </motion.button>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/20"
              >
                Indore Office Location & Details
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
