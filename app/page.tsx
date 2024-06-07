'use client'
import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchRecipes = async () => {
        try{
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)

        if(!res.ok){
          throw new Error('Something went wrong')
        }
        const result = await res.json();
        setRecipes(result?.drinks)

        console.log(recipes)
        
      } catch(err){
        console.log(err)
      }
      setLoading(false)
    }

    fetchRecipes()
  }, [])
  return (
    <>
    <Header/>
    <Search/>

    <div className="flex items-center justify-center p-10">
      <div className="flex flex-wrap flex-col lg:flex-row items-center gap-5">
        {
          recipes?.map((recipe) => (
            <Card 
            key={recipe?.idDrink} 
            recipe={recipe}/>
          ))
        }
      </div>
    </div>

    </>
  );
}
