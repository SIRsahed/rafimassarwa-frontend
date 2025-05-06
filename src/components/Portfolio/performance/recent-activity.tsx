import React from 'react'
import RecentActivityTable from './recent-activity-table'

export default function RecentActivity() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 lg:mt-20 mt-5'>
            <div className="col-span-1 shadow-[0px_0px_16px_0px_#00000029]">
                <h1>Recent Activity</h1>
            </div>
            <div className="col-span-2 shadow-[0px_0px_16px_0px_#00000029]">
                <RecentActivityTable />
            </div>
        </div>
    )
}
