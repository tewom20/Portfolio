
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum tenetur sapiente nisi quos dolore provident ut, repudiandae expedita rem corrupti numquam minus voluptas iste. Cupiditate consequatur eum ad laborum placeat totam eaque ratione esse, magni expedita temporibus velit libero culpa asperiores sed at. Facere nam placeat at id deleniti natus nostrum repellendus, obcaecati harum ea provident alias ipsam? Illum, ratione quibusdam molestias suscipit eos nam itaque. Voluptas, dolore et suscipit molestiae in laboriosam doloremque quasi pariatur cum eum atque officiis ratione adipisci quae aspernatur velit accusantium quia quos doloribus neque praesentium voluptates, ipsum repellendus. At alias maiores corrupti hic soluta ex deleniti? At assumenda, nihil ipsam impedit distinctio vitae mollitia excepturi blanditiis? Distinctio officiis aliquid dolores, ea tempora quisquam vel enim animi ratione sed ipsum, minus saepe harum ducimus! Mollitia voluptatem itaque quidem impedit, et reiciendis. Amet repellat sequi provident, possimus saepe est praesentium! Autem, quisquam est! Tempore dolorem sit doloremque temporibus? Excepturi, dicta enim pariatur quos libero dolorem animi totam cum ducimus ipsa quibusdam, nisi culpa voluptate vel odit velit. Amet tempora eligendi saepe sunt. Id, quae commodi, ratione doloremque magni quisquam nulla tempora molestiae unde ipsum laboriosam quis, assumenda sed similique nemo. Temporibus quia veritatis quis! Consectetur.</p>
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