"use client"

import type React from "react"

import { Plus } from "lucide-react"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DataTableProps<T extends Record<string, any>> {
    title: string
    data: T[]
    showMore?: boolean
    showMoreText?: string
    onShowMore?: () => void
    initialRowsToShow?: number
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TopCatDataTable<T extends Record<string, any>>({
    title,
    data,
    showMore = true,
    showMoreText = "Show More",
    onShowMore,
    initialRowsToShow = data.length,
}: DataTableProps<T>) {
    const [rowsToShow, setRowsToShow] = useState(initialRowsToShow)

    // Get column headers from the first data item
    const columns = data.length > 0 ? Object.keys(data[0]) : []

    // Handle show more click
    const handleShowMore = () => {
        if (onShowMore) {
            onShowMore()
        } else {
            setRowsToShow(data.length)
        }
    }

    return (
        <div className="w-full overflow-hidden mb-6">
            <h2 className="text-xl font-bold pb-4">{title}</h2>
            <div className="overflow-x-auto border-2 rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column) => (
                                <TableHead key={column} className="text-center">{formatColumnHeader(column)}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.slice(0, rowsToShow).map((row, rowIndex) => (
                            <TableRow key={rowIndex} className={rowIndex % 2 === 0 ? "" : "bg-gray-50"}>
                                {columns.map((column) => (
                                    <TableCell key={`${rowIndex}-${column}`}>{formatCellValue(column, row[column])}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {showMore && rowsToShow < data.length && (
                <div className="flex justify-center p-4 border-t border-gray-100 bg-gray-100">
                    <button onClick={handleShowMore} className="text-green-500 flex items-center hover:underline">
                        <Plus className="h-4 w-4 mr-1" />
                        {showMoreText}
                    </button>
                </div>
            )}
        </div>
    )
}

// Helper function to format column headers (convert camelCase to Title Case)
function formatColumnHeader(key: string): string {
    // Special case for common abbreviations
    if (key === "id") return "ID"

    // Handle special cases for the columns in the example
    switch (key) {
        case "holder":
            return "Holder"
        case "shares":
            return "# of Shares"
        case "type":
            return "Type"
        case "percentage":
            return "%holding"
        case "value":
            return "Value"
        default:
            // Convert camelCase or snake_case to Title Case
            return key
                .replace(/([A-Z])/g, " $1") // Insert a space before all capital letters
                .replace(/_/g, " ") // Replace underscores with spaces
                .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first letter
                .trim()
    }
}

// Helper function to format cell values based on column type
function formatCellValue(column: string, value: any): React.ReactNode {
    if (value === null || value === undefined) {
        return "-"
    }

    // Format values based on column name
    if (column === "value" && typeof value === "string" && !value.startsWith("$")) {
        return `$${value}`
    }

    if (column === "percentage" && typeof value === "string" && !value.endsWith("%")) {
        return `${value}%`
    }

    return value
}
