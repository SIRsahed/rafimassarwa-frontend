import Image from 'next/image'
import { CiEdit } from "react-icons/ci";


export default function ProfileInfo() {


    const user = {
        avatar: "/images/my_portfolio_page/user.png",
        fullname: "Alex Mitchell",
        email: "alex.mitchell@example.com",
        startDate: "April 2023"
    }


    return (
        <div className="w-full mb-12">
            <div className="flex md:flex-row flex-col gap-4 lg:gap-0 md:justify-between lg:items-center lg:mt-20 mt-4 rounded-xl py-4 px-4 shadow-[0px_0px_8px_0px_#00000029]">
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <Image
                            src={user.avatar}
                            alt={`${user.fullname}`}
                            width={1000}
                            height={600}
                            className='w-24 h-24 rounded-full'
                        />
                        <div className="h-7 w-7 rounded-full bg-[#28A745] flex justify-center items-center text-white absolute right-1 bottom-0">
                            <CiEdit />
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-xl font-semibold pb-2'>{user.fullname}</h3>
                        <div className="text-[#595959] text-sm">
                            <h5>{user.email}</h5>
                            <p>Member since {user.startDate}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 pr-12 bg-[#EAF6EC] rounded-xl text-[#28A745]">
                    <h3 className='text-xs pb-1'>Portfolio Value</h3>
                    <h2 className='text-lg font-semibold pb-1'>$124,578.35</h2>
                    <div className="flex gap-2 items-center">
                        <span className='text-[#2695FF]'>+2.4%</span>
                        <span>today</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
