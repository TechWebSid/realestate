import Image from 'next/image';

export default function PropertyHero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full py-12 sm:py-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-rose-400 to-orange-300 text-white text-sm font-medium mb-4">
              Premium Properties
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Dream Home
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
              Explore our handpicked collection of premium residential properties in prime locations. From luxurious apartments to modern living spaces.
            </p>
            
            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm border border-gray-100">
                Multiple Configurations
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm border border-gray-100">
                Prime Locations
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm border border-gray-100">
                World-class Amenities
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm border border-gray-100">
                Ready to Move
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Real Estate Properties"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-105"
              priority
              unoptimized
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
} 