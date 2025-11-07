import { translate } from '@/lib/helper';
import React from 'react';



export default function CategoryMidelSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
      <p className="text-gray-500 text-sm mb-4 tracking-wide font-medium">
        {translate('category')}
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 md:mr-22">
          <span className="order-1 md:order-2"> {translate('OurAreasofExpertise')}</span>

          <span className="text-purple-600 text-xl md:text-2xl order-2 md:order-1">
            {translate('count')}
          </span>
        </div>
      </h1>
    </div>
  );
};
