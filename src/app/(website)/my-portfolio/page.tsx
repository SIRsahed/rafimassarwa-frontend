import React from "react";
import PortfolioPanels from "@/components/Portfolio/PortfolioPanels";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";
import Articles from "@/shared/Articles";
import BannerAds from "@/components/murakkabs_portfolio/BannerAds";

const page = () => {
  return (
    <div className="">
      <PortfolioPanels />
      <PortfolioTable />
      <BannerAds />
      <Articles />
    </div>
  );
};

export default page;
