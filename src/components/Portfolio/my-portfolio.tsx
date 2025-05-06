import PortfolioPanels from "@/components/Portfolio/PortfolioPanels"
import PortfolioTable from "@/components/Portfolio/PortfolioTable"
import StockTickerCarousel from "@/components/Watchlist/StockTickerCarousel"

const MyPortfolio = () => {
  return (
    <div className="w-full overflow-hidden">
      <StockTickerCarousel />
      <PortfolioPanels />
      <PortfolioTable />
    </div>
  )
}

export default MyPortfolio
