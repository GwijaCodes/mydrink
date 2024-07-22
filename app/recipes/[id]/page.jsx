import Image from 'next/image'
import Header from '@/app/components/Header'

async function getData(id) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

  if (!res.ok) {
    throw new Error('aaaaa')
  }

  return res.json()
}


export default async function page({ params }) {
  const { id } = params;

  const data = await getData(id);
  const recipe = data?.drinks[0];

  return (
  <div className='flex flex-col md:flex-row m-10 relative'>
    <h1 className='title text-6xl absolute top-0 left-0'>{recipe.strDrink.toUpperCase()}</h1>
  <div className='max-w-[fit-content] mt-20'>
    <img src={recipe.strDrinkThumb} className='max-w-[40vw]' alt="drink image" />
  </div>
  <div className="recipe my-20 md:mx-20">
    <div className="ingredients my-10">
      <h3 className='title mb-2'>ingredients:</h3>
      <ul>
        {
          Array.from({ length: 20 }, (_, i) => i + 1).reduce((acc, index) => {
            const ingredient = recipe[`strIngredient${index}`];
            const measurement = recipe[`strMeasure${index}`];
          
            if (ingredient) {
              acc.push(
                <li key={index} className='border border-b-stone-950 w-full'>{`${measurement ? measurement : ''} ${ingredient}`}</li>
              );
            }
            return acc;
          }, [])
          
        }
        </ul>
    </div>
    <div className="instructions handw">
      <h3 className='title mb-2'>preparation:</h3>
      <p className="handw bg-[#F2A594] px-6 text-xl">{data?.drinks[0].strInstructions}</p>
      </div>
      <div className="chips flex gap-4 my-2">
      <span className="chip px-2 py-1 text-sm bg-black text-white">{recipe.strAlcoholic}</span>
      <span className="chip px-2 py-1 text-sm bg-[--teal] text-black">{recipe.strGlass}</span>
      </div>
  </div>
  </div> 
  )
}
