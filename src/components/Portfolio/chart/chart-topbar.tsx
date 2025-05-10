import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { MdOutlineCompareArrows } from "react-icons/md";

export default function ChartTopbar() {
    return (
        <div className='flex justify-between items-start gap-5'>
            <div className="w-1/2">
                <h2 className='text-xl font-medium pb-2'>Apple (AAPL) Stock Buybacks</h2>
                <p className='text-sm '>Apple&apos;s advanced charting and technical analysis tool lets you customize your analysis with a wide range of studies and indicators, including Moving</p>
                <Link href={'/'} className='text-blue-600'>Read more...</Link>
            </div>
            <div className="flex items-center gap-4">
                <Button
                    variant={'outline'}
                    className='border-[#28A745] text-[#28A745] rounded-full w-44 h-12'>
                    <MdOutlineCompareArrows />
                    Compare
                </Button>
                <Button
                    variant={'outline'}
                    className='border-[#28A745] rounded-full w-44 h-12 bg-[#28A745] text-white'>
                    <Check />
                    Follow
                </Button>
                <Button
                    variant={'outline'}
                    className='border-[#28A745] rounded-full w-44 h-12 bg-[#28A745] text-white'>
                    <Check />
                    Portfolio
                </Button>
            </div>
        </div>
    )
}
