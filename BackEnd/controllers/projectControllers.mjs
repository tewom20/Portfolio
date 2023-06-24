
import ProjectModel from "../Models/projectModel.mjs";

const getAllProjects = async (req, res)=>{
    const result = await ProjectModel.find()
    res.send(result)
}

const getProjectsByID =  async(req, res)=>{
    const id = req.params.id
    const result = await ProjectModel.findById(id)
    res.send(result)
}
const addProject = async(req, res)=>{
    const {title, author, body} = req.body
    const data = { title,author, body }
    const result = await new ProjectModel(data).save()
                                
    res.send(result)
}
const  deleteProjectByID = async(req, res)=>{
     const id = req.params.id
     const result = await ProjectModel.findByIdAndDelete({_id : id})
    res.status(200).send(result)
}
const updateProjectByID = async(req, res)=>{
    const id = req.params.id
    const {title, body, author} = req.body
    const data = {title,body,author}
    const result = await ProjectModel.findByIdAndUpdate({_id:id},data)
    res.send(result)
}


export default { getAllProjects, getProjectsByID, addProject, deleteProjectByID, updateProjectByID}