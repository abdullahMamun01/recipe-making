import { UserModel } from "@/models/user-model";
import { dbConnect } from "@/services/mongoose";
import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/utils/data-utils";
import mongoose from "mongoose";

const { RecipesModel } = require("@/models/recipe-models");

async function getAllRecipes(filter = {}) {
  await dbConnect();
  const recipes = await RecipesModel.find(filter).lean();
  return replaceMongoIdInArray(recipes);
}

async function getRecipeById(id) {
  await dbConnect();
  const recipe = await RecipesModel.findById(id).lean();
  return replaceMongoIdInObj(recipe);
}

async function createUser(userInfo) {
  await dbConnect();
  const user = await UserModel.create(userInfo);
  return user;
}

async function findUserByCredentials(credentials) {
  await dbConnect();
  const user = await UserModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObj(user);
  }
  return null;
}

async function updateFavorite(recipeId, authId) {
  await dbConnect();

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
