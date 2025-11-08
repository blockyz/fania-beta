import { translate } from '@/lib/helper'
import { getExhibitions } from '@/lib/data'
import ExhibitionCard from './exhibition-card'

export default function ExhibitionsSection() {
  const exhibitions = getExhibitions()

  return (
    <section className="w-[1304px] mx-auto py-4 px-2">
      {/* Section Header */}
      <div className="flex flex-col items-end gap-1 mb-10">
        <h2 className=" text-[24px]  leading-6 text-black">
          {translate('Exhibitions')}
        </h2>
        <p className=" text-[24px] font-bold leading-[26px] text-darkgray">
          {translate('RecentOpenings')}
        </p>
      </div>

      {/* Exhibition Cards */}
      <div className="flex flex-col items-center gap-7">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>
    </section>
  )
}

