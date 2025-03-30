import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedServices() {
  // Featured services/categories instead of properties
  const features = [
    {
      id: 1,
      title: "Luxury Homes",
      description: "Exquisite properties built with premium materials and finishes for discerning clients seeking comfort and elegance.",
      icon: (
        <svg className="h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      id: 2,
      title: "Waterfront Estates",
      description: "Breathtaking properties with stunning water views, perfect for those who appreciate premium waterfront living.",
      icon: (
        <svg className="h-12 w-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "from-teal-500 to-teal-400"
    },
    {
      id: 3,
      title: "Urban Retreats",
      description: "City properties offering convenience and luxury with proximity to culture, dining, and entertainment options.",
      icon: (
        <svg className="h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-400"
    }
  ];

  // Services offered
  const services = [
    {
      title: "Residential Properties",
      description: "Luxury apartments and villas in prime locations",
      icon: "🏠"
    },
    {
      title: "Commercial Spaces",
      description: "Premium office spaces and retail locations",
      icon: "🏢"
    },
    {
      title: "Property Management",
      description: "Complete maintenance and management solutions",
      icon: "🔧"
    },
    {
      title: "Investment Advisory",
      description: "Expert guidance for real estate investments",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50/50 via-amber-50/50 to-yellow-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Premium
            <span className="bg-gradient-to-r from-red-800 to-amber-700 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} 
                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all
                           border border-gray-100 hover:border-amber-200 group">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 