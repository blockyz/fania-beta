'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { IProductDetail } from '@/lib/types'
import { translate } from '@/lib/helper'

interface ProductDetailsProps {
  product: IProductDetail
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [activeSection, setActiveSection] = useState<'descriptions' | 'specifications'>('descriptions')
  const descriptionsRef = useRef<HTMLDivElement>(null)
  const specificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting)

      if (visibleEntries.length > 0) {
        const sorted = visibleEntries.sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top
        })

        const id = sorted[0].target.id
        if (id === 'descriptions') {
          setActiveSection('descriptions')
        } else if (id === 'specifications') {
          setActiveSection('specifications')
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (descriptionsRef.current) {
      observer.observe(descriptionsRef.current)
    }
    if (specificationsRef.current) {
      observer.observe(specificationsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (section: 'descriptions' | 'specifications') => {
    if (section === 'descriptions' && descriptionsRef.current) {
      descriptionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === 'specifications' && specificationsRef.current) {
      specificationsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          <div className="order-2 lg:order-2">
            <div
              id="descriptions"
              ref={descriptionsRef}
              className="mb-12 scroll-mt-20"
            >


              <h2 className="lg:text-xl text-base font-bold text-black  pb-4 ">
                {translate('ProductDescriptions')}
              </h2>

              <p className="text-sm text-textgray leading-relaxed mb-8 text-justify">
                {product.description}
              </p>

              <h3 className="text-base font-bold text-darkgray mb-4">
                {translate('ProductDescriptions')}:
              </h3>

              <ul className="space-y-4">
                {product.descriptions.map((desc, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-black mt-1">•</span>
                    <p className="text-sm text-textgray leading-relaxed flex-1">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-[400px] mb-8 bg-whitesmoke rounded-2xl overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <div
              id="specifications"
              ref={specificationsRef}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl font-bold text-black mb-6  pb-4">
                {translate('ProductSpecifications')}
              </h2>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-2 lg:gap-4 py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="text-sm font-semibold text-textgray lg:w-1/3">
                      {spec.label}
                    </div>
                    <div className="text-sm text-black lg:w-2/3">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-1 hidden lg:block">
            <div className="sticky top-20">
              <div className="bg-whitesmoke rounded-2xl p-6">
                <nav className="space-y-4">
                  <button
                    onClick={() => scrollToSection('descriptions')}
                    className={`w-full text-right py-3 px-4 rounded-lg transition-colors ${activeSection === 'descriptions'
                      ? 'text-black font-bold bg-white'
                      : 'text-textgray hover:text-black'
                      }`}
                  >
                    {translate('ProductDescriptions')}
                  </button>
                  <button
                    onClick={() => scrollToSection('specifications')}
                    className={`w-full text-right py-3 px-4 rounded-lg transition-colors ${activeSection === 'specifications'
                      ? 'text-black font-bold bg-white'
                      : 'text-textgray hover:text-black'
                      }`}
                  >
                    {translate('ProductSpecifications')}
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

