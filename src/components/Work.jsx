import React from 'react';
import zyngaLogo from '../assets/Zynga.png';
import postmanLogo from '../assets/postman.png';
import sprinklrLogo from '../assets/sprinklr.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Experience
          </p>
          <p className='py-6 text-2xl'>Check out some of my most experience in companies</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${zyngaLogo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Software Engineer 2
              </span>
              <p className='text-center'>Implemented multiplayer games feature using AWS lambda, SQS, python and C#.</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${sprinklrLogo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Product Engineer
              </span>
              <p className='text-center'>Implemented real time chat application UI with react js.</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${postmanLogo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Software Engineer
              </span>
              <p className='text-center'>Implemented custom version control system for postman entities from scratch.</p>
              <div className='pt-8 text-center'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;