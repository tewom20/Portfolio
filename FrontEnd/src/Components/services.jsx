
import { Component } from "react";

class Services extends Component {

         state = {
            service:["Web Development", " Software Development", " Graphics Designing"," Database Management"]
         }

    render(){
        return(
            <>
            
            <div className="container">
            <h1>
                Services provided.
            </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nam odio laudantium facilis. Magni nesciunt rerum dolorum voluptatum praesentium veniam atque corrupti sequi, 
                    modi temporibus obcaecati, reprehenderit non cum laudantium.</p>
                <ol>
                 {
                    this.state.service.map(service=> <li key={service}>{service}</li>)

                 }
                </ol>
            </div>
            </>
        )
    }
}


export default Services;