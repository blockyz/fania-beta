import { IExhibition, ICategory, IEventDetail, IStatistic, ICertification, IBlogDetail, ILandingHero, IEventItem } from '../types/index';
import events from "./events.json"
import certifications from "./certifications.json"
import categoriesData from './categories.json';
import aboutData from './about.json'
import productCardData from './product-card.json';
import exhibitions from './exhibitions.json'
import blogDetail from "./blog-detail.json"
import eventDetail from "./event-detail.json"
import statisticsData from './statistics.json'
import heroSection from './hero-section.json'

export const getCertifications = (): ICertification[] => {
  return certifications
};

export const getCategoriesList = (): ICategory[] => {
  return categoriesData;
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

export const getBlogDetail = (): IBlogDetail => {
  return blogDetail
}

export const getEvents = (): IEventItem[] => {
  return events
}
export const getEventDetail = (): IEventDetail => {
  return eventDetail
}
export const getStatistics = (): IStatistic[] => {
  return statisticsData
}

export const getLandingHero = (): ILandingHero => {
  return heroSection;
};