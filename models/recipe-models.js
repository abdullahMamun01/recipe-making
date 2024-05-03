import mongoose, {Schema} from "mongoose";

const recipesSchema = new Schema({
    name : {
        require : true ,
        type : String
    } ,

    description : {
        require : true ,
        type : String
    } ,
    author : {
        require : true ,
        type : String
    } ,

    activeTime: {
        type: String, 
        required: true
      },
      totalTime: {
        type: String, 
        required: true
      },
      thumbnail: {
        type: String,
        required: false
      },
      image: {
        type: String,
        required: true
      },
      category: {
        type: String, 
        required: false
      },
      serves: {
        type: Number, 
        required: false
      },
      rating: {
        type: Number,
        min:  0 ,
        max: 5 ,
        required: false
      },

})


export const RecipesModel  =  mongoose.models.recipes || mongoose.model('recipes' , recipesSchema)


