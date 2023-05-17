import React from 'react'
import ProfileCard from '../Components/ProfileCard'
// import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  // const select = useSelector((state) => state.changeValue)
  // const dispatch = useDispatch()
  return (
    <>
      <div>
        <span className="text-5xl font-semibold text-purple-500 drop-blur">Social-Desk</span >
        <span className='text-md text-white ml-2'>Connecting People</span>
      </div>


      <div className='text-white m-5'>
        <div className="container mx-auto">
          <div className="bg-[#2b2b2b54] rounded-lg shadow-md">
            <div className="container mx-auto">
              <div className=" rounded-lg shadow-md">
                <div className="p-12">
                  <div className='flex gap-4'>
                    <img src="https://www.nicepng.com/png/full/182-1829287_cammy-png.png" className='h-16 w-16 drop-blur' alt='' />
                    <span className='text-2xl text-purple-500 mt-7'>Share Your Thoughts!!</span>
                  </div>
                  <div className=' mt-4'>
                    <input type="text" id="title" name="title" className="w-full mt-5 px-2 py-2 border border-purple-900 rounded-md focus:outline-none focus:border-purple-500 text-black" placeholder="Enter title" required />
                    <textarea type="text" id="description" name="description" className="w-full mt-5 px-2 py-2 border border-purple-900 rounded-md focus:outline-none focus:border-purple-500 text-black" placeholder="Enter Description" required />
                  </div>

                  <div className="flex justify-between mt-5">
                    <input type="file" id="image" name="image" className="w-full" />
                    <button type="submit" className="bg-purple-700 text-md hover:bg-purple-600 text-white font-semibold py-2 px-2 rounded">Post</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <ProfileCard title="Natural Water" description="Pure Water without any Impurity" img={"https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"} />

      <ProfileCard title="Stones & Water" description="Pure Water and Stones" img={"https://th.bing.com/th/id/OIP.lP1ezZRvu9R1siy1XrntDAHaEK?pid=ImgDet&rs=1"} />

      <ProfileCard title="Indian Tiger" description="Tigers and Lions" img={"https://th.bing.com/th/id/OIP.n-XF7gMdUlavVCtrfJeURwHaE8?pid=ImgDet&rs=1"} />
    </>
  )
}

export default Home