import { Lock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/lib/dummy-data"

// Sample data for the hedge fund trading activity
const hedgeFundData = [
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    },
    {
        date: "Feb 04, 2025",
        firm: "Causeway Capital management LLC",
        activity: "locked",
        value: 4546500,
    }
]

export default function HedgeFundTable() {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold pb-4">Recent Hedge Fund Trading Activity</h2>
            <div className="py-4 shadow-[0px_0px_10px_1px_#0000001A] overflow-hidden">
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
                            {hedgeFundData.map((record, index) => (
                                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <TableCell className="font-medium">{record.date}</TableCell>
                                    <TableCell>
                                        <div className="text-blue-500">{record.firm}</div>
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
