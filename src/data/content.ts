import { CredibilityMetric, ServicePillar, Testimonial, WorkshopItem, CalculatorMeta, TeamMember } from '../types';

export const BRAND_INFO = {
  name: 'Rathi Wealth',
  legalName: 'Rathi Wealth Private Limited',
  tagline: 'Wealth For Generations',
  badge: 'AMFI Registered Mutual Fund Distributor',
  logo: '/images/logo-tight.png',
  logoIcon: '/images/logo-icon.png',
  logoLight: '/images/logo-light.png',
  logoIconLight: '/images/logo-icon-light.png',
  logoOriginal: '/images/logo.png',
  shortBio: 'At Rathi Wealth, we redefine financial empowerment, going beyond the traditional method by seamlessly blending exceptional financial services with life coaching. This unique approach ensures your wealth aligns with your aspirations, unlocking your full potential and helping you achieve holistic financial well-being.',
  founder: {
    name: 'Umesh Rathi',
    title: 'MD & CEO',
    credentials: 'LLB, MBA, CFP®, CWM®, CLC, CTEP®',
    experienceYears: '20+',
    bio: 'With an LLB, MBA, and the distinction of becoming Central India’s first Certified Financial Planner (CFP®) in 2008, Umesh set out to redefine financial planning. His impressive credentials—Chartered Wealth Manager (CWM®), Certified Life Coach (CLC), and Certified Trust and Estate Planner (CTEP®)—are a testament to his dedication to staying ahead of the curve. For over 20 years, Umesh has helped countless professionals, from doctors to business owners, craft personalized financial plans that not only protect their wealth but align their finances with their life’s purpose.',
  },
  contact: {
    email: 'service@rathiwealth.in',
    secondaryEmail: 'v2rathiwealth@gmail.com',
    phone: '+91 88173 58846',
    rawPhone: '8817358846',
    whatsapp: '918817358846',
    officeAddress: 'Rathi Wealth Private Limited, 222, Krishna Business Center, Plot No. 11 PU4, Vijay Nagar, Indore, Madhya Pradesh 452010',
    shortAddress: '222, Krishna Business Center, Vijay Nagar, Indore, MP 452010',
    officeHours: 'Monday – Friday: 10:00 AM – 06:00 PM | Saturday: 10:00 AM – 04:00 PM (Sunday Closed)',
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'umesh-rathi',
    name: 'Umesh Rathi',
    role: 'MD & CEO',
    credentials: 'LLB, MBA, CFP®, CWM®, CLC, CTEP®',
    experience: '20+ Years Experience',
    image: '/images/team/umesh-rathi.png',
    bio: [
      'Rathi Wealth was founded with a deep belief: financial planning and wealth management are not just about managing money; they are about transforming lives.',
      'In the early 2000s, while working with one of India’s leading broking firms, Umesh Rathi witnessed a critical gap in the industry: financial services were transactional, pushing products rather than solving real-life challenges.',
      'With an LLB, MBA, and the distinction of becoming Central India’s first Certified Financial Planner (CFP®) in 2008, Umesh set out to redefine financial planning. His credentials—Chartered Wealth Manager (CWM®), Certified Life Coach (CLC), and Certified Trust and Estate Planner (CTEP®)—are a testament to his dedication to staying ahead of the curve.',
      'For over 20 years, Umesh has helped countless professionals, from doctors to business owners, craft personalized financial plans that protect wealth and align finances with life’s purpose. In 2021, Umesh founded Rathi Wealth with a vision to educate, empower, and uplift families—helping individuals build legacies that will last for generations.',
    ],
    quote: 'True financial freedom isn’t just about wealth; it’s about creating a future that allows clients to live with confidence, security, and peace of mind.',
    specialization: [
      'Central India’s 1st CFP® (2008)',
      'Holistic Wealth Architecture',
      'Life Coaching & Financial Alignment',
      'Intergenerational Legacy Planning',
    ],
  },
  {
    id: 'vibhuti-rathi',
    name: 'Vibhuti Rathi',
    role: 'Director',
    credentials: 'QPFP, MCM, MSc (IT), CDAC',
    experience: '20+ Years Experience',
    image: '/images/team/vibhuti-rathi.png',
    bio: [
      'Vibhuti Rathi brings continuity, discipline, and long-term thinking to the heart of Rathi Wealth.',
      'With over two decades of experience spanning education, technology, and financial systems, she contributes a rare blend of academic rigour and practical judgement. She holds a Master’s in Computer Management (MCM), an MSc in Information Technology, and has completed advanced CDAC programs—a foundation that has shaped her methodical, systems-driven approach, grounded in precision and clarity.',
      'Her transition into personal finance was guided by the same belief that defines Rathi Wealth: complexity should be resolved quietly, and decisions should be built to last. As a Qualified Personal Finance Professional (QPFP), she brings structure, calm, and quiet confidence to every framework the firm builds.',
      'As Director at Rathi Wealth, Vibhuti plays a pivotal role in strengthening the firm’s internal architecture—ensuring that every process, system, and client experience reflects consistency, care, and trust.',
    ],
    quote: 'Legacies are not sustained by visibility, but by reliability. Her work is measured. Her approach is deliberate. Her impact is enduring.',
    specialization: [
      'Qualified Personal Finance Professional (QPFP)',
      'Internal Architecture & Systems',
      'Operational Precision & Fiduciary Care',
      'Long-Term Client Governance',
    ],
  },
  {
    id: 'raghav-rathi',
    name: 'Raghav Rathi',
    role: 'Head Of Business Development & Investor Awareness',
    credentials: 'Business Strategy & Client Experience',
    experience: 'Client Relations & Investor Education',
    image: '/images/team/raghav-rathi.png',
    bio: [
      'Raghav Rathi focuses on how families experience Rathi Wealth—because enduring relationships are built on clarity, consistency, and trust.',
      'He leads business development, client experience, and investor awareness, ensuring every interaction is measured, thoughtful, and aligned with the firm’s values. His work places education before persuasion, and understanding before complexity—so families engage with confidence, never pressure.',
      'Blending financial insight with clear communication and strategic perspective, Raghav helps Rathi Wealth connect with families in a manner that is respectful, relevant, and enduring.',
      'Curious by nature and committed to continuous learning, he brings a modern outlook while remaining deeply respectful of the discipline and responsibility that wealth stewardship demands. For those seeking a long-term partner defined by trust, continuity, and discretion, Raghav ensures the experience feels considered, credible, and reassuring.',
    ],
    quote: 'Enduring relationships are built on clarity, consistency, and trust. Education comes before persuasion, and understanding before complexity.',
    specialization: [
      'Client Experience & Relationship Stewardship',
      'Investor Awareness & Literacy Campaigns',
      'Educational Outreach for Next-Gen Heirs',
      'Strategic Fiduciary Communication',
    ],
  },
];


export const AUTHENTIC_STATS = {
  experienceYears: '25+',
  familiesAdvised: '150+',
  aum: '₹200Cr+',
  peopleEducated: '3000+',
  articlesPublished: '200+',
  workshopsConducted: '70+',
  target2028Individuals: '10,000+',
  target2028Families: '1,000+',
};

export const BRAND_STATEMENTS = {
  vision: 'At Rathi Wealth, we envision to be more than just a financial service firm—to be lifelong partners for individuals and families, empowering them with the clarity, confidence and tools to live a financially secure, independent, peaceful and meaningful life.',
  mission: 'By 2028, we aim to spread financial literacy by educating 10,000+ individuals and helping 1,000+ families in their overall financial wellbeing by empowering them and building lasting legacies.',
  motto: 'Empowering Dreams, Nurturing Prosperity',
  philosophy: 'Guided by our Wealth Pyramid philosophy, we build from the foundation up: security before growth, clarity before complexity, and intention before accumulation.',
  threePrinciples: [
    { title: 'Uncompromising Ethics', desc: 'Every recommendation is tested against one question: Is this right, not just now, but over time?' },
    { title: 'Absolute Transparency', desc: 'Zero hidden motives, clear reporting, and structured insights so you remain in complete control.' },
    { title: 'Long-Term Alignment', desc: 'We think like an owner, protect like a trustee, and advise like a Personal CFO across generations.' },
  ],
};

export const CREDIBILITY_METRICS: CredibilityMetric[] = [
  {
    value: '25+',
    label: 'Years Industry Experience',
    description: 'Guiding families across multiple market cycles with steady fiduciary stewardship.',
  },
  {
    value: '150+',
    label: 'Happy Families',
    description: 'Deep, multi-generational advisory partnerships built on trust and discretion.',
  },
  {
    value: '₹200Cr+',
    label: 'Asset Under Management (AUM)',
    description: 'Disciplined capital allocation across mutual funds and long-term wealth portfolios.',
  },
  {
    value: '3000+',
    label: 'People Educated',
    description: 'Empowered through financial literacy workshops and investor education seminars.',
  },
  {
    value: '200+',
    label: 'Articles Published',
    description: 'Thought leadership and financial literacy columns simplifying wealth creation.',
  },
  {
    value: '70+',
    label: 'Investor Awareness Programmes',
    description: 'Educational masterclasses conducted across corporate, trade, and campus forums.',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'plan',
    name: 'PLAN',
    tagline: 'Strategic Clarity Before Capital Deployment',
    summary: 'A thorough architectural assessment of your cash flows, net worth, risk capacity, and life milestones.',
    offerings: [
      'Comprehensive Financial Diagnostic & Net Worth Audit',
      'Life Goal Setting & Capital Timeline Architecture',
      'Cash Flow Optimization & Surplus Allocation',
      'Liability & Debt Structure Review',
    ],
    idealFor: 'Professionals and families needing a unified, coordinated financial roadmap.',
  },
  {
    id: 'grow',
    name: 'GROW',
    tagline: 'Disciplined, Goal-Indexed Wealth Creation',
    summary: 'Asset allocation designed for long-term compound growth without succumbing to market noise.',
    offerings: [
      'Systematic Investment Planning (SIP) Architecture',
      'Diversified Mutual Fund Portfolio Curation',
      'Periodic Portfolio Rebalancing & Risk Re-alignment',
      'Tax-Harvesting & Asset Location Strategies',
    ],
    idealFor: 'Long-term investors seeking consistent, inflation-beating wealth accumulation.',
  },
  {
    id: 'protect',
    name: 'PROTECT',
    tagline: 'Safeguarding What You Have Built',
    summary: 'Defensive moats that shield your family and balance sheet against catastrophic health, mortality, or economic shocks.',
    offerings: [
      'Pure Term Life Insurance Need Analysis (Human Life Value)',
      'Family Floater & Critical Illness Health Protection',
      'Liquidity-Tiered Emergency Reserve Architecture',
      'Personal Risk & Contingency Defense Strategy',
    ],
    idealFor: 'Families with dependents, major liabilities, or high human capital value.',
  },
  {
    id: 'prepare',
    name: 'PREPARE',
    tagline: 'Securing Major Life Transitions',
    summary: 'Milestone-specific funding mechanisms for retirement independence, child education, and career changes.',
    offerings: [
      'Inflation-Indexed Retirement Independence Modeling',
      'Overseas & Higher Education Funding Roadmap',
      'Systematic Withdrawal Planning (SWP) for Post-Retirement Cash Flows',
      'Tax Optimization Under Old & New Tax Regimes',
    ],
    idealFor: 'Mid-career professionals, parents, and those within 10–15 years of retirement.',
  },
  {
    id: 'preserve',
    name: 'PRESERVE',
    tagline: 'Wealth For Generations',
    summary: 'Intergenerational wealth structuring that ensures frictionless transmission, estate continuity, and family harmony.',
    offerings: [
      'Estate Planning & Succession Architecture',
      'Will Guidance, Drafting Frameworks & Asset Registries',
      'Comprehensive Bank & Investment Nomination Review',
      'Family Governance & Next-Generation Financial Coaching',
    ],
    idealFor: 'Established families, senior executives, and business owners looking ahead.',
  },
];

export const WEALTH_PYRAMID_LEVELS = [
  {
    step: '04',
    title: 'Preserve & Transition',
    theme: 'Wealth For Generations',
    focus: 'Estate architecture, Will guidance, smooth family transmission, family governance.',
    color: 'border-amber-400 bg-amber-50/50',
  },
  {
    step: '03',
    title: 'Prepare & Optimize',
    theme: 'Transition Independence',
    focus: 'Retirement corpus longevity, higher education funding, tax minimization.',
    color: 'border-blue-300 bg-blue-50/50',
  },
  {
    step: '02',
    title: 'Grow & Accumulate',
    theme: 'Compounding Velocity',
    focus: 'Goal-indexed SIPs, mutual fund diversification, disciplined portfolio rebalancing.',
    color: 'border-emerald-300 bg-emerald-50/50',
  },
  {
    step: '01',
    title: 'Protect & Plan',
    theme: 'The Bedrock Foundation',
    focus: '6-month emergency reserve, adequate term life cover, independent health insurance.',
    color: 'border-slate-300 bg-slate-50/80',
  },
];

export const CALCULATORS_CATALOG: CalculatorMeta[] = [
  {
    id: 'sip',
    slug: 'sip-calculator',
    name: 'SIP Calculator',
    category: 'wealth',
    tagline: 'Harness the power of monthly disciplined compounding',
    description: 'Estimate the future value of your monthly systematic investment plan across different tenures and assumed return rates.',
    priority: 'P0',
  },
  {
    id: 'retirement',
    slug: 'retirement-calculator',
    name: 'Retirement Planning Calculator',
    category: 'retirement',
    tagline: 'Know your retirement number adjusted for inflation',
    description: 'Calculate the true corpus needed to sustain your desired lifestyle through 25–30 years of post-retirement living.',
    priority: 'P0',
  },
  {
    id: 'financial-health',
    slug: 'financial-health-check',
    name: 'Financial Health Checkup',
    category: 'wealth',
    tagline: 'How Financially Ready Are You? (Signature Tool)',
    description: 'An educational diagnostics scorecard measuring emergency funds, protection adequacy, debt ratio, and estate preparedness.',
    priority: 'P0',
  },
  {
    id: 'life-insurance',
    slug: 'life-insurance-calculator',
    name: 'Life Insurance Need Calculator',
    category: 'protection',
    tagline: 'Objective human life value & family dependency calculation',
    description: 'Identify your true protection gap based on living expenses, outstanding liabilities, and future milestones.',
    priority: 'P0',
  },
  {
    id: 'lumpsum',
    slug: 'lumpsum-calculator',
    name: 'Lumpsum Calculator',
    category: 'wealth',
    tagline: 'Project the multi-year growth of one-time capital',
    description: 'Illustrate how a one-time capital deployment compounds over 3, 5, 10, or 20 years.',
    priority: 'P0',
  },
  {
    id: 'goal-planning',
    slug: 'goal-planning-calculator',
    name: 'Goal Planning Calculator',
    category: 'goals',
    tagline: 'Convert future dreams into monthly actionable SIPs',
    description: 'Calculate the inflation-adjusted cost of your target life goal and the exact monthly investment required to reach it.',
    priority: 'P1',
  },
  {
    id: 'swp',
    slug: 'swp-calculator',
    name: 'SWP Calculator (Systematic Withdrawal)',
    category: 'retirement',
    tagline: 'Plan predictable cash flows without eroding capital prematurely',
    description: 'Test monthly retirement withdrawals against portfolio returns to evaluate corpus longevity and balance preservation.',
    priority: 'P1',
  },
  {
    id: 'sip-top-up',
    slug: 'sip-top-up-calculator',
    name: 'SIP Top-Up Calculator',
    category: 'wealth',
    tagline: 'See the exponential impact of increasing SIPs with your annual raise',
    description: 'Demonstrate how a modest 10% annual step-up drastically boosts your final accumulation compared to a flat SIP.',
    priority: 'P1',
  },
  {
    id: 'child-education',
    slug: 'child-education-calculator',
    name: 'Child Education Calculator',
    category: 'goals',
    tagline: 'Factor in 9-10% education inflation for future university costs',
    description: 'Project higher education expenses for your child and determine the disciplined monthly funding required today.',
    priority: 'P1',
  },
  {
    id: 'cost-of-delay',
    slug: 'cost-of-delay-calculator',
    name: 'Cost of Delay Calculator',
    category: 'wealth',
    tagline: 'Understand the hidden price of waiting another year',
    description: 'Visualize how delaying your investment decision by 1, 3, or 5 years costs lakhs in lost compounding momentum.',
    priority: 'P1',
  },
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'corporate-wellness',
    title: 'Financial Wellness in the Modern Workplace',
    targetAudience: 'IT & Corporate Employees, Mid to Senior Managers',
    duration: '90 Minutes Interactive + Q&A',
    description: 'A no-product, strictly educational session designed to help salaried professionals overcome tax season panic, optimize ESOPs/bonuses, and build automated investment engines.',
    keyTakeaways: [
      'The 50/30/20 cash flow framework tailored for Indian metro living',
      'De-biasing investment choices: Moving away from endowment policies and speculative bets',
      'The mechanics of inflation: Why fixed deposits guarantee negative real returns',
      'Step-by-step checklist to protect family finances before starting equity SIPs',
    ],
  },
  {
    id: 'wealth-pyramid-session',
    title: 'Wealth For Generations: The Personal CFO Blueprint',
    targetAudience: 'Business Owners, CXOs, High-Net-Worth Families',
    duration: '2 Hours Masterclass',
    description: 'Holistic multi-generational planning addressing the unique challenges of family business balance sheets, risk segregation, and estate transmission.',
    keyTakeaways: [
      'Separating personal family wealth from business liabilities and commercial risks',
      'Structuring succession: Wills, nominations, family trusts, and dispute prevention',
      'Strategic asset allocation across domestic equities, fixed income, and liquidity pools',
      'The psychological traps of sudden liquidity events (exits, buybacks, inheritance)',
    ],
  },
  {
    id: 'first-time-investor',
    title: 'First-Time Investor Bootcamp',
    targetAudience: 'Young Professionals, Graduate Trainees & College Campuses',
    duration: '60 Minutes',
    description: 'Demystifying the Indian capital markets, mutual funds, and power of starting early in your twenties.',
    keyTakeaways: [
      'The Rule of 72 and the true mathematics of starting at age 23 vs 30',
      'Understanding Mutual Funds: Direct vs Regular, Equity vs Debt, Large vs Mid Cap',
      'The danger of "Finfluencer" hype, crypto illusions, and F&O trading losses',
      'Opening your first automated SIP on salary credit day',
    ],
  },
  {
    id: 'women-wealth',
    title: 'Women & Wealth: Taking Command of Your Financial Future',
    targetAudience: 'Women Professionals, Entrepreneurs, and Homemakers',
    duration: '75 Minutes',
    description: 'An empowering, jargon-free dialogue on building personal financial independence, managing risk, and claiming an equal seat at the investment table.',
    keyTakeaways: [
      'Overcoming traditional financial conditioning and risk aversion',
      'Creating independent emergency and retirement reserves in your own name',
      'Evaluating insurance, gold, real estate, and equity from a modern perspective',
      'Practical tools for confident financial dialogue with spouses and family elders',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Before meeting Umesh Rathi, our family had 18 disparate mutual fund folios, random insurance policies, and no coherent strategy. Umesh brought the discipline of a corporate CFO to our household finances. Now every rupee has a specific purpose and destination.',
    author: 'Rajesh Agarwal',
    designation: 'Managing Director, Precision Tech Components',
    city: 'Pune',
    associationYears: '12 years client',
  },
  {
    quote: 'As a surgeon with an intense operating schedule, I have zero bandwidth to follow daily financial news or rebalance portfolios. Rathi Wealth acts as our fiduciary guardian. Their calm guidance during market crashes has kept us from making impulsive mistakes.',
    author: 'Dr. Sunita Kulkarni',
    designation: 'Senior Consultant Surgeon',
    city: 'Mumbai',
    associationYears: '9 years client',
  },
  {
    quote: 'What sets Rathi Wealth apart is their complete lack of product pushing. When I received an ESOP buyout, Umesh advised me to park funds conservatively and pay off our high-interest debt first before adding a single new equity mutual fund.',
    author: 'Anish Mehta',
    designation: 'VP of Engineering, Global SaaS Firm',
    city: 'Bengaluru',
    associationYears: '7 years client',
  },
  {
    quote: 'Preserving wealth across three generations is far harder than creating it. Rathi Wealth helped us structure our family Will, clear up archaic nominations, and align our grandchildren’s education trusts. An invaluable partner for any business family.',
    author: 'Arvind Sharma',
    designation: 'Founder & Patriarch, Sharma Group',
    city: 'Indore',
    associationYears: '14 years client',
  },
];

export const FAQS = [
  {
    question: 'What is the "Personal CFO" concept and how does it differ from a mutual fund distributor?',
    answer: 'A traditional distributor typically focuses on selling individual products (a fund scheme or an insurance policy). In contrast, a Personal CFO looks at your entire balance sheet holistically: your cash flows, emergency reserves, tax liability, family life goals, risk protection, and estate legacy. We ensure all parts of your financial life work in concert rather than in chaotic silos.',
  },
  {
    question: 'Are calculator results guaranteed returns?',
    answer: 'No. All calculations on this website are strictly illustrative and educational models based on mathematical compounding formulas and standard assumptions. Mutual fund and market-linked investments carry risk, and past performance is never a guarantee of future returns. We never offer or market assured-return schemes.',
  },
  {
    question: 'Do you charge for using the financial calculators or reading the articles?',
    answer: 'No. The calculators and Knowledge Centre articles are 100% free public utilities. You can run as many calculations as you need with zero registration, login, or personal data surrender required.',
  },
  {
    question: 'I already have existing investments in bank FDs, stocks, and mutual funds. Can Rathi Wealth review them?',
    answer: 'Yes. One of our core initial engagements is a Comprehensive Portfolio Diagnostic. We review your existing holdings for overlap, hidden expense ratios, asset allocation imbalances, and risk alignment before recommending any structural changes.',
  },
  {
    question: 'How do we start a consultation with Rathi Wealth?',
    answer: 'You can request an initial conversation by clicking the "Schedule a Consultation" button, sending an email to v2rathiwealth@gmail.com, or messaging us directly via WhatsApp. We begin with a calm, 30-minute discovery call to see if our philosophies align.',
  },
];

export const COMPLIANCE_DISCLAIMER =
  'This calculator and educational content is for illustrative and educational purposes only. Results are based on the mathematical assumptions entered and may differ from actual outcomes. Investment returns are not guaranteed. Mutual fund investments are subject to market risks. Please read scheme-related documents carefully before investing.';
