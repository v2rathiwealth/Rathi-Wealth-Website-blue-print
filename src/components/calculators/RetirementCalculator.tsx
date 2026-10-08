import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateRetirement, formatINR, formatExactINR } from '../../utils/calculators';

export const RetirementCalculator: React.FC = () => {
  const defaultCurrentAge = 35;
  const defaultRetirementAge = 60;
  const defaultLifeExpectancy = 85;
  const defaultMonthlyExpense = 75000;
  const defaultInflation = 6;
  const defaultPostInflation = 6;
  const defaultExistingCorpus = 2500000;
  const defaultPreReturn = 12;
  const defaultPostReturn = 8;

  const [currentAge, setCurrentAge] = useState<number>(defaultCurrentAge);
  const [retirementAge, setRetirementAge] = useState<number>(defaultRetirementAge);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(defaultLifeExpectancy);
  const [currentMonthlyExpense, setCurrentMonthlyExpense] = useState<number>(defaultMonthlyExpense);
  const [expectedInflation, setExpectedInflation] = useState<number>(defaultInflation);
  const [postRetirementInflation, setPostRetirementInflation] = useState<number>(defaultPostInflation);
  const [existingCorpus, setExistingCorpus] = useState<number>(defaultExistingCorpus);
  const [preRetirementReturn, setPreRetirementReturn] = useState<number>(defaultPreReturn);
  const [postRetirementReturn, setPostRetirementReturn] = useState<number>(defaultPostReturn);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateRetirement({
      currentAge,
      retirementAge,
      lifeExpectancy,
      currentMonthlyExpense,
      expectedInflation,
      postRetirementInflation,
      existingCorpus,
      preRetirementReturn,
      postRetirementReturn,
    });
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    currentMonthlyExpense,
    expectedInflation,
    postRetirementInflation,
    existingCorpus,
    preRetirementReturn,
    postRetirementReturn,
  ]);

  const handleReset = () => {
    setCurrentAge(defaultCurrentAge);
    setRetirementAge(defaultRetirementAge);
    setLifeExpectancy(defaultLifeExpectancy);
    setCurrentMonthlyExpense(defaultMonthlyExpense);
    setExpectedInflation(defaultInflation);
    setPostRetirementInflation(defaultPostInflation);
    setExistingCorpus(defaultExistingCorpus);
    setPreRetirementReturn(defaultPreReturn);
    setPostRetirementReturn(defaultPostReturn);
  };

  const chartSegments = [
    { label: 'Projected Existing Savings', value: Math.min(result.requiredRetirementCorpus, result.projectedExistingCorpus), color: '#0A1F44' },
    { label: 'Corpus Funding Gap', value: result.corpusGap, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Retirement Independence Engine
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
          Retirement Planning Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Determine the true, inflation-adjusted corpus required to fund your monthly living expenses through a {result.yearsInRetirement}-year retirement without running out of money.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Current Age"
              value={currentAge}
              min={20}
              max={65}
              step={1}
              unitSuffix=" Yrs"
              onChange={setCurrentAge}
            />
            <CalculatorInput
              label="Target Retirement Age"
              value={retirementAge}
              min={currentAge + 1}
              max={75}
              step={1}
              unitSuffix=" Yrs"
              onChange={setRetirementAge}
            />
          </div>

          <CalculatorInput
            label="Current Monthly Living Expenses"
            value={currentMonthlyExpense}
            min={20000}
            max={1000000}
            step={5000}
            unitPrefix="₹"
            onChange={setCurrentMonthlyExpense}
            helperText="Excluding EMIs that will finish before retirement"
          />

          <CalculatorInput
            label="Existing Retirement Savings"
            value={existingCorpus}
            min={0}
            max={50000000}
            step={50000}
            unitPrefix="₹"
            onChange={setExistingCorpus}
            helperText="Current EPF, PPF, NPS & mutual fund retirement pool"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Pre-Retirement Inflation"
              value={expectedInflation}
              min={3}
              max={10}
              step={0.5}
              unitSuffix="%"
              onChange={setExpectedInflation}
              helperText="Urban India norm: 6%"
            />
            <CalculatorInput
              label="Post-Retirement Inflation"
              value={postRetirementInflation}
              min={3}
              max={10}
              step={0.5}
              unitSuffix="%"
              onChange={setPostRetirementInflation}
              helperText="Healthcare inflation factor"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Expected Pre-Ret Return"
              value={preRetirementReturn}
              min={6}
              max={16}
              step={0.5}
              unitSuffix="%"
              onChange={setPreRetirementReturn}
              helperText="During accumulation phase"
            />
            <CalculatorInput
              label="Expected Post-Ret Return"
              value={postRetirementReturn}
              min={5}
              max={12}
              step={0.5}
              unitSuffix="%"
              onChange={setPostRetirementReturn}
              helperText="Conservative asset allocation"
            />
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Required Retirement Corpus at Age {retirementAge}
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.requiredRetirementCorpus)}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Projected monthly expense at age {retirementAge}: <strong className="text-slate-800">{formatExactINR(result.futureMonthlyExpenseAtRetirement)}/mo</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200/50">
              <div className="bg-white/80 p-3.5 rounded-lg border border-blue-100/80">
                <span className="text-[11px] font-medium text-slate-600 block">Existing Corpus At Age {retirementAge}</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {formatINR(result.projectedExistingCorpus)}
                </span>
              </div>
              <div className={`p-3.5 rounded-lg border ${result.corpusGap > 0 ? 'bg-amber-50/80 border-amber-200' : 'bg-emerald-50/80 border-emerald-200'}`}>
                <span className="text-[11px] font-medium text-slate-600 block">
                  {result.corpusGap > 0 ? 'Remaining Gap' : 'Surplus Position'}
                </span>
                <span className={`text-lg font-bold mt-0.5 block ${result.corpusGap > 0 ? 'text-amber-800' : 'text-emerald-700'}`}>
                  {result.corpusGap > 0 ? formatINR(result.corpusGap) : 'Fully Funded!'}
                </span>
              </div>
            </div>

            {result.corpusGap > 0 && (
              <div className="p-4 bg-white rounded-lg border border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-600 block">Suggested Monthly Investment</span>
                  <span className="text-xl font-bold text-[#0A1F44]">
                    {formatExactINR(result.requiredMonthlySavings)} <span className="text-xs font-normal text-slate-600">/ month</span>
                  </span>
                </div>
                <div className="text-right text-xs text-slate-600">
                  <span>To bridge gap over {result.yearsToRetirement} years</span>
                </div>
              </div>
            )}

            {result.corpusGap > 0 && (
              <div className="pt-1">
                <DonutChart
                  segments={chartSegments}
                  centerLabel="Retirement Corpus"
                  centerValue={formatINR(result.requiredRetirementCorpus)}
                />
              </div>
            )}
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Ready to architect a customized multi-bucket retirement plan?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  We structure conservative Systematic Withdrawal Plans (SWP) that preserve principal and minimize tax leakage.
                </p>
              </div>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss My Retirement</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Retirement spans from age ${retirementAge} to age ${lifeExpectancy} (${result.yearsInRetirement} years).`,
          `Living expenses escalate at ${expectedInflation}% p.a. until retirement, and ${postRetirementInflation}% p.a. during retirement.`,
          `Post-retirement corpus is invested to generate ${postRetirementReturn}% net nominal yield under a structured multi-bucket asset allocation.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Retirement Independence Modeling"
        calculatorSummary={`Age ${currentAge} to ${retirementAge}. Current expense: ${formatExactINR(currentMonthlyExpense)}/mo. Required corpus: ${formatINR(result.requiredRetirementCorpus)}. Monthly SIP required: ${formatExactINR(result.requiredMonthlySavings)}/mo.`}
      />
    </div>
  );
};
