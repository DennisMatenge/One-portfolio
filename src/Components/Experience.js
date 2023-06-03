import React from 'react'
import nextjs from "../assets/nextjsicon.png";
import html from "../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/CSS3_logo_and_wordmark.svg.png";
import reactimg from "../assets/React-icon.svg.png";
import graphqp from "../assets/GraphQL_Logo.svg.png";
import github from "../assets/GitHub-Mark.png";
import java from "../assets/javascript.jpg";
import tailwind from "../assets/tailwind-css-logo-vector.png";

const Experience = () => {

    const datas = [
        {
            id: 1,
            src: css,
            title: "CSS",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: html,
            title: "HTML",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: java,
            title: "JAVASCRIPT",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimg,
            title: "REACT",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: "NEXT JS",
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphqp,
            title: "GRAPHQL",
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: github,
            title: "GITHUB",
            style: 'shadow-gray-400'
        },
    ];

  return (
    <div name="experince" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div className=''>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'> These are the technologies i have worked with</p>
        </div>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        { datas.map(({ id, src, title, style})=>(
            <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
            <img src={src} alt='' className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Experience
