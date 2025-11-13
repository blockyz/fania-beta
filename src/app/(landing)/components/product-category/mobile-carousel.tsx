'use client';

import { useState } from 'react';
import CardCategory from '@/components/cards/card-category';
import { ICategory } from '@/lib/types';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

interface MobileCarouselProps {
  categories: ICategory[];
}

export default function MobileCarousel({ categories }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalSlides = categories.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToPrevious();
    }
    if (isRightSwipe) {
      goToNext();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="w-full">

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(+${currentIndex * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {categories.map((category) => (
            <div key={category.id} className="w-full shrink-0 flex justify-center">
              <CardCategory
                title={category.title}
                productsCount={category.productsCount}
              />
            </div>
          ))}
        </div>
      </div>

 
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label="Previous slide"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
        </button>

        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label="Next slide"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
        </button>
      </div>
    </div>
  );
}

