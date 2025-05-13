"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function DividendChart() {
  // Dividend data from May 2022 to May 2024
  const dividendData = [
    { month: "May 2022", dividend: 0.25, isLatest: false },
    { month: "Aug 2022", dividend: 0.25, isLatest: false },
    { month: "Nov 2022", dividend: 0.25, isLatest: false },
    { month: "Feb 2023", dividend: 0.25, isLatest: false },
    { month: "May 2023", dividend: 0.26, isLatest: false },
    { month: "Aug 2023", dividend: 0.26, isLatest: false },
    { month: "Nov 2023", dividend: 0.26, isLatest: false },
    { month: "Feb 2024", dividend: 0.26, isLatest: false },
    { month: "May 2024", dividend: 0.27, isLatest: true },
  ];

  return (
    <Card>
      <CardHeader className="p-0">
        <CardTitle className="text-lg font-medium mb-4">
          Dividend Amount Per Share
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 shadow-[0px_0px_8px_0px_#00000029]">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dividendData}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value.toFixed(2)}`}
                domain={[0, 0.3]}
                ticks={[0, 0.1, 0.2, 0.3]}
                tick={{ fontSize: 12 }}
              />
              <Bar
                dataKey={(data) => (data.isLatest ? 0 : data.dividend)}
                radius={[2, 2, 0, 0]}
                barSize={30}
                fill="#2CB14A"
                fillOpacity={1}
                isAnimationActive={true}
                animationDuration={1000}
              />
              <Bar
                dataKey={(data) => (data.isLatest ? data.dividend : 0)}
                radius={[2, 2, 0, 0]}
                barSize={30}
                fill="#5A5A5A"
                fillOpacity={1}
                isAnimationActive={true}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <div className="flex justify-end mt-4">
        <Link
          href="/dividend-calendar"
          className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
        >
          Daily Dividend Calendar <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </Card>
  );
}
