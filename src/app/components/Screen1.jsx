import React from 'react';
import Image from 'next/image';
import ImgScreen1 from '../assets/image-screen-1.png';

function Screen1() {
  return (
    <div className='bg-[#68C7FF]'>
      <div className='flex items-center min-h-[700px]'>
        <div className='w-[50%]'>
          <Image
            className='ml-6'
            src={ImgScreen1}
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col items-center w-[50%]'>
          <h5 className='text-red-500 bg-white py-2 px-5'>DEMPSEY + DELTA</h5>
          <h3 className='text-sky-900 text-[50px] font-semibold text-center'>
            Sustainability Initiatives
          </h3>
          <h6 className='text-black mt-10'>Sustainable Progress Goals</h6>
          <h6 className='text-black'>Report December 2025</h6>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
