import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, AlertCircle } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateSWP, formatINR, formatExactINR } from '../../utils/calculators';

export const SWPCalculator: React.FC = () => {
  const [initialCorpus, setInitialCorpus] = useState(10000000); // 1 Crore
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(60000); // 60k / mo
  const [years, setYears] = useState(15);
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState(8.5);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateSWP({
      initialCorpus,
      monthlyWithdrawal,
      years,
      expectedAnnualReturn,
    });
  }, [initialCorpus, monthlyWithdrawal, years, expectedAnnualReturn]);

  const handleReset = () => {
    setInitialCorpus(10000000);
    setMonthlyWithdrawal(60000);
    setYears(15);
    setExpectedAnnualReturn(8.5);
  };

  // Safe withdrawal rate percentage
  const annualWithdrawal = monthlyWithdrawal * 12;
  const withdrawalRate = initialCorpus > 0 ? ((annualWithdrawal / initialCorpus) * 100).toFixed(1) : '0';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Post-Retirement Cash Flow Engine
          </span>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0A1F44] transition-colors font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#0A1F44] mt-1">
          Systematic Withdrawal Plan (SWP) Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Model predictable monthly cash flows from your accumulated corpus while remaining invested, assessing portfolio longevity and capital preservation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Total Initial Corpus"
            value={initialCorpus}
            min={1000000}
            max={100000000}
            step={500000}
            unitPrefix="₹"
            onChange={setInitialCorpus}
            helperText="Invested capital available for withdrawals"
          />

          <CalculatorInput
            label="Monthly Withdrawal Amount"
            value={monthlyWithdrawal}
            min={5000}
            max={500000}
            step={5000}
            unitPrefix="₹"
            onChange={setMonthlyWithdrawal}
            helperText={`Annual withdrawal: ${formatINR(annualWithdrawal)} (${withdrawalRate}% withdrawal rate)`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Withdrawal Tenure"
              value={years}
              min={1}
              max={35}
              step={1}
              unitSuffix=" Years"
              onChange={setYears}
              helperText={`${years * 12} monthly payouts`}
            />
            <CalculatorInput
              label="Assumed Portfolio Return"
              value={expectedAnnualReturn}
              min={4}
              max={15}
              step={0.5}
              unitSuffix="%"
              onChange={setExpectedAnnualReturn}
              helperText="Conservative hybrid return"
            />
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
            <strong>Fiduciary Note:</strong> A sustainable withdrawal rate is typically <strong>4% to 6%</strong> of the corpus. Current rate: <strong className="text-[#0A1F44]">{withdrawalRate}%</strong>.
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Projected Balance Corpus (End of {years} Yrs)
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {result.isDepleted ? 'Corpus Depleted' : formatINR(result.finalCorpus)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {result.isDepleted
                  ? `Warning: Corpus is fully exhausted after approximately ${Math.floor((result.depletedMonth || 0) / 12)} years.`
                  : `Principal remains healthy while providing monthly cash flows.`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200/50">
              <div className="bg-white/80 p-3.5 rounded-lg border border-blue-100/80">
                <span className="text-[11px] font-medium text-slate-500 block">Total Withdrawn</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {formatINR(result.totalWithdrawn)}
                </span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-emerald-100/80">
                <span className="text-[11px] font-medium text-emerald-800 block">Final Balance Left</span>
                <span className="text-lg font-bold text-emerald-700 mt-0.5 block">
                  {formatINR(result.finalCorpus)}
                </span>
              </div>
            </div>

            {result.isDepleted && (
              <div className="p-3.5 bg-rose-50 rounded-lg border border-rose-200 flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs text-rose-900 leading-relaxed">
                  <strong>Sustainability Warning:</strong> Your monthly withdrawal exceeds the portfolio's earnings capacity, causing capital erosion. Reduce monthly withdrawals or increase portfolio asset allocation efficiency.
                </p>
              </div>
            )}
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Structuring retirement cash flows with tax efficiency?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                SWPs are substantially more tax-efficient than FD interest because only the capital gain portion is taxed.
              </p>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss SWP Setup</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Monthly withdrawals occur at the end of each monthly cycle after earnings accrue.`,
          `Assumed portfolio return of ${expectedAnnualReturn}% remains steady across the tenure.`,
          `Tax implications vary based on fund classification (equity vs debt) and holding period.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Systematic Withdrawal Plan (SWP) Strategy"
        calculatorSummary={`Initial Corpus: ${formatINR(initialCorpus)}, Monthly Withdrawal: ${formatExactINR(monthlyWithdrawal)} for ${years} yrs. Final Balance: ${formatINR(result.finalCorpus)}.`}
      />
    </div>
  );
};
