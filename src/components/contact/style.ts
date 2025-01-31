import styled from "styled-components";
import {  Modal } from "react-bootstrap";

export const Container = styled.div`
        display: grid;
        align-items: center;
        justify-items: center;
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1000;
        gap: 1rem;


`;
export const ContainerWhatsApp = styled.a`
        display: flex;
        align-items: center;
        justify-items: center;
        background-color: ${props=>props.theme['green-300']};
        color:${props=>props.theme['white']};
        padding: 0.5rem;
        border-radius: 9999px;
        cursor: pointer;
        
`;
export const ContainerLocation = styled.div`
        display: flex;
        align-items: center;
        justify-items: center;
        background-color: ${props=>props.theme['gray-800-transparent']};
        color:${props=>props.theme['red-600']};
        padding: 0.5rem;
        border: 1px solid ${props=>props.theme['white']};
        border-radius: 9999px;
        cursor: pointer;
        
`;
export const ModalStyle = styled(Modal)`

`;
export const ModalStyleHeader = styled(Modal.Header)`
        background-color: ${props=>props.theme['gray-700']};
        border: none;
`;
export const ModalStyleBody = styled(Modal.Body)`
        background-color: ${props=>props.theme['gray-600']};
        iframe{
                width: 100%;
                border-radius: 8px;
                height: 500px;
        }
`;
