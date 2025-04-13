import React from "react";
import PortfolioPanels from "@/components/Portfolio/PortfolioPanels";
import BannerAds from "@/components/News/BannerAds";
import Article from "@/components/HomePage/Articles";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";

const MyPortfolio = () => {
  return (
    <div>
      <PortfolioPanels />
      <PortfolioTable />
      <div className="mt-[100px]">
        <BannerAds />
      </div>
      <div>
        <Article />
      </div>
    </div>
  );
};

export default MyPortfolio;
