import React from 'react'
import RecipeCard from './RecipeCard'
import { getAllRecipes } from '@/db/queries'

export default async function AllRecipes() {
    const recipes = await getAllRecipes()


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            {
                recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
            }
        </div>
    )
}
