
import React, { useEffect, useState } from "react";
// import GetallProducts from './GetallProducts';
import axios from "axios";
import { getAllproducts, BaseUrl } from "../API/api";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";


export default function catogries() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}${getAllproducts}`);
      console.log(response,'ress')
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

   function Singleproduct (singleItem){
    console.log("hello world");
    navigate('/singleproduct', {state : {singleItem : singleItem}})      
}



  return (
    <div className="  justify-evenly grid grid-cols-4 h-auto p-10 w-full gap-4 ">
      {data.map((item) => (
        <>
          <div className="bg-white flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl ">
          <div className="flex flex-col justify-center items-center">
          <img
              src={item.images}
              alt=""
              className="h-56 w-full object-contain mb-4 rounded"
            />
            <h2 className="text-sm font-semibold mb-2 capitalize text-center w-full">{item.Product_name}</h2>
            <p className="text-gray-500 mb-4 text-center w-full">${item.price}</p>
            <p><span className="text-gray-800 mb-4 text-left w-full">{item.Product_description}</span></p>            
         </div>
          

            {item?.stock>0 ? (<>              
              <button onClick={()=>Singleproduct(item)} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Order Now 
              </button>{" "}
            </>): (<>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-200">
                Out Of Stock
              </button>{" "}
           
            </>)
            
          }
            
          </div>
        </>
      ))}
    </div>
  );
}
