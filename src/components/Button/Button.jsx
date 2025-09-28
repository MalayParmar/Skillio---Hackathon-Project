import React from 'react'

const Button = (props) => {
    return <>
        <button className='bg-gradient-to-b from-[#3b82f6] to-[#234c8e] px-6 py-3 text-white text-lg font-medium flex gap-x-3 items-center rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:from-[#234c8e] hover:-translate-y-1 transition-all ease-out hover:scale-105 '>
            {props.content} {props.icon}
        </button>
    </>
}

export default Button