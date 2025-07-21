import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ChatListPanel from '../components/ChatListPanel/ChatListPanel'

export default function ChatLayout() {
    return (
        <div
            className='flex flex-row space-x-2 h-[calc(102vh-1.5rem)]'>
            <Sidebar />
            <ChatListPanel />
        </div>
    )
}
