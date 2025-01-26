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
    margin: 10px;
    a{
        text-decoration: none;
        color:${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['violet-500']};
    }
`;

export const BoxContent = styled.div`

    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-around;
    margin-top: -400px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (max-width:780px){
        display: grid;
        grid-template-columns: repeat(1fr);
        align-items: center;
        justify-content: center;
    }

`;
export const CardStudent = styled.div`
    width: 50%;
    height: 630px;
    padding: 1rem;
    background-color: ${props => props.theme['gray-700']};
    border-radius: 8px;
    img{
        width:100%;
        border-radius: 8px;
        opacity: calc(50%);
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4{
        margin: 10px 0;
        color:${props => props.theme['gray-100']};
        border-bottom: 1px solid ${props => props.theme['violet-500']};
    }
    }

    p{
        word-spacing: 1px;
        letter-spacing: 2px;
        line-height: 20px;
    }
    @media screen and (max-width:780px){
        width: 100%;
        height: 600px;
        p{
            text-align: justify;
        word-spacing: 1px;
        letter-spacing: 1px;
        line-height: 20px;
        }
        

    }
`;
export const ContentStudent = styled.div`
    width: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    p{
        padding: 1rem;
        /* background-color: ${props => props.theme['gray-700']}; */
        border-radius: 8px;
        color:${props => props.theme['gray-100']};
        word-spacing: 1px;
        letter-spacing: 2px;
        line-height: 30px;
    }
    @media screen and (max-width:780px){
        width: 100%;
        text-align:justify;
        p{
        padding: 1rem;
        /* background-color: ${props => props.theme['gray-700']}; */
        border-radius: 8px;
        color:${props => props.theme['gray-100']};
        word-spacing: 1px;
        letter-spacing: 1px;
        line-height: 30px;
    }
    }
`;