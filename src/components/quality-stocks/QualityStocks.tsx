"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"

// Expanded sample data for the stocks
const stocksData = [
  {
    id: 1,
    company: "Apple Inc.",
    logo: "/images/company-logo.png",
    price: 182.52,
    priceChange: 210.75,
    changePercent: 15.5,
    smartScore: 9,
    marketCap: 2.87,
    month: "January",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
    monthlyChange: 5.24,
  },
  {
    id: 2,
    company: "Microsoft Corp.",
    logo: "/images/company-logo.png",
    price: 415.32,
    priceChange: 450.2,
    changePercent: 8.4,
    smartScore: 10,
    marketCap: 3.12,
    month: "March",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 28,
    holdCount: 5,
    sellCount: 0,
    monthlyChange: -2.15,
  },
  {
    id: 3,
    company: "Amazon.com Inc.",
    logo: "/images/company-logo.png",
    price: 178.25,
    priceChange: 195.5,
    changePercent: 9.7,
    smartScore: 8,
    marketCap: 1.85,
    month: "April",
    sector: "Consumer Cyclical",
    LastRating: "Buy",
    buyCount: 25,
    holdCount: 7,
    sellCount: 1,
    monthlyChange: 3.45,
  },
  {
    id: 4,
    company: "Alphabet Inc.",
    logo: "/images/company-logo.png",
    price: 142.56,
    priceChange: 160.75,
    changePercent: 12.8,
    smartScore: 9,
    marketCap: 1.78,
    month: "February",
    sector: "Communication Services",
    LastRating: "Strong Buy",
    buyCount: 27,
    holdCount: 4,
    sellCount: 0,
    monthlyChange: -1.24,
  },
  {
    id: 5,
    company: "Tesla Inc.",
    logo: "/images/company-logo.png",
    price: 175.34,
    priceChange: 210.5,
    changePercent: 20.1,
    smartScore: 7,
    marketCap: 0.56,
    month: "May",
    sector: "Consumer Cyclical",
    LastRating: "Hold",
    buyCount: 15,
    holdCount: 12,
    sellCount: 5,
    monthlyChange: -7.24,
  },
  {
    id: 6,
    company: "NVIDIA Corp.",
    logo: "/images/company-logo.png",
    price: 950.02,
    priceChange: 1100.0,
    changePercent: 15.8,
    smartScore: 10,
    marketCap: 2.34,
    month: "April",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 32,
    holdCount: 1,
    sellCount: 0,
    monthlyChange: 12.35,
  },
  {
    id: 7,
    company: "Meta Platforms Inc.",
    logo: "/images/company-logo.png",
    price: 485.39,
    priceChange: 520.75,
    changePercent: 7.3,
    smartScore: 8,
    marketCap: 1.24,
    month: "March",
    sector: "Communication Services",
    LastRating: "Buy",
    buyCount: 24,
    holdCount: 8,
    sellCount: 1,
    monthlyChange: 4.56,
  },
  {
    id: 8,
    company: "Johnson & Johnson",
    logo: "/images/company-logo.png",
    price: 152.75,
    priceChange: 165.2,
    changePercent: 8.2,
    smartScore: 6,
    marketCap: 0.98,
    month: "February",
    sector: "Healthcare",
    LastRating: "Hold",
    buyCount: 12,
    holdCount: 15,
    sellCount: 6,
    monthlyChange: -3.21,
  },
  {
    id: 9,
    company: "JPMorgan Chase & Co.",
    logo: "/images/company-logo.png",
    price: 195.24,
    priceChange: 210.5,
    changePercent: 7.8,
    smartScore: 9,
    marketCap: 0.57,
    month: "January",
    sector: "Financial Services",
    LastRating: "Buy",
    buyCount: 22,
    holdCount: 10,
    sellCount: 1,
    monthlyChange: 6.78,
  },
  {
    id: 10,
    company: "Walmart Inc.",
    logo: "/images/company-logo.png",
    price: 60.35,
    priceChange: 65.75,
    changePercent: 9.0,
    smartScore: 7,
    marketCap: 0.42,
    month: "May",
    sector: "Consumer Defensive",
    LastRating: "Buy",
    buyCount: 18,
    holdCount: 12,
    sellCount: 3,
    monthlyChange: 2.45,
  },
  {
    id: 11,
    company: "Visa Inc.",
    logo: "/images/company-logo.png",
    price: 275.45,
    priceChange: 295.2,
    changePercent: 7.2,
    smartScore: 8,
    marketCap: 0.58,
    month: "April",
    sector: "Financial Services",
    LastRating: "Buy",
    buyCount: 20,
    holdCount: 8,
    sellCount: 2,
    monthlyChange: 5.12,
  },
  {
    id: 12,
    company: "Procter & Gamble Co.",
    logo: "/images/company-logo.png",
    price: 162.3,
    priceChange: 170.5,
    changePercent: 5.1,
    smartScore: 7,
    marketCap: 0.38,
    month: "March",
    sector: "Consumer Defensive",
    LastRating: "Hold",
    buyCount: 14,
    holdCount: 16,
    sellCount: 3,
    monthlyChange: 1.87,
  },
  {
    id: 13,
    company: "UnitedHealth Group Inc.",
    logo: "/images/company-logo.png",
    price: 490.25,
    priceChange: 525.75,
    changePercent: 7.2,
    smartScore: 9,
    marketCap: 0.45,
    month: "February",
    sector: "Healthcare",
    LastRating: "Strong Buy",
    buyCount: 25,
    holdCount: 5,
    sellCount: 0,
    monthlyChange: 4.32,
  },
  {
    id: 14,
    company: "Home Depot Inc.",
    logo: "/images/company-logo.png",
    price: 345.78,
    priceChange: 370.25,
    changePercent: 7.1,
    smartScore: 8,
    marketCap: 0.35,
    month: "January",
    sector: "Consumer Cyclical",
    LastRating: "Buy",
    buyCount: 19,
    holdCount: 10,
    sellCount: 2,
    monthlyChange: 3.65,
  },
  {
    id: 15,
    company: "Bank of America Corp.",
    logo: "/images/company-logo.png",
    price: 38.45,
    priceChange: 42.75,
    changePercent: 11.2,
    smartScore: 7,
    marketCap: 0.3,
    month: "May",
    sector: "Financial Services",
    LastRating: "Hold",
    buyCount: 15,
    holdCount: 14,
    sellCount: 4,
    monthlyChange: -2.78,
  },
  {
    id: 16,
    company: "Mastercard Inc.",
    logo: "/images/company-logo.png",
    price: 455.32,
    priceChange: 485.5,
    changePercent: 6.6,
    smartScore: 9,
    marketCap: 0.42,
    month: "April",
    sector: "Financial Services",
    LastRating: "Strong Buy",
    buyCount: 26,
    holdCount: 4,
    sellCount: 0,
    monthlyChange: 5.43,
  },
  {
    id: 17,
    company: "Exxon Mobil Corp.",
    logo: "/images/company-logo.png",
    price: 115.24,
    priceChange: 125.75,
    changePercent: 9.1,
    smartScore: 6,
    marketCap: 0.47,
    month: "March",
    sector: "Energy",
    LastRating: "Hold",
    buyCount: 12,
    holdCount: 18,
    sellCount: 5,
    monthlyChange: -4.21,
  },
  {
    id: 18,
    company: "Coca-Cola Co.",
    logo: "/images/company-logo.png",
    price: 62.35,
    priceChange: 65.5,
    changePercent: 5.1,
    smartScore: 7,
    marketCap: 0.27,
    month: "February",
    sector: "Consumer Defensive",
    LastRating: "Buy",
    buyCount: 17,
    holdCount: 13,
    sellCount: 2,
    monthlyChange: 2.34,
  },
  {
    id: 19,
    company: "Pfizer Inc.",
    logo: "/images/company-logo.png",
    price: 28.75,
    priceChange: 32.5,
    changePercent: 13.0,
    smartScore: 5,
    marketCap: 0.16,
    month: "January",
    sector: "Healthcare",
    LastRating: "Hold",
    buyCount: 10,
    holdCount: 20,
    sellCount: 8,
    monthlyChange: -6.54,
  },
  {
    id: 20,
    company: "Adobe Inc.",
    logo: "/images/company-logo.png",
    price: 520.45,
    priceChange: 575.2,
    changePercent: 10.5,
    smartScore: 8,
    marketCap: 0.24,
    month: "May",
    sector: "Technology",
    LastRating: "Buy",
    buyCount: 21,
    holdCount: 9,
    sellCount: 1,
    monthlyChange: 7.65,
  },
]

export default function StockTable() {
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredStocks, setFilteredStocks] = useState(stocksData)

  const itemsPerPage = 5

  // Apply filters
  useEffect(() => {
    let result = [...stocksData]

    // Apply tab filters
    if (activeTab === "best") {
      result = result.filter(
        (stock) => stock.LastRating === "Strong Buy" || (stock.LastRating === "Buy" && stock.buyCount > 20),
      )
    } else if (activeTab === "worst") {
      result = result.filter(
        (stock) => stock.LastRating === "Hold" || stock.LastRating === "Sell" || stock.sellCount > 0,
      )
    }

    setFilteredStocks(result)
    setCurrentPage(1)
  }, [activeTab])

  // Calculate pagination
  const totalItems = filteredStocks.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
  const currentItems = filteredStocks.slice(startIndex, endIndex)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 md:p-6 container mx-auto border mt-10">
      <h2 className="text-xl sm:text-2xl font-medium mb-4">Quality Stocks</h2>

      <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2">
        <div className="border-b overflow-x-auto whitespace-nowrap">
          <button
            className={`pb-2 px-2 sm:px-4 ${activeTab === "all" ? "border-b-2 border-green-500 font-medium" : "text-gray-500"}`}
            onClick={() => handleTabChange("all")}
          >
            All Stock
          </button>
          <button
            className={`pb-2 px-2 sm:px-4 ${activeTab === "best" ? "border-b-2 border-green-500 font-medium" : "text-gray-500"}`}
            onClick={() => handleTabChange("best")}
          >
            Best Rated
          </button>
          <button
            className={`pb-2 px-2 sm:px-4 ${activeTab === "worst" ? "border-b-2 border-green-500 font-medium" : "text-gray-500"}`}
            onClick={() => handleTabChange("worst")}
          >
            Worse Rated
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-green-50">
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Company</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Stock Rating</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                Analyst Price Target
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                <div className="flex items-center">
                  <p>Ratings in Last</p>
                  <p className="ml-1">72 Days ▼</p>
                </div>
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Month %</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Market Cap</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Month</th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Sector</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((stock) => (
                <tr key={stock.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Image src={"/images/lock-s.png"} alt="lock" width={10} height={10} />
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium hidden sm:block">{stock.company}</span>
                    </div>
                  </td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <div className="flex flex-col items-center">
                      <p className="text-xs sm:text-sm font-medium">{stock.LastRating}</p>
                      <div className="relative w-16 sm:w-24 mt-1">
                        <div className="w-full h-2 bg-green-500 rounded-full"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-white border border-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm">
                    <div className="text-center">
                      <p className="text-green-500 font-medium">${stock.priceChange.toFixed(2)}</p>
                      <p className="text-xs text-gray-600">({stock.changePercent}% upside)</p>
                    </div>
                  </td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                        <span className="text-base sm:text-lg font-bold">{stock.smartScore}</span>
                      </div>

                      <div className="flex flex-col text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-sm"></div>
                          <span>{stock.buyCount} Buy</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-sm"></div>
                          <span>{stock.holdCount} Hold</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-sm"></div>
                          <span>{stock.sellCount} Sell</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    className={`px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium ${stock.monthlyChange < 0 ? "text-red-500" : "text-green-500"}`}
                  >
                    {stock.monthlyChange > 0 ? "+" : ""}
                    {stock.monthlyChange}%
                  </td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium">${stock.marketCap}T</td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm">{stock.month}</td>

                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm">{stock.sector}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                  No stocks found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between p-2 sm:p-4 mt-2">
          <div className="text-xs sm:text-sm text-gray-500">
            Showing {startIndex + 1}-{endIndex} of {totalItems} stocks
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              className={`flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const shouldShow =
                page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)

              if (!shouldShow) {
                // Show ellipsis for skipped pages, but only once
                if (page === 2 || page === totalPages - 1) {
                  return (
                    <span
                      key={`ellipsis-${page}`}
                      className="flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center text-gray-600"
                    >
                      ...
                    </span>
                  )
                }
                return null
              }

              return (
                <button
                  key={page}
                  className={`flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-md text-xs sm:text-sm ${
                    currentPage === page ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            })}

            <button
              className={`flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
