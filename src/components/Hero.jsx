import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
          Welcome to the Saudi Museum
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
          Experience old cultures, from the down of human history to the present.</p>
          <button className='bg-white text-black '>Plan your visit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
