'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <i className="ri-star-smile-line w-8 h-8 flex items-center justify-center text-yellow-600"></i>
            <h1 className="text-2xl font-pacifico text-indigo-900">AstroGuide</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/consult" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Consult
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Products
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line w-4 h-4 flex items-center justify-center"></i>
              <span>Chat Now</span>
            </a>
            <Link 
              href="/consult" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Book Reading
            </Link>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center text-gray-600`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/consult" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer">
                Consult
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer">
                Products
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors cursor-pointer">
                About
              </Link>
              <div className="pt-4 space-y-2">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Chat Now</span>
                </a>
                <Link 
                  href="/consult" 
                  className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Book Reading
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}