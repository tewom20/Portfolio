
import { Component } from "react";


import '../css/about.css'
class About extends Component {



    render(){
        return(
            <>
           
            <div className="container">
            <h1>
                About me.
            </h1>
             <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam corrupti neque reiciendis? Ut deleniti nam possimus qui! Impedit unde odit at. Sunt, 
                voluptatibus officia! Recusandae corporis in earum officia mollitia?
             </p>
             <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium officiis non placeat, facilis quos excepturi sint voluptates expedita! Doloremque itaque in maiores suscipit
                 repudiandae odit? Quaerat molestias incidunt error magnam!
             </p>
            </div>
            <div className="container" id="contact">
             <span>contact : +237672783445</span>
             <span style={{color:"#1df"}}>Gmail : tewomf20@gmail.com</span>
            </div>
            <div id="comment" className="container">
                <form  >
                    <h2>Comment </h2>
                 <input placeholder="Full name" typeof="text" id="name" />
                 <input placeholder="Email" typeof="email"/>
                 <textarea  typeof= "text"placeholder="write a comment"/>
                 <button typeof="submit">Submit</button>
                </form>
            </div>
            </>
        )
    }
}


export default About;