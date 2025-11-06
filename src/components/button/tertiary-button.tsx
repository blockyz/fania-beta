import React from 'react';
import { Button } from './default-button';
import { IButtonProps } from '@/lib/types';

const TertiaryButton = ({ className, ...props }: IButtonProps) => {
  return (
    <Button
      {...props}
      className={`bg-transparent text-primary hover:bg-tertiary-hover-bg hover:text-primary-hover active:bg-tertiary-active-bg active:text-primary-active disabled:text-primary-disabled disabled:cursor-not-allowed ${className}`}
    />
  );
};
export default TertiaryButton
