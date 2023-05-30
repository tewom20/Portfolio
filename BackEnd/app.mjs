
import Express, { json }  from "express";
import cors from 'cors'
import bodyparser from 'body-parser'
import* as dotenv from 'dotenv'

// custome imports
import projectRouter from "./routes/projectsController.mjs";
import conn from "./config/Database.mjs";
import ProjectModel from "./Models/projectModel.mjs";


// using the environment variables
dotenv.config({path:'./config/.env'})

// create an intance of the express app
const app = Express()
  
// connect to the DATABASE
const connectionString = process.env.DB_LOCAL
conn(connectionString)

// add dummy data

const adddata = async ()=>{
    const data = {
        title: "Data mining" ,// String is shorthand for {type: String}
        author: "TEWOM",
        body: "this is a perfect beginning t the desired outcome",
    }

    const result = await new ProjectModel(data).save()
                                         
    console.log(result)
    

}
adddata()

// middlewares
app.use(cors())
app.use(bodyparser.json())
app.use("/api/projects",projectRouter)


const PORT =   process.env.PORT 


// app listenting 
app.listen(PORT, ()=>{
    console.log("Server is listening on port:" +PORT)
})





