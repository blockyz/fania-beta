import React from 'react';
import { Button } from './default-button';
import { IButtonProps } from '@/lib/types';

export const SecondaryButton = ({ className, ...props }: IButtonProps) => {
  return (
    <Button
      {...props}
      className={`bg-transparent border-2 border-primary text-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active disabled:border-primary-disabled disabled:text-primary-disabled disabled:cursor-not-allowed ${className}`}
    />
  );
};
