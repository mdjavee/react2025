import React from 'react'
import heroimage from '../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='max-w-[1350px] tablet:bg-amber-100 lg:bg-amber-100 rounded-md shadow-md lg:max-w-[1350px] tablet:max-w-[1350px]  tablet:grid tablet:grid-cols-2  lg:grid lg:grid-cols-2 p-5 gap-8 mx-auto mt-10 items-center'>
        <img className='border-2 border-dashed p-5 rounded-2xl shadow-md' src={heroimage} alt="" />
        <div className='lg:bg-red-100 lg:rounded-2xl lg:shadow-2xl lg:p-8 tablet:p-8 mt-5 p-6 lg:text-left tablet:text-left   items-center lg:m-7 tablet:m-7'>
            <h2 className='text-2xl  mb-8 lg:text-4xl tablet:text-3xl font-extrabold text-center  '>Welcome to Coursera</h2>
            <p className=' mb-6 lg:text-lg tablet:text-lg text-sm lg:text-left tablet:text-left ml-3 '><strong>Discover a world of knowledge and skills with our extensive range of online courses. Whether you're looking to advance your career or explore new hobbies, Coursera has something for everyone.</strong></p>
        </div>
    </div>
  )
}

export default Hero