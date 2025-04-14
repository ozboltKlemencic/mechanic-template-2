import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className='bg-5-custom-footer h-20 flex items-center justify-center'>
      <div className='text-white/70 font-openSans text-center'>
        <p>
          © {currentYear} Avtomehanika Demšar, Janez Demšar S.P, vse pravice pridržane.
        </p>
      </div>
    </div>
  )
}

export default Footer