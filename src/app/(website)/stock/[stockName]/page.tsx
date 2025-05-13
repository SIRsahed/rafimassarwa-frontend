"use client"

import CompanyDescription from '@/components/overview/company-description'
import DescriptionAudioPlayer from '@/components/overview/description-audio'
import FinancialDashboard from '@/components/overview/financial-dashboard'
import FinancialDataTable from '@/components/overview/financial-data-table'
import RecentNews from '@/components/overview/news'
import OverviewNewsFeed from '@/components/overview/news-feed'
import OptionsPrices from '@/components/overview/options-price'
import OverviewFAQ from '@/components/overview/overview-faq'
import OwnershipOverview from '@/components/overview/ownership-overview'
import ScoreVisualization from '@/components/overview/ownership-scale'
import StockPremiumBanner from '@/components/Portfolio/chart/chart-bottom'
import StockChart from '@/components/Portfolio/chart/stock-chart'
import StockHeader from '@/components/Portfolio/chart/stock-header'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const AssetChartOverview = dynamic(() => import("@/components/overview/stock-chart"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-md mx-auto p-6 flex justify-center items-center h-[400px]">Loading chart...</div>
  ),
})

// Import the component with no SSR to prevent hydration errors

export default function Page({ params: { stockName } }: { params: { stockName: string } }) {

  const [timeframe, setTimeframe] = useState("1Y") // Changed default from 1M to 1Y

  console.log(stockName)

  return (
    <main className="flex min-h-screen flex-col lg:p-4 md:p-6 lg:w-[80vw] w-[98vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
        <div className="md:col-span-6 col-span-full">
          <StockHeader
            timeframe={timeframe}
            onTimeframeChange={setTimeframe}
          />
          <div className="mt-6">
            <div className="space-y-10">
              <div className="">
                <StockChart selectedStock={"aapl"} timeframe={timeframe} />
                <FinancialDataTable />
              </div>
              <OverviewNewsFeed />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="shadow-[0px_0px_10px_1px_#0000001A]">
                  <OptionsPrices />
                </div>
                <div className="shadow-[0px_0px_10px_1px_#0000001A]">
                  <OwnershipOverview />
                </div>
              </div>
              <div className="">
                <FinancialDashboard />
              </div>
              <div className="">
                <OverviewFAQ />
              </div>
              <div className="">
                <StockPremiumBanner />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-full space-y-8">
          <ScoreVisualization />
          <CompanyDescription />
          <DescriptionAudioPlayer />
          <AssetChartOverview />
          <RecentNews />
        </div>
      </div>
    </main >
  )
}
