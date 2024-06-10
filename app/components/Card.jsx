import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Card({ recipe }) {
    return (
        <Link href={`/recipes/${recipe?.idDrink}`}>
            <div
                style={{ '--image-url': `url(${recipe?.strDrinkThumb})` }}
                className='relative w-64 h-64 max-w-xs overflow-hidden bg-[image:var(--image-url)] bg-cover flex items-end'>
                <div className='w-64 h-64 absolute bg-gradient-to-t from-teal-600 to-transparent-500 to-40%'></div>
                <h2 className='z-10 font-semibold text-white m-4'>{recipe?.strDrink}</h2>
            </div>
        </Link>
    )
}

export default Card