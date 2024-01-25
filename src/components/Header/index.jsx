import { HeaderBar, ContactButton, NameContent, ActionContainer} from "./Header.style"

function Header() {
  return (
    <HeaderBar>
        <nav>
            <NameContent>
                <a>
                    Marcos Vinicius
                </a>
            </NameContent>
            <ActionContainer>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">HABILIDADES</a></li>
                    <li><a href="#">PROJETOS</a></li>
                </ul>
                <ContactButton>
                    <a href="#">Entre em contato</a>
                </ContactButton>
            </ActionContainer>
        </nav>
    </HeaderBar>
  )
}

export default Header