import React from 'react'
import BannerAds from '@/components/murakkabs_portfolio/BannerAds'
// import Articles from '@/components/murakkabs_portfolio/Articles'
// import TopData from '@/components/murakkabs_portfolio/TopData'
import QualityStocks from '@/components/quality-stocks/QualityStocks'
import StockTickerCarousel from '@/components/Watchlist/StockTickerCarousel'
import LatestArticles from '@/shared/Articles'

export default function page() {
  return (
    <>
        {/* <TopData/> */}
        <div className='mt-28'>
          <StockTickerCarousel />
        </div>
        <QualityStocks />
        
        <BannerAds/>
        <LatestArticles />
        
    </>
  )
}
