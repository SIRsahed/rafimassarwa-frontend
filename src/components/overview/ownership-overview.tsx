"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PieChart, Pie, Cell } from "recharts"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

// Define types for ownership data
type OwnershipData = {
    name: string
    value: number
    color: string
}

// Dummy data for ownership
const dummyOwnershipData: OwnershipData[] = [
    { name: "Insiders", value: 0.06, color: "#FF5733" },
    { name: "Mutual Funds", value: 17.75, color: "#4CAF50" },
    { name: "Other Institutional Investors", value: 12.61, color: "#2196F3" },
    { name: "Public Companies and Individual Investors", value: 49.92, color: "#FFC107" },
]

export default function OwnershipOverview() {
    const [isMounted, setIsMounted] = useState(false)

    // Handle client-side only rendering for recharts
    useEffect(() => {
        setIsMounted(true)
    }, [])


    const pathname = usePathname()


    return (
        <Card className="w-full">
            <CardHeader className="pb-0">
                <CardTitle className="text-xl font-bold">Ownership Overview</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center p-4">
                {/* Chart - Only render on client side */}
                <div className="w-full flex justify-center mb-4">
                    <div className="w-full max-w-[250px] aspect-square">
                        {isMounted ? (
                            <PieChart width={250} height={250}>
                                <Pie
                                    data={dummyOwnershipData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={0}
                                    strokeWidth={0}
                                >
                                    {dummyOwnershipData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <p>Loading chart...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full">
                    <ul className="space-y-2">
                        {dummyOwnershipData.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-4 h-4 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm">
                                    <span className="font-medium">{item.value}%</span> {item.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>

            {!pathname.endsWith("ownership") &&
                <CardFooter className="flex justify-center py-2">
                    <Link href="/stock/aapl/ownership" className="text-blue-500 text-sm flex items-center">
                        Detailed Ownership Overview
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </CardFooter>
            }
        </Card>
    )
}
