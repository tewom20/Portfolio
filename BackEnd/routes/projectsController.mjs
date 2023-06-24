

 import  Express from "express";

// custom imports

import projectControllers from "../controllers/projectControllers.mjs";
//instantiatete the routes

 const { getAllProjects, getProjectsByID,addProject, deleteProjectByID,updateProjectByID } = projectControllers
const Router = Express.Router();

// get  all Projects
Router.get("/", getAllProjects)

//get project by id
Router.get("/:id",getProjectsByID )

// Add a product
Router.post("/",addProject )

// Delete product by ID
Router.delete("/:id", deleteProjectByID)

// Update product by ID

Router.patch("/:id", (req, res)=>{
    const id = req.params.id
    // const  data = get object from DB with id this ID
    // if(data)
    res.send(id)
})

Router.put("/:id", updateProjectByID)



export default Router




















