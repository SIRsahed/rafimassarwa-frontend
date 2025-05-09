"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { stockData } from "@/lib/dummy-data"

interface StockListProps {
    onSelectStock: (symbol: string) => void
    selectedStock: string
}

export default function StockList({ onSelectStock, selectedStock }: StockListProps) {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">Popular Stocks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[350px]">
                    <div className="space-y-1 p-4 pt-0">
                        {stockData.map((stock) => (
                            <div
                                key={stock.symbol}
                                className={`flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-muted ${selectedStock === stock.symbol ? "bg-muted" : ""
                                    }`}
                                onClick={() => onSelectStock(stock.symbol)}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100 text-xs text-blue-600">
                                        {stock.symbol.substring(0, 1)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">{stock.symbol}</div>
                                        <div className="text-xs text-muted-foreground">{stock.name}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium">${stock.price.toFixed(2)}</div>
                                    <div className={`text-xs ${stock.change >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                                        {stock.change >= 0 ? "+" : ""}
                                        {stock.change.toFixed(2)} ({stock.change >= 0 ? "+" : ""}
                                        {stock.changePercent.toFixed(2)}%)
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
