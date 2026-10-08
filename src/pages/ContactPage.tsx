import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, CheckCircle, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn, ScaleIn } from '../components/common/MotionWrapper';
import { BRAND_INFO } from '../data/content';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Personal CFO Multi-Generational Advisory');
  const [mode, setMode] = useState('video');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Rathi Wealth,\nI would like to schedule a consultation with Umesh Rathi.\n\nName: ${name || 'Prospective Client'}\nTopic: ${topic}\nMode: ${mode}\n${notes ? `Notes: ${notes}` : ''}`
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Consultation Request: ${topic} - ${name || 'Prospective Client'}`);
    const body = encodeURIComponent(
      `Dear Umesh Rathi & Team,\n\nI would like to schedule an advisory discussion.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\nPreferred Mode: ${mode}\n\nNotes:\n${notes}\n\nThank you.`
    );
    window.location.href = `mailto:${BRAND_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEOHead
        title="Contact Us & Registered Office | Rathi Wealth Indore"
        description="Connect with Rathi Wealth Private Limited in Indore, Madhya Pradesh. Phone: +91 88173 58846, Email: service@rathiwealth.in. 222 Krishna Business Center, Vijay Nagar."
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#162f5e] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                <span>Rathi Wealth Private Limited</span>
                <span aria-hidden="true">·</span>
                <span>AMFI Registered</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Start a Conversation.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                We begin every new relationship with a calm, 30-minute discovery conversation to understand your balance sheet goals and ensure mutual philosophical fit.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details & Office */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 p-1.5 bg-slate-50 rounded-xl border border-slate-200 shrink-0 flex items-center justify-center">
                      <img
                        src="/images/logo-tight.png"
                        alt="Rathi Wealth Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A84C] block">
                        Registered Corporate Office
                      </span>
                      <h2 className="text-xl font-serif font-bold text-[#0A1F44] mt-0.5">
                        Rathi Wealth Private Limited
                      </h2>
                      <span className="text-xs text-slate-500 font-medium block">
                        AMFI Registered Mutual Fund Distributor
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Indore Office Address:</strong>
                        <span>{BRAND_INFO.contact.officeAddress}</span>
                        <div className="mt-2">
                          <a
                            href="https://maps.google.com/?q=Krishna+Business+Center+Vijay+Nagar+Indore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1F44] hover:text-[#C9A84C] underline underline-offset-2"
                          >
                            <span>Open in Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                      <Mail className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Official Service Desk:</strong>
                        <a href={`mailto:${BRAND_INFO.contact.email}`} className="text-[#0A1F44] hover:underline font-medium block">
                          {BRAND_INFO.contact.email}
                        </a>
                        <a href={`mailto:${BRAND_INFO.contact.secondaryEmail}`} className="text-slate-500 hover:underline text-xs block mt-0.5">
                          {BRAND_INFO.contact.secondaryEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                      <Phone className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Advisory Desk & Helpline:</strong>
                        <a href={`tel:${BRAND_INFO.contact.phone}`} className="text-[#0A1F44] hover:underline font-bold text-base block">
                          {BRAND_INFO.contact.phone}
                        </a>
                        <span className="text-[11px] text-slate-500">Available during operating hours</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                      <Clock className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Business Working Hours:</strong>
                        <span>Monday – Friday: 10:00 AM – 06:00 PM</span>
                        <span className="block">Saturday: 10:00 AM – 04:00 PM</span>
                        <span className="text-slate-500 text-xs block mt-0.5">Sunday: Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Instant WhatsApp direct reach */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Rathi Wealth, I would like to schedule a consultation with Umesh Rathi.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message on WhatsApp (+91 88173 58846)</span>
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* What to expect card */}
              <FadeIn direction="up" delay={0.2}>
                <div className="p-6 bg-[#E6F1FB]/60 rounded-2xl border border-blue-100 space-y-3 text-xs text-slate-700">
                  <span className="font-bold text-[#0A1F44] uppercase tracking-wider block">
                    What Happens in Your Discovery Call?
                  </span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0A1F44] font-bold">1.</span>
                      <span><strong>No Sales Pitch:</strong> We do not propose any financial product or scheme on the first call.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0A1F44] font-bold">2.</span>
                      <span><strong>Diagnostic Focus:</strong> We listen to your family goals, liabilities, and current asset mix.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0A1F44] font-bold">3.</span>
                      <span><strong>Mutual Alignment:</strong> We assess whether the Personal CFO model is the right fit for your needs.</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <ScaleIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
                  {submitted ? (
                    <div className="py-12 text-center space-y-5">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#0A1F44]">
                        Consultation Request Registered
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-800">{name}</strong>. Umesh Rathi's advisory desk has received your request regarding <strong>{topic}</strong>. We will reach out to confirm your slot within 24 business hours.
                      </p>

                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-left space-y-3">
                        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Would you like to send this directly?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <button
                            onClick={handleWhatsAppDirect}
                            className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-center transition-colors"
                          >
                            Send via WhatsApp
                          </button>
                          <button
                            onClick={handleEmailDirect}
                            className="py-2.5 px-3 bg-[#0A1F44] hover:bg-[#162f5e] text-white font-medium rounded-lg text-center transition-colors"
                          >
                            Send Email
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-semibold text-[#0A1F44] hover:underline"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1F44]">
                          Schedule a Confidential Discussion
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                          Direct consultation with Umesh Rathi & senior advisors · Complete discretion guaranteed
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Deshmukh"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="anand@example.com"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 88173 58846"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Advisory Area of Interest
                        </label>
                        <select
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        >
                          <option value="Personal CFO Multi-Generational Advisory">Personal CFO Multi-Generational Advisory</option>
                          <option value="Portfolio Diagnostic & Mutual Fund Review">Portfolio Diagnostic & Mutual Fund Review</option>
                          <option value="Retirement Independence Modeling">Retirement Independence Modeling</option>
                          <option value="Life & Health Insurance Coverage Audit">Life & Health Insurance Coverage Audit</option>
                          <option value="Succession, Will & Estate Planning">Succession, Will & Estate Planning</option>
                          <option value="Corporate / Campus Financial Wellness Workshop">Corporate / Campus Financial Wellness Workshop</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Preferred Mode
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'video', label: 'Google Meet' },
                            { id: 'phone', label: 'Phone Call' },
                            { id: 'in-person', label: 'In Person (Indore)' },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setMode(item.id)}
                              className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                                mode === item.id
                                  ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Brief Context or Question (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Share any key numbers, portfolio size, or specific goals you wish to address..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 px-6 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                        >
                          <span>Request 30-Minute Confidential Call</span>
                          <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[11px] text-slate-600 text-center mt-2">
                          Strict fiduciary privacy. We never share client contact details with any third parties.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Office Direction Card */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0A1F44] bg-[#E6F1FB] px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>In-Person Consultations</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1F44]">
                    Visit Our Office in Indore
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Located at Krishna Business Center in Vijay Nagar, Indore. We welcome clients for private, scheduled consultations with Umesh Rathi, Vibhuti Rathi, and the advisory team.
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-slate-700">
                    <p><strong>Address:</strong> 222, Krishna Business Center, Plot No. 11 PU4, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
                    <p><strong>Hours:</strong> Mon–Fri: 10:00 AM – 06:00 PM | Sat: 10:00 AM – 04:00 PM (Sunday Closed)</p>
                    <p><strong>Phone:</strong> +91 88173 58846</p>
                    <p><strong>Email:</strong> service@rathiwealth.in</p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href="https://maps.google.com/?q=Krishna+Business+Center+Vijay+Nagar+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-2"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C9A84C]" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-300 shadow-inner bg-slate-200 relative">
                    <iframe
                      title="Rathi Wealth Indore Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5447959954054!2d75.88876877598818!3d22.745147879370763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda09a0684f1%3A0xe7f5859dca44fbf8!2sKrishna%20Business%20Centre!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work With Us Section from rathiwealth.in */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Careers at Rathi Wealth
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0A1F44]">
                Work With Us
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Join a fiduciary wealth advisory firm dedicated to client stewardship, intellectual excellence, and lifelong relationship building.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
                <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider block">01 · Why Us</span>
                <h4 className="text-base font-serif font-bold text-[#0A1F44]">Dynamic Career Opportunities</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore diverse roles in a growing industry with room for advancement, continuous mentorship, and professional growth in wealth stewardship.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
                <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider block">02 · Culture</span>
                <h4 className="text-base font-serif font-bold text-[#0A1F44]">Client-Centric Environment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join a team dedicated to delivering exceptional client service and fostering long-lasting relationships built on trust, integrity, and discretion.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 h-full">
                <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider block">03 · Growth</span>
                <h4 className="text-base font-serif font-bold text-[#0A1F44]">Continuous Learning & Systems</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Access ongoing training, CFP/QPFP mentorship programs, and professional development opportunities across financial planning and fintech systems.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} className="mt-10">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center space-y-3 max-w-2xl mx-auto">
              <h4 className="text-base font-serif font-bold text-[#0A1F44]">
                Interested in Future Openings?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are always excited to connect with passionate financial planners, operations professionals, and client associates who share our ethics-first mindset. Send your resume to:
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${BRAND_INFO.contact.email}?subject=Career%20Inquiry%20-%20Rathi%20Wealth`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A1F44] hover:bg-[#162f5e] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Send Resume to service@rathiwealth.in</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
