"use client";

import { useRef } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const navbarHeight = 120; // Adjust this according to your navbar's height

  // Scroll functions
  const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  
  const scrollToServices = () => {
    if (servicesRef.current) {
      const targetPosition = servicesRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Navbar
        scrollToHero={scrollToHero}
        scrollToServices={scrollToServices}
        scrollToContact={scrollToContact}
      />
      <div ref={heroRef}>
        <Hero scrollToContact={scrollToContact} /> {/* Pass scrollToContact as a prop */}
      </div>
      <div className='my-32' ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef} id="kontakt">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
