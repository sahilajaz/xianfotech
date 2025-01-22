import React from 'react';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full bg-navbarColor">
      <div className='w-full px-10 py-2 flex justify-between items-center'>
        <img src="logo.png" alt="logo" className="w-[169px] h-auto" />
        <div className='flex  gap-3 '>
            <CustomButton
                title="Login"
            />
            <button className='text-[#FFFFFF] border border-[#FFFFFF] rounded-sm py-1 px-6 text-[15px] w-[115.4px]'>Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
