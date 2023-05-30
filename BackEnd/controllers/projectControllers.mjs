

const getAllProjects = (req, res)=>{
    res.status(200).send("Hello to you!")
}

const getProjectsByID = (req, res)=>{
    res.status(200).send(req.params.id)
}
const addProject = (req, res)=>{
    const data = req.body
    res.status(200).send(data)
}
const  deleteProjectByID = (req, res)=>{
    res.status(200).send("Hello to you!")
}


export default { getAllProjects, getProjectsByID, addProject, deleteProjectByID}