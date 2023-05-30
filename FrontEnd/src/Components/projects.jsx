
import { Component } from "react";
import '../css/projects.css'

class Projects extends Component {



    render(){
        return(
            <div className="container">
            <h4>
                Recent projects
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est voluptatem neque non dolores, aliquam nostrum quisquam tenetur impedit porro, voluptas esse,
                 magnam incidunt. Numquam repudiandae alias iure excepturi veniam!</p>

            <div>
            <div className="row" >
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                      <h1 className="card-title"> Hello</h1>
                      <div className="card-body">
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quo recusandae, repellat atque quod eveniet, quaerat totam, rerum molestias dolore voluptatum nisi. Voluptatum 
                        non consequatur veritatis. Expedita, dolore distinctio. Harum.
                       </p>
                      </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                      <h1 className="card-title"> Hello</h1>
                      <div className="card-body">
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quo recusandae, repellat atque quod eveniet, quaerat totam, rerum molestias dolore voluptatum nisi. Voluptatum 
                        non consequatur veritatis. Expedita, dolore distinctio. Harum.
                       </p>
                      </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                      <h1 className="card-title"> Hello</h1>
                      <div className="card-body">
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quo recusandae, repellat atque quod eveniet, quaerat totam, rerum molestias dolore voluptatum nisi. Voluptatum 
                        non consequatur veritatis. Expedita, dolore distinctio. Harum.
                       </p>
                      </div>
                    </div>
                </div>
                
              </div>  
            </div>
            </div>
        )
    }
}


export default Projects;