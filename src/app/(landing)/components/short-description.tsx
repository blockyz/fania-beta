import React from 'react';
import { PrimaryButton } from '@/components/button/primary-button';
import { getProductCardData } from '@/lib/data';

export default function ShortDescription() {
  const productCard = getProductCardData();

  return (
    <div className="w-full max-w-[1360px] h-auto bg-gray-100 flex flex-col md:flex-row justify-between items-start p-4 gap-6">

      <div className="w-full md:w-[588px] h-auto flex flex-col pt-[33.5px] px-4 order-1 md:order-2">
        <div className="mb-6 text-end">
          <h2>
            <span className="block text-xl font-bold text-gray-900 leading-tight">
              {productCard.ProductCard_Title_1}
            </span>
            <span className="block text-xl font-bold text-gray-500 mt-[4px] leading-tight">
              {productCard.ProductCard_Title_2}
            </span>
          </h2>
        </div>

        <div className="flex-1 mt-[28px] overflow-hidden">
          <p className="text-sm text-gray-600 text-right space-y-1.5 leading-relaxed break-words w-full">
            <span className="block">
              {productCard.ProductCard_Description}
            </span>
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <PrimaryButton size="md" radius="full">
            {productCard.ProductCard_Button}
          </PrimaryButton>
        </div>
      </div>

      <div className="w-full md:w-[630px] h-[413px] bg-amber-900 rounded-3xl order-2 md:order-1" />
    </div>
  );
}