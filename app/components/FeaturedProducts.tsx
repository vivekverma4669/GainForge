'use client';

import Link from 'next/link';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Ruby Gemstone Ring',
      description: 'Authentic ruby for Sun energy enhancement and leadership qualities',
      price: '$299',
      originalPrice: '$399',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20ruby%20gemstone%20ring%20on%20elegant%20white%20background%2C%20red%20precious%20stone%20jewelry%2C%20spiritual%20healing%20crystal%2C%20luxurious%20gold%20setting%2C%20traditional%20Indian%20jewelry%20design%2C%20high%20quality%20product%20photography%2C%20clean%20minimalist%20background%2C%20professional%20lighting%2C%20sacred%20gemstone%20for%20astrology&width=400&height=400&seq=ruby-ring&orientation=squarish',
      benefits: ['Enhances confidence', 'Boosts leadership', 'Improves circulation'],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Rudraksha Mala 108 Beads',
      description: 'Sacred 5-mukhi rudraksha beads for meditation and spiritual growth',
      price: '$89',
      originalPrice: '$129',
      image: 'https://readdy.ai/api/search-image?query=traditional%20rudraksha%20mala%20beads%20necklace%20on%20white%20background%2C%20sacred%20brown%20prayer%20beads%2C%20spiritual%20meditation%20jewelry%2C%20authentic%20Indian%20rudraksha%2C%20clean%20product%20photography%2C%20natural%20organic%20beads%2C%20spiritual%20healing%20accessories%2C%20traditional%20Hindu%20prayer%20beads&width=400&height=400&seq=rudraksha-mala&orientation=squarish',
      benefits: ['Enhances meditation', 'Reduces stress', 'Spiritual protection'],
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Healing Crystal Bracelet',
      description: 'Multi-stone bracelet with amethyst, rose quartz, and clear quartz',
      price: '$149',
      originalPrice: '$199',
      image: 'https://readdy.ai/api/search-image?query=colorful%20healing%20crystal%20bracelet%20on%20white%20background%2C%20mixed%20gemstone%20jewelry%2C%20purple%20amethyst%20pink%20rose%20quartz%20clear%20crystal%20beads%2C%20spiritual%20healing%20accessories%2C%20clean%20product%20photography%2C%20chakra%20balancing%20bracelet%2C%20natural%20stone%20jewelry&width=400&height=400&seq=crystal-bracelet&orientation=squarish',
      benefits: ['Balances chakras', 'Emotional healing', 'Positive energy'],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Sri Yantra Copper Plate',
      description: 'Hand-engraved Sri Yantra for prosperity and spiritual advancement',
      price: '$199',
      originalPrice: '$269',
      image: 'https://readdy.ai/api/search-image?query=golden%20sri%20yantra%20sacred%20geometry%20on%20copper%20plate%2C%20Hindu%20spiritual%20symbol%2C%20hand%20engraved%20divine%20yantra%2C%20traditional%20Indian%20religious%20artifact%2C%20clean%20white%20background%2C%20spiritual%20meditation%20tool%2C%20sacred%20geometry%20design%2C%20prosperity%20symbol&width=400&height=400&seq=sri-yantra&orientation=squarish',
      benefits: ['Attracts wealth', 'Spiritual growth', 'Divine protection'],
      rating: 4.9,
      reviews: 67
    },
    {
      id: 5,
      name: 'Emerald Pendant',
      description: 'Natural emerald pendant for Mercury planet strengthening',
      price: '$449',
      originalPrice: '$599',
      image: 'https://readdy.ai/api/search-image?query=elegant%20emerald%20pendant%20necklace%20on%20white%20background%2C%20green%20precious%20stone%20jewelry%2C%20spiritual%20healing%20crystal%2C%20gold%20chain%20setting%2C%20traditional%20astrology%20gemstone%2C%20clean%20product%20photography%2C%20natural%20emerald%20for%20mercury%20planet&width=400&height=400&seq=emerald-pendant&orientation=squarish',
      benefits: ['Enhances communication', 'Improves intellect', 'Business success'],
      rating: 4.8,
      reviews: 92
    },
    {
      id: 6,
      name: 'Feng Shui Compass',
      description: 'Professional Luo Pan compass for Vastu and Feng Shui analysis',
      price: '$129',
      originalPrice: '$179',
      image: 'https://readdy.ai/api/search-image?query=traditional%20feng%20shui%20compass%20luo%20pan%20on%20white%20background%2C%20Chinese%20geomancy%20tool%2C%20wooden%20circular%20compass%20with%20golden%20markings%2C%20spiritual%20direction%20finder%2C%20vastu%20analysis%20instrument%2C%20clean%20product%20photography%2C%20traditional%20design&width=400&height=400&seq=feng-shui-compass&orientation=squarish',
      benefits: ['Vastu analysis', 'Direction guidance', 'Energy mapping'],
      rating: 4.6,
      reviews: 43
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-yellow-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic gemstones, rudraksha beads, and spiritual accessories blessed for your spiritual journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-fill w-4 h-4 flex items-center justify-center ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500 mr-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Link 
                    href={`/products/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 rounded-full font-semibold text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Buy Now
                  </Link>
                  <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <i className="ri-heart-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-store-line w-5 h-5 flex items-center justify-center mr-2"></i>
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}