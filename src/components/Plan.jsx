import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/202005/000-204294271590661327757.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/202005/000-834943481590661315418.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.almosaferoon.com/wp-content/uploads/2020/06/b5ff3f25-755f-4bf2-97b0-46343fe1ff53.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://upload.wikimedia.org/wikipedia/commons/4/48/Pergamon-Museum_-_Anthropomorphe_Stele_2.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/202005/000-7788528591590661322593.jpg'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Explore the oldest in the world</h3>
        <p className='text-2xl py-6'>
        The Saudi Museum is unique in bringing together under one roof the cultures of the world, spanning continents and oceans.

        </p>
        <p className='pb-6'>
        Its objects allow us to explore the extraordinary diversity of human cultures, 
        from small communities to vast empires, to discover the many forms and expressions 
        human beings have given to every aspect of life, and to realize how close 
        they are interconnected.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
