import React from 'react'
import EventHero from './components/EventHero/EventHero'
import DetailDescription from './components/DetailDescription'
import DetailImages from './components/DetailImages'
import SecondDescription from './components/SecondDescription'
import { translate } from '@/lib/helper'

const EventsDetailPage = () => {
  return (
    <div className='pb-40'>
      <div className='px-4 py-4'>
        <EventHero />
      </div>
      <div className="flex mx-auto py-28 justify-center px-4 md:pr-10 md:pl-[264px] space-y-10">
        <div className="hidden md:flex flex-col pl-[157px]">
          <p className='text-[#8B8D98] text-[12px]'>{translate("Section")}</p>
          <div className="flex flex-col gap-2">
            <p>{translate("Describe")}</p>
            <p className='text-[#8B8D98] text-[12px]'>{translate("Honors")}</p>
          </div>
        </div>

        <DetailDescription />
      </div>
      <DetailImages />
      <SecondDescription />

    </div>
  )
}

export default EventsDetailPage
