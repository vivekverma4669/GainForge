'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      service: 'Kundli Analysis',
      rating: 5,
      text: 'The astrologer provided incredible insights into my career path. Within 3 months of following the remedies, I received a promotion and found my dream job. The gemstone recommendations were spot-on!',
      image: 'https://readdy.ai/api/search-image?query=professional%20Indian%20woman%20smiling%20warmly%2C%20business%20attire%2C%20confident%20expression%2C%20clean%20white%20background%2C%20modern%20headshot%20photography%2C%20trustworthy%20appearance%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20professional%20portrait&width=100&height=100&seq=testimonial-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      service: 'Vastu Consultation',
      rating: 5,
      text: 'Our home felt negative and we were facing financial troubles. After the Vastu consultation and implementing the changes, our business flourished and the family harmony improved dramatically.',
      image: 'https://readdy.ai/api/search-image?query=middle-aged%20Indian%20businessman%20smiling%2C%20traditional%20kurta%20shirt%2C%20confident%20and%20peaceful%20expression%2C%20clean%20white%20background%2C%20professional%20headshot%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20trustworthy%20appearance&width=100&height=100&seq=testimonial-2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Ahmedabad, India',
      service: 'Matchmaking',
      rating: 5,
      text: 'The compatibility analysis was amazingly accurate. My marriage has been blessed and peaceful, exactly as predicted. The timing suggestions were perfect - we married at the most auspicious time.',
      image: 'https://readdy.ai/api/search-image?query=young%20Indian%20woman%20in%20traditional%20saree%2C%20beautiful%20smile%2C%20serene%20expression%2C%20clean%20white%20background%2C%20cultural%20attire%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20professional%20portrait%20photography&width=100&height=100&seq=testimonial-3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      location: 'Bangalore, India',
      service: 'Rudraksha Consultation',
      rating: 5,
      text: 'As a doctor, I was skeptical initially. But the rudraksha mala has brought tremendous peace to my mind. My stress levels reduced significantly and I feel more focused during surgeries.',
      image: 'https://readdy.ai/api/search-image?query=Indian%20doctor%20in%20white%20coat%2C%20professional%20medical%20attire%2C%20confident%20and%20caring%20expression%2C%20clean%20white%20background%2C%20medical%20professional%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20trustworthy%20appearance&width=100&height=100&seq=testimonial-4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Meera Joshi',
      location: 'Pune, India',
      service: 'Gemstone Therapy',
      rating: 5,
      text: 'The emerald pendant recommended for my Mercury weakness has improved my communication skills tremendously. My business negotiations are now much more successful.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Indian%20woman%20in%20business%20attire%2C%20professional%20appearance%2C%20confident%20smile%2C%20clean%20white%20background%2C%20modern%20professional%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20trustworthy%20expression&width=100&height=100&seq=testimonial-5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Amit Gupta',
      location: 'Kolkata, India',
      service: 'Numerology',
      rating: 5,
      text: 'Changed my business name based on numerology consultation. Within 6 months, our revenue doubled! The lucky number guidance for important decisions has been incredibly helpful.',
      image: 'https://readdy.ai/api/search-image?query=Indian%20entrepreneur%20in%20casual%20business%20attire%2C%20confident%20expression%2C%20modern%20professional%20look%2C%20clean%20white%20background%2C%20successful%20businessman%2C%20spiritual%20wellness%2C%20positive%20energy%2C%20approachable%20appearance&width=100&height=100&seq=testimonial-6&orientation=squarish'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-yellow-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from thousands of satisfied clients who found guidance and transformation through our services
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill w-6 h-6 flex items-center justify-center text-yellow-400"></i>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                <p className="text-yellow-600 font-semibold">{testimonials[currentTestimonial].service}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center text-gray-600"></i>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center text-gray-600"></i>
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-yellow-50 px-6 py-4 rounded-full">
            <i className="ri-customer-service-2-line w-6 h-6 flex items-center justify-center text-yellow-600 mr-3"></i>
            <span className="text-gray-700">
              <strong className="text-yellow-600">5000+</strong> satisfied clients worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}