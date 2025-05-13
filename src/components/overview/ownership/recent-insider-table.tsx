"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Lock } from "lucide-react"

// Define the type for insider trading data
type InsiderTradingRecord = {
    date: string
    name: string
    position: string
    activity: "sale" | "purchase" | "grant" | "exercise"
    value: number
}

// Use fixed data to avoid hydration errors
const DUMMY_DATA: InsiderTradingRecord[] = [
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Feb 04, 2025",
        name: "Arthur Levinson",
        position: "Director",
        activity: "sale",
        value: 45465000,
    },
    {
        date: "Jan 28, 2025",
        name: "Tim Cook",
        position: "CEO",
        activity: "sale",
        value: 32500000,
    },
    {
        date: "Jan 15, 2025",
        name: "Luca Maestri",
        position: "CFO",
        activity: "sale",
        value: 18750000,
    },
    {
        date: "Dec 12, 2024",
        name: "Jeff Williams",
        position: "COO",
        activity: "sale",
        value: 22340000,
    },
    {
        date: "Dec 05, 2024",
        name: "Katherine Adams",
        position: "SVP, General Counsel",
        activity: "sale",
        value: 15680000,
    },
    {
        date: "Nov 22, 2024",
        name: "Deirdre O'Brien",
        position: "SVP, Retail + People",
        activity: "purchase",
        value: 8450000,
    },
    {
        date: "Nov 15, 2024",
        name: "Arthur Levinson",
        position: "Director",
        activity: "purchase",
        value: 12750000,
    },
    {
        date: "Oct 30, 2024",
        name: "Tim Cook",
        position: "CEO",
        activity: "grant",
        value: 75000000,
    },
    {
        date: "Oct 15, 2024",
        name: "Craig Federighi",
        position: "SVP, Software Engineering",
        activity: "exercise",
        value: 28500000,
    },
]

export default function RecentInsiderTradingTable() {
    const [displayData, setDisplayData] = useState<InsiderTradingRecord[]>([])

    // Use useEffect to set the data only on the client side
    useEffect(() => {
        setDisplayData(DUMMY_DATA.slice(0, 7))
    }, [])

    // Format currency with commas
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="w-full rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Insider Trading Activity</h2>
            <div className="py-4 shadow-[0px_0px_10px_1px_#0000001A]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white">
                                <TableHead className="whitespace-nowrap text-center">Date</TableHead>
                                <TableHead className="whitespace-nowrap text-center">Name</TableHead>
                                <TableHead className="whitespace-nowrap text-center">Activity</TableHead>
                                <TableHead className="whitespace-nowrap text-center">Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {displayData.map((record, index) => (
                                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <TableCell className="font-medium">{record.date}</TableCell>
                                    <TableCell>
                                        <div className="text-blue-500">{record.name}</div>
                                        <div className="text-sm">{record.position}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-center">
                                            <div className="bg-red-100 p-2 rounded-full">
                                                <Lock className="h-5 w-5 text-red-500" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{formatCurrency(record.value)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
