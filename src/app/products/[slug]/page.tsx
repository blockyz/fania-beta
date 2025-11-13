import React from 'react'
import { getProductDetailBySlug } from '@/lib/data'
import { ProductHero } from './components/product-hero/product-hero'
import { ProductDetails } from './components/product-details'
import { translate } from '@/lib/helper'
import { notFound } from 'next/navigation'

interface ProductsDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProductsDetailPage = async ({ params }: ProductsDetailPageProps) => {
  const { slug } = await params
  const product = getProductDetailBySlug(slug)
  if (!product) return notFound()

  return (
    <div className="w-full">
      <ProductHero product={product} />
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductsDetailPage