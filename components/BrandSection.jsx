import React from 'react';
import { brandLogos } from '../data/mock';

const BrandSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand logos carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap"
              >
                <span className="text-2xl">{brand.icon}</span>
                <span className="text-lg font-semibold">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;