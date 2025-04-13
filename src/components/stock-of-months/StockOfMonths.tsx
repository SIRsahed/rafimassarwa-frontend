// "use client"

// import { useState } from "react"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Calendar, ChevronRight, Lock, Menu, X } from "lucide-react"

// export default function StockOfMonths() {
//   const [activeTab, setActiveTab] = useState("all")
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

//   const stockData = [
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     {
//       symbol: "AAPL",
//       rating: "Strong Buy",
//       ratingPercentage: 80,
//       price: "$120.00",
//       priceUpside: "50.00%",
//       ratingScore: 39,
//       buyHoldSell: [
//         { type: "3D Buy", color: "bg-green-500", textColor: "text-green-500" },
//         { type: "7D Hold", color: "bg-yellow-400", textColor: "text-yellow-500" },
//         { type: "2 Hold", color: "bg-red-500", textColor: "text-red-500" },
//       ],
//       monthPercentage: "-7.24%",
//       marketCap: "$2.34T",
//       month: "January",
//       sector: "Technology",
//     },
//     // Add more stock objects if needed
//   ]

//   const MobileStockCard = ({ stock }: { stock: typeof stockData[0] }) => (
//     <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center gap-2">
//           <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-white shadow-sm backdrop-blur-lg">
//             <Lock className="h-6 w-6 rounded-full text-red-600" />
//           </div>
//           <div className="font-medium">{stock.symbol}</div>
//         </div>
//         <div className="text-red-500 font-medium">{stock.monthPercentage}</div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mb-3">
//         <div>
//           <div className="text-xs text-gray-500">Stock Rating</div>
//           <div className="font-medium text-sm">{stock.rating}</div>
//           <div className="h-1.5 w-full bg-gray-200 rounded-full mt-1">
//             <div className="h-1.5 bg-green-500 rounded-full" style={{ width: `${stock.ratingPercentage}%` }}></div>
//           </div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Price Target</div>
//           <div className="text-green-600 font-medium">{stock.price}</div>
//           <div className="text-xs text-gray-500">({stock.priceUpside} upside)</div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mb-3">
//         <div>
//           <div className="text-xs text-gray-500">Ratings</div>
//           <div className="flex items-center mt-1">
//             <div className="w-8 h-8 rounded-full border border-yellow-400 flex items-center justify-center text-sm font-medium">
//               {stock.ratingScore}
//             </div>
//             <div className="ml-2 space-y-0.5">
//               {stock.buyHoldSell.map((item, i) => (
//                 <div key={i} className="flex items-center text-xs">
//                   <div className={`w-2 h-2 rounded-full ${item.color} mr-1`}></div>
//                   <span className={`${item.textColor}`}>{item.type}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Market Cap</div>
//           <div className="font-medium">{stock.marketCap}</div>
//           <div className="text-xs text-gray-500 mt-1">Last: {stock.month}</div>
//         </div>
//       </div>

//       <div className="text-xs text-gray-500">
//         Sector: <span className="font-medium text-gray-700">{stock.sector}</span>
//       </div>
//     </div>
//   )

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//       <div className="px-3 py-2 rounded-2xl shadow-[0px_0px_5.5px_0px_#00000040]">
//         {/* Header with tabs */}
//         <div className="p-4 border-b">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl sm:text-2xl font-medium">Stock of the Month</h2>
//             <button
//               className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gray-100"
//               onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
//             >
//               {mobileFiltersOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {/* Tabs
//           <div className="hidden md:flex gap-6 text-[16px]">
//             {["all", "best", "worst"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`pb-2 ${activeTab === tab ? "border-b-2 border-green-500 font-medium" : "text-gray-500"}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === "all" ? "All Stocks" : tab === "best" ? "Best Rated" : "Worst Rated"}
//               </button>
//             ))}
//           </div> */}

//           <div className="flex gap-4 items-center">
//             <h1 className="font-medium text-[16px]">All Month</h1>
//             <Calendar />
//           </div>

//           <div className={`md:hidden flex flex-col gap-4 mt-2 ${mobileFiltersOpen ? "block" : "hidden"}`}>
//             {["all", "best", "worst"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`pb-2 ${activeTab === tab ? "border-b-2 border-green-500 font-medium" : "text-gray-500"}`}
//                 onClick={() => {
//                   setActiveTab(tab)
//                   setMobileFiltersOpen(false)
//                 }}
//               >
//                 {tab === "all" ? "All Stocks" : tab === "best" ? "Best Rated" : "Worst Rated"}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Table View */}
//         <div className="hidden md:block overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow className="text-xs h-[70px] bg-[#EAF6EC]">
//                 <TableHead className="text-xs font-medium py-4">Company</TableHead>
//                 <TableHead className="text-xs font-medium">Stock Rating</TableHead>
//                 <TableHead className="text-xs font-medium">Analyst Price Target</TableHead>
//                 <TableHead className="text-xs font-medium">Ratings in Last 72 Days</TableHead>
//                 <TableHead className="text-xs font-medium">Month %</TableHead>
//                 <TableHead className="text-xs font-medium">Market Cap</TableHead>
//                 <TableHead className="text-xs font-medium">Month</TableHead>
//                 <TableHead className="text-xs font-medium">Sector</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {stockData.map((stock, index) => (
//                 <TableRow key={index} className="border-b h-[90px]">
//                   <TableCell className="py-4">
//                     <div className="flex items-center gap-2">
//                       <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-white shadow-sm backdrop-blur-lg">
//                         <Lock className="h-6 w-6 rounded-full text-red-600" />
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="space-y-1">
//                       <div className="font-medium text-sm">{stock.rating}</div>
//                       <div className="h-1.5 w-32 bg-gray-200 rounded-full">
//                         <div
//                           className="h-1.5 bg-green-500 rounded-full"
//                           style={{ width: `${stock.ratingPercentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="text-green-600 font-medium">{stock.price}</div>
//                     <div className="text-xs text-gray-500">({stock.priceUpside} upside)</div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center text-sm font-medium">
//                         {stock.ratingScore}
//                       </div>
//                       <div className="ml-2 space-y-1">
//                         {stock.buyHoldSell.map((item, i) => (
//                           <div key={i} className="flex items-center text-xs">
//                             <div className={`w-2 h-2  ${item.color} mr-1`}></div>
//                             <span className={`${item.textColor}`}>{item.type}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="text-red-500">{stock.monthPercentage}</TableCell>
//                   <TableCell>{stock.marketCap}</TableCell>
//                   <TableCell>{stock.month}</TableCell>
//                   <TableCell>{stock.sector}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>

//         {/* Mobile Card View */}
//         <div className="md:hidden px-2 py-4">
//           {stockData.map((stock, index) => (
//             <MobileStockCard key={index} stock={stock} />
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-end p-4 items-center gap-2">
//           <button className="w-8 h-8 rounded-md text-white bg-green-500 flex items-center justify-center">1</button>
//           <button className="w-8 h-8 rounded-md text-gray-600 flex items-center justify-center border border-green-600">2</button>
//           <button className="w-8 h-8 rounded-md text-gray-600 flex items-center justify-center hidden sm:flex border border-green-600">3</button>
//           <button className="w-8 h-8 rounded-md text-gray-600 flex items-center justify-center">...</button>
//           <button className="w-8 h-8 rounded-md text-gray-600 flex items-center justify-center hidden sm:flex border border-green-600">17</button>
//           <button className="w-8 h-8 rounded-md text-gray-600 flex items-center justify-center">
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }



import {
  ChevronRight,
  Bell,
  CirclePlus,
  Trash,
} from "lucide-react";
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
  },
  {
    name: "Tesla",
    price: 250.1,
    priceChange: 1.75,
    changePercent: 0.7,
    smartScore: 6,
    marketCap: "900B",
    sector: "Automotive",
    analystConsensus: "hold",
    priceTargetUpdated: false,
    inPortfolio: false,
    emailAlerts: false,
    stockAlerts: true,
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
  },
];

export default function StockWatchlistTable() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-[100px] container mx-auto">
      <div className="flex items-center gap-2 p-4">
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
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Price Change
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Smart Score
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Market Cap
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Sector
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Analyst Consensus
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Price Target Update
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Add to Portfolio
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Email Alerts
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Stock Alerts
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
                        src="/images/apple.png"
                        alt="apple image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="font-medium">{stock.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium">
                  ${stock.price.toFixed(2)}
                </td>
                
                <td className="px-4 py-4 text-sm">
                  {/* <div
                    className={`flex items-center ${
                      stock.priceChange >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <span className="font-medium">
                      {stock.priceChange >= 0 ? "▲" : "▼"} $
                      {Math.abs(stock.priceChange).toFixed(2)} (
                      {stock.changePercent.toFixed(1)}%)
                    </span>
                  </div> */}
                  <p className="text-sm text-black">▲{stock.priceChange}({stock.changePercent})%</p>
                </td>
                <td className="px-4 py-4 text-center">
                  <div>
                    <Image
                      src="/images/lock-s.png"
                      height={100}
                      width={100}
                      alt="lock image"
                    />
                  </div>
                </td>
                <td className="px-4 py-4">${stock.marketCap}</td>

                <td className="px-4 py-4">
                  <div className="flex items-center">{stock.sector}</div>
                </td>

                <td className="px-4 py-4 text-center">
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
                  <div className="mr-14">
                    <CirclePlus className="h-5 w-5 mx-auto text-gray-400" />
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  {/* {stock.emailAlerts ? (
                    <Eye className="h-5 w-5 mx-auto text-gray-600" />
                  ) : (
                    <EyeOff className="h-5 w-5 mx-auto text-gray-400" />
                  )} */}

                  <div
                    className={`h-4 w-8 rounded-full ${
                      stock.inPortfolio ? "bg-green-500" : "bg-gray-300"
                    } relative`}
                  >
                    <div
                      className={`absolute ${
                        stock.inPortfolio ? "right-0" : "left-0"
                      } top-0 h-4 w-4 rounded-full bg-white shadow-sm`}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <Bell className="h-5 w-5 mx-auto text-gray-400" />
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
