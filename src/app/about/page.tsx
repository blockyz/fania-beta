import React from 'react'
import { UserGroupIcon } from '@hugeicons/core-free-icons'
import HeroSection from '@/components/sections/hero-section'
import BriefIntroductionSection from '@/components/sections/brief-introduction-section'
import FeatureCardsSection from '@/components/sections/feature-sections/feature-cards-section'
import { getAboutHeroData, getAboutMiddleData, getAboutFeaturesData, getAboutFeatureCards } from '@/lib/data'
import { translate } from '@/lib/helper'

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
