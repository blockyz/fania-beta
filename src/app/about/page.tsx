import React from 'react'
import { UserGroupIcon } from '@hugeicons/core-free-icons'
import HeroSection from '@/components/content/hero-section'
import BriefIntroductionSection from '@/components/content/brief-introduction-section'
import { getAboutHeroData, getAboutMiddleData, getAboutFeaturesData, getAboutFeatureCards } from '@/lib/data'
import { translate } from '@/lib/helper'
import FeatureCardsSection from './components/feature-cards-section'

export const metadata = {
  title: translate('AboutUs'),
  description: translate('AboutUs'),
}

const heroData = getAboutHeroData()
const middleData = getAboutMiddleData()
const featuresData = getAboutFeaturesData()
const featureCards = getAboutFeatureCards()
const AboutPage = () => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <HeroSection heroData={heroData} />
      <BriefIntroductionSection middleData={middleData} />
      <FeatureCardsSection featuresData={featuresData} featureCards={featureCards} cardIcon={UserGroupIcon} />
    </div>
  )
}

export default AboutPage
