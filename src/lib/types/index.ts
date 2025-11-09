import { ReactNode } from "react";

export type TDictionary = { [key: string]: string };

export interface ICategory {
  id: number;
  title: string;
  productsCount: number;
};
export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
  textClassName?: string;
  className?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}
export interface IExhibition {
  id: string
  title: string
  location: string
  description: string
  image: string
  date: string
}

export interface IProductCard {
  title: string;
  description: string;
  image?: string;
  onDetailsClick?: () => void;
}