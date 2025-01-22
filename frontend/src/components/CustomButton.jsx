import React from 'react'

const CustomButton = ({title , type = "" }) => {
  return (
    <button type={`${type}`} className="bg-[#FFFFFF]  text-navbarColor border border-sm py-1 px-7 text-[15px] w-[115.4px]">
      {title}
    </button>
  )
}

export default CustomButton
