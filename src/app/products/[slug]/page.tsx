import React from 'react'
import { getProductDetailBySlug } from '@/lib/data'
import { ProductHero } from './components/ProductHero/ProductHero'
import { ProductDetails } from './components/ProductDetails'
import { translate } from '@/lib/helper'

interface ProductsDetailPageProps {
  params: {
    slug: string
  }
}

const ProductsDetailPage = ({ params }: ProductsDetailPageProps) => {
  const product = getProductDetailBySlug(params.slug)
  console.log("product", product)
  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-xl text-black">{translate('ProductNotFound')}</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <ProductHero product={product} />
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductsDetailPage