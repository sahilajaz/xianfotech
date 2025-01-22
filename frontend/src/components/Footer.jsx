import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[330px] flex flex-col justify-center items-center bg-navbarColor mt-20'>
        <div className='grid grid-cols-3 justify-center items-center px-10   py-10'>
            <div className='flex flex-col justify-center '>
                <img src='logo.png' alt='logo' className='w-[279px] h-[117px] ml-10'/>
                <p className='text-textColor font-serif text-[16px] px-10 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.</p>
            </div>
            <div className='flex flex-col gap-3 ml-32'>
                <h1 className='text-[22px] text-textColor'>Important Links</h1>
                <a href='#' className='text-[16px] text-textColor'>Contact Us</a>
                <a href='#' className='text-[16px] text-textColor'>Privacy Policy</a>
            </div>
            <div className='flex flex-col gap-3 ml-20'>
                <p  className='text-[16px] text-textColor'>Terms & Conditions</p>
                <p  className='text-[16x] text-textColor'>Contact Support</p>
                <div className='socail-medias flex gap-3'>
                    <div className='w-7 border border-textColor px-2 py-1'>
                    <a href='#'><img src='fb.png'/></a>
                    </div>
                    <a href='#'><img src='inta.png'/></a>
                    <a href='#'><img src='link.png'/></a>
                </div>
            </div>
        </div>
        <div className='w-[1440px] ml-6 border-t border-textColor text-center'/>
       <div className='w-full text-center'>
       <p className='text-textColor text-[18px] mt-7'>Copyright © 2025. All rights reserved.</p>
       </div>
    </footer>
  )
}

export default Footer
