import React from "react";
import PortfolioPanels from "@/components/Portfolio/PortfolioPanels";
import BannerAds from "@/components/News/BannerAds";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";
import LatestArticles from "@/shared/Articles";

const MyPortfolio = () => {
  return (
    <div>
      <PortfolioPanels />
      <PortfolioTable />
      <div className="mt-[100px]">
        <BannerAds />
      </div>
      <div>
        <LatestArticles />
      </div>
    </div>
  );
};

export default MyPortfolio;
