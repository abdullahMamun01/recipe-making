
import RecipeDetails from "@/components/recipes/RecipeDetails";
import RecipeSteps from "@/components/recipes/RecipeSteps";
import { getRecipeById } from "@/db/queries";


export default async function RecipesDetailsPage({params: {id}}) {
  const {steps,...recipe } =  await getRecipeById(id) 

  return (
    <main>
      <section>
        <RecipeDetails recipe={recipe}  />
        <RecipeSteps steps={steps} />
      </section>
    </main>
  );
}
