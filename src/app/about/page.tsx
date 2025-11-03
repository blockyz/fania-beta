import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDownDoubleIcon, UserGroupIcon } from '@hugeicons/core-free-icons'
import AboutCard from '@/components/card/about-card'
import { getAboutHeroData, getAboutMiddleData, getAboutFeaturesData, getAboutFeatureCards } from '@/lib/data'
import FA_DICTIONARY from '@/lib/dictionary/fa'

const AboutPage = () => {
  const heroData = getAboutHeroData()
  const middleData = getAboutMiddleData()
  const featuresData = getAboutFeaturesData()
  const featureCards = getAboutFeatureCards()

  const metadata = {
    title: FA_DICTIONARY.aboutUs,
    description: FA_DICTIONARY.aboutUs,
  }

  return (
    <div className='flex flex-col items-center gap-12 ' dir='rtl'>
      <div className='w-[1408px] h-[721px] bg-darkgray rounded-[40px] relative overflow-hidden'>
        <div className='absolute right-20 top-1/2 -translate-y-1/2 w-[560px]'>
          <h1 className='font-pelak text-[48px] leading-[72px] text-black mb-6'>
            {heroData.title}
          </h1>
          <p className='font-pelak text-[16px] leading-7 text-black mb-12'>
            {heroData.description}
          </p>

          <div className='flex gap-10 mb-12'>
            {heroData.stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='font-pelak text-[48px] leading-14 text-black mb-2'>
                  {stat.value}
                </div>
                <div className='font-pelak text-[14px] leading-5 text-black'>
                  {FA_DICTIONARY[stat.labelKey]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-[104px] rounded-b-[40px] flex items-center justify-center gap-2 font-pelak text-[14px] text-whitesmoke' style={{ background: 'linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 1) 100%)' }}>
          <HugeiconsIcon icon={ArrowDownDoubleIcon} size={20} color="currentColor" strokeWidth={2} />
          {FA_DICTIONARY.scrollDown}
          <HugeiconsIcon icon={ArrowDownDoubleIcon} size={20} color="currentColor" strokeWidth={2} />
        </div>
      </div>

      <div className='w-[1360px] h-[359px] flex gap-12'>
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='font-pelak text-[32px] leading-12 text-black mb-3'>
            {middleData.title}
          </h2>
          <p className='font-pelak text-[14px] leading-6 text-darkgray mb-3'>
            {middleData.subtitle}
          </p>
          <p className='font-pelak text-[14px] leading-6 text-black'>
            {middleData.description}
          </p>
        </div>
        <div className='w-[656px] h-[359px] bg-darkgray rounded-4xl'></div>
      </div>

      <div className='w-[1360px]'>
        <h2 className='font-pelak text-[32px] leading-12 text-black text-right mb-3'>
          {featuresData.title}
        </h2>
        <p className='font-pelak text-[14px] leading-6 text-darkgray text-right mb-8'>
          {featuresData.subtitle}
        </p>

        <div className='flex gap-6'>
          {featureCards.map((card) => (
            <AboutCard
              key={card.id}
              icon={UserGroupIcon}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
