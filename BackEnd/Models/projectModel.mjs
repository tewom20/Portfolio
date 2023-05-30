
import mongoose from 'mongoose';
const { Schema } = mongoose;


// creating a project schema
const projectSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  
});

const ProjectModel = mongoose.model("Projects",projectSchema)
export default ProjectModel


