'use client'

import { translate } from "@/lib/helper"
import { Iinnovation } from "@/lib/types"
import { useState } from "react"
import Image from "next/image"

interface Props {
  data: Iinnovation[]
}

const InnovationCard: React.FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<Iinnovation>(data[0])

  return (
    <div className="flex flex-col px-4 md:px-0 lg:flex-row gap-6 items-start justify-center">
      {/* 🟢 بخش سمت راست - عنوان و توضیح */}
      <div className="w-full lg:w-[668px] lg:h-[669px] bg-[#FAFAFA] rounded-4xl p-10 flex flex-col justify-between">
        <div>
          <h5 className="text-black text-[32px]  text-nowrap mb-2 font-bold">
            {translate('latestInnovation')}
          </h5>
          <p className="text-[#8B8D98] text-[32px]  font-bold mb-8">
            {translate('inAllFields')}
          </p>

          <h4 className="text-[32px] font-bold text-gray-800 text-center mb-8">
            {selected.title}
          </h4>
          <p className="text-gray-600 text-justify leading-relaxed">
            {selected.description}
          </p>
        </div>

        {/* 🟢 عکس‌های کوچک پایین */}
        <div className="flex justify-between mt-8 gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              className={`md:w-[200px] md:h-[150px] aspect-square md:aspect-auto rounded-4xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                selected.id === item.id
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelected(item)}
            >
              <div className="w-full h-full bg-[#D9D9E0]  rounded-4xl overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 بخش سمت چپ - عکس بزرگ */}
      <div className="hidden lg:flex w-[668px] h-[669px] bg-[#FAFAFA] rounded-4xl p-8 items-center justify-center overflow-hidden">
        <Image
          src={selected.mainImage}
          alt={selected.title}
          width={668}
          height={669}
          className="w-full h-full object-cover rounded-4xl transition-all duration-500"
          priority
        />
      </div>
    </div>
  )
}

export default InnovationCard
