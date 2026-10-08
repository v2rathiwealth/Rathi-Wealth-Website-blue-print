import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, TrendingUp } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateLumpsum, formatINR, formatExactINR } from '../../utils/calculators';

export const LumpsumCalculator: React.FC = () => {
  const defaultInitial = 500000;
  const defaultYears = 10;
  const defaultReturn = 12;

  const [initialInvestment, setInitialInvestment] = useState<number>(defaultInitial);
  const [years, setYears] = useState<number>(defaultYears);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(defaultReturn);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateLumpsum({
      initialInvestment,
      years,
      expectedReturnRate,
    });
  }, [initialInvestment, years, expectedReturnRate]);

  const handleReset = () => {
    setInitialInvestment(defaultInitial);
    setYears(defaultYears);
    setExpectedReturnRate(defaultReturn);
  };

  const chartSegments = [
    { label: 'Initial Principal', value: result.investedAmount, color: '#0A1F44' },
    { label: 'Compounded Returns', value: result.estimatedReturn, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            One-Time Capital Deployment
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
          Lumpsum Investment Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Project the multi-year compound growth of a one-time investment corpus (bonuses, sale of property, or business proceeds) over your chosen holding period.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-6 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Total Lumpsum Investment"
            value={initialInvestment}
            min={10000}
            max={50000000}
            step={25000}
            unitPrefix="₹"
            onChange={setInitialInvestment}
            helperText="e.g. ₹5,00,000"
          />

          <CalculatorInput
            label="Holding Period"
            value={years}
            min={1}
            max={30}
            step={1}
            unitSuffix=" Years"
            onChange={setYears}
            helperText="Longer horizons give compounding room to accelerate"
          />

          <CalculatorInput
            label="Assumed Annual Return"
            value={expectedReturnRate}
            min={4}
            max={20}
            step={0.5}
            unitSuffix="%"
            onChange={setExpectedReturnRate}
            helperText="Conservative diversified portfolio assumption: 10% - 12%"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Projected Maturity Value
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.totalValue)}
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Exact estimate: {formatExactINR(result.totalValue)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200/50">
              <div className="bg-white/80 p-3.5 rounded-lg border border-blue-100/80">
                <span className="text-[11px] font-medium text-slate-600 block">Invested Principal</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {formatINR(result.investedAmount)}
                </span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-emerald-100/80">
                <span className="text-[11px] font-medium text-emerald-800 block">Compounded Gain</span>
                <span className="text-lg font-bold text-emerald-700 mt-0.5 block">
                  {formatINR(result.estimatedReturn)}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <DonutChart
                segments={chartSegments}
                centerLabel="Total Corpus"
                centerValue={formatINR(result.totalValue)}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Deploying a large lump sum in volatile markets?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Learn about Systematic Transfer Plans (STP) to average entry costs without timing mistakes.
              </p>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss Deployment Strategy</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-100 pt-6">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Capital Compounding Across Milestones</span>
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600">
                <th className="py-2 pr-4 font-semibold">Tenure</th>
                <th className="py-2 px-4 font-semibold">Invested Principal</th>
                <th className="py-2 px-4 font-semibold">Projected Corpus</th>
                <th className="py-2 pl-4 font-semibold text-right">Wealth Multiple</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.yearlyBreakdown
                .filter((item) => item.year === 1 || item.year % 5 === 0 || item.year === years)
                .map((item) => (
                  <tr key={item.year} className="hover:bg-slate-50">
                    <td className="py-2.5 pr-4 font-medium text-slate-900">Year {item.year}</td>
                    <td className="py-2.5 px-4 text-slate-600">{formatExactINR(item.invested)}</td>
                    <td className="py-2.5 px-4 font-semibold text-[#0A1F44]">{formatExactINR(item.value)}</td>
                    <td className="py-2.5 pl-4 text-right font-medium text-emerald-600">
                      {(item.value / item.invested).toFixed(2)}x
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `One-time capital deployed at Year 0 with annual compounding at ${expectedReturnRate}%.`,
          `Illustrative model does not account for capital gains taxes or fund management expenses.`,
          `Lumpsum equity investments carry timing risk; asset staggered entry (STP) may be prudent.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Lumpsum Capital Deployment Consultation"
        calculatorSummary={`Lumpsum of ${formatExactINR(initialInvestment)} for ${years} years @ ${expectedReturnRate}%. Projected: ${formatINR(result.totalValue)}`}
      />
    </div>
  );
};
