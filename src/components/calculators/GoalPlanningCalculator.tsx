import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, Target } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateGoalPlanning, formatINR, formatExactINR } from '../../utils/calculators';

export const GoalPlanningCalculator: React.FC = () => {
  const [goalName, setGoalName] = useState('Home Down-Payment & Renovation');
  const [currentCost, setCurrentCost] = useState(3000000); // 30L
  const [yearsToGoal, setYearsToGoal] = useState(6);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [existingSavings, setExistingSavings] = useState(500000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateGoalPlanning({
      currentCost,
      yearsToGoal,
      expectedInflation,
      existingSavings,
      expectedReturnRate,
    });
  }, [currentCost, yearsToGoal, expectedInflation, existingSavings, expectedReturnRate]);

  const handleReset = () => {
    setGoalName('Home Down-Payment & Renovation');
    setCurrentCost(3000000);
    setYearsToGoal(6);
    setExpectedInflation(6);
    setExistingSavings(500000);
    setExpectedReturnRate(12);
  };

  const chartSegments = [
    { label: 'Projected Existing Savings', value: Math.min(result.futureCost, result.projectedExistingSavings), color: '#0A1F44' },
    { label: 'Fresh Capital Required', value: result.remainingGoalCorpus, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Target-Indexed Investment Planning
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
          Goal Planning Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Convert any future milestone into a tangible monthly SIP or one-time capital commitment, indexed for inflation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Goal Description
            </label>
            <input
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder="e.g. Dream Home, Sabbatical, Start-up Fund"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A1F44] bg-white"
            />
          </div>

          <CalculatorInput
            label="Current Cost Today"
            value={currentCost}
            min={100000}
            max={50000000}
            step={50000}
            unitPrefix="₹"
            onChange={setCurrentCost}
            helperText="What does this goal cost in today's money?"
          />

          <CalculatorInput
            label="Timeline to Goal"
            value={yearsToGoal}
            min={1}
            max={30}
            step={1}
            unitSuffix=" Years"
            onChange={setYearsToGoal}
            helperText="Years remaining until money is required"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Expected Inflation"
              value={expectedInflation}
              min={2}
              max={12}
              step={0.5}
              unitSuffix="%"
              onChange={setExpectedInflation}
              helperText="Cost escalation p.a."
            />
            <CalculatorInput
              label="Assumed Portfolio Return"
              value={expectedReturnRate}
              min={4}
              max={18}
              step={0.5}
              unitSuffix="%"
              onChange={setExpectedReturnRate}
              helperText="Expected annual return"
            />
          </div>

          <CalculatorInput
            label="Existing Savings Earmarked"
            value={existingSavings}
            min={0}
            max={20000000}
            step={50000}
            unitPrefix="₹"
            onChange={setExistingSavings}
            helperText="Funds already set aside specifically for this goal"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Future Inflated Cost ({yearsToGoal} Years Out)
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.futureCost)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Target milestone: <strong className="text-slate-800">{goalName}</strong>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <span className="text-xs font-medium text-slate-500 block">Required Monthly Investment</span>
              <div className="text-2xl font-bold text-[#0A1F44] mt-0.5">
                {formatExactINR(result.requiredMonthlySIP)} <span className="text-xs font-normal text-slate-600">/ month</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Or a single lumpsum deposit of {formatINR(result.requiredLumpsumToday)} deployed today.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-blue-200/50">
              <div className="bg-white/80 p-3 rounded-lg border border-blue-100">
                <span className="text-[11px] text-slate-500 block">Existing Savings at Goal</span>
                <span className="text-base font-bold text-slate-900 mt-0.5 block">
                  {formatINR(result.projectedExistingSavings)}
                </span>
              </div>
              <div className="bg-white/80 p-3 rounded-lg border border-amber-100">
                <span className="text-[11px] text-slate-500 block">Net Corpus Gap</span>
                <span className="text-base font-bold text-amber-900 mt-0.5 block">
                  {formatINR(result.remainingGoalCorpus)}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <DonutChart
                segments={chartSegments}
                centerLabel="Future Goal"
                centerValue={formatINR(result.futureCost)}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Multiple overlapping life goals?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  We create prioritized cash-flow sequencing so funding one goal does not compromise your retirement.
                </p>
              </div>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss Goal Strategy</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Future cost inflates at ${expectedInflation}% p.a. over ${yearsToGoal} years.`,
          `Monthly investments are assumed to yield ${expectedReturnRate}% annualized return.`,
          `Taxes on redemption and market volatility timing are not incorporated into this illustrative projection.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={`Goal Planning: ${goalName}`}
        calculatorSummary={`Goal: ${goalName}. Current cost: ${formatINR(currentCost)}, Target: ${formatINR(result.futureCost)} in ${yearsToGoal} yrs. Monthly SIP: ${formatExactINR(result.requiredMonthlySIP)}/mo.`}
      />
    </div>
  );
};
