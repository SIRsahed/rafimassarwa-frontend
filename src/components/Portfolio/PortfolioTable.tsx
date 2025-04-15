import { ChevronRight, Bell, Trash, TriangleAlert, Pencil } from "lucide-react";
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
  headingVal: string;
};

const stocks: StockData[] = [
  {
    name: "Apple",
    price: 175.5,
    priceChange: 2.5,
    changePercent: 1.45,
    smartScore: 8,
    marketCap: "2.8T",
    sector: "Technology",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: true,
    stockAlerts: true,
    headingVal: "Stron",
  },
  {
    name: "Tesla",
    price: 250.1,
    priceChange: -1.75,
    changePercent: -0.7,
    smartScore: 6,
    marketCap: "900B",
    sector: "Automotive",
    analystConsensus: "hold",
    priceTargetUpdated: false,
    inPortfolio: false,
    emailAlerts: false,
    stockAlerts: true,
    headingVal: "Stron",
  },
  {
    name: "Amazon",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5T",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    headingVal: "Stron",
  },
  {
    name: "Amazon",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5T",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    headingVal: "Stron",
  },
  {
    name: "Amazon",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5T",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    headingVal: "Stron",
  },
  {
    name: "Amazon",
    price: 120.25,
    priceChange: 0.65,
    changePercent: 0.54,
    smartScore: 7,
    marketCap: "1.5T",
    sector: "ecommerce",
    analystConsensus: "buy",
    priceTargetUpdated: true,
    inPortfolio: true,
    emailAlerts: false,
    stockAlerts: false,
    headingVal: "Stron",
  },
];

export default function PortfolioTable() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-[100px] container mx-auto">
      <div className="flex items-center gap-2 p-4 mb-11">
        <div className="flex gap-3 items-center bg-[#BFBFBF] p-1 rounded-sm">
          <div className="">
            <Image
              src="/images/icon-2.png"
              alt="icon-2"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </div>
          <div className="flex gap-3">
            <Image
              src="/images/icon-3.png"
              width={50}
              height={50}
              alt="icon-3"
              className="h-[18px] w-[18px]"
            />
            <Image
              src="/images/icon-4.png"
              width={50}
              height={50}
              alt="icon-4"
              className="h-[18px] w-[18px]"
            />
          </div>
        </div>
        <div className="flex space-x-1">
          <button className="rounded-md bg-green-600 px-4 py-1 text-sm font-medium text-white">
            Overview
          </button>
          <button className="rounded-md px-4 py-1 text-sm font-medium text-gray-500">
            Financials
          </button>
          <button className="rounded-md px-4 py-1 text-sm font-medium text-gray-500">
            Technicals
          </button>
          <button className="rounded-md px-4 py-1 text-sm font-medium text-gray-500">
            Performance
          </button>
          <button className="rounded-md px-4 py-1 text-sm font-medium text-gray-500">
            Forecast
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Stock Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Number of Shares
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Price Change
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Ai Catalyst
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Analyst Consensus
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Analyst Price Target
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Smart Score
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Holding Value
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Holding Gain
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Top Analyst Consensus
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Alerts
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stocks.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="mr-2 h-9 w-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">
                      <Image
                        src="/images/appl.png"
                        alt="apple image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="font-medium">{stock.name}</span>
                  </div>
                </td>
                <td>
                  <div className="flex ml-5">
                    <TriangleAlert className="text-sm text-[#FFD700]" />
                    <p className="text-md font-bold">0</p>
                    <Pencil className="text-sm text-[#28A745]" />
                  </div>
                </td>
                <td className="px-4 py-4 font-medium">
                  ${stock.price.toFixed(2)}
                </td>
                <td className="px-4 py-4">
                  <div
                    className={`flex items-center ${
                      stock.priceChange >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <span className="font-medium">
                      {stock.priceChange >= 0 ? "▲" : "▼"} $
                      {Math.abs(stock.priceChange).toFixed(2)} (
                      {stock.changePercent.toFixed(1)}%)
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="w-6 h-6">
                    <Image
                      src="/images/Ai.png"
                      height={100}
                      width={100}
                      alt="lock image"
                      className="w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-4">
                  {/* ${stock.marketCap} */}
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5">
                      <Image
                        className="w-full h-full"
                        src="/images/g-3.png"
                        width={100}
                        height={100}
                        alt="group-image"
                      />
                    </div>
                    <p>Hold</p>
                  </div>
                </td>

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

                <td className="text-center">
                  <div>
                    <Image
                      src="/images/lock-s.png"
                      height={100}
                      width={100}
                      alt="lock image"
                    />
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  {/* <div>
                    <Image
                      src="/images/lock-s.png"
                      height={100}
                      width={100}
                      alt="lock image"
                    />
                  </div> */}
                  <p className="text-lg text-black mr-6">{stock?.headingVal}</p>
                </td>

                <td className="px-4 py-4 text-center">
                  {/* <div className="mr-14">
                    <CirclePlus className="h-5 w-5 mx-auto text-gray-400" />
                  </div> */}
                  <div
                    className={`flex items-center ${
                      stock.priceChange >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <div className="font-medium flex items-center gap-2 justify-center">
                      <p>▼</p>
                      <p>{stock.priceChange}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  {/* {stock.emailAlerts ? (
                      <Eye className="h-5 w-5 mx-auto text-gray-600" />
                    ) : (
                      <EyeOff className="h-5 w-5 mx-auto text-gray-400" />
                    )} */}

                  <div>
                    <Image
                      src="/images/lock-s.png"
                      height={100}
                      width={100}
                      alt="lock image"
                    />
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <div className="mr-6">
                    <Bell className="h-5 w-5 mx-auto text-gray-400" />
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <Trash className="h-5 w-5 mx-auto text-gray-400" />
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
