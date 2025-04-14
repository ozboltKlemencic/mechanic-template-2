"use client";

import { useEffect, useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

// Define types for the scroll functions passed in as props
interface NavbarProps {
  scrollToHero: () => void;
  scrollToServices: () => void;
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToHero, scrollToServices, scrollToContact }) => {
  // State for tracking whether the page has been scrolled
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle closing the menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 h-20 z-10 transition-all duration-300 flex items-center justify-center 
        ${isScrolled ? "bg-5-custom-navbar h-20" : "bg-transparent h-24"}`}
    >
      <div className="w-[1300px] h-full flex items-center justify-between px-4">
        <div>
          <h1 className="text-xl md:text-3xl font-poppins font-bold text-white">
            Avtomehanika Demšar
          </h1>
        </div>

        <ul className="gap-x-6 text-white font-poppins text-sm hidden md:flex">
          <li className="relative group px-1 pb-1">
            <button onClick={() => { scrollToHero(); handleCloseMenu(); }} className="group-hover:text-white text-white/90">
              DOMOV
            </button>
            <span className="absolute rounded-lg bottom-0 left-1/2 w-0 h-[2px] bg-5-custom-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
          <li className="relative group px-1 pb-1">
            <button onClick={() => { scrollToServices(); handleCloseMenu(); }} className="group-hover:text-white text-white/90">
              STORITVE
            </button>
            <span className="absolute rounded-lg bottom-0 left-1/2 w-0 h-[2px] bg-5-custom-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
          <li className="relative group px-1 pb-1">
            <button onClick={() => { scrollToContact(); handleCloseMenu(); }} className="group-hover:text-white text-white/90">
              KONTAKT
            </button>
            <span className="absolute rounded-lg bottom-0 left-1/2 w-0 h-[2px] bg-5-custom-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className={`flex items-center justify-center md:hidden`}>
          <button className="text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoCloseOutline className="text-white text-3xl" /> : <IoMenuOutline className="text-white text-3xl" />}
          </button>
        </div>

        {/* Full-screen menu for mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-screen transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} bg-black/95 z-20 flex flex-col items-center`}
        >
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsMenuOpen(false)}>
            <IoCloseOutline />
          </button>
          <ul className="text-white font-poppins text-2xl mt-16">
            <li className="py-4">
              <button onClick={() => { scrollToHero(); handleCloseMenu(); }} className="text-white/90">DOMOV</button>
            </li>
            <li className="py-4">
              <button onClick={() => { scrollToServices(); handleCloseMenu(); }} className="text-white/90">STORITVE</button>
            </li>
            <li className="py-4">
              <button onClick={() => { scrollToContact(); handleCloseMenu(); }} className="text-white/90">KONTAKT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
