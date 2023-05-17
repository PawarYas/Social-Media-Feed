import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <nav className="relative flex w-full flex-wrap items-center justify-between py-3 lg:py-4 fixed-top mb-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div>
                        <span className="text-3xl font-semibold text-purple-500 drop-blur">Social-Desk</span >
                    </div>
                    <NavLink to={"/user-profile"}><FaUserAlt className="drop-blur h-8 text-6xl p-1 text-white  hover:text-purple-500 ease-in-out duration-200" title='Profile' /></NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header