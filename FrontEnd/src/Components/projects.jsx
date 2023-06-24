
import { Component } from "react";
import {getPosts} from "./Data/fetchPosts";
import '../css/projects.css'
import axios from "axios";



class Projects extends Component {

     
      state ={
        posts :[]
        
      
     
     
    
     }

     async componentDidMount(){
         const {data:posts} = await axios.get("http://localhost:5000/api/projects")
        this.setState({posts})
        console.log(posts[0])
     }
    
 
    render(){
       const {posts} = this.state
        return(
           
            <div className="container">
            <h4>
                Recent projects 
            </h4>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est voluptatem neque non dolores, aliquam nostrum quisquam tenetur impedit porro, voluptas esse,
                 magnam incidunt. Numquam repudiandae alias iure excepturi veniam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut accusantium voluptatibus soluta quod assumenda dignissimos, perferendis corporis ea consequatur quisquam? Veniam cum quibusdam doloribus, adipisci praesentium non maxime laboriosam quo aliquam fuga placeat eos ipsam similique dolor? Deserunt rerum harum ea repudiandae. Cupiditate deserunt laboriosam exercitationem quae dolor modi aut vel suscipit similique rerum illum ipsum expedita sequi dolores, nihil harum assumenda sit mollitia error, molestiae pariatur quaerat? Quisquam earum debitis inventore officiis adipisci corporis voluptatum, impedit asperiores? Dolor tempora repellendus dolorum ex quo rerum impedit sed ea reprehenderit. Vero tempore temporibus eius nihil, ratione officia nobis eveniet dolore corrupti dolores, quos labore deleniti quidem voluptates repudiandae atque quae culpa quasi hic ea illo. Blanditiis eaque animi nam nisi voluptatem quae! Illum laudantium minus id iure. Reprehenderit eius, repudiandae velit ipsam, suscipit voluptatibus atque quasi qui dolorum, quibusdam minus. Harum cumque mollitia voluptatem a sint culpa assumenda adipisci esse quaerat exercitationem unde quae enim, minima voluptatibus placeat. Omnis explicabo nobis aliquid saepe ad, a temporibus nisi accusantium rem eligendi, reiciendis modi cum consectetur magni officiis accusamus perferendis dicta libero. Aliquam atque ad quia in repellat vel quas blanditiis hic enim rem ipsam, obcaecati temporibus quis dolorum cumque tempore esse.</p>

            <div>
            <div className="row" >
          {posts.map(item=>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                    <img class="card-img-top" src="./images/pic3.jpeg" alt="Card image cap"/>
                      <div className="card-body">
                      <h1>{item["title"]}</h1>
                      </div>
                    </div>
                </div>
          )}
                {/* <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                    <img class="card-img-top" src="./images/pic4.jpeg" alt="Card image cap"/>
                      <div className="card-body">
                       <h1>PROJECT 3</h1>
                      </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                    <img class="card-img-top" src="./images/pic1.jpeg" alt="Card image cap"/>
                      <div className="card-body">
                       <h1>PROJECT 3</h1>
                      </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                    <img class="card-img-top" src="./images/pic3.jpeg" alt="Card image cap"/>
                      <div className="card-body">
                       <h1>PROJECT 3</h1>
                      </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-4" id="card">
                    <div className="card" style={{background:" #abb3fd"}}>
                    <img class="card-img-top" src="./images/pic4.jpeg" alt="Card image cap"/>
                      <div className="card-body">
                       <h1>PROJECT 3</h1>
                      </div>
                    </div>
                </div> */}
                
              </div>  
            </div>
            </div>
        )
    }
}


export default Projects;