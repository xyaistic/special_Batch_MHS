import React from 'react'
// import clothing from '../assets/mensclothing-img.jpg'

export default function homeproduct({item}) {
  return (
    <>
  
    <div className='border-2 border-black shadow-slate-600 shadow-lg rounded-lg  w-1/8 hover:border-4 border-zinc-800'>


     {/* <img src={clothing} className='h-28 pl-4 ml-20 mt-4 ' alt="" /> */}

       <h2 className='text-center p-6 text-stone-950 capitalize font-black'> {item}</h2>


    </div>
    </>
  )
}
