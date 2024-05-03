import RecipeCard from "@/components/recipes/RecipeCard";
import { getAllRecipes } from "@/db/queries";
import React from "react";

export default async function CategoryPage({ params: { name } }) {
  const uriDecode = decodeURIComponent(name);
  const recipes = await getAllRecipes({ category: uriDecode });
  
  return (
    <section className="container py-8">
      <div>
        <h3 class="font-semibold text-xl">{uriDecode}</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {
                recipes?.map(recipe => <RecipeCard key={recipe?.id} recipe={recipe} />)
            }
        </div>
      </div>
    </section>
  );
}
