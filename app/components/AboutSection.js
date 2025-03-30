import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent inline-block">
              About Lucknow Infra Vision
            </h2>
            
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Lucknow Infra Vision is a premier luxury real estate company specializing in high-end properties. With over 15 years of experience, we've built a reputation for exceptional service and unparalleled expertise in the luxury real estate market.
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
              Our dedicated team of experienced real estate professionals is committed to providing personalized service tailored to each client's unique needs. Whether you're looking to buy, sell, or invest, we're here to guide you through every step of the process.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">Expert Agents</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Highly experienced professionals</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">Trusted Partner</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Your security is our priority</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
              <Link href="/about" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md border border-blue-100 text-sm sm:text-base">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-48 sm:w-64 h-48 sm:h-64 bg-white/30 rounded-lg -z-10"></div>
            <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                fill
                style={{objectFit: 'cover'}}
                alt="RealtyHub team"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-48 sm:w-64 h-48 sm:h-64 bg-white/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 