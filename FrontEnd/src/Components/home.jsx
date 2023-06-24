
import 'boxicons'
import lodash from 'lodash'
import '../css/home.css'


 function Home (){
      const pics = ["pic.png","pic6.jpeg"]
      let i = lodash.random(0,pics.length-1,false)
      console.log(i)
       return (     
      <div id='home' className='row '>
            <div className='col-sm-12 col-md-12 col-lg-6' id='img-cont' >
           <img src={"./images/"+pics[i] } className="rounded mx-auto d-block" id='myimage' alt="No image"></img>
           </div>
           <div className='col col-sm-12 col-lg-6 col-md-12' id='home-sec'>
            <h4>Hello, it is me</h4>
            <h2>Tewom Ferdinand</h2>
            <h5 > I am a <span style={{color:"#1df"}}>FULL STACK DEVELOPER</span></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fuga, rerum, vitae assumenda dignissimos nostrum sit fugiat facere accusamus 
                  perferendis ratione error quibusdam officiis dolorem sed. Nam recusandae quidem delectus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus iure assumenda ipsum. Aliquam eum nulla sapiente nobis tenetur quis suscipit, ratione repellendus veritatis
                   impedit consequatur amet molestias ad officia.</p>
                  <div id='social_media'>
                        <a > <i class='bx bxl-facebook bx-tada' ></i></a>
                        <a><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                        <a> <i class='bx bxl-linkedin'></i></a>
                         <a href='https://twitter.com/tenyi20'><i class='bx bxl-twitter bx-tada' ></i></a>
                  </div>
             <button>Download CV</button>
             
           </div>
           <div className='col col-sm-12 col-lg-12 col-md-12' id='home-sec'>
      
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique tempore saepe odit
                   maiores nostrum vel repudiandae nobis nemo minima doloribus, eaque animi unde deleniti omnis.
                    Reprehenderit eos dolorum, minima minus autem modi sapiente ducimus aut atque laudantium officiis, 
                    quidem quos odit veniam, quisquam fugiat mollitia eius architecto laboriosam nam voluptatum itaque aliquid.
                     Tempore impedit, quos maiores neque dolorem a distinctio earum temporibus molestias assumenda. 
                     Deleniti corporis aliquam tempora placeat dignissimos eveniet ipsam maiores nulla odio quaerat
                      accusamus delectus consectetur vero omnis earum, officia, voluptate non! Hic, dicta. Maiores et 
                      quae eius perspiciatis temporibus, fugiat dignissimos, laborum ipsam unde earum dolorem fugit quibusdam consequuntur ea ad omnis consequatur, dolor quia. Natus voluptates a aperiam nemo. Consequatur itaque incidunt unde iste, ut nobis eos mollitia alias error praesentium fugit cupiditate porro rerum corrupti quisquam laudantium officiis temporibus nihil consequuntur provident. Amet, ea officia omnis iure aliquam totam repellendus vero, corporis reiciendis asperiores aperiam esse voluptatum? Numquam, dolores delectus odio non facilis sunt tempora et deleniti? Ipsam cumque modi dicta quis commodi et quam neque harum cum tempore necessitatibus error odio eligendi sequi, nam amet suscipit voluptate rerum non doloremque explicabo sunt! 
                  Amet sint ut consectetur quibusdam velit corrupti aliquam natus eos!</p>
            

                 
</div>
</div>
         

       )

}

export default Home