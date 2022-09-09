import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { useLocation } from 'react-router-dom' 
import Welcome from "./components/Welcome/Welcome"
import Me from './components/Me/Me';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
function App() {
const pathname= useLocation().pathname
const root= pathname.split("/")

  return (
    <><Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/me' element={<Me/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/> 
       </Routes>
   {root[1]!==""?<Footer/>:null }
    </>
    
  );
}

export default App;
