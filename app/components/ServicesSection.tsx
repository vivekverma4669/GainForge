'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Kundli Analysis',
      description: 'Complete birth chart reading with detailed predictions and remedies',
      price: 'Starting at $49',
      duration: '45-60 mins',
      icon: 'ri-file-chart-line',
      features: ['Birth chart analysis', 'Career guidance', 'Relationship compatibility', 'Health predictions']
    },
    {
      id: 2,
      title: 'Horoscope Reading',
      description: 'Personalized monthly and yearly predictions based on your zodiac',
      price: 'Starting at $29',
      duration: '30-45 mins',
      icon: 'ri-calendar-star-line',
      features: ['Monthly predictions', 'Lucky dates', 'Color recommendations', 'Gemstone suggestions']
    },
    {
      id: 3,
      title: 'Matchmaking',
      description: 'Compatibility analysis for marriage and relationships',
      price: 'Starting at $79',
      duration: '60-75 mins',
      icon: 'ri-heart-2-line',
      features: ['Compatibility score', 'Marriage timing', 'Relationship advice', 'Family harmony']
    },
    {
      id: 4,
      title: 'Vastu Consultation',
      description: 'Home and office space optimization for positive energy',
      price: 'Starting at $99',
      duration: '90 mins',
      icon: 'ri-home-heart-line',
      features: ['Space analysis', 'Direction guidance', 'Remedy suggestions', 'Prosperity enhancement']
    },
    {
      id: 5,
      title: 'Numerology',
      description: 'Name and number analysis for life guidance',
      price: 'Starting at $39',
      duration: '30-45 mins',
      icon: 'ri-hashtag',
      features: ['Name analysis', 'Lucky numbers', 'Life path guidance', 'Business name suggestions']
    },
    {
      id: 6,
      title: 'Palmistry',
      description: 'Hand reading for personality and future insights',
      price: 'Starting at $35',
      duration: '30-40 mins',
      icon: 'ri-hand-heart-line',
      features: ['Life line reading', 'Career predictions', 'Health insights', 'Relationship guidance']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-yellow-600">Consultations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our certified astrologers for personalized guidance on love, career, health, and spiritual growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/consult" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 rounded-full font-semibold text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 whitespace-nowrap cursor-pointer block"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/consult" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
            View All Services & Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}