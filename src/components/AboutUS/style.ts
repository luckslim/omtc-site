import styled from "styled-components";
export const Container = styled.main`
    background-color: ${props=>props.theme['gray-800']};
    height: 20vh;
`; 
export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-items: center;
    @media screen and (max-width:780px){
        display: grid;
        grid-template-columns: repeat(1,4px);
        
    }
`;

export const ContainerCard = styled.div`
    background-color:${props=>props.theme['gray-700']};
    padding: 1rem;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    margin-top: 20px;
    width: 350px;
    img{
        width: 80px;
        filter: invert(50%);
    }
    #mozart{
        width: 80px;
        filter: invert(100%);
    }
    a{
        color: aliceblue;
        text-decoration:none;
        font-size: 1.0rem;
    }
`;