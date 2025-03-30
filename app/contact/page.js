import Navbar from '../components/Navbar';
import QuotationForm from '../components/QuotationForm';
import ContactBentoGrid from './components/ContactBentoGrid';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Have questions about our properties? We're here to help you find your dream home.
            </p>
          </div>
          
          <ContactBentoGrid />
          <div className="mt-12">
            <QuotationForm/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}