import React from 'react';
import { awards } from '../data/mock';

const AwardsSection = () => {
  return (
    <section className="py-20 bg-white" id="awards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            Accolades and achievements celebration our
            <span className="block">design excellence</span>
          </h2>
        </div>
        
        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {award.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {award.description}
              </p>
              
              <div className="text-sm font-semibold text-blue-600">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;