import React from 'react'
import { useForm } from 'react-hook-form';
import { baseUrl, createUser } from '../Constant/api';
import axios from 'axios';
export default function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    

      const SignUpUser=(userData)=>{
        // console.log(userData.username);
        
        let pn = `+91 ${userData.number}`
        // const data= {
        //     username:userData.Username,
        //     first_name:userData.first_name,
        //     last_name:userData.last_name,
        //     contact:pn,
        //     password:userData.password,
        //     address:userData.address,
        //     email:userData.email
        //   }

          const data ={
            username:userData.Username,
            first_name:userData.first_name,
            last_name:userData.last_name,
            Phone_number:pn,
            password:userData.password,
            Address:userData.address,
            email:userData.email
            
          }
        // const data={
        //     username:"msad3",
        //     first_name:"mussada",
        //     last_name:"alsad4am",
        //     Phone_number:"+91 1234567890",
        //     password:"musdsa@20234",
        //     Address:"Koh-e-fiza",
        //     email:"musa1d20103@gmail.com"
        //   }
          console.log(data);
          
        //   axios.defaults.headers.common["skip_ngrok_interstitial"] = "any value";
        const res = axios.post(`${baseUrl}${createUser}`, data)
console.log(res)
      }

    //   const onSubmit = (data1) =>{
    //     console.log(data1);
        
    //   }


  return (
   <form action=""  onSubmit={handleSubmit(SignUpUser)}>
        <div className="container mx-auto my-5 w-5/6">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <h4 className="text-center text-lg font-semibold mt-5">Sign Up</h4>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text"
                            placeholder="Enter your Username"                            
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('Username', { required: true })}
                        />
                        {errors.UserName && <p>Username is required.</p>}
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input 
                            type="text"
                            placeholder="Enter your First name"                            
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('first_name', { required: true })}
                        />
                        {errors.first_name && <p>first name is required.</p>}
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input 
                            type="text"
                            placeholder="Enter your Last name"                            
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('last_name', { required: true })}
                        />
                        {errors.last_name && <p>last name is required.</p>}
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your Email"                            
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <p>Email is required.</p>}                        
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Number</label>
                        <input 
                            type="number"
                            placeholder="Enter your number"                            
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('number',
                            { required: true,
                              minLength:{value:10 , message : "Min length atlest 10"},
                              maxLength:{value:10 ,message : "Max length atlest 10"}  
                             })}
                        />
                        {errors.number && <p>{errors.number.message}</p>}                                                
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password"
                            placeholder="Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('password', 
                            { required: true,
                                minLength:{value:8 , message : "Min length atlest 8"},

                             })}
                        />
                        {errors.password && <p>password is required.</p>}                                                
                    </div>
                    {/* <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input 
                            type="password"
                            placeholder="Confirm Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <p>password is required.</p>}                                                
                    </div> */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input 
                            type="text"
                            placeholder="Type Your Address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register('address', { required: true })}
                        />
                        {errors.address && <p>address is required.</p>}                                                
                    </div>

                    <div className='mt-4'>
                       <p>Have an account ?  <a href='login'><span className='text-blue-600'> Login</span></a></p>
                    </div>
                    <div className="mt-6">
                        <button 
                            className="w-full py-2 px-4 bg-blue-600 text-white"
                            type='submit' >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </div>
   </form>
  )
}
