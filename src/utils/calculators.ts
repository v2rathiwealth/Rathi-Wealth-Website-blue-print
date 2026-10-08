/**
 * Rathi Wealth - Calculation Engine
 * Pure, deterministic mathematical functions for financial calculations.
 * All computations run locally with explicit bounds checking and no external dependencies.
 */

// Format INR Currency nicely
export function formatINR(val: number, showDecimals = false): string {
  if (isNaN(val) || !isFinite(val)) return '₹0';
  const rounded = showDecimals ? Math.round(val * 100) / 100 : Math.round(val);
  
  // Format for Indian numbering system
  const isNegative = rounded < 0;
  const absVal = Math.abs(rounded);
  
  let formatted = '';
  if (absVal >= 10000000) {
    // Crores
    const cr = absVal / 10000000;
    formatted = `₹${cr.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Cr`;
  } else if (absVal >= 100000) {
    // Lakhs
    const lk = absVal / 100000;
    formatted = `₹${lk.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Lakh`;
  } else {
    formatted = `₹${absVal.toLocaleString('en-IN')}`;
  }

  return isNegative ? `-${formatted}` : formatted;
}

export function formatExactINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '₹0';
  const rounded = Math.round(val);
  return `₹${rounded.toLocaleString('en-IN')}`;
}

// 1. SIP Calculator
export interface SIPInput {
  monthlyInvestment: number;
  years: number;
  expectedReturnRate: number; // Annual %
}

export interface SIPResult {
  investedAmount: number;
  estimatedReturn: number;
  totalValue: number;
  yearlyBreakdown: Array<{ year: number; invested: number; value: number }>;
}

export function calculateSIP(input: SIPInput): SIPResult {
  const p = Math.max(0, input.monthlyInvestment || 0);
  const years = Math.min(50, Math.max(1, input.years || 1));
  const annualRate = Math.min(50, Math.max(0, input.expectedReturnRate || 0));

  const totalMonths = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  let totalValue = 0;
  if (monthlyRate === 0) {
    totalValue = p * totalMonths;
  } else {
    // FV = P * [((1 + i)^n - 1) / i] * (1 + i)
    totalValue = p * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  const investedAmount = p * totalMonths;
  const estimatedReturn = Math.max(0, totalValue - investedAmount);

  // Yearly milestones
  const yearlyBreakdown: Array<{ year: number; invested: number; value: number }> = [];
  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const inv = p * months;
    let val = 0;
    if (monthlyRate === 0) {
      val = inv;
    } else {
      val = p * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    }
    yearlyBreakdown.push({
      year: y,
      invested: Math.round(inv),
      value: Math.round(val),
    });
  }

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturn: Math.round(estimatedReturn),
    totalValue: Math.round(totalValue),
    yearlyBreakdown,
  };
}

// 2. Lumpsum Calculator
export interface LumpsumInput {
  initialInvestment: number;
  years: number;
  expectedReturnRate: number; // Annual %
}

export interface LumpsumResult {
  investedAmount: number;
  estimatedReturn: number;
  totalValue: number;
  yearlyBreakdown: Array<{ year: number; invested: number; value: number }>;
}

export function calculateLumpsum(input: LumpsumInput): LumpsumResult {
  const p = Math.max(0, input.initialInvestment || 0);
  const years = Math.min(50, Math.max(1, input.years || 1));
  const rate = Math.min(50, Math.max(0, input.expectedReturnRate || 0)) / 100;

  const totalValue = p * Math.pow(1 + rate, years);
  const estimatedReturn = Math.max(0, totalValue - p);

  const yearlyBreakdown = [];
  for (let y = 1; y <= years; y++) {
    yearlyBreakdown.push({
      year: y,
      invested: p,
      value: Math.round(p * Math.pow(1 + rate, y)),
    });
  }

  return {
    investedAmount: Math.round(p),
    estimatedReturn: Math.round(estimatedReturn),
    totalValue: Math.round(totalValue),
    yearlyBreakdown,
  };
}

// 3. Retirement Calculator
export interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  currentMonthlyExpense: number;
  expectedInflation: number; // %
  postRetirementInflation: number; // %
  existingCorpus: number;
  preRetirementReturn: number; // %
  postRetirementReturn: number; // %
}

export interface RetirementResult {
  yearsToRetirement: number;
  yearsInRetirement: number;
  futureMonthlyExpenseAtRetirement: number;
  requiredRetirementCorpus: number;
  projectedExistingCorpus: number;
  corpusGap: number;
  requiredMonthlySavings: number;
}

export function calculateRetirement(input: RetirementInput): RetirementResult {
  const currentAge = Math.max(18, Math.min(75, input.currentAge || 30));
  const retirementAge = Math.max(currentAge + 1, Math.min(80, input.retirementAge || 60));
  const lifeExpectancy = Math.max(retirementAge + 1, Math.min(100, input.lifeExpectancy || 85));
  const monthlyExpense = Math.max(0, input.currentMonthlyExpense || 50000);
  const preInflation = Math.max(0, input.expectedInflation || 6) / 100;
  const postInflation = Math.max(0, input.postRetirementInflation || 6) / 100;
  const existingCorpus = Math.max(0, input.existingCorpus || 0);
  const preRetReturn = Math.max(0, input.preRetirementReturn || 12) / 100;
  const postRetReturn = Math.max(0, input.postRetirementReturn || 8) / 100;

  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;

  // Monthly expense at the time of retirement
  const futureMonthlyExpenseAtRetirement = monthlyExpense * Math.pow(1 + preInflation, yearsToRetirement);
  const annualExpenseAtRetirement = futureMonthlyExpenseAtRetirement * 12;

  // Real return during retirement
  // realRate = (1 + postRetReturn) / (1 + postInflation) - 1
  const realRate = (1 + postRetReturn) / (1 + postInflation) - 1;

  let requiredRetirementCorpus = 0;
  if (Math.abs(realRate) < 0.0001) {
    requiredRetirementCorpus = annualExpenseAtRetirement * yearsInRetirement;
  } else {
    // Annuity due formula
    requiredRetirementCorpus =
      annualExpenseAtRetirement *
      ((1 - Math.pow(1 + realRate, -yearsInRetirement)) / realRate) *
      (1 + realRate);
  }

  // Future value of existing retirement corpus
  const projectedExistingCorpus = existingCorpus * Math.pow(1 + preRetReturn, yearsToRetirement);

  // Shortfall/Gap
  const corpusGap = Math.max(0, requiredRetirementCorpus - projectedExistingCorpus);

  // Required monthly savings to build the gap corpus
  let requiredMonthlySavings = 0;
  if (corpusGap > 0 && yearsToRetirement > 0) {
    const monthlyRate = preRetReturn / 12;
    const nMonths = yearsToRetirement * 12;
    if (monthlyRate === 0) {
      requiredMonthlySavings = corpusGap / nMonths;
    } else {
      // P = Gap / [ ((1+i)^n - 1)/i * (1+i) ]
      requiredMonthlySavings = corpusGap / (((Math.pow(1 + monthlyRate, nMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    }
  }

  return {
    yearsToRetirement,
    yearsInRetirement,
    futureMonthlyExpenseAtRetirement: Math.round(futureMonthlyExpenseAtRetirement),
    requiredRetirementCorpus: Math.round(requiredRetirementCorpus),
    projectedExistingCorpus: Math.round(projectedExistingCorpus),
    corpusGap: Math.round(corpusGap),
    requiredMonthlySavings: Math.round(requiredMonthlySavings),
  };
}

// 4. Financial Health Checkup
export interface FinancialHealthInput {
  ageBand: 'under30' | '30to45' | '45to60' | 'above60';
  emergencyFundMonths: number; // 0 to 12
  hasTermInsurance: 'none' | 'adequate' | 'inadequate';
  hasHealthInsurance: 'none' | 'basic' | 'comprehensive';
  emiToIncomePercent: number; // 0 to 100%
  savingsRatePercent: number; // 0 to 80%
  hasRetirementPlan: 'none' | 'started' | 'structured';
  hasEstatePlan: 'no' | 'nominationOnly' | 'willPrepared';
}

export interface FinancialHealthResult {
  score: number; // 0 to 100
  readinessBand: 'Strong Foundation' | 'Needs Attention' | 'Priority Areas';
  summary: string;
  strengths: string[];
  gaps: string[];
  priorityActions: string[];
}

export function calculateFinancialHealth(input: FinancialHealthInput): FinancialHealthResult {
  let score = 0;
  const strengths: string[] = [];
  const gaps: string[] = [];
  const priorityActions: string[] = [];

  // 1. Emergency Fund (max 20 pts)
  if (input.emergencyFundMonths >= 6) {
    score += 20;
    strengths.push('Robust emergency reserve (>6 months expenses in liquid funds)');
  } else if (input.emergencyFundMonths >= 3) {
    score += 12;
    gaps.push('Emergency buffer is modest; target 6 months of mandatory household expenses');
    priorityActions.push('Direct current surplus into high-liquidity sweep/liquid funds to reach 6 months reserve');
  } else {
    score += 3;
    gaps.push('Critical vulnerability: inadequate emergency reserve exposes investments to sudden liquidation');
    priorityActions.push('Pause speculative allocations until at least 3 to 6 months of living expenses are banked');
  }

  // 2. Health & Term Insurance (max 25 pts)
  let insuranceScore = 0;
  if (input.hasTermInsurance === 'adequate') {
    insuranceScore += 12;
    strengths.push('Dedicated pure term life cover protecting family human capital');
  } else if (input.hasTermInsurance === 'inadequate') {
    insuranceScore += 5;
    gaps.push('Life insurance cover appears inadequate relative to liabilities and dependent timelines');
    priorityActions.push('Evaluate pure term insurance for 15-20x annual expenses before taking on additional investments');
  } else {
    gaps.push('No pure term life insurance in place for primary earners');
    priorityActions.push('Obtain adequate pure term cover immediately to protect dependents');
  }

  if (input.hasHealthInsurance === 'comprehensive') {
    insuranceScore += 13;
    strengths.push('Comprehensive family floater health cover independent of employer policies');
  } else if (input.hasHealthInsurance === 'basic') {
    insuranceScore += 7;
    gaps.push('Health cover may rely primarily on corporate group policy or modest sum insured');
    priorityActions.push('Acquire an independent retail super top-up health policy to safeguard against medical inflation');
  } else {
    gaps.push('No independent health insurance; hospital emergencies can wipe out accumulated savings');
    priorityActions.push('Set up dedicated family health insurance cover');
  }
  score += insuranceScore;

  // 3. Debt Burden (max 20 pts)
  if (input.emiToIncomePercent <= 20) {
    score += 20;
    strengths.push('Healthy low debt-to-income ratio (<20% EMI burden)');
  } else if (input.emiToIncomePercent <= 40) {
    score += 14;
    strengths.push('Manageable debt levels within prudent financial planning guidelines');
  } else if (input.emiToIncomePercent <= 50) {
    score += 8;
    gaps.push('Elevated debt ratio (40-50% income going towards debt obligations)');
    priorityActions.push('Structure an accelerated repayment plan for high-interest loans (credit cards, personal loans)');
  } else {
    score += 2;
    gaps.push('Severe debt load (>50% income consumed by EMIs), crowding out long-term wealth creation');
    priorityActions.push('Consolidate high-cost liabilities immediately and avoid taking new debt');
  }

  // 4. Savings Discipline (max 15 pts)
  if (input.savingsRatePercent >= 30) {
    score += 15;
    strengths.push('Exceptional savings discipline (>30% of take-home income deployed into investments)');
  } else if (input.savingsRatePercent >= 20) {
    score += 11;
    strengths.push('Good savings rate (20-30%) providing steady fuel for compounding');
  } else if (input.savingsRatePercent >= 10) {
    score += 6;
    gaps.push('Modest savings rate (10-20%); wealth accumulation velocity may lag future goals');
    priorityActions.push('Automate SIPs on salary credit day to implement the "Save First, Spend Later" rule');
  } else {
    score += 2;
    gaps.push('Savings rate under 10% impairs long-term compounding and retirement readiness');
    priorityActions.push('Perform a detailed cash-flow and lifestyle audit to redirect discretionary spends to automated SIPs');
  }

  // 5. Retirement Planning (max 12 pts)
  if (input.hasRetirementPlan === 'structured') {
    score += 12;
    strengths.push('Clear, inflation-indexed retirement target backed by dedicated long-term portfolio');
  } else if (input.hasRetirementPlan === 'started') {
    score += 7;
    gaps.push('Retirement savings initiated without clear calculation of post-retirement inflation and corpus longevity');
    priorityActions.push('Model exact corpus requirement with a Personal CFO to align asset allocation with your target year');
  } else {
    score += 1;
    gaps.push('No retirement blueprint in place; reliant solely on statutory EPF or future assumptions');
    priorityActions.push('Run our Retirement Planning calculator and start a targeted long-term equity SIP');
  }

  // 6. Estate & Succession Planning (max 8 pts)
  if (input.hasEstatePlan === 'willPrepared') {
    score += 8;
    strengths.push('Foresight demonstrated with drafted Will and complete family nomination records');
  } else if (input.hasEstatePlan === 'nominationOnly') {
    score += 5;
    gaps.push('Nominations in place, but lacks a formal Will or clear succession architecture');
    priorityActions.push('Formalize asset registry and consult on a clean Will to eliminate ambiguity for heirs');
  } else {
    score += 1;
    gaps.push('Unchecked nominations and missing estate documentation pose high transmission friction');
    priorityActions.push('Conduct an audit of bank/mutual fund nominations and draft essential legacy directives');
  }

  let readinessBand: 'Strong Foundation' | 'Needs Attention' | 'Priority Areas';
  let summary = '';

  if (score >= 75) {
    readinessBand = 'Strong Foundation';
    summary = 'Your financial framework exhibits strong discipline and defensive safeguards. Fine-tuning asset allocation and succession readiness will lock in multi-generational wealth preservation.';
  } else if (score >= 50) {
    readinessBand = 'Needs Attention';
    summary = 'You have laid several important building blocks, but noticeable protection or retirement gaps leave your capital exposed to unexpected life shocks.';
  } else {
    readinessBand = 'Priority Areas';
    summary = 'Your current financial posture is vulnerable to liquidity disruptions and under-protection. Addressing fundamental safety nets should take priority over chasing yields.';
  }

  return {
    score: Math.min(100, Math.max(0, score)),
    readinessBand,
    summary,
    strengths: strengths.slice(0, 4),
    gaps: gaps.slice(0, 4),
    priorityActions: priorityActions.slice(0, 4),
  };
}

// 5. Life Insurance Need Calculator (Human Life Value & Needs Approach)
export interface LifeInsuranceInput {
  currentAge: number;
  annualIncome: number;
  annualFamilyExpense: number;
  outstandingLiabilities: number; // Home loan, personal loan, etc.
  futureMajorGoals: number; // Child higher education, marriage, etc.
  existingInvestments: number; // Mutual funds, shares, deposits
  existingLifeCover: number; // Current term / insurance
  yearsOfSupportNeeded: number; // e.g. 20 years
}

export interface LifeInsuranceResult {
  livingExpenseCorpus: number;
  totalFinancialObligations: number;
  availableLiquidAssets: number;
  netProtectionRequirement: number;
  currentShortfall: number;
}

export function calculateLifeInsuranceNeed(input: LifeInsuranceInput): LifeInsuranceResult {
  const expense = Math.max(0, input.annualFamilyExpense || 0);
  const years = Math.max(1, Math.min(40, input.yearsOfSupportNeeded || 20));
  const liabilities = Math.max(0, input.outstandingLiabilities || 0);
  const futureGoals = Math.max(0, input.futureMajorGoals || 0);
  const investments = Math.max(0, input.existingInvestments || 0);
  const existingCover = Math.max(0, input.existingLifeCover || 0);

  // Present value corpus required to support family living expenses
  // Assuming a conservative 2% net real yield after inflation for family income pool
  const realYield = 0.02;
  const livingExpenseCorpus = expense * ((1 - Math.pow(1 + realYield, -years)) / realYield) * (1 + realYield);

  const totalFinancialObligations = livingExpenseCorpus + liabilities + futureGoals;
  const availableLiquidAssets = investments;

  const netProtectionRequirement = Math.max(0, totalFinancialObligations - availableLiquidAssets);
  const currentShortfall = Math.max(0, netProtectionRequirement - existingCover);

  return {
    livingExpenseCorpus: Math.round(livingExpenseCorpus),
    totalFinancialObligations: Math.round(totalFinancialObligations),
    availableLiquidAssets: Math.round(availableLiquidAssets),
    netProtectionRequirement: Math.round(netProtectionRequirement),
    currentShortfall: Math.round(currentShortfall),
  };
}

// 6. Goal Planning Calculator
export interface GoalPlanningInput {
  currentCost: number;
  yearsToGoal: number;
  expectedInflation: number; // %
  existingSavings: number;
  expectedReturnRate: number; // %
}

export interface GoalPlanningResult {
  futureCost: number;
  projectedExistingSavings: number;
  remainingGoalCorpus: number;
  requiredMonthlySIP: number;
  requiredLumpsumToday: number;
}

export function calculateGoalPlanning(input: GoalPlanningInput): GoalPlanningResult {
  const cost = Math.max(0, input.currentCost || 0);
  const years = Math.max(1, Math.min(40, input.yearsToGoal || 5));
  const inflation = Math.max(0, input.expectedInflation || 6) / 100;
  const existing = Math.max(0, input.existingSavings || 0);
  const annualReturn = Math.max(0, input.expectedReturnRate || 12) / 100;

  const futureCost = cost * Math.pow(1 + inflation, years);
  const projectedExistingSavings = existing * Math.pow(1 + annualReturn, years);
  const remainingGoalCorpus = Math.max(0, futureCost - projectedExistingSavings);

  const months = years * 12;
  const monthlyRate = annualReturn / 12;

  let requiredMonthlySIP = 0;
  if (remainingGoalCorpus > 0) {
    if (monthlyRate === 0) {
      requiredMonthlySIP = remainingGoalCorpus / months;
    } else {
      requiredMonthlySIP =
        remainingGoalCorpus / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    }
  }

  // Required lumpsum today if invested fully now
  const requiredLumpsumToday = remainingGoalCorpus / Math.pow(1 + annualReturn, years);

  return {
    futureCost: Math.round(futureCost),
    projectedExistingSavings: Math.round(projectedExistingSavings),
    remainingGoalCorpus: Math.round(remainingGoalCorpus),
    requiredMonthlySIP: Math.round(requiredMonthlySIP),
    requiredLumpsumToday: Math.round(requiredLumpsumToday),
  };
}

// 7. SWP (Systematic Withdrawal Plan) Calculator
export interface SWPInput {
  initialCorpus: number;
  monthlyWithdrawal: number;
  years: number;
  expectedAnnualReturn: number; // %
}

export interface SWPResult {
  totalWithdrawn: number;
  finalCorpus: number;
  isDepleted: boolean;
  depletedMonth?: number;
  monthlyTrajectory: Array<{ year: number; balance: number; withdrawn: number }>;
}

export function calculateSWP(input: SWPInput): SWPResult {
  let corpus = Math.max(0, input.initialCorpus || 0);
  const withdrawal = Math.max(0, input.monthlyWithdrawal || 0);
  const years = Math.max(1, Math.min(40, input.years || 10));
  const rate = Math.max(0, input.expectedAnnualReturn || 8) / 100 / 12;
  const totalMonths = years * 12;

  let totalWithdrawn = 0;
  let isDepleted = false;
  let depletedMonth: number | undefined;

  const monthlyTrajectory: Array<{ year: number; balance: number; withdrawn: number }> = [];

  for (let m = 1; m <= totalMonths; m++) {
    // Interest added
    corpus = corpus * (1 + rate);
    // Withdrawal subtracted
    if (corpus >= withdrawal) {
      corpus -= withdrawal;
      totalWithdrawn += withdrawal;
    } else {
      totalWithdrawn += corpus;
      corpus = 0;
      isDepleted = true;
      if (!depletedMonth) depletedMonth = m;
    }

    if (m % 12 === 0 || m === totalMonths) {
      monthlyTrajectory.push({
        year: Math.ceil(m / 12),
        balance: Math.round(corpus),
        withdrawn: Math.round(totalWithdrawn),
      });
    }
  }

  return {
    totalWithdrawn: Math.round(totalWithdrawn),
    finalCorpus: Math.round(corpus),
    isDepleted,
    depletedMonth,
    monthlyTrajectory,
  };
}

// 8. SIP Top-Up Calculator
export interface SIPTopUpInput {
  startingMonthlyInvestment: number;
  annualTopUpPercent: number; // e.g., 10%
  years: number;
  expectedReturnRate: number; // %
}

export interface SIPTopUpResult {
  standardInvested: number;
  standardValue: number;
  topUpInvested: number;
  topUpValue: number;
  extraAccumulated: number;
  gainPercentage: number;
}

export function calculateSIPTopUp(input: SIPTopUpInput): SIPTopUpResult {
  const p = Math.max(0, input.startingMonthlyInvestment || 0);
  const stepUpPct = Math.max(0, Math.min(50, input.annualTopUpPercent || 0)) / 100;
  const years = Math.max(1, Math.min(40, input.years || 10));
  const monthlyRate = Math.max(0, input.expectedReturnRate || 12) / 100 / 12;

  // Regular SIP
  const regular = calculateSIP({
    monthlyInvestment: p,
    years,
    expectedReturnRate: input.expectedReturnRate,
  });

  // Top-Up SIP simulation
  let topUpInvested = 0;
  let topUpValue = 0;
  let currentMonthlyP = p;

  for (let y = 1; y <= years; y++) {
    for (let m = 1; m <= 12; m++) {
      topUpInvested += currentMonthlyP;
      // Add current month investment and compound for remaining months
      const monthsRemaining = (years - y) * 12 + (12 - m);
      topUpValue += currentMonthlyP * Math.pow(1 + monthlyRate, monthsRemaining + 1);
    }
    currentMonthlyP = currentMonthlyP * (1 + stepUpPct);
  }

  const extraAccumulated = Math.max(0, topUpValue - regular.totalValue);
  const gainPercentage = regular.totalValue > 0 ? (extraAccumulated / regular.totalValue) * 100 : 0;

  return {
    standardInvested: regular.investedAmount,
    standardValue: regular.totalValue,
    topUpInvested: Math.round(topUpInvested),
    topUpValue: Math.round(topUpValue),
    extraAccumulated: Math.round(extraAccumulated),
    gainPercentage: Math.round(gainPercentage * 10) / 10,
  };
}

// 9. Child Education Calculator
export interface ChildEducationInput {
  childCurrentAge: number;
  collegeStartAge: number; // e.g. 18
  currentCostOfEducation: number; // e.g. 25 Lakhs
  educationInflationRate: number; // e.g. 8-10%
  existingSavings: number;
  expectedReturnRate: number; // e.g. 12%
}

export interface ChildEducationResult {
  yearsUntilCollege: number;
  inflatedFutureCost: number;
  futureValueOfExistingSavings: number;
  netFundingGap: number;
  requiredMonthlySIP: number;
}

export function calculateChildEducation(input: ChildEducationInput): ChildEducationResult {
  const currentAge = Math.max(0, Math.min(25, input.childCurrentAge || 3));
  const collegeAge = Math.max(currentAge + 1, Math.min(30, input.collegeStartAge || 18));
  const currentCost = Math.max(0, input.currentCostOfEducation || 2000000);
  const inflation = Math.max(0, input.educationInflationRate || 9) / 100;
  const existing = Math.max(0, input.existingSavings || 0);
  const annualReturn = Math.max(0, input.expectedReturnRate || 12) / 100;

  const yearsUntilCollege = collegeAge - currentAge;
  const inflatedFutureCost = currentCost * Math.pow(1 + inflation, yearsUntilCollege);
  const futureValueOfExistingSavings = existing * Math.pow(1 + annualReturn, yearsUntilCollege);
  const netFundingGap = Math.max(0, inflatedFutureCost - futureValueOfExistingSavings);

  const months = yearsUntilCollege * 12;
  const monthlyRate = annualReturn / 12;

  let requiredMonthlySIP = 0;
  if (netFundingGap > 0) {
    if (monthlyRate === 0) {
      requiredMonthlySIP = netFundingGap / months;
    } else {
      requiredMonthlySIP =
        netFundingGap / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    }
  }

  return {
    yearsUntilCollege,
    inflatedFutureCost: Math.round(inflatedFutureCost),
    futureValueOfExistingSavings: Math.round(futureValueOfExistingSavings),
    netFundingGap: Math.round(netFundingGap),
    requiredMonthlySIP: Math.round(requiredMonthlySIP),
  };
}

// 10. Cost of Delay Calculator
export interface CostOfDelayInput {
  monthlyInvestment: number;
  delayYears: number; // e.g. 1, 3, 5 years
  totalTenureYears: number; // e.g. 20 years
  expectedReturnRate: number; // %
}

export interface CostOfDelayResult {
  startingNowValue: number;
  startingLaterValue: number;
  wealthLossDueToDelay: number;
  extraMonthlySIPNeededLater: number;
}

export function calculateCostOfDelay(input: CostOfDelayInput): CostOfDelayResult {
  const p = Math.max(0, input.monthlyInvestment || 10000);
  const delayYears = Math.max(1, Math.min(15, input.delayYears || 3));
  const totalYears = Math.max(delayYears + 1, Math.min(40, input.totalTenureYears || 20));
  const annualReturn = Math.max(0, input.expectedReturnRate || 12);

  const startingNow = calculateSIP({
    monthlyInvestment: p,
    years: totalYears,
    expectedReturnRate: annualReturn,
  });

  const delayedTenure = totalYears - delayYears;
  const startingLater = calculateSIP({
    monthlyInvestment: p,
    years: delayedTenure,
    expectedReturnRate: annualReturn,
  });

  const wealthLossDueToDelay = Math.max(0, startingNow.totalValue - startingLater.totalValue);

  // Extra monthly SIP needed during remaining period to match target value
  const monthlyRate = (annualReturn / 100) / 12;
  const remainingMonths = delayedTenure * 12;
  let requiredMonthlyLater = p;
  if (monthlyRate > 0 && remainingMonths > 0) {
    requiredMonthlyLater =
      startingNow.totalValue / (((Math.pow(1 + monthlyRate, remainingMonths) - 1) / monthlyRate) * (1 + monthlyRate));
  }

  const extraMonthlySIPNeededLater = Math.max(0, Math.round(requiredMonthlyLater - p));

  return {
    startingNowValue: startingNow.totalValue,
    startingLaterValue: startingLater.totalValue,
    wealthLossDueToDelay: Math.round(wealthLossDueToDelay),
    extraMonthlySIPNeededLater,
  };
}
