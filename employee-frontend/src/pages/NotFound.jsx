import React from 'react'
import { notfound} from '../assets/assets.js';
import {useAppContext} from '../context/useContext.jsx'
const NotFound = () => {
  const {navigate} = useAppContext();
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-blue-50'>
       <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all"
      >
        ← Back to Home
      </button>
      <img src={notfound} alt="notfound image"    className="max-w-{90vw] w-[80%] object-contain overflow-hidden"/>
    </div>
  )
}

export default NotFound
