"use client"

import { useState } from "react"
import StockChart from "./stock-chart"
import StockHeader from "./stock-header"
import StockList from "./stock-list"

export default function Home() {
    const [selectedStock, setSelectedStock] = useState("AAPL")
    const [timeframe, setTimeframe] = useState("1Y") // Changed default from 1M to 1Y
    const [comparisonStocks, setComparisonStocks] = useState<string[]>([])

    // Function to handle adding/removing comparison stocks
    const toggleComparisonStock = (symbol: string) => {
        if (symbol === selectedStock) return // Can't compare with itself

        setComparisonStocks((prev) => {
            // If already in comparison, remove it
            if (prev.includes(symbol)) {
                return prev.filter((s) => s !== symbol)
            }
            // Otherwise add it (limit to 3 comparison stocks)
            else if (prev.length < 3) {
                return [...prev, symbol]
            }
            return prev
        })
    }

    // Function to clear all comparison stocks
    const clearComparisons = () => {
        setComparisonStocks([])
    }

    return (
        <main className="flex min-h-screen flex-col p-4 md:p-6 lg:w-[80vw]">
            <StockHeader
                selectedStock={selectedStock}
                onStockChange={setSelectedStock}
                timeframe={timeframe}
                onTimeframeChange={setTimeframe}
                comparisonStocks={comparisonStocks}
                onToggleComparison={toggleComparisonStock}
                onClearComparisons={clearComparisons}
            />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="lg:col-span-3">
                    <StockChart selectedStock={selectedStock} timeframe={timeframe} comparisonStocks={comparisonStocks} />
                </div>
                <div className="lg:col-span-1">
                    <StockList selectedStock={selectedStock} onSelectStock={setSelectedStock} />
                </div>
            </div>
        </main>
    )
}
