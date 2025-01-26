import { Box, Container, ContainerProducts, ContainerTitle } from "./style";
import violao from '../../assets/instruments/violao.jpg'

export function ContentAbout() {
    return (
        <div>
            <Container>
                <ContainerTitle>
                    <h3><a href="#sobre" id="sobre">Aulas Disponíveis</a></h3>
                    <p>Lorem ipsum dolor sit </p>
                </ContainerTitle>
                <ContainerTitle></ContainerTitle>
            </Container>
            <Box>
                <ContainerProducts>

                    <img src={violao} alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>

                </ContainerProducts>
                <ContainerProducts>

                    <img src="" alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>

                </ContainerProducts>
                <ContainerProducts>
                    <img src="" alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>
                </ContainerProducts>
                <ContainerProducts>

                    <img src={violao} alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>

                </ContainerProducts>
                <ContainerProducts>

                    <img src="" alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>

                </ContainerProducts>
                <ContainerProducts>
                    <img src="" alt="" />
                    <h4>nome</h4>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <a href="">Saiba Mais</a>
                </ContainerProducts>
            </Box>
            
        </div>



    );
}