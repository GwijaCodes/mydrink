import React from 'react'
import Image from 'next/image'

function Header({ func }) {
    return (
        <div className='w-full h-screen p-10 columns-2 gap-2 px-40'>
            <div className='flex flex-col justify-center items-start h-full'>
                <h1 className='text-black text-3xl font-semibold'>OH MY GIN!</h1>
                <p className='py-2 pb-10 text-md'>Who remembers all of the recipes? Click below to start browsing your next favorite drinks</p>
                <button onClick={func} className='px-2 h-10 w-20 bg-black hover:bg-gradient-to-r from-[--pink] to-teal-300 transition duration-500 ease-in-out animated-gradient text-white font-bold'>Browse</button>
            </div>
            <Image
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={800}
                height={100}
                alt='a few drinks' />
        </div>
    )
}

export default Header