import Hero from "@/components/HomePage/Hero";
import StockSearchSection from "@/components/HomePage/StockSearchSection";
import Services from "@/components/HomePage/Services";
import PortfolioGrowth from "@/components/HomePage/PortfolioGrowth";
import LatestArticles from "@/shared/Articles";
import StockDashboard from "@/shared/StockDashboard";

export default function Home() {
  return (
    <div className="px-2 md:px-0">
      <div>
        <Hero />
      </div>
      <div>
        <StockSearchSection />
      </div>
      <div>
        <Services />
      </div>

      <div>
        <PortfolioGrowth />
      </div>

      <div>
        <LatestArticles />
      </div>

      <div>
        <StockDashboard />
      </div>
    </div>
  );
}
