import { TCategory } from '../types/index';
import categoriesData from './categories.json';

export const getCategoriesList = (): TCategory[] => {
  return categoriesData;
};

