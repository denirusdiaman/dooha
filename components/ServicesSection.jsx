import React from 'react';
import { services } from '../data/mock';
import { Button } from './ui/button';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
            Where innovation meets
            <span className="block">aesthetics</span>
          </h2>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            See Our Work in Action.<br />
            Start Your Creative Journey with Us!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">
              Let's Collaborate
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full border-gray-300 hover:bg-gray-50">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;