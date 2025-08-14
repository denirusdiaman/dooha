import React from 'react';
import { footerLinks, contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            {/* <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Awake</span>
            </div> */}
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent text-2xl font-bold">
                  Dooha
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Empowering businesses with innovative solutions. Let's create something amazing together.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <span className="sr-only">Dribbble</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017 0 15.55 4.477 20.034 10 20.034s10-4.484 10-10.017C20 4.484 15.523 0 10 0zm6.452 4.831c1.36 1.66 2.185 3.775 2.185 6.089 0 .472-.037.93-.107 1.378-2.677-.567-5.226-.42-7.522.394-.244-.597-.504-1.188-.793-1.769 2.665-1.103 4.896-2.691 6.237-6.092zM10 1.659c2.262 0 4.29.932 5.758 2.435-1.135 3.047-3.167 4.459-5.545 5.424-.9-1.65-1.943-3.222-3.09-4.693C8.347 2.803 9.137 1.659 10 1.659zM3.548 15.169C2.188 13.509 1.363 11.394 1.363 9.08c0-.472.037-.93.107-1.378 2.677.567 5.226.42 7.522-.394.244.597.504 1.188.793 1.769-2.665 1.103-4.896 2.691-6.237 6.092zM10 18.375c-2.262 0-4.29-.932-5.758-2.435 1.135-3.047 3.167-4.459 5.545-5.424.9 1.65 1.943 3.222 3.09 4.693-1.224 2.022-2.014 3.166-2.877 3.166z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.983C3.58 0 0 3.58 0 7.983v4.034C0 16.42 3.58 20 7.983 20h4.034C16.42 20 20 16.42 20 12.017V7.983C20 3.58 16.42 0 12.017 0zM10 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm5-9c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Sitemap</h3>
            <ul className="space-y-3">
              {footerLinks.sitemap.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Other Pages</h3>
            <ul className="space-y-3">
              {footerLinks.otherPages.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Details</h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {contactInfo.address}
              </p>
              <p className="text-gray-600">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="text-gray-600">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            ©2025 Awake. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;