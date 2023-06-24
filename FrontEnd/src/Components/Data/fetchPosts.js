
import axios, { Axios } from "axios";


export const getPosts =()=>{

     axios.get("http://localhost:5000/api/projects").then(res=>  res.data.content
    )
}

