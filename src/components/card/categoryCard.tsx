import { ArrowExpand02Icon } from '@/assets/icons';
import Image from 'next/image';
import React, { FC } from 'react'
interface Props {
  image: string;
  title: string;
  count: string;
  className?: string;
}

export const CategoryCard: FC<Props> = ({
  image,
  title,
  count,
  className = '',
}) => {
  return (
    <div
      className={`
        w-[321px] h-[279px] bg-white rounded-3xl shadow-sm flex flex-col items-center
        pr-6 pt-6 pb-8 ${className}
      `}
    >
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{count}</span>
          <ArrowExpand02Icon />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="w-[265px] h-[195px] bg-gray-50 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};