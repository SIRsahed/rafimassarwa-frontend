import PersonalDetails from '@/components/Portfolio/my-acccount/personal-details'
import ProfileInfo from '@/components/Portfolio/my-acccount/profile-info'
import React from 'react'

export default function page() {
    return (
        <div className='lg:w-[95%]'>
            <ProfileInfo />
            <PersonalDetails />
        </div>
    )
}
