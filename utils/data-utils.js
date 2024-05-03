


export function  replaceMongoIdInArray (allRecipes){
    

    return allRecipes.map(({_id , ...res}) => ({
        id: _id.toString() ,
        ...res
    }))
}

export async function replaceMongoIdInObj (recipeObj) {
    const {_id, ...recipe} =  {...recipeObj , id: recipeObj._id.toString()}
    return recipe
}