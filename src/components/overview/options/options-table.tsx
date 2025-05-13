"use client"

import { useState, useMemo } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

// Types for our options data
type OptionData = {
    strike: number
    last_price: number
    change_percent: number
    volume: number
    oi: number | null
    last_trade: string
    delta: number
}

type OptionsChainData = {
    call_data: OptionData[]
    put_data: OptionData[]
}

// Initial data
const initialData: OptionsChainData = {
    call_data: [
        {
            strike: 118.0,
            last_price: 6.68,
            change_percent: 105.54,
            volume: 6406,
            oi: 8384,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.8,
        },
        {
            strike: 119.0,
            last_price: 5.93,
            change_percent: 111.79,
            volume: 2648,
            oi: 5635,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.75,
        },
        {
            strike: 120.0,
            last_price: 5.3,
            change_percent: 120.83,
            volume: 30706,
            oi: 30111,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.7,
        },
        {
            strike: 121.0,
            last_price: 4.6,
            change_percent: 124.39,
            volume: 9428,
            oi: 4604,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.65,
        },
        {
            strike: 122.0,
            last_price: 4.05,
            change_percent: 131.43,
            volume: 17829,
            oi: 5401,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.6,
        },
        {
            strike: 123.0,
            last_price: 3.53,
            change_percent: 141.78,
            volume: 23365,
            oi: 4291,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.55,
        },
        {
            strike: 124.0,
            last_price: 3.03,
            change_percent: 144.35,
            volume: 26459,
            oi: 3599,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.5,
        },
        {
            strike: 125.0,
            last_price: 2.58,
            change_percent: 150.49,
            volume: 38161,
            oi: 16365,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.45,
        },
        {
            strike: 126.0,
            last_price: 2.19,
            change_percent: 148.86,
            volume: 6513,
            oi: 3438,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.4,
        },
        {
            strike: 127.0,
            last_price: 1.85,
            change_percent: 160.56,
            volume: 8850,
            oi: 4213,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.35,
        },
        {
            strike: 128.0,
            last_price: 1.54,
            change_percent: 1.99,
            volume: 5435,
            oi: null,
            last_trade: "05/13/25 01:59 AM",
            delta: 0.3,
        },
    ],
    put_data: [
        {
            strike: 118.0,
            last_price: 1.52,
            change_percent: -65.45,
            volume: 4469,
            oi: 10899,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.2,
        },
        {
            strike: 119.0,
            last_price: 1.8,
            change_percent: -63.78,
            volume: 4047,
            oi: 477,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.25,
        },
        {
            strike: 120.0,
            last_price: 2.11,
            change_percent: -62.52,
            volume: 21314,
            oi: 10898,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.3,
        },
        {
            strike: 121.0,
            last_price: 2.5,
            change_percent: -59.81,
            volume: 9232,
            oi: 554,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.35,
        },
        {
            strike: 122.0,
            last_price: 2.9,
            change_percent: -57.79,
            volume: 7537,
            oi: 501,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.4,
        },
        {
            strike: 123.0,
            last_price: 3.35,
            change_percent: -55.63,
            volume: 4338,
            oi: 541,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.45,
        },
        {
            strike: 124.0,
            last_price: 3.88,
            change_percent: -54.35,
            volume: 2294,
            oi: 94,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.5,
        },
        {
            strike: 125.0,
            last_price: 4.4,
            change_percent: -52.28,
            volume: 1497,
            oi: 467,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.55,
        },
        {
            strike: 126.0,
            last_price: 5.05,
            change_percent: -50.25,
            volume: 326,
            oi: 31,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.6,
        },
        {
            strike: 127.0,
            last_price: 5.75,
            change_percent: -47.0,
            volume: 292,
            oi: 48,
            last_trade: "05/13/25 01:54 AM",
            delta: -0.65,
        },
        {
            strike: 128.0,
            last_price: 6.45,
            change_percent: -11.03,
            volume: 279,
            oi: null,
            last_trade: "05/13/25 01:59 AM",
            delta: -0.7,
        },
    ],
}

// Mock data for different expiration dates
const mockDataByExpiration: Record<string, OptionsChainData> = {
    "05/23/25 (w)": initialData,
    "05/30/25 (w)": {
        call_data: initialData.call_data.map((item) => ({
            ...item,
            last_price: +(item.last_price * 1.05).toFixed(2),
            change_percent: +(item.change_percent * 0.9).toFixed(2),
            volume: Math.floor(item.volume * 0.8),
            last_trade: "05/13/25 02:15 AM",
        })),
        put_data: initialData.put_data.map((item) => ({
            ...item,
            last_price: +(item.last_price * 0.95).toFixed(2),
            change_percent: +(item.change_percent * 1.1).toFixed(2),
            volume: Math.floor(item.volume * 1.2),
            last_trade: "05/13/25 02:15 AM",
        })),
    },
    "06/06/25 (w)": {
        call_data: initialData.call_data.map((item) => ({
            ...item,
            last_price: +(item.last_price * 1.15).toFixed(2),
            change_percent: +(item.change_percent * 0.8).toFixed(2),
            volume: Math.floor(item.volume * 0.7),
            last_trade: "05/13/25 02:30 AM",
        })),
        put_data: initialData.put_data.map((item) => ({
            ...item,
            last_price: +(item.last_price * 0.85).toFixed(2),
            change_percent: +(item.change_percent * 1.2).toFixed(2),
            volume: Math.floor(item.volume * 1.3),
            last_trade: "05/13/25 02:30 AM",
        })),
    },
}

export default function OptionsChainTable() {
    // State for filters and view options
    const [expirationDate, setExpirationDate] = useState<string>("05/23/25 (w)")
    const [strikesFilter, setStrikesFilter] = useState<string>("5 Strikes +/-")
    const [tableView, setTableView] = useState<string>("Side by Side")

    // Get the current data based on expiration date
    const currentData = mockDataByExpiration[expirationDate] || initialData

    // Filter strikes based on the selected filter
    const filteredData = useMemo(() => {
        const centerIndex = Math.floor(currentData.call_data.length / 2)
        const centerStrike = currentData.call_data[centerIndex].strike

        let numStrikes = 5
        if (strikesFilter === "3 Strikes +/-") numStrikes = 3
        else if (strikesFilter === "10 Strikes +/-") numStrikes = 10
        else if (strikesFilter === "All Strikes") return currentData

        return {
            call_data: currentData.call_data.filter((item) => Math.abs(item.strike - centerStrike) <= numStrikes),
            put_data: currentData.put_data.filter((item) => Math.abs(item.strike - centerStrike) <= numStrikes),
        }
    }, [currentData, strikesFilter])

    // Format date for display
    const formatDate = (dateStr: string) => {
        const [date, time] = dateStr.split(" ")
        const [month, day, year] = date.split("/")
        return `${month}/${day}, ${time}`
    }

    return (
        <div className="w-full border border-gray-200 rounded-md overflow-hidden">
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row justify-between p-4 gap-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Expiration Date</span>
                        <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Select value={expirationDate} onValueChange={setExpirationDate}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select expiration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="05/23/25 (w)">05/23/25 (w)</SelectItem>
                            <SelectItem value="05/30/25 (w)">05/30/25 (w)</SelectItem>
                            <SelectItem value="06/06/25 (w)">06/06/25 (w)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Strikes</span>
                        <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Select value={strikesFilter} onValueChange={setStrikesFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select strikes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="3 Strikes +/-">3 Strikes +/-</SelectItem>
                            <SelectItem value="5 Strikes +/-">5 Strikes +/-</SelectItem>
                            <SelectItem value="10 Strikes +/-">10 Strikes +/-</SelectItem>
                            <SelectItem value="All Strikes">All Strikes</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Table View</span>
                        <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Select value={tableView} onValueChange={setTableView}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select view" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Side by Side">Side by Side</SelectItem>
                            <SelectItem value="Stacked">Stacked</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* In the Money indicator */}
            <div className="flex justify-end p-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">In the Money</div>
            </div>

            {/* Options Chain Table */}
            {tableView === "Side by Side" ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th colSpan={5} className="text-center py-3 font-semibold">
                                    Apple (AAPL) Option Calls
                                </th>
                                <th colSpan={1} className="text-center py-3 font-semibold">
                                    {expirationDate.replace(" (w)", "")}
                                </th>
                                <th colSpan={5} className="text-center py-3 font-semibold">
                                    Apple (AAPL) Option Puts
                                </th>
                            </tr>
                            <tr className="border-b border-gray-200 text-sm">
                                <th className="py-2 px-3 text-left font-medium">Last Price</th>
                                <th className="py-2 px-3 text-left font-medium">%Change</th>
                                <th className="py-2 px-3 text-left font-medium">Volume</th>
                                <th className="py-2 px-3 text-left font-medium">OI</th>
                                <th className="py-2 px-3 text-left font-medium">Last Trade</th>
                                <th className="py-2 px-3 text-center font-medium bg-gray-100">Strike</th>
                                <th className="py-2 px-3 text-left font-medium">Last Price</th>
                                <th className="py-2 px-3 text-left font-medium">%Change</th>
                                <th className="py-2 px-3 text-left font-medium">Volume</th>
                                <th className="py-2 px-3 text-left font-medium">OI</th>
                                <th className="py-2 px-3 text-left font-medium">Last Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.call_data.map((call, index) => {
                                const put = filteredData.put_data.find((p) => p.strike === call.strike) || filteredData.put_data[index]
                                const isEvenRow = index % 2 === 0

                                return (
                                    <tr key={index} className={cn("border-b border-gray-200", isEvenRow ? "bg-gray-50" : "bg-white")}>
                                        {/* Call data */}
                                        <td className="py-3 px-3 text-sm">${call.last_price.toFixed(2)}</td>
                                        <td
                                            className={cn("py-3 px-3 text-sm", call.change_percent > 0 ? "text-green-600" : "text-red-600")}
                                        >
                                            {call.change_percent > 0 ? "+" : ""}
                                            {call.change_percent.toFixed(2)}%
                                        </td>
                                        <td className="py-3 px-3 text-sm">{call.volume.toLocaleString()}</td>
                                        <td className="py-3 px-3 text-sm">{call.oi?.toLocaleString() || "-"}</td>
                                        <td className="py-3 px-3 text-sm">{formatDate(call.last_trade)}</td>

                                        {/* Strike price */}
                                        <td className="py-3 px-3 text-sm font-medium text-center bg-gray-100">{call.strike.toFixed(1)}</td>

                                        {/* Put data */}
                                        <td className="py-3 px-3 text-sm">${put.last_price.toFixed(2)}</td>
                                        <td className={cn("py-3 px-3 text-sm", put.change_percent > 0 ? "text-green-600" : "text-red-600")}>
                                            {put.change_percent > 0 ? "+" : ""}
                                            {put.change_percent.toFixed(2)}%
                                        </td>
                                        <td className="py-3 px-3 text-sm">{put.volume.toLocaleString()}</td>
                                        <td className="py-3 px-3 text-sm">{put.oi?.toLocaleString() || "-"}</td>
                                        <td className="py-3 px-3 text-sm">{formatDate(put.last_trade)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Stacked view
                <div className="overflow-x-auto">
                    {/* Calls Table */}
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th colSpan={6} className="text-center py-3 font-semibold">
                                    Apple (AAPL) Option Calls - {expirationDate.replace(" (w)", "")}
                                </th>
                            </tr>
                            <tr className="border-b border-gray-200 text-sm">
                                <th className="py-2 px-3 text-center font-medium bg-gray-100">Strike</th>
                                <th className="py-2 px-3 text-left font-medium">Strike Δ</th>
                                <th className="py-2 px-3 text-left font-medium">Last Price</th>
                                <th className="py-2 px-3 text-left font-medium">%Change</th>
                                <th className="py-2 px-3 text-left font-medium">Volume</th>
                                <th className="py-2 px-3 text-left font-medium">OI</th>
                                <th className="py-2 px-3 text-left font-medium">Last Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.call_data.map((call, index) => (
                                <tr key={`call-${index}`} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="py-3 px-3 text-sm font-medium text-center bg-gray-100">{call.strike.toFixed(1)}</td>
                                    <td className="py-3 px-3 text-sm">{call.delta.toFixed(2)}</td>
                                    <td className="py-3 px-3 text-sm">${call.last_price.toFixed(2)}</td>
                                    <td className={cn("py-3 px-3 text-sm", call.change_percent > 0 ? "text-green-600" : "text-red-600")}>
                                        {call.change_percent > 0 ? "+" : ""}
                                        {call.change_percent.toFixed(2)}%
                                    </td>
                                    <td className="py-3 px-3 text-sm">{call.volume.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-sm">{call.oi?.toLocaleString() || "-"}</td>
                                    <td className="py-3 px-3 text-sm">{formatDate(call.last_trade)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Puts Table */}
                    <table className="w-full border-collapse mt-6">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th colSpan={6} className="text-center py-3 font-semibold">
                                    Apple (AAPL) Option Puts - {expirationDate.replace(" (w)", "")}
                                </th>
                            </tr>
                            <tr className="border-b border-gray-200 text-sm">
                                <th className="py-2 px-3 text-center font-medium bg-gray-100">Strike</th>
                                <th className="py-2 px-3 text-left font-medium">Strike Δ</th>
                                <th className="py-2 px-3 text-left font-medium">Last Price</th>
                                <th className="py-2 px-3 text-left font-medium">%Change</th>
                                <th className="py-2 px-3 text-left font-medium">Volume</th>
                                <th className="py-2 px-3 text-left font-medium">OI</th>
                                <th className="py-2 px-3 text-left font-medium">Last Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.put_data.map((put, index) => (
                                <tr key={`put-${index}`} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="py-3 px-3 text-sm font-medium text-center bg-gray-100">{put.strike.toFixed(1)}</td>
                                    <td className="py-3 px-3 text-sm">{put.delta.toFixed(2)}</td>
                                    <td className="py-3 px-3 text-sm">${put.last_price.toFixed(2)}</td>
                                    <td className={cn("py-3 px-3 text-sm", put.change_percent > 0 ? "text-green-600" : "text-red-600")}>
                                        {put.change_percent > 0 ? "+" : ""}
                                        {put.change_percent.toFixed(2)}%
                                    </td>
                                    <td className="py-3 px-3 text-sm">{put.volume.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-sm">{put.oi?.toLocaleString() || "-"}</td>
                                    <td className="py-3 px-3 text-sm">{formatDate(put.last_trade)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
