import { ReactNode } from "react";
export type TDictionary = { [key: string]: string };

export interface ICertification {
  id: string
  title: string
  image: string
}
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
export interface IBlogDetail {
  id: string;
  title: string;
  location: string;
  date: string;
  imageCaptionKey: string;
  subImages: string[];
  mainImage: string;
  texts: string[];
  detailTextKey: string;
  detailTitleKey: string;
  description: string;
}

export interface IEventItem {
  id: string
  title: string
  location: string
  image: string
  describe: string
}

export interface IEventDetail {
  id: string;
  title: string;
  location: string;
  city: string;
  date: string;
  description: string;
  detailTitleKey: string;
  detailTextKey: string;
  texts: string[];
  mainImage: string;
  subImages: string[];
  imageCaptionKey: string;
}
export interface IProductCard {
  id: string;
  title: string;
  description: string;
  image?: string;
}
export interface IStatistic {
  id: string;
  value: string;
  label: string;
}

export interface IInnovation {
  id: number
  title: string
  description: string
  mainImage: string
  thumbnail: string
}
export interface ILandingHero {
  SloganLine1: string;
  SloganLine2: string;
  DescriptionLine1: string;
  DescriptionLine2: string;
}

export interface IProductWeight {
  value: string;
  unit: string;
}

export interface IProductSpecification {
  label: string;
  value: string;
}

export interface IProductDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  weights: IProductWeight[];
  phoneNumber: string;
  mainImage: string;
  galleryImages: string[];
  descriptions: string[];
  specifications: IProductSpecification[];
}