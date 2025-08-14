import React from 'react';
import { pricingPlans } from '../data/mock';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
            Pick the plan that fits your
            <span className="block">start-up</span>
          </h2>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl ${
                plan.isPopular 
                  ? 'bg-black text-white' 
                  : 'bg-gray-50 text-gray-900'
              } hover:scale-105 transition-transform duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-lg mb-6 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                </div>
                
                <Button 
                  className={`w-full py-3 rounded-full font-semibold ${
                    plan.isPopular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Let's Collaborate
                </Button>
              </div>
              
              <div>
                <p className={`text-sm uppercase tracking-wide mb-4 ${
                  plan.isPopular ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Features
                </p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check 
                        className={`w-5 h-5 ${
                          plan.isPopular ? 'text-white' : 'text-green-600'
                        }`} 
                      />
                      <span className={plan.isPopular ? 'text-gray-300' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;