import { MapPin, WhatsappLogo } from "phosphor-react";
import { Container, ContainerLocation, ContainerWhatsApp, ModalStyle, ModalStyleBody, ModalStyleHeader } from "./style";
import { useState } from "react";

export function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <ContainerWhatsApp><WhatsappLogo size={42} weight="thin" /></ContainerWhatsApp>
                <ContainerLocation onClick={handleShow}><MapPin size={42} weight="fill" /></ContainerLocation>
            </Container>

            < ModalStyle show={show} onHide={handleClose}>
                < ModalStyleHeader closeButton>
                    < ModalStyle.Title> Localização</ ModalStyle.Title>
                </ ModalStyleHeader>
                < ModalStyleBody>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.286731294992!2d-43.1884807248236!3d-22.56837682586407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9909efc0d5366d%3A0x32fdf1067f08622d!2sTv.%20Joaquim%20Aguiar%2C%20182%20-%20Vila%20Mimosa%2C%20Mag%C3%A9%20-%20RJ%2C%2025900-000!5e0!3m2!1spt-BR!2sbr!4v1738195657947!5m2!1spt-BR!2sbr" width="600" height="450"   loading="lazy"></iframe>
                </ ModalStyleBody>
            </ ModalStyle>


        </>

    );
}