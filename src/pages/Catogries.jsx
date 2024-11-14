import React, { useEffect, useState } from "react";
// import GetallProducts from './GetallProducts';
import axios from "axios";
import { productUrl, getAllproducts, BaseUrl, Byproducts } from "../API/api";

export default function catogries() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}${Byproducts}`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
// const gotoSinglePage =(item)=>{

// }
  return (
    <div className="  justify-evenly grid grid-cols-4 h-auto p-10 w-full gap-4 ">
      {data.map((item) => (
        <>
          {/* <GetallProducts item={item} /> */}

          {/* <div onClick={()=>gotoSinglePage(item)}>

          </div> */}
          <div className="bg-white flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl ">
          <div className="flex flex-col justify-center items-center">
          <img
              src={item.image}
              alt=""
              className="h-56 w-full object-contain mb-4 rounded"
            />
            <h2 className="text-sm font-semibold mb-2 text-left w-full">{item.title}</h2>
            <p className="text-gray-500 mb-4 text-left w-full">${item.price}</p>
            </div>
            
            <a href="Cart">
              {" "}
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Shop Now 
              </button>{" "}
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
