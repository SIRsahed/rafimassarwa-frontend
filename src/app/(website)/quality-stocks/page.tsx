import React from 'react'
import BannerAds from '@/components/murakkabs_portfolio/BannerAds'
// import Articles from '@/components/murakkabs_portfolio/Articles'
// import TopData from '@/components/murakkabs_portfolio/TopData'
import QualityStocks from '@/components/quality-stocks/QualityStocks'
import LatestArticles from '@/components/HomePage/Articles'
import StockTickerCarousel from '@/components/Watchlist/StockTickerCarousel'

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
