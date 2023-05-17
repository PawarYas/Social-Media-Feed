import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import {BsSearchHeartFill} from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import {IoIosAddCircle} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="max-w-screen-xl py-2 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 data-fixed">
                <div className="flex justify-center py-4 space-x-6 rounded-lg bg-purple-500 gap-20 md:gap-10">
                    <Link to={"/"} >
                        <AiFillHome className='text-white text-3xl  hover:text-purple-800 ease-in-out duration-200' />
                    </Link>
                    <Link to={"/discover"} >
                        <BsSearchHeartFill className='text-white text-3xl hover:text-purple-800 ease-in-out duration-200' />
                    </Link>
                    <Link to={"/post"} >
                        <IoIosAddCircle className='text-white text-3xl hover:text-purple-800 ease-in-out duration-200'  />
                    </Link>
                    <Link to={"/user-profile"} >
                        <FaUserAlt className='text-white text-3xl hover:text-purple-800 ease-in-out duration-200'  />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer