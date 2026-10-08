import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { COMPLIANCE_DISCLAIMER } from '../data/content';

export const LegalPage: React.FC = () => {
  const { pathname } = useLocation();

  let activeTab: 'privacy' | 'terms' | 'disclaimer' = 'disclaimer';
  if (pathname.includes('privacy')) activeTab = 'privacy';
  if (pathname.includes('terms')) activeTab = 'terms';

  return (
    <>
      <SEOHead
        title={
          activeTab === 'privacy'
            ? 'Privacy Policy | Rathi Wealth'
            : activeTab === 'terms'
            ? 'Terms of Service | Rathi Wealth'
            : 'Regulatory Disclosures & Disclaimers | Rathi Wealth'
        }
        description="Statutory regulatory disclosures, investment risk factors, terms of service, and privacy standards of Rathi Wealth."
      />

      <section className="bg-[#0A1F44] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Statutory & Legal Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            {activeTab === 'privacy' && 'Privacy Policy'}
            {activeTab === 'terms' && 'Terms of Service'}
            {activeTab === 'disclaimer' && 'Regulatory Disclosures & Investment Disclaimers'}
          </h1>
        </div>
      </section>

      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation tabs */}
          <div className="flex items-center gap-2 mb-8 p-1 bg-white rounded-xl border border-slate-200 shadow-xs max-w-md">
            <Link
              to="/disclaimer"
              className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'disclaimer' ? 'bg-[#0A1F44] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Disclaimers & Risks
            </Link>
            <Link
              to="/privacy"
              className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'privacy' ? 'bg-[#0A1F44] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'terms' ? 'bg-[#0A1F44] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Terms of Service
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
            {activeTab === 'disclaimer' && (
              <>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>SEBI Mandated Disclosure:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
                  </p>
                </div>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  1. Nature of Financial Calculators & Educational Models
                </h2>
                <p>
                  All calculation engines, projected future values, health check scores, and mathematical simulations provided on this website are exclusively for illustrative and educational orientation. They are based on mathematical formulas (compounding, discounting, annuity calculations) and visitor-entered assumptions.
                </p>
                <p>
                  These tools do not constitute an offer, solicitation, or regulated financial product recommendation. Rathi Wealth makes no representation or warranty that any simulated portfolio yield will be attained in reality.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  2. No Guaranteed or Assured Returns
                </h2>
                <p>
                  Rathi Wealth strictly adheres to regulatory codes of conduct. We do not offer, market, or promote any investment scheme offering guaranteed, assured, or fixed returns on market-linked securities or mutual funds. All capital allocations carry market risks, including the potential risk of loss of principal.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  3. Individual Financial Advice
                </h2>
                <p>
                  Before acting on any information or calculation derived from this platform, investors are strongly advised to consult an authorized financial advisor or schedule an individual discovery consultation to assess their specific tax status, risk profile, and liquidity requirements.
                </p>
              </>
            )}

            {activeTab === 'privacy' && (
              <>
                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  1. Client Data Confidentiality
                </h2>
                <p>
                  Rathi Wealth values the privacy of every client and visitor. We do not sell, rent, lease, or share personal contact information with third-party telemarketers, credit bureaus, or commercial advertisers.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  2. Calculator Privacy (No Data Transmission)
                </h2>
                <p>
                  Unlike competitor platforms that force visitors to register phone numbers before revealing financial projections, our calculators run client-side in your web browser. The numeric values entered into the calculators are not logged or stored on our servers unless you voluntarily choose to submit them via our consultation booking form.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  3. Information Collected via Consultation Form
                </h2>
                <p>
                  When you voluntarily request a consultation, we collect your name, email address, phone number, and brief notes. This information is used exclusively by Umesh Rathi and our authorized advisory desk to respond to your inquiry and coordinate your consultation.
                </p>
              </>
            )}

            {activeTab === 'terms' && (
              <>
                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  1. Terms of Website Usage
                </h2>
                <p>
                  By accessing the Rathi Wealth website and public calculators, you agree to these Terms of Service and acknowledge that materials presented herein are for informational and educational purposes.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  2. Intellectual Property
                </h2>
                <p>
                  All content, editorial articles in the Knowledge Centre, custom calculation models, and branding are the intellectual property of Rathi Wealth and Umesh Rathi. Reproduction or syndication without written consent is prohibited.
                </p>

                <h2 className="text-lg font-serif font-bold text-[#0A1F44]">
                  3. Governing Jurisdiction
                </h2>
                <p>
                  Any disputes or legal inquiries arising out of the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
