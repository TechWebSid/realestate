import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center lg:text-left lg:flex items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Discover exceptional properties in prime locations with our expert real estate services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/properties" className="px-8 py-4 bg-gradient-to-r from-red-800/90 to-red-900/90 text-amber-300 rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                Explore Properties
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-red-800/80 text-red-900 rounded-xl hover:bg-red-50 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-100 to-amber-100 rounded-full opacity-50"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero1.png"
                  alt="Luxury Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <svg className="w-32 h-auto text-blue-100" viewBox="0 0 100 100">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg className="w-40 h-auto text-indigo-100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
} 