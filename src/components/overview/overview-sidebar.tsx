"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { GoDesktopDownload, GoPeople } from "react-icons/go";
import { MdOutlineAccountCircle, MdOutlineSupportAgent } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChartArea, ChartBar } from "lucide-react";



interface SidebarItem {
    icon: React.ReactNode
    label: string
    href: string
}

export function OverviewSidebar() {
    const pathname = usePathname()

    const sidebarItems: SidebarItem[] = [
        {
            icon: <ChartBar />,
            label: "Overview",
            href: "/overview",
        },
        {
            icon: <MdOutlineAccountCircle />,
            label: "Analyst Forecasts",
            href: "/overview/analyst-forecasts",
        },
        {
            icon: <GoDesktopDownload />,
            label: "Download/my-account",
            href: "/overview/download-my-account",
        },
        {
            icon: <IoIosStarHalf />,
            label: "Performance",
            href: "/my-portfolio/performance",
        },
        {
            icon: <RiNewspaperLine />,
            label: "My News",
            href: "/my-portfolio/my-news",
        },
        {
            icon: <SiSimpleanalytics />,
            label: "Analysis",
            href: "/my-portfolio/analysis",
        },
        {
            icon: <FaRegCalendarAlt />,
            label: "My Calendar",
            href: "/my-portfolio/calendar",
        },
        {
            icon: <ChartArea />,
            label: "Chart",
            href: "/overview/chart",
        },
        {
            icon: <GoPeople />,
            label: "Influencers",
            href: "/my-portfolio/influencers",
        },
        {
            icon: <MdOutlineSupportAgent />,
            label: "Support",
            href: "/my-portfolio/support",
        }
    ]

    return (
        <Sidebar className="max-h-lvh z-40  shadow-[2px_0px_8px_0px_#00000029]">
            <SidebarContent>
                <SidebarGroup className="p-0">
                    <SidebarGroupLabel className="flex items-center gap-2 py-[44px]">
                        <Image
                            src="/images/Stock-logo-1.png"
                            alt="Logo"
                            width={350}
                            height={150}
                            className="w-20 h-16 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-black">AAPL</span>
                            <span className="text-xl font-medium text-black">Apple</span>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="pt-4 border-t">
                        <SidebarMenu className="gap-0">
                            {sidebarItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-7 py-8 text-xl rounded-none",
                                                    isActive ? "bg-[#EAF6EC] text-[#28A745] relative after:absolute after:h-full after:w-1 after:bg-[#28A745] after:right-0 after:top-0" : "text-[#4E4E4E] hover:text-gray-900",
                                                )}
                                            >
                                                <span className={cn("h-8 w-8 rounded-md flex justify-center items-center p-1 border", isActive ? "text-[#28A745] border-[#28A745]" : "text-gray-500")}>{item.icon}</span>
                                                <span className={cn("text-xs font-semibold", isActive ? "text-[#28A745]" : "")}>{item.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>

    )
}
