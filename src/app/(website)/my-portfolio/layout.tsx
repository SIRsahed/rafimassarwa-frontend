import { PortfolioSidebar } from '@/components/Portfolio/PortfolioSidebar';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative">
                <div className="!w-[300px] absolute top-0 left-0">
                    <PortfolioSidebar />
                </div>
                <div className="flex justify-end pr-24">
                    <div className="w-[82%]">
                        {children}
                        <Toaster />
                    </div>
                </div>
            </div>
        </>
    );
}