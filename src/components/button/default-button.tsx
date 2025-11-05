
import React from 'react';

interface Props {
  size: 'sm' | 'md' | 'lg';
  text: string;
  textClassName?: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizes = {
  sm: 'min-w-[122px] h-[40px] text-sm px-3',
  md: 'min-w-[130px] h-[48px] text-base px-4',
  lg: 'min-w-[130px] h-[56px] text-lg px-5',
};

export const Button = ({
  size,
  text,
  textClassName = 'text-white',
  className = '',
  onClick,
  leftIcon,
  rightIcon,
}: Props) => {
  const hasLeft = !!leftIcon;
  const hasRight = !!rightIcon;

  return (
    <button
      onClick={onClick}
      className={`
        ${sizes[size]} 
        ${className}
        font-medium flex items-center justify-center transition-all
      `}
    >
      {hasLeft && (
        <span className={`w-6 h-6 ${hasRight ? 'mr-2' : ''}`}>
          {leftIcon}
        </span>
      )}
      <span className={textClassName}>{text}</span>
      {hasRight && (
        <span className="w-6 h-6 ml-2">
          {rightIcon}
        </span>
      )}
    </button>
  );
};