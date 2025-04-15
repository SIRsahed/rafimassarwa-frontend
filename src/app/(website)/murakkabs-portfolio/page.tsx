import React from 'react'
import Portfolio from '@/components/murakkabs_portfolio/Portfolio'
import UnderRader from '@/components/murakkabs_portfolio/UnderRader'
import BannerAds from '@/components/murakkabs_portfolio/BannerAds'
import TopData from '@/shared/TopData'
import LatestArticles from '@/shared/Articles'

export default function page() {
  return (
    <>
        <TopData/>
        <Portfolio /> 
        <UnderRader />
        <BannerAds/>
        <LatestArticles/>
    </>
  )
}
