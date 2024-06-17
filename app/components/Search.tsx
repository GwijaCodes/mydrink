'use client'
import React from 'react'
import { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({setRecipes}) {
  const [search, setSearch] = useState('')
  const searchRecipes = async () => {
    try{
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)

      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const result = await res.json();
      setRecipes(result?.drinks)   
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='m-10'>
      <h2>Cerca un cocktail</h2>
      <div className='flex'>
          <input 
          value={search} 
          onChange={(e) => {setSearch(e.target.value)}} 
          className='bg-[--teal] h-10 px-5 pr-rounded-lg text-sm focus:outline-none' 
          type="search" 
          placeholder='Search for a recipe...'
          />
          
          <button onClick={searchRecipes} className='w-10 h-10 flex items-center justify-center ml-2 bg-black hover:bg-gradient-to-r from-[--pink] to-teal-300 transition duration-500 ease-in-out animated-gradient text-white font-bold rounded-full'>
          <FaMagnifyingGlass />
            </button>
      </div>
    </div>

  )
}

export default Search