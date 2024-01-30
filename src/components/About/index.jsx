import { Fade, Slide } from "react-reveal"
import { AboutSection, CardsContainer, AboutCard } from "./About.style"

function About() {
  return (
    <Fade up big cascade>
        <AboutSection>
            
            <h1> Sobre Marcos Vinicius Angeli Costa </h1>
            <CardsContainer>
                <Slide left>
                    <AboutCard>
                        <img src="#" alt="" />
                        <div>
                            <h2>Infância</h2>
                            <p>
                            Olá, me chamo Marcos Vinicius e vou compartilhar um pouquinho da minha história. Desde criança, tive contato com computadores e tecnologia, conhecendo cada peça interna, antes mesmo de saber ler e escrever. Minha forma de brincar era diferente: via os brinquedos como uma fonte infinita de possibilidades, desmontando, montando e construindo novos a partir das peças antigas. Essa criatividade me divertia muito.
                            </p>
                        </div>
                    </AboutCard>
                </Slide>
                <Slide right>
                    <AboutCard>
                        <div>
                            <h2>Adolescência</h2>
                            <p>
                            Na adolescência, descobri outras habilidades que eu gostava e tinha talento, como música, desenho e culinária. Dediquei-me a desenvolver essas skills, que me proporcionavam uma mistura de emoções. Aprendi a cozinhar muito bem, a desenhar retratos realistas e a tocar vários instrumentos, como violão, guitarra, ukulele, teclado e escaleta.
                            </p>
                        </div>
                        <img src="#" alt="" />
                    </AboutCard>
                </Slide>
            </CardsContainer>
        </AboutSection>
        <AboutSection>
            <CardsContainer>
                <Slide left>
                    <AboutCard>
                        <img src="#" alt="" />
                        <div>
                            <h2>Adulto</h2>
                            <p>
                            No início da minha vida adulta, tive meu primeiro contato com programação ao iniciar um curso técnico. A sensação de construir e desconstruir coisas retornou de forma incrível, fazendo-me perceber qual seria minha profissão. A partir desse momento, dediquei-me a projetar e desenvolver cada vez mais projetos nessa área. Quanto à música, culinária e desenho, adotei-os como hobbies para meu tempo livre, afastando-me um pouco do computador.
                            </p>
                        </div>
                    </AboutCard>
                </Slide>
                <Slide right>
                    <AboutCard>
                        <div>
                            <h2>Para o Futuro</h2>
                            <p>
                            Atualmente, estou trabalhando na área e fico verdadeiramente feliz com a escolha que fiz. Acordar e poder exercer minha paixão todos os dias é uma sensação maravilhosa. Gosto de estudar e aplicar meus conhecimentos em projetos, aprimorando-os ao longo do tempo. Sigo estudando e me aperfeiçoando diariamente, sabendo exatamente onde quero chegar e o que quero construir para minha carreira!
                            </p>
                        </div>
                        <img src="#" alt="" />
                    </AboutCard>
                </Slide>
            </CardsContainer>
        </AboutSection>  
    </Fade>
  )
}

export default About