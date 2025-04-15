import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className='bg-5-custom-footer px-4 h-20 flex items-center justify-center'>
      <div className='text-white/70 font-openSans text-center'>
        <p className='text-xs md:text-sm'>
          © {currentYear} Avtomehanika Demšar, Janez Demšar S.P, vse pravice pridržane.
        </p>
      </div>
    </div>
  )
}

export default Footer