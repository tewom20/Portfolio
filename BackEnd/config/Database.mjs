
import mongoose from "mongoose";


//const connectionString = process.env.DB_LOCAL
//console.log(connectionString)
const conn = (connectionString)=>{
     mongoose.connect(connectionString).then(()=>{
        console.log("Successfully connected to the database")
     }).catch(()=>{
        console.log("could not connect to the DB")
     })
     
}

export default conn


