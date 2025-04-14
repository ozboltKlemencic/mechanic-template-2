import React from 'react';

interface RoundedBtnProps {
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional className prop for additional styling
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick} // Attach the onClick handler here
      className={`rounded-3xl bg-transparent border-2 border-white text-white px-6 py-2 hover:bg-5-custom-orange hover:border-5-custom-orange transition-colors duration-300 cursor-pointer ${className}`}
    >
      <span className='font-poppins text-base'>{children}</span>
    </button>
  );
};

export default RoundedBtn;
