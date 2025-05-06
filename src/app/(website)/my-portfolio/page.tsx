import React from "react";
import PortfolioPanels from "@/components/Portfolio/PortfolioPanels";
import PortfolioTable from "@/components/Portfolio/PortfolioTable";
import Articles from "@/shared/Articles";
import BannerAds from "@/components/murakkabs_portfolio/BannerAds";

const MyPortfolio = () => {
  return (
    <>
      <PortfolioPanels />
      <PortfolioTable />
      <BannerAds />
      <Articles />
    </>
  );
};

export default MyPortfolio;
