import BannerAds from "@/components/News/BannerAds";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";
import AlertsCards from "@/components/Watchlist/AlertsCards";
import StockTickerCarousel from "@/components/Watchlist/StockTickerCarousel";
import Articles from "@/shared/Articles";
import React from "react";

const WatchlistPage = () => {
  return (
    <div className="px-1 lg:px-0">
      <StockTickerCarousel />
      <PortfolioTable />
      <AlertsCards />
      <BannerAds />
      <Articles />
    </div>
  );
};

export default WatchlistPage;
