import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>About us</h6>
          <ul>
            <li className='py-1'>Governance
            </li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>story
            </li>
            <li className='py-1'>Contact us</li>
            <li className='py-1'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Visit</h6>
          <ul>
            <li className='py-1'>Museum map
            </li>
            <li className='py-1'>Exhibitions and events
            </li>
            <li className='py-1'>Accessibility
            </li>
            <li className='py-1'>Audio guide</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Our work
          </h6>
          <ul>
            <li className='py-1'>Departments
            </li>
            <li className='py-1'>National
            </li>
            <li className='py-1'>International
            </li>
            <li className='py-1'>How to borrow</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Resources
          </h6>
          <ul>
            <li className='py-1'>Study rooms
            </li>
            <li className='py-1'>Library</li>
            <li className='py-1'>archive</li>
            <li className='py-1'>Search the collection
            </li>
            <li className='py-1'>Blog</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest news, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Experiences, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
