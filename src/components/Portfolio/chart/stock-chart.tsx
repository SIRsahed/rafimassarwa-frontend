"use client"

import { useEffect, useRef } from "react"
import * as echarts from "echarts"
import { Card } from "@/components/ui/card"

interface StockChartProps {
    selectedStock: string
    timeframe: string
    comparisonStocks?: string[]
}

export default function StockChart({ selectedStock, timeframe, comparisonStocks = [] }: StockChartProps) {
    const chartRef = useRef<HTMLDivElement>(null)
    const chartInstanceRef = useRef<echarts.ECharts | null>(null)

    // Color palette for comparison stocks only
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
    const primaryGreen = "#1EAD00"
    const primaryGreenWithOpacity = "rgba(30, 173, 0, 0.38)"

    // Dummy data for different stocks
    // Format: [timestamp, price]
    const dummyData = {
        AAPL: generateDummyTimeSeriesData(120, 320),
        NVDA: generateDummyTimeSeriesData(110, 130),
        MSFT: generateDummyTimeSeriesData(390, 430),
        GOOGL: generateDummyTimeSeriesData(170, 190),
        AMZN: generateDummyTimeSeriesData(180, 200),
        TSLA: generateDummyTimeSeriesData(230, 260),
        META: generateDummyTimeSeriesData(460, 490),
    }

    // Simple function to generate time series data
    function generateDummyTimeSeriesData(minPrice: number, maxPrice: number) {
        // Calculate date 10 years ago from today
        const endDate = new Date()
        const startDate = new Date()
        startDate.setFullYear(endDate.getFullYear() - 10)

        const startTimestamp = startDate.getTime()
        const endTimestamp = endDate.getTime()
        const oneDay = 24 * 3600 * 1000

        // Calculate number of days in 10 years (approximately)
        // const totalDays = Math.floor((endTimestamp - startTimestamp) / oneDay)

        const data: [number, number][] = []

        // First data point (10 years ago)
        let price = minPrice + Math.random() * (maxPrice - minPrice) * 0.7 // Start at a lower price
        data.push([startTimestamp, price])

        // Generate data points for each day over 10 years
        // To reduce data size, we'll use weekly data points instead of daily
        const interval = 1 * oneDay // Daily intervals

        for (let i = interval; i <= endTimestamp - startTimestamp; i += interval) {
            const date = startTimestamp + i

            // Random price change with slight upward bias (to simulate market growth over time)
            const volatility = 0.16 // 16% volatility
            const randomChange = (Math.random() - 0.45) * volatility * price // Slight upward bias
            price = price + randomChange

            // Add some market cycles (bull and bear markets)
            const yearPosition = (date - startTimestamp) / (endTimestamp - startTimestamp)
            const cycleInfluence = Math.sin(yearPosition * Math.PI * 3) * 0.1 * price
            price += cycleInfluence / 100

            // Keep price within range but allow for growth over time
            const timeAdjustedMax = minPrice + (maxPrice - minPrice) * (1 + yearPosition)
            price = Math.max(minPrice * 0.7, Math.min(timeAdjustedMax, price))

            data.push([date, Number(price.toFixed(2))])
        }

        // Ensure we have the most recent data point
        data.push([endTimestamp, Number(price.toFixed(2))])

        return data
    }

    // Generate volume data
    function generateVolumeData(data: [number, number][]): [number, number][] {
        return data.map((item) => {
            const timestamp = item[0]
            const volume = Math.floor(Math.random() * 1000000) + 100000 // Random volume between 100k and 1.1M
            return [timestamp, volume]
        })
    }

    // Calculate dataZoom start and end percentages based on timeframe
    function calculateDataZoomRange(timeframe: string, data: [number, number][]): { start: number; end: number } {
        if (data.length === 0) return { start: 0, end: 100 }

        const now = new Date().getTime()
        let startTime: number

        switch (timeframe) {
            case "1D":
                startTime = now - 24 * 60 * 60 * 1000 // 1 day
                break
            case "5D":
                startTime = now - 5 * 24 * 60 * 60 * 1000 // 5 days
                break
            case "1M":
                startTime = now - 30 * 24 * 60 * 60 * 1000 // 1 month (approx)
                break
            case "3M":
                startTime = now - 90 * 24 * 60 * 60 * 1000 // 3 months (approx)
                break
            case "6M":
                startTime = now - 180 * 24 * 60 * 60 * 1000 // 6 months (approx)
                break
            case "YTD":
                const ytdStart = new Date()
                ytdStart.setMonth(0, 1) // January 1st of current year
                ytdStart.setHours(0, 0, 0, 0)
                startTime = ytdStart.getTime()
                break
            case "1Y":
                startTime = now - 365 * 24 * 60 * 60 * 1000 // 1 year (approx)
                break
            case "5Y":
                startTime = now - 5 * 365 * 24 * 60 * 60 * 1000 // 5 years (approx)
                break
            default:
                startTime = now - 365 * 24 * 60 * 60 * 1000 // Default to 1 year
        }

        // Find the index of the first data point after startTime
        const startIndex = data.findIndex((item) => item[0] >= startTime)

        if (startIndex === -1) {
            // If no data point is after startTime, show the entire dataset
            return { start: 0, end: 100 }
        }

        // Calculate percentage
        const start = (startIndex / data.length) * 100

        return { start, end: 100 }
    }

    // Function to normalize data for comparison
    function normalizeData(data: [number, number][]): [number, number][] {
        if (data.length === 0) return []

        const firstValue = data[0][1]
        return data.map((item) => [item[0], (item[1] / firstValue) * 100])
    }

    // Get color for a comparison stock
    function getComparisonColor(symbol: string): string {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        return (comparisonColors as any)[symbol] || "#f43f5e" // Default to red if not found
    }

    useEffect(() => {
        // Initialize chart if it doesn't exist
        if (chartRef.current && !chartInstanceRef.current) {
            chartInstanceRef.current = echarts.init(chartRef.current)

            // Handle resize
            const handleResize = () => {
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.resize()
                }
            }

            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.dispose()
                    chartInstanceRef.current = null
                }
            }
        }
    }, [])

    useEffect(() => {
        if (!chartInstanceRef.current) return

        // Get data for the selected stock (or default to AAPL)
        const data = dummyData[selectedStock as keyof typeof dummyData] || dummyData.AAPL

        // Calculate dataZoom range based on timeframe
        const { start, end } = calculateDataZoomRange(timeframe, data)

        // Prepare series for the chart
        const series = [
            {
                name: selectedStock,
                type: "line",
                smooth: true,
                symbol: "none",
                sampling: "average",
                itemStyle: {
                    color: primaryGreen, // Always use green for the primary stock
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: primaryGreenWithOpacity, // Green with opacity
                        },
                        {
                            offset: 0.9893,
                            color: "#FFFFFF", // End color close to 98.93%
                        },
                    ]),
                },
                data: comparisonStocks.length > 0 ? normalizeData(data) : data,
            },
        ]

        // Add comparison stocks if any
        if (comparisonStocks.length > 0) {
            comparisonStocks.forEach((stockSymbol) => {
                if (dummyData[stockSymbol as keyof typeof dummyData]) {
                    const comparisonData = dummyData[stockSymbol as keyof typeof dummyData]
                    const normalizedData = normalizeData(comparisonData)
                    const stockColor = getComparisonColor(stockSymbol)

                    series.push({
                        name: stockSymbol,
                        type: "line",
                        smooth: true,
                        symbol: "none",
                        sampling: "average",
                        itemStyle: {
                            color: stockColor, // Use different colors for comparison stocks
                        },
                        data: normalizedData,
                        // @ts-expect-error style is not a valid option
                        areaStyle: undefined
                    })
                }
            })
        }

        // Add volume series
        series.push({
            name: "Volume",
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 1,
            z: -1, // Put volume behind price lines
            itemStyle: {
                // @ts-expect-error color is not a valid option
                color: (params: any) => {
                    // Get the corresponding price data point
                    const priceIndex = params.dataIndex
                    if (priceIndex > 0 && data[priceIndex] && data[priceIndex - 1]) {
                        // Red if price went down, green if price went up
                        return data[priceIndex][1] >= data[priceIndex - 1][1] ? "#10b981" : "#f43f5e"
                    }
                    return "#10b981" // Default to green
                },
                opacity: 0.3, // Make volume bars semi-transparent
            },
            data: generateVolumeData(data),
        })

        // Configure chart options
        const option = {
            animation: true,
            tooltip: {
                trigger: "axis",
                /* eslint-disable @typescript-eslint/no-explicit-any */
                position: (pt: any) => [pt[0], "10%"],
                /* eslint-disable @typescript-eslint/no-explicit-any */
                formatter: (params: any) => {
                    const date = new Date(params[0].value[0])
                    let tooltipText = `<div style="font-weight: bold">${date.toLocaleDateString()}</div>`

                    // Filter out volume from tooltip
                    const priceParams = params.filter((param: any) => param.seriesName !== "Volume")
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                    priceParams.forEach((param: any) => {
                        const color = param.color
                        const seriesName = param.seriesName
                        const value = param.value[1]

                        // If comparing stocks, show percentage change
                        if (comparisonStocks.length > 0) {
                            tooltipText += `<div style="display: flex; align-items: center;">
                                <span style="display: inline-block; width: 10px; height: 10px; background: ${color}; margin-right: 5px;"></span>
                                <span>${seriesName}: ${value.toFixed(2)}%</span>
                            </div>`
                        } else {
                            tooltipText += `<div style="display: flex; align-items: center;">
                                <span style="display: inline-block; width: 10px; height: 10px; background: ${color}; margin-right: 5px;"></span>
                                <span>${seriesName}: $${value.toFixed(2)}</span>
                            </div>`
                        }
                    })
                    // Add volume information
                    /* eslint-disable @typescript-eslint/no-explicit-any */
                    const volumeParam = params.find((param: any) => param.seriesName === "Volume")
                    if (volumeParam) {
                        tooltipText += `<div style="display: flex; align-items: center; margin-top: 5px;">
                              <span>Volume: ${volumeParam.value[1].toLocaleString()}</span>
                          </div>`
                    }

                    return tooltipText
                },
            },
            title: {
                left: "center",
                text: comparisonStocks.length > 0 ? `${selectedStock} Comparison` : `${selectedStock} Stock Price`,
                textStyle: {
                    fontSize: 16,
                    fontWeight: "normal",
                },
            },
            legend: {
                data: [selectedStock, ...comparisonStocks],
                bottom: 10,
                textStyle: {
                    color: "#666",
                },
                itemStyle: {
                    opacity: 1,
                },
                inactiveColor: "#ccc",
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: "none",
                    },
                    restore: {},
                    saveAsImage: {},
                },
            },
            axisPointer: {
                link: { xAxisIndex: "all" },
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "60px",
                top: "15%",
                containLabel: true,
            },
            xAxis: {
                type: "time",
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: true },
            },
            yAxis: [
                {
                    type: "value",
                    position: "right",
                    boundaryGap: [0, "100%"],
                    axisLabel: {
                        formatter: (value: number) => {
                            // If comparing stocks, show percentage
                            if (comparisonStocks.length > 0) {
                                return `${value.toFixed(0)}%`
                            }
                            return `$${value.toFixed(0)}`
                        },
                    },
                    splitLine: { show: true },
                },
                {
                    type: "value",
                    position: "right",
                    scale: true,
                    name: "Volume",
                    nameLocation: "end",
                    nameGap: 15,
                    nameTextStyle: {
                        color: "#999",
                        fontSize: 10,
                    },
                    boundaryGap: [0, "100%"],
                    axisLabel: { show: false },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                },
            ],
            dataZoom: [
                {
                    type: "inside",
                    start: start,
                    end: end,
                    xAxisIndex: [0],
                    zoomLock: false,
                },
                {
                    type: "slider",
                    start: start,
                    end: end,
                    height: 20,
                    bottom: 30,
                    borderColor: "transparent",
                    backgroundColor: "#f5f5f5",
                    fillerColor: "rgba(200, 200, 200, 0.3)",
                    handleStyle: {
                        color: "#ddd",
                        borderColor: "#ccc",
                    },
                    moveHandleStyle: {
                        color: "#aaa",
                    },
                    emphasis: {
                        handleStyle: {
                            color: "#999",
                        },
                    },
                },
            ],
            series: series,
        }

        // Apply options to chart
        chartInstanceRef.current.setOption(option, true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStock, timeframe, comparisonStocks])

    return (
        <Card className="relative overflow-hidden max-w-[98vw]">
            <div ref={chartRef} className="h-[500px] w-full" />
        </Card>
    )
}
