import PropertyHero from './components/PropertyHero';
import PropertyListing from './components/PropertyListing';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <PropertyHero />
        <PropertyListing />
      </main>
      <Footer />
    </>
  );
} 