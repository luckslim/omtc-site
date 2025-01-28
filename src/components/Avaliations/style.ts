import styled from "styled-components";

export const Container =styled.div`
    margin: 100px 0px ;
`;

export const StyledSlide = styled.div`
    background-color: ${props=>props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem;
    height: 300px;
`;
export const ContainerTestimonial = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ContainerAvaible = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 80px;
        border-radius: 9999px;
    }
    span img{
        width: 40px;

    }
`;
export const InfoAvaible = styled.div`
    h4{
        border-bottom: 1px solid ${props=>props.theme['violet-500']};
        color: ${props=>props.theme['gray-100']};
        display: flex;
        justify-content: space-between;
        margin: 10px 0 ;
    }
    small{
        color: ${props=>props.theme['gray-100']};
    }
`;
