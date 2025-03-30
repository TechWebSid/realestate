import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent inline-block">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Have questions about our properties or services? Our team of experts is ready to assist you.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md mb-3 sm:mb-4">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">(800) 123-4567</p>
              <p className="text-xs sm:text-sm text-gray-600">Mon-Fri: 9AM-6PM</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md mb-3 sm:mb-4">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">info@realtyhub.com</p>
              <p className="text-xs sm:text-sm text-gray-600">We'll respond within 24hrs</p>
            </div>
            
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md mb-3 sm:mb-4">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">123 Luxury Lane</p>
              <p className="text-xs sm:text-sm text-gray-600">Beverly Hills, CA 90210</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Link href="/contact" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium hover:from-blue-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 