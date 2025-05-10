import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecentNews() {

    const newsItems = [
        {
            id: 1,
            category: "Market News",
            title: "Could the Apple Watch Evolve...",
            time: "14h ago",
            hasImage: true,
        },
        {
            id: 2,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
        {
            id: 3,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
        {
            id: 4,
            category: "Market News",
            title: "J.P. Morgan Positions Netflix Stock (NFLX) for Break Above $1,000",
            time: "14h ago",
            hasImage: false,
        },
    ]

    return (
        <div className="w-full">
            <h2 className="mb-6 text-2xl font-bold">Recent News</h2>
            <div className="space-y-4">
                {newsItems.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Link href="#" className="block">
                            <div className="flex">
                                {item.hasImage && (
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/images/over.png"
                                            alt="Market chart"
                                            width={150}
                                            height={150}
                                            className="h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1 p-4">
                                    <p className="text-sm font-medium text-gray-600">{item.category}</p>
                                    <h3 className="mt-1 text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <Link href={"/news"} className='flex justify-end items-center gap-2 text-[#2695FF]'>More News <ArrowRight className='h-5 w-5' /></Link>
            </div>
        </div>
    )
}
