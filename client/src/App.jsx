import { useState } from 'react'
import Axios from "axios"
import './App.css'
import saf from "./images/640px-M-pesa-logo.png"

function App() {
 const [phone,setPhone] = useState(); 
 const [amount,setAmount] = useState();

 const paySubmit = (e)=>{
  e.preventDefault();
  setPhone("");
  setAmount("");
  Axios.post("http://localhost:9000/token",{
    phone,
    amount
  }).then((res)=>{
    console.log(res)
  }).catch((error)=>{
    console.log(error)
  })
 };   
  return (
    <div className="bg-gradient-to-b from-green-500 to-white min-h-screen flex items-center">
      <div className="container mx-auto p-5">
        <div className="max-w-lg mx-auto rounded-lg bg-white shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
            SAFARICOM TWAWEZA 
          </h1>
          <p className="text-gray-700 text-center mb-6">
            This is a simple lipa na MPESA online service where you can send money to another person's phone.
          </p>
          <div className="flex justify-center mb-8">
            <img
              className="w-60 h-50  full border-1 border-green-600"
              src={saf}
              alt="User Avatar"
            />
          </div>
          <form onSubmit={paySubmit} className=" flex flex-col mb-4">
            <div className="flex items-center border-b border-green-600 py-2">
              <input
              value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full px-2 py-1 bg-transparent text-gray-700 focus:outline-none"
                placeholder="Enter Phone number"
              />            
            </div>
            <div className="flex items-center border-b border-green-600 py-2">
              <input
              value={amount}
               onChange={(e)=>setAmount(e.target.value)}
                className="w-full px-2 py-1 bg-transparent text-gray-700 focus:outline-none"
                placeholder="Enter Amount"
              />            
            </div>
            <button type='submit' onClick={paySubmit} className="mt-4  bg-red-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                SEND
              </button>
          </form>
        </div>
      </div>
    </div>
   
  )
}

export default App