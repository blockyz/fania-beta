import { translate } from '@/lib/helper'
import { getExhibitions } from '@/lib/data'
import ExhibitionCard from './exhibition-card'

const exhibitions = getExhibitions()
export default function ExhibitionsSection() {

  return (
    <div className="lg:w-[1360px] w-[390px] mx-auto ">
      <div className="flex flex-col gap-1 mt-10 px-2 ">
        <h2 className=" lg:text-[24px] text-[16px] font-bold leading-6 text-black">
          {translate('Exhibitions')}
        </h2>
        <p className=" lg:text-[24px] text-[16px] font-bold leading-[26px] text-darkgray">
          {translate('RecentOpenings')}
        </p>
      </div>

      <div className="flex flex-col items-center gap-7">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>
    </div>
  )
}

