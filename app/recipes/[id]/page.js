
import RecipeDetails from "@/components/recipes/RecipeDetails";
import RecipeSteps from "@/components/recipes/RecipeSteps";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata({ params:{id} }, parent) {

  const recipe =  await getRecipeById(id) 


  const previousImages = (await parent).openGraph?.images || [];
  return {
      title: recipe?.name,
      description: recipe?.description.slice(0, 100),
      openGraph: {
          images: [
     
              {
                  url: 'https://recipe-making.vercel.app/api/og',
                  width: 1200,
                  height: 600,
              },
          ],
      },
  };
}

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
