import StockTickerCarousel from "@/components/Watchlist/StockTickerCarousel";
import React from "react";
import BannerAds from "@/components/News/BannerAds";
import LatestArticles from "@/shared/Articles";
import StockOfMonths from "@/components/stock-of-months/StockOfMonths";

export default function page() {
  return (
    <>
      <div className="mt-28">
        <StockTickerCarousel />
      </div>
      <div>
        <StockOfMonths />
      </div>
      <div className="mt-[100px]">
        <BannerAds />
      </div>
      <div>
        <LatestArticles />
      </div>
    </>
  );
}
