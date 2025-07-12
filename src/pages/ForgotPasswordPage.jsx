import React from 'react'
import EmailOnlyForm from '../components/EmailOnlyForm'
function ForgotPassword() {
    const handleForgotPassword = () => { }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <EmailOnlyForm onSubmit={handleForgotPassword} />
        </div>
    )
}

export default ForgotPassword