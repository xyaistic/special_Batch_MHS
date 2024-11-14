import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom"


export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm();
    

    const navigate = useNavigate(); 
    
    const Remail = "kdaud1602@gmail.com";
    const Rpass = "12345";

    const compareEmail = () => {
         const { email, password } = getValues();
        if (email === Remail && password === Rpass) {
            console.log("Verified");
            sessionStorage.setItem("token", "valid-token"); 
            navigate('/home'); 
         } 
         else {
            console.log("Invalid username and password");
            alert("Invalid email or password");
        }
    };
    

    return (
        <form action="" onSubmit={handleSubmit(compareEmail)}>
        <div className="container mx-auto my-5 w-5/6">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <h4 className="text-center text-lg font-semibold mt-5">Login</h4>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your email"                            
                            {...register('email', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                         {errors.email && <p>Email is required.</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                         {errors.password && <p>Password is required.</p>}
                    </div>
                    <div className='mt-4'>
                       <p>Don't have an account <a href='signup'><span className='text-blue-600'> SignUp</span></a></p>
                    </div>
                    <div className="mt-6">
                        <button 
                            className="w-full py-2 px-4 bg-blue-600 text-white"
                            type='submit' >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}


