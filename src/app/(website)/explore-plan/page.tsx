import EPBanner from '@/components/explore-plan/EPBanner'
import PricingCard from '@/components/explore-plan/PricingCard'
import OverviewFAQ from '@/components/overview/overview-faq'
import Review from '@/shared/Review'
import React from 'react'

export default function page() {
  return (
    <main>
      <EPBanner />
      <PricingCard />
      <OverviewFAQ />
      <Review />
    </main>
  )
}
