import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Home } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Rathi Wealth"
        description="The requested page could not be found."
      />

      <div className="py-24 bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#0A1F44] text-[#C9A84C] font-bold text-2xl flex items-center justify-center mx-auto shadow-md">
            404
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#0A1F44]">Page Not Found</h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              The page you are looking for may have moved or does not exist. Explore our financial calculators or return to the home page.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/calculators"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#C9A84C]" />
              <span>Explore Calculators</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
