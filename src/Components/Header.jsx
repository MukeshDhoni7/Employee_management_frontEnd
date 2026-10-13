import React from 'react'

import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className='w-full h-[100px] shadow-2xl flex justify-center items-center bg-blue-200'>
      <aside className='w-full max-w-30 mx-auto text-center font-bold font-serif text-sm md:text-lg'>
        <h1 className='cursor-pointer' onClick={()=>navigate("/")}>Home </h1>
      </aside>
        <nav className='w-full h-[90%] flex justify-around items-center'>
            <h1 className=' font-serif font-bold text-center text-sm md:text-lg -translate-x-14'>Employee Management System</h1>
        </nav>
    </header>
  )
}

export default Header