import { PortfolioSidebar } from '@/components/Portfolio/PortfolioSidebar';
import type React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex">
                <PortfolioSidebar />
                <div className="">{children}</div>
            </div>
        </>
    );
}