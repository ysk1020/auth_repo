import React from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'

function LoginPage() {
    const handleLogin = () => {
        // Handle login logic here
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <AuthForm mode='signin' onSubmit={handleLogin} >
                <p className='mt-4 text-sm text-gray-600 text-center'>Lost Password?
                    <Link to="/forgot-password" className='text-black hover:underline px-1'>Click here!</Link></p>
                <p className='mt-4 text-sm text-gray-600 text-center '>Create Account:
                    <Link to="/signup" className='text-black hover:underline px-1'>Sign Up</Link></p>
            </AuthForm>
        </div>
    )
}

export default LoginPage