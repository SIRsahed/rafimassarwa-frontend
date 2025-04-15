import StockTickerCarousel from '@/components/Watchlist/StockTickerCarousel';
import React from 'react'
// import BannerAds from '@/components/murakkabs_portfolio/BannerAds'
// import Articles from '@/components/murakkabs_portfolio/Articles'
// import TopData from '@/components/murakkabs_portfolio/TopData'
// import StockOfMonths from '@/components/stock-of-months/StockOfMonths'
// import StockTickerCarousel from '@/components/Watchlist/StockTickerCarousel'
// import QualityStocks from '@/components/quality-stocks/QualityStocks'
import StockOfTable from "@/components/stock-of-months/StockOfMonthTable";
import BannerAds from '@/components/News/BannerAds';
import LatestArticles from '@/shared/Articles';

export default function page() {
  return (
    <>
    <div className='mt-28'>
    <StockTickerCarousel />
    </div>
    <StockOfTable />
        {/* <TopData/> */}
        {/* <QualityStocks /> */}
        {/* <StockTickerCarousel /> */}
        {/* <StockOfMonths /> */}
        {/* <BannerAds/> */}
        {/* <Articles/> */}
        <div className='mt-[100px]'>
          <BannerAds />
        </div>
        <div>
          <LatestArticles />
        </div>
    </>
  )
}
