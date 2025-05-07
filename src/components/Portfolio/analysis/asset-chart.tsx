"use client"

import * as React from "react"
import { Label, Pie, PieChart, Cell } from "recharts"
import { cn } from "@/lib/utils"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define proper types for our data items
type AssetItem = {
  class: string
  percentage: number
  color: string
}

type StockItem = {
  stock: string
  percentage: number
  color: string
}

type GeoItem = {
  region: string
  percentage: number
  color: string
}

// Data for Geo Allocation
const geoAllocationData: GeoItem[] = [
  { region: "Americas", percentage: 42.72, color: "#FF5733" },
  { region: "Europe", percentage: 25.91, color: "#28A745" },
  { region: "Greater China", percentage: 17.12, color: "#2695FF" },
  { region: "Rest of Asia Pacific", percentage: 7.84, color: "#FFD700" },
  { region: "Japan", percentage: 6.41, color: "#0D3459" },
]

// Data for Top Stocks
const topStocksData: StockItem[] = [
  { stock: "AAPL", percentage: 35.45, color: "#FF5733" },
  { stock: "MSFT", percentage: 28.32, color: "#28A745" },
  { stock: "AMZN", percentage: 15.67, color: "#2695FF" },
  { stock: "GOOGL", percentage: 12.89, color: "#FFD700" },
  { stock: "META", percentage: 7.67, color: "#0D3459" },
]

// Asset Classes data
const assetClassesData: AssetItem[] = [
  { class: "Stocks", percentage: 65.32, color: "#FF5733" },
  { class: "Bonds", percentage: 20.45, color: "#28A745" },
  { class: "Cash", percentage: 8.12, color: "#2695FF" },
  { class: "Real Estate", percentage: 4.23, color: "#FFD700" },
  { class: "Commodities", percentage: 1.88, color: "#0D3459" },
]

type TabType = "assets" | "stocks" | "geo"

export function AssetAllocation() {
  const [activeTab, setActiveTab] = React.useState<TabType>("assets")

  // Get the appropriate data and nameKey based on active tab
  const getChartConfig = () => {
    switch (activeTab) {
      case "assets":
        return {
          data: assetClassesData,
          label: "My Assets",
          nameKey: "class",
        }
      case "stocks":
        return {
          data: topStocksData,
          label: "My Top Stocks",
          nameKey: "stock",
        }
      case "geo":
        return {
          data: geoAllocationData,
          label: "My Geo Allocation",
          nameKey: "region",
        }
      default:
        return {
          data: assetClassesData,
          label: "My Assets",
          nameKey: "class",
        }
    }
  }

  const { data, label, nameKey } = getChartConfig()

  // Function to safely get the display name for the legend
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getDisplayName = (item: any, key: string) => {
    if (key === "class" && "class" in item) {
      return item.class
    } else if (key === "stock" && "stock" in item) {
      return item.stock
    } else if (key === "region" && "region" in item) {
      return item.region
    }
    return "Unknown"
  }

  return (
    <Card className="w-full mx-auto overflow-hidden shadow-[0px_0px_10px_1px_#0000001A]">
      <div className="relative">
        <div
          className="absolute top-0 left-0 h-2 bg-green-500 w-1/3"
          style={{
            transform:
              activeTab === "assets"
                ? "translateX(0)"
                : activeTab === "stocks"
                  ? "translateX(100%)"
                  : "translateX(200%)",
            transition: "transform 0.3s ease",
          }}
        ></div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabType)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto rounded-none bg-transparent">
            <TabsTrigger
              value="assets"
              className={cn(
                "py-4 px-2 text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-0",
                "data-[state=active]:text-black data-[state=active]:font-semibold text-gray-500",
              )}
            >
              My Assets
            </TabsTrigger>
            <TabsTrigger
              value="stocks"
              className={cn(
                "py-4 px-2 text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-0",
                "data-[state=active]:text-black data-[state=active]:font-semibold text-gray-500",
              )}
            >
              My Top Stocks
            </TabsTrigger>
            <TabsTrigger
              value="geo"
              className={cn(
                "py-4 px-2 text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-0",
                "data-[state=active]:text-black data-[state=active]:font-semibold text-gray-500",
              )}
            >
              My Geo Allocation
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Chart */}
          <div className="w-full md:w-1/2">
            <ChartContainer
              config={{
                percentage: {
                  label: "Percentage",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="mx-auto aspect-square max-h-[250px] w-full"
            >
              <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={data}
                  dataKey="percentage"
                  nameKey={nameKey}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={95}
                  paddingAngle={2}
                  strokeWidth={2}
                  stroke="#fff"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <Label value={label} position="center" className="text-base font-medium fill-black" />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>

          {/* Legend */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-3">
              {data.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                  <span className="text-black">
                    {item.percentage.toFixed(2)}% {getDisplayName(item, nameKey)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
