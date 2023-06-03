import React from 'react'
import hero from "../assets/WhatsApp Image 2023-06-02 at 5.25.28 AM.jpeg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b via-black from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row text-white'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold'>I'm a full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
                i have some experience in buildind and designing software,
                Currently , i love to work on web application using technologies 
                like React, tailwindcss, Nodejs and MongoDB 
            </p>
            <div>
                <Link to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <ArrowForwardIcon size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={hero} alt='' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
