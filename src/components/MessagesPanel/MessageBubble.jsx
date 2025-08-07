import React from 'react'

export const MessagesBubble = ({ message }) => {
    const isOwn = message.isOwn;
    return (
        <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-2`} >
            <div className={` ${isOwn ?
                "bg-purple-500 text-white ml-auto" :
                "bg-gray-100 text-black mr-auto"}
                p-2 m-2 rounded-md w-fit`
            }>
                <p>{message.text}</p>
                {/* <span>{message.timestamp}</span> */}
            </div>
        </div>
    )
}

