
import RecipeDetails from "@/components/recipes/RecipeDetails";
import RecipeSteps from "@/components/recipes/RecipeSteps";
import { getRecipeById } from "@/db/queries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params:{id} }, parent) {

  const recipe =  await getRecipeById(id) 


  const previousImages = (await parent).openGraph?.images || [];
  return {
      title: recipe?.name,
      description: recipe?.description.slice(0, 100),
      openGraph: {
          images: [
     
              {
                  url: recipe?.thumbnail,
                  width: 1200,
                  height: 600,
              },
          ],
      },
  };
}

export default async function RecipesDetailsPage({params: {id}}) {
  const recipeItem =  await getRecipeById(id) ;
if(!recipeItem){
  notFound()
}
const {steps,...recipe } = recipeItem
  return (
    <main>
      <section>
        <RecipeDetails recipe={recipe}  />
        <RecipeSteps steps={steps} />
      </section>
    </main>
  );
}
