
import Express, { json }  from "express";
import cors from 'cors'
import bodyparser from 'body-parser'
import* as dotenv from 'dotenv'

// custome imports
import projectRouter from "./routes/projectsController.mjs";
import userRouter from "./routes/userRouter.mjs"
import postRouter from './routes/postRouter.mjs'
import conn from "./config/Database.mjs";



// using the environment variables
dotenv.config({path:'./config/.env'})

// create an intance of the express app
const app = Express()
  
// connect to the DATABASE
const connectionString = process.env.DB_LOCAL
conn(connectionString)


// middlewares
app.use(cors())
app.use(bodyparser.json())

//add routes
app.use("/api/projects",projectRouter)
app.use("/api/users",userRouter)
app.use("/api/posts",postRouter)

const PORT =   process.env.PORT 


// app listenting 
app.listen(PORT, ()=>{
    console.log("Server is listening on port:" +PORT)
})





