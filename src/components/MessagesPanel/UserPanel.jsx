import React from 'react'

export const UserPanel = () => {
    return (
        <div className='flex items-center justify-between px-6 py-3 w-full'>
            <div className="flex items-center gap-2">
                <span className="material-icons text-xl cursor-pointer hover:text-gray-600">
                    account_circle
                </span>
                <h1 className='font-medium text-xl cursor-pointer hover:text-gray-600'>
                    UserName
                </h1>
            </div>
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl cursor-pointer hover:text-gray-600">
                    videocam
                </span>
                <span className="material-symbols-outlined text-xl cursor-pointer hover:text-gray-600">
                    search
                </span>
                <span className="material-symbols-outlined text-xl cursor-pointer hover:text-gray-600">
                    more_vert
                </span>
            </div>
        </div >
    )
}
