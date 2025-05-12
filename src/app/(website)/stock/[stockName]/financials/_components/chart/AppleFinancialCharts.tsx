"use client"

import { ChartContainer } from "@/components/ui/chart"

import { Line, LineChart, Scatter, ScatterChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function AppleFinancialCharts() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Cash Flow Chart */}
        <div className="border rounded-lg p-3 md:p-4 shadow-sm bg-white">
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Apple Cash Flow</h2>
          <div className="h-[250px] md:h-[300px]">
            <CashFlowChart isMobile={isMobile} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 md:mt-4 gap-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-gray-600">Operating</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-gray-600">Investing</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs text-gray-600">Financing</span>
              </div>
            </div>
            <a href="#" className="text-xs text-blue-500 flex items-center hover:underline">
              Cash Flow <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        {/* EPS Chart */}
        <div className="border rounded-lg p-3 md:p-4 shadow-sm bg-white">
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Apple Forecast EPS vs Actual EPS</h2>
          <div className="h-[250px] md:h-[300px]">
            <EPSChart isMobile={isMobile} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 md:mt-4 gap-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-gray-600">Estimate</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-gray-600">Beat</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs text-gray-600">Miss</span>
              </div>
            </div>
            <a href="#" className="text-xs text-blue-500 flex items-center hover:underline">
              Earnings <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function CashFlowChart({ isMobile }: { isMobile: boolean }) {
  const cashFlowData = [
    { year: "2019", operating: 60, investing: -30, financing: -120 },
    { year: "2020", operating: 70, investing: -20, financing: -100 },
    { year: "2021", operating: 75, investing: -5, financing: -90 },
    { year: "2022", operating: 65, investing: -10, financing: -95 },
    { year: "2023", operating: 75, investing: 5, financing: -85 },
    { year: "2024", operating: 70, investing: 25, financing: -80 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer
        config={{
          operating: {
            label: "Operating",
            color: "#10b981",
          },
          investing: {
            label: "Investing",
            color: "#3b82f6",
          },
          financing: {
            label: "Financing",
            color: "#ef4444",
          },
        }}
      >
        <LineChart
          data={cashFlowData}
          margin={{ top: 10, right: isMobile ? 5 : 10, left: isMobile ? 0 : 10, bottom: 5 }}
        >
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            stroke="#e5e7eb"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            interval={isMobile ? 1 : 0}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={isMobile ? 5 : 10}
            stroke="#e5e7eb"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            tickFormatter={(value) => {
              if (value === 0) return "0"
              if (value === 150) return isMobile ? "150B" : "150B"
              if (value === 100) return isMobile ? "100B" : "100B"
              if (value === 50) return isMobile ? "50B" : "50B"
              if (value === -50) return isMobile ? "-50B" : "-50B"
              if (value === -100) return isMobile ? "-100B" : "-100B"
              if (value === -150) return isMobile ? "-150B" : "-150B"
              return `${value}B`
            }}
            domain={[-150, 150]}
            ticks={[-150, -100, -50, 0, 50, 100, 150]}
            width={isMobile ? 35 : 45}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="operating"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: isMobile ? 3 : 4, strokeWidth: 2, fill: "white" }}
            activeDot={{ r: isMobile ? 5 : 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="investing"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: isMobile ? 3 : 4, strokeWidth: 2, fill: "white" }}
            activeDot={{ r: isMobile ? 5 : 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="financing"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: isMobile ? 3 : 4, strokeWidth: 2, fill: "white" }}
            activeDot={{ r: isMobile ? 5 : 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}

function EPSChart({ isMobile }: { isMobile: boolean }) {
  // Adjust data to match the Figma design more closely
  const adjustedEpsData = [
    { quarter: "Q4'19", x: 0, y: 0.85, z: isMobile ? 80 : 100, category: "estimate" },
    { quarter: "Q3'19", x: 1, y: 0.95, z: isMobile ? 100 : 120, category: "beat" },
    { quarter: "Q2'19", x: 2, y: 1.07, z: isMobile ? 110 : 130, category: "miss" },
    { quarter: "Q1'19", x: 3, y: 0.88, z: isMobile ? 90 : 110, category: "miss" },
    { quarter: "Q2'23", x: 4, y: 1.05, z: isMobile ? 105 : 125, category: "estimate" },
    { quarter: "Q1'24", x: 5, y: 0.92, z: isMobile ? 95 : 115, category: "beat" },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer
        config={{
          estimate: {
            label: "Estimate",
            color: "#10b981",
          },
          beat: {
            label: "Beat",
            color: "#3b82f6",
          },
          miss: {
            label: "Miss",
            color: "#ef4444",
          },
        }}
      >
        <ScatterChart margin={{ top: 20, right: isMobile ? 5 : 20, bottom: 20, left: isMobile ? 0 : 20 }}>
          <XAxis
            type="category"
            dataKey="quarter"
            name="Quarter"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            stroke="#e5e7eb"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            interval={isMobile ? 1 : 0}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="EPS"
            domain={[0.6, 1.2]}
            tickCount={isMobile ? 5 : 7}
            tickLine={false}
            axisLine={false}
            tickMargin={isMobile ? 5 : 10}
            stroke="#e5e7eb"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            width={isMobile ? 35 : 45}
          />
          <ChartTooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={
              <ChartTooltipContent
                formatter={(value, name) => {
                  if (name === "y") return [`${value}`, "EPS"]
                  return [value, name]
                }}
              />
            }
          />
          <Scatter name="EPS Values" data={adjustedEpsData}>
            {adjustedEpsData.map((entry, index) => {
              let fillColor = "#ef4444" // miss
              if (entry.category === "estimate") fillColor = "#10b981" // estimate
              if (entry.category === "beat") fillColor = "#3b82f6" // beat

              return (
                <circle
                  key={`circle-${index}`}
                  cx={0}
                  cy={0}
                  r={entry.z / 10}
                  fill={fillColor}
                  fillOpacity={0.3}
                  stroke={fillColor}
                />
              )
            })}
          </Scatter>
        </ScatterChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
