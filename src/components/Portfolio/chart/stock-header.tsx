"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { getStockInfo, stockData } from "@/lib/dummy-data"

// Color palette for comparison stocks only - must match the ones in stock-chart.tsx
const comparisonColors = {
    AAPL: "#f43f5e", // Red
    NVDA: "#10b981", // Green
    MSFT: "#3b82f6", // Blue
    GOOGL: "#f97316", // Orange
    AMZN: "#8b5cf6", // Purple
    TSLA: "#ec4899", // Pink
    META: "#facc15", // Yellow
}

// Primary green color for all main stocks
// const primaryGreen = "#1EAD00"

interface StockHeaderProps {
    selectedStock: string
    onStockChange: (symbol: string) => void
    timeframe: string
    onTimeframeChange: (timeframe: string) => void
    comparisonStocks: string[]
    onToggleComparison: (symbol: string) => void
    onClearComparisons: () => void
}

export default function StockHeader({
    selectedStock,
    // onStockChange,
    timeframe,
    onTimeframeChange,
    comparisonStocks,
    onToggleComparison,
    onClearComparisons,
}: StockHeaderProps) {
    const [stockInfo, setStockInfo] = useState({
        price: 0,
        change: 0,
        changePercent: 0,
    })

    // Update stock info when selected stock changes
    useEffect(() => {
        const info = getStockInfo(selectedStock)
        setStockInfo(info)
    }, [selectedStock])

    // const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     onStockChange(e.target.value.toUpperCase())
    // }

    // Get color for a comparison stockror   
    function getComparisonColor(symbol: string): string {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        return  (comparisonColors as any)[symbol] || "#f43f5e" // Default to red if not found
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                Studies <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Moving Average</DropdownMenuItem>
                            <DropdownMenuItem>Bollinger Bands</DropdownMenuItem>
                            <DropdownMenuItem>RSI</DropdownMenuItem>
                            <DropdownMenuItem>MACD</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={comparisonStocks.length > 0 ? "default" : "outline"} size="sm" className="gap-1">
                                {comparisonStocks.length > 0 ? "Comparing" : "+ Compare"} <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[200px]">
                            <DropdownMenuItem disabled className="text-xs font-semibold text-muted-foreground">
                                Select stocks to compare
                            </DropdownMenuItem>
                            {stockData.map(
                                (stock) =>
                                    stock.symbol !== selectedStock && (
                                        <DropdownMenuItem
                                            key={stock.symbol}
                                            className="flex items-center justify-between"
                                            onClick={() => onToggleComparison(stock.symbol)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-3 w-3 rounded-full"
                                                    style={{ backgroundColor: getComparisonColor(stock.symbol) }}
                                                ></div>
                                                <span>
                                                    {stock.symbol} - {stock.name}
                                                </span>
                                            </div>
                                            {comparisonStocks.includes(stock.symbol) && <Check className="h-4 w-4 text-green-500" />}
                                        </DropdownMenuItem>
                                    ),
                            )}
                            {comparisonStocks.length > 0 && (
                                <DropdownMenuItem className="border-t text-xs text-muted-foreground" onClick={onClearComparisons}>
                                    Clear all comparisons
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                <BarChart2 className="h-4 w-4" />
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Line Chart</DropdownMenuItem>
                            <DropdownMenuItem>Candlestick Chart</DropdownMenuItem>
                            <DropdownMenuItem>OHLC Chart</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                ID <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Indicators</DropdownMenuItem>
                            <DropdownMenuItem>Drawings</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>

                <Tabs value={timeframe} onValueChange={onTimeframeChange} className="h-9 pb-16 md:pb-0">
                    <TabsList className="grid grid-cols-6 md:grid-cols-8">
                        <TabsTrigger value="1D">1D</TabsTrigger>
                        <TabsTrigger value="5D">5D</TabsTrigger>
                        <TabsTrigger value="1M">1M</TabsTrigger>
                        <TabsTrigger value="3M">3M</TabsTrigger>
                        <TabsTrigger value="6M">6M</TabsTrigger>
                        <TabsTrigger value="YTD">YTD</TabsTrigger>
                        <TabsTrigger value="1Y">1Y</TabsTrigger>
                        <TabsTrigger value="5Y">5Y</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Maximize2 className="h-4 w-4" />
                    </Button>
                </div> */}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <div className="font-bold text-xl">{selectedStock}</div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                ${stockInfo.price.toFixed(2)} <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Price</DropdownMenuItem>
                            <DropdownMenuItem>Change</DropdownMenuItem>
                            <DropdownMenuItem>% Change</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                        Volume
                    </Button>
                </div>

                {comparisonStocks.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="text-sm text-muted-foreground">Comparing with:</div>
                        {comparisonStocks.map((stock) => (
                            <Badge key={stock} variant="outline" className="flex items-center gap-1">
                                <div className="h-2 w-2 rounded-full mr-1" style={{ backgroundColor: getComparisonColor(stock) }}></div>
                                {stock}
                                <X className="h-3 w-3 cursor-pointer ml-1" onClick={() => onToggleComparison(stock)} />
                            </Badge>
                        ))}
                        {comparisonStocks.length > 0 && (
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={onClearComparisons}>
                                Clear All
                            </Button>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">Choose Stocks:</div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                Popular Stocks <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Tech Stocks</DropdownMenuItem>
                            <DropdownMenuItem>Financial Stocks</DropdownMenuItem>
                            <DropdownMenuItem>Energy Stocks</DropdownMenuItem>
                            <DropdownMenuItem>Healthcare Stocks</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
