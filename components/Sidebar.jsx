import { getAllRecipes } from '@/db/queries'
import Link from 'next/link'
import React from 'react'

export default async function Sidebar() {
    const recipes = await getAllRecipes()

    const categorizes =[ ...new Set(recipes.map(recipe => recipe.category))]

    return (
        <>
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
              {
                categorizes.map((category,i) => (
                    <li key={i}>
                    <Link  href={`/category/${category}`}>{category}</Link>
                </li>
                ))
              }
            </ul>
        </>
    )
}
