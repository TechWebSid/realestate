import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 sm:py-16">
        <div className="text-center max-w-sm sm:max-w-md md:max-w-xl mx-auto px-4">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">
            Page Not Found
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            The page you are looking for does not exist or has been moved. 
            Let us get you back on track to finding your dream property.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:from-blue-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg text-center text-sm sm:text-base">
              Back to Home
            </Link>
            <Link href="/properties" className="bg-white text-blue-600 border border-blue-200 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-blue-50 transition-all shadow-sm hover:shadow-md text-center text-sm sm:text-base">
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 