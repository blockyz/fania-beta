import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDownDoubleIcon } from '@hugeicons/core-free-icons'
import { translate } from '@/lib/helper'

interface HeroSectionProps {
  heroData: {
    title: string
    description: string
    stats: Array<{
      value: string
      labelKey: string
    }>
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroData }) => {
  return (
    <div className='heroSection lg:w-[1408px] w-[390px] lg:h-[721px] h-[705px] bg-darkgray rounded-[40px] relative overflow-hidden'>
      <div className='absolute  w-full lg:w-[560px] lg:right-20 right-5 top-1/2 -translate-y-1/2 lg:px-0 pl-4'>
        <h1 className='text-[20px] lg:text-[24px] font-bold w-[303px] text-black mb-6'>
          {heroData.title}
        </h1>
        <p className='text-[14px] lg:text-[16px] pl-4 text-justify  text-gray mb-12'>
          {heroData.description}
        </p>

        <div className='flex lg:w-[394px] w-[247px] flex-wrap justify-center mx-auto lg:mx-0  gap-10 mb-12'>
          {heroData.stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='lg:text-[40px] text-[32px] font-bold leading-14 text-black mb-2'>
                {stat.value}
              </div>
              <div className='text-[14px] lg:text-[16px] leading-5 text-gray'>
                {translate(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-[104px] rounded-b-[40px] flex items-center justify-center gap-2  text-[14px] text-whitesmoke' style={{ background: 'linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 1) 100%)' }}>
        <HugeiconsIcon icon={ArrowDownDoubleIcon} size={20} color="currentColor" strokeWidth={2} />
        {translate('ScrollDown')}
        <HugeiconsIcon icon={ArrowDownDoubleIcon} size={20} color="currentColor" strokeWidth={2} />
      </div>
    </div>
  )
}

export default HeroSection

