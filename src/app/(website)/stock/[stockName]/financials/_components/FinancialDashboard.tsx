"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import FilterButtons from "./FilterButtons";
import FinancialChart from "./chart/FinancialChart";

// Financial data for different time periods
const financialData = {
  annual: {
    earnings: [
      { year: "2019", revenue: 260, earnings: 55, profitMargin: 21.2 },
      { year: "2021", revenue: 270, earnings: 60, profitMargin: 22.2 },
      { year: "2022", revenue: 365, earnings: 90, profitMargin: 24.7 },
      { year: "2023", revenue: 380, earnings: 100, profitMargin: 26.3 },
      { year: "2024", revenue: 390, earnings: 95, profitMargin: 24.4 },
    ],
    debt: [
      {
        year: "2019",
        assets: 260,
        liabilities: 55,
        debtRatio: 21.2,
        revenue: 0,
      },
      {
        year: "2021",
        revenue: 365,
        liabilities: 80,
        debtRatio: 21.9,
        assets: 0,
      },
      {
        year: "2022",
        assets: 270,
        liabilities: 65,
        debtRatio: 24.1,
        revenue: 0,
      },
      {
        year: "2023",
        assets: 380,
        liabilities: 100,
        debtRatio: 26.3,
        revenue: 0,
      },
      {
        year: "2024",
        assets: 390,
        liabilities: 95,
        debtRatio: 24.4,
        revenue: 0,
      },
    ],
  },
  ttm: {
    earnings: [
      { year: "2019", revenue: 240, earnings: 50, profitMargin: 20.8 },
      { year: "2021", revenue: 260, earnings: 55, profitMargin: 21.2 },
      { year: "2022", revenue: 350, earnings: 85, profitMargin: 24.3 },
      { year: "2023", revenue: 370, earnings: 95, profitMargin: 25.7 },
      { year: "2024", revenue: 380, earnings: 90, profitMargin: 23.7 },
    ],
    debt: [
      {
        year: "2019",
        assets: 250,
        liabilities: 50,
        debtRatio: 20.0,
        revenue: 0,
      },
      {
        year: "2021",
        revenue: 355,
        liabilities: 75,
        debtRatio: 21.1,
        assets: 0,
      },
      {
        year: "2022",
        assets: 260,
        liabilities: 60,
        debtRatio: 23.1,
        revenue: 0,
      },
      {
        year: "2023",
        assets: 370,
        liabilities: 95,
        debtRatio: 25.7,
        revenue: 0,
      },
      {
        year: "2024",
        assets: 380,
        liabilities: 90,
        debtRatio: 23.7,
        revenue: 0,
      },
    ],
  },
  quarterly: {
    earnings: [
      { year: "Q1 2023", revenue: 90, earnings: 22, profitMargin: 24.4 },
      { year: "Q2 2023", revenue: 95, earnings: 25, profitMargin: 26.3 },
      { year: "Q3 2023", revenue: 97, earnings: 26, profitMargin: 26.8 },
      { year: "Q4 2023", revenue: 98, earnings: 25, profitMargin: 25.5 },
      { year: "Q1 2024", revenue: 100, earnings: 24, profitMargin: 24.0 },
    ],
    debt: [
      { year: "Q1 2023", assets: 90, liabilities: 22, debtRatio: 24.4 },
      { year: "Q2 2023", assets: 95, liabilities: 25, debtRatio: 26.3 },
      { year: "Q3 2023", assets: 97, liabilities: 26, debtRatio: 26.8 },
      { year: "Q4 2023", assets: 98, liabilities: 25, debtRatio: 25.5 },
      { year: "Q1 2024", assets: 100, liabilities: 24, debtRatio: 24.0 },
    ],
  },
};

export default function FinancialDashboard() {
  const [filter, setFilter] = useState<"annual" | "ttm" | "quarterly">(
    "annual"
  );

  return (
    <div className="space-y-6">
      <FilterButtons activeFilter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">
              Apple Earnings and Revenue History
            </h2>
            <div className="flex justify-between mb-2">
              <div className="text-sm font-medium">Earnings</div>
              <div className="text-sm font-medium">Profit Margin</div>
            </div>
            <FinancialChart
              data={financialData[filter].earnings}
              barKey1="revenue"
              barKey2="earnings"
              lineKey="profitMargin"
              barColor1="#22c55e"
              barColor2="#e5e7eb"
              lineColor="#ef4444"
              yAxisLabel="B"
              percentageAxis={true}
              legend={[
                { key: "revenue", label: "Revenue", color: "#22c55e" },
                { key: "earnings", label: "Earnings", color: "#e5e7eb" },
                {
                  key: "profitMargin",
                  label: "Profit Margin",
                  color: "#ef4444",
                },
              ]}
            />
            <div className="flex justify-end mt-4">
              <a href="#" className="text-blue-500 text-sm flex items-center">
                Income Statement <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Apple Debt to Assets</h2>
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium">Liabilities</div>
            <div className="text-sm font-medium">Debt of Assets</div>
          </div>
          <FinancialChart
            data={financialData[filter].debt}
            barKey1="assets"
            barKey2="liabilities"
            lineKey="debtRatio"
            barColor1="#3b82f6"
            barColor2="#93c5fd"
            lineColor="#ef4444"
            yAxisLabel="B"
            percentageAxis={true}
            legend={[
              { key: "assets", label: "Assets", color: "#3b82f6" },
              { key: "liabilities", label: "Liabilities", color: "#93c5fd" },
              { key: "debtRatio", label: "Debt of Assets", color: "#ef4444" },
            ]}
          />
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-500 text-sm flex items-center">
              Balance Sheet <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
