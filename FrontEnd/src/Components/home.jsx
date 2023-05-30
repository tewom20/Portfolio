
import 'boxicons'
import '../css/home.css'


 function Home (){
       return (     
      <div id='home' className='row '>
            <div className='col-sm-12 col-md-12 col-lg-6' id='img-cont' >
           <img src="./images/pic.png"  className="rounded mx-auto d-block" id='myimage' alt="No image"></img>
           </div>
           <div className='col col-sm-12 col-lg-6 col-md-12' id='home-sec'>
            <h4>Hello, it is me</h4>
            <h2>Tewom Ferdinand</h2>
            <h5 > I am a <span style={{color:"#1df"}}>FULL STACK DEVELOPER</span></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fuga, rerum, vitae assumenda dignissimos nostrum sit fugiat facere accusamus 
                  perferendis ratione error quibusdam officiis dolorem sed. Nam recusandae quidem delectus!</p>
                  <div id='social_media'>
                        <a> <i class='bx bxl-facebook bx-tada' ></i></a>
                        <a><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                        <a> <i class='bx bxl-linkedin'></i></a>
                         <a><i class='bx bxl-twitter bx-tada' ></i></a>
                  </div>
             <button>Download CV</button>
           </div>
          
           
      </div>
         

       )

}

export default Home