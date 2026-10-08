import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, TrendingUp } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateSIP, formatINR, formatExactINR } from '../../utils/calculators';

export const SIPCalculator: React.FC = () => {
  const defaultMonthly = 25000;
  const defaultYears = 15;
  const defaultReturn = 12;

  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(defaultMonthly);
  const [years, setYears] = useState<number>(defaultYears);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(defaultReturn);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateSIP({
      monthlyInvestment,
      years,
      expectedReturnRate,
    });
  }, [monthlyInvestment, years, expectedReturnRate]);

  const handleReset = () => {
    setMonthlyInvestment(defaultMonthly);
    setYears(defaultYears);
    setExpectedReturnRate(defaultReturn);
  };

  const chartSegments = [
    { label: 'Invested Capital', value: result.investedAmount, color: '#0A1F44' },
    { label: 'Estimated Wealth Gain', value: result.estimatedReturn, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Overview & Header */}
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Wealth Accumulation Tool
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
          Systematic Investment Plan (SIP) Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Estimate the prospective corpus created by investing a fixed amount every month in equity or hybrid mutual funds, harnessing the relentless power of compounding.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Monthly SIP Amount"
            value={monthlyInvestment}
            min={1000}
            max={200000}
            step={1000}
            unitPrefix="₹"
            onChange={setMonthlyInvestment}
            helperText="e.g. ₹25,000 / month"
          />

          <CalculatorInput
            label="Investment Horizon"
            value={years}
            min={1}
            max={35}
            step={1}
            unitSuffix=" Years"
            onChange={setYears}
            helperText={`${years * 12} monthly installments`}
          />

          <CalculatorInput
            label="Expected Return Rate (p.a.)"
            value={expectedReturnRate}
            min={5}
            max={20}
            step={0.5}
            unitSuffix="%"
            onChange={setExpectedReturnRate}
            helperText="Long-term Indian equity historical range: 11% - 13%"
          />

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200">
            <span>Instant client-side calculation</span>
            <span>No sign-up required</span>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Projected Total Value
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
                <span className="text-[11px] font-medium text-slate-600 block">Total Invested</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {formatINR(result.investedAmount)}
                </span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-emerald-100/80">
                <span className="text-[11px] font-medium text-emerald-800 block">Estimated Gain</span>
                <span className="text-lg font-bold text-emerald-700 mt-0.5 block">
                  {formatINR(result.estimatedReturn)}
                </span>
              </div>
            </div>

            {/* SVG Visual Chart */}
            <div className="pt-2">
              <DonutChart
                segments={chartSegments}
                centerLabel="Total Corpus"
                centerValue={formatINR(result.totalValue)}
              />
            </div>
          </div>

          {/* Soft CTA to bridge to consultation */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Want to align your SIP with your specific family milestones?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Discuss asset allocation, fund category selection, and rebalancing with our advisory desk.
              </p>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss My Results</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ten-Year Growth Milestones Table */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Compounding Growth Trajectory Across Tenures</span>
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600">
                <th className="py-2 pr-4 font-semibold">End of Year</th>
                <th className="py-2 px-4 font-semibold">Cumulative Invested</th>
                <th className="py-2 px-4 font-semibold">Projected Value</th>
                <th className="py-2 pl-4 font-semibold text-right">Wealth Multiplier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.yearlyBreakdown
                .filter((item) => item.year === 1 || item.year % 5 === 0 || item.year === years)
                .map((item) => {
                  const multiple = (item.value / item.invested).toFixed(2);
                  return (
                    <tr key={item.year} className="hover:bg-slate-50">
                      <td className="py-2.5 pr-4 font-medium text-slate-900">Year {item.year}</td>
                      <td className="py-2.5 px-4 text-slate-600">{formatExactINR(item.invested)}</td>
                      <td className="py-2.5 px-4 font-semibold text-[#0A1F44]">{formatExactINR(item.value)}</td>
                      <td className="py-2.5 pl-4 text-right font-medium text-emerald-600">{multiple}x</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Monthly investments are made at the beginning of each calendar month.`,
          `Annual returns of ${expectedReturnRate}% are assumed to remain constant for illustration. Actual market returns fluctuate year to year.`,
          `No exit loads, taxation, or expense ratio deductions are applied in this illustrative math.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Systematic Investment Plan (SIP) Consultation"
        calculatorSummary={`Monthly SIP: ${formatExactINR(monthlyInvestment)} for ${years} years @ ${expectedReturnRate}% p.a. Projected value: ${formatINR(result.totalValue)}`}
      />
    </div>
  );
};
