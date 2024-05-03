import RecipeCard from '@/components/recipes/RecipeCard'
import { getAllRecipes } from '@/db/queries'
import React from 'react'

export default async function page() {
    const recipeList = await getAllRecipes()
  return (
    <div className='w-full'>
        <h1 className='text-center text-bold text-2xl text-orange-700 mt-5'>All recipe</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 justify-items-center px-10">
            {
                recipeList.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
            }
        </div>

    </div>
  )
}
