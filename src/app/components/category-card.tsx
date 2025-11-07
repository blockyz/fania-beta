'use client'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowExpand02FreeIcons } from '@hugeicons/core-free-icons';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  image: string;
  title: string;
  count: string;
}

export const CategoryCard: FC<Props> = ({ image, title, count }) => {
  return (
    <div className="w-full max-w-[321px] h-[279px] bg-white rounded-3xl shadow-sm flex flex-col justify-between p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{count}</span>
          <HugeiconsIcon icon={ArrowExpand02FreeIcons} className="w-5 h-5" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="w-[265px] h-[195px] bg-gray-50 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={265}
            height={195}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};