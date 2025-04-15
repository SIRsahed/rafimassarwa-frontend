import Image from "next/image";
import { ArrowRight, Edit2, Plus } from "lucide-react";
import StockTickerCarousel from "../Watchlist/StockTickerCarousel";

export default function Home() {
  return (
    <div className="flex gap-6 bg-white mt-28 px-6 lg:px-12">
      {/* Sidebar */}
      <div className="w-[250px] h-[422px] bg-white shadow-md">
        <div className="flex items-center gap-3 p-4 border-b shadow-[2px_0px_8px_0px_#00000029] mt-4">
          <div className="w-8 h-8">
            <Image
              src="/images/Stock-logo-1.png"
              width={32}
              height={32}
              alt="Tree logo"
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-bold text-sm">Smart</div>
            <div className="font-bold">Portfolio</div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center gap-3 px-4 py-2 bg-white border-l-4 border-green-500">
            <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center">
              <Image
                src="/images/sidbar-icon.png"
                width={15}
                height={15}
                alt="Portfolio icon"
                className="object-contain"
              />
            </div>
            <span className="text-sm">Portfolio</span>
          </div>

          {[
            { name: "Performance", icon: "/images/sidbar-icon.png" },
            { name: "My News", icon: "/images/sidbar-icon.png" },
            { name: "Analysis", icon: "/images/sidbar-icon.png" },
            { name: "My Calendar", icon: "/images/sidbar-icon.png" },
            { name: "Chart", icon: "/images/sidbar-icon.png" },
            { name: "Refer with friends", icon: "/images/sidbar-icon.png" },
            { name: "Influencers", icon: "/images/sidbar-icon.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 hover:bg-green-50 transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Image
                  src={item.icon || "/placeholder.svg"}
                  width={20}
                  height={20}
                  alt={`${item.name} icon`}
                  className="object-contain"
                />
              </div>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Ticker Bar */}
        <div className="flex items-center justify-cente mr-5">
          <StockTickerCarousel />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 p-3 mt-8 mb-6">
          <button className="border rounded-md px-4 py-2 text-green-500 hover:bg-green-50 transition">
            Add Portfolio
          </button>
          <button className="bg-green-500 rounded-md px-4 py-2 text-white flex items-center gap-1 hover:bg-green-600 transition">
            <Plus className="h-4 w-4" />
            Add Holdings
          </button>
        </div>

        {/* Portfolio Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
          {/* Left Section */}
          <div
            className="border rounded-xl overflow-hidden h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029]
"
          >
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                Portfolio Overview
              </h2>
              <div className="flex mt-2 border-b">
                <div className="px-4 py-2 border-b-2 border-green-500 font-medium">
                  Overview
                </div>
                <div className="px-4 py-2 text-gray-500">Smart Score</div>
              </div>

              <div className="py-6 text-center">
                <h1 className="text-[40px] text-[#595959] font-bold">$0.00</h1>
              </div>

              <div className="text-sm text-gray-600 mt-4 text-center">
                Total Holdings
              </div>

              <div className="flex text-center items-center justify-center mt-2 py-2">
                <div>Portfolio Cash</div>
                <div className="flex items-center gap-2">
                  <span>$0.00</span>
                  <Edit2 className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex divide-x divide-gray-200">
                  {/* Total Return */}
                  <div className="flex-1 px-4">
                    <div className="flex items-center text-green-500">
                      <span className="text-lg">+$0.00</span>
                    </div>
                    <span className="text-xl">+1.20%</span>
                    <div className="flex items-center text-xs mt-4">
                      Daily Return
                    </div>
                  </div>

                  {/* Daily Return */}
                  <div className="flex-1 px-4 mt-9">
                    <div className="h-8 flex items-center justify-center">
                      ---
                    </div>
                    <div className="text-xs text-green-500 text-center">
                      Daily Return
                    </div>
                  </div>

                  {/* 30 Day Return */}
                  <div className="flex-1 px-4 mt-9">
                    <div className="h-8 flex items-center justify-center">
                      ---
                    </div>
                    <div className="text-xs text-green-500 text-center">
                      Daily Return
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div
            className="border rounded-xl overflow-hidden h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029]
"
          >
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg text-gray-800">
                Portfolio Overview
              </h2>
              <div className="flex mt-2 border-b">
                <div className="px-4 py-2 border-b-2 border-green-500 font-medium">
                  Top Gainers
                </div>
                <div className="px-4 py-2 text-gray-500">Top Losers</div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center py-2">
                  <div className="font-medium">PANW</div>
                  <div className="text-green-500">
                    <div className="text-xs">+0.2%</div>
                    <div className="font-medium text-right">+$6.65</div>
                  </div>
                  <div className="py-4 text-center text-gray-500 text-sm">
                    No holdings to show
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border rounded-xl overflow-hidden h-[400px] bg-white shadow-[0px_0px_8px_0px_#00000029]">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-800">
                  Portfolio Performance
                </h2>
                <div className="text-xs text-green-500 flex items-center cursor-pointer hover:underline">
                  See All <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
              <div className="flex mt-2 border-b">
                <div className="px-4 py-2 border-b-2 border-green-500 font-medium">
                  Overview
                </div>
                <div className="px-4 py-2 text-gray-500">Smart Score</div>
              </div>

              <div className="flex items-center justify-center h-48">
                <div className="text-xl font-medium text-gray-600">
                  Coming Soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
