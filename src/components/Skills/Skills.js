import ImgSkills from "./ImgSkills"
import "./Skills.css"
import {  SiRedux, SiHtml5, SiCss3,SiNodedotjs, SiExpress, SiPassport, SiSequelize, SiPostgresql  } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { ImDatabase } from "react-icons/im";
import { DiJavascript1, DiReact,DiSass, DiGit,  } from "react-icons/di";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const Icons = [
    {
        "name": "JavaScript",
        "icon": DiJavascript1 
    },
    {
        "name": "React",
        "icon": DiReact 
    },
    {
        "name": "Reactredux",
        "icon": SiRedux 
    }, {
        "name": "Html",
        "icon": SiHtml5 
    }, {
        "name": "Css",
        "icon": SiCss3 
    }, {
        "name": "SASS",
        "icon": DiSass 
    },
    {
        "name": "Node Js",
        "icon": SiNodedotjs 
    },
    {
        "name": "Node Js",
        "icon": SiExpress 
    },
    {
        "name": "Passport",
        "icon": SiPassport 
    },
    {
        "name": "Sequelize",
        "icon": SiSequelize 
    },
    {
        "name": "Jwt",
        "icon": VscJson 
    },
    {
        "name": "GIT",
        "icon": DiGit 
    }, {
        "name": "SQL Server",
        "icon": SiPostgresql 
    },
    {
        "name": "Estructura de datos",
        "icon": ImDatabase
    }

]

function Skills() {
    const navegate=useNavigate()
    return(
        <><ImgSkills/>
        <div className="circulo">
            <div className="skillborder">
                
    <div className="grid">
          {Icons.map((e, key)=>(
          <motion.div whileHover={{
            scale: 1.1,
        }} 
        key={key}
          title={e.name}
        >
           <motion.div  className="name" > {e.name}
            </motion.div>
            <e.icon className="icon"size={50}/>
          </motion.div>)

      )}   
        </div>
</div>
            </div>
        <h1 className="titleSkill">
            Skills
        </h1>

        
     <motion.button  whileHover={{
            scale: 1.1,
            background:"white"
        }}  className="previus"
     onClick={()=>{
        navegate("/me")
    }}>
       <GrFormPrevious  size="50px" />
     
     </motion.button>
     
   </>  

    )
}
export default Skills
