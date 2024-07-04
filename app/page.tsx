'use client'
import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'

export default function Home({ }) {
  const [recipes, setRecipes] = useState([]);
  const [favs, setFavs] = useState([]);

  const [loading, setLoading] = useState(false);

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

  const fetchFavs = async () => {
          fetch(`http://localhost:3001/favdrinks`)
      .then(response => response.json())
      .then(data => setFavs(data))
      .catch(err => console.log(err))
      }  
       
    useEffect(() => {
     fetchFavs();
    }, []);


    function scrollInView () {
      document.querySelector('.results').scrollIntoView({behavior: "smooth"})  
    }


  return (
    <div className="bg-[--pale]">
      <Header func={scrollInView}/>
      <Search setRecipes={setRecipes} />

      <div className="results flex items-center justify-baseline p-10">
        {
          loading ? (<><h2 className="text-center 3-xl">Loading...</h2></>) : (<>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-5">
              {
                recipes?.map((recipe) => (
                  <Card
                    key={recipe?.idDrink}
                    recipe={recipe?.strDrink} 
                    url={recipe?.strDrinkThumb}
                    link={recipe?.idDrink}/>
                ))
              }
            </div>
          </>)
        }

      </div>

      <div className="flex items-center justify-baseline p-10">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-5">
          {
            favs?.map((fav) => (
              <Card
                key={fav?.id}
                recipe={fav?.name}
                url={fav?.url}
                link={fav?.id}
              />
            ))
          }
        </div>
      </div>
    </div>

  );
}
