'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from './BookingForm';

export default function ConsultPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedAstrologer, setSelectedAstrologer] = useState('');

  const services = [
    {
      id: 'kundli',
      name: 'Kundli Analysis',
      duration: '60 minutes',
      price: 49,
      description: 'Complete birth chart reading with detailed predictions'
    },
    {
      id: 'horoscope',
      name: 'Horoscope Reading',
      duration: '45 minutes',
      price: 29,
      description: 'Personalized monthly and yearly predictions'
    },
    {
      id: 'matchmaking',
      name: 'Matchmaking',
      duration: '75 minutes',
      price: 79,
      description: 'Compatibility analysis for marriage and relationships'
    },
    {
      id: 'vastu',
      name: 'Vastu Consultation',
      duration: '90 minutes',
      price: 99,
      description: 'Home and office space optimization'
    },
    {
      id: 'numerology',
      name: 'Numerology',
      duration: '45 minutes',
      price: 39,
      description: 'Name and number analysis for life guidance'
    },
    {
      id: 'palmistry',
      name: 'Palmistry',
      duration: '40 minutes',
      price: 35,
      description: 'Hand reading for personality insights'
    }
  ];

  const astrologers = [
    {
      id: 'pandit-sharma',
      name: 'Pandit Rajesh Sharma',
      experience: '25 years',
      specialization: 'Vedic Astrology, Kundli Analysis',
      languages: 'Hindi, English, Sanskrit',
      rating: 4.9,
      reviews: 2450,
      image: 'https://readdy.ai/api/search-image?query=wise%20Indian%20astrologer%20pandit%20with%20traditional%20tilaka%2C%20white%20beard%2C%20saffron%20clothes%2C%20spiritual%20teacher%2C%20calm%20expression%2C%20clean%20white%20background%2C%20professional%20portrait%2C%20traditional%20Indian%20sage%2C%20peaceful%20demeanor&width=150&height=150&seq=astrologer-1&orientation=squarish',
      available: true
    },
    {
      id: 'guru-priya',
      name: 'Guru Priya Devi',
      experience: '20 years',
      specialization: 'Palmistry, Numerology',
      languages: 'Hindi, English, Tamil',
      rating: 4.8,
      reviews: 1890,
      image: 'https://readdy.ai/api/search-image?query=wise%20Indian%20female%20astrologer%20in%20traditional%20saree%2C%20tilaka%20on%20forehead%2C%20serene%20expression%2C%20spiritual%20teacher%2C%20clean%20white%20background%2C%20professional%20portrait%2C%20traditional%20Indian%20spiritual%20guide%2C%20peaceful%20demeanor&width=150&height=150&seq=astrologer-2&orientation=squarish',
      available: true
    },
    {
      id: 'acharya-kumar',
      name: 'Acharya Vikram Kumar',
      experience: '18 years',
      specialization: 'Vastu Shastra, Gemstone Therapy',
      languages: 'Hindi, English, Gujarati',
      rating: 4.9,
      reviews: 1650,
      image: 'https://readdy.ai/api/search-image?query=Indian%20vastu%20expert%20astrologer%20in%20white%20kurta%2C%20traditional%20appearance%2C%20confident%20expression%2C%20spiritual%20teacher%2C%20clean%20white%20background%2C%20professional%20portrait%2C%20traditional%20Indian%20spiritual%20advisor&width=150&height=150&seq=astrologer-3&orientation=squarish',
      available: false
    },
    {
      id: 'swami-anand',
      name: 'Swami Anand Bharti',
      experience: '30 years',
      specialization: 'Spiritual Healing, Mantra Therapy',
      languages: 'Hindi, English, Bengali',
      rating: 4.9,
      reviews: 3200,
      image: 'https://readdy.ai/api/search-image?query=Indian%20swami%20spiritual%20teacher%20with%20orange%20robes%2C%20peaceful%20expression%2C%20traditional%20tilaka%2C%20wise%20appearance%2C%20clean%20white%20background%2C%20professional%20portrait%2C%20spiritual%20guru%2C%20serene%20demeanor&width=150&height=150&seq=astrologer-4&orientation=squarish',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-yellow-600">Consultation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our certified astrologers for personalized guidance and spiritual insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
            <div className="space-y-4">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedService === service.id 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-200 bg-white hover:border-yellow-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>
                          {service.duration}
                        </span>
                        <span className="text-2xl font-bold text-yellow-600">${service.price}</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedService === service.id 
                        ? 'border-yellow-400 bg-yellow-400' 
                        : 'border-gray-300'
                    }`}>
                      {selectedService === service.id && (
                        <i className="ri-check-line w-3 h-3 flex items-center justify-center text-white"></i>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Astrologer Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Astrologer</h2>
            <div className="space-y-4">
              {astrologers.map((astrologer) => (
                <div 
                  key={astrologer.id}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    !astrologer.available 
                      ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed' 
                      : selectedAstrologer === astrologer.id 
                        ? 'border-yellow-400 bg-yellow-50 cursor-pointer' 
                        : 'border-gray-200 bg-white hover:border-yellow-300 cursor-pointer'
                  }`}
                  onClick={() => astrologer.available && setSelectedAstrologer(astrologer.id)}
                >
                  <div className="flex items-start space-x-4">
                    <img 
                      src={astrologer.image} 
                      alt={astrologer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">{astrologer.name}</h3>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAstrologer === astrologer.id 
                            ? 'border-yellow-400 bg-yellow-400' 
                            : 'border-gray-300'
                        }`}>
                          {selectedAstrologer === astrologer.id && (
                            <i className="ri-check-line w-3 h-3 flex items-center justify-center text-white"></i>
                          )}
                        </div>
                      </div>
                      <p className="text-yellow-600 font-medium mb-2">{astrologer.specialization}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>
                          <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>
                          {astrologer.experience}
                        </span>
                        <span>
                          <i className="ri-translate-2 w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>
                          {astrologer.languages}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`ri-star-fill w-4 h-4 flex items-center justify-center ${i < Math.floor(astrologer.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({astrologer.reviews} reviews)</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          astrologer.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {astrologer.available ? 'Available' : 'Busy'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        {selectedService && selectedAstrologer && (
          <div className="mt-12">
            <BookingForm 
              service={services.find(s => s.id === selectedService)}
              astrologer={astrologers.find(a => a.id === selectedAstrologer)}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}