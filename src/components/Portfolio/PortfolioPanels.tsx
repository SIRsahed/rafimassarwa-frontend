import { ArrowRight, Edit2, Plus } from "lucide-react"
import StockTickerCarousel from "../Watchlist/StockTickerCarousel"

export default function PortfolioPanels() {
  return (
    <div className="flex flex-col bg-white px-2 sm:px-4 md:px-6 lg:px-12">
      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top Ticker Bar */}
        <div className="flex items-center justify-center w-full">
          <StockTickerCarousel />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 p-2 sm:p-3 mt-4 sm:mt-8 mb-3 sm:mb-6 flex-wrap">
          <button className="border rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-green-500 hover:bg-green-50 transition text-xs sm:text-sm md:text-base">
            Add Portfolio
          </button>
          <button className="bg-green-500 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-white flex items-center gap-1 hover:bg-green-600 transition text-xs sm:text-sm md:text-base">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
            Add Holdings
          </button>
        </div>

        {/* Portfolio Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 sm:p-3 gap-3 sm:gap-4">
          {/* Left Section */}
          <div className="border rounded-xl overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029] w-full">
            <div className="p-3 sm:p-4">
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 truncate">Portfolio Overview</h2>
              <div className="flex mt-2 shadow-[0px_0px_10px_1px_#0000001A] overflow-x-auto">
                <div className="px-2 sm:px-4 py-1 sm:py-2 font-medium relative after:absolute after:top-0 after:left-0 after:content-[''] after:h-[5px] after:w-full after:bg-[#28A745] text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Overview
                </div>
                <div className="px-2 sm:px-4 py-1 sm:py-2 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Smart Score
                </div>
              </div>

              <div className="py-3 sm:py-6 text-center">
                <h1 className="text-[24px] sm:text-[30px] md:text-[40px] text-[#595959] font-bold">$0.00</h1>
              </div>

              <div className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4 text-center">Total Holdings</div>

              <div className="flex text-center items-center justify-center mt-1 sm:mt-2 py-1 sm:py-2">
                <div className="text-xs sm:text-sm md:text-base mr-2">Portfolio Cash</div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm md:text-base">$0.00</span>
                  <Edit2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                </div>
              </div>

              <div className="mt-2 sm:mt-4">
                <div className="flex divide-x divide-gray-200">
                  {/* Total Return */}
                  <div className="flex-1 px-2 sm:px-4">
                    <div className="flex items-center text-green-500">
                      <span className="text-xs sm:text-sm md:text-lg">+$0.00</span>
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl">+1.20%</span>
                    <div className="flex items-center text-[10px] sm:text-xs mt-2 sm:mt-4">Daily Return</div>
                  </div>

                  {/* Daily Return */}
                  <div className="flex-1 px-2 sm:px-4 mt-3 sm:mt-6 md:mt-9">
                    <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">---</div>
                    <div className="text-[10px] sm:text-xs text-green-500 text-center">Daily Return</div>
                  </div>

                  {/* 30 Day Return */}
                  <div className="flex-1 px-2 sm:px-4 mt-3 sm:mt-6 md:mt-9">
                    <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">---</div>
                    <div className="text-[10px] sm:text-xs text-green-500 text-center">Daily Return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="border rounded-xl overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029] w-full">
            <div className="p-3 sm:p-4 border-b">
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 truncate">Portfolio Overview</h2>
              <div className="flex mt-2 shadow-[0px_0px_10px_1px_#0000001A] overflow-x-auto">
                <div className="px-2 sm:px-4 py-1 sm:py-2 font-medium relative after:absolute after:top-0 after:left-0 after:content-[''] after:h-[5px] after:w-full after:bg-[#28A745] text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Top Gainers TSLA{" "}
                </div>
                <div className="px-2 sm:px-4 py-1 sm:py-2 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Top Losers
                </div>
              </div>

              <div className="mt-2 sm:mt-4">
                <div className="flex justify-between items-center py-1 sm:py-2 px-1 sm:px-2">
                  <div className="font-medium text-xs sm:text-sm md:text-base truncate">PANW</div>
                  <div className="text-green-500 text-right">
                    <div className="text-[10px] sm:text-xs">+0.2%</div>
                    <div className="font-medium text-xs sm:text-sm md:text-base">+$6.65</div>
                  </div>
                </div>
                <div className="py-2 sm:py-4 text-center text-gray-500 text-xs sm:text-sm md:text-base">
                  No holdings to show
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border rounded-xl overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029] w-full">
            <div className="p-3 sm:p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-base sm:text-lg text-gray-800 truncate">Portfolio Performance</h2>
                <div className="text-xs sm:text-sm text-green-500 flex items-center cursor-pointer hover:underline">
                  See All <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
              <div className="flex mt-2 shadow-[0px_0px_10px_1px_#0000001A] overflow-x-auto">
                <div className="px-2 sm:px-4 py-1 sm:py-2 font-medium relative after:absolute after:top-0 after:left-0 after:content-[''] after:h-[5px] after:w-full after:bg-[#28A745] text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Overview
                </div>
                <div className="px-2 sm:px-4 py-1 sm:py-2 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Smart Score
                </div>
              </div>

              <div className="flex items-center justify-center h-24 sm:h-32 md:h-48">
                <div className="text-sm sm:text-base md:text-xl font-medium text-gray-600">Coming Soon!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
