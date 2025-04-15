import BannerAds from "@/components/News/BannerAds";
import AlertsCards from "@/components/Watchlist/AlertsCards";
import StockTickerCarousel from "@/components/Watchlist/StockTickerCarousel";
import StockWatchlistTable from "@/components/Watchlist/StockWatchlistTable";
import LatestArticles from "@/shared/Articles";
import React from "react";

const WatchlistPage = () => {
  return (
    <div>
      <div className="mt-28">
      <StockTickerCarousel />
      </div>
      <StockWatchlistTable />
      <AlertsCards />
      <BannerAds />
      <LatestArticles />
    </div>
  );
};

export default WatchlistPage;
