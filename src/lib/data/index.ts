import aboutData from './about.json'
import exhibitions from './exhibitions.json'

export interface Exhibition {
  id: string
  title: string
  location: string
  description: string
  image: string
  date: string
}

export const getExhibitions = (): Exhibition[] => {
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

