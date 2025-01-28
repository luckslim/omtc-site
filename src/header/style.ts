import styled from "styled-components"
export const Container = styled.main`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
`;
export const ContainerHeader = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    background-color: ${props=>props.theme['gray-800-transparent']};
    border-bottom: 100px;
    height:auto;
    img{
        width: 10rem;
    }
    nav{
        display: flex;
        gap: 1rem;
        a{
            text-decoration: none;
            color: ${props=>props.theme['gray-100']};
        }
    }
`;