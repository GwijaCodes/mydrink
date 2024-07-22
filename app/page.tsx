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
    <div>
      <Header func={scrollInView}/>
      <Search setRecipes={setRecipes} />

      <div className="results relative w-full min-h-10 scroll-m-[25vh] flex items-center justify-baseline p-10">
        {
          loading ? (<><h2 className="text-center 3-xl">Let's see...</h2></>) : (<>
            <div className="flex overflow-x-scroll pb-10 gap-5">
              {
                 recipes ? recipes.map((recipe) => (
                  <Link href={`/recipes/${recipe?.idDrink}`}>
                    <div className="relative h-[250px] w-[250px] p-10 m-2 text-center">
                    <img className="absolute z-[0] w-full h-full top-0 left-0" src={recipe?.strDrinkThumb} alt="drink image" />
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#000000ee] to-30% to-transparent"></div>
                    <h2 className="text-white absolute bottom-4 left-8">{recipe?.strDrink}</h2>
                    <button className="absolute right-2 top-2" onClick={(e) => {
                      e.preventDefault()
                      addToFavs(recipe)
                      }}>
                        <Star fill={fill}/>
                        </button>
                    </div>
                  </Link>
                 )) 
                
                : (
                  
                <div>
                  <h2 className="text-lg">Whoops, try with something else!</h2>

                  <div className="m-20">
                  <p className="handw text-2xl">“Alcohol is probably one of the greatest things to arrive upon the earth - alongside of me.”</p>
                  <p>-Charles Bukowski</p>
                  </div>
                  </div>
              )
              }
            </div>
          </>)
        }
      </div>

        <h2 className="px-10 mt-20 text-xl">Your favorites</h2>
      <div className="flex items-center justify-baseline p-10">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-5">
          {/* <div onClick={() => setFavs([])} className="p-4 cursor-pointer bg-black text-white">Clear</div> */}
          {
            favs.length > 0 ? favs?.map((recipe) => (
              <Link href={`/recipes/${recipe?.idDrink}`}>
                <div className="relative h-[250px] w-[250px] p-10 m-2 bg-gray-300 text-center">
                <img className="absolute w-full h-full top-0 left-0" src={recipe?.strDrinkThumb} alt="drink image" />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[--teal] to-40% to-transparent"></div>
                <h2 className="text-white absolute bottom-4 left-8">{recipe?.strDrink}</h2>
                <button className="absolute right-2 top-2" onClick={(e) => {
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
