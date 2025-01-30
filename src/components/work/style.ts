import styled from "styled-components";
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px ;
    h3{
        color:${props => props.theme['gray-100']};
        border-bottom: 1px solid ${props => props.theme['yellow-300']};
        width: 300px;
    }
`;
export const Container = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 gap: 2rem;
 @media screen and (max-width:780px) {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        justify-items: center;
        
    }

`;
export const ContainerContent = styled.div`
    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    gap: 5rem;
    img{
        max-width: 600px;
    }
    @media screen and (max-width:780px) {
        img{
            width: 350px;
        }
    }
`;

export const ContainerList = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    width: 600px;
    @media screen and (max-width:780px) {
        width: 380px;
        display: flex;
    align-items: center;
    justify-items: center;
    gap: 1rem;
        
    }
`;

export const ContainerListContent = styled.div`
    h4{
        color: ${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['yellow-300']};
        width: 80%;
    }
`;