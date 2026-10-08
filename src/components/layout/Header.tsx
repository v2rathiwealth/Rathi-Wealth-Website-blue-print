import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Calculator, PhoneCall } from 'lucide-react';
import { ConsultationModal } from '../common/ConsultationModal';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Personal CFO', path: '/personal-cfo' },
    { name: 'Calculators', path: '/calculators', highlight: true },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Knowledge Centre', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        {/* Top announcement bar for quiet trust */}
        <div className="bg-[#0A1F44] text-slate-200 text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs">
            <p className="hidden md:block tracking-wide truncate text-slate-300">
              AMFI Registered Mutual Fund Distributor · Wealth For Generations · Over 20 Years Experience
            </p>
            <div className="flex items-center gap-3 sm:gap-4 ml-auto text-slate-300 shrink-0">
              <a
                href="mailto:service@rathiwealth.in"
                className="hover:text-white transition-colors"
                title="Email Rathi Wealth"
              >
                service@rathiwealth.in
              </a>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <a
                href="tel:+918817358846"
                className="hover:text-white transition-colors font-medium"
                title="Call Rathi Wealth"
              >
                +91 88173 58846
              </a>
            </div>
          </div>
        </div>

        {/* Primary Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 xl:gap-6 h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 select-none py-1"
              aria-label="Rathi Wealth Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <img
                  src="/images/logo-icon.png"
                  alt="Rathi Wealth Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col shrink-0 min-w-0">
                <span className="text-lg sm:text-xl xl:text-2xl font-serif tracking-tight text-[#0A1F44] font-bold leading-none whitespace-nowrap">
                  RATHI WEALTH
                </span>
                <span className="text-[9px] sm:text-[10px] xl:text-[11px] tracking-[0.16em] uppercase font-semibold text-[#C9A84C] whitespace-nowrap leading-tight mt-1">
                  Wealth For Generations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink min-w-0" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-2 py-1.5 xl:px-3 xl:py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors rounded-md ${
                      link.highlight
                        ? active
                          ? 'text-[#0A1F44] font-semibold'
                          : 'text-[#0A1F44] font-semibold hover:text-[#C9A84C]'
                        : active
                        ? 'text-[#0A1F44] font-semibold'
                        : 'text-slate-600 hover:text-[#0A1F44] hover:bg-slate-50/80'
                    }`}
                  >
                    <span className="flex items-center gap-1 xl:gap-1.5">
                      {link.highlight && <Calculator className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />}
                      <span>{link.name}</span>
                    </span>
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-0.5 bg-[#C9A84C] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-lg text-xs xl:text-sm font-medium text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C9A84C] shrink-0" />
                <span className="hidden xl:inline">Schedule a Consultation</span>
                <span className="xl:hidden">Book Consultation</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden gap-2 shrink-0">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-3 py-1.5 rounded-md text-xs font-medium text-white bg-[#0A1F44] cursor-pointer"
              >
                Consult
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-[#0A1F44] hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#E6F1FB] text-[#0A1F44] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0A1F44]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.highlight && <Calculator className="w-4 h-4 text-[#C9A84C]" />}
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultationOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#0A1F44] hover:bg-[#162f5e]"
                >
                  <PhoneCall className="w-4 h-4 text-[#C9A84C]" />
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
