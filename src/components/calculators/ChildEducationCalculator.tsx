import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, GraduationCap } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateChildEducation, formatINR, formatExactINR } from '../../utils/calculators';

export const ChildEducationCalculator: React.FC = () => {
  const [childCurrentAge, setChildCurrentAge] = useState(4);
  const [collegeStartAge, setCollegeStartAge] = useState(18);
  const [currentCostOfEducation, setCurrentCostOfEducation] = useState(3000000); // 30L today
  const [educationInflationRate, setEducationInflationRate] = useState(9); // 9% education inflation
  const [existingSavings, setExistingSavings] = useState(500000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateChildEducation({
      childCurrentAge,
      collegeStartAge,
      currentCostOfEducation,
      educationInflationRate,
      existingSavings,
      expectedReturnRate,
    });
  }, [
    childCurrentAge,
    collegeStartAge,
    currentCostOfEducation,
    educationInflationRate,
    existingSavings,
    expectedReturnRate,
  ]);

  const handleReset = () => {
    setChildCurrentAge(4);
    setCollegeStartAge(18);
    setCurrentCostOfEducation(3000000);
    setEducationInflationRate(9);
    setExistingSavings(500000);
    setExpectedReturnRate(12);
  };

  const chartSegments = [
    { label: 'Projected Existing Savings', value: Math.min(result.inflatedFutureCost, result.futureValueOfExistingSavings), color: '#0A1F44' },
    { label: 'Funding Gap to Invest', value: result.netFundingGap, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Family Future Milestones
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
          Child Higher Education Calculator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Higher education inflation in India & abroad typically runs at 8%–10% annually. Calculate the true future cost of premier university education and the monthly SIP needed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Child's Current Age"
              value={childCurrentAge}
              min={0}
              max={17}
              step={1}
              unitSuffix=" Yrs"
              onChange={setChildCurrentAge}
            />
            <CalculatorInput
              label="College Entry Age"
              value={collegeStartAge}
              min={childCurrentAge + 1}
              max={25}
              step={1}
              unitSuffix=" Yrs"
              onChange={setCollegeStartAge}
            />
          </div>

          <CalculatorInput
            label="Current Cost of Course / Degree"
            value={currentCostOfEducation}
            min={500000}
            max={20000000}
            step={100000}
            unitPrefix="₹"
            onChange={setCurrentCostOfEducation}
            helperText="Current fee + living expenses in today's money"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Higher Ed Inflation Rate"
              value={educationInflationRate}
              min={5}
              max={15}
              step={0.5}
              unitSuffix="%"
              onChange={setEducationInflationRate}
              helperText="Education inflation outpaces CPI"
            />
            <CalculatorInput
              label="Assumed Return Rate"
              value={expectedReturnRate}
              min={6}
              max={16}
              step={0.5}
              unitSuffix="%"
              onChange={setExpectedReturnRate}
              helperText="Long-term equity return"
            />
          </div>

          <CalculatorInput
            label="Current Savings Earmarked"
            value={existingSavings}
            min={0}
            max={10000000}
            step={50000}
            unitPrefix="₹"
            onChange={setExistingSavings}
            helperText="Sukanya Samriddhi, mutual funds, or FDs assigned to child"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Future Education Cost in {result.yearsUntilCollege} Years
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.inflatedFutureCost)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                From current ₹{formatExactINR(currentCostOfEducation)} compounded at {educationInflationRate}% annual education inflation.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <span className="text-xs font-medium text-slate-500 block">Required Monthly Investment</span>
              <div className="text-2xl font-bold text-[#0A1F44] mt-0.5">
                {formatExactINR(result.requiredMonthlySIP)} <span className="text-xs font-normal text-slate-600">/ month</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Dedicated monthly SIP starting today to fully fund the net gap of {formatINR(result.netFundingGap)}.
              </p>
            </div>

            <div className="pt-2">
              <DonutChart
                segments={chartSegments}
                centerLabel="Future Cost"
                centerValue={formatINR(result.inflatedFutureCost)}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Planning for overseas university education?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  We also factor currency depreciation (USD/INR) and international tuition inflation into your portfolio allocation.
                </p>
              </div>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Discuss Child Portfolio</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Education cost inflated over ${result.yearsUntilCollege} years at ${educationInflationRate}% p.a.`,
          `Investment corpus is targeted to be liquidated or transitioned into liquid/debt assets 2-3 years prior to college matriculation to protect against market corrections.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Child Higher Education Planning"
        calculatorSummary={`Child age: ${childCurrentAge}, Target college age: ${collegeStartAge}. Inflated cost: ${formatINR(result.inflatedFutureCost)}. Monthly SIP required: ${formatExactINR(result.requiredMonthlySIP)}/mo.`}
      />
    </div>
  );
};
