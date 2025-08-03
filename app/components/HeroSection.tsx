'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=cosmic%20starry%20night%20sky%20with%20golden%20celestial%20bodies%2C%20mystical%20universe%20background%2C%20deep%20space%20nebula%20with%20twinkling%20stars%2C%20spiritual%20cosmic%20energy%2C%20divine%20light%20rays%2C%20ethereal%20atmosphere%2C%20gold%20and%20purple%20cosmic%20dust%2C%20magical%20starfield%2C%20celestial%20harmony%2C%20peaceful%20cosmic%20meditation%20scene&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="text-yellow-400 block font-pacifico text-4xl md:text-6xl mt-2">
              Cosmic Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the secrets of the universe with personalized astrology consultations, 
            sacred gemstones, and spiritual guidance from certified astrologers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/consult" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-star-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
              Consult an Astrologer
            </Link>
            
            <Link 
              href="/products" 
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-gem-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
              Browse Sacred Products
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <i className="ri-user-star-line w-8 h-8 flex items-center justify-center text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Astrologers</h3>
              <p className="text-gray-300">Certified professionals with decades of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line w-8 h-8 flex items-center justify-center text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Authentic Products</h3>
              <p className="text-gray-300">Genuine gemstones and spiritual items</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <i className="ri-time-line w-8 h-8 flex items-center justify-center text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock guidance and assistance</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line w-6 h-6 flex items-center justify-center text-yellow-400"></i>
      </div>
    </section>
  );
}