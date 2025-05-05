import { PortfolioSidebar } from '@/components/Portfolio/PortfolioSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <div className="relative">
                    <SidebarTrigger className="lg:hidden mt-2 ml-1" />
                    <div className="">
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