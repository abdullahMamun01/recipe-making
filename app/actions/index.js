"use server"

import { revalidatePath } from 'next/cache'
const { createUser, findUserByCredentials, updateFavorite } = require("@/db/queries")
const { redirect } = require("next/navigation")



async function registerUser(formData){
    
    const user = Object.fromEntries(formData)

    const create = await createUser(user)
    redirect("/login")
}


async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        console.log('user login successfully')
        return found;
    } catch (error) {
        throw error;
    }
}

async function toggleFavRecipe (recipeId ,authId){
    try {
        await updateFavorite(recipeId,authId)
        revalidatePath(`/details/${recipeId}`)
        
    } catch (error) {
        console.log(error.message)
    }
    
    revalidatePath('/', 'layout')
}

export {
    registerUser,
    performLogin,
    toggleFavRecipe
}