import { TypeAnimation } from "react-type-animation"
import { Fade  } from "react-reveal"
import { PresentationContent, PresentationText } from "./Presentation.style"
import { FaAngleDown } from "react-icons/fa";

function Presentation() {
  return (
    <section>
      <PresentationContent>
        <PresentationText>
          <Fade up big cascade>
            <p>Olá, me chamo Marcos Vinicius</p>
          </Fade>
            <div>
              <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Sou um Desenvolvedor FullStack',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Sou um Músico',
                      1000,
                      'Sou um Apaixonado por tecnologia',
                      1000,
                      'Sou um Gamer',
                      1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', 
                          display: 'inline-block' }}
                  repeat={Infinity}
                />
            </div>
        </PresentationText>
        <button>
            <FaAngleDown size={18}/>
            <a href="#">Saiba mais</a>
        </button>
      </PresentationContent>
      
    </section>
  )
}

export default Presentation