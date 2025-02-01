import { FacebookLogo, InstagramLogo, YoutubeLogo, } from "phosphor-react";
import { Container, ContainerContent, ContainerFooter } from "./style";
import logo from '../../assets/logo.svg'

export function Footer() {
    return (
        <Container>
            <ContainerFooter>
                <ContainerContent>
                <img src={logo} alt="" />
                © 2025 Company, Inc. All rights reserved.
                </ContainerContent>
            </ContainerFooter>
            <ContainerFooter>
                <ContainerContent>
                    <InstagramLogo size={32} color="#ffff" />
                    <p>Instagram</p>
                </ContainerContent>
                <ContainerContent>
                    <FacebookLogo size={32} weight="fill" color="#ffff" />
                    <p>Facebook</p>
                </ContainerContent>
                <ContainerContent>
                    <YoutubeLogo size={32} weight="fill" color="#ffff"/>
                    <p>Youtube</p>
                </ContainerContent>
            </ContainerFooter>
        </Container>
    );
}