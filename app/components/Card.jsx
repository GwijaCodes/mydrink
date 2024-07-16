import React from 'react'
import Link from "next/link";
import Star from './Star'
import { useState } from 'react';

function Card({ recipe, url, link }) {

    return (
        <Link href={`/recipes/${link}`}>
            <div
                style={{ '--image-url': `url(${url})` }}
                className='relative w-64 h-64 max-w-xs overflow-hidden bg-[image:var(--image-url)] bg-cover flex flex-col justify-end'>
                <div className='w-64 h-64 absolute bg-gradient-to-t from-[--teal] to-transparent-500 to-40%'></div>
                <h2 className='z-10 font-semibold text-black m-4 text-lg'>{recipe}</h2>
                <div className='w-10 h-10 m-4 absolute top-0 right-0'>
                    <button>Save</button>
                </div>
            </div>
        </Link>
    )
}

export default Card