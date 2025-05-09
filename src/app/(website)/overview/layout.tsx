import { OverviewSidebar } from '@/components/overview/overview-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <div className="">
                    <SidebarTrigger className="lg:hidden mt-2 ml-1" />
                    <div className="">
                        <OverviewSidebar />
                    </div>
                    <div className="lg:flex lg:justify-end mx-2 lg:mx-0">
                        <div className="lg:ml-72 lg:my-20 my-8">
                            {children}
                            <Toaster />
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </>
    );
}