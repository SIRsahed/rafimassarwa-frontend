import Image from 'next/image'
import React from 'react'

export default function MurakkabsNews() {

    const dummyData = [
        {
            imageUrl: "/images/news-cart.png", // Replace with actual image URL
            category: "Market News",
            title: "Apple fixes Passwords bug that exposed users to phishing attacks, Verge says......",
            timeAgo: "3m ago",
        },
        {
            imageUrl: "/images/news-cart.png", // Replace with actual image URL
            category: "Market News",
            title: "Apple fixes Passwords bug that exposed users to phishing attacks, Verge says......",
            timeAgo: "3m ago",
        },
        {
            imageUrl: "/images/news-cart.png", // Replace with actual image URL
            category: "Market News",
            title: "Apple fixes Passwords bug that exposed users to phishing attacks, Verge says......",
            timeAgo: "3m ago",
        },
    ];

    return (
        <div>
            <div className="mb-5">
                <div className="mb-4">
                    <h2 className='text-[32px] font-semibold pb-4'>Murakkab News & Analysis</h2>
                    <h5 className='text-xl font-semibold pb-2 inline-block relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-[150%] after:h-[5px] after:bg-[#28A745]'>Latest News</h5>
                </div>

                {/* Latest News Part */}
                <div className="flex flex-col space-y-3">
                    {
                        dummyData.map((news) => (
                            <div className="grid grid-cols-5 items-center gap-2 border pr-2 rounded-lg">
                                <div className="col-span-2">
                                    <Image
                                        src={news.imageUrl}
                                        alt='news card image'
                                        width={600}
                                        height={400}
                                        className='w-full h-40 rounded-s-lg object-cover'
                                    />
                                </div>
                                <div className="col-span-3">
                                    <h5 className='text-xs pb-5 text-[#A8A8A8]'>{news.category}</h5>
                                    <h2 className='text-sm font-medium pb-4 mb-4 border-b'>{news.title}</h2>
                                    <span className=''>{news.timeAgo}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* Trending news part */}
            <div className="">
                <div className="mb-4">
                    <h5 className='text-xl font-semibold pb-2 inline-block relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-[150%] after:h-[5px] after:bg-[#28A745]'>Trending News</h5>
                </div>

                {/* Latest News Part */}
                <div className="flex flex-col space-y-3">
                    {
                        dummyData.map((news) => (
                            <div className="grid grid-cols-5 items-center gap-2 border pr-2 rounded-lg">
                                <div className="col-span-2">
                                    <Image
                                        src={news.imageUrl}
                                        alt='news card image'
                                        width={600}
                                        height={400}
                                        className='w-full h-40 rounded-s-lg object-cover'
                                    />
                                </div>
                                <div className="col-span-3">
                                    <h5 className='text-xs pb-5 text-[#A8A8A8]'>{news.category}</h5>
                                    <h2 className='text-sm font-medium pb-4 mb-4 border-b'>{news.title}</h2>
                                    <span className=''>{news.timeAgo}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
