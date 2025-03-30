import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import AchievementsSection from './components/AchievementsSection';
import ValuesSection from './components/ValuesSection';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <HeroSection />
        <OurStorySection />
        <AchievementsSection />
        <ValuesSection />
      </main>
      <Footer />
    </>
  );
} 