import React, { useEffect, useState } from 'react'
import Model from './Model'

const DashBoard = () => {
  const [data , setData] = useState()
  const[name , SetName] = useState('')
  const [selectedUser, setSelectedUser] = useState(null);
  const[isModelOpen , setIsModelOpen] = useState(false)
  const[filteredData , setFilteredData] = useState()
  const baseUrl = 'http://localhost:5000/api/v1'

  const fetchData = async () => {
      const response = await fetch(`${baseUrl}/getall`)
      const data = await response.json()
      setData(data.data)
  }

  useEffect(() => {
    fetchData()
  } , [])
   
  const capitalizeString = (str) => {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' ')
  }

const handleSumbit = async (e) => {
  e.preventDefault()
  const response = await fetch(`${baseUrl}/getbyname/Sophia%20Turner`)
  const capitalizedName = capitalizeString(name)
  try {
    const response = await fetch(`${baseUrl}/getbyname/${encodeURIComponent(capitalizedName)}`)
    const data = await response.json()
    setFilteredData(data.data)
    console.error('Error fetching data:', error)
  } catch (error) {
    
  }
}

const UserData = () => (
  <table className='w-full table-auto  border-spacing-4'>
                  <thead className='text-center'>
                    <tr>
                      <th className='py-5 border-b'>Name</th>
                      <th className='py-5 border-b'>Email</th>
                      <th className='py-5 border-b'>Phone</th>
                      <th className='py-5 border-b'>Status</th>
                      <th className='py-5 border-b'>View</th>
                    </tr> 
                  </thead>
                  <tbody>
                  {data?.map((user, index) => (
                    <tr key={index} className='text-center'>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.name}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.email}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.phone}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.status}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>
                        <button className='bg-[#043B64] text-white px-4 py-2 rounded' 
                          onClick={() => {
                            setSelectedUser(user)
                            setIsModelOpen(true)
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
)

const Filtereddata = () => (
  <table className='w-full table-auto  border-spacing-4'>
                  <thead className='text-center'>
                    <tr>
                      <th className='py-5 border-b'>Name</th>
                      <th className='py-5 border-b'>Email</th>
                      <th className='py-5 border-b'>Phone</th>
                      <th className='py-5 border-b'>Status</th>
                      <th className='py-5 border-b'>View</th>
                    </tr> 
                  </thead>
                  <tbody>
                  {filteredData?.map((user, index) => (
                    <tr key={index} className='text-center'>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.name}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.email}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.phone}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>{user.status}</td>
                      <td className={`px-4 py-2 ${index === data.length - 1 ? '' : 'border-b'}`}>
                        <button className='bg-[#043B64] text-white px-4 py-2 rounded'>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
)


  return (
    <section>
        <div className='w-[1230px] h-[730px] mt-3 shadow-lg rounded-2xl bg-[#FFFFFF]'>
            <div className='p-10'>
            <img src='Expenses.png' alt='dashboard-image'/>
            <p className='text-[#101010] opacity-70  text-[16px]'>01-25 March , 2020</p>
            <img src='Stats.png' className='mt-10'/>
            <h1 className='text-[#000000] text-[35px] mt-1 py-1'>User List</h1>
            <form className='w-full flex items-center py-1' onSubmit={handleSumbit}>
                <input type='text' placeholder='Search by name...' onChange={(e) => SetName(e.target.value)} className='border border-[#000000] px-2 w-[337px] h-7 outline-none'/>
                <button type='submit' className='bg-bgColor w-7 h-7 outline-none flex items-center justify-center'>
                    <img src="Group.png" alt="search-icon"/>
                </button>
            </form>
            <div className='w-[1004px] h-[422px] bg-[#F6F6F6] border rounded-2xl shadow-2xl mt-2'>
                {
                  filteredData ? <Filtereddata/> : <UserData/>
                }
            </div>
            </div>
        </div>
        {isModelOpen && selectedUser && (
       <Model user={selectedUser} onClose={() => setIsModelOpen(false)} />
       )}
    </section>
  )
}

export default DashBoard
