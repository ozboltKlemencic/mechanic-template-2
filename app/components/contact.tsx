import React from 'react';
import Map from './map';
import { motion } from 'framer-motion';
import { CiClock1, CiMail, CiMobile4, CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const Contact = () => {
  return (
    <div className='flex items-center justify-center w-full bg-black/10 py-20'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] max-w-[1200px] w-[90%] md:w-4/5 space-y-14 md:space-y-0'>
        <div>
          <motion.h6 
            className='font-poppins font-bold text-4xl'
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            KONTAKTI
          </motion.h6>
          
          <motion.div 
            className='flex flex-col space-y-6 mt-8 font-openSans'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className='flex space-x-4 items-center justify-start group cursor-pointer'
              variants={itemVariants}
            >
              <CiClock1 className="text-black text-2xl group-hover:text-[#F29135] transition-all duration-300" />
              <div className='text-base group-hover:text-[#F29135] transition-all duration-300'>
                <p>Ponedeljek - Petek: 8.00 - 16.00</p>
                <p>Sobote, nedelje, prazniki: zaprto</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="https://www.google.com/maps?q=46.1566253,14.3650522" target="_blank" rel="noopener noreferrer" className='flex space-x-4 items-center justify-start group cursor-pointer'>
                <CiLocationOn className="text-black text-2xl group-hover:text-[#F29135] transition-all duration-300" />
                <p className='text-base group-hover:text-[#F29135] transition-all duration-300'>Reteče 22, 4220 Škofja Loka, Slovenija</p>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="tel:+38641970501" className='flex space-x-4 items-center justify-start group cursor-pointer'>
                <CiMobile4 className="text-black text-2xl group-hover:text-[#F29135] transition-all duration-300" />
                <p className='text-base group-hover:text-[#F29135] transition-all duration-300'>041 970 501</p>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="mailto:amdjanez@gmail.com" className='flex space-x-4 items-center justify-start group cursor-pointer'>
                <CiMail className="text-black text-2xl group-hover:text-[#F29135] transition-all duration-300" />
                <p className='text-base group-hover:text-[#F29135] transition-all duration-300'>amdjanez@gmail.com</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-[50vh] md:h-[400px]"
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
