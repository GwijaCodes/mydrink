'use client'
import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Search from './components/Search'
import Star from './components/Star'
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Scroll to drinks search
  function scrollInView () {
    document.querySelector('.results').scrollIntoView({behavior: "smooth"})  
  }

  // Get drinks
  useEffect(() => {
    setLoading(true)
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`)

        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const result = await res.json();
        setRecipes(result?.drinks)

        // console.log(recipes)

      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }

    fetchRecipes()
  }, [])

  //Saved drinks
  const [favs, setFavs] = useState([
    {
      idDrink: 11410,
      strDrink: 'Gin Fizz',
      pic: ''
  },
  {
      idDrink: 11417,
      strDrink: 'Gin Sour',
      pic: ''
  }
  ]);

  const [isFav, setIsFav] = useState(false);

  //Save drink
  const addToFavs = (recipe) => {
    if(favs.includes(recipe) === false){
      setFavs([...favs, recipe])
    }
  }

  //Remove saved drinks
  const removeFav = (toRemove) => {
    setFavs(favs.filter((recipe) => recipe !== toRemove))  
  }

  return (
    <div className="bg-[--pale]">
      <Header func={scrollInView}/>
      <Search setRecipes={setRecipes} />

      <div className="results w-full scroll-m-[30vh] flex items-center justify-baseline p-10">
        {
          loading ? (<><h2 className="text-center 3-xl">Loading...</h2></>) : (<>
            <div className="flex overflow-x-scroll pb-10 gap-5">
              {
                 recipes.length > 1 ? recipes.map((recipe) => (
                  <Link href={`/recipes/${recipe?.idDrink}`}>
                    <div className="h-[100px] w-[max-content] p-10 m-2 bg-gray-300 text-center">
                    <h2>{recipe?.strDrink}</h2>
                    <button onClick={(e) => {
                      e.preventDefault()
                      addToFavs(recipe)
                      }}>
                        <Star/>
                        </button>
                    </div>
                  </Link>
                 )) 
                
                : (<h2>No results here! Try again.</h2>)
              }
            </div>
          </>)
        }

      </div>

      <div className="flex items-center justify-baseline p-10">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-5">
          <div onClick={() => setFavs([])} className="p-4 cursor-pointer bg-black text-white">Clear</div>
          {
            favs.length > 0 ? favs?.map((recipe) => (
              <Link href={`/recipes/${recipe?.idDrink}`}>
                <div className="h-[100px] w-[max-content] p-10 m-2 bg-gray-300 text-center">
                <h2>{recipe?.strDrink}</h2>
                <button onClick={(e) => {e.preventDefault(), removeFav(recipe)}}>
                <Star/>
                  </button>
                </div>
              </Link>
            )) : <h2>No favs yet! Too bad.</h2>
          }
        </div>
      </div>
    </div>

  );
}
