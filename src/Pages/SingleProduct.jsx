import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { addItemTocard, BaseUrl } from '../API/api';

export default function SingleProduct() {
        const [count , setCount] = useState(1);
        const usereId = 1;

    const QuantityAdd = () =>{
      if(data.stock>count){
        setCount(count+1);
      }
      }
    
      const QuantitySub = () =>{
        if(count > 1){
          setCount(count-1);
        }
      }
     
    const location = useLocation();
    const data = location.state.singleItem
    // console.log(data);

    const  AddtoCard = async ()  =>{
      try {
        const orderDetail={
          user_id : usereId,
          Quantity: count,
          Product_id : data.Product_id, 
        }
        const response =  await axios.post(`${BaseUrl}${addItemTocard}`,orderDetail)  
        console.log(response);
               
      } catch (error) {
        alert(error)
      }
   }


    

    return (
         <>
          <div className="lg-flex-row flex   justify-between  w-full">
          <div className="flex  flex-col justify-center items-center w-1/2 ">
          <img
              src={data.images}
              alt=""
              className="h-96  w-full object-contain mb-4 rounded"
            />
                       
         </div>
          
           <div className='w-1/2 mt-6 px-12'> 
           <h1 className=" font-semibold text-5xl mb-6 capitalize  w-full">Title : {data.Product_name}</h1>
           <p><span className=" text-2xl my-4  w-full">Description : {data.Product_description}</span></p> 
            <p className="text-xl my-4  w-full">Price : ₹ {data.price}</p>

             <div className="flex w-full justify-between mb-6">
             <p className='text-xl mb-5' >Quantity : {count}</p>
             <div className='flex justify-evenly w-3/5'>
               <button className="bg-gray-300 text-3xl  w-14 h-10"  onClick={QuantitySub}> - </button>
               <p className="text-lg">{count}</p>
               <button className="bg-gray-300 w-14 text-xl h-10" onClick={QuantityAdd} > + </button>
               </div>
          </div> 
            {data?.stock>0 ? (<>              
              <button  onClick={AddtoCard} className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Shop Now 
              </button>{" "}
            </>): (<>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-200">
                Out Of Stock
              </button>{" "}
           
            </>)
            
          }
            </div>
          </div>
        </>
  )
}


// user id ,quantity , product id 