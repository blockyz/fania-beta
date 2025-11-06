export type TDictionary = { [key: string]: string };

export type TCategory = {
  id: number;
  title: string;
  productsCount: number;
};
export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
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
