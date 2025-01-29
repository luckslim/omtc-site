import styled from "styled-components";
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-around;
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
    img{
        max-width: 600px;
    }
    @media screen and (max-width:780px) {
        img{
            width: 400px;
        }
    }
`;

export const ContainerList = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 400px;
`;

export const ContainerListContent = styled.div`
    h4{
        color: ${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['yellow-300']};
    }
`;