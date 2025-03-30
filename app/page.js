import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import WhyChooseUs from './components/WhyChooseUs';

import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectStats from './components/ProjectStats';
import NewsletterSection from './components/NewsletterSection';
import QuotationForm from './components/QuotationForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 opacity-10" width="400" height="400" viewBox="0 0 100 100">
            <path d="M20,50 L80,50 L50,80 Z" fill="currentColor" className="text-red-800" />
          </svg>
          <svg className="absolute top-1/4 right-0 opacity-10" width="300" height="300" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-amber-600" />
          </svg>
          <svg className="absolute bottom-0 left-1/4 opacity-10" width="350" height="350" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" className="text-red-700" />
          </svg>
        </div>

        <Hero />
        <FeaturedServices />
        <WhyChooseUs />
        <ProjectStats />
     
        <Testimonials />
        <QuotationForm/>
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
