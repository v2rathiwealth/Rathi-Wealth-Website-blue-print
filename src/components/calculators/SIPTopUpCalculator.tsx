import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, TrendingUp } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateSIPTopUp, formatINR, formatExactINR } from '../../utils/calculators';

export const SIPTopUpCalculator: React.FC = () => {
  const [startingMonthlyInvestment, setStartingMonthlyInvestment] = useState(25000);
  const [annualTopUpPercent, setAnnualTopUpPercent] = useState(10); // 10% annual increase
  const [years, setYears] = useState(15);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateSIPTopUp({
      startingMonthlyInvestment,
      annualTopUpPercent,
      years,
      expectedReturnRate,
    });
  }, [startingMonthlyInvestment, annualTopUpPercent, years, expectedReturnRate]);

  const handleReset = () => {
    setStartingMonthlyInvestment(25000);
    setAnnualTopUpPercent(10);
    setYears(15);
    setExpectedReturnRate(12);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Career Escalation Wealth Engine
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
          SIP Top-Up (Step-Up) Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Demonstrate how increasing your monthly SIP alongside your annual appraisal exponentially multiplies your end wealth compared to keeping investments flat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Starting Monthly SIP"
            value={startingMonthlyInvestment}
            min={1000}
            max={200000}
            step={1000}
            unitPrefix="₹"
            onChange={setStartingMonthlyInvestment}
            helperText="Investment during Year 1"
          />

          <CalculatorInput
            label="Annual Step-Up Percentage"
            value={annualTopUpPercent}
            min={0}
            max={30}
            step={1}
            unitSuffix="%"
            onChange={setAnnualTopUpPercent}
            helperText="Typically matched to annual appraisal (e.g. 10%)"
          />

          <CalculatorInput
            label="Investment Tenure"
            value={years}
            min={1}
            max={30}
            step={1}
            unitSuffix=" Years"
            onChange={setYears}
          />

          <CalculatorInput
            label="Expected Annual Return"
            value={expectedReturnRate}
            min={5}
            max={18}
            step={0.5}
            unitSuffix="%"
            onChange={setExpectedReturnRate}
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Wealth with {annualTopUpPercent}% Annual Step-Up
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.topUpValue)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Versus <strong>{formatINR(result.standardValue)}</strong> with a conventional flat SIP.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Additional Wealth Created
                  </span>
                  <div className="text-2xl font-bold text-emerald-900 mt-0.5">
                    +{formatINR(result.extraAccumulated)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-emerald-200/70 text-emerald-900 text-xs font-bold rounded-md">
                    +{result.gainPercentage}% Boost
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison Side-by-Side */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white/80 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Regular Flat SIP</span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  Invested: {formatINR(result.standardInvested)}
                </span>
                <span className="font-bold text-[#0A1F44] block">
                  Corpus: {formatINR(result.standardValue)}
                </span>
              </div>
              <div className="p-3 bg-white/80 rounded-lg border border-blue-200">
                <span className="text-[#0A1F44] font-semibold block">Step-Up SIP (+{annualTopUpPercent}%)</span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  Invested: {formatINR(result.topUpInvested)}
                </span>
                <span className="font-bold text-emerald-700 block">
                  Corpus: {formatINR(result.topUpValue)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Ready to automate annual SIP step-ups?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automating top-ups eliminates the behavioral friction of remembering to increase your investments manually.
                </p>
              </div>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss Top-Up Setup</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `SIP increments by exactly ${annualTopUpPercent}% every 12 months.`,
          `Constant illustrative return of ${expectedReturnRate}% p.a. throughout the ${years}-year period.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="SIP Top-Up Strategy"
        calculatorSummary={`Starting SIP: ${formatExactINR(startingMonthlyInvestment)}, ${annualTopUpPercent}% step-up for ${years} yrs. Extra wealth: ${formatINR(result.extraAccumulated)}.`}
      />
    </div>
  );
};
