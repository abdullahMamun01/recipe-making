import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecipeCard({ recipe }) {

    return (
        <div className="card">
            <Image src={recipe?.thumbnail} className="rounded-md w-full" alt={recipe?.title} width={500} height={200} />
            <Link href={`/recipes/${recipe?.id}`}>
                <h4 className="my-2">{recipe?.name}</h4>
            </Link>

            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {recipe?.rating}</span>
                <span>{recipe?.author}</span>
            </div>
        </div>
    )
}
