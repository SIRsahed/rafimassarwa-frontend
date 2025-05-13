import OverviewFAQ from '@/components/overview/overview-faq'
import PUBanner from '@/components/plan-upgrade/PUBanner'
import Summary from '@/components/plan-upgrade/Summary'
import Review from '@/shared/Review'
import React from 'react'

export default function page() {
    return (
        <main>
            <PUBanner />
            <Summary />
            <OverviewFAQ />
            <Review />
        </main>
    )
}
