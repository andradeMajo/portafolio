import "./Projects.css"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { GrFormPrevious } from "react-icons/gr";
import Tonic3 from "../../img/Tonic3.png"
const data = [
    {
        img: Tonic3,
        titulo: "Virtuals Events",
        description: " Junto de la mano a Tonic 3 y un grupo conformado por 5 participantes, se trabajó en una aplicación web adaptable para la transmisión de videos en vivo. Sólido backoffice y navegación de usuario. Incluyendo su huso horario y con la posibilidad de modificar su idioma.",
        repo: "https://github.com/marshelaillon/tonic3-api"
    },
    {
        img: "https://images.vexels.com/media/users/3/259414/isolated/preview/7567f678177107b773a40a286940984b-seis-flechas-de-tiro-con-arco-silueta-detallada.png",
        titulo: "E-commerce - Shoot Off",
        description: " Trabajo grupal que consiste en el desarrollo de un E-commerce donde el fin era comercializar productos de Arquería y poder lograr la comodidad de usuario.",
        repo: "https://github.com/pablobarreiro/shootoff"

    },
    {
        img: "https://static.wixstatic.com/media/2ef3b37e31434ea38816fd46e1d6cc79.png/v1/fill/w_522,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cine.png",
        titulo: "The Movie Base",
        description: "Su fin era lograr demostrar las habilidades aprendidas en solitario. Esta interfaz de contenidos permite visualizar series y películas, y crear una experiencia plena para el usuario."
        ,
        repo: ""

    }
]

function Projects() {
    const navegate = useNavigate()
    

    return (
        <>
            <div className="grilla">

                {data.map((e, key) => (
                    <motion.div whileHover={{
                        scale: 1.1
                    }}

                        className="circuloazul" key={key}>
                        <a href={e.repo} target="_blank" style={{ "textDecoration": "none" }}>
                            <div className="card" >
                                <div className="header">
                                    <img className="imgcard" alt="imgprojects" src={e.img} />

                                </div>
                                <div className="bodycard">
                                    {e.titulo}
                                    <br />
                                    <br />
                                    {e.description}
                                </div>
                            </div>
                        </a>
                    </motion.div>)

                )}
             

                
                <motion.button whileHover={{
                    scale: 1.1
                }} className="previus"
                    onClick={() => {
                        navegate("/me")
                    }}>
                    <GrFormPrevious size="50px" />

                </motion.button>
            </div> 
            



        </>
    )
}
export default Projects