import React from 'react'
import clothing from '../assets/clothing.jpg'


export default function homeproduct({item}) {
  return (
    <>
  
    <div className='border-2 border-black shadow-slate-600 shadow-lg rounded-lg  w-1/4 hover:border-4 border-zinc-800 '>


     <img src={clothing} className='h-28 pl-4 ml-20 mt-4 ' alt="" />

       <h2 className='text-center p-6 text-stone-950 capitalize font-black '> {item}</h2>
       <div className='center border border-red-600'>
    {/* <button className='justify-center w-full p-6 text-stone-950 capitalize font-black '> </button> */}
    </div>
    </div>

    </>
  )
}
