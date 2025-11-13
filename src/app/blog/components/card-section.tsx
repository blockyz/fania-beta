import React from 'react';
import { ProductCard } from '@/components/cards/product-card';
import { getBlogsList } from '@/lib/data';
const blogs = getBlogsList();

export default function CardsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
      {blogs.map((product, index) => (
        <div key={index} className="flex justify-center">
          <ProductCard
            title={product.title}
            description={product.description}
            id={product.id}
          />
        </div>
      ))}
    </div>
  );
}