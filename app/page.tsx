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
      <div className='py-32 ' style={{ 
        background: '#5e83f2',
        backgroundImage: 'linear-gradient(178deg,rgba(94, 131, 242, 0.33) 1%, rgba(39, 87, 230, 0.65) 50%, rgba(65, 105, 225, 0.37) 100%)'
      }} ref={servicesRef}>
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
