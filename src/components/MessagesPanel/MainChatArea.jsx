import React from 'react'
import { MessagesBubble } from './MessageBubble';

export default function MainChatArea({ message }) {


    return (
        <div className=''>
            {
                message.map((msg) => (
                    <MessagesBubble key={msg.id} message={msg} />
                ))
            }

        </div >
    )
}
