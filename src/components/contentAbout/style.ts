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
    gap: 2rem;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-top: -300px;

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
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    width: 350px;
    &:hover{
        box-shadow: 1px 1px 20px 1px ${props=>props.theme['yellow-400']};
        transition:  box-shadow 1s;
    }
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
    }
    h4{
        color:${props=>props.theme['gray-100']};
        margin: 10px 0;
    }
    div{
        display: flex;
        flex-direction: row-reverse;
        
        button{
            background-color: ${props=>props.theme['yellow-300']};
            padding: 0.5rem;
            border: none;
            border-radius: 8px ;
            cursor: pointer;
            color: ${props=>props.theme['gray-900']};
            font-weight: 500;


        }
        button:hover{
            background-color: ${props=>props.theme['yellow-400']};
            color: ${props=>props.theme['gray-700']};
            font-weight: 500;
            opacity: 80%;
            transition: background-color 1s ;
        }
    }


`;