import React from 'react'
import searchicon from '../assets/searchicon.png'
import burger from '../assets/burger.png'
const Navbar = () => {
  return (
    <div>
        <nav className=" bg-red-100 p-6 mx-auto justify-around tablet:p-7 tablet:bg-pink-200 lg:bg-black lg:text-white lg:p-10  shadow-md flex  items-center">
            <h1 className="pr-6 text-[1.1rem] tablet:text-[1.5rem] font-bold lg:text-3xl">Coursera</h1>
        <div className="flex  list-none gap-6 tablet:gap-10 lg:gap-25 tablet:text-[0.8rem] lg:text-[1.1rem] font-medium">
            <li>Home</li>
            <li>Courses</li>
            <li>Self Awareness</li>
            <div>
                <img className='ml-8 bg-black p-0.5 rounded-2xl' src={searchicon} alt="" />
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar