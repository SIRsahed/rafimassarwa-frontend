import BannerAds from "@/components/News/BannerAds";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";
import AlertsCards from "@/components/Watchlist/AlertsCards";
import StockTickerCarousel from "@/components/Watchlist/StockTickerCarousel";
import Articles from "@/shared/Articles";
import React from "react";

const WatchlistPage = () => {
  return (
    <div>
      <StockTickerCarousel />
      <PortfolioTable />
      <AlertsCards />
      <BannerAds />
      <Articles />
    </div>
  );
};

export default WatchlistPage;
