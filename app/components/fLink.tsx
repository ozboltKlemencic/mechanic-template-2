import React from 'react'
import Link from 'next/link'

interface linkProps {     
    websiteUrl: string;                
    children: React.ReactNode;       
  }

  const FLink: React.FC<linkProps> = ({ websiteUrl, children }) => {
  return (
    <Link 
        href={websiteUrl}
        target="_blank" 
        className="font-openSans text-white/70 hover:scale-105 hover:text-5-custom-orange transition-all duration-300 inline-block text-xs md:text-base"
    >
        {children}
    </Link>
  )
}

export default FLink