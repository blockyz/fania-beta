import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/button/default-button';
import { translate } from '@/lib/helper';

export default function ProductCard() {
  return (
    <div className="w-full max-w-[1360px] h-auto bg-gray-100 flex flex-col md:flex-row justify-between items-start p-4 gap-6">

      <div className="w-full md:w-[588px] h-auto flex flex-col pt-[33.5px] px-4">
        <div className="mb-6 text-end">
          <h2>
            <span className="block text-xl font-bold text-gray-900 leading-tight">
              {translate('ProductCard_Title_1')}
            </span>
            <span className="block text-xl font-bold text-gray-500 mt-[4px] leading-tight">
              {translate('ProductCard_Title_2')}
            </span>
          </h2>
        </div>

        <div className="flex-1 mt-[28px] overflow-hidden">
          <p className="text-sm text-gray-600 text-right space-y-1.5 leading-relaxed break-words w-full">
            <span className="block">
              {translate('ProductCard_Description')}
            </span>
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <Button
            size="md"
            radius="full"
            className="bg-purple-600 text-white border border-purple-600"
          >
            {translate('ProductCard_Button')}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[630px] h-[413px] bg-amber-900 rounded-3xl" />
    </div>
  );
}