import RiskScale from "./risk-scale"

interface Stock {
    id: number
    name: string
    ticker: string
    beta: number
}

interface PerformanceCardProps {
    title: string
    data: {
        myRisk: number
        myPosition: number
        avgPosition: number
        highestRiskStocks: Stock[]
    }
}

export default function PerformanceCard({ title, data }: PerformanceCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-4">{title}</h2>

            {/* Risk Indicator */}
            <div className="mb-2 border-l-4 border-green-500 pl-2">
                <p className="font-medium">{data.myRisk} My Risk (Beta)</p>
            </div>

            {/* Risk Scale */}
            <div className="mb-6">
                <RiskScale myPosition={data.myPosition} avgPosition={data.avgPosition} />
            </div>

            {/* Highest Risk Stocks */}
            <div>
                <div className="flex justify-between font-medium border-b pb-2 mb-2">
                    <span>My Highest Risk Stocks</span>
                    <span>Beta</span>
                </div>

                {data.highestRiskStocks.map((stock) => (
                    <div key={stock.id} className="flex justify-between py-2">
                        <div>
                            <span>
                                {stock.id}. {stock.name} (
                            </span>
                            <a href={`#${stock.ticker}`} className="text-blue-500">
                                {stock.ticker}
                            </a>
                            <span>)</span>
                        </div>
                        <span>{stock.beta}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
