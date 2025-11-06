import React from 'react';

export type TDictionary = { [key: string]: string };

export interface IButtonProps {
  size: 'sm' | 'md' | 'lg';
  text: string;
  textClassName?: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}