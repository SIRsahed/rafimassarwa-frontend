import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinancialDashboard() {
  return (
    <div className="w-[75vw] mt-16 border border-gray-100 p-4 rounded-lg shadow-lg">
      <div className="flex justify-end gap-2 mb-6">
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700">
          Add Portfolio
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> Add Holdings
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">February 2025</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-0">
            {/* Days of week */}
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
              <div key={day} className="text-center py-2 text-sm font-medium">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {[
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              { day: 1, nextMonth: true },
              { day: 2, nextMonth: true },
              { day: 3, nextMonth: true },
              { day: 4, nextMonth: true },
            ].map((date, index) => {
              const day = typeof date === "number" ? date : date.day
              const isNextMonth = typeof date === "object" && date.nextMonth
              const isSelected = day === 18 && !isNextMonth

              return (
                <div
                  key={index}
                  className={`
                    border p-3 text-center
                    ${isNextMonth ? "text-gray-300" : ""}
                    ${isSelected ? "bg-indigo-700 text-white" : ""}
                  `}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Events</h2>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full w-1/4"></div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-sm">Ticker</th>
                  <th className="text-left py-2 px-2 font-medium text-sm">Company</th>
                  <th className="text-left py-2 px-2 font-medium text-sm">Type</th>
                  <th className="text-left py-2 px-2 font-medium text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-2 text-green-600 font-medium">AAPL</td>
                  <td className="py-3 px-2">Apple</td>
                  <td className="py-3 px-2">
                    <span className="text-blue-500">Earnings Release</span>
                  </td>
                  <td className="py-3 px-2">Apr 24, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
