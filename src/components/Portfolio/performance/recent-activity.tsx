import React from 'react'
import RecentActivityTable from './recent-activity-table'

export default function RecentActivity() {

    const recentActivity = {
        oneMonthReturn: -3.2,
        sixMonthReturn: 3.2,
        twelveMonthReturn: -2.3,
        ytdReturn: 4.0,
        totalReturn: -3.0,
    }


    const portfolioDetails = {
        activeSince: "Mar 20, 2025",
        riskProfile: "medium",
        twelveMonthReturn: null, // Or you could use a number like 0.055 for 5.5%
        ytdReturn: -3.2,
        totalReturn: -0.032
    };

    const mostProfitableTrade = {
        asset: "Apple (AAPL)",
        opened: "Mar 20, 2025",
        closed: null,
        gain: -3.2
    };



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 lg:mt-20 my-5'>

            {/* Left Side Table*/}
            <div className="col-span-1 h-fit">

                {/* Recent Activity Part */}
                <div className="mb-4 rounded-md p-2 shadow-[0px_0px_16px_0px_#00000029]">
                    <h1 className='text-2xl font-medium pb-4'>Recent Activity</h1>
                    <ul className=''>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>1-Month Return</p>
                                <span className={`text-xs ${recentActivity.oneMonthReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {recentActivity.oneMonthReturn ? "▲" : "▼"}
                                    {recentActivity.oneMonthReturn}%
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>6-Month Return</p>
                                <span className={`text-xs ${recentActivity.sixMonthReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {recentActivity.sixMonthReturn ? "▲" : "▼"}
                                    {recentActivity.sixMonthReturn}%
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>12-Month Return</p>
                                <span className={`text-xs ${recentActivity.twelveMonthReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {recentActivity.twelveMonthReturn ? "▲" : "▼"}
                                    {recentActivity.twelveMonthReturn}%
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>YTD Return</p>
                                <span className={`text-xs ${recentActivity.ytdReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {recentActivity.ytdReturn ? "▲" : "▼"}
                                    {recentActivity.ytdReturn}%
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Total Return</p>
                                <span className={`text-xs ${recentActivity.totalReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {recentActivity.totalReturn ? "▲" : "▼"}
                                    {recentActivity.totalReturn}%
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Portfolio Details Part */}
                <div className="mb-4 rounded-md p-2 shadow-[0px_0px_16px_0px_#00000029]">
                    <h1 className='text-2xl font-medium pb-4'>Portfolio Details</h1>
                    <ul className=''>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Active Since</p>
                                <span className="text-xs">
                                    {portfolioDetails.activeSince}
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Risk Profile</p>
                                <span className="text-xs flex items-center">
                                    <span className={`${portfolioDetails.riskProfile === 'low' ? 'text-green-600' : ''}`}>Low</span>/
                                    <span className={`${portfolioDetails.riskProfile === 'medium' ? 'text-[#E6C200]' : ''}`}>Medium </span>/
                                    <span className={`${portfolioDetails.riskProfile === 'high' ? 'text-red-600' : ''}`}>High</span>
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>12-Month Return</p>
                                <span className={`text-xs  ${portfolioDetails.twelveMonthReturn !== null && portfolioDetails.twelveMonthReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {portfolioDetails.twelveMonthReturn !== null ? (
                                        <>
                                            {portfolioDetails.twelveMonthReturn >= 0 ? "▲" : "▼"}
                                            {portfolioDetails.twelveMonthReturn}%
                                        </>
                                    ) : "--"}
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>YTD Return</p>
                                <span className={`text-xs ${portfolioDetails.ytdReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {portfolioDetails.ytdReturn ? "▲" : "▼"}
                                    {portfolioDetails.ytdReturn}%
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Total Return</p>
                                <span className={`text-xs ${portfolioDetails.totalReturn > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {portfolioDetails.totalReturn ? "▲" : "▼"}
                                    {portfolioDetails.totalReturn}%
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Most Profitable Trade Part */}
                <div className="mb-4 rounded-md p-2 shadow-[0px_0px_16px_0px_#00000029]">
                    <h1 className='text-2xl font-medium pb-4'>Most Profitable Trade</h1>
                    <ul className=''>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Asset</p>
                                <span className="text-xs">
                                    {mostProfitableTrade.asset}
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Opened</p>
                                <span className="text-xs">
                                    {mostProfitableTrade.opened}
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Closed</p>
                                <span className="text-xs">
                                    {mostProfitableTrade.closed || "--"}
                                </span>
                            </div>
                        </li>
                        <li className='py-4 border-t border-[#BFBFBF] px-8'>
                            <div className="flex justify-between otems-center text-sm">
                                <p>Gain</p>
                                <span className={`text-xs ${mostProfitableTrade.gain > 0 ? 'text-green-600' : 'text-red-600'} px-2 py-1 rounded-full`}>
                                    {mostProfitableTrade.gain ? "▲" : "▼"}
                                    {mostProfitableTrade.gain}%
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Side Table */}
            <div className="col-span-2">
                <RecentActivityTable />
            </div>
        </div>
    )
}
