import React, { useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { AiOutlineComment } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
// import { useSelector, useDispatch } from 'react-redux'
// import { DecrementValue, IncrementValue } from '../Redux/Actions'

const ProfileCard = (props) => {
    const [liked, SetLiked] = useState(false)
    const [count, SetCount] = useState(0);
    // const select = useSelector((state) => state.changeValue)
    // const dispatch = useDispatch()
    return (
        <>
            <div className='text-white m-5'>
                <div className="container mx-auto">
                    <div className="bg-[#2b2b2b54] rounded-lg shadow-md">
                        <div className="container mx-auto">
                            <div className=" rounded-lg shadow-md">
                                <div className="p-12">

                                    <img src={props.img} alt="Feed" className="w-full mt-4 rounded-lg" />
                                    <h2 className="text-2xl font-bold mt-3">{props.title}</h2>
                                    <p className="text-md text-purple-600 mt-2">{props.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        {!liked  ?
                                            <button className="flex items-center text-white" onClick={() => {
                                                SetLiked(true)
                                                SetCount(count + 1)
                                            }}>
                                                <AiTwotoneHeart className='text-3xl mr-2' />
                                                {count} Likes
                                            </button> :
                                            <button className="flex items-center text-red-600" onClick={() => {
                                                SetCount(count - 1)
                                                SetLiked(false)
                                            }}>
                                                <AiTwotoneHeart className='text-3xl mr-2' />
                                                {count} Likes
                                            </button>
                                        }
                                        {/* <span className='text-gray-600'>Likes</span> */}
                                        <button className="flex items-center text-white">
                                            <AiOutlineComment className='text-3xl mr-2' />
                                            Comments
                                        </button>

                                        <button className="flex items-center text-white">
                                            <BsFillSendFill className='text-2xl mr-2' />
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard