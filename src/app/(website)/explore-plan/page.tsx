import EPBanner from '@/components/explore-plan/EPBanner'
import FAQ from '@/components/shared/FAQ'
import PricingCard from '@/components/explore-plan/PricingCard'
import Review from '@/components/shared/Review'
import React from 'react'

export default function page() {
  return (
    <main>
      <EPBanner />
      <PricingCard />
      <FAQ />
      <Review />
    </main>
  )
}
