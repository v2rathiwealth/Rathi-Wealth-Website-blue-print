import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MessageSquare, Calendar } from 'lucide-react';
import { ConsultationModal } from '../common/ConsultationModal';
import { ScrollProgressBar } from '../common/MotionWrapper';
import { BRAND_INFO } from '../../data/content';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />

      {/* Floating Action Buttons for quick confidential reach */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Rathi Wealth, I would like to enquire about your wealth advisory services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 group text-xs font-medium"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden md:inline">WhatsApp Us</span>
        </a>

        <button
          onClick={() => setConsultationOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1F44] hover:bg-[#162f5e] text-white rounded-full shadow-xl transition-transform hover:scale-105 text-xs font-semibold border border-[#C9A84C]/40"
          aria-label="Book a Call"
        >
          <Calendar className="w-4 h-4 text-[#C9A84C]" />
          <span>Book a Call</span>
        </button>
      </div>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
};
