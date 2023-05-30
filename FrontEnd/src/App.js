
import { Route, Routes , redirect} from 'react-router-dom';
import Projects from './Components/projects'

import About from './Components/about';
import Home from './Components/home.jsx';
import Navbar from './Components/Navbar';

import logo from './logo.svg';
import './App.css';
import Services from './Components/services';
import { Skills } from './Components/skills';

function App() {
   
  return (
    <> 
   <Navbar/>
   <div className='' id='body'>
   <Routes>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>  
    </Routes>
   </div>
    
  </>
  );
}

export default App;
