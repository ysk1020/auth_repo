import React, { useState } from 'react'

function EmailOnlyForm({ onSubmit }) {
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.({ email })
    }

    return (
        <div className='w-full bg-gray-50 rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-2 md:space-y-4 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight  tracking-tight text-gray-900 md:text-2xl'>Forgot Password</h1>
                <p className="mt-1.5 text-md font-medium text-gray-800">Please enter your email address to reset your password.</p>
                <form action="" onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor="" className='block text-md font-medium text-gray-700 '>
                            Email address
                        </label>
                        <input
                            id='email'
                            type="email"
                            autoComplete='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='mt-1 p-2 w-full border-gray-300 shadow rounded-md bg-white focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                        />
                    </div>
                    <button type='submit' className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-100'>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EmailOnlyForm