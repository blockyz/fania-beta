import React from 'react';
import { Button } from './default-button';
import { IButtonProps } from '@/lib/types';

export const PrimaryButton = ({ className, ...props }: IButtonProps) => {
  return (
    <Button
      {...props}
      className={`bg-primary hover:bg-primary-hover active:bg-primary-active  disabled:cursor-not-allowed disabled:bg-primary-disabled ${className}`}
    />
  );
};
