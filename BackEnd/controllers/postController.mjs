


import postModel from "../Models/postModel.mjs";

const getAllPosts = async (req, res)=>{
    const result = await postModel.find()
    res.status(200).send(result)
}

const getPostByID =  async(req, res)=>{
    const id = req.params.id
    const result = await postModel.findById({_id:id})
    res.send(result)
}
const addPost = async(req, res)=>{
    const { author, body} = req.body
    const data = {author, body  }

    const result = await new postModel(data).save()
                                
    res.send(result)
}
const  deletePostByID = async(req, res)=>{
     const id = req.params.id
     const result = await postModel.findByIdAndDelete({_id : id})
    res.send(result)
}
const updatePostByID = async(req, res)=>{
    const id = req.params.id
      const { body, author} = req.body
    const data = {body,author}
    const result = await postModel.findByIdAndUpdate({_id:id},data)
    res.send(result)
}


export default { getAllPosts, getPostByID, addPost, deletePostByID, updatePostByID}