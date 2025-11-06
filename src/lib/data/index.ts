import aboutData from './about.json'

export interface Exhibition {
  id: string
  title: string
  location: string
  description: string
  image: string
  date: string
}

const exhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'نمایشگاه بزرگ علمی',
    location: 'پارک علم و فناوری بهشهر',
    description: 'توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما...',
    image: '/images/exhibition-1.jpg',
    date: '1403/08/15'
  },
  {
    id: '2',
    title: 'نمایشگاه بزرگ علمی',
    location: 'پارک علم و فناوری بهشهر',
    description: 'توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما...',
    image: '/images/exhibition-2.jpg',
    date: '1403/08/15'
  },
  {
    id: '3',
    title: 'نمایشگاه بزرگ علمی',
    location: 'پارک علم و فناوری بهشهر',
    description: 'توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما...',
    image: '/images/exhibition-3.jpg',
    date: '1403/08/15'
  }
]

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

