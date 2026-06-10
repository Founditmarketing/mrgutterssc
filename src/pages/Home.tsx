import Hero from '../components/home/Hero';
import TrustBanner from '../components/home/TrustBanner';
import ServicesCarousel from '../components/home/ServicesCarousel';
import AboutSection from '../components/home/AboutSection';
import Gallery from '../components/home/Gallery';
import ContactSection from '../components/home/ContactSection';
import PreFooter from '../components/home/PreFooter';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ServicesCarousel />
      <AboutSection />
      <Gallery />
      <ContactSection />
      <PreFooter />
    </>
  );
}
