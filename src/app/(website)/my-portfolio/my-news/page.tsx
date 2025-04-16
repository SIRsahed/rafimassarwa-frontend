import MurakkabsNews from '@/components/Portfolio/my-news/murakkabs-news'
import NewsList from '@/components/Portfolio/my-news/news-list'
import { Plus } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className="">
            <div className="">
                {/* <div className="flex justify-end gap-2 p-3 mt-8 mb-6">
                    <button className="border rounded-md px-4 py-2 text-green-500 hover:bg-green-50 transition">
                        Add Portfolio
                    </button>
                    <button className="bg-green-500 rounded-md px-4 py-2 text-white flex items-center gap-1 hover:bg-green-600 transition">
                        <Plus className="h-4 w-4" />
                        Add Holdings
                    </button>
                </div> */}
            </div>
            <div className='py-32 grid grid-cols-10 gap-6'>
                <div className="col-span-6">
                    <NewsList />
                </div>
                <div className="col-span-4">
                    <MurakkabsNews />
                </div>
            </div>
        </div>
    )
}
