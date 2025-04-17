import { PortfolioSidebar } from '@/components/Portfolio/PortfolioSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <div className="relative">
                    <div className="!w-[300px] absolute top-0 left-0">
                        <PortfolioSidebar />
                    </div>
                    <div className="flex justify-end lg:pr-24 mx-2 lg:mx-0">
                        <div className="lg:w-[82%]">
                            {children}
                            <Toaster />
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </>
    );
}