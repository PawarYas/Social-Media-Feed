import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'

const Profile = () => {
    return (
        <>
            <div>
                <span className="text-2xl font-semibold text-purple-500 drop-blur">Your Profile</span >
            </div>
            <section className=" bg-blueGray-50 text-white">
                <div className="w-full  px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg ">
                        <div className="px-6">

                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative drop-blur">
                                        <img src="https://www.nicepng.com/png/full/182-1829287_cammy-png.png" alt='Delivery' id='drop-shadow-img' className='h-48 w-48' />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <h3 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-2">
                                        Tina Singh
                                    </h3>

                                    <div className="mb-5 flex gap-3 text-sm leading-normal mt-5 text-blueGray-400 font-bold uppercase">
                                        <ImLocation2 className='text-xl  text-purple-500' />
                                        Delhi, India
                                    </div>

                                    <div className="text-white flex gap-2 mb-5">
                                        <BsBriefcaseFill className='text-xl  text-purple-500' />
                                        Full Stack Developer - Appsdeployer
                                    </div>

                                    <div className="text-white flex gap-2">
                                        <FaUniversity className='text-xl text-purple-500' />
                                        <span>University of Computer Science</span>
                                    </div>
                                </div>
                                <div className="w-full px-4 text-center mt-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-2">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                3
                                            </span>
                                            <span className="text-sm text-blueGray-400">Posts</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                10
                                            </span>
                                            <span className="text-sm text-blueGray-400">Followers</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                89
                                            </span>
                                            <span className="text-sm text-blueGray-400">Following</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="mx-2 flex flex-wrap text-white mt-10 mb-10 gap-5">

                    <div className="max-w-[16rem] rounded overflow-hidden shadow-lg lg:w-1/3 bg-[#2b2b2b54] hover:shadow-[#2a1738] ease-in-out duration-200 hover:shadow-lg hover:max-w-[16.5rem]">
                        <img className="w-full" src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1" alt="Post" />
                        <div className="px-2 py-4">
                            <div className="font-bold text-xl mb-2">Natural Water</div>
                            <p className="text-purple-700 text-base">
                                Pure Water without any Impurity
                            </p>
                        </div>
                        <div className="px-2 pt-4 pb-5">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#world</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#water</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
                        </div>
                    </div>

                    <div className="max-w-[16rem] rounded overflow-hidden shadow-lg lg:w-1/3 bg-[#2b2b2b54] 
                    hover:shadow-[#2a1738] ease-in-out duration-200 hover:shadow-lg hover:max-w-[16.5rem]">
                        <img className="w-full" src="https://th.bing.com/th/id/OIP.lP1ezZRvu9R1siy1XrntDAHaEK?pid=ImgDet&rs=1" alt="Post" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Stones & Water</div>
                            <p className="text-purple-700 text-base">
                                Pure Water and Stones
                            </p>
                        </div>
                        <div className="px-2 pt-4 pb-5">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#stones</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#water</span>
                        </div>
                    </div>




                    <div className="max-w-[16rem] rounded overflow-hidden shadow-lg lg:w-1/3 bg-[#2b2b2b54] 
                    hover:shadow-[#2a1738] ease-in-out duration-200 hover:shadow-lg hover:max-w-[16.5rem]">
                        <img className="w-full" src="https://th.bing.com/th/id/OIP.n-XF7gMdUlavVCtrfJeURwHaE8?pid=ImgDet&rs=1" alt="Post" />
                        <div className="px-2 py-4">
                            <div className="font-bold text-xl mb-2">Indian Tigers</div>
                            <p className="text-purple-700 text-base">
                                Tigers and Lions
                            </p>
                        </div>
                        <div className="px-2 pt-4 pb-5">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animals</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tigers</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile