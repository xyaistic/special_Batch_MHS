import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Img/logo.png"
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
export default function Header() {
  const access = localStorage.getItem("access");
  const deleteToken=()=>{
    localStorage.removeItem("access")
    localStorage.removeItem("user_id")
  }

  return (
    <>
      <div className="flex justify-end bg-blue-200 border border-5  items-center p-5">
        {/* <img src={logo} alt="" className='h-10' /> */}
        <ul className="flex justify-between gap-x-20">
          <li className="hover:text-white text-xl ">
            <Link to={`home`}>Home</Link>
          </li>
          <li className="hover:text-white text-xl">
            <Link to={`Allproduct`}>All Product</Link>
          </li>

          <li className="hover:text-white text-xl">
            <Link to={`category`}>Category</Link>
          </li>
          <li className="hover:text-white text-xl">
            <Link to={`profile`}>Profile</Link>
          </li>
          <li className="hover:text-white">
            <Link to={`card`}>
              {" "}
              <GiShoppingCart size={30} />
            </Link>
          </li>
          <li className="hover:text-white  ">
            <Link to={`wishlist`}>
              <CiHeart size={30} />
            </Link>
          </li>

          {access != null ? (
            <>
              <li className="hover:text-white text-xl" onClick={()=>deleteToken()}>
                <Link to={`login`}>logOut</Link>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-white text-xl">
                <Link to={`login`}>login</Link>
              </li>
            </>
          )}
          {/*          
        {
        if(access!=null){
            
            <><li className='hover:text-white text-xl'>
                <Link to={`login`}>logOut</Link>
        </li></>
        
        }else{
        
            <><li className='hover:text-white text-xl'>
                <Link to={`login`}>login</Link>
        </li></>
        
        }
            
        }         */}
        </ul>
      </div>
    </>
  );
}
