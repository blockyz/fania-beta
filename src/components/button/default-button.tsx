
import { IButtonProps } from '@/lib/types';
import React, { ReactNode } from 'react';

const sizes = {
  sm: 'min-w-[122px] h-[40px] text-sm px-3',
  md: 'min-w-[130px] h-[48px] text-base px-4',
  lg: 'min-w-[130px] h-[56px] text-lg px-5',
};

export const Button = ({
  size = 'md',
  children,
  textClassName = 'text-white',
  className = '',
  onClick,
  leftIcon,
  rightIcon,
  disabled,
}: IButtonProps) => {
  const hasLeft = !!leftIcon;
  const hasRight = !!rightIcon;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
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
      <span className={textClassName}>{children}</span>
      {hasRight && (
        <span className="w-6 h-6 ml-2">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
