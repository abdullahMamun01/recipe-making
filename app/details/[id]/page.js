
import RecipeDetails from "@/components/recipes/RecipeDetails";
import RecipeSteps from "@/components/recipes/RecipeSteps";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata({ params:{id}, searchParams }, parent) {
  const {name , description,image} =  await getRecipeById(id) 
  console.log({name})
  const previousImages = (await parent).openGraph?.images || [];
  return {
      title: name,
      description: description.slice(0, 100),
      openGraph: {
          images: [

            {
              url: image,
              width: 1200,
              height: 600,
          },
              {
                  url: `http://localhost:3000/api/og`,
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
