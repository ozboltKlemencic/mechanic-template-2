"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RoundedBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({ children, onClick, href }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-[#F29135] text-[#F29135] hover:text-white border-2 border-[#F29135] font-medium py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wide"
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

// Define slides with background images
const slides = [
  {
    id: 1,
    bgImage: '/1.jpg',
    title: 'AVTOMEHANIKA DEMŠAR, JANEZ DEMŠAR S.P.',
    description: 'Neodvisno popravljamo in servisiramo vozila Renault izven garancije, komplet vzdrževanje. Zagotavljamo profesionalno storitev in zanesljivost.',
    buttonText: 'KONTAKTIRAJ',
    buttonLink: '#kontakt',
  },
  {
    id: 2,
    bgImage: '/7.jpg',
    title: 'PROFESIONALNI SERVIS',
    description: 'Zaupajte vaše vozilo izkušenim mehanikom z najnovejšo diagnostično opremo. Naši mehaniki imajo dolgoletne izkušnje in stalno strokovno izpopolnjevanje.',
    buttonText: 'STORITVE',
    buttonLink: '#storitve',
  },
  {
    id: 3,
    bgImage: '/9.jpg',
    title: 'HITRO IN ZANESLJIVO',
    description: 'Nudimo hitre termine, kvalitetne rezervne dele in garancijo na opravljeno delo. Vedno stremimo k najboljši rešitvi za vaše vozilo in vaš proračun.',
    buttonText: 'KONTAKTIRAJ',
    buttonLink: '#kontakt',
  },
  {
    id: 4,
    bgImage: '/10.jpg',
    title: 'CELOVITE STORITVE',
    description: 'Izvajamo vse vrste popravil in vzdrževanja vozil različnih znamk. Zanesljivost, kakovost in strokovnost so naše glavne odlike pri vsakem delu.',
    buttonText: 'STORITVE',
    buttonLink: '#storitve',
  },
];

// Add custom CSS for enhanced transitions
const customStyles = `
/* Swiper fade effect enhancement */

.swiper-fade .swiper-slide-active {
  opacity: 1 !important;
}

/* Pagination indicator transition */
.custom-pagination button {
  transition: background-color 0.3s ease, transform 0.2s ease, backdrop-filter 0.3s ease;
}

/* Pagination glass effect */
.pagination-button {
  backdrop-filter: blur(8px);
  border: 1px solid transparent;
}

.pagination-button-inactive {
  background-color: rgba(255, 255, 255, 0.1);
}

.pagination-button-active {
  background-color: #F29135;
}

/* Navigation button hover effect */
button[aria-label="Previous slide"],
button[aria-label="Next slide"] {
  transition: opacity 0.3s ease, background-color 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 20; /* Ensure buttons are visible */
}

button[aria-label="Previous slide"]:hover,
button[aria-label="Next slide"]:hover {
  background-color: rgba(242, 145, 53, 0.15);
  border: 1px solid #F29135;
  backdrop-filter: blur(8px);
  box-shadow: none;
}

/* Make sure hero components don't overlap the navbar */
.hero-container {
  z-index: 1; /* Much lower z-index to stay below navbar */
  position: relative;
}

/* Keep pagination below navbar */
.hero-pagination {
  z-index: 1; /* Lower z-index than navbar */
}

@media (max-width: 640px) {
  button[aria-label="Previous slide"],
  button[aria-label="Next slide"] {
    padding: 0.5rem;
  }

  button[aria-label="Previous slide"] svg,
  button[aria-label="Next slide"] svg {
    width: 1rem;
    height: 1rem;
  }
}

/* Animation for slide transitions */
@keyframes fadeInUp {
  from {
    opacity: 0.8;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
`;

interface HeroProps {
  scrollToContact: () => void;
  scrollToServices?: () => void;
}

export default function Hero({ scrollToContact, scrollToServices }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Custom pagination component
  const CustomPagination = () => {
    return (
      <div className="flex items-center gap-3 custom-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
              }
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out pagination-button ${
              activeIndex === index ? "pagination-button-active" : "pagination-button-inactive"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Handle button click based on slide
  const handleButtonClick = (slideId: number) => {
    if (slideId === 2 && scrollToServices) {
      scrollToServices();
    } else {
      scrollToContact();
    }
  };

  // Update the content container section to use AnimatePresence and adjust animation timing
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden hero-container" id="hero">
      {/* Add custom transition styles */}
      <style jsx global>{customStyles}</style>
      
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={"fade"}
        
        speed={800} // Increased for smoother transitions
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          // This handler runs for both manual and autoplay transitions
          setActiveIndex(swiper.realIndex);
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full w-full"
        loop={true}
        observer={true}
        observeParents={true}
        watchSlidesProgress={true}
        preventInteractionOnTransition={false} // Allow interactions during transition to ensure clicks are registered
        a11y={{ enabled: false }} // Disable a11y to prevent click event conflicts
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Darkening overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content container with AnimatePresence */}
              <div className="relative z-10 container mx-auto px-4 pt-[120px] flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`content-${slide.id}`}
                      className="flex flex-col items-center"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {/* Title */}
                      <motion.h1 
                        className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white"
                        variants={itemVariants}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Description */}
                      <motion.p 
                        className="text-lg md:text-xl mb-10 max-w-4xl text-white/90 font-poppins px-2"
                        variants={itemVariants}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Button */}
                      <motion.div
                        variants={itemVariants}
                      >
                        <RoundedBtn onClick={() => handleButtonClick(slide.id)}>
                          {slide.buttonText}
                        </RoundedBtn>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation - always enabled with loop mode */}
      {/* Previous button */}
      <button
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev();
          }
        }}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:bg-[#F29135] transition-all"
        aria-label="Previous slide"
      >
        <IoChevronBack className="h-6 w-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:bg-[#F29135] transition-all"
        aria-label="Next slide"
      >
        <IoChevronForward className="h-6 w-6" />
      </button>

      {/* Custom Pagination */}
      <div className="absolute z-2 bottom-8 left-1/2 transform -translate-x-1/2 hero-pagination">
        <CustomPagination />
      </div>
    </div>
  );
}
