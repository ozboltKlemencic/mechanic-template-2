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
    header: 'MENJAVA AMORTIZERJEV',
    description: 'Amortizerji so ključni del vzmetenja, vplivajo na udobje vožnje in stabilnost vozila.',
  },
  {
    header: 'MENJAVA KOLEN',
    description: 'Kolena so bistven del vzmetenja in vplivajo na stabilnost vozila.',
  },
  {
    header: 'MENJAVA ZAVORNIH DISKOV',
    description: 'Zavorni diski zagotavljajo varno in učinkovito zaviranje vozila.',
  },
  {
    header: 'SERVIS KLIMA NAPRAVE',
    description: 'Pravilno delujoča klima naprava zagotavlja udobje vožnje v vseh letnih časih.',
  },
  {
    header: 'MENJAVA OLJA',
    description: 'Redna menjava olja zagotavlja dolgotrajno in učinkovito delovanje motorja.',
  },
  {
    header: 'SERVIS ZAVOR',
    description: 'Preverjanje in servisiranje zavornega sistema zagotavlja varno vožnjo.',
  },
];

const Services = () => {
  return (
    <div className="flex items-center justify-center flex-col my-20 w-screen">
      <motion.h1 
        className="text-4xl font-poppins text-black font-bold"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        STORITVE
      </motion.h1>

      <motion.ul 
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full md:max-w-[1200px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
          >
            <ServiceCard header={service.header} description={service.description} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Services;
