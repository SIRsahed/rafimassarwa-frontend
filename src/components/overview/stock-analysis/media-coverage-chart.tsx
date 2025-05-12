"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import * as echarts from "echarts"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

// Define stock types
interface Stock {
    id: string
    name: string
    color: string
    visible: boolean
}

// Define data point structure
interface DataPoint {
    date: string
    [key: string]: number | string
}

// Define time period
type TimePeriod = "3m" | "6m" | "1y" | "YTD" | "3y" | "5y"

export default function PerformanceCoverage() {
    const chartRef = useRef<HTMLDivElement>(null)
    const chartInstance = useRef<echarts.ECharts | null>(null)
    const { theme } = useTheme()
    const [isClient, setIsClient] = useState(false)

    // Available stocks
    const [stocks, setStocks] = useState<Stock[]>([
        { id: "AAPL", name: "Apple", color: "#2695FF", visible: true },
        { id: "AMZN", name: "Amazon", color: "#28A745", visible: true },
        { id: "GOOGL", name: "Alphabet Class A", color: "#0E3A18", visible: true },
        { id: "INTC", name: "Intel", color: "#FFD700", visible: true },
        { id: "MSFT", name: "Microsoft", color: "#ff5733", visible: true },
        { id: "NVDA", name: "Nvidia", color: "#594B00", visible: true },
    ])

    // State for selected time period
    const [period, setPeriod] = useState<TimePeriod>("1y")

    // State for data
    const [data, setData] = useState<DataPoint[]>([])

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const [stockTableData, setStockTableData] = useState<any[]>([])

    // Generate dummy data based on selected time period
    const generateData = useCallback((period: TimePeriod): DataPoint[] => {
        const data: DataPoint[] = []
        let days: number

        switch (period) {
            case "3m":
                days = 90
                break
            case "6m":
                days = 180
                break
            case "1y":
                days = 365
                break
            case "YTD":
                const now = new Date()
                const startOfYear = new Date(now.getFullYear(), 0, 1)
                days = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
                break
            case "3y":
                days = 365 * 3
                break
            case "5y":
                days = 365 * 5
                break
            default:
                days = 365
        }

        // Use a fixed seed for random number generation to ensure consistency
        const seedrandom = (seed: number) => {
            return () => {
                seed = (seed * 9301 + 49297) % 233280
                return seed / 233280
            }
        }

        // Generate data points
        const endDate = new Date()
        const random = seedrandom(period === "1y" ? 12345 : 67890)

        // Increase the number of data points for smoother lines
        const numPoints = Math.min(days, 100) // Cap at 100 points for performance
        const step = days / numPoints

        for (let i = 0; i <= numPoints; i++) {
            const dayOffset = Math.floor(i * step)
            const date = new Date(endDate)
            date.setDate(date.getDate() - (days - dayOffset))

            const dataPoint: DataPoint = {
                date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "2-digit" }),
            }

            // Generate deterministic performance values for each stock
            stocks.forEach((stock) => {
                // Base value is between -50 and 50
                let baseValue: number

                switch (stock.id) {
                    case "AAPL":
                        baseValue = 25 + random() * 20
                        break // AAPL performs well
                    case "NVDA":
                        baseValue = 30 + random() * 20
                        break // NVDA performs well
                    case "GOOGL":
                        baseValue = 15 + random() * 15
                        break // GOOGL moderate positive
                    case "AMZN":
                        baseValue = 20 + random() * 15
                        break // AMZN good performance
                    case "MSFT":
                        baseValue = 5 + random() * 10
                        break // MSFT slight positive
                    case "INTC":
                        baseValue = -30 + random() * 30
                        break // INTC struggles
                    default:
                        baseValue = random() * 30
                }

                // Add some volatility based on the day, but limit extreme changes
                const volatility = Math.sin(dayOffset / 20) * 5 // Reduced volatility
                dataPoint[stock.id] = Number.parseFloat((baseValue + volatility).toFixed(2))
            })

            data.push(dataPoint)
        }

        // Post-process to smooth out any extreme jumps
        for (let i = 1; i < data.length - 1; i++) {
            stocks.forEach((stock) => {
                const prev = data[i - 1][stock.id] as number
                const current = data[i][stock.id] as number
                const next = data[i + 1][stock.id] as number

                // If there's a sharp spike (much higher than both neighbors), smooth it
                if ((current > prev * 1.5 && current > next * 1.5) || (current < prev * 0.5 && current < next * 0.5)) {
                    data[i][stock.id] = Number.parseFloat(((prev + next) / 2).toFixed(2))
                }
            })
        }

        return data
    }, [stocks])

    // Calculate latest values and changes for the table
    const getStockTableData = useCallback(
        (data: DataPoint[]) => {
            if (data.length < 2) return []

            const latest = data[data.length - 1]
            const previous = data[data.length - 2]

            return stocks.map((stock) => {
                const currentValue = latest[stock.id] as number
                const previousValue = previous[stock.id] as number
                const change = Number.parseFloat((currentValue - previousValue).toFixed(2))
                const percentChange = Number.parseFloat(((change / Math.abs(previousValue)) * 100).toFixed(2))

                return {
                    ...stock,
                    price: 214.0, // Dummy fixed price for now
                    change,
                    percentChange,
                }
            })
        },
        [stocks],
    )

    // Update chart with current data and stock visibility
    const updateChart = useCallback(() => {
        if (!chartInstance.current || data.length === 0) return

        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },

                /* eslint-disable @typescript-eslint/no-explicit-any */
                formatter: (params: any) => {
                    const date = params[0].axisValue
                    let html = `<div style="margin-bottom: 5px;">${date}</div>`

                    params.forEach((param: any) => {
                        const stock = stocks.find((s) => s.id === param.seriesName)
                        if (!stock) return

                        const color = stock.color
                        const value = param.value.toFixed(2)

                        // Use a deterministic approach for the change percentage
                        const change = "+" + ((Math.abs(param.value) * 0.1) % 20).toFixed(2) + "%"

                        html += `<div style="display: flex; justify-content: space-between; align-items: center; margin: 3px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 5px;"></span>
              <span style="margin-right: 15px;">${stock.name}</span>
              <span>${value}%</span>
              <span style="color: green; margin-left: 10px;">${change}</span>
            </div>`
                    })

                    return html
                },
            },
            legend: {
                data: stocks.filter((s) => s.visible).map((s) => s.id),
                right: 10,
                top: 0,
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                top: "40px",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: data.map((item) => item.date),
                axisLine: {
                    lineStyle: {
                        color: theme === "dark" ? "#555" : "#ddd",
                    },
                },
                axisLabel: {
                    color: theme === "dark" ? "#ccc" : "#666",
                    // Responsive font size and rotation for small screens
                    fontSize: window.innerWidth < 768 ? 10 : 12,
                    rotate: window.innerWidth < 768 ? 30 : 0,
                },
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: theme === "dark" ? "#ccc" : "#666",
                    formatter: "{value}%",
                    // Responsive font size for small screens
                    fontSize: window.innerWidth < 768 ? 10 : 12,
                },
                splitLine: {
                    lineStyle: {
                        color: theme === "dark" ? "#333" : "#eee",
                    },
                },
                min: -50,
                max: 50,
            },
            series: stocks
                .filter((stock) => stock.visible)
                .map((stock) => ({
                    name: stock.id,
                    type: "line",
                    data: data.map((item) => item[stock.id]),
                    smooth: 0.2, // Reduced smoothness to prevent sharp spikes
                    smoothMonotone: "x", // Ensures the curve is monotonic in x direction
                    showSymbol: false,
                    lineStyle: {
                        width: 2,
                        color: stock.color,
                    },
                    itemStyle: {
                        color: stock.color,
                    },
                    connectNulls: true,
                    sampling: "average", // Use average sampling for large datasets
                })),
        }

        chartInstance.current.setOption(option, true) // Force update
    }, [data, stocks, theme])

    // Initialize data on client-side only
    useEffect(() => {
        setIsClient(true)
        const generatedData = generateData(period)
        setData(generatedData)
        setStockTableData(getStockTableData(generatedData))
    



    }, [generateData, getStockTableData, period]) // Empty dependency array means this runs once on mount

    // Update data when period changes (client-side only)
    useEffect(() => {
        if (isClient) {
            const generatedData = generateData(period)
            setData(generatedData)
            setStockTableData(getStockTableData(generatedData))
        }
    }, [period, isClient, generateData, getStockTableData])

    // Toggle stock visibility
    const toggleStockVisibility = useCallback((stockId: string) => {
        setStocks((prevStocks) => {
            const newStocks = prevStocks.map((stock) =>
                stock.id === stockId ? { ...stock, visible: !stock.visible } : stock,
            )
            return newStocks
        })
    }, [])

    // Effect to update chart when stocks visibility changes
    useEffect(() => {
        if (isClient && chartInstance.current) {
            updateChart()
        }
    }, [stocks, isClient, updateChart])

    // Initialize chart
    useEffect(() => {
        if (!isClient || data.length === 0) return

        if (chartRef.current) {
            if (!chartInstance.current) {
                chartInstance.current = echarts.init(chartRef.current)
            }

            updateChart()
        }

        // Cleanup function
        return () => {
            if (chartInstance.current) {
                chartInstance.current.dispose()
                chartInstance.current = null
            }
        }
    }, [data, isClient, updateChart])

    // Handle resize
    useEffect(() => {
        if (!isClient) return

        const handleResize = () => {
            if (chartInstance.current) {
                chartInstance.current.resize()
                // Update chart options for responsive design
                updateChart()
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [isClient, updateChart])

    return (
        <Card className="w-full shadow-[0px_0px_10px_1px_#0000001A]">
            <CardHeader className="sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-xl sm:text-2xl">Performance Comparison</CardTitle>
                <Tabs value={period} onValueChange={(value) => setPeriod(value as TimePeriod)} className="mt-2 sm:mt-0">
                    <TabsList className="grid grid-cols-3 sm:grid-cols-6">
                        <TabsTrigger value="3m">3m</TabsTrigger>
                        <TabsTrigger value="6m">6m</TabsTrigger>
                        <TabsTrigger value="1y">1y</TabsTrigger>
                        <TabsTrigger value="YTD">YTD</TabsTrigger>
                        <TabsTrigger value="3y">3y</TabsTrigger>
                        <TabsTrigger value="5y">5y</TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardHeader>
            <CardContent>
                {/* Responsive height based on screen size */}
                <div ref={chartRef} className="w-full h-[300px] sm:h-[400px] md:h-[500px]" />

                {isClient ? (
                    <div className="mt-6 overflow-x-auto">
                        <Table className="border-none">
                            <TableHeader>
                                <TableRow className=" border-t">
                                    <TableHead>Ticker</TableHead>
                                    <TableHead className="hidden sm:table-cell text-center">Company Name</TableHead>
                                    <TableHead className="text-center">Price</TableHead>
                                    <TableHead className="text-center">Change</TableHead>
                                    <TableHead className="text-center">%Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {stockTableData.map((stock) => (
                                    <TableRow key={stock.id} className="">
                                        <TableCell className="border-r-0 flex items-center gap-1">
                                            <Checkbox
                                                checked={stock.visible}
                                                onCheckedChange={() => toggleStockVisibility(stock.id)}
                                                style={{
                                                    backgroundColor: stock.visible ? stock.color : "transparent",
                                                    borderColor: stock.color,
                                                }}
                                            />
                                            <Badge
                                                variant="outline"
                                                style={{
                                                    color: stock.color,
                                                    borderColor: stock.color,
                                                }}
                                            >
                                                {stock.id}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell border-r-0 text-center">{stock.name}</TableCell>
                                        <TableCell className="border-r-0 text-center">{stock.price.toFixed(2)}</TableCell>
                                        <TableCell className={`border-r-0 text-center ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                                            {stock.change >= 0 ? "+" : ""}
                                            {stock.change.toFixed(2)}
                                        </TableCell>
                                        <TableCell className={`text-center border-r-0 ${stock.percentChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                                            {stock.percentChange >= 0 ? "+" : ""}
                                            {stock.percentChange.toFixed(2)}%
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="mt-6 flex items-center justify-center p-8">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
