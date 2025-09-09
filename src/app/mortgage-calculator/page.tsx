'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { HomeIcon, CalculatorIcon, CurrencyDollarIcon, BanknotesIcon, BuildingOfficeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Format currency helper function
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format percentage helper function
const formatPercentage = (value: number) => {
  return `${value}%`;
};

// Main calculator component
function MortgageCalculatorContent() {
  const searchParams = useSearchParams();
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20);
  const [downPaymentAmount, setDownPaymentAmount] = useState(80000);
  const [loanAmount, setLoanAmount] = useState(320000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(100);
  const [hoaFees, setHoaFees] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Get initial values from URL params if they exist
  useEffect(() => {
    const zip = searchParams.get('zip');
    const taxes = searchParams.get('taxes');
    
    if (taxes) {
      setPropertyTax(parseFloat(taxes));
    }
  }, [searchParams]);

  // Calculate down payment amount when home price or down payment percentage changes
  useEffect(() => {
    const newDownPaymentAmount = (homePrice * downPayment) / 100;
    setDownPaymentAmount(newDownPaymentAmount);
    setLoanAmount(homePrice - newDownPaymentAmount);
  }, [homePrice, downPayment]);

  // Calculate monthly payment when inputs change
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const principal = loanAmount;
    
    if (monthlyInterestRate === 0) {
      return principal / numberOfPayments + (propertyTax + homeInsurance + hoaFees) / 12;
    }
    
    const mortgagePayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    return mortgagePayment + (propertyTax + homeInsurance + hoaFees) / 12;
  };

  // Update monthly payment when inputs change
  useEffect(() => {
    const payment = calculateMonthlyPayment();
    setMonthlyPayment(payment);
  }, [homePrice, downPayment, loanAmount, interestRate, loanTerm, propertyTax, homeInsurance, hoaFees]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mortgage Calculator
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Estimate your monthly mortgage payments
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              {/* Home Price */}
              <div>
                <label htmlFor="homePrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Home Price
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="homePrice"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
                    Down Payment
                  </label>
                  <span className="text-sm text-gray-500">
                    {formatCurrency(downPaymentAmount)} ({downPayment}%)
                  </span>
                </div>
                <input
                  type="range"
                  id="downPayment"
                  min="3"
                  max="100"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3% Min</span>
                  <span>20% Ideal</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Loan Amount */}
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="loanAmount"
                    className="bg-gray-100 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    value={loanAmount}
                    readOnly
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
                    Interest Rate
                  </label>
                  <span className="text-sm text-gray-500">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  id="interestRate"
                  min="2"
                  max="15"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2%</span>
                  <span>8.5%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Term (years)
                </label>
                <select
                  id="loanTerm"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                >
                  <option value={10}>10 years</option>
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>

              {/* Property Tax */}
              <div>
                <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Tax (yearly)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="propertyTax"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Home Insurance */}
              <div>
                <label htmlFor="homeInsurance" className="block text-sm font-medium text-gray-700 mb-1">
                  Home Insurance (yearly)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="homeInsurance"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* HOA Fees */}
              <div>
                <label htmlFor="hoaFees" className="block text-sm font-medium text-gray-700 mb-1">
                  HOA Fees (monthly)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="hoaFees"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                    value={hoaFees}
                    onChange={(e) => setHoaFees(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Estimated Payment</h2>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600">
                  {formatCurrency(monthlyPayment)}
                </div>
                <div className="text-gray-500 mt-1">per month</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Home Price</span>
                  <span className="font-medium">{formatCurrency(homePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment</span>
                  <span className="font-medium">{formatCurrency(downPaymentAmount)} ({downPayment}%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-medium">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-medium">{interestRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Term</span>
                  <span className="font-medium">{loanTerm} years</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={() => setShowBreakdown(!showBreakdown)}
              >
                {showBreakdown ? 'Hide' : 'Show'} Full Breakdown
              </button>

              {showBreakdown && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Monthly Payment Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal & Interest</span>
                      <span>{formatCurrency(monthlyPayment - (propertyTax / 12) - (homeInsurance / 12) - hoaFees)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Tax</span>
                      <span>{formatCurrency(propertyTax / 12)}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Insurance</span>
                      <span>{formatCurrency(homeInsurance / 12)}/mo</span>
                    </div>
                    {hoaFees > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">HOA Fees</span>
                        <span>{formatCurrency(hoaFees)}/mo</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Get Pre-Approved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function MortgageCalculator() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading calculator...</div>}>
      <MortgageCalculatorContent />
    </Suspense>
  );
}
