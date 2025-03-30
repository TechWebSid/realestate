import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-100 opacity-60"></div>
        <div className="absolute top-1/3 -left-24 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-teal-100 opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-yellow-100 opacity-40"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-12 sm:py-16 md:py-24">
          {/* Left column - Text content */}
          <div className="flex-1 md:pr-8 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Luxury Homes for Modern Living
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
              Premium properties curated for discerning clients. Experience exceptional service and find your perfect home with RealtyHub.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link href="/properties" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:from-blue-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg text-center text-sm sm:text-base">
                Explore Properties
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 border border-blue-200 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-blue-50 transition-all shadow-sm hover:shadow-md text-center text-sm sm:text-base">
                Contact Us
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600 mr-2">15+</span>
                <span className="text-gray-600 text-sm sm:text-base">Years<br/>Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600 mr-2">200+</span>
                <span className="text-gray-600 text-sm sm:text-base">Happy<br/>Clients</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600 mr-2">50+</span>
                <span className="text-gray-600 text-sm sm:text-base">Luxury<br/>Properties</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="flex-1 relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
              <div className="h-full w-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  fill
                  style={{objectFit: 'cover'}}
                  alt="Luxury home exterior"
                  priority
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                  <div className="text-white">
                    <p className="text-xs sm:text-sm uppercase tracking-widest mb-0.5 sm:mb-1">Featured Property</p>
                    <p className="text-base sm:text-xl font-semibold">Modern Luxury Villa</p>
                    <p className="flex items-center text-xs sm:text-sm mt-0.5 sm:mt-1">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      Beverly Hills, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 