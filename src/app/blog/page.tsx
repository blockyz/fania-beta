import React from 'react'
import CardsSection from './components/cards-section'
import { translate } from '@/lib/helper';


export default function BlogPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
        <p className="text-gray-500 text-sm mb-4 tracking-wide font-medium">
          {translate('articles')}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 md:mr-22">
            <span className="text-[#9B9EF0] text-xl md:text-2xl order-2 md:order-2 md:text-[#949494]">
              (92{translate('Products')} )
            </span>
            <span className="order-1 md:order-1"> {translate('OurAcademicAndProfessionalDomain')}</span>
          </div>
        </h1>
      </div>
      <CardsSection />
    </>
  )
} 