
import mongoose from 'mongoose';
const { Schema } = mongoose;


// creating a project schema
const userSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
  
});

const userModel = mongoose.model("Users",userSchema)
export default userModel


