import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProductCard } from '@/lib/types';
import { translate } from '@/lib/helper';

export const ProductCard = ({
  id,
  title,
  description
}: IProductCard) => {
  return (
    <div className="w-[328px] h-[501px] bg-whitesmoke rounded-2xl shadow-md p-6 flex flex-col">
      <div className="w-full h-[280px] bg-white rounded-xl overflow-hidden mb-6 flex items-center justify-center relative">
        <Image
          src="/product-placeholder.svg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-black text-right text-[16px] font-bold mb-3">
          {title}
        </h3>
        <p className="text-textgray text-[14px] text-justify mb-6 flex-1">
          {description}
        </p>
        <Link
          href={`/products/${id}`}
          prefetch={false}
          className="min-w-[130px] h-10 text-[14px] px-5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active disabled:cursor-not-allowed disabled:bg-primary-disabled text-whitesmoke cursor-pointer w-full font-medium flex flex-nowrap items-center justify-center transition-all"
        >
          {translate('MoreDetails')}
        </Link>
      </div>
    </div>
  );
};

