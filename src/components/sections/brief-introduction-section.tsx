import React from 'react'
import Image from 'next/image'

interface BriefIntroductionSectionProps {
  middleData: {
    title: string
    subtitle: string
    description: string
  }
}

const BriefIntroductionSection: React.FC<BriefIntroductionSectionProps> = ({ middleData }) => {
  return (
    <div className='BriefIntroductionSection lg:w-[1360px] w-[390px] px-4 flex lg:flex-row flex-col gap-12'>
      <div className='flex-1 flex flex-col justify-center'>
        <h2 className=' text-[16px] lg:text-[24px] font-bold  text-black '>
          {middleData.title}
        </h2>
        <p className=' text-[16px] lg:text-[24px] text-gray mb-6'>
          {middleData.subtitle}
        </p>
        <p className=' text-[14px] lg:text-[16px] leading-6 text-black'>
          {middleData.description}
        </p>
      </div>
      <Image
        src='/cancel-icon.svg'
        alt='cancel icon'
        width={656}
        height={359}
        className='w-[656px] lg:h-[359px] h-[389px] bg-darkgray rounded-4xl'
      />
    </div>
  )
}

export default BriefIntroductionSection

