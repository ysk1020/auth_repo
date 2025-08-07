import React, { useState } from 'react'
import MainChatArea from './MainChatArea'
import { UserPanel } from './UserPanel'
import { MessagesInput } from './MessagesInput'

export default function MessagesPanel() {
    const [message, setMessage] = useState([
        { id: 1, text: "Hello", sender: 'Me', timestamp: new Date(), isOwn: true, },
        { id: 2, text: "What's up you man", sender: "Friend", timestamp: new Date(), isOwn: false, },
    ]);
    const handleSend = (text) => {
        const newMsg = {
            id: Date.now(),
            text: text,
            sender: "Me",
            timestamp: new Date(),
            isOwn: true
        }
        setMessage([...message, newMsg]);
    }

    return (
        <div className='flex flex-col h-screen w-full w-max-[65rem] p-4'>
            <div className='h-[4rem] px-4'>
                <UserPanel />
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col justify-end">
                <MainChatArea message={message} />
            </div>

            <div className='p-2'>
                <MessagesInput onSend={handleSend} />
            </div>
        </div >
    )
}
