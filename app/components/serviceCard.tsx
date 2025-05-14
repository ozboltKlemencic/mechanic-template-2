import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {     
  header: string;                
  description: string;        
}

const ServiceCard: React.FC<ServiceCardProps> = ({ header, description }) => {
  return (
    <motion.div 
      className="border-2 border-neutral-400  rounded-md px-6 py-12 w-full h-full bg-white shadow-md mx-auto group transition-all duration-300"
      whileHover={{ 
      
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        y: -2
      }}
      transition={{ duration: 0.2 }}
    >
      <h3 
        className="font-poppins font-bold text-xl text-black/90 text-center mb-4 transition-colors duration-200 group-hover:text-[#4169E1]"
      >
        {header}
      </h3>
      <p className="font-openSans text-base text-center text-black/80">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
