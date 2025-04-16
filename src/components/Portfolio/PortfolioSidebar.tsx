"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GoDesktopDownload, GoPeople } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FaRegCalendarAlt, FaChartLine } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import Image from "next/image"



interface SidebarItem {
  icon: React.ReactNode
  label: string
  href: string
}

export function PortfolioSidebar() {
  const pathname = usePathname()

  const sidebarItems: SidebarItem[] = [
    {
      icon: <GoDesktopDownload />,
      label: "Portfolio",
      href: "/my-portfolio",
    },
    {
      icon: <MdOutlineAccountCircle />,
      label: "My Account",
      href: "/my-portfolio/my-account",
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
      icon: <FaChartLine />,
      label: "Chart",
      href: "/my-portfolio/chart",
    },
    {
      icon: <CiShare1 />,
      label: "Refer with friends",
      href: "/my-portfolio/refer",
    },
    {
      icon: <GoPeople />,
      label: "Influencers",
      href: "/my-portfolio/influencers",
    },
  ]

  return (
    <div className="bg-white mt-36 shadow-[2px_0px_8px_0px_#00000029]">
      <div className="flex flex-col">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 p-4 border-b">
          <Image 
            src="/images/Stock-logo-1.png"
            alt="Logo"
            width={350}
            height={150}
            className="w-20 h-16 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-base font-medium text-black">Smart</span>
            <span className="text-xl font-medium text-black">Portfolio</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 shadow-[2px_0px_8px_0px_#00000029]">
          <ul className="">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-7 py-4 text-xl",
                      isActive ? "bg-[#EAF6EC] text-[#28A745] relative after:absolute after:h-full after:w-1 after:bg-[#28A745] after:right-0 after:top-0" : "text-[#4E4E4E] hover:text-gray-900",
                    )}
                  >
                    <span className={cn("h-8 w-8 rounded-md flex justify-center items-center p-1 border", isActive ? "text-[#28A745] border-[#28A745]" : "text-gray-500")}>{item.icon}</span>
                    <span className={cn("text-xs font-semibold", isActive ? "text-[#28A745]" : "")}>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
