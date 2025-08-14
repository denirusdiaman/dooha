import React, { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '../data/mock';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            What our satisfied customers are saying about us
            {/* <span className="block">about us</span> */}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Customer stories */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Customer stories</p>
            
            {/* Main testimonial */}
            <div className="mb-8">
              <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Stats and image */}
          <div className="space-y-8">
            {/* Stats card */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Facts & numbers</p>
              <div className="text-6xl font-bold text-gray-900 mb-2">94%</div>
              <p className="text-lg font-semibold text-gray-700">
                Clients recommend our services.
              </p>
            </div>
            
            {/* Customer story image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Customer creativity"
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">Customer stories</p>
                <p className="font-semibold">Their creativity and attention to detail transformed our brand completely!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;