import { ContainerHeader } from './style'
import logo from '../assets/logo.svg'
export function Header(){
    return(
        <ContainerHeader>
            <img src={logo} alt="" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Aulas</a>
                <a href="#">Portifólio</a>
                <a href="#">Contato</a>
            </nav>
        </ContainerHeader>
    );
}