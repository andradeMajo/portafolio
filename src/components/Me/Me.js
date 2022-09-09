import "./Me.css"
import { motion, useMotionValue, useTransform } from "framer-motion"
import bombilla from "../../img/bombilla.gif"
import trabajo from "../../img/trabajo.gif"
import { Link, useNavigate } from "react-router-dom"
function Me() {
    const navegate = useNavigate()

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])

    return (
        <div
            className="bg-animation"

        >
            <div className="aboutMe">
                <div className="titleAboutMe">
                    Sobre mi:
                </div>
                <p style={{ "fontSize": "1.2rem" }} >

                    Hola!!
                    <br />
                    La tecnologia y el diseño siempre han sido de mi interés, sus diferentes tipos y cómo aprenderlas. En búsqueda de un camino que permitiera enlazar dichos intereses me encontré con la oportunidad de unirme a "Plataforma 5" donde tomé la decisión de retarme a realizar el Coding Bootcamp.
                    <br />
                    <br />

                    ¿pero? que es un Coding Bootcamp
                    <br />
                    <br />

                    Esta es una capacitación intensiva e inmersiva durante 15 semanas. La cual consiste en aprender e incrementar las habilidades técnicas, de igual forma las habilidades blandas, como lo son el trabajo en equipo, la escucha y comunicación activa. Todo esto con el fin de completar proyectos que evidenciara lo aprendido. Siempre con la disposición de mejorar en grupo.
                    <br />
                    En el que no solo mejoré mis habilidades técnicas y mi capacidad de aprendizaje, sino también reforcé mi autonomía, mis habilidades sociales a la hora de trabajar en grupo, superar la frustración y así mismo,  superé mis expectativas y hoy por hoy me sigo retando para afrontar nuevos desafíos.
                    <br />
                    <br />
                    Ademas me ecuentro realizando un tecnólogo en Análisis y Desarrollo de Sistemas de Información brindado por el Servicio Nacional de Aprendizaje "SENA". Basándose en la experimentación y mejoras de las tecnologías relacionadas con el ciclo de vida del Software, incluyendo sus diferentes fases.
                    <br />
                    <br />
                    Todo esto con el fin de seguir aprendiendo y apasinarme más por el mundo IT
                </p>
<motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 5 }}
              
        className="contacto"
            > 
            <Link to="/contacto">
            contactame
            </Link>
          
           </motion.button>
            </div>
 
            <motion.div

                className="cardContainer" style={{
                    x, y, rotateX, rotateY, z: 100, rotate: "5deg"
                }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 1, left: 1, right: 1, bottom: 1 }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{ cursor: "grabbing", scale: 0.9 }}
                onClick={() => navegate("/skills")}
            >
                <div className="cicle">
                    <div className="cicleW">

                    </div>
                    <div className="cardText">
                        Skills
                    </div>

                </div>
                <motion.div style={{
                    x, y, rotateX, rotateY, z: 100000, rotate: "-25deg"
                }}

                    drag
                    dragElastic={0.20}
                    dragConstraints={{ top: 0, left: 1, right: 1, bottom: 1 }} whileTap={{ cursor: "grabbing" }}>

                    <img className="logo" src={bombilla} alt="loading..." />
                </motion.div>

            </motion.div>

            <div></div>
            <motion.div className="cardContainer" style={{
                x, y, rotateX, rotateY, z: 100, rotate: "-5deg"
            }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 10, left: 1, right: 1, bottom: 1 }}
                whileTap={{ cursor: "grabbing", scale: 0.9 }}
                onClick={() => navegate("/projects")}
                whileHover={{
                    scale: 1.1
                }}
            >
                <div className="cicle">
                    <div className="cicleW circle2">
                    </div>
                    <div className="cardText">
                        Projects
                    </div>

                </div>
                <motion.div style={{
                    x, y, rotateX, rotateY, z: 100000, rotate: "-25deg"
                }}

                    drag
                    dragElastic={0.20}
                    dragConstraints={{ top: 0, left: 1, right: 1, bottom: 1 }} whileTap={{ cursor: "grabbing" }}>

                    <img className="logo1" src={trabajo} alt="loading..." />
                </motion.div>
            </motion.div>
           



        </div >)
}
export default Me