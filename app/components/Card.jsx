import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Card({ recipe }) {
    return (
        <Link href={`/recipes/${recipe?.idDrink}`}>
            <div className='max-w-sm border-2 border-gray-300 cursor-pointer hover:border-black'>
                <Image src={recipe?.strDrinkThumb} width={350} height={250} alt="drink image"></Image>
                <h2 className='bg-white py-4 text-gray-500 font-semibold text-2xl text-center'>{recipe?.strDrink}</h2>
            </div>
        </Link>
    )
}

export default Card