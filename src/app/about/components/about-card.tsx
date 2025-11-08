import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'

type IconType = ([string, {
  [key: string]: string | number;
}])[] | readonly (readonly [string, {
  readonly [key: string]: string | number;
}])[];

interface AboutCardProps {
  icon: IconType
  title: string
  subtitle: string
  description: string
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, subtitle, description }) => {
  return (
    <div className='w-[438px] h-[352px] bg-whitesmoke rounded-3xl p-8 flex flex-col'>
      <div className='w-12 h-12 bg-whitesmoke rounded-xl mb-6 flex items-center justify-center'>
        <HugeiconsIcon icon={icon} size={24} color="black" />
      </div>
      <h3 className='text-[20px] leading-8 text-black mb-3'>
        {title}
      </h3>
      <p className='text-[14px] leading-6 text-darkgray mb-3'>
        {subtitle}
      </p>
      <p className='text-[14px] leading-6 text-black'>
        {description}
      </p>
    </div>
  )
}

export default AboutCard

