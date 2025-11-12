'use client';

import { useState } from 'react';
import Image from 'next/image';
import { translate } from '@/lib/helper';

interface PopupItem {
  label: string;
  imageSrc: string;
}

interface PopupProps {
  items: PopupItem[];
  onClose: () => void;
}

export default function PopupCard({ items, onClose }: PopupProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="flex items-center justify-center z-50">
      {/* Popup */}
      <div className="relative flex gap-8 w-[407px] h-[276px] bg-white rounded-4xl shadow-xl overflow-hidden">

        {/* Right: Item List */}
        <div className="flex flex-col justify-center gap-4 pr-6 py-5 h-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-[12px] font-bold pr-4  rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                  {translate(item.label)}
            </div>
          ))}
        </div>

        {/* Left: Image */}
        <div className="w-[197px] h-[236px] mt-5 mb-5 ml-5 rounded-xl overflow-hidden shrink-0">
          <Image
            src={hoveredIndex !== null ? items[hoveredIndex].imageSrc : items[0].imageSrc}
            alt="Popup Image"
            width={197}
            height={236}
            className="w-full h-full object-cover rounded-xl transition-all duration-300 bg-[#D9D9D9]"
          />
        </div>

        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-black font-bold text-xl hover:text-gray-600"
        >
        </div>
      </div>
    </div>
  );
}
