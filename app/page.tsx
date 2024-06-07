'use client'
import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Search from './components/Search'

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [serahc, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchRecipes = async () => {
        try{
        const response = await  fetch(`https://api.api-ninjas.com/v1/cocktail?name=margarita`, {headers: {
          'X-Api-Key':'GZCmAsCPeDM5Ds5xzNgREw==gexByyTsWgm9HnAy'
      }})
        const data = await response.json();
        setRecipes(data)

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


    </>
  );
}
