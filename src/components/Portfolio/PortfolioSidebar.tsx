"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarItem {
  icon: React.ReactNode
  label: string
  href: string
}

export function PortfolioSidebar() {
  const pathname = usePathname()

  const sidebarItems: SidebarItem[] = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="3" y="11" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="11" y="3" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="11" y="11" width="6" height="6" rx="1" fill="currentColor" />
        </svg>
      ),
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M16 15C16 11.6863 13.3137 9 10 9C6.68629 9 4 11.6863 4 15V16H16V15Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      label: "My Account",
      href: "/account",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 10L10 5L5 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10 15V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Performance",
      href: "/performance",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 7H17" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      label: "My News",
      href: "/news",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16H4V8H16V16Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M7 4L10 7L13 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Analysis",
      href: "/analysis",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      label: "My Calendar",
      href: "/calendar",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 14L7 10L10 13L17 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 6H17V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Chart",
      href: "/chart",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M10 6L14 10L10 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      label: "Refer with friends",
      href: "/refer",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M13 7C13 5.89543 13.8954 5 15 5C16.1046 5 17 5.89543 17 7C17 8.10457 16.1046 9 15 9C13.8954 9 13 8.10457 13 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13C7 14.1046 6.10457 15 5 15C3.89543 15 3 14.1046 3 13Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      label: "Influencers",
      href: "/influencers",
    },
  ]

  return (
    <div className="w-[220px] min-h-screen border-r bg-white">
      <div className="flex flex-col h-full">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 p-4 border-b">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-700">
              <path
                d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
                fill="white"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d="M14.8284 9.17157L9.17157 14.8284"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.17157 9.17157L14.8284 14.8284"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black">Smart</span>
            <span className="text-base font-bold text-black">Portfolio</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    )}
                  >
                    <span className={cn("", isActive ? "text-green-600" : "text-gray-500")}>{item.icon}</span>
                    <span>{item.label}</span>
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
