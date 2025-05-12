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

// Dummy data array
const portfolioData = [
  {
    stockName: 'AAPL',
    logoSrc: '/images/murakkabs_portfolio_page/brandlogo.png',
    economicMoat: 'Strong',
    capitalAllocation: 'Excellent',
    uncertainty: 'Low',
    fairValue: '180',
    dividendYield: '0.5%',
    notificationDev: 'Yes',
  },
  {
    stockName: 'MSFT',
    logoSrc: '/images/murakkabs_portfolio_page/brandlogo.png',
    economicMoat: 'Wide',
    capitalAllocation: 'Good',
    uncertainty: 'Low',
    fairValue: '300',
    dividendYield: '0.8%',
    notificationDev: 'No',
  },
  {
    stockName: 'GOOGL',
    logoSrc: '/images/murakkabs_portfolio_page/brandlogo.png',
    economicMoat: 'Wide',
    capitalAllocation: 'Average',
    uncertainty: 'Medium',
    fairValue: '2500',
    dividendYield: 'N/A',
    notificationDev: 'Yes',
  },
  {
    stockName: 'AMZN',
    logoSrc: '/images/murakkabs_portfolio_page/brandlogo.png',
    economicMoat: 'Wide',
    capitalAllocation: 'High',
    uncertainty: 'Medium',
    fairValue: '4000',
    dividendYield: 'N/A',
    notificationDev: 'No',
  },
  {
    stockName: 'TSLA',
    logoSrc: '/images/murakkabs_portfolio_page/brandlogo.png',
    economicMoat: 'Narrow',
    capitalAllocation: 'Aggressive',
    uncertainty: 'High',
    fairValue: '800',
    dividendYield: 'N/A',
    notificationDev: 'Yes',
  },
];

export default function Portfolio() {
  return (
    <section className='py-16'>
      <div className="container mx-auto">
        <div className="px-3 py-2 rounded-2xl shadow-[0px_0px_5.5px_0px_#00000040]">
          <div className="py-2 px-3">
            <h2 className='text-2xl font-medium pb-4'>Olive Stock's Portfolio</h2>
          </div>
          <Table className=''>
            <TableHeader>
              <TableRow className='text-xs h-[70px] bg-[#EAF6EC]'>
                <TableHead className="text-start pl-10">Stock Name</TableHead>
                <TableHead className='text-center'>Economic Moat</TableHead>
                <TableHead className='text-center'>Capital Allocation</TableHead>
                <TableHead className='text-center'>Uncertainty</TableHead>
                <TableHead className='text-center'>Fair Value</TableHead>
                <TableHead className='text-center'>Dividend Yield</TableHead>
                <TableHead className="text-center">Notification/Dev</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioData.map((stock, index) => (
                <TableRow key={index} className='h-[90px]'>
                  <TableCell className="font-medium text-center pl-5">
                    <div className="flex gap-4 items-center justify-start">
                      <div className="h-[40px] w-[40px] p-3 rounded-full flex justify-center items-center bg-black">
                        <Image
                          src={stock.logoSrc}
                          alt='logo'
                          width={100}
                          height={100}
                          className='w-[30px] h-[30px] object-contain'
                        />
                      </div>
                      <div className="text-base text-center">
                        <h4>{stock.stockName}</h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='text-center text-xs'>{stock.economicMoat}</TableCell>
                  <TableCell className='text-center text-xs'>{stock.capitalAllocation}</TableCell>
                  <TableCell className='text-center text-xs'>{stock.uncertainty}</TableCell>
                  <TableCell className='text-center text-xs'>{stock.fairValue}</TableCell>
                  <TableCell className='text-center text-xs'>{stock.dividendYield}</TableCell>
                  <TableCell className="text-center text-xs">{stock.notificationDev}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}