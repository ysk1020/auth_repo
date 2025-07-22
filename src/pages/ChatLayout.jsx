import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ChatListPanel from '../components/ChatListPanel/ChatListPanel'
import MessagesPanel from '../components/MessagesPanel/MessagesPanel'

export default function ChatLayout() {
    return (
        <div className='h-screen w-screen flex flex-row space-x-2 overflow-hidden'>
            <div className='w-[4.5rem] h-full'>
                <Sidebar />
            </div>
            <div className="h-full w-[calc(60vh-2rem)]">
                <ChatListPanel />
            </div>
            <div className="flex-1 h-full"> <MessagesPanel /></div>

        </div>
    )
}
