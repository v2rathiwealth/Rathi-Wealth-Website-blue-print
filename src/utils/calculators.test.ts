/**
 * Unit test suite for Rathi Wealth calculation engine.
 * Ensures mathematical accuracy, regression protection, and boundary handling.
 */

import {
  calculateSIP,
  calculateLumpsum,
  calculateRetirement,
  calculateFinancialHealth,
  calculateLifeInsuranceNeed,
  calculateGoalPlanning,
  calculateSWP,
  calculateSIPTopUp,
  calculateChildEducation,
  calculateCostOfDelay,
  formatINR,
  formatExactINR,
} from './calculators';

export function runFormulaTests() {
  const results: { test: string; passed: boolean; message?: string }[] = [];

  function assert(name: string, condition: boolean, message?: string) {
    results.push({ test: name, passed: condition, message });
    if (!condition) {
      console.error(`[FAIL] ${name}: ${message}`);
    }
  }

  // 1. SIP Calculator
  {
    const sip = calculateSIP({
      monthlyInvestment: 10000,
      years: 10,
      expectedReturnRate: 12,
    });
    // Total invested = 10,000 * 120 = 12,00,000
    assert('SIP: Invested amount calculation', sip.investedAmount === 1200000);
    // Standard FV of 10k/mo for 10y at 12% is ~23.23 Lakhs
    assert('SIP: Compounded value > Invested', sip.totalValue > 2300000 && sip.totalValue < 2350000);
    assert('SIP: Gain calculation', sip.estimatedReturn === sip.totalValue - sip.investedAmount);

    // Boundary: 0 return
    const sipZero = calculateSIP({ monthlyInvestment: 5000, years: 2, expectedReturnRate: 0 });
    assert('SIP: Zero return rate equals invested amount', sipZero.totalValue === 120000);
  }

  // 2. Lumpsum Calculator
  {
    const lump = calculateLumpsum({
      initialInvestment: 100000,
      years: 5,
      expectedReturnRate: 10,
    });
    // 100000 * (1.1)^5 = 161,051
    assert('Lumpsum: Invested amount preserved', lump.investedAmount === 100000);
    assert('Lumpsum: 10% for 5 years compound accuracy', lump.totalValue === 161051);
  }

  // 3. Retirement Calculator
  {
    const ret = calculateRetirement({
      currentAge: 35,
      retirementAge: 60,
      lifeExpectancy: 85,
      currentMonthlyExpense: 50000,
      expectedInflation: 6,
      postRetirementInflation: 6,
      existingCorpus: 1000000,
      preRetirementReturn: 12,
      postRetirementReturn: 8,
    });
    assert('Retirement: Years to retirement', ret.yearsToRetirement === 25);
    assert('Retirement: Years in retirement', ret.yearsInRetirement === 25);
    assert('Retirement: Required corpus is positive', ret.requiredRetirementCorpus > 0);
    assert('Retirement: Required monthly savings is positive', ret.requiredMonthlySavings > 0);
  }

  // 4. Financial Health Check
  {
    const healthStrong = calculateFinancialHealth({
      ageBand: '30to45',
      emergencyFundMonths: 6,
      hasTermInsurance: 'adequate',
      hasHealthInsurance: 'comprehensive',
      emiToIncomePercent: 15,
      savingsRatePercent: 35,
      hasRetirementPlan: 'structured',
      hasEstatePlan: 'willPrepared',
    });
    assert('Health Check: Strong profile gives Strong Foundation', healthStrong.readinessBand === 'Strong Foundation');
    assert('Health Check: Score is high', healthStrong.score >= 80);

    const healthVulnerable = calculateFinancialHealth({
      ageBand: 'under30',
      emergencyFundMonths: 0,
      hasTermInsurance: 'none',
      hasHealthInsurance: 'none',
      emiToIncomePercent: 60,
      savingsRatePercent: 5,
      hasRetirementPlan: 'none',
      hasEstatePlan: 'no',
    });
    assert('Health Check: Vulnerable profile flags Priority Areas', healthVulnerable.readinessBand === 'Priority Areas');
  }

  // 5. Life Insurance Need
  {
    const life = calculateLifeInsuranceNeed({
      currentAge: 35,
      annualIncome: 2000000,
      annualFamilyExpense: 1000000,
      outstandingLiabilities: 3000000,
      futureMajorGoals: 2500000,
      existingInvestments: 1500000,
      existingLifeCover: 5000000,
      yearsOfSupportNeeded: 20,
    });
    assert('Life Insurance: Living expense corpus is positive', life.livingExpenseCorpus > 0);
    assert('Life Insurance: Shortfall calculated', life.currentShortfall >= 0);
  }

  // 6. SWP Calculator
  {
    const swp = calculateSWP({
      initialCorpus: 5000000,
      monthlyWithdrawal: 25000,
      years: 10,
      expectedAnnualReturn: 8,
    });
    assert('SWP: Total withdrawn is 25000 * 120 = 3000000', swp.totalWithdrawn === 3000000);
    assert('SWP: Final corpus is positive (sustainable withdrawal)', swp.finalCorpus > 0 && !swp.isDepleted);
  }

  // 7. SIP Top-Up
  {
    const topUp = calculateSIPTopUp({
      startingMonthlyInvestment: 10000,
      annualTopUpPercent: 10,
      years: 10,
      expectedReturnRate: 12,
    });
    assert('SIP Top-Up: Top up value exceeds regular SIP value', topUp.topUpValue > topUp.standardValue);
    assert('SIP Top-Up: Extra accumulated is positive', topUp.extraAccumulated > 0);
  }

  // 8. Cost of Delay
  {
    const delay = calculateCostOfDelay({
      monthlyInvestment: 10000,
      delayYears: 3,
      totalTenureYears: 15,
      expectedReturnRate: 12,
    });
    assert('Cost of Delay: Wealth loss is positive', delay.wealthLossDueToDelay > 0);
    assert('Cost of Delay: Extra monthly SIP needed later is positive', delay.extraMonthlySIPNeededLater > 0);
  }

  // Formatting helpers
  assert('Format INR Cr formatting', formatINR(15000000).includes('Cr'));
  assert('Format INR Lakh formatting', formatINR(500000).includes('Lakh'));

  return results;
}
