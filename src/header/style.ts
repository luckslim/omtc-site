import styled from "styled-components"
export const ContainerHeader = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
    img{
        width: 10rem;
    }
    nav{
        display: flex;
        gap: 1rem;
        a{
            text-decoration: none;
            color: ${props=>props.theme['gray-400']};
        }
    }
    :focus{
        color: ${props=>props.theme['gray-400']};
        border-radius:4px;
        padding: 5px;
    }
`;