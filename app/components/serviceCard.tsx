import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {     
  header: string;                
  description: string;        
}

const ServiceCard: React.FC<ServiceCardProps> = ({ header, description }) => {
  return (
    <motion.div 
      className="border border-black/15 rounded-md px-6 py-11 w-full max-w-[90%] md:max-w-[380px] bg-gray-400/5 mx-auto group"
      whileHover={{ 
        borderColor: '#F29135', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        y: -3
      }}
      transition={{ duration: 0.2 }}
    >
      <h3 
        className="font-poppins font-bold text-lg text-black/80 text-center mb-3 transition-colors duration-200 group-hover:text-[#F29135]"
      >
        {header}
      </h3>
      <p className="font-openSans text-sm text-center text-black/75">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
