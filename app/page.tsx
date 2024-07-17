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

  // Init drinks
  // useEffect(() => {
  //   setLoading(true)
  //   const fetchRecipes = async () => {
  //     try {
  //       const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`)

  //       if (!res.ok) {
  //         throw new Error('Something went wrong')
  //       }
  //       const result = await res.json();
  //       setRecipes(result?.drinks)

  //       // console.log(recipes)

  //     } catch (err) {
  //       console.log(err)
  //     }
  //     setLoading(false)
  //   }

  //   fetchRecipes()
  // }, [])

  //Saved drinks
  const [favs, setFavs] = useState([]);

  const [fill, setFill] = useState('none');

  //Save drink
  const addToFavs = (recipe) => {
    if(favs.includes(recipe) === false){
      setFavs([...favs, recipe])
    } else {
      removeFav(recipe)
    }
  }

  //Remove saved drinks
  const removeFav = (toRemove) => {
    setFavs(favs.filter((recipe) => recipe !== toRemove))
    setFill('none')
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
                 recipes ? recipes.map((recipe) => (
                  <Link href={`/recipes/${recipe?.idDrink}`}>
                    <div className="relative h-[250px] w-[250px] p-10 m-2 text-center">
                    <img className="absolute z-[0] w-full h-full top-0 left-0" src={recipe?.strDrinkThumb} alt="drink image" />
                    <h2>{recipe?.strDrink}</h2>
                    <button className="absolute right-2 top-2" onClick={(e) => {
                      e.preventDefault()
                      addToFavs(recipe)
                      }}>
                        <Star fill={fill}/>
                        </button>
                    </div>
                  </Link>
                 )) 
                
                : (<h2>Try with something else!</h2>)
              }
            </div>
          </>)
        }

      </div>

        <h2 className="px-10">I tuoi preferiti</h2>
      <div className="flex items-center justify-baseline p-10 bg-yellow-200">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-5">
          <div onClick={() => setFavs([])} className="p-4 cursor-pointer bg-black text-white">Clear</div>
          {
            favs.length > 0 ? favs?.map((recipe) => (
              <Link href={`/recipes/${recipe?.idDrink}`}>
                <div className="relative h-[300px] w-[300px] p-10 m-2 bg-gray-300 text-center">
                <img className="absolute w-full h-full top-0 left-0" src={recipe?.strDrinkThumb} alt="drink image" />

                <h2>{recipe?.strDrink}</h2>
                <button onClick={(e) => {
                  e.preventDefault()
                  removeFav(recipe)
                  }}>
                <div className="w-10 h-10 p-2 rounded-full bg-[--teal] flex items-center">
            <svg width="38px" height="40px" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
                <g id="star" transform="translate(-2 -3)">
                    <path id="secondary" fill="#D95F43" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" />
                    <path id="primary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" fill="none" stroke="#D95F43" strokeWidth="1" />
                </g>
            </svg>
        </div>
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
