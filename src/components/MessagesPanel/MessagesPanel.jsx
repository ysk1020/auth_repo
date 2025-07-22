import React from 'react'
import MainChatArea from './MainChatArea'
import { UserPanel } from './UserPanel'
import { MessagesInput } from './MessagesInput'

export default function MessagesPanel() {
    return (
        <div className='flex flex-col w-full'>
            <div className='h-[4rem] px-4'>
                <UserPanel />
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
                {/* Replace with mapped messages */}
                <MainChatArea />

                <div className="bg-gray-100 p-2 rounded-md w-fit">Hello</div>
                <div className="bg-purple-100 p-2 rounded-md w-fit self-end">Hey!</div>
                {/* ... */}
            </div>


            <div className='h-auto border-t'>
                <MessagesInput />
            </div>


        </div>
    )
}
