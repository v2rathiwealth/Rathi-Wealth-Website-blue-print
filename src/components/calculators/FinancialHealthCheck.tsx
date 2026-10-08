import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, CheckCircle2, AlertCircle, ArrowRight, Shield } from 'lucide-react';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateFinancialHealth, FinancialHealthInput } from '../../utils/calculators';

export const FinancialHealthCheck: React.FC = () => {
  const initialData: FinancialHealthInput = {
    ageBand: '30to45',
    emergencyFundMonths: 3,
    hasTermInsurance: 'inadequate',
    hasHealthInsurance: 'basic',
    emiToIncomePercent: 35,
    savingsRatePercent: 20,
    hasRetirementPlan: 'started',
    hasEstatePlan: 'nominationOnly',
  };

  const [state, setState] = useState<FinancialHealthInput>(initialData);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => calculateFinancialHealth(state), [state]);

  const handleReset = () => {
    setState(initialData);
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-emerald-700 bg-[#EAF3DE] border-emerald-300';
    if (score >= 50) return 'text-amber-800 bg-[#FAEEDA] border-amber-300';
    return 'text-rose-800 bg-rose-50 border-rose-300';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Signature Diagnostic Tool
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-xs text-slate-500">Confidential · No Data Logged</span>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0A1F44] transition-colors font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Checkup</span>
          </button>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1F44] mt-1">
          How Financially Ready Are You?
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          An educational readiness diagnostic assessing your defensive safety nets, cash flow discipline, debt load, and succession preparedness.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Questions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Question 1: Age Band */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              01. Current Life Stage / Age Band
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'under30', label: 'Under 30' },
                { id: '30to45', label: '30 – 45 Yrs' },
                { id: '45to60', label: '45 – 60 Yrs' },
                { id: 'above60', label: '60+ Yrs' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState({ ...state, ageBand: item.id as any })}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                    state.ageBand === item.id
                      ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Emergency Reserve */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                02. Liquid Emergency Reserve Buffer
              </label>
              <span className="text-xs font-bold text-[#0A1F44] bg-white px-2.5 py-0.5 rounded border border-slate-200">
                {state.emergencyFundMonths} Months Expenses
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={12}
              step={1}
              value={state.emergencyFundMonths}
              onChange={(e) => setState({ ...state, emergencyFundMonths: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1F44]"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>0 Months (Zero Buffer)</span>
              <span>6+ Months (Recommended)</span>
              <span>12 Months</span>
            </div>
          </div>

          {/* Question 3: Pure Term Life Insurance */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              03. Pure Term Life Insurance Coverage
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'adequate', label: 'Adequate (>15x Annual Income)' },
                { id: 'inadequate', label: 'Modest / ULIP / Endowment' },
                { id: 'none', label: 'No Term Life Cover' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState({ ...state, hasTermInsurance: item.id as any })}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                    state.hasTermInsurance === item.id
                      ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4: Health Insurance */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              04. Family Health Insurance Independence
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'comprehensive', label: 'Independent Family Floater + Super Topup' },
                { id: 'basic', label: 'Only Employer / Group Policy' },
                { id: 'none', label: 'No Formal Health Insurance' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState({ ...state, hasHealthInsurance: item.id as any })}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                    state.hasHealthInsurance === item.id
                      ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 5 & 6: Debt & Savings Ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  05. Monthly Debt EMI / Income
                </label>
                <span className="text-xs font-bold text-[#0A1F44]">{state.emiToIncomePercent}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={70}
                step={5}
                value={state.emiToIncomePercent}
                onChange={(e) => setState({ ...state, emiToIncomePercent: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1F44]"
              />
              <span className="text-[11px] text-slate-500 block">Below 30% is prudent</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  06. Monthly Savings Rate
                </label>
                <span className="text-xs font-bold text-[#0A1F44]">{state.savingsRatePercent}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                step={5}
                value={state.savingsRatePercent}
                onChange={(e) => setState({ ...state, savingsRatePercent: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1F44]"
              />
              <span className="text-[11px] text-slate-500 block">Target: {'>'} 25% of take-home</span>
            </div>
          </div>

          {/* Question 7: Retirement Plan Status */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              07. Retirement Blueprint Status
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'structured', label: 'Clear Corpus Target & Dedicated SIPs' },
                { id: 'started', label: 'Ad-hoc PPF/EPF without Math' },
                { id: 'none', label: 'No Structured Plan Yet' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState({ ...state, hasRetirementPlan: item.id as any })}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                    state.hasRetirementPlan === item.id
                      ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 8: Estate & Succession */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              08. Nomination & Will (Succession Readiness)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'willPrepared', label: 'Formal Will Drafted + Updated Nominations' },
                { id: 'nominationOnly', label: 'Nominations Updated; No Will' },
                { id: 'no', label: 'Unchecked / Missing Documents' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState({ ...state, hasEstatePlan: item.id as any })}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-left transition-all ${
                    state.hasEstatePlan === item.id
                      ? 'border-[#0A1F44] bg-[#0A1F44] text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Scorecard Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Educational Readiness Snapshot
              </span>
              <div className="flex items-center gap-4 mt-2">
                <div className={`px-4 py-2 rounded-xl border text-2xl font-bold font-serif ${getScoreColor(result.score)}`}>
                  {result.score} / 100
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block text-slate-500">
                    Posture Status
                  </span>
                  <span className="text-lg font-serif font-bold text-[#0A1F44]">
                    {result.readinessBand}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-white/70 p-3.5 rounded-lg border border-blue-100">
              {result.summary}
            </p>

            {/* Strengths */}
            {result.strengths.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Key Balance Sheet Strengths</span>
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {result.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gaps */}
            {result.gaps.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-blue-200/50">
                <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Identified Blind Spots & Vulnerabilities</span>
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {result.gaps.map((gap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">!</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Priority Actions */}
            {result.priorityActions.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-blue-200/50">
                <span className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Recommended Action Order</span>
                </span>
                <ol className="space-y-2 text-xs text-slate-700">
                  {result.priorityActions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/60 p-2 rounded border border-blue-100">
                      <span className="font-bold text-[#0A1F44]">{idx + 1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Soft CTA */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              Want a comprehensive review of your overall financial picture?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our Personal CFO advisory reviews your existing portfolio, insurance policies, and succession framework in a confidential discovery session.
            </p>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Start a Confidential Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        customText="This Financial Health Check is an educational orientation tool and does not constitute a formal financial audit or regulatory recommendation. Every family circumstance requires personalized assessment of tax brackets, health histories, and cash flow constraints."
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Financial Health Checkup Review"
        calculatorSummary={`Readiness Score: ${result.score}/100 (${result.readinessBand}). Emergency buffer: ${state.emergencyFundMonths} mo, Debt ratio: ${state.emiToIncomePercent}%, Savings: ${state.savingsRatePercent}%.`}
      />
    </div>
  );
};
