'use client';

import { useState } from 'react';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

interface Astrologer {
  id: string;
  name: string;
  experience: string;
  specialization: string;
  languages: string;
  rating: number;
  reviews: number;
  image: string;
  available: boolean;
}

interface BookingFormProps {
  service: Service;
  astrologer: Astrologer;
}

export default function BookingForm({ service, astrologer }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    preferredDate: '',
    preferredTime: '',
    questions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        birthTime: '',
        birthPlace: '',
        preferredDate: '',
        preferredTime: '',
        questions: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h2>
      
      {/* Booking Summary */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Booking Summary</h3>
          <span className="text-2xl font-bold text-yellow-600">${service.price}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Service</p>
            <p className="font-medium text-gray-900">{service.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="font-medium text-gray-900">{service.duration}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Astrologer</p>
            <p className="font-medium text-gray-900">{astrologer.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Specialization</p>
            <p className="font-medium text-gray-900">{astrologer.specialization}</p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3">
            <i className="ri-check-circle-line w-8 h-8 flex items-center justify-center text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold text-green-900">Booking Confirmed!</h3>
              <p className="text-green-700">We'll contact you within 24 hours to confirm your appointment details.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Birth Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
              Birth Date *
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="birthTime" className="block text-sm font-medium text-gray-700 mb-2">
              Birth Time *
            </label>
            <input
              type="time"
              id="birthTime"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700 mb-2">
              Birth Place *
            </label>
            <input
              type="text"
              id="birthPlace"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="City, State, Country"
            />
          </div>
        </div>

        {/* Preferred Appointment Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time *
            </label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Questions */}
        <div>
          <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-2">
            Specific Questions or Areas of Focus
          </label>
          <textarea
            id="questions"
            name="questions"
            value={formData.questions}
            onChange={handleInputChange}
            rows={4}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Please share any specific questions or areas you'd like to focus on during the consultation..."
          />
          <p className="text-sm text-gray-500 mt-1">{formData.questions.length}/500 characters</p>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
              isSubmitting
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin mr-2"></i>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <i className="ri-calendar-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Confirm Booking - ${service.price}
              </span>
            )}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>By booking, you agree to our Terms of Service and Privacy Policy.</p>
          <p className="mt-1">Payment will be collected after the consultation.</p>
        </div>
      </form>
    </div>
  );
}