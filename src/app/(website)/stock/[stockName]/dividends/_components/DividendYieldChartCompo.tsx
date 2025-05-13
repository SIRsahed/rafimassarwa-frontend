"use client"
import React, { useEffect, useState } from "react";

interface DividendYieldData {
  year: string;
  upper: number;
  lower: number;
}
import DividendYieldChart from "./chart/DividendYieldChart";

const DividendYieldChartCompo = () => {
  const [chartData, setChartData] = useState<DividendYieldData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      try {
        // In a real app, replace this with your actual API call
        // const response = await fetch('/api/dividend-data')
        // const data = await response.json()

        // Simulating API response with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Sample data - replace with your API response
        const data = [
          { year: "2018", upper: 1.9, lower: 1.2 },
          { year: "2019", upper: 2.0, lower: 1.0 },
          { year: "2020", upper: 1.35, lower: 0.65 },
          { year: "2021", upper: 0.8, lower: 0.6 },
          { year: "2022", upper: 0.75, lower: 0.6 },
          { year: "2023", upper: 0.8, lower: 0.6 },
          { year: "2024", upper: 0.7, lower: 0.5 },
          { year: "2025", upper: 0.6, lower: 0.5 },
        ];

        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AAPL Dividend Yield Range</h1>
      <div className="w-full bg-white shadow-[0px_0px_8px_0px_#00000029]">
        <DividendYieldChart data={chartData} loading={loading} />
      </div>
      <div className="flex justify-end mt-2">
        <a href="#" className="text-blue-500 hover:underline text-sm">
          See AAPL Stats & Charts &gt;
        </a>
      </div>
    </main>
  );
};

export default DividendYieldChartCompo;
