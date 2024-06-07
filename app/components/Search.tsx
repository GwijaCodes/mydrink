import React from 'react'

function Search() {
  return (
    <div className='flex items-center justify-center mt-20 mb-4'>
        <select className='border-2 border-gray-300 bg-white h-10 px-5 pr-rounded-lg text-sm focus:outline-none'>
            <option value="Beef">Beef</option>
            <option value="Pork">Chicken</option>
            <option value="Lamb">Lamb</option>
        </select>
        <h2 className='text-hl font-semibold text-center mx-4 text-gray-500'>OR</h2>
        <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-rounded-lg text-sm focus:outline-none' type="text" placeholder='Search for a recipe...'/>
        
        <button className='bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Search</button>
    </div>

  )
}

export default Search