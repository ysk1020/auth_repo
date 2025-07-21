import React from 'react'

const LabelButton = ({ label }) => {
    return (
        <button type='select' className='bg-purple-300 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-full'>
            <span>{label}</span>
        </button>
    )
}

export default LabelButton