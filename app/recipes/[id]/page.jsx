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

  const data = await getData(id)
  console.log(data?.drinks[0]?.strDrink)
  return (
    <div className='bg-[--pale]'>
      <div className='container mx-auto my-20'>
        <div className='flex border-2 border-gray-300 cursor-pointer p-4'>
          <div className='relative w-[50%] h-[500px] mr-8'>
            <Image src={data?.drinks[0]?.strDrinkThumb} layout='fill' object='cover' alt='image of drink' />
          </div>

          <div className='w-[50%]'>
            <h1 className='py-4 text-gray-500 font-semibold text-2xl text-center mb-4'>{data?.drinks[0]?.strDrink}</h1>
          </div>

          {/* Ingredients Card */}
          <div className='bg-white p-4 mb-4 border border-gray-300 rounded'>
            <h2 className='text-xl font-semibold mb-2'>Ingredienti:</h2>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = data?.drinks[0][`strIngredient${index}`];
              const measurement = data?.drinks[0][`strMeasure${index}`];

              if (ingredient && measurement) {
                return (
                  <div key={index}>
                    <span>{ingredient}</span>
                  </div>
                )
              }
            })}
          </div>


          {/* Steps Card */}
          <div className='bg-white p-4 mb-4 border border-gray-300 rounded'>
            <h2 className='text-xl font-semibold mb-2'>Istruzioni:</h2>
            <ol className='list-decimal pl-4'>
              {data?.drinks[0].strInstructions.split(`\r\n`).map((step, index) => {
                <li key={index}>{step}</li>
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
