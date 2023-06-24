

import  Express from "express";

// custom imports

import postControllers from "../controllers/postController.mjs";
const { getAllPosts, getPostByID,addPost, deletePostByID,updatePostByID } = postControllers


//instantiatete the routes
const Router = Express.Router();

// get  all Posts
Router.get("/", getAllPosts)

//get post by id
Router.get("/:id",getPostByID )

// Add a product
Router.post("/",addPost )

// Delete post by ID
Router.delete("/:id", deletePostByID)

// Update post by ID

Router.patch("/:id", (req, res)=>{
    const id = req.params.id
    // const  data = get object from DB with id this ID
    // if(data)
    res.send(id)
})

Router.put("/:id", updatePostByID)



export default Router




















