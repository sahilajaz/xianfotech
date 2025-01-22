import React, { useState } from 'react'
import { sidebarOptions } from '../constants'
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('User List')

  return (
    <section className='py-6 '>
        <div className='w-full'>
            <img src='logo.png' alt='logo' className='mb-10 px-10'/>
            {
                sidebarOptions.map((el , idx) => (
                    <ul key={idx} className='w-full flex'>
                          <li className={`w-[270px] px-5 py-2  ${activeTab === el.option ? 'bg-white border-t border-b rounded-t-sm rounded-b-sm  shadow-lg' : ''}`}>
                            <Link to={el.path}  onClick={() => setActiveTab(el.option)} className={`text-[25px]  ${activeTab === el.option ? 'text-bgColor' : 'text-white'} `}>{el.option}</Link>
                            </li>  
                    </ul>
                ))
            }
        </div>
    </section>
  )
}

export default SideBar
