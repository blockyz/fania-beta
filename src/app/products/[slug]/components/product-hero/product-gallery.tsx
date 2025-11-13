import React from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  mainImage: string
  galleryImages: string[]
  title: string
}

export const ProductGallery = ({ mainImage, galleryImages, title }: ProductGalleryProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="w-full lg:h-[468px] h-[244px] relative bg-whitesmoke rounded-2xl">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 bg-whitesmoke rounded-2xl">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full lg:h-[212px] h-[108px] rounded-2xl overflow-hidden  border border-gray-200"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

