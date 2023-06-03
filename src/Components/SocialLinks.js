import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/DennisMatenge',
      style: 'rounded-tr-md',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
      style: 'rounded-tr-md',
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaLinkedinIn size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className='flex flex-col fixed top-[35%] left-0'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md 
            duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
              rel='noopener noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
