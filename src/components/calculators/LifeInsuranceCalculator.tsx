import React, { useState, useMemo } from 'react';
import { RotateCcw, MessageSquare, ShieldAlert } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { DonutChart } from './DonutChart';
import { DisclaimerCard } from '../common/DisclaimerCard';
import { ConsultationModal } from '../common/ConsultationModal';
import { calculateLifeInsuranceNeed, formatINR, formatExactINR } from '../../utils/calculators';

export const LifeInsuranceCalculator: React.FC = () => {
  const defaultExpense = 1200000; // 12L / yr
  const defaultYears = 20;
  const defaultLiabilities = 4500000; // 45L home loan
  const defaultGoals = 3000000; // 30L higher education
  const defaultInvestments = 2500000; // 25L existing
  const defaultLifeCover = 5000000; // 50L existing

  const [annualFamilyExpense, setAnnualFamilyExpense] = useState<number>(defaultExpense);
  const [yearsOfSupportNeeded, setYearsOfSupportNeeded] = useState<number>(defaultYears);
  const [outstandingLiabilities, setOutstandingLiabilities] = useState<number>(defaultLiabilities);
  const [futureMajorGoals, setFutureMajorGoals] = useState<number>(defaultGoals);
  const [existingInvestments, setExistingInvestments] = useState<number>(defaultInvestments);
  const [existingLifeCover, setExistingLifeCover] = useState<number>(defaultLifeCover);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const result = useMemo(() => {
    return calculateLifeInsuranceNeed({
      currentAge: 35,
      annualIncome: 3000000,
      annualFamilyExpense,
      outstandingLiabilities,
      futureMajorGoals,
      existingInvestments,
      existingLifeCover,
      yearsOfSupportNeeded,
    });
  }, [
    annualFamilyExpense,
    outstandingLiabilities,
    futureMajorGoals,
    existingInvestments,
    existingLifeCover,
    yearsOfSupportNeeded,
  ]);

  const handleReset = () => {
    setAnnualFamilyExpense(defaultExpense);
    setYearsOfSupportNeeded(defaultYears);
    setOutstandingLiabilities(defaultLiabilities);
    setFutureMajorGoals(defaultGoals);
    setExistingInvestments(defaultInvestments);
    setExistingLifeCover(defaultLifeCover);
  };

  const chartSegments = [
    { label: 'Living Expenses Corpus', value: result.livingExpenseCorpus, color: '#0A1F44' },
    { label: 'Liabilities & Loans', value: outstandingLiabilities, color: '#B42318' },
    { label: 'Future Children Milestones', value: futureMajorGoals, color: '#C9A84C' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
            Family Protection Architecture
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
          Life Insurance Need Calculator (Human Life Value)
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Determine the exact pure term insurance protection required to shield your family, extinguish liabilities, and fund children's milestones if tragedy strikes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100">
          <CalculatorInput
            label="Annual Family Living Expenses"
            value={annualFamilyExpense}
            min={300000}
            max={6000000}
            step={50000}
            unitPrefix="₹"
            onChange={setAnnualFamilyExpense}
            helperText="Excluding personal expenses of primary breadwinner"
          />

          <CalculatorInput
            label="Years of Support Required"
            value={yearsOfSupportNeeded}
            min={5}
            max={35}
            step={1}
            unitSuffix=" Years"
            onChange={setYearsOfSupportNeeded}
            helperText="Until youngest dependent is financially independent"
          />

          <CalculatorInput
            label="Outstanding Loans & Liabilities"
            value={outstandingLiabilities}
            min={0}
            max={50000000}
            step={100000}
            unitPrefix="₹"
            onChange={setOutstandingLiabilities}
            helperText="Home loan, auto loan, commercial borrowings"
          />

          <CalculatorInput
            label="Future Milestones (Education & Marriage)"
            value={futureMajorGoals}
            min={0}
            max={30000000}
            step={100000}
            unitPrefix="₹"
            onChange={setFutureMajorGoals}
            helperText="Estimated future cost of children higher education"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorInput
              label="Liquid Investments"
              value={existingInvestments}
              min={0}
              max={30000000}
              step={100000}
              unitPrefix="₹"
              onChange={setExistingInvestments}
              helperText="Mutual funds, FDs, stocks"
            />
            <CalculatorInput
              label="Existing Life Cover"
              value={existingLifeCover}
              min={0}
              max={50000000}
              step={500000}
              unitPrefix="₹"
              onChange={setExistingLifeCover}
              helperText="Current active term policies"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#E6F1FB]/60 rounded-xl p-6 border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Recommended Total Protection Shield
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1F44] tracking-tight mt-1">
                {formatINR(result.netProtectionRequirement)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Gross financial obligations: {formatExactINR(result.totalFinancialObligations)} less existing liquid assets of {formatINR(result.availableLiquidAssets)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200/50">
              <div className="bg-white/80 p-3.5 rounded-lg border border-blue-100/80">
                <span className="text-[11px] font-medium text-slate-500 block">Current Life Cover</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {formatINR(existingLifeCover)}
                </span>
              </div>
              <div className={`p-3.5 rounded-lg border ${result.currentShortfall > 0 ? 'bg-amber-50/80 border-amber-200' : 'bg-emerald-50/80 border-emerald-200'}`}>
                <span className="text-[11px] font-medium text-slate-500 block">
                  {result.currentShortfall > 0 ? 'Unprotected Protection Gap' : 'Coverage Surplus'}
                </span>
                <span className={`text-lg font-bold mt-0.5 block ${result.currentShortfall > 0 ? 'text-[#B42318]' : 'text-emerald-700'}`}>
                  {result.currentShortfall > 0 ? formatINR(result.currentShortfall) : 'Adequately Covered!'}
                </span>
              </div>
            </div>

            {result.currentShortfall > 0 && (
              <div className="p-3.5 bg-rose-50 rounded-lg border border-rose-200 flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs text-rose-900 leading-relaxed">
                  <strong>Family Protection Alert:</strong> Your dependents face an unprotected gap of <strong>{formatINR(result.currentShortfall)}</strong>. A cost-effective pure term insurance policy can cover this gap for a nominal annual premium.
                </p>
              </div>
            )}

            <div className="pt-2">
              <DonutChart
                segments={chartSegments}
                centerLabel="Obligations"
                centerValue={formatINR(result.totalFinancialObligations)}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Holding expensive endowment or ULIP policies?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                We evaluate your existing policy surrender values and structure pure term insurance with zero sales commission bias.
              </p>
            </div>
            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0A1F44] hover:bg-[#162f5e] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Review Insurance Cover</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerCard
        assumptions={[
          `Living expense replacement corpus assumes a conservative real return of 2% p.a. over inflation.`,
          `Outstanding debt obligations should be extinguished in full upon death to protect residential property.`,
          `Existing life cover is compared against pure term insurance requirements; market-linked surrender values may vary.`,
        ]}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic="Life & Health Insurance Coverage Review"
        calculatorSummary={`Annual expenses: ${formatExactINR(annualFamilyExpense)}, Liabilities: ${formatINR(outstandingLiabilities)}, Protection gap: ${formatINR(result.currentShortfall)}.`}
      />
    </div>
  );
};
