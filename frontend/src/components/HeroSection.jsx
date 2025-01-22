import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ""
    })

    const baseUrl = `http://localhost:5000/api/v1`

   const handleSumition =  async (e) => {
        e.preventDefault()
        if(!login.email || !login.password) {
            alert('All fields are required')
            return
        }
       try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: login.email,
                password: login.password
            }),
        })
        if(response.ok) {
            const data = await response.json()
            alert(`logged in successfull  ${data.user.email}`)
        }
        else {
            const errorData = await response.json();
            console.error('Error during login:', errorData)
            alert('wrong email or password')
        }
       } catch (error) {
        console.error('Network or server error:', error)
        alert('Network or server error')
       }
   }


  
  return (
    <section className='w-full mt-28'>
        <div className='w-full flex justify-center items-center'>
            <img src='hero.png' alt='heroimage'/>
            <div className='w-[680px] h-[502px] bg-navbarColor border rounded-lg flex flex-col py-11 items-center'>
                <h1 className='text-textColor text-[38px] font-semibold'>Login</h1>
                <p className='text-textColor text-sm mt-2 mb-2'>Fill in your credentials and click on the Login button</p>
                <form className='flex flex-col gap-3 mt-2 mb-2' onSubmit={handleSumition}>
                    <label htmlFor='email' className='text-textColor'>Email Address</label>
                    <input 
                        type='email'
                        id='email' 
                        value={login.email} 
                        onChange={(e) => setLogin(prev => ({ ...prev, email: e.target.value }))} 
                        className='w-[568.45px] h-[39.73px] rounded-lg outline-none px-2'
                    />
                    <label htmlFor='password' className='text-textColor'>Password</label>
                    <input 
                        type='text'
                        id='password'
                        value={login.password}  
                        onChange={(e) => setLogin(prev => ({ ...prev, password: e.target.value }))}  
                        className='w-[568.45px] h-[39.73px] rounded-lg outline-none px-2'
                    />
                    <p className='text-textColor ml-[442px] mt-3'>Forget Password?</p>
                    <CustomButton
                        title="Login"
                        type='submit'
                    />
                </form>
                <div className='mr-[330px]'>
                    <p className='text-textColor mt-1 mr-2 text-xm'>
                        Don’t have an account? <Link to="/signup" className='font-bold'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;
