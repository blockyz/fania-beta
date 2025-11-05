import React from 'react';

interface TertiaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function TertiaryButton({ children, onClick, className = '' }: TertiaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 font-pelak text-num-14 leading-num-20 tracking-num--0_16 text-black bg-transparent border-none cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

