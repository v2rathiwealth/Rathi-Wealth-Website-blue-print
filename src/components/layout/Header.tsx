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
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="hidden sm:block tracking-wide">
              AMFI Registered Mutual Fund Distributor · Wealth For Generations · Over 20 Years Experience
            </p>
            <div className="flex items-center gap-4 ml-auto text-slate-300">
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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-lg bg-[#0A1F44] flex items-center justify-center text-[#C9A84C] font-bold text-xl shadow-sm border border-[#C9A84C]/30 transition-transform group-hover:scale-105">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif tracking-tight text-[#0A1F44] font-bold">
                  RATHI WEALTH
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#C9A84C]">
                  Wealth For Generations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      link.highlight
                        ? active
                          ? 'text-[#0A1F44] font-semibold'
                          : 'text-[#0A1F44] font-semibold hover:text-[#C9A84C]'
                        : active
                        ? 'text-[#0A1F44] font-semibold'
                        : 'text-slate-600 hover:text-[#0A1F44]'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.highlight && <Calculator className="w-3.5 h-3.5 text-[#C9A84C]" />}
                      {link.name}
                    </span>
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A84C] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-all shadow-sm hover:shadow"
              >
                <PhoneCall className="w-4 h-4 text-[#C9A84C]" />
                <span>Schedule a Consultation</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-3 py-2 rounded-md text-xs font-medium text-white bg-[#0A1F44]"
              >
                Consult
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-[#0A1F44] hover:bg-slate-100 focus:outline-none"
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
