import React from 'react'
import node from "../assets/Node.js_logo.svg.png";
import react from "../assets/react.png";
import nodeEx from "../assets/node+express.webp";
import nextjs from "../assets/nexts.png";
import vue from "../assets/vue.webp";
import java from "../assets/java.png"; 

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src:node
        },
        {
            id: 2,
            src:react
        },
        {
            id: 3,
            src:nodeEx
        },
        {
            id: 4,
            src:nextjs
        },
        {
            id: 5,
            src:vue
        },
        {
            id: 6,
            src:java
        },
    ]; 
    
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 

        { portfolios.map(({id, src})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
            <div>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
        </div>
        ))}
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
