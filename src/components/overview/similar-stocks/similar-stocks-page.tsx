import React from 'react'
import RecentNews from '../news'
import PerformanceCoverage from '../stock-analysis/media-coverage-chart'
import StockPremiumBanner from '@/components/Portfolio/chart/chart-bottom'
import SimilarStocksTable from './similar-stocks-table'

export default function SimilarStocksPage() {

    const stockData = Array(5).fill({
        symbol: "AAPL",
        name: "Apple",
        price: "212.69",
        marketCap: "$3.21T",
        peRatio: "33.94",
        yearlyGain: "24.28%",
        analystConsensus: {
            rating: "Moderate Buy",
            fillPercentage: 50, // 50% filled circle
        },
        analystPriceTarget: false, // locked
        topAnalystPriceTarget: false, // locked
        smartScore: false, // locked
    })

    return (
        <div className='flex min-h-screen flex-col lg:w-[80vw] w-[98vw]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5">
                <div className="col-span-full lg:col-span-5">
                    <div className="mt-8 lg:mt-20">
                        <SimilarStocksTable title='Apple (AAPL) Similar Stocks' subtitle='Comparison Results' data={stockData} />
                    </div>
                    <div className="mt-8 lg:mt-20">
                        <PerformanceCoverage />
                    </div>
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
