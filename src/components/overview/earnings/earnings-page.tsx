import React from 'react'
import EarningsPageEarningsCallSummary from './earnings-page-earnings-call-summary'
import RecentNews from '../news'
import EarningsHistoryChart from './earnings-history-chart'
import EarningsHistoryTable from './earnings-history-table'
import PriceChangesTable from './price-changes'

export default function EarningsPage() {
    return (
        <div className='flex min-h-screen flex-col lg:p-4 md:p-6 lg:w-[80vw] w-[98vw]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5">
                <div className="col-span-full lg:col-span-5">
                    <EarningsPageEarningsCallSummary />
                    <div className="mt-8 lg:mt-20">
                        <EarningsHistoryChart />
                    </div>
                    <div className="mt-8 lg:mt-20">
                        <EarningsHistoryTable />
                    </div>
                    <div className="mt-8 lg:mt-20">
                        <PriceChangesTable />
                    </div>
                </div>
                <div className="col-span-full lg:col-span-2">
                    <RecentNews />
                </div>
            </div>
        </div>
    )
}
