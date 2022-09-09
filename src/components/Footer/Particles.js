import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

function Paticles() {

    const particlesInit = async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };

    const particlesLoaded =  (container) => {
         console.log(container);
    }
    return (
        <Particles 
        id="tsparticles" 
        init={particlesInit} 
        Loaded={particlesLoaded} 
        options={{
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 1500
                    }
                },
                "line_linked": {
                    "enable": true,
                    "opacity": 0.02
                },
                "move": {
                    "direction": "right",
                    "speed": 0.05
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }}
        />
    )
}
export default Paticles;