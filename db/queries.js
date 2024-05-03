import { UserModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/utils/data-utils";
import mongoose from "mongoose";

const { RecipesModel } = require("@/models/recipe-models");

async function getAllRecipes(filter = {}) {
  const recipes = await RecipesModel.find(filter).lean();
  return replaceMongoIdInArray(recipes);
}

async function getRecipeById(id) {
  const recipe = await RecipesModel.findById(id).lean();
  return replaceMongoIdInObj(recipe);
}

async function createUser(userInfo) {
  const user = await UserModel.create(userInfo);
  return user;
}

async function findUserByCredentials(credentials) {
  const user = await UserModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObj(user);
  }
  return null;
}

async function updateFavorite(recipeId, authId) {
  try {
    const findUser = await UserModel.findById(authId);

    if (findUser) {
      const findIdInFav = findUser.favourites.find(
        (id) => id.toString() === recipeId
      );

      if (findIdInFav) {
        findUser.favourites.pull(new mongoose.Types.ObjectId(recipeId));
      } else {
        findUser.favourites.push(new mongoose.Types.ObjectId(recipeId));
      }
 
      findUser.save()
    }


  } catch (error) {
    console.log(error);
  }
}
export { getAllRecipes, getRecipeById, createUser, findUserByCredentials,updateFavorite };
