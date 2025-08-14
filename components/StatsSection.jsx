import React from 'react';
import { stats } from '../data/mock';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            Crafting exceptional, well experienced & technology driven strategies to drive impactful results with
          </h2>
          
          {/* Key values */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center space-x-3 bg-purple-100 px-6 py-3 rounded-full">
              <span className="text-2xl">✨</span>
              <span className="text-lg font-semibold text-purple-700 italic">Creativity</span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full">
              <span className="text-2xl">💡</span>
              <span className="text-lg font-semibold text-blue-700 italic">Innovation</span>
            </div>
            <div className="flex items-center space-x-3 bg-orange-100 px-6 py-3 rounded-full">
              <span className="text-2xl">🎯</span>
              <span className="text-lg font-semibold text-orange-700 italic">Strategy</span>
            </div>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;