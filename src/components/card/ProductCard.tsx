// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/button/default-button';

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({ image, title, description }: Props) {

  return (
    <div className="w-[328px] min-h-[501px] bg-white rounded-3xl shadow-sm flex flex-col p-6">

      <div className="w-[280px] h-[193px] bg-gray-200 rounded-2xl mb-6 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={280}
          height={193}
          className="w-full h-full object-cover"
        />
      </div>


      <h3 className="text-lg font-bold text-gray-900 text-end mb-4">
        {title}
      </h3>

      <div className="flex-1 mb-6">
        <p className="text-sm text-gray-600 text-right leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          size="md"
          className="w-[280px] h-[40px] !rounded-full"
          bg="bg-[#5B5BD6]"
          textColor="text-white"
          text="جزئیات بیشتر"
          borderColor="border border-[#5B5BD6]"
        />
      </div>
    </div>
  );
}