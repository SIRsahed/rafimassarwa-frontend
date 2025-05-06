import Image from "next/image"

interface UserProfileProps {
    name: string
    portfolioDate: string
    rank: number
    totalInvestors: number
    platform: string
    profileImage?: string
    isRanked?: boolean
}

export function UserProfile({
    name,
    portfolioDate,
    rank,
    totalInvestors,
    platform,
    profileImage = "/images/user.png",
    isRanked = false,
}: UserProfileProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-200">
                    <Image src={profileImage || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600 mt-1">New Portfolio {portfolioDate}</p>

                <div className="flex items-center mt-2 gap-1">
                    <span className="text-xs text-gray-500">{isRanked ? "★" : "☆"}</span>
                    <span className="text-xs text-gray-500">{isRanked ? "Ranked" : "Not Ranked"}</span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                    Ranked #{rank} out of {totalInvestors.toLocaleString()} {platform}&apos;s Investors
                </p>
            </div>
        </div>
    )
}
