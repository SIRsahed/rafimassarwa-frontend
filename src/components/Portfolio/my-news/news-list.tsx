import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { LuSearch } from "react-icons/lu";



export default function NewsList() {

    const dummyData = [
        {
            date: '2d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '2d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '3d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '4d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '4d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
        {
            date: '5d ago',
            ticker: 'AAPL',
            article: 'Microsoft Stock (MSFT) Narrowly Avoids Eight-Week Losing Streak',
        },
    ];
    return (
        <div className='p-2 shadow-[0px_0px_8px_0px_#00000029]'>
            <div className="mb-4">
                <h2 className='text-[32px] font-semibold pb-4'>Portfolio News</h2>
                <h5 className='text-xl font-semibold pb-4'>Related News</h5>
                <Progress value={48} className='mb-4 h-[5px] bg-[#999999]' />
                <div className="relative w-[70%] inline-block">
                    <Input type="search" className='border border-[#28A745] h-12 rounded-3xl pl-6' placeholder="Search any Stock....." />
                    <LuSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-xl'/>
                </div>
            </div>
            <Table>
                <TableHeader className='[&_tr]:border-b-0'>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Ticker</TableHead>
                        <TableHead>Article</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dummyData.map((data) => (
                        <TableRow key={data.date} className='border-b-0'>
                            <TableCell className="font-medium">{data.date}</TableCell>
                            <TableCell>{data.ticker}</TableCell>
                            <TableCell>{data.article}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
