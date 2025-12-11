import React, { useEffect, useState } from 'react'

const Card = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            setProduct(data);
        }
        fetchData();
    
    },[]);
  return (
    <div className='grid grid-cols-2 gap-5  border-t-2  border-cyan-500 max-w-[1350px] lg:grid lg:grid-cols-4 lg:gap-8 p-5   lg:mx-auto   tablet:grid tablet:grid-cols-2 tablet:gap-5 tablet:mx-auto'>
        {product.map((item)=>(
            <div key={item.id} className=' mx-auto lg:h-[80%] tablet:bg-red-200 bg-amber-100 mt-8 border-4 shadow-2xl  rounded-xl  pt-5 p-5  '>
                <img src={item.image} alt={item.title} className='mx-auto border-b-2 border-solid  border-red-300 lg:pb-5 lg:h-[40%] tablet:h-[50%] h-[50%]' />
                 <h2 className='line-clamp-3 mb-5 text-[10px] tablet:text-[1.3rem] tablet:mt-5 lg:text-[1.5rem]   font-bold lg:mb-7 lg:mt-5 lg:ml-5 '>{item.title}</h2>
                <p className='text-[7px] tablet:text-[0.9rem] line-clamp-3 font-bold  tablet:mt-8 lg:text-[0.9rem] lg:ml-4 '>{item.description}</p>
                <p className='text-[9px] lg:ml-5 tablet:text-xl lg:text-xl mt-5 font-semibold'>${item.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Card