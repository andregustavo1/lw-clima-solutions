
import { useEffect } from 'react';
// @ts-ignore - AOS doesn't have types
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import GallerySection from '../components/GallerySection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <ClientsSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
