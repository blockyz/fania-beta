import { translate } from '@/lib/helper';
import React from 'react';

export default function CategoryMidelSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
      <p className="text-gray-500 text-sm mb-4 tracking-wide font-medium">
        {translate('Category')}
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
          <span className="text-purple-600 text-xl md:text-2xl order-2 md:order-2">
            (92{translate('Products')} )
          </span>

          <span className="order-1 md:order-1 md:mr-25">
            {translate('OurAreasofExpertise')}
          </span>
        </div>
      </h1>
    </div>
  );
}