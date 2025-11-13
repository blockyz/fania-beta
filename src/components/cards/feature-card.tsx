import React from 'react'
import { HugeiconsIcon, HugeiconsIconProps } from '@hugeicons/react'

type IconType = HugeiconsIconProps['icon']

interface FeatureCardProps {
  icon: IconType
  title: string
  subtitle: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description }) => {
  return (
    <div className='lg:w-[438px] w-[390px]  bg-whitesmoke rounded-3xl px-8 py-4 flex flex-col'>

      <h3 className='lg:text-[20px] text-[16px] font-bold  text-black'>
        {title}
      </h3>

      <p className='lg:text-[20px] text-[16px] font-bold  text-gray mb-3'>
        {subtitle}
      </p>
      <div className='w-12 h-12 bg-whitesmoke rounded-xl mb-6 flex items-center justify-center'>
        <HugeiconsIcon icon={icon} size={24} color="black" />
      </div>
      <p className='text-[14px] text-justify leading-6 text-gray'>
        {description}
      </p>
    </div>
  )
}

export default FeatureCard

