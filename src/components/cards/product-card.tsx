import React from 'react';
import Image from 'next/image';
import { IProductCard } from '@/lib/types';
import { translate } from '@/lib/helper';
import { PrimaryButton } from '../button/primary-button';

export const ProductCard = ({
  title,
  description,
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
        <h3 className="text-black text-right text-xl font-bold mb-3 font-vazirmatn">
          {title}
        </h3>
        <p className="text-textgray text-sm leading-6 text-justify mb-6 flex-1 font-vazirmatn">
          {description}
        </p>
        <PrimaryButton
          size="lg"
          radius="lg"
          className="w-full"
        >
          {translate('MoreDetails')}
        </PrimaryButton>
      </div>
    </div>
  );
};

