// import React, { useState } from 'react'

// export default function SingleProduct() {
//       const [data, setData] = useState([]);
//     const [count , setCount] = useState(1);

//     const QuantityAdd = () =>{
//         setCount(count+1);
//       }
    
//       const QuantitySub = () =>{
//         if(count > 1){
//           setCount(count-1);
//         }
//       }

//   return (
//     <div className="  justify-evenly grid grid-cols-4 h-auto p-10 w-full gap-4 ">
//       {data.map((item) => (
//         <>
//           <div className="bg-white flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl ">
//           <div className="flex flex-col justify-center items-center">
//           <img
//               src={item.images}
//               alt=""
//               className="h-56 w-full object-contain mb-4 rounded"
//             />
//             <h2 className="text-sm font-semibold mb-2 capitalize text-center w-full">{item.Product_name}</h2>
//             <p className="text-gray-500 mb-4 text-center w-full">${item.price}</p>
//             <p><span className="text-gray-800 mb-4 text-left w-full">{item.Product_description}</span></p>            
//          </div>
          
//          <div className="flex w-full justify-evenly mb-2">
//               <button className="bg-gray-300 text-3xl  w-14 h-10"  onClick={QuantitySub} >-</button>
//               <p className="text-lg">{count}</p>
//               <button className="bg-gray-300 w-14 text-xl h-10" onClick={QuantityAdd} >+</button>
//             </div>

//             {item?.stock>0 ? (<>              
//               <button onClick={SingleProduct} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//                 Shop Now 
//               </button>{" "}
//             </>): (<>
//               <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-200">
//                 Out Of Stock
//               </button>{" "}
           
//             </>)
            
//           }
            
//           </div>
//         </>
//       ))}
//     </div>
//   )
// }

import React, { useState } from 'react'
import { useLocation } from 'react-router'

export default function SingleProduct() {
        const [count , setCount] = useState(1);

    const QuantityAdd = () =>{
        setCount(count+1);
      }
    
      const QuantitySub = () =>{
        if(count > 1){
          setCount(count-1);
        }
      }
    const location = useLocation();
    const data = location.state.singleItem
    console.log(data);
    

    return (
         <>
          <div className="lg-flex-row flex   justify-between  w-full">
          <div className="flex  flex-col justify-center items-center w-1/2 ">
          <img
              src={data.images}
              alt=""
              className="h-96  w-full object-contain mb-4 rounded"
            />
                       
         </div>
          
           <div className='w-1/2 mt-6 px-12'> 
           <h1 className=" font-semibold text-5xl mb-6 capitalize  w-full">Title : {data.Product_name}</h1>
           <p><span className=" text-2xl my-4  w-full">Description : {data.Product_description}</span></p> 
            <p className="text-xl my-4  w-full">Price : ₹ {data.price}</p>

             <div className="flex w-full justify-between mb-6">
             <p className='text-xl mb-5' >Quantity : {count}</p>
             <div className='flex justify-evenly w-3/5'>
               <button className="bg-gray-300 text-3xl  w-14 h-10"  onClick={QuantitySub}> - </button>
               <p className="text-lg">{count}</p>
               <button className="bg-gray-300 w-14 text-xl h-10" onClick={QuantityAdd} > + </button>
               </div>
          </div> 
            {data?.stock>0 ? (<>              
              <button  className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Shop Now 
              </button>{" "}
            </>): (<>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition duration-200">
                Out Of Stock
              </button>{" "}
           
            </>)
            
          }
            </div>
          </div>
        </>
  )
}
