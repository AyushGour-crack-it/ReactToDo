import React from 'react'
import { LuListTodo } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className='nav'>
  <nav className='flex justify-between items-center bg-black text-white p-5 rounded-full m-4 '>
    <div ><LuListTodo size={45} /></div>
    <div className='font-bebas text-3xl font-extrabold'> Ho Gaya</div>
  </nav>
  </div>
  )
}

export default Navbar