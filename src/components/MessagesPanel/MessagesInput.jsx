import React, { useRef, useState } from 'react'

export const MessagesInput = () => {
    // dynamic adjust for textarea
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null)

    const handleInput = (e) => {
        setMessage(e.target.value)

        // Adjust height
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto' // Reset first
            textarea.style.height = textarea.scrollHeight + 'px' // Grow
        }
    }
    return (
        <div className='p-4 w-full'>
            <div className='relative w-full'>
                <div className='absolute left-4 top-2 space-x-2 text-gray-600 cursor-pointer'>
                    <span class="material-symbols-outlined">
                        add_2
                    </span>
                    <span class="material-symbols-outlined">
                        emoji_language
                    </span>
                </div>

                <div className='absolute right-4 top-2 text-gray-500 cursor-pointer'>
                    <span class="material-symbols-outlined">
                        mic
                    </span>
                </div>
                <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleInput}
                    placeholder='Type a message'
                    rows={1}
                    className="w-full max-h-40 p-2 pl-20 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 resize-none focus:ring-purple-300"
                />
            </div>
        </div>
    )
}
