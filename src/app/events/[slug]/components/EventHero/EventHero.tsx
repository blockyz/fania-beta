import { getEventDetail } from '@/lib/data';
import { translate } from '@/lib/helper'
import { ArrowDownDoubleIcon, Calendar03Icon, Location10Icon } from 'hugeicons-react'
import React from 'react'


const Ed = getEventDetail();


const EventHero = () => {
  return (
    <div>
      <section className="relative w-full  bg-[#D9D9E0] flex flex-col justify-center items-center overflow-hidden rounded-4xl">
        <div className="absolute bottom-0 left-0 right-0 h-[104px] bg-linear-to-t from-black via-gray-800/60 to-[#D9D9E0]" />

        <div className="w-full max-w-7xl mb-[155px] mt-44 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 gap-10 md:gap-6">
          <div className="flex flex-col gap-4 text-center md:text-right">
            <h2 className="text-xl text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black">
              {Ed.title}<br />
              {Ed.location}
            </h2>
            <div className='flex gap-8 pt-3 pb-6 text-[#60646C]'>
              <div className='flex gap-2'>
                <Location10Icon/>
                <p>{Ed.city}</p>
              </div>

              <div className='flex gap-2'>
                <Calendar03Icon/>
                <p>{Ed.date}</p>
              </div>

            </div>
            <p className="text-sm sm:text-base text-justify md:text-lg w-[569px] text-[#60646C] font-medium leading-relaxed">
              {Ed.description}
            </p>
          </div>
        </div>



        <div className="absolute bottom-10 w-full flex gap-2 items-center justify-center text-center text-white">
          <ArrowDownDoubleIcon />
          <p className="text-sm md:text-base font-medium mb-1">
            {translate('ScrollDown')}
          </p>
          <ArrowDownDoubleIcon />
        </div>
      </section>
    </div>
  )
}

export default EventHero
