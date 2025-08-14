import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { clientAvatars } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            We Create Digital Magic That
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Inspires
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Dooha, we help small startups tackle the world's biggest challenges with tailored solutions, 
            guiding you from strategy to success in a competitive market.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full mb-16 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          
          {/* Client avatars */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex -space-x-2">
              {clientAvatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt={`Client ${index + 1}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-md hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
          
          {/* Trust indicator */}
          <div className="text-center">
            <p className="text-gray-600 font-medium">
              <span className="font-bold text-gray-900">Trusted by 100+ clients</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Loved by 100+ big and small brands around the world
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating "Get This Template" button */}
      {/* <div className="fixed bottom-6 right-6 z-40">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          Get This Template
        </Button>
      </div> */}
    </section>
  );
};

export default HeroSection;