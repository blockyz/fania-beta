import { IExhibition, ICategory } from '../types/index';
import categoriesData from './categories.json';
import aboutData from './about.json'
import exhibitions from './exhibitions.json'

export const getCategoriesList = (): ICategory[] => {
  return categoriesData;
};

export const getExhibitions = (): IExhibition[] => {
  return exhibitions
}

export const getAboutHeroData = () => {
  return aboutData.hero
}

export const getAboutMiddleData = () => {
  return aboutData.middle
}

export const getAboutFeaturesData = () => {
  return aboutData.features
}

export const getAboutFeatureCards = () => {
  return aboutData.features.cards
}

