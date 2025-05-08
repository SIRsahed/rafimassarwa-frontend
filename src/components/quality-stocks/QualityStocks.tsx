import { ChevronRight } from "lucide-react";
import Image from "next/image";

type StockData = {
  name: string;
  price: number;
  priceChange: number;
  changePercent: number;
  smartScore: number;
  marketCap: string;
  sector: string;
  analystConsensus: "buy" | "hold" | "sell";
  priceTargetUpdated: boolean;
  inPortfolio: boolean;
  emailAlerts: boolean;
  stockAlerts: boolean;
  month: string;
  LastRating: string
};

const stocks: StockData[] = [
  {
    name: "Apple",
    month: "January",
    price: 175.5,
    priceChange: 2.5,
    changePercent: 1.45,
    smartScore: 8,
    marketCap: "2.8",
    sector: "Technology",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: true,
    stockAlerts: true,
    LastRating: "2 Days Ago",
  },
  {
    name: "Tesla",
    month: "January",
    price: 250.1,
    priceChange: 1.75,
    changePercent: 0.7,
    smartScore: 6,
    marketCap: "900",
    sector: "Automotive",
    analystConsensus: "hold",
    priceTargetUpdated: false,
    inPortfolio: false,
    emailAlerts: false,
    stockAlerts: true,
    LastRating: "2 Days Ago",
  },
  {
    name: "Amazon",
    month: "January",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    LastRating: "2 Days Ago",
  },
  {
    name: "Amazon",
    month: "January",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    LastRating: "2 Days Ago",
  },
  {
    name: "Amazon",
    month: "January",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    LastRating: "2 Days Ago",
  },
  {
    name: "Amazon",
    month: "January",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    LastRating: "2 Days Ago",
  },
];

export default function StockWatchlistTable() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-16 lg:mt-[100px] container mx-auto">
      <div className="flex items-center gap-2 p-4">
        <div className="flex items-center space-x-4">
          <button className="text-base text-black">All Month</button>

          <button className="w-4 h-4">
            <Image
              src="/images/calander.png"
              width={100}
              height={100}
              alt="clander"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Company
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Stock Rating
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Analyst Price Target
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 flex">
                <p>Ratings in Last 72 Days</p>
                <p>▼</p>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Month %
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Market Cap
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Last Rating
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Sector
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stocks.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div>
                    <Image
                      src="/images/lock-s.png"
                      height={100}
                      width={100}
                      alt="lock image"
                    />
                  </div>
                </td>

                <td className="px-4 py-4 font-medium">
                  <p className="ml-5">${stock.price.toFixed(2)}</p>
                  <div className="relative">
                    <div className="w-[100px] h-[8px]">
                      <Image
                        src="/images/green-line.png"
                        alt=""
                        width={50}
                        height={50}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute top-0 right-1/2">
                      <Image
                        src="/images/trangle.png"
                        alt="tringle"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm">
                  <div className="">
                    <p className="text-xs text-[#28A745] ml-7">
                      ${stock.priceChange}.00
                    </p>
                    <p>({stock.changePercent}% Upside)</p>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-start">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                        <span className="text-lg font-bold">
                          {stock.smartScore}
                        </span>
                      </div>

                      <div className="">
                        <div className="flex flex-col items-start text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-green-500"></div>
                            <span>{stock.smartScore} Buy</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-yellow-400"></div>
                            <span>{stock.smartScore} Hold</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-500"></div>
                            <span>{stock.smartScore} Sell</span>{" "}
                            {/* Fixed typo here */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-red-500">-{stock.marketCap}%</td>

                <td className="px-4 py-4">
                  <div className="flex items-center">${stock.marketCap}T</div>
                </td>

                <td className="px-4 py-4 text-xs">
                  <p>{stock?.LastRating}</p>
                </td>

                <td className="text-center text-xs">
                  <p>{stock?.sector}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end p-4">
        <div className="flex items-center space-x-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            4
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            5
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
