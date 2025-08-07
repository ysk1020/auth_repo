import React, { useRef, useState } from 'react'
import Picker from 'emoji-picker-react'

export const MessagesInput = ({ onSend }) => {
    // dynamic adjust for textarea
    const [message, setMessage] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [showPicker, setShowpicker] = useState(false);

    const textareaRef = useRef(null);

    const handleInput = (e) => {
        setMessage(e.target.value)

        // Adjust height
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto' // Reset first
            textarea.style.height = textarea.scrollHeight + 'px' // Grow
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            onSend(message);
        }
        setMessage("");
        console.log(message)
    }

    const onEmojiClick = (event) => {
        setMessage(prev => prev + event.emoji);
    }


    return (
        <div className=' w-full'>
            <div className='relative'>
                <div className='absolute left-4 top-2 space-x-2 text-gray-600 cursor-pointer'>
                    <button>
                        <span className="material-symbols-outlined">
                            add_2
                        </span>
                    </button>
                    <button
                        onClick={() => setShowpicker(val => (!val))}
                        className='hover:text-pink-200'
                    >
                        <span className="material-symbols-outlined">
                            emoji_language
                            <div className='absolute bottom-15 right-5'>
                                <Picker
                                    open={showPicker}
                                    onEmojiClick={onEmojiClick}
                                    PickerStyle={{ width: "100%" }}

                                />
                            </div>
                        </span>
                    </button>

                </div>


                <form action="submit" onSubmit={handleSubmit}>
                    {isFocused ?
                        <div className='absolute right-4 top-2 text-gray-500 cursor-pointer'>
                            <button>
                                <span className="material-symbols-outlined">
                                    send
                                </span>
                            </button>
                        </div>
                        :
                        <div className='absolute right-4 top-2 text-gray-500 cursor-pointer'>
                            <button>
                                <span className="material-symbols-outlined">
                                    mic
                                </span>
                            </button>
                        </div>
                    }
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={handleInput}
                        placeholder='Type a message'
                        rows={1}
                        onFocus={() => { setIsFocused(true) }}
                        onBlur={() => { setIsFocused(false) }}
                        className="w-full overflow-hidden max-h-40 p-2 pl-20  rounded-3xl border border-gray-200 text-sm focus:outline-none focus:ring-2 resize-none focus:ring-purple-300"
                    />

                </form>
            </div >
        </div >
    )
}
