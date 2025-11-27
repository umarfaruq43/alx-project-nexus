import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';


const Header: React.FC = () => {
  return (
    <header className='border-b border-[#E6E6E6]'>
      <div className=' bg-[#34967c]'>
        <div className=' flex items-center justify-between md:justify-center bg-[#34967c] w-[95%] md:w-full mx-auto gap-4 min-h-[27px]'>
          <Image
            src='/icons/Case Minimalistic.png'
            alt='Case-image'
            width={15}
            height={15}
          />
          <p className='text-xs text-white'>
            Overseas trip? Get the latest information{' '}
            <br className='sm:hidden' /> on travel guides
          </p>
          <Button
            className='bg-black px-2 py-0.5 rounded-full text-white text-xs'
            label='More Info'
            onClick={() => {
              /* handle search click */
            }}
          />
        </div>
      </div>

      <section className='bg-[#ffffff] '>
        {/* Naviagtion & Search Bar */}
        <div className='flex flex-row py-2 items-center justify-between w-[95%] mx-auto '>
          {/* Logo */}
          <div className='hidden md:flex flex-shrink-0'>
            <Image
              src='/icons/Vector.png'
              alt='Alx-logo'
              width={58.73}
              height={30.6}
            />
          </div>

          {/* Search Bar for Mobile screens */}
          <div className='flex justify-between items-center md:hidden  w-full '>
            <div className='flex items-center space-x-1 border border-[#E9E9E9] rounded-full w-auto'>
              <div className='flex flex-col items-center '>
                <label htmlFor='Location' className='text-xs'>
                  Where to
                </label>
                <input
                  id='Location'
                  type='text'
                  placeholder='Location'
                  className=' w-[70px] text-xs ml-4 outline-none'
                />
              </div>

              <div>
                <input
                  id='Day'
                  type='text'
                  placeholder='Date'
                  className='w-[70px] text-xs mt-4.5 outline-none'
                />
              </div>
              <div className='flex '>
                <input
                  id='People'
                  type='text'
                  placeholder='Add guest'
                  className='w-[70px] text-xs mt-4 outline-none'
                />
              </div>

              <div className='flex items-center pr-1'>
                <Button
                  icon={
                    <Image
                      src='/icons/Frame 22.png'
                      alt='Search-icon'
                      width={34}
                      height={34}
                    />
                  }
                  className='w-[42px] h-[42px]'
                  label='Search'
                  onClick={() => {
                    /* handle search click */
                  }}
                />
              </div>
            </div>
          </div>

          {/* Search Bar For Bigger screens */}
          <div
            className='hidden md:flex flex-row items-center justify-center
                  border border-[#E9E9E9] rounded-full bg-white
                   sm:w-auto px-4 py-3 sm:py-2 gap-3 sm:gap-5'
          >
            {/* Location */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Location'
                className='text-black text-sm hidden sm:block'
              >
                Location
              </label>
              <input
                id='Location'
                type='text'
                placeholder='Search for destination'
                className='
                    text-black w-full sm:w-[170px] text-sm sm:text-xs outline-none 
                     border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
                             '
              />
            </div>

            {/* Check in */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Checkin'
                className='text-black text-sm hidden sm:block'
              >
                Check in
              </label>
              <input
                id='Checkin'
                type='text'
                placeholder='Add date'
                className='
            text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
            border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
              '
              />
            </div>

            {/* Check out */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Checkout'
                className='text-black text-sm hidden sm:block'
              >
                Check out
              </label>
              <input
                id='Checkout'
                type='text'
                placeholder='Add date'
                className='
            text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
            border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
            '
              />
            </div>

            {/* People */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='People'
                className='text-black text-sm hidden sm:block'
              >
                People
              </label>
              <input
                id='People'
                type='text'
                placeholder='Add guest'
                className='
            text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
            border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
              '
              />
            </div>

            {/* Search Button */}
            <div>
              {' '}
              <Button
                icon={
                  <Image
                    src='/icons/Frame 22.png'
                    alt='Search-icon'
                    width={42}
                    height={42}
                  />
                }
                className='w-[42px] h-[42px]'
                label='Search'
                onClick={() => {
                  /* handle search click */
                }}
              />{' '}
            </div>
          </div>

          {/* Sign in/up Buttons */}
          <div className='hidden lg:flex gap-2 text-xs mt-4 md:mt-0'>
            <Button
              label='Sign in'
              className='border border-[#E9E9E9] bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#34967C] hover:text-white transition-colors duration-300'
              onClick={() => {
                /* handle sign in click */
              }}
            />

            <Button
              label='Sign up'
              className='border border-[#E9E9E9] bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#34967C] hover:text-white transition-colors duration-300'
              onClick={() => {
                /* handle sign up click */
              }}
            />
          </div>

          <div className='flex lg:hidden '>
            <Image
              src='/icons/Frame 8.png'
              alt='Profile'
              width={38}
              height={38}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
