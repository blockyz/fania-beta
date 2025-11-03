
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/button/default-button';

export default function ProductCard() {
  return (
    <div className="w-[1360px] h-[413px] bg-gray-100 flex justify-between items-start">
      <div className="w-[630px] h-[413px] bg-amber-900 rounded-3xl" />

      <div className="w-[588px] h-[346px] flex flex-col pt-[33.5px] px-8">
        <div className="mb-6 text-end">
          <h2>
            <span className="block text-xl font-bold text-gray-900 leading-tight">
              به معرفی کوتاه درباره مرکز و هدف فعالیت
            </span>
            <span className="block text-xl font-bold text-gray-500 mt-[4px] leading-tight">
              های خودش در چند سال اخیر
            </span>
          </h2>
        </div>
        <div className="flex-1 mt-[28px] overflow-hidden">
          <p className="text-sm text-gray-600 text-right space-y-1.5 leading-none">
            <span className="block">توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما
توضیحات مختصر درباره کار تحقیقاتی و دسته بندی های مختلف کار شما</span>
            
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            size="md"
            bg="bg-purple-600"
            textColor="text-white"
            text="درباره ما بیشتر بدانید"
            borderColor="border border-purple-600"
          />
        </div>
      </div>
    </div>
  );
}