import { IoClose } from 'react-icons/io5';
import { Container } from './MenuBobile.style';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    return (
        <Container>
            <IoClose size={25} />
            <nav>
                <a href="#">HOME</a>
                <a href="#">SOBRE</a>
                <a href="#">HABILIDADES</a>
                <a href="#">PROJETOS</a>
                <a href="#">Entre em Contato</a>
            </nav>
        </Container>
    )
}