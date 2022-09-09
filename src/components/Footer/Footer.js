import "./Footer.css"
import { SiLinkedin, SiGithub,SiGmail} from "react-icons/si"
import { RiFolderUserFill } from "react-icons/ri";

import pdf from "./Majo_Andrade_CV_1.pdf"
function Footer (){
return(
  <>
  <footer >
    <div style={{"text-decoration":"none"}}className="footer-content">
     <h3>
      Contactame: 
     </h3>
      Maria Jose Andrade 
     <p > 
     <a name="contacto" href="mailto:mariajoseandradeloz@gmail.com" target="_blank"  className="fa fa-gmail" >
   <SiGmail/> </a>
  mariajoseandradeloz@gmail.com
 
      
  <br/>
   
     </p>
     <ul className="socials">
<li>
  <a href="https://www.linkedin.com/in/majo-andrade" target="_blank" className="fa fa-link">
  <SiLinkedin size={25} style={{"margin":"15px"}} />
  </a>
</li>
<li>
  <a  href="https://github.com/andradeMajo" target="_blank"  className="fa fa-github">
    <SiGithub size={25} style={{"margin":"15px"}}/>
  </a>
</li>

<li>
  <a download="Majo_Andrade_Cv.pdf"href={pdf} target="_blank"  className="fa fa-cv">
    <RiFolderUserFill size={35} style={{"margin":"15px"}}/>

  </a>
</li>
<li>
  
</li>
     </ul>
    </div>
    <div className="footer-bottom">
<p> copyright &copy;2022 code by Majo Andrade </p>
    </div>
</footer>
  </>
    
      
)
}
 export default Footer