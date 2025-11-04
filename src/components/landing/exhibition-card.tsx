import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { Exhibition } from '@/lib/data'
import { translate } from '@/lib/helper'

interface ExhibitionCardProps {
  exhibition: Exhibition
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div dir="rtl" className="w-[1248px] h-[260px] bg-whitesmoke rounded-[20px] flex items-center gap-6 p-6">
      {/* Right Section - Title & Location */}
      <div className="flex-1 flex flex-col justify-center text-right gap-2">
        <h3 className="font-pelak text-[24px] font-bold leading-8 text-black">
          {exhibition.title}
        </h3>
        <p className="font-pelak text-[24px] font-bold leading-8 text-black">
          {exhibition.location}
        </p>
      </div>

      {/* Center Section - Image */}
      <div className="shrink-0 w-[325px] h-[260px] bg-darkgray rounded-2xl overflow-hidden">
        <img
          src={exhibition.image}
          alt={exhibition.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Section - Description */}
      <div className="w-[378px] h-[78px] flex items-start text-left">
        <p className="font-pelak text-[16px] font-medium leading-[26px] text-gray">
          {exhibition.description}{' '}
          <button className="inline-flex items-center gap-1 text-darkgray text-[14px] font-normal leading-5">
            {translate('ReadMore')}
            <HugeiconsIcon icon={ArrowUp01Icon} size={16} className="text-darkgray" strokeWidth={2} />
          </button>
        </p>
      </div>
    </div>
  )
}

