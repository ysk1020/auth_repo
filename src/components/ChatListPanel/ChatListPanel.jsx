import React from 'react'
import LabelButton from './LabelButton'
import { dummyChats } from '../../data/dummyChats'

export default function ChatListPanel() {
    return (
        <div className='h-full w-[calc(40vh-2rem)]'>
            <div className='flex flex-row justify-between items-center-safe h-[3rem] w-full'>
                <h1 className='font-bold text-2xl'>Nurali's Nudes</h1>
                <button>
                    <span className="material-symbols-outlined">
                        add_comment
                    </span>
                </button>
            </div>
            <div className='relative'>
                <div className='absolute inset-y-0 flex items-center ps-3 pointer-events-none'>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
                <input type="text" placeholder='Search' className='rounded-4xl border-1 block w-full p-4 ps-10 text-sm  border-gray-50 bg-pink-100 placeholder-gray-400 placeholder:text-lg' />
            </div>
            <div className='flex space-x-1 p-2 px-[2.5rem] w-1/3'>
                <LabelButton label={"All"} />
                <LabelButton label={"Unread"} />
                <LabelButton label={"Channels"} />
                <LabelButton label={"Groups"} />
            </div>
            <div className="overflow-y-auto flex-grow space-y-2 mt-2">
                {dummyChats.map(chat => (
                    <div
                        key={chat.id}
                        className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                        <img src={chat.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold">{chat.name}</h4>
                            <p className="text-xs text-gray-500 truncate">{chat.description}</p>
                        </div>
                        <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
