"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

// Sample data for the stocks
const stocks = [
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 29,
    marketCap: 2.34,
    month: "January",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
  },
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 30,
    marketCap: 2.34,
    month: "March",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 5,
    sellCount: 0,
  },
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 29,
    marketCap: 2.34,
    month: "April",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
  },
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 30,
    marketCap: 2.34,
    month: "April",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
  },
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 30,
    marketCap: 2.34,
    month: "April",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
  },
  {
    company: "/images/company-logo.png",
    price: 120.0,
    priceChange: 120.0,
    changePercent: 50.0,
    smartScore: 30,
    marketCap: 2.34,
    month: "April",
    sector: "Technology",
    LastRating: "Strong Buy",
    buyCount: 30,
    holdCount: 2,
    sellCount: 0,
  },
]

export default function StockOfMonths() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 container mx-auto border mt-10">
      <h2 className="text-2xl font-medium mb-4">Stock Of Month</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Company</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Stock Rating</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Analyst Price Target</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 flex items-center">
                <p>Ratings in Last</p>
                <p className="ml-1">72 Days ▼</p>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Month %</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Market Cap</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Month</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sector</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stocks.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600">C</span>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col items-center">
                    <p className="font-medium">{stock.LastRating}</p>
                    <div className="relative w-24 mt-1">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-white border border-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm">
                  <div className="text-center">
                    <p className="text-green-500 font-medium">${stock.priceChange.toFixed(2)}</p>
                    <p className="text-xs text-gray-600">({stock.changePercent}% upside)</p>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                      <span className="text-lg font-bold">{stock.smartScore}</span>
                    </div>

                    <div className="flex flex-col text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <span>{stock.buyCount} Buy</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                        <span>{stock.holdCount} Hold</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                        <span>{stock.sellCount} Sell</span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-red-500 font-medium">-7.24%</td>

                <td className="px-4 py-4 font-medium">${stock.marketCap}T</td>

                <td className="px-4 py-4 text-sm">{stock.month}</td>

                <td className="px-4 py-4 text-sm">{stock.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end p-4">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`flex h-8 w-8 items-center justify-center rounded-md ${
                currentPage === page ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
