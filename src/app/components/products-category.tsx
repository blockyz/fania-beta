'use client';

import { translate } from '@/lib/helper';
import { getCategoriesList } from '@/lib/data';
import CardCategory from './card-category';

export default function ProductsCategory() {
  const categories = getCategoriesList();

  return (
    <div className="w-[1360px] mx-auto ">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-pelak text-[24px] leading-11 text-black font-bold text-right mb-2">
          {translate('productsCategory')}
        </h2>
        <p className="font-pelak text-[24px] font-bold tracking-num--0_18 text-darkgray text-right">
          {translate('activityFieldsDisplay')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className=" gap-6 mx-auto flex justify-center flex-wrap">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            title={category.title}
            productsCount={category.productsCount}
          />
        ))}
      </div>
    </div>
  );
}

