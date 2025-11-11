import React from 'react';
import { translate } from '@/lib/helper';
import { getProducts } from '@/lib/data';
import { ProductCard } from '@/components/cards/product-card';

const products = getProducts();

export const ProductsSection = () => {
  return (
    <div className="lg:w-[1360px] w-[390px] mx-auto my-8 flex flex-col gap-8">
      <div className="px-4 text-right">
        <h2 className="text-[24px] font-bold text-black">
          {translate('OurProducts')}
        </h2>
        <p className="text-[24px] text-textgray  font-bold">
          {translate('ToEnterTechnologies')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

