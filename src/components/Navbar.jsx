import React, { useState, useCallback } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className='fixed top-0 w-full'>
      <div className='sticky h-20 top-0 text-white bg-[#0a192f]'>
        <ul className='flex justify-center items-center h-full'>
          <li className='hover:bg-[#055b87] rounded'>
            <Link to='home'>
              Home
            </Link>
          </li>
          <li className='hover:bg-[#055b87] rounded'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:bg-[#055b87] rounded'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:bg-[#055b87] rounded'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
        </ul>
      </div>
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300'>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/hardik-ghusar-a067a0148/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ghusar'
              target='_blank'
              rel='noopener noreferrer'
            >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='mailto:ghusarhardikr@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1PKO6kBQY6-eR-APCrYwmqw3NaQCF-yuA/view?usp=share_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};
export default Navbar;