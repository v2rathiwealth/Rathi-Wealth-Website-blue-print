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
  shortBio: 'At Rathi Wealth, we believe managing your money should give you complete peace of mind, not stress. We act as your family’s Personal CFO — helping you protect your savings, grow your wealth with disciplined SIPs, plan for your children’s future and retirement, and pass on your hard-earned assets safely to the next generation.',
  founder: {
    name: 'Umesh Rathi',
    title: 'MD & CEO',
    credentials: 'LLB, MBA, CFP®, CWM®, CLC, CTEP®',
    experienceYears: '20+',
    bio: 'With an LLB, MBA, and the distinction of becoming Central India’s first Certified Financial Planner (CFP®) in 2008, Umesh Rathi has spent over 20 years guiding families, doctors, and business owners. He believes true wealth management is not about chasing stock tips or buying random policies, but about building a simple, solid plan that gives your family total financial security.',
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
      'Umesh started Rathi Wealth with one clear mission: to help families manage their money with complete honesty, simplicity, and confidence.',
      'In the early 2000s, while working with leading financial firms, Umesh noticed a big problem: most institutions only pushed products to hit sales targets, rather than understanding what a family actually needs.',
      'With an LLB, an MBA, and becoming Central India’s first Certified Financial Planner (CFP®) in 2008, Umesh decided to change that. Over the past 20+ years, he has helped hundreds of professionals, doctors, and business owners create simple, reliable financial plans.',
      'In 2021, he founded Rathi Wealth to serve as a true Personal CFO for families — combining smart investment planning with life coaching so money supports your family’s real dreams.',
    ],
    quote: 'True financial freedom isn’t just about having money in the bank. It is about knowing your family is completely safe, your goals are planned for, and you can sleep peacefully at night.',
    specialization: [
      'Central India’s 1st Certified Financial Planner (2008)',
      'Personal CFO for Families & Business Owners',
      'Goal-Based Mutual Funds & SIP Planning',
      'Safe Wealth Transfer to the Next Generation',
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
      'Vibhuti brings structure, discipline, and dependable systems to Rathi Wealth, ensuring every family enjoys a seamless, hassle-free experience.',
      'With over two decades of background in education, information technology, and personal finance as a Qualified Personal Finance Professional (QPFP), she oversees operations, compliance, and client service.',
      'She believes good financial planning should be stress-free: investments should be executed smoothly, reports should be easy to understand, and your family records should always be kept up to date.',
      'As Director, Vibhuti ensures that Rathi Wealth operates with total transparency, prompt service, and the highest standards of client care.',
    ],
    quote: 'A good financial plan is built on reliability. When systems are smooth, transparent, and easy to understand, families feel completely at ease.',
    specialization: [
      'Qualified Personal Finance Professional (QPFP)',
      'Smooth, Paperless Investment Operations',
      'Regular Portfolio Reviews & Timely Updates',
      'Clear, Transparent Record Keeping',
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
      'Raghav leads investor education and client relationships at Rathi Wealth, focusing on making money matters simple, interesting, and easy to understand for everyone.',
      'He believes in education before investment: people should always understand where their money is going, how compounding works, and why patience beats market timing.',
      'Raghav organizes free investor awareness workshops for corporate teams, colleges, and community groups, helping young professionals and families start their investment journeys with confidence.',
      'He ensures that every interaction with Rathi Wealth is warm, respectful, and free of sales pressure — giving you clear answers to every question you have.',
    ],
    quote: 'Investing doesn’t need to be complicated. When you understand the basics and start early, compounding does all the hard work for you.',
    specialization: [
      'Simple, Jargon-Free Investor Education',
      'First-Time Investor & SIP Guidance',
      'Helping Young Professionals Start Early',
      'Warm, Friendly Client Support',
    ],
  },
];

export const AUTHENTIC_STATS = {
  experienceYears: '25+',
  familiesAdvised: '150+',
  aum: '₹200Cr+',
  peopleEducated: '3,000+',
  articlesPublished: '200+',
  workshopsConducted: '70+',
  target2028Individuals: '10,000+',
  target2028Families: '1,000+',
};

export const BRAND_STATEMENTS = {
  vision: 'To be a lifelong, trusted financial partner for families — giving you the clarity, confidence, and simple tools to enjoy a secure and stress-free life.',
  mission: 'By 2028, we aim to teach simple money management to 10,000+ individuals and guide 1,000+ families to complete financial peace of mind.',
  motto: 'Empowering Dreams, Nurturing Prosperity',
  philosophy: 'Safety first, growth second: We build your finances like a house — strong foundations (protection and emergency funds) before building the upper floors (investments and growth).',
  threePrinciples: [
    { title: '100% Unbiased Advice', desc: 'We recommend only what is right for your family. No product sales quotas, no pushing unwanted policies.' },
    { title: 'Crystal Clear Transparency', desc: 'Zero hidden fees, zero confusing jargon. You always know exactly where your money is invested and why.' },
    { title: 'With You For The Long Run', desc: 'We stay by your side through market ups and downs, acting as your trusted Personal CFO across generations.' },
  ],
};

export const CREDIBILITY_METRICS: CredibilityMetric[] = [
  {
    value: '25+',
    label: 'Years Guiding Families',
    description: 'Guiding families across market ups and downs with steady, honest advice.',
  },
  {
    value: '150+',
    label: 'Happy Families',
    description: 'Long-term advisory relationships built on personal care and deep trust.',
  },
  {
    value: '₹200Cr+',
    label: 'Savings & Wealth Guided',
    description: 'Carefully managed across mutual funds and disciplined long-term investments.',
  },
  {
    value: '3,000+',
    label: 'People Educated',
    description: 'Empowered through simple, practical financial literacy sessions and workshops.',
  },
  {
    value: '200+',
    label: 'Articles & Guides Published',
    description: 'Breaking down complicated financial topics into everyday, easy language.',
  },
  {
    value: '70+',
    label: 'Free Investor Workshops',
    description: 'Conducted for corporate offices, colleges, and community groups.',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'plan',
    name: 'PLAN',
    tagline: 'A Clear Roadmap For Your Money',
    summary: 'We look at your current income, expenses, savings, and loans to build a simple, step-by-step financial plan for your family.',
    offerings: [
      'Complete check-up of your current savings, investments, and loans',
      'Clear timelines for your family goals (buying a home, children, retirement)',
      'Finding extra savings every month without hurting your current lifestyle',
      'A practical plan to clear high-interest debts and loans faster',
    ],
    idealFor: 'Families and working professionals who want to get organized and stop stressing about money.',
  },
  {
    id: 'grow',
    name: 'GROW',
    tagline: 'Disciplined Wealth Creation with SIPs',
    summary: 'Grow your savings steadily over time through well-researched mutual funds picked specifically to match your family goals.',
    offerings: [
      'Setting up automated monthly SIPs that invest right on salary day',
      'Choosing the right mix of equity and debt funds for your risk profile',
      'Regular portfolio check-ups so your investments stay on track',
      'Smart tax-saving investments under 80C and LTCG limits',
    ],
    idealFor: 'Anyone looking to beat inflation and build serious long-term wealth without speculating.',
  },
  {
    id: 'protect',
    name: 'PROTECT',
    tagline: 'Safety First: Shield Your Loved Ones',
    summary: 'Ensure that an unexpected medical emergency or illness never drains your hard-earned savings.',
    offerings: [
      'Pure term life insurance to secure your family’s lifestyle if you are not around',
      'Adequate health insurance cover with super top-up plans for high medical costs',
      'Setting up a 6-month emergency cash buffer in safe, easy-to-access funds',
      'Checking that insurance is kept separate from investments (avoiding low-return ULIPs)',
    ],
    idealFor: 'Anyone with family dependents, home loans, or future financial responsibilities.',
  },
  {
    id: 'prepare',
    name: 'PREPARE',
    tagline: 'Ready for Big Milestones: Education & Retirement',
    summary: 'Be 100% prepared when big life moments arrive — from sending your child to college to retiring with a steady monthly income.',
    offerings: [
      'Calculating the real future cost of higher education considering rising fees',
      'Building a retirement fund that gives regular monthly income like a pension',
      'Systematic Withdrawal Plans (SWP) for tax-efficient monthly income after retirement',
      'Checking how your tax liability changes under the Old and New tax regimes',
    ],
    idealFor: 'Parents planning their child’s higher education and professionals planning a peaceful retirement.',
  },
  {
    id: 'preserve',
    name: 'PRESERVE',
    tagline: 'Leaving a Lasting Legacy for Your Children',
    summary: 'Make sure your hard-earned wealth passes to your family smoothly, without confusing court paperwork or disputes.',
    offerings: [
      'Writing a clear, legally sound Will so your wishes are respected',
      'Checking and updating nominations across all bank accounts and mutual funds',
      'Setting up simple family trust structures for special needs if required',
      'Teaching your children the basics of good money habits so they manage wealth responsibly',
    ],
    idealFor: 'Business owners and senior professionals who want to ensure harmony and ease for their family.',
  },
];

export const WEALTH_PYRAMID_LEVELS = [
  {
    step: '04',
    title: 'Preserve & Transfer',
    theme: 'Wealth For Generations',
    focus: 'Writing a clear Will, updating bank nominations, and transferring wealth smoothly to your children.',
    color: 'border-amber-400 bg-amber-50/50',
  },
  {
    step: '03',
    title: 'Prepare for Milestones',
    theme: 'Child Education & Retirement',
    focus: 'Building your child’s college fund and ensuring a worry-free monthly income after you retire.',
    color: 'border-blue-300 bg-blue-50/50',
  },
  {
    step: '02',
    title: 'Grow with Discipline',
    theme: 'Monthly SIPs & Mutual Funds',
    focus: 'Investing systematically every month in good mutual funds chosen specifically for your goals.',
    color: 'border-emerald-300 bg-emerald-50/50',
  },
  {
    step: '01',
    title: 'Protect What You Have',
    theme: 'The Bedrock Safety Net',
    focus: '6-month emergency fund, pure term life cover, and strong health insurance so emergencies never derail you.',
    color: 'border-slate-300 bg-slate-50/80',
  },
];

export const CALCULATORS_CATALOG: CalculatorMeta[] = [
  {
    id: 'sip',
    slug: 'sip-calculator',
    name: 'SIP Calculator',
    category: 'wealth',
    tagline: 'See how small monthly savings grow into big wealth',
    description: 'Find out how much wealth you can build over 5, 10, or 20 years by investing a fixed amount every month.',
    priority: 'P0',
  },
  {
    id: 'retirement',
    slug: 'retirement-calculator',
    name: 'Retirement Planning Calculator',
    category: 'retirement',
    tagline: 'Find your retirement number in 60 seconds',
    description: 'Calculate how much money you will need to live comfortably and maintain your lifestyle after you stop working.',
    priority: 'P0',
  },
  {
    id: 'financial-health',
    slug: 'financial-health-check',
    name: 'Financial Health Checkup',
    category: 'wealth',
    tagline: 'How financially secure are you? (Free 2-minute test)',
    description: 'A simple self-check of your emergency funds, insurance coverage, savings habits, and future preparedness.',
    priority: 'P0',
  },
  {
    id: 'life-insurance',
    slug: 'life-insurance-calculator',
    name: 'Life Insurance Calculator',
    category: 'protection',
    tagline: 'How much life cover does your family really need?',
    description: 'Find the right term insurance cover based on your family’s monthly expenses, home loans, and children’s education.',
    priority: 'P0',
  },
  {
    id: 'lumpsum',
    slug: 'lumpsum-calculator',
    name: 'Lumpsum Calculator',
    category: 'wealth',
    tagline: 'See how a one-time investment multiplies over time',
    description: 'Check how much a one-time sum (bonus, sale proceeds, or savings) will grow over 3, 5, 10, or 15 years.',
    priority: 'P0',
  },
  {
    id: 'goal-planning',
    slug: 'goal-planning-calculator',
    name: 'Goal Planning Calculator',
    category: 'goals',
    tagline: 'Turn your future dream into a monthly SIP target',
    description: 'Enter your goal amount and target year to see the exact monthly investment you need to get there.',
    priority: 'P1',
  },
  {
    id: 'swp',
    slug: 'swp-calculator',
    name: 'SWP Calculator (Monthly Pension)',
    category: 'retirement',
    tagline: 'Plan a steady monthly income from your investments',
    description: 'See how much monthly cash flow you can withdraw from your investments while keeping your money growing.',
    priority: 'P1',
  },
  {
    id: 'sip-top-up',
    slug: 'sip-top-up-calculator',
    name: 'SIP Top-Up Calculator',
    category: 'wealth',
    tagline: 'See what happens when you increase your SIP every year',
    description: 'Discover how increasing your monthly investment by just 10% each year can almost double your final wealth.',
    priority: 'P1',
  },
  {
    id: 'child-education',
    slug: 'child-education-calculator',
    name: 'Child Education Calculator',
    category: 'goals',
    tagline: 'Plan for your child’s college fees without loan stress',
    description: 'Estimate future college fees accounting for rising education costs, and find out how much to start investing today.',
    priority: 'P1',
  },
  {
    id: 'cost-of-delay',
    slug: 'cost-of-delay-calculator',
    name: 'Cost of Delay Calculator',
    category: 'wealth',
    tagline: 'See how much waiting even one year costs you',
    description: 'Visualise how putting off your investment decisions by 1, 2, or 5 years costs lakhs of rupees in lost returns.',
    priority: 'P1',
  },
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'corporate-wellness',
    title: 'Financial Wellness for Working Professionals',
    targetAudience: 'Corporate Employees, IT Professionals & Managers',
    duration: '60–90 Minutes (Interactive + Q&A)',
    description: 'A practical, zero-sales session to help salaried employees understand taxes, avoid costly money mistakes, and start smart monthly SIPs.',
    keyTakeaways: [
      'The simple 50/30/20 rule to budget salary without feeling restricted',
      'Why keeping all your savings in bank FDs loses money to inflation',
      'The difference between pure term insurance and low-return policies',
      'How to set up automated monthly SIPs right after payday',
    ],
  },
  {
    id: 'wealth-pyramid-session',
    title: 'Wealth For Generations: The Personal CFO Masterclass',
    targetAudience: 'Business Owners, Doctors & Family Heads',
    duration: '90 Minutes Masterclass',
    description: 'A focused guide for business families on protecting family savings from business risks, investing surplus cash, and planning smooth inheritance.',
    keyTakeaways: [
      'Keeping family personal savings separate from business liabilities',
      'Writing clear Wills and updating bank nominations to prevent family disputes',
      'Building a safe mix of equity, debt, and liquid reserves',
      'How a Personal CFO model saves time and gives peace of mind',
    ],
  },
  {
    id: 'first-time-investor',
    title: 'First-Time Investor Bootcamp',
    targetAudience: 'Young Professionals & College Graduates',
    duration: '60 Minutes',
    description: 'A fun, easy-to-follow introduction to the stock market, mutual funds, and why starting early in your twenties is your superpower.',
    keyTakeaways: [
      'The magic of compounding: Why starting at 22 beats starting at 32',
      'What are Mutual Funds and how do they work in simple terms',
      'Avoiding dangerous social media stock tips and trading traps',
      'How to start your very first ₹1,000/month SIP',
    ],
  },
  {
    id: 'women-wealth',
    title: 'Women & Wealth: Take Charge of Your Money',
    targetAudience: 'Women Professionals, Entrepreneurs & Homemakers',
    duration: '60–75 Minutes',
    description: 'A friendly, jargon-free session on building financial independence, understanding investments, and managing money with total confidence.',
    keyTakeaways: [
      'Overcoming the fear of numbers and taking charge of personal investments',
      'Building an independent emergency fund and retirement savings',
      'Comparing gold, fixed deposits, and mutual funds objectively',
      'Practical ways to participate in family financial decisions',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Before meeting Umesh Rathi, we had 15 different mutual funds, random insurance policies, and no clear direction. Umesh brought clarity and calm to our family finances. Now every rupee has a clear purpose and destination.',
    author: 'Rajesh Agarwal',
    designation: 'Managing Director, Precision Tech Components',
    city: 'Pune',
    associationYears: '12 years client',
  },
  {
    quote: 'As a surgeon with back-to-back surgeries, I simply don’t have the time to track markets or research funds. Rathi Wealth acts as our family guardian. Their steady guidance during market dips has saved us from impulsive mistakes.',
    author: 'Dr. Sunita Kulkarni',
    designation: 'Senior Consultant Surgeon',
    city: 'Mumbai',
    associationYears: '9 years client',
  },
  {
    quote: 'What makes Rathi Wealth different is that they never push any products. When I received a bonus, Umesh advised me to pay off our high-interest loan first before investing in any new fund. That honest advice won my trust.',
    author: 'Anish Mehta',
    designation: 'VP of Engineering, Global SaaS Firm',
    city: 'Bengaluru',
    associationYears: '7 years client',
  },
  {
    quote: 'Passing on wealth to the next generation without family conflict is very important. Rathi Wealth helped us organize our Will, update all nominations, and plan our grandchildren’s education. Truly invaluable partners.',
    author: 'Arvind Sharma',
    designation: 'Founder, Sharma Group',
    city: 'Indore',
    associationYears: '14 years client',
  },
];

export const FAQS = [
  {
    question: 'What is a "Personal CFO" and how is it different from a regular agent or bank manager?',
    answer: 'A regular agent usually tries to sell you one specific product (like an insurance policy or a fund scheme) to earn a commission. A Personal CFO looks at your family’s complete picture: your monthly savings, emergency cash, health cover, tax planning, children’s goals, retirement, and your Will. We make sure all parts of your money work together smoothly.',
  },
  {
    question: 'Are calculator results guaranteed returns?',
    answer: 'No. All calculators on our website are free educational tools that use mathematical formulas and standard return estimates. Mutual funds and market investments are subject to market risks, and returns are never guaranteed. We never promise fixed returns.',
  },
  {
    question: 'Do I have to pay anything to use the calculators or read the articles?',
    answer: 'Not at all. All calculators and knowledge guides on Rathi Wealth are 100% free. You can use them as much as you like without any login, password, or sharing personal information.',
  },
  {
    question: 'I already have some mutual funds, bank FDs, and insurance policies. Can Rathi Wealth review them?',
    answer: 'Yes, absolutely. We often start by reviewing a family’s existing investments to see if there is overlap, unnecessary high charges, or low-return policies, and help you streamline everything into a simple plan.',
  },
  {
    question: 'How do I start a conversation with Rathi Wealth?',
    answer: 'You can easily request a consultation by clicking "Schedule a Consultation", messaging us on WhatsApp (+91 88173 58846), or emailing service@rathiwealth.in. We begin with a friendly 30-minute introductory call to understand your goals.',
  },
];

export const COMPLIANCE_DISCLAIMER =
  'This calculator and educational content is for illustrative and educational purposes only. Results are based on mathematical assumptions and may differ from actual outcomes. Investment returns are not guaranteed. Mutual fund investments are subject to market risks. Please read scheme-related documents carefully before investing.';
