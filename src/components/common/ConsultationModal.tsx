import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  calculatorSummary?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Holistic Portfolio & Financial Diagnostic',
  calculatorSummary = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [preferredMode, setPreferredMode] = useState<'video' | 'phone' | 'in-person'>('video');
  const [notes, setNotes] = useState(calculatorSummary ? `Calculator Result: ${calculatorSummary}` : '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Rathi Wealth,\nI would like to schedule a consultation with Umesh Rathi.\n\nName: ${name || 'Prospective Client'}\nTopic: ${topic}\nMode: ${preferredMode}\n${notes ? `Details: ${notes}` : ''}`
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Consultation Request: ${topic} - ${name || 'Prospective Client'}`);
    const body = encodeURIComponent(
      `Dear Umesh Rathi & Team,\n\nI would like to schedule a financial consultation.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\nPreferred Mode: ${preferredMode}\n\nAdditional Notes:\n${notes}\n\nThank you.`
    );
    window.location.href = `mailto:${BRAND_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden text-left">
        {/* Header */}
        <div className="bg-[#0A1F44] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">
              <span>Personal CFO Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Confidential</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Schedule a Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-sm">
              Speak directly with Umesh Rathi and our senior advisory team. No product sales pitch—just clear, fiduciary guidance.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Consultation Request Received</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Thank you, <strong className="text-slate-800">{name}</strong>. We have logged your request regarding <strong>{topic}</strong>. Our team will connect with you within 24 business hours to confirm your preferred time slot.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-3">
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Need immediate coordination?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  onClick={handleEmailDirect}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0A1F44] hover:bg-[#162f5e] text-white font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Official Email</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4"
            >
              Done & Return to Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Patel"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98000 00000"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Advisory Focus / Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all"
              >
                <option value="Personal CFO Multi-Generational Advisory">Personal CFO Multi-Generational Advisory</option>
                <option value="Comprehensive Portfolio & Asset Diagnostic">Comprehensive Portfolio & Asset Diagnostic</option>
                <option value="Retirement Independence Modeling">Retirement Independence Modeling</option>
                <option value="Financial Health Check Discussion">Financial Health Check Discussion</option>
                <option value="Child Higher Education Planning">Child Higher Education Planning</option>
                <option value="Life & Health Insurance Coverage Review">Life & Health Insurance Coverage Review</option>
                <option value="Succession, Will & Estate Guidance">Succession, Will & Estate Guidance</option>
                <option value="Corporate Investor Awareness Workshop">Corporate Investor Awareness Workshop</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Mode of Discussion
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'video', label: 'Google Meet', icon: Calendar },
                  { id: 'phone', label: 'Phone Call', icon: Phone },
                  { id: 'in-person', label: 'In Person (Pune)', icon: MapPinIcon },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setPreferredMode(mode.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                      preferredMode === mode.id
                        ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Context / Specific Questions (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share any key numbers or specific goals you want us to review..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Request 30-Minute Confidential Call</span>
                <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-slate-600 text-center mt-2">
                We respect your privacy. Zero spam, no unsolicited sales calls, and no obligation.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
