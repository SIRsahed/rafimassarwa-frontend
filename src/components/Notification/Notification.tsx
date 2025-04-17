"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("today")

  const notifications = [
    {
      id: 1,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 2,
      avatar: "https://img.icons8.com/?size=48&id=s-N8pcnbC5So&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: false,
    },
    {
      id: 3,
      avatar: "https://img.icons8.com/?size=48&id=s-N8pcnbC5So&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 4,
      avatar: "https://img.icons8.com/?size=48&id=s-N8pcnbC5So&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: false,
    },
    {
      id: 5,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 6,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: false,
    },
    {
      id: 7,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 8,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: false,
    },
    {
      id: 9,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 10,
      avatar: "https://img.icons8.com/?size=48&id=80976&format=png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem et maximus nec malesuada vitae, volutpat sed ipsum. Sed nec magna et ex mattis interdum. Integer vehicula mattis sapien. Vivamus vel leo, volutpat sed augue molestie, tristique et dolor. Quisque ac molestie urna. Proin vitae condimentum mauris. Aliquam nec vulputate nunc.",
      time: "1hr ago",
      unread: false,
    },
  ]

  return (
    <div className=" container mx-auto px-6 py-4 mt-28">
      <h1 className="text-4xl font-bold mb-5 text-center">Notifications</h1>

      <div className="border-b mb-2">
        <div className="flex text-sm">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "today" ? "text-green-500 border-b-2 border-sky-300" : "text-gray-600"}`}
            onClick={() => setActiveTab("today")}
          >
            Today (5)
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "previous" ? "text-green-500 border-b-2 border-sky-300" : "text-gray-600"}`}
            onClick={() => setActiveTab("previous")}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "mark" ? "text-green-500 border-b-2 border-sky-300" : "text-gray-600"}`}
            onClick={() => setActiveTab("mark")}
          >
            Mark as read
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "clear" ? " border-b-2 border-sky-300 text-red-500" : "text-red-600"}`}
            onClick={() => setActiveTab("clear")}
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="space-y-0">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center gap-1 py-4 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer transition-all duration-300">
            {notification.unread 
            ?
            (
              <div className=" w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            ) :      
            (
              <div className=" w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            )
            }
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <Image
                src={notification.avatar}
                width={800}
                height={600}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 pr-8 line-clamp-2">{notification.message}</p>
            </div>

            <div className="flex flex-col gap-4 items-end">
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                    <MoreHorizontal className="h-5 w-5" />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
