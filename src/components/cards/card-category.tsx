'use client';

import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpLeft01Icon } from '@hugeicons/core-free-icons';
import { translate } from '@/lib/helper';
import { TertiaryButton } from '@/components/button/tertiary-button';

interface CardCategoryProps {
  title: string;
  productsCount: number;
}

export default function CardCategory({ title, productsCount }: CardCategoryProps) {
  return (
    <div className="relative w-[321px] h-[279px] rounded-3xl bg-whitesmoke overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/cancel-icon.svg" alt="" width={200} height={200} />
      </div>
      <div className="relative p-[28px_24px] h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <TertiaryButton size='sm' textClassName='inline-flex flex-row gap-1 text-[14px] font-semibold' className="text-darkgray! p-0! m-0! hover:text-gray-hover! active:text-gray-hover! hover:bg-transparent! active:bg-transparent!" leftIcon={<HugeiconsIcon icon={ArrowUpLeft01Icon} size={20} color="black" />}>
            <span>{translate('Products')}</span>
            <span>{productsCount}</span>
          </TertiaryButton>
          <h3 className=" text-num-16 leading-num-22 tracking-num--0_18 text-black font-bold">
            {translate(title)}
          </h3>
        </div>
      </div>
    </div>
  );
}

