import React, { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.com-1280x720.webp";
import "../style/home.css";
import axios, { Axios } from "axios";
import { BaseUrl, Byproducts, Bycategory } from "./../API/api.js";
import Homeproduct from "./HomeProduct.jsx";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}${Byproducts}${Bycategory}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img src={placeholder} alt="no image " className="w-screen h-screen" />
      <h1 className="heading-sale text-5xl font-bold ">
        Unbeatable Deals on Best
        <br /> Selling Products !
      </h1>

      <a href="./Allproducts">
        <button className=" font-bold btn-shop border-4 border-pink-400 bg-blue-500 rounded-lg w-60 h-10 mt-10 ml-20">
          shop now !{" "}
        </button>
      </a>

      <section className="mt-72 ">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold flex">Trending catogries</h1>
          <a href="./Allproducts">view more </a>
        </div>
        <br />
        <div className="flex justify-evenly p-10 w-full gap-4 ">
          {data.map((item) => (
            <>
              <Homeproduct item={item} />
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
