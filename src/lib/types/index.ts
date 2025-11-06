import React from 'react';

export type TDictionary = { [key: string]: string };

export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: string;
  textClassName?: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}
export interface Exhibition {
  id: string
  title: string
  location: string
  description: string
  image: string
  date: string
}
