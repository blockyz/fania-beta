import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpLeft01Icon } from '@hugeicons/core-free-icons'
import { IExhibition } from '@/lib/types/index'
import { translate } from '@/lib/helper'
import { TertiaryButton } from '@/components/button/tertiary-button'
import Image from 'next/image'

interface ExhibitionCardProps {
  exhibition: IExhibition
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div dir="rtl" className="w-[1248px] h-[260px] bg-whitesmoke rounded-[20px] flex items-center gap-6 p-6">
      <div className="flex-1 flex flex-col justify-center text-right gap-2">
        <h3 className="text-[24px] font-bold leading-8 text-black">
          {exhibition.title}
        </h3>
        <p className="text-[24px] font-bold leading-8 text-black">
          {exhibition.location}
        </p>
      </div>
      <div className="shrink-0 w-[325px] h-[260px] bg-darkgray rounded-2xl overflow-hidden relative">
        <Image
          src="/exhibition-placeholder.svg"
          alt={exhibition.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[378px] h-[78px] flex items-start text-right">
        <p className="text-[16px] font-medium leading-[26px] text-textgray">
          {exhibition.description}{' '}
          <TertiaryButton className="cursor-pointer inline-flex! min-w-0! h-auto! px-0! align-baseline bg-transparent! text-darkgray! hover:text-gray-hover! active:text-gray-hover!" rightIcon={<HugeiconsIcon icon={ArrowUpLeft01Icon} size={16} className="text-gray" strokeWidth={2} />}>
            {translate('ReadMore')}
          </TertiaryButton>
        </p>
      </div>
    </div>
  )
}

