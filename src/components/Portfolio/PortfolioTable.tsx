"use client"

import { Trash } from "lucide-react"
import { IoWarningOutline } from "react-icons/io5"
import { FiEdit2 } from "react-icons/fi"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { IoNotificationsOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight } from "lucide-react"

const tableData = [
  {
    ticker: "AAPL",
    logo: "/images/appl.png",
    numberOfShares: 12,
    aiCatalyst: "/images/Ai.png",
    changeArrow: "▲",
    changeAmount: 0,
    price: 120.22,
    priceChange: 3.2,
    priceChangePercentage: "12%",
    recommendation: "Moderate Buy",
    analystPriceTarget: "/images/lock.png",
    holdingValue: "Strong",
    holdingGain: -3.2,
  },
  {
    ticker: "AAPL",
    logo: "/images/appl.png",
    numberOfShares: 12,
    aiCatalyst: "/images/Ai.png",
    changeArrow: "▲",
    changeAmount: 0,
    price: 120.22,
    priceChange: 3.2,
    priceChangePercentage: "12%",
    recommendation: "Hold",
    analystPriceTarget: "/images/lock.png",
    holdingValue: "Strong",
    holdingGain: -3.2,
  },
  {
    ticker: "AAPL",
    logo: "/images/appl.png",
    numberOfShares: 12,
    aiCatalyst: "/images/Ai.png",
    changeArrow: "▲",
    changeAmount: 0,
    price: 120.22,
    priceChange: 3.2,
    priceChangePercentage: "12%",
    recommendation: "Hold",
    analystPriceTarget: "/images/lock.png",
    holdingValue: "Strong",
    holdingGain: -3.2,
  },
  {
    ticker: "AAPL",
    logo: "/images/appl.png",
    numberOfShares: 12,
    aiCatalyst: "/images/Ai.png",
    changeArrow: "▲",
    changeAmount: 0,
    price: 120.22,
    priceChange: 3.2,
    priceChangePercentage: "12%",
    recommendation: "Moderate Buy",
    analystPriceTarget: "/images/lock.png",
    holdingValue: "Strong",
    holdingGain: -3.2,
  },
  {
    ticker: "AAPL",
    logo: "/images/appl.png",
    numberOfShares: 12,
    aiCatalyst: "/images/Ai.png",
    changeArrow: "▲",
    changeAmount: 0,
    price: 120.22,
    priceChange: 3.2,
    priceChangePercentage: "12%",
    recommendation: "Moderate Buy",
    analystPriceTarget: "/images/lock.png",
    holdingValue: "Strong",
    holdingGain: 3.2,
  },
]

export default function PortfolioTable() {
  const [isMobile, setIsMobile] = useState(false)

  console.log(isMobile)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-8 sm:mt-16 lg:mt-[100px] mx-auto px-2 sm:px-4 md:container">
      <Tabs defaultValue="overview" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="gap-1 sm:gap-2 pl-2 sm:pl-6 my-2 sm:my-3 bg-transparent text-white whitespace-nowrap min-w-max">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex gap-1 sm:gap-3 items-center bg-[#BFBFBF] p-1 rounded-sm">
                <div className="">
                  <Image
                    src="/images/icon-2.png"
                    alt="icon-2"
                    width={18}
                    height={18}
                    className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                  />
                </div>
                <div className="flex gap-1 sm:gap-3">
                  <Image
                    src="/images/icon-3.png"
                    width={50}
                    height={50}
                    alt="icon-3"
                    className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                  />
                  <Image
                    src="/images/icon-4.png"
                    width={50}
                    height={50}
                    alt="icon-4"
                    className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                  />
                </div>
              </div>
            </div>
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="tipranks"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              TipRanks
            </TabsTrigger>
            <TabsTrigger
              value="holdings"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Holdings
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger
              value="dividends"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Dividends
            </TabsTrigger>
            <TabsTrigger
              value="earnings"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Earnings
            </TabsTrigger>
            <TabsTrigger
              value="technicals"
              className="data-[state=active]:bg-[#28A745] data-[state=active]:text-white bg-[#E0E0E0] px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Technicals
            </TabsTrigger>
          </TabsList>
        </div>
        {/* Overview table */}
        <TabsContent value="overview">
          {/* Mobile view for small screens */}
          <div className="lg:hidden">
            <div className="space-y-4 p-2 sm:p-4">
              {tableData.map((item, index) => (
                <div key={index} className="border rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex w-8 h-8 rounded-full bg-black justify-center items-center p-2">
                        <Image
                          src={item.logo || "/placeholder.svg"}
                          alt={item.ticker}
                          width={350}
                          height={200}
                          className="w-5 h-5 object-cover"
                        />
                      </div>
                      <div className="font-medium">{item.ticker}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoNotificationsOutline className="h-4 w-4" />
                      <Trash className="h-4 w-4 text-red-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Shares</span>
                      <div className="flex gap-1 items-center">
                        <IoWarningOutline className="text-[#FFD700]" />
                        <span>${item.numberOfShares}</span>
                        <FiEdit2 className="text-[#28A745]" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Price</span>
                      <span>${item.price}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Price Change</span>
                      <div className="flex items-center gap-1">
                        {item.priceChange > 0 ? (
                          <TiArrowSortedUp className="text-xl text-black" />
                        ) : (
                          <TiArrowSortedDown className="text-red-500 text-xl" />
                        )}
                        <span>
                          ${item.priceChange} ({((item.priceChange / item.price) * 100).toFixed(2)}%)
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Recommendation</span>
                      <span>{item.recommendation}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Holding Value</span>
                      <span>{item.holdingValue}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Holding Gain</span>
                      <div className="flex items-center gap-1">
                        {item.holdingGain < 0 ? (
                          <TiArrowSortedDown className="text-red-500 text-xl" />
                        ) : (
                          <TiArrowSortedUp className="text-xl text-[#28A745]" />
                        )}
                        <span>{item.holdingGain}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view for large screens */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-[1200px]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#EAF6EC] h-[70px]">
                    <TableHead className="w-[150px] text-center">Stock Name</TableHead>
                    <TableHead className="w-[100px] text-center">Number of Shares</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Price Change</TableHead>
                    <TableHead className="text-center">Ai Catalyst</TableHead>
                    <TableHead className="text-center">Ai Consensus</TableHead>
                    <TableHead className="text-center">Analyst Price Target</TableHead>
                    <TableHead className="text-center">Smart Score</TableHead>
                    <TableHead className="text-center">Holding Value</TableHead>
                    <TableHead className="text-center">Holding Gain</TableHead>
                    <TableHead className="text-center">Top Analyst Consensus</TableHead>
                    <TableHead className="text-center">Alerts</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-center">
                  {tableData.map((item, index) => (
                    <TableRow key={index} className="h-24">
                      <TableCell className="font-medium">
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2">
                            <div className="flex w-8 h-8 rounded-full bg-black justify-center items-center p-2">
                              <Image
                                src={item.logo || "/placeholder.svg"}
                                alt={item.ticker}
                                width={350}
                                height={200}
                                className="w-5 h-5 object-cover"
                              />
                            </div>
                            <div className="">
                              <span>{item.ticker}</span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div className="flex gap-1 text-center items-center">
                          <span>
                            <IoWarningOutline className="text-[#FFD700]" />
                          </span>
                          <span>${item.numberOfShares}</span>
                          <span>
                            <FiEdit2 className="text-[#28A745]" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>
                            {item.priceChange > 0 ? (
                              <TiArrowSortedUp className="text-2xl text-black" />
                            ) : (
                              <TiArrowSortedDown className="text-red-500 text-2xl" />
                            )}
                          </span>
                          <p className="flex flex-col">
                            <span>${item.priceChange}</span>
                            <span>({((item.priceChange / item.price) * 100).toFixed(2)}%)</span>
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Image
                            src={item.aiCatalyst || "/placeholder.svg"}
                            alt={item.ticker}
                            width={350}
                            height={200}
                            className="w-5 h-5 object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>{item.recommendation}</TableCell>
                      <TableCell>
                        <div className="relative w-9 h-9 mx-auto flex items-center justify-center">
                          {/* Green Glow */}
                          <div className="absolute w-full h-full bg-[#28A745] rounded-full blur-[6px]"></div>

                          {/* Lock Image (on top of glow) */}
                          <Image
                            src={item.analystPriceTarget || "/placeholder.svg"}
                            alt={item.ticker}
                            width={350}
                            height={200}
                            className="w-5 h-5 object-cover relative z-10"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative w-9 h-9 mx-auto flex items-center justify-center">
                          {/* Green Glow */}
                          <div className="absolute w-full h-full bg-[#28A745] rounded-full blur-[6px]"></div>

                          {/* Lock Image (on top of glow) */}
                          <Image
                            src={item.analystPriceTarget || "/placeholder.svg"}
                            alt={item.ticker}
                            width={350}
                            height={200}
                            className="w-5 h-5 object-cover relative z-10"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{item.holdingValue}</TableCell>
                      <TableCell className="">
                        <div className="flex items-center gap-2">
                          <span>
                            {item.holdingGain < 0 ? (
                              <TiArrowSortedDown className="text-red-500 text-2xl" />
                            ) : (
                              <TiArrowSortedUp className="text-2xl text-[#28A745]" />
                            )}
                          </span>
                          {item.holdingGain}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative w-9 h-9 mx-auto flex items-center justify-center">
                          {/* Green Glow */}
                          <div className="absolute w-full h-full bg-[#28A745] rounded-full blur-[6px]"></div>

                          {/* Lock Image (on top of glow) */}
                          <Image
                            src={item.analystPriceTarget || "/placeholder.svg"}
                            alt={item.ticker}
                            width={350}
                            height={200}
                            className="w-5 h-5 object-cover relative z-10"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <IoNotificationsOutline className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Trash className="h-4 w-4" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        ;
        <TabsContent value="tipranks">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Tipsranks Essential&apos;s data will appear there
          </h3>
        </TabsContent>
        ;
        <TabsContent value="holdings">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Holdings data will appear there
          </h3>
        </TabsContent>
        ;
        <TabsContent value="performance">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Performance data will appear there
          </h3>
        </TabsContent>
        ;
        <TabsContent value="dividends">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Dividends data will appear there
          </h3>
        </TabsContent>
        ;
        <TabsContent value="earnings">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Earnings data will appear there
          </h3>
        </TabsContent>
        ;
        <TabsContent value="technicals">
          <h3 className="text-center py-6 sm:py-10 text-xl sm:text-2xl font-semibold text-[#28A745]">
            Technicals data will appear there
          </h3>
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-end p-2 sm:p-4 overflow-x-auto">
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-max">
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-green-600 text-white text-xs sm:text-sm">
            1
          </button>
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 text-xs sm:text-sm">
            2
          </button>
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 text-xs sm:text-sm">
            3
          </button>
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 text-xs sm:text-sm">
            4
          </button>
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 text-xs sm:text-sm">
            5
          </button>
          <button className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 text-xs sm:text-sm">
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
