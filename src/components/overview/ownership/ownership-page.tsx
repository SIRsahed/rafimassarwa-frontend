import React from 'react'
import RecentNews from '../news'
import StockOwnershipOverview from './stock-ownership-overview'
import RecentInsiderTradingTable from './recent-insider-table'
import HedgeFundTable from './recent-hedge-fund-table'
import TopCatDataTable from './top-category-table'
import OverviewFAQ from '../overview-faq'
import StockPremiumBanner from '@/components/Portfolio/chart/chart-bottom'

export default function OwnershipPage() {

    const mutualFundData = Array(12).fill({
        holder: "Vanguard",
        shares: "1,585,315,608",
        type: "Institution",
        percentage: "8.36",
        value: "207,389,208,392",
    })

    return (
        <div className='flex min-h-screen flex-col lg:w-[80vw] w-[98vw]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5">
                <div className="col-span-full lg:col-span-5">
                    <StockOwnershipOverview />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 lg:mt-20">
                        <RecentInsiderTradingTable />
                        <HedgeFundTable />
                    </div>

                    {/* Share Holders Table */}
                    <div className="mt-8 lg:mt-20">
                        <TopCatDataTable
                            title='Top Share Holders'
                            data={mutualFundData}
                            initialRowsToShow={8}
                            showMore={true}
                        />
                    </div>


                    {/* Murual Fund Holders Table */}
                    <div className="mt-8 lg:mt-20">
                        <TopCatDataTable
                            title='Top Mutual Fund Holders'
                            data={mutualFundData}
                            initialRowsToShow={8}
                            showMore={true}
                        />
                    </div>


                    {/* ETF Holders Table */}
                    <div className="mt-8 lg:mt-20">
                        <TopCatDataTable
                            title='Top ETF Holders'
                            data={mutualFundData}
                            initialRowsToShow={8}
                            showMore={true}
                        />
                    </div>

                    {/* FAQ */}
                    <div className="mt-8 lg:mt-20">
                        <OverviewFAQ />
                    </div>


                    {/* Premium Banner */}
                    <div className="mt-8 lg:mt-20">
                        <StockPremiumBanner />
                    </div>

                </div>
                <div className="col-span-full lg:col-span-2">
                    <RecentNews />
                </div>
            </div>
        </div>
    )
}
