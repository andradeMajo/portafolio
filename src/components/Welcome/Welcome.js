import "./Welcome.css"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navegate=useNavigate()
    return (
        <><div className="conteiner">
            <p className="text animation-1">
                &gt;Hola!
            </p>
            <p className="text animation-2">
                &gt;bienvenido, mi nombre es:
            </p>
            <p className="text animation-3">
                &gt;Maria Jose Andrade y soy software developert
            </p>
            <p className="text animation-4">
                &gt;te invito a que descubras un poco más sobre mi...
            </p>
            <p className="text animation-5"> &gt; </p>


        </div>
        <motion.button
         
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 2}}
    transition={{ duration: 25 }}
onClick={()=>{
    navegate("/me")
}}
     className=" text botton"
  > continuar</motion.button>
        </>


    )
}
export default Welcome