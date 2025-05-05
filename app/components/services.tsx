import React from 'react';
import ServiceCard from './serviceCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const services = [
  {
    header: 'SERVIS OSEBNIH VOZIL',
    description: 'Strokovni servis in vzdrževanje vseh znamk osebnih vozil.',
  },
  {
    header: 'SERVIS KLIMA NAPRAVE',
    description: 'Polnjenje, vzdrževanje in popravilo klimatskih naprav v vozilih.',
  },
  {
    header: 'MENJAVA GUM',
    description: 'Profesionalna menjava in centriranje pnevmatik za vsa vozila.',
  },
];

const Services = () => {
  return (
    <div className="flex items-center justify-center flex-col w-screen py-20">
      <motion.h1 
        className="text-4xl font-poppins text-white font-bold"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        STORITVE
      </motion.h1>

      <motion.ul 
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] max-w-[1200px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="w-full"
          >
            <ServiceCard header={service.header} description={service.description} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Services;
