import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, ClockAlert, ArrowRight } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateCostOfDelay, formatINR, formatExactINR } from '../../utils/calculators';

export const CostOfDelayCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(20000);
  const [delayYears, setDelayYears] = useState(3);
  const [totalTenureYears, setTotalTenureYears] = useState(20);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateCostOfDelay({
      monthlyInvestment,
      delayYears,
      totalTenureYears,
      expectedReturnRate,
    });
  }, [monthlyInvestment, delayYears, totalTenureYears, expectedReturnRate]);

  const handleReset = () => {
    setMonthlyInvestment(20000);
    setDelayYears(3);
    setTotalTenureYears(20);
    setExpectedReturnRate(12);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Behavioral Compounding Reality Check
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
          Cost of Delay Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          The most expensive mistake in wealth creation is waiting for the "right time." See the exact wealth penalty of delaying your investment by just a few years.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Intended Monthly Investment"
            value={monthlyInvestment}
            min={1000}
            max={200000}
            step={1000}
            unitPrefix="₹"
            onChange={setMonthlyInvestment}
            helperText="What you intend to invest each month"
          />

          <CalculatorInput
            label="Period of Delay"
            value={delayYears}
            min={1}
            max={10}
            step={1}
            unitSuffix=" Years"
            onChange={setDelayYears}
            helperText="Waiting 1, 3, or 5 years before beginning"
          />

          <CalculatorInput
            label="Total Goal Horizon"
            value={totalTenureYears}
            min={delayYears + 1}
            max={35}
            step={1}
            unitSuffix=" Years"
            onChange={setTotalTenureYears}
            helperText="Total years until retirement or wealth milestone"
          />

          <CalculatorInput
            label="Expected Annual Return"
            value={expectedReturnRate}
            min={6}
            max={16}
            step={0.5}
            unitSuffix="%"
            onChange={setExpectedReturnRate}
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-800">
                Wealth Forfeited by Waiting {delayYears} Years
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#B42318] tracking-tight mt-1">
                -{formatINR(result.wealthLossDueToDelay)}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Waiting {delayYears} years reduces your terminal wealth from <strong>{formatINR(result.startingNowValue)}</strong> down to <strong>{formatINR(result.startingLaterValue)}</strong>.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-rose-200">
              <span className="text-xs font-medium text-slate-600 block">
                Required Catch-Up Monthly SIP Later
              </span>
              <div className="text-2xl font-bold text-[#0A1F44] mt-0.5">
                {formatExactINR(monthlyInvestment + result.extraMonthlySIPNeededLater)} <span className="text-xs font-normal text-slate-600">/ month</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                You will need to invest an extra <strong>+{formatExactINR(result.extraMonthlySIPNeededLater)}/mo</strong> every single month just to end up with the same corpus!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="text-emerald-800 font-semibold block">Start Today ({totalTenureYears} Yrs)</span>
                <span className="font-bold text-emerald-950 text-sm mt-0.5 block">
                  {formatINR(result.startingNowValue)}
                </span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">
                  @ {formatExactINR(monthlyInvestment)}/mo
                </span>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <span className="text-amber-800 font-semibold block">Start in {delayYears} Yrs ({totalTenureYears - delayYears} Yrs)</span>
                <span className="font-bold text-amber-950 text-sm mt-0.5 block">
                  {formatINR(result.startingLaterValue)}
                </span>
                <span className="text-[11px] text-amber-700 block mt-0.5">
                  @ {formatExactINR(monthlyInvestment)}/mo
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ClockAlert className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Stop overthinking the market entry point
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Time in the market beats timing the market. Start with whatever small monthly surplus you have today.
                </p>
              </div>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Begin Today</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Calculations assume equal monthly contributions and consistent ${expectedReturnRate}% annualized compounding.`,
          `Delay calculations emphasize the disproportionate value of compounding in the final years of an investment journey.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Eliminating Procrastination & Setting Up Disciplined SIPs"
        calculatorSummary={`Delay of ${delayYears} yrs on ${formatExactINR(monthlyInvestment)}/mo over ${totalTenureYears} yrs causes loss of ${formatINR(result.wealthLossDueToDelay)}.`}
      />
    </div>
  );
};
