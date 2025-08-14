import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { navigationItems } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">Dooha</span>
          </div> */}
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent text-2xl font-bold">
                Dooha
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="p-2 rounded-full"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
            {/* <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button> */}
            <a href="https://wa.me/6285159887588" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800">
                Let's Collaborate
              </Button></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;