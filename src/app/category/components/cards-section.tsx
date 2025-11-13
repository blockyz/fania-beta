import React from 'react';
import CardCategory from '@/components/cards/card-category';
import { getCategoriesList } from '@/lib/data';
const categories = getCategoriesList();
export const CardsSection = () => {

  return (
    <section className="w-full py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CardCategory
              key={index}
              title={cat.title}
              productsCount={cat.productsCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
