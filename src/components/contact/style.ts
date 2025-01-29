import styled from "styled-components";
import back from '../../assets/back-guitar.jpg'

export const Container = styled.div`
        width: 100%;
        /* height: 50vh; */
        margin: 20px 0;
        /* background:url(${back}); */
        background-size: cover;
        filter: opacity(70%);
        display: flex;
        justify-content: space-around;
        color: ${props => props.theme['white']};
        align-items: center;
        justify-items: center;
        @media screen and (max-width:780px) {
                display:grid;
                grid-template-columns: 1fr;
                align-items: center;
                justify-items: center;
        }
`;
export const Map = styled.div`
        margin: 2rem 0 ;
        display:flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        iframe{
                width: 500px;
                height: 300px;
                border-radius: 1rem;    
        }
        @media screen and (max-width:780px) {
                iframe{
                        width: 390px;
                        height: 300px;
                        border-radius: 8px;    
                }
                
        }
        
`;
export const ContainerContact = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 2rem;
        width: 100px;
        @media screen and (max-width:780px) {
                span{
                        width: 300px;
                        
                }                
        }
        span{   
                padding: 1rem;
                background-color: ${props => props.theme['gray-800-transparent']};
                border-radius: 4px;
                display: grid;
                align-items: center;
                justify-items: center;
                box-shadow: 1px 1px 5px 1px ${props=>props.theme['gray-100']};
                div{
                        display: flex;
                        justify-content: space-around;
                        gap: 1rem;
                        h6{
                                border-bottom: 1px solid ${props => props.theme['violet-500']};
                                color: ${props => props.theme['gray-100']};
                        }
                }
        
        }

`;

