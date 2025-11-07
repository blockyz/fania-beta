// components/CardsSection.tsx
import React from 'react';
import { CategoryCard } from '@/app/components/category-card';

export const CardsSection = () => {
  const categories = [
    { image: '/images/cat1.jpg', title: 'طراحی وب', count: '۱۲ محصول' },
    { image: '/images/cat2.jpg', title: 'اپلیکیشن موبایل', count: '۸ محصول' },
    { image: '/images/cat3.jpg', title: 'هوش مصنوعی', count: '۱۵ محصول' },
    { image: '/images/cat4.jpg', title: 'سئو و بازاریابی', count: '۱۰ محصول' },
    { image: '/images/cat5.jpg', title: 'گرافیک و UI', count: '۲۰ محصول' },
    { image: '/images/cat6.jpg', title: 'بک‌اند و API', count: '۹ محصول' },
    { image: '/images/cat7.jpg', title: 'امنیت سایبری', count: '۷ محصول' },
    { image: '/images/cat8.jpg', title: 'دیتابیس', count: '۱۱ محصول' },
  ];

  return (
    <section className="w-full py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              image={cat.image}
              title={cat.title}
              count={cat.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};