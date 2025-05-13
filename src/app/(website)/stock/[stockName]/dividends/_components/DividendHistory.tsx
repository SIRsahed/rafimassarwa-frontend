"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DividendHistory() {
  const [showAll, setShowAll] = useState(false)

  // Initial visible rows
  const initialRows = 7

  // Full dividend history data
  const dividendData = [
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    // Additional rows that will be shown when "Show More" is clicked
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
    {
      exDate: "Feb 10, 2025",
      recordDate: "Feb 10, 2025",
      paymentDate: "Feb 13, 2025",
      frequency: "Quarterly",
      declarationDate: "Oct 31, 2024",
      amount: "$0.25",
    },
  ]

  // Display either initial rows or all rows based on state
  const displayedRows = showAll ? dividendData : dividendData.slice(0, initialRows)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">AAPL Dividend History</h1>

      <div className="rounded-lg overflow-hidden border border-gray-200">
        <Table>
          <TableHeader className="bg-white">
            <TableRow>
              <TableHead className="text-center">Ex-Date</TableHead>
              <TableHead className="text-center">Record Date</TableHead>
              <TableHead className="text-center">Payment Date</TableHead>
              <TableHead className="text-center">Frequency</TableHead>
              <TableHead className="text-center">Declaration Date</TableHead>
              <TableHead className="text-center">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{row.exDate}</TableCell>
                <TableCell className="text-center">{row.recordDate}</TableCell>
                <TableCell className="text-center">{row.paymentDate}</TableCell>
                <TableCell className="text-center">{row.frequency}</TableCell>
                <TableCell className="text-center">{row.declarationDate}</TableCell>
                <TableCell className="text-center">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Description */}
      <div className="bg-[#e6e6e6] py-4 px-4 text-sm text-gray-600">
        The table shows Apple s dividend history, including amount per share, payout frequency, declaration, record, and
        payment dates.
      </div>

      {/* Show More/Less button */}
      <Button
        onClick={toggleShowAll}
        variant="ghost"
        className="flex items-center justify-center w-full py-4 bg-gradient-to-t from-gray-400 via-white to-white text-green-500 font-medium transition-colors hover:text-green-600"
      >
        {showAll ? (
          <>
            <Minus className="w-4 h-4 mr-2" />
            Show Less
          </>
        ) : (
          <>
            <Plus className="w-4 h-4 mr-2" />
            Show More
          </>
        )}
      </Button>
    </div>
  )
}
