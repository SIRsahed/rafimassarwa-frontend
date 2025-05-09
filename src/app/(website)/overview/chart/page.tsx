"use client"

import StockPremiumBanner from '@/components/Portfolio/chart/chart-bottom'
import StockChart from '@/components/Portfolio/chart/stock-chart'
import StockHeader from '@/components/Portfolio/chart/stock-header'
import StockList from '@/components/Portfolio/chart/stock-list'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {

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



    const newsItems = [
        {
            id: 1,
            category: "Market News",
            title: "Could the Apple Watch Evolve...",
            time: "14h ago",
            hasImage: true,
        },
        {
            id: 2,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
        {
            id: 3,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
        {
            id: 4,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
    ]

    return (
        <main className="flex min-h-screen flex-col lg:p-4 md:p-6 lg:w-[80vw] w-[98vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-1">
                <div className="col-span-5">
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
                    <div className="mt-20">
                        <StockPremiumBanner />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="w-full px-4">
                        <h2 className="mb-6 text-2xl font-bold">Recent News</h2>
                        <div className="space-y-4">
                            {newsItems.map((item) => (
                                <div key={item.id} className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                    <Link href="#" className="block">
                                        <div className="flex">
                                            {item.hasImage && (
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        src="/images/over.png"
                                                        alt="Market chart"
                                                        width={150}
                                                        height={150}
                                                        className="h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 p-4">
                                                <p className="text-sm font-medium text-gray-600">{item.category}</p>
                                                <h3 className="mt-1 text-lg font-bold text-gray-900">{item.title}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{item.time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            <Link href={"/news"} className='flex justify-end items-center gap-2 text-[#2695FF]'>More News <ArrowRight className='h-5 w-5'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
