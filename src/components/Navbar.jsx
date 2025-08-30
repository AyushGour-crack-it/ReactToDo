import React from 'react'
import { LuListTodo } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className='nav'>
  <nav className='flex justify-between items-center bg-black text-white p-5 rounded-full m-4 '>
    <div ><LuListTodo size={45} /></div>
    <div className='font-bebas text-5xl font-extrabold'> DailyDash</div>
    <div className='text-2xl cursor-pointer hover:font-medium font-'>Home</div>
  </nav>
  </div>
  )
}

export default Navbar