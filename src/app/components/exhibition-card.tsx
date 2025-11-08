'use client'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { IExhibition } from '@/lib/types/index'
import { translate } from '@/lib/helper'
import TertiaryButton from '@/components/button/tertiary-button'

interface ExhibitionCardProps {
  exhibition: IExhibition
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div dir="rtl" className="w-[1248px] h-[260px] bg-whitesmoke rounded-[20px] flex items-center gap-6 p-6">
      {/* Right Section - Title & Location */}
      <div className="flex-1 flex flex-col justify-center text-right gap-2">
        <h3 className="text-[24px] font-bold leading-8 text-black">
          {exhibition.title}
        </h3>
        <p className="text-[24px] font-bold leading-8 text-black">
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
        <p className="text-[16px] font-medium leading-[26px] text-gray">
          {exhibition.description}{' '}
          <TertiaryButton rightIcon={<HugeiconsIcon icon={ArrowUp01Icon} size={16} className="text-darkgray" strokeWidth={2} />}>
            {translate('ReadMore')}
          </TertiaryButton>
        </p>
      </div>
    </div>
  )
}

