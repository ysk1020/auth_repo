import React from 'react'

export default function Sidebar() {
    return (
        <div className='flex flex-col justify-between h-full max-w-[5rem] p-4 bg-pink-50'>
            <div className='space-y-4'>
                <div className=' hover:border-l-2 hover:border-amber-400'>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:bg-white rounded-3xl">
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-1 end-1 dark:border-gray-900">2</div>
                    </button>
                </div>
                <div className=' hover:border-l-2 hover:border-amber-400'>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:bg-white  rounded-3xl">
                        <span className="material-icons">
                            bookmark_border
                        </span>
                    </button>
                </div>

                <div className=' hover:border-l-2 hover:border-amber-400'>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:bg-white  rounded-3xl">
                        <span className="material-icons">
                            light_mode
                        </span>
                    </button>
                </div>
            </div>
            <div className='space-y-4'>
                <div className=' hover:border-l-2 hover:border-amber-400'>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:bg-white rounded-3xl ">
                        <span className="material-icons">
                            settings
                        </span>
                    </button>
                </div>
                <div className=' hover:border-l-2 hover:border-amber-400'>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:bg-white  rounded-3xl">
                        <span className="material-icons">
                            account_circle
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
