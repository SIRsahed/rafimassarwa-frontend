"use client";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const PriceChart = () => {
  const [isActive, setIsActive] = useState("Day");

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 sm:text-[32px] text-xl">
          <span className="font-bold">$220.00</span>
          <span className="text-green-600 font-semibold">+12.03 (2.24%)</span>
        </div>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          View Full Chart <span className="ml-1">&rarr;</span>
        </a>
      </div>

      <div className="text-sm text-gray-500 mt-1">
        <span className="mr-2">221.22</span>
        <span className="text-red-600 font-semibold">▼ 1.22 (1.2%)</span>
        <span className="ml-2">
          After Hours · 17 March 7:02 pm EDT · Market Closed
        </span>
      </div>

      <div className=" mt-4 overflow-x-auto">
        <div className="flex gap-2 w-max min-w-full px-2">
          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "Day" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("Day")}
          >
            Day
          </button>

          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "Week" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("Week")}
          >
            Week
          </button>

          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "Month" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("Month")}
          >
            Month
          </button>

          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "Year" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("Year")}
          >
            Year
          </button>

          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "5 Year" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("5 Year")}
          >
            5 Year
          </button>

          <button
            className={`rounded-full px-5 w-[120px] border border-green-500 py-2 text-green-500 font-semibold ${
              isActive === "Max" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setIsActive("Max")}
          >
            Max
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Card>
          <CardContent>
            <ChartContainer 
            config={chartConfig}
            >
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                <Area
                  dataKey="desktop"
                  type="linear"
                  fill="green"
                  fillOpacity={0.3}
                  stroke="#139430"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PriceChart;
