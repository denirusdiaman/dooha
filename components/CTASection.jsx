import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
          Innovative Solutions for
          <span className="block">Bold Brands</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Looking to elevate your brand? We craft immersive experiences that captivate, 
          engage, and make your business unforgettable in every interaction.
        </p>
        <a href="https://wa.me/6285159887588" target="_blank" rel="noopener noreferrer"></a>
        <Button 
          size="lg" 
          className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          Let's Collaborate
        </Button></a>
      </div>
    </section>
  );
};

export default CTASection;