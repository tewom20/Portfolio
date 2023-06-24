
import mongoose from 'mongoose';
const { Schema } = mongoose;


// creating a project schema
const postSchema = new Schema({
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  
});

const postModel = mongoose.model("Post",postSchema)
export default postModel


