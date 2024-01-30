import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { MenuMobile } from '../components/MenuMobile';
import Presentation from '../components/SectionPresentation';
import About from '../components/About';

export default function Home() {

    // Definir o estado para armazenar as dimensões da tela
    const [tamanhoTela, setTamanhoTela] = useState({
        largura: window.innerWidth,
        altura: window.innerHeight,
    });

    // Atualizar as dimensões da tela quando a janela for redimensionada
    useEffect(() => {
        const handleResize = () => {
        setTamanhoTela({
            largura: window.innerWidth,
            altura: window.innerHeight,
        });
        };

        // Adicionar um ouvinte de redimensionamento ao montar o componente
        window.addEventListener('resize', handleResize);

        // Remover o ouvinte ao desmontar o componente para evitar vazamentos de memória
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(tamanhoTela);

    return (
        <>
            {tamanhoTela.largura < 1366 ? <MenuMobile /> : <Header />}
            <Presentation />
            <About />
        </>
      );
}