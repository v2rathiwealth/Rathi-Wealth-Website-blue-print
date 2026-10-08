import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, CALCULATORS_CATALOG, SERVICE_PILLARS } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1F44] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group shrink-0" aria-label="Rathi Wealth Home">
              <div className="w-12 h-12 flex items-center justify-center p-1 rounded-lg bg-white/5 border border-[#C9A84C]/30 transition-transform group-hover:scale-105 shrink-0">
                <img
                  src="/images/logo-icon-light.png"
                  alt="Rathi Wealth Emblem"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col shrink-0 min-w-0">
                <span className="text-xl font-serif font-bold text-white tracking-wide whitespace-nowrap leading-tight">
                  RATHI WEALTH
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C9A84C] whitespace-nowrap mt-0.5">
                  Wealth For Generations
                </p>
                <span className="text-[10px] text-slate-400 block mt-0.5 whitespace-nowrap">
                  AMFI Registered Mutual Fund Distributor
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Rathi Wealth Private Limited redefines financial empowerment by seamlessly blending exceptional financial services with life coaching, ensuring wealth aligns with life's purpose.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>222, Krishna Business Center, Plot No. 11 PU4, Vijay Nagar, Indore, Madhya Pradesh 452010</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="hover:text-white transition-colors font-medium">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C9A84C] mb-4">
              Advisory Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    to={`/services#${pillar.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{pillar.name} — {pillar.tagline.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A84C]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/personal-cfo" className="text-amber-200 hover:text-white font-medium flex items-center justify-between group">
                  <span>The Personal CFO Model</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A84C]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial Calculators */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C9A84C] mb-4">
              Planning Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CALCULATORS_CATALOG.slice(0, 5).map((calc) => (
                <li key={calc.id}>
                  <Link
                    to={`/calculators/${calc.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{calc.name.replace(' Calculator', '')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A84C]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/calculators" className="text-[#C9A84C] hover:underline font-medium text-xs">
                  View All 10 Calculators →
                </Link>
              </li>
            </ul>
          </div>

          {/* Education & Trust */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C9A84C] mb-4">
              Education & Firm
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Umesh Rathi
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-white transition-colors">
                  Investor Awareness Workshops
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Knowledge Centre (Articles)
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">
                  Media & Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Compliance Disclosures */}
        <div className="py-8 border-b border-slate-800 text-xs text-slate-400 space-y-3 leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Statutory Regulatory Disclosures:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns. Rathi Wealth acts in a fiduciary capacity and does not guarantee or assure any fixed or minimum investment returns.
            </p>
          </div>
          <p className="pl-6 text-slate-400">
            Calculations, illustrations, and projections displayed on this platform are generated using standard mathematical compound interest and time-value-of-money formulas. They are provided solely for general educational and planning orientation and do not constitute formal investment advice or a specific product recommendation.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Rathi Wealth. All rights reserved. Wealth For Generations.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <Link to="/disclaimer" className="hover:text-slate-200 transition-colors">Disclaimer & Risk Factors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
