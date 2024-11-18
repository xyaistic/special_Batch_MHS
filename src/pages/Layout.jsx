import React from 'react'
import Header from './Header'
import { Outlet,useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';

export default function Layout() {
  const navigate = useNavigate();
  const access = localStorage.getItem("access");
  
  console.log(access,'token')
  if(access!=null){
    return (
      <div>
          <Header/>
          <Outlet/>
      </div>
    )
  }else{
  // navigate("/login")
  return(
    <>
    
    <Login/>

    <Signup/>
    </>
  )
  }
 
}
