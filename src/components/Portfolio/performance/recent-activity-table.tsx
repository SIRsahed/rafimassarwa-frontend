import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi'; // Assuming you have react-icons installed

// Dummy data array for the new table
const transactionData = [
    {
        companyName: 'AAPL',
        logoSrc: '/images/murakkabs_portfolio_page/apple_logo.png', // Replace with the correct Apple logo path
        percentageOfPortfolio: '100%',
        return: -3.2,
        noOfTransactions: 1,
        lastTransaction: 'Open',
        date: 'Mar 08, 2025',
    },
    {
        companyName: 'CQML',
        logoSrc: '/images/murakkabs_portfolio_page/apple_logo.png',
        percentageOfPortfolio: '100%',
        return: -3.2,
        noOfTransactions: 1,
        lastTransaction: 'Open',
        date: 'Mar 08, 2025',
    },
    {
        companyName: 'ACD',
        logoSrc: '/images/murakkabs_portfolio_page/apple_logo.png',
        percentageOfPortfolio: '100%',
        return: -3.2,
        noOfTransactions: 1,
        lastTransaction: 'Open',
        date: 'Mar 08, 2025',
    },
    {
        companyName: 'MSFT',
        logoSrc: '/images/murakkabs_portfolio_page/apple_logo.png',
        percentageOfPortfolio: '100%',
        return: -3.2,
        noOfTransactions: 1,
        lastTransaction: 'Open',
        date: 'Mar 08, 2025',
    },
    // Add more data as needed
];

export default function RecentActivityTable() {
    return (
        <div className="px-3 py-2 rounded-2xl shadow-[0px_0px_16px_0px_#00000029] overflow-x-scroll lg:overflow-x-auto">
            <div className="py-2 px-3">
                <h2 className='text-2xl font-medium pb-4'>Transaction History</h2> {/* Updated title */}
            </div>
            <Table className='min-w-[600px]'>
                <TableHeader>
                    <TableRow className='text-xs h-[70px] bg-[#EAF6EC]'>
                        <TableHead className="text-left">Company Name</TableHead>
                        <TableHead className='text-center'>% of Portfolio</TableHead>
                        <TableHead className='text-center'>Return</TableHead>
                        <TableHead className='text-center'>No. of Transactions</TableHead>
                        <TableHead className='text-center'>Last Transaction</TableHead>
                        <TableHead className='text-center'>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactionData.map((transaction, index) => (
                        <TableRow key={index} className='h-[70px]'>
                            <TableCell className="font-medium text-center">
                                <div className="flex gap-4 items-center">
                                    <div className="h-[30px] w-[30px] p-1 rounded-full flex justify-center items-center bg-gray-100">
                                        <Image
                                            src={transaction.logoSrc}
                                            alt={transaction.companyName}
                                            width={100}
                                            height={100}
                                            className='w-[20px] h-[20px] object-contain'
                                        />
                                    </div>
                                    <div className="text-base">
                                        <h4>{transaction.companyName}</h4>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className='text-center text-sm'>{transaction.percentageOfPortfolio}</TableCell>
                            <TableCell className='text-sm text-red-500'>
                                <div className=" flex items-center justify-center gap-1">
                                    <FiArrowDown />
                                    {transaction.return}%
                                </div>
                            </TableCell>
                            <TableCell className='text-center text-sm'>{transaction.noOfTransactions}</TableCell>
                            <TableCell className='text-center text-sm'>{transaction.lastTransaction}</TableCell>
                            <TableCell className='text-center text-sm'>{transaction.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}