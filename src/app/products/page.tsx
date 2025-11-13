import { getAboutFeatureCards, getAboutFeaturesData, getAboutHeroData, getAboutMiddleData } from '@/lib/data'
import { translate } from '@/lib/helper'
import React from 'react'
import { UserGroupIcon } from '@hugeicons/core-free-icons'
import { ProductsSection } from './components/products-section'
import HeroSection from './components/hero-section'
import FeatureCardsSection from './components/feature-cards-section'
import { Statistics } from './components/statistics'
import BriefIntroductionSection from '@/components/content/brief-introduction-section'

export const metadata = {
  title: translate('Products'),
  description: translate('Products'),
}

const heroData = getAboutHeroData()
const middleData = getAboutMiddleData()
const featuresData = getAboutFeaturesData()
const featureCards = getAboutFeatureCards()
const ProductsPage = ({ }) => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <HeroSection heroData={heroData} />
      <BriefIntroductionSection middleData={middleData} />
      <Statistics />
      <FeatureCardsSection featuresData={featuresData} featureCards={featureCards} cardIcon={UserGroupIcon} />
      <ProductsSection />
    </div>
  )
}
export default ProductsPage