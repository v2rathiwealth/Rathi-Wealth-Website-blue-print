# Rathi Wealth — Wealth For Generations

A static-first marketing, education, and financial planning website for **Rathi Wealth**, founded by **Umesh Rathi**. Built strictly according to the Product Requirements Document (PRD v1.1), TECH-STACK.md, and IMPLEMENTATION-PLAN.md.

---

## Architecture Decision (V1)
- **Model**: Static-first React + TypeScript + Vite application.
- **Client-Side Calculators**: 100% deterministic, local calculations in TypeScript. No backend, database, network service, or AI runtime dependency.
- **Styling**: Tailwind CSS + custom CSS variables matching the Rathi Wealth design system (`#0A1F44`, `#C9A84C`, `#FFFFFF`, `#E6F1FB`, `#EAF3DE`, `#FAEEDA`, `#B42318`). Zero-pill discipline and typographic metadata hierarchy.
- **Knowledge Centre**: Pure client-side Markdown rendering via `marked`.
- **Zero Client Login**: Per PRD specifications, client login and client portal have been excluded.
- **Lead Capture & Contact**: Soft CTAs after transparent results. Direct communication paths via WhatsApp, phone, email (`v2rathiwealth@gmail.com`), and modal consultation request.

---

## 10 Financial Calculators Included

1. **SIP Calculator** (`/calculators/sip-calculator`): Monthly investment compounding with milestones table and SVG donut distribution.
2. **Lumpsum Calculator** (`/calculators/lumpsum-calculator`): One-time capital projection across holding tenures.
3. **Retirement Planning Calculator** (`/calculators/retirement-calculator`): Inflation-adjusted post-retirement living cost and corpus gap analysis.
4. **Financial Health Checkup** (`/calculators/financial-health-check`): Signature diagnostic scoring emergency buffer, insurance adequacy, debt ratio, and estate readiness.
5. **Life Insurance Need Calculator** (`/calculators/life-insurance-calculator`): Human Life Value (HLV) and needs-based protection calculation.
6. **Goal Planning Calculator** (`/calculators/goal-planning-calculator`): Inflation-indexed goal cost conversion to monthly SIP.
7. **Systematic Withdrawal Plan (SWP) Calculator** (`/calculators/swp-calculator`): Monthly post-retirement cash flow sustainability and corpus longevity.
8. **SIP Top-Up Calculator** (`/calculators/sip-top-up-calculator`): Annual step-up compounding comparison vs flat SIP.
9. **Child Education Calculator** (`/calculators/child-education-calculator`): Factoring 9% higher-education inflation for future university degree costs.
10. **Cost of Delay Calculator** (`/calculators/cost-of-delay-calculator`): Visualizing the wealth penalty of procrastinating investments.

---

## Sitemap & Routes

- `/` — Homepage (Hero, Financial Problem, Personal CFO, Wealth Pyramid, Calculators Showcase, Five Pillars, Credibility, Founder Umesh Rathi, Workshops, Knowledge Centre, Testimonials, FAQs, CTA)
- `/about` — Founder Story, Philosophy, Values, and Credentials
- `/services` — Detailed breakdown of Five Pillars: PLAN, GROW, PROTECT, PREPARE, PRESERVE
- `/personal-cfo` — The Personal CFO Model & 4-Quarter Operating Cadence
- `/calculators` — Central Public Calculators Hub with live filtering & search
- `/calculators/:slug` — Dedicated SEO-friendly page for each calculator
- `/workshops` — Investor Awareness Programmes (Corporate & Campus tracks)
- `/blog` — Knowledge Centre (Articles, search, category filter)
- `/blog/:slug` — Individual Article Pages with Markdown rendering & share links
- `/media` — Media commentary, publications, and masterclasses
- `/contact` — Consultation booking, direct WhatsApp, Phone, and Email
- `/disclaimer` — Statutory SEBI / AMFI Disclosures & Mutual Fund Risk Warnings
- `/privacy` — Privacy Policy & Data Confidentiality Standards
- `/terms` — Terms of Website Service

---

## Local Development & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Type-Check / Lint**:
   ```bash
   npm run lint
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## Regulatory Compliance
Every calculator and educational page carries visible compliance disclaimers:
> *"This calculator and educational content is for illustrative and educational purposes only. Results are based on mathematical assumptions entered and may differ from actual outcomes. Investment returns are not guaranteed. Mutual fund investments are subject to market risks. Please read scheme-related documents carefully before investing."*
