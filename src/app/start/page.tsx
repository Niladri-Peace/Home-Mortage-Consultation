'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HomeIcon, ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: 'purchase',
    propertyType: 'single_family',
    propertyUse: 'primary',
    propertyState: '',
    propertyCity: '',
    propertyZip: '',
    purchasePrice: '',
    downPayment: '',
    creditScore: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    annualIncome: '',
    employer: '',
    jobTitle: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">What type of loan are you looking for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`p-4 border rounded-lg cursor-pointer ${formData.loanType === 'purchase' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                <input
                  type="radio"
                  name="loanType"
                  value="purchase"
                  checked={formData.loanType === 'purchase'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="font-medium">Purchase</div>
                <p className="text-sm text-gray-600 mt-1">Buying a new home</p>
              </label>
              <label className={`p-4 border rounded-lg cursor-pointer ${formData.loanType === 'refinance' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                <input
                  type="radio"
                  name="loanType"
                  value="refinance"
                  checked={formData.loanType === 'refinance'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="font-medium">Refinance</div>
                <p className="text-sm text-gray-600 mt-1">Lower your rate or take cash out</p>
              </label>
            </div>

            <h3 className="text-lg font-medium mt-8">Property Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { value: 'single_family', label: 'Single Family Home' },
                { value: 'condo', label: 'Condo' },
                { value: 'townhouse', label: 'Townhouse' },
                { value: 'multi_family', label: 'Multi-Family (2-4 units)' },
                { value: 'manufactured', label: 'Manufactured Home' },
              ].map((type) => (
                <label key={type.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type.value}
                    checked={formData.propertyType === type.value}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>

            <h3 className="text-lg font-medium mt-8">Property Use</h3>
            <div className="space-y-2">
              {[
                { value: 'primary', label: 'Primary Residence' },
                { value: 'second_home', label: 'Second Home' },
                { value: 'investment', label: 'Investment Property' },
              ].map((use) => (
                <label key={use.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyUse"
                    value={use.value}
                    checked={formData.propertyUse === use.value}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">{use.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Property Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">
                  Property Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="propertyAddress"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="123 Main St"
                />
              </div>

              <div>
                <label htmlFor="propertyCity" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="propertyCity"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="New York"
                />
              </div>

              <div>
                <label htmlFor="propertyState" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  id="propertyState"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select a state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>

              <div>
                <label htmlFor="propertyZip" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  id="propertyZip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="10001"
                />
              </div>

              <div>
                <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">
                  {formData.loanType === 'purchase' ? 'Purchase Price' : 'Estimated Home Value'}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="purchasePrice"
                    id="purchasePrice"
                    value={formData.purchasePrice}
                    onChange={handleChange}
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                    placeholder="300,000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
                  Down Payment
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="downPayment"
                    id="downPayment"
                    value={formData.downPayment}
                    onChange={handleChange}
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                    placeholder="60,000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">
                  Credit Score
                </label>
                <select
                  id="creditScore"
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select credit score range</option>
                  <option value="300-579">300-579 (Poor)</option>
                  <option value="580-669">580-669 (Fair)</option>
                  <option value="670-739">670-739 (Good)</option>
                  <option value="740-799">740-799 (Very Good)</option>
                  <option value="800-850">800-850 (Excellent)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium">Employment Information</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
                    Annual Income
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="annualIncome"
                      id="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                      placeholder="75,000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="employer" className="block text-sm font-medium text-gray-700">
                    Employer Name
                  </label>
                  <input
                    type="text"
                    name="employer"
                    id="employer"
                    value={formData.employer}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Job Title"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Application Submitted!</h2>
            <p className="mt-2 text-gray-600">
              Thank you for your application. A loan officer will contact you shortly to discuss your options.
            </p>
            <div className="mt-8">
              <p className="text-sm text-gray-500">Next steps:</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>• Check your email for a confirmation</li>
                <li>• Gather your financial documents</li>
                <li>• A loan officer will contact you within 24 hours</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Start Your Application</h1>
          <p className="text-gray-600">
            Complete the following steps to get pre-approved for your mortgage.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step
                      ? 'bg-green-600 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-auto border-t-2 ${
                      currentStep > step ? 'border-green-600' : 'border-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 mt-4 text-sm text-center text-gray-500">
            <div>Loan Type</div>
            <div>Property Info</div>
            <div>Your Info</div>
            <div>Complete</div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          {renderStep()}

          {currentStep < 4 && (
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 border border-gray-300 rounded-md text-sm font-medium ${
                  currentStep === 1
                    ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                }`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {currentStep === 3 ? 'Submit Application' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
