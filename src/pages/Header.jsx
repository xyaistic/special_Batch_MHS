import React from "react";
import { Link } from "react-router-dom";
import { TiHeartOutline } from "react-icons/ti";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import '../index.css'  


export default function Header() {
  return (
    <div  className="flex justify-between   gap-x-10 pt-3 ">
     <div>  
      <ul  className=" text-md md:text-sm sm:text-sm flex  gap-x-10 p-50 " >
        <li className=" text-black hover:font-extrabold text2xl">
          <Link to={'Home'}>Home</Link>
        </li>
        <li className=" text-black  hover:font-extrabold text2xl">
          <Link to={'Allproducts'}>Products</Link>
        </li>
        <li className=" text-black hover:font-extrabold text2xl">
            <Link to={`catogries`}>Catogries </Link>
        </li>
        <li className=" text-black hover:font-extrabold text2xl">
            <Link to={`profile`}>Profile</Link>
        </li>
        <li className="  p-2 text-black hover:font-extrabold text2xl">
            <Link to={`cart`}><PiShoppingCartSimpleLight /></Link>
        </li> 
       
        <li className=" text-black  p-2 h-10 hover:font-extrabold text2xl">
          <Link to={`wishlist`}><TiHeartOutline /></Link>
        </li>

      </ul>
      </div>
    </div>
  );
}
