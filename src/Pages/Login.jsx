import React, { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl, createUser, loginuser } from "../Constant/api";
import home from "./Home";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const loginUsername = async (userData) => {
    const data = {
      username: userData.username,
      password: userData.password,
    };
    console.log(data);
    const res = await axios.post(`${baseUrl}${loginuser}`, data);
    console.log(res);
    const token = res.data.token.access;
    localStorage.setItem("access", token);
    const access = localStorage.getItem("access");

   if(access!=null){
    console.log("first")
    navigate("/home")
    console.log("second")
      }
  };

  return (
    <form action="" onSubmit={handleSubmit(loginUsername)}>
      <div className="container mx-auto my-5 w-5/6">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <h4 className="text-center text-lg font-semibold mt-5">Login</h4>
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700">
                UserName
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
              {errors.username && <p>UserName is required.</p>}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
              {errors.password && <p>Password is required.</p>}
            </div>
            <div className="mt-4">
              <p>
                Don't have an account{" "}
                <a href="signup">
                  <span className="text-blue-600"> SignUp</span>
                </a>
              </p>
            </div>
            <div className="mt-6">
              <button
                className="w-full py-2 px-4 bg-blue-600 text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
