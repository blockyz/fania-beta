
import { IButtonProps } from '@/lib/types';

const sizes = {
  sm: 'min-w-[122px] h-[40px] text-sm px-3',
  md: 'min-w-[130px] h-[48px] text-base px-4',
  lg: 'min-w-[130px] h-[56px] text-lg px-5',
};
const radiusVariants = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-full',
  full: 'rounded-full',
};

export const Button = ({
  size = 'md',
  children,
  textClassName,
  className = '',
  radius = 'full',
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
      className={`${sizes[size]} ${radiusVariants[radius]} ${className} font-medium flex flex-nowrap items-center justify-center transition-all`} >
      {hasLeft && (
        <span className={`w-6 h-6 ${hasRight ? 'ml-2' : ''}`}>
          {leftIcon}
        </span>
      )}
      <span className={textClassName}>{children}</span>
      {hasRight && (
        <span className="w-6 h-6 mr-2">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
