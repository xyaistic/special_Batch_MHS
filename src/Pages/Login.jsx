import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [task, setTask] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate(); 

    const setTaskState = (event) => setTask(event.target.value);
    const setPassState = (event) => setPass(event.target.value);
    
    const Remail = "kdaud1602@gmail.com";
    const Rpass = "12345";

    const compareEmail = () => {
        if (task === Remail && pass === Rpass) {
            console.log("Verified");
            sessionStorage.setItem("token", "valid-token"); // Store token in sessionStorage
            navigate('/home'); // Navigate to home page after login
        } else {
            console.log("Invalid username and password");
            alert("Invalid email or password");
        }
    };
    

    return (
        <div className="container mx-auto my-5 w-5/6">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <h4 className="text-center text-lg font-semibold mt-5">Login</h4>
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            value={task}
                            onChange={setTaskState}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={setPassState}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="mt-6">
                        <button 
                            className="w-full py-2 px-4 bg-blue-600 text-white"
                            onClick={compareEmail}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
