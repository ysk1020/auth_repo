import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen w-full space-y-4'>
            <h1 className='text-3xl font-bold mb-8'>Welcome to My Auth App</h1>
            <button className=' w-1/8 bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none '>
                <Link to="/login">Log In</Link>
            </button>
            <button className=' w-1/8 flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100'>
                <Link to="/signup">Sign Up</Link>
            </button>
        </div>
    )
}

export default WelcomePage