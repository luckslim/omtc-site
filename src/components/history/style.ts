import styled from "styled-components";
export const Container = styled.main`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-items: center;
    justify-content: space-around;
`;
export const ContainerTitle = styled.div`
    margin: 10px;
    a{
        text-decoration: none;
        color:${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['yellow-300']};
    }
`;

export const BoxContainer = styled.div`
   display: flex;
   align-items: center;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   margin-bottom: 5rem;

   img{
    width:100%;
   }
   span:hover{
    border: 1px solid ${props=>props.theme['violet-500']};
   }
   span{
    text-align: justify;
    padding: 1rem;
    display: grid;
    align-items: center;
    justify-items: center;
    width: 500px;
    background-color: ${props => props.theme['gray-700']};
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow-y: auto  ;
    overflow-x: hidden;
    p{
        letter-spacing: 1px;
        line-height: 20px;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        justify-content: space-between;
        color:${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['violet-500']} ;
        margin-bottom: 10px;
    }
   }
   @media screen and (max-width:780px){
        display: grid;
        grid-template-columns: repeat(1fr);
        gap: 1rem;
        align-items: center;
        justify-content: center;
        justify-items: center;
        span{
    text-align: justify;
    padding: 1.5rem;
    display: grid;
    align-items: center;
    justify-items: center;
    width: 90%;
    background-color: ${props => props.theme['gray-700']};
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow-y: auto  ;
    overflow-x: hidden;
    img{
        width: 300px;
    }
    p{
        letter-spacing: 1px;
        line-height: 20px;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        justify-content: space-between;
        color:${props => props.theme['gray-100']};
        border-bottom:1px solid ${props => props.theme['violet-500']} ;
        margin-bottom: 10px;
    }
   }

   }
`;
export const BoxContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    div{
        background-color: ${props => props.theme['gray-700']};
        padding: 1rem;
        border-radius: 8px;
        width: 350px;
        margin: 0.3rem 0 ;
        box-shadow: 1px 1px 50px 0.5px ${props=>props.theme['yellow-300']};
        span{
            display: flex;
            flex-direction: row-reverse;
            color: ${props => props.theme['yellow-300']};
            font-size: 2rem;
        }
        h4{
            color: ${props => props.theme['gray-100']};
        }
    }
    div:hover{
        opacity: calc(80%);
    }
    @media screen  and (max-width:780px){
        display: grid;
        grid-template-columns: repeat(1fr);
        gap:1rem;
        div{
        background-color: ${props => props.theme['gray-700']};
        padding: 1rem;
        border-radius: 8px;
        width: 350px;
        margin: 0.3rem 0 ;
        box-shadow: 1px 1px 10px 0.5px ${props=>props.theme['yellow-300']};
        span{
            display: flex;
            flex-direction: row-reverse;
            color: ${props => props.theme['yellow-300']};
            font-size: 2rem;
        }
        h4{
            color: ${props => props.theme['gray-100']};
        }
    }
    }

`;
export const BoxHistory = styled.div`

`;
export const BoxHistoryContent = styled.div`
    display: flex;
    justify-content: space-around;
    div::-webkit-scrollbar{
        display: none;
    }
    div:hover{
        opacity: calc(80%);
        box-sizing: border-box;
        border:1px solid ${props => props.theme['violet-500']};
    }
    div{
        text-align: center;
        width: 500px;
        height: 500px;
        background-color: ${props => props.theme['gray-700']};
        padding: 1rem;
        line-height: 25px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        overflow-y: auto ;
        overflow-x: hidden;
        p{
            letter-spacing: 1px;
            text-align: justify;
        }
    }
`;
export const ContainerStudent = styled.span`
        width: 300px;
        height: 300px;
        background-color: ${props => props.theme['gray-700']};
        padding: 1rem;
        line-height: 25px;
        border-radius: 8px;
        overflow-y: auto ;
        overflow-x: hidden;
        &:hover{
            border: 1px solid ${props => props.theme['gray-100']};
        }
        &::-webkit-scrollbar{
        display: none;
        }
        span{
            object-fit: cover;
        }
        img{
            opacity: calc(50%);
            width: 100%;
            border-radius: 8px;
            
        }
        h6{
            margin-top: 10px;
            color: ${props => props.theme['gray-100']};
            border-bottom: 1px solid ${props => props.theme['violet-500']};
        }


`;
