import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props=>props.theme['gray-700']};
    margin-top: 2rem;
    border-top:1px  solid ${props=>props.theme['gray-500']};
    @media screen and (max-width:780px){
        display:grid ;
        justify-content: center;
        align-items: center;
        justify-items: center;
    }
    

`;
export const ContainerFooter = styled.div`
    display: flex;
    padding: 3rem;
    gap: 1rem;
`;
export const ContainerContent = styled.div`
    display: grid;
    justify-items: center;
    img{
        width:100px;
    }
`;