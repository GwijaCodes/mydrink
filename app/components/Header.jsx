import React from 'react'
import Image from 'next/image'

function Header({ func }) {
    return (
        <div className='w-full h-screen'>
            <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='w-screen h-[200px] object-cover mt-[20vh]'
                alt='a few drinks' />
            <div className='flex flex-col items-start h-full p-10'>
                <h1 className='title text-black text-6xl font-semibold'>Oh my Gin</h1>
                <p className='py-2 pb-10 text-md'>Your friendly, digital, barman manual.</p>
                <button onClick={func} className='px-2 h-10 w-20 bg-black hover:bg-gradient-to-r from-[--pink] to-teal-300 transition duration-500 ease-in-out animated-gradient text-white font-bold'>Browse</button>
            </div>
        </div>
    )
}

export default Header