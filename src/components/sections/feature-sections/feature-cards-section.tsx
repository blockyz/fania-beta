import React from 'react'
import FeatureCard from './feature-card'
import { HugeiconsIconProps } from '@hugeicons/react'

type IconType = HugeiconsIconProps['icon']

interface FeatureCardsSectionProps {
  featuresData: {
    title: string
    subtitle: string
  }
  featureCards: Array<{
    id: number
    title: string
    subtitle: string
    description: string
  }>
  cardIcon: IconType
}

const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = ({ featuresData, featureCards, cardIcon }) => {
  return (
    <div className='FeatureCardsSection lg:w-[1360px] w-[390px] mt-8'>
      <h2 className=' text-[16px] lg:text-[24px] font-bold text-black text-right px-4 '>
        {featuresData.title}
      </h2>
      <p className=' text-[16px] lg:text-[24px] text-gray text-right px-4 '>
        {featuresData.subtitle}
      </p>

      <div className='flex lg:flex-row flex-col my-4 gap-6'>
        {featureCards.map((card) => (
          <FeatureCard
            key={card.id}
            icon={cardIcon}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureCardsSection

