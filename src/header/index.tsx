import { ContainerHeader, Container, ButtonStyle } from './style'
import logo from '../assets/logo.svg'
export function Header() {
    return (
        <Container>
            <ContainerHeader>
                <img src={logo} alt="" />
                <nav>
                    <ButtonStyle variant='outline-secondary'  href="#home" >Home</ButtonStyle>
                    <ButtonStyle variant='outline-secondary' href="#sobre">Sobre Nós</ButtonStyle>
                </nav>
                {/* <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </ContainerHeader>
        </Container>

    );
}