"use client"

import { useState } from "react"

export default function FinancialOverview() {
  const [activeTab, setActiveTab] = useState("Overview")

  // Mock financial data
  const financialData = {
    companyInfo: {
      name: "Apple",
      peRatio: 26.29,
      pbRatio: 34.7,
      dividendYield: 0.51,
      epsForecasted: 6.61,
      reportDate: "January 30, 2024",
    },
    incomeStatement: [
      { metric: "Total Revenue", value: "$391.04B" },
      { metric: "Gross Profit", value: "$391.04B" },
      { metric: "Operating Income", value: "$391.04B" },
      { metric: "EBITDA", value: "$391.04B" },
      { metric: "Net Income", value: "$391.04B" },
    ],
    balanceSheet: [
      { metric: "Cash & Short-Term Investments", value: "$391.04B" },
      { metric: "Total Assets", value: "$391.04B" },
      { metric: "Total Debt", value: "$391.04B" },
      { metric: "Net Debt", value: "$391.04B" },
      { metric: "Total Liabilities", value: "$391.04B" },
    ],
    cashFlow: [
      { metric: "Free Cash Flow", value: "$391.04B" },
      { metric: "Operating Cash Flow", value: "$391.04B" },
      { metric: "Investing Cash Flow", value: "$391.04B" },
      { metric: "Financing Cash Flow", value: "$391.04B" },
    ],
  }

  // Tabs configuration
  const tabs = ["Overview", "Income Statement", "Balance Sheet", "Cash Flow", "Ratios"]

  return (
    <div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                activeTab === tab ? "bg-green-500 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Company Info */}
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-bold">Apple Financial Overview</h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Apple has a P/E ratio of {financialData.companyInfo.peRatio}, P/B ratio of{" "}
            {financialData.companyInfo.pbRatio}, and it has a dividend yield of{" "}
            {financialData.companyInfo.dividendYield}%. Apple is scheduled to report earnings on{" "}
            {financialData.companyInfo.reportDate}. The estimated EPS forecast is $
            {financialData.companyInfo.epsForecasted} per share.
          </p>
        </div>

        {/* Table Content */}
        <div>
          {activeTab === "Overview" && (
            <>
              {/* Income Statement Section */}
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Income Statement</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/3 text-left p-3"></th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialData.incomeStatement.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Balance Sheet Section */}
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Balance Sheet</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {financialData.balanceSheet.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cash Flow Section */}
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Cash Flow</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {financialData.cashFlow.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "Income Statement" && (
            <>
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Income Statement</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/3 text-left p-3"></th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialData.incomeStatement.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "Balance Sheet" && (
            <>
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Balance Sheet</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/3 text-left p-3"></th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialData.balanceSheet.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "Cash Flow" && (
            <>
              <div className="bg-[#dff2e3] px-4 py-3 text-green-600 font-semibold">Cash Flow</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/3 text-left p-3"></th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                      <th className="w-1/6 text-right p-3">Mar 24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialData.cashFlow.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border-t border-b border-gray-200">{item.metric}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                        <td className="text-right p-3 border-t border-b border-gray-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "Ratios" && (
            <div className="p-4">
              <h3 className="text-lg font-medium">Ratios</h3>
              <p>P/E Ratio: {financialData.companyInfo.peRatio}</p>
              <p>P/B Ratio: {financialData.companyInfo.pbRatio}</p>
              <p>Dividend Yield: {financialData.companyInfo.dividendYield}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
