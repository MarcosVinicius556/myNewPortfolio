import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { HeaderBar, NameContent } from '../Header/Header.style';
import { Container } from './MenuBobile.style';

export function MenuMobile() {

    const[menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <HeaderBar>
                <NameContent>
                    <a>
                        Marcos Vinicius
                    </a>
                    {
                        menuIsVisible 
                        ? 
                            <Container>
                                <IoClose size={45} onClick={() => setMenuIsVisible(!menuIsVisible)}/>
                                <nav>
                                    <a href="#">HOME</a>
                                    <a href="#">SOBRE</a>
                                    <a href="#">HABILIDADES</a>
                                    <a href="#">PROJETOS</a>
                                    <a href="#">Entre em Contato</a>
                                </nav>
                            </Container> 
                        : 
                            <IoMenu size={45} onClick={() => setMenuIsVisible(!menuIsVisible)}/> 
                    }
                </NameContent>
        </HeaderBar>
    )
}