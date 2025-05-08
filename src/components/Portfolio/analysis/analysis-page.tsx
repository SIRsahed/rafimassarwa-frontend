import { AssetAllocation } from "./asset-chart"
import { HoldingsDistribution } from "./holding-distribution"
import { Plus } from "lucide-react"
import PerformanceGrid from "./performance-grid"

export default function AnalysisPage() {
    return (
        <div className="">
            {/* Action Buttons */}
            <div className="flex justify-end gap-2 p-3 mb-6">
                <button className="border rounded-md px-4 py-2 text-green-500 hover:bg-green-50 transition">
                    Add Portfolio
                </button>
                <button className="bg-green-500 rounded-md px-4 py-2 text-white flex items-center gap-1 hover:bg-green-600 transition">
                    <Plus className="h-4 w-4" />
                    Add Holdings
                </button>
            </div>

            <div className="grid grid-cols-1 md:w-[98svw] lg:w-auto lg:px-3 lg:grid-cols-3 gap-6 ">
                <div className="col-span-1 lg:w-[500px] w-full">
                    <h3 className="text-xl font-semibold pb-4">Asset Allocation</h3>
                    <div className="min-w-full py-1">
                        <AssetAllocation />
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Holdings Distribution</h2>
                    <div className="w-full">
                        <HoldingsDistribution />
                    </div>
                </div>
            </div>
            <div className="py-20 lg:px-2">
                <PerformanceGrid />
            </div>
        </div>
    )
}
