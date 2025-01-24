import { ContainerHeader, Container } from './style'
import logo from '../assets/logo.svg'
import { Button, NavDropdown } from 'react-bootstrap';
export function Header() {
    return (
        <Container>
            <ContainerHeader>
                <img src={logo} alt="" />
                <nav>
                    <Button variant='outline-secondary' active href="#">Home</Button>
                    <Button variant='outline-secondary' href="#">Sobre Nós</Button>
                    <Button variant='outline-secondary' href="#">Contato</Button>
                </nav>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </ContainerHeader>
        </Container>

    );
}