import React from 'react'
import { IProductDetail } from '@/lib/types'
import { translate } from '@/lib/helper'

interface ProductInfoProps {
  product: IProductDetail
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex flex-col justify-around gap-6 bg-whitesmoke rounded-2xl py-4 px-6">
      <div className="flex flex-col gap-6">
        <h1 className="lg:text-2xl text-xl font-bold text-black">
          {product.title}
        </h1>
        <p className="lg:text-sm text-xs text-textgray text-justify leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {product.weights.map((weight, index) => (
            <div key={index} className="flex flex-col items-start gap-1">
              <div dir="ltr" className="text-[32px] text-right font-bold text-black">
                {weight.value} {weight.unit}
              </div>
              <div className="text-[16px] font-semibold text-textgray">
                {translate('Weight')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="shrink-0">
          <span className="text-[14px] font-bold text-textgray">{translate('ContactPhone')}</span>
        </div>
        <div className="flex items-center gap-2 bg-primary text-whitesmoke px-6 py-3 rounded-full">
          <span className="text-[14px] font-semibold">{product.phoneNumber}</span>
        </div>
      </div>
    </div>
  )
}

