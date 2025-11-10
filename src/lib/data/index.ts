
import { IExhibition, ICategory, IEventDetail, IStatistic, ICertification } from '../types/index';
import certifications from "./certifications.json"

import categoriesData from './categories.json';
import categorieData from './categories.json';
import aboutData from './about.json'
import productCardData from './product-card.json';
import exhibitions from './exhibitions.json'
import eventDetail from "./eventDetail.json"
import statisticsData from './statistics.json'
import blogsData from './blogs.json'

export const getCertifications = (): ICertification[] => {
  return certifications
};

export const getBlogsList = () => {
  return blogsData;
};

export const getCategoriesList = (): ICategory[] => {
  return categoriesData;
};

export const getCategorieList = (): ICategory[] => {
  return categorieData;
};

export const getProductCardData = () => {
  return productCardData;
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

export const getEventDetail = (): IEventDetail => {
  return eventDetail
}
export const getStatistics = (): IStatistic[] => {
  return statisticsData
}

