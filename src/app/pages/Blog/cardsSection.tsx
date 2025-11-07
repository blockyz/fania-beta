import React from 'react';
import ProductCard from '@/app/components/product-card';

const products = [
  {
    image: '/images/product1.jpg',
    title: 'محصول اول',
    description: 'توضیحات محصول اول به صورت خلاصه و جذاب.',
  },
  {
    image: '/images/product2.jpg',
    title: 'محصول دوم',
    description: 'توضیحات محصول دوم برای نمایش در کارت.',
  },
  {
    image: '/images/product3.jpg',
    title: 'محصول سوم',
    description: 'توضیحاتی درباره محصول سوم که کاربر را جذب کند.',
  },
  {
    image: '/images/product4.jpg',
    title: 'محصول چهارم',
    description: 'توضیحات محصول چهارم با جزئیات بیشتر.',
  },
  // می‌تونی محصولات بیشتری اضافه کنی
];

export default function CardsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
      {products.map((product, index) => (
        <div key={index} className="flex justify-center">
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
}