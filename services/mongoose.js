import mongoose from "mongoose";


export async function dbConnect() {
  try {

     const db =  await mongoose.connect(process.env.MONGO_URI);
     console.log('connected mongoose')

     return db
    
  } catch (e) {
    console.log(e.message);
  }
}
