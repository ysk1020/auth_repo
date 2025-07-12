import React from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'

function SignupPage() {
    const handleRegister = () => { }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <AuthForm mode='signup' onSubmit={handleRegister} >
                <p className='mt-4 text-sm text-gray-600 text-center'>Have account?
                    <Link to="/login" className='text-black hover:underline px-1'>Log In</Link></p>
            </AuthForm>
        </div>
    )
}

export default SignupPage