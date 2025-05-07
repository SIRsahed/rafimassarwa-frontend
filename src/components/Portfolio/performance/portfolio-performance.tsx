import { UserProfile } from "./user-profile"
import { PerformanceMetrics } from "./performance-metrics"
import PerformanceDashboard from "./performance-chart"


export function PortfolioPerformance() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 lg:mt-20 mt-5">
            <div className="col-span-1 h-fit shadow-[0px_0px_16px_0px_#00000029] rounded-md">
                <UserProfile
                    name="Mr. Raja Babu"
                    portfolioDate="Mar 2025"
                    rank={0}
                    totalInvestors={792554}
                    platform="Murakbab"
                    profileImage="/images/user.png"
                    isRanked={false}
                />
                <PerformanceMetrics successRate={0} averageReturn={-4.05} profitableTransactions={0} totalTransactions={1} />
            </div>
            <div className="col-span-2 mt-5 lg:mt-0">
                <PerformanceDashboard />
            </div>
        </div>
    )
}
