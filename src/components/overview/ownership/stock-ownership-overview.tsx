import React from 'react'
import OwnershipOverview from '../ownership-overview'

export default function StockOwnershipOverview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-6 px-2 md:px-5 shadow-[0px_0px_10px_1px_#0000001A]">
            <div className="w-full md:border-r-2">
                <OwnershipOverview />
            </div>
            <div className="lg:pl-6 pl-2 w-full">
                <p>The ownership structure of Apple (AAPL) stock is a mix of institutional, retail, and individual investors. Approximately 50.02% of the company&apos;s stock is owned by Institutional Investors, 0.06% is owned by Insiders, and 49.92% is  owned by Public Companies and Individual Investors.</p>
            </div>
        </div>
    )
}
