'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="ri-star-smile-line w-8 h-8 flex items-center justify-center text-yellow-400"></i>
              <h2 className="text-2xl font-pacifico text-white">AstroGuide</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner in spiritual guidance and cosmic wisdom. 
              Discover authentic astrology consultations and sacred products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center text-gray-900"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                <i className="ri-instagram-line w-5 h-5 flex items-center justify-center text-gray-900"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                <i className="ri-youtube-fill w-5 h-5 flex items-center justify-center text-gray-900"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center text-gray-900"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Kundli Analysis</Link></li>
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Horoscope Reading</Link></li>
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Matchmaking</Link></li>
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Vastu Consultation</Link></li>
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Numerology</Link></li>
              <li><Link href="/consult" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Palmistry</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Gemstones</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Rudraksha Beads</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Healing Crystals</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Yantras</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Spiritual Jewelry</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Feng Shui Items</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300">info@astroguide.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-yellow-400 mt-1"></i>
                <span className="text-gray-300">123 Spiritual Avenue,<br/>New Delhi, India 110001</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line w-5 h-5 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AstroGuide. All rights reserved. Blessed with divine guidance.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors cursor-pointer">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}