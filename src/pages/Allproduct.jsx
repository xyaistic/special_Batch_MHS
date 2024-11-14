
// thsi is an catogries file 

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Homeproduct from './HomeProduct.jsx';
import axios, { Axios } from 'axios'
import {BaseUrl,Byproducts,Bycategory} from "./../API/api.js"

export default function Catogries() {

  const [data,setData]= useState([]);
  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try{
      const response = await axios.get (`${BaseUrl}${Byproducts}${Bycategory}`);
      console.log(response.data)
      setData(response.data)
    }catch(error){
      console.log(error);
    }
  }
  return (

    <div className='flex  justify-evenly'>
    {data.map((item)=>(
        <>
       <Homeproduct item={item} />
        
        </> 
       ))}
   
    </div>
  )
}
