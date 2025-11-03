import React from 'react';

interface Props {
  size: 'sm' | 'md' | 'lg';
  bg: string;
  textColor: string;
  text: string;
  borderColor?: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizes = {
  sm: 'min-w-[122px] h-[40px] text-sm',
  md: 'min-w-[130px] h-[48px] text-base',
  lg: 'min-w-[130px] h-[56px] text-lg',
};

const radius = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
};

export const Button = ({
  size,
  bg,
  textColor,
  text,
  borderColor,
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
        ${sizes[size]} ${radius[size]} ${bg} ${borderColor} ${className}
        font-medium flex items-center justify-center px-4
      `}
    >
      {hasLeft && (
        <span className={`w-6 h-6 ${hasRight ? 'mr-2' : ''}`}>
          {leftIcon}
        </span>
      )}
      <span className={textColor}>{text}</span>
      {hasRight && (
        <span className="w-6 h-6 ml-2">{rightIcon}</span>
      )}
    </button>
  );
};