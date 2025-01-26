import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from "react-bootstrap";
import backImgPrimary from '../../assets/back-omtc1.jpg'
import backImgSecondary from '../../assets/back-omtc2.jpg'
import backImgthird from '../../assets/back-omtc.jpg'
import { StyledCarousel, StyledCarouselCaption } from './style';
export function Carousels() {
    return (
        <div>
            <StyledCarousel data-bs-theme="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backImgPrimary}
                        alt="First slide"
                    />
                    <StyledCarouselCaption>
                        <h3>OMTC: <br /> Onde o talento encontra o conhecimento para criar harmonias inesquecíveis.</h3>
                        <Button  href='#' variant="outline-info">Ver Mais</Button>
                    </StyledCarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backImgSecondary}
                        alt="Second slide"
                    />
                    <StyledCarouselCaption>
                        <h3>Desperte sua paixão pela música com a OMTC – <br /> Transformamos notas em talentos.</h3>
                        <Button  href='#' variant="outline-info">Ver Mais</Button>
                    </StyledCarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backImgthird}
                        alt="Third slide"
                    />
                    <StyledCarouselCaption>
                        <h3>OMTC: <br />A oficina onde seu talento musical ganha vida e conhecimento vira arte.</h3>
                        <Button href='#' variant="outline-info">Ver Mais</Button>
                    </StyledCarouselCaption>
                </Carousel.Item>
            </StyledCarousel>
        </div>



    );
}