
import userModel from "../Models/userModel.mjs";

const getAllUsers = async (req, res)=>{
    const result = await userModel.find()
    res.send(result)
}

const getUserByID =  async(req, res)=>{
    const id = req.params.id
    const result = await userModel.findById({_id:id})
    res.send(result)
}
const addUser = async(req, res)=>{
    const {userName, password, email} = req.body
    const data = {userName,password,email }
    const result = await new userModel(data).save()                          
    res.send(result)
}
const  deleteUserByID = async(req, res)=>{
     const id = req.params.id
     const result = await userModel.findByIdAndDelete({_id : id})
    res.send(result)
}
const updateUserByID = async(req, res)=>{
    const id = req.params.id
      const {userName, password, email} = req.body
    const data = {userName,password,email}
    const result = await userModel.findByIdAndUpdate({_id:id},data)
    res.send(result)
}


export default { getAllUsers, getUserByID, addUser, deleteUserByID, updateUserByID}