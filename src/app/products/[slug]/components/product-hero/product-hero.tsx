import React from 'react'
import { IProductDetail } from '@/lib/types'
import { ProductGallery } from './product-gallery'
import { ProductInfo } from './product-info'

interface ProductHeroProps {
  product: IProductDetail
}

export const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <div className="w-full pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <ProductInfo product={product} />
          </div>
          <div className="order-1 lg:order-2">
            <ProductGallery
              mainImage={product.mainImage}
              galleryImages={product.galleryImages}
              title={product.title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

