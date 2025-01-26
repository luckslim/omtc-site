import styled from "styled-components";
import { Carousel } from "react-bootstrap";
export const StyledCarousel = styled(Carousel)`
   img{
      height: 75vh;
      width: 100%;
      object-fit: cover;
      opacity: calc(40%);
   }

`;
export const StyledCarouselCaption = styled(Carousel.Caption)`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   a{
      margin:50px 0;
      color: ${props=>props.theme['gray-100']};
   }
   h3{
      color: ${props=>props.theme['gray-300']};
   }
`;
