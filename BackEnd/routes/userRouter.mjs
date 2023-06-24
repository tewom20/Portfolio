

import  Express from "express";

// custom imports

import userControllers from "../controllers/userController.mjs";
const { getAllUsers, getUserByID,addUser, deleteUserByID,updateUserByID } = userControllers


//instantiatete the routes
const Router = Express.Router();

// get  all Posts
Router.get("/", getAllUsers)

//get post by id
Router.get("/:id",getUserByID )

// Add a product
Router.post("/",addUser )

// Delete post by ID
Router.delete("/:id", deleteUserByID)

// Update post by ID

Router.patch("/:id", (req, res)=>{
    const id = req.params.id
    // const  data = get object from DB with id this ID
    // if(data)
    res.send(id)
})

Router.put("/:id", updateUserByID)



export default Router




















