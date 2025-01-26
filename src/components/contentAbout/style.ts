import styled from "styled-components";
export const Container = styled.main`
    padding-top: 200px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-items: center;
    justify-content: space-around;
`;
export const ContainerTitle = styled.div`
    a{
        text-decoration: none;
        color:${props=>props.theme['gray-100']};
        border-bottom:1px solid ${props=>props.theme['violet-500']};
    }
`;

export const Box = styled.div`
    display: grid;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: -400px;

    @media screen and (max-width: 1680px) {
        grid-template-columns: repeat(3, 350px);
    }

    @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
    }
`;
export const ContainerProducts = styled.div`
    background-color: ${props=>props.theme['gray-700']};
    padding: 1rem;
    border-radius: 8px;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
    }
    h4{
        color:${props=>props.theme['gray-100']};
    }
    a{
        background-color: ${props=>props.theme['yellow-300']};
        color:${props=>props.theme['gray-100']};
        padding: 0.5rem;
        border-radius:8px;
        text-decoration: none;
        display: pointer;
    }
    a:hover{
        background-color: ${props=>props.theme['yellow-400']};
        color:${props=>props.theme['gray-700']};
        font-weight: 500;
    }

`;