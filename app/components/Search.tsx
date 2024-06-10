'use client'
import React from 'react'
import { useState } from 'react'

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
          className='bg-teal-300 h-10 px-5 pr-rounded-lg text-sm focus:outline-none' 
          type="text" 
          placeholder='Search for a recipe...'
          />
          
          <button onClick={searchRecipes} className='bg-black hover:bg-gradient-to-r from-pink-300 to-teal-500 transition duration-500 ease-in-out animated-gradient text-white font-bold py-2 px-4'>🔍</button>
      </div>
    </div>

  )
}

export default Search