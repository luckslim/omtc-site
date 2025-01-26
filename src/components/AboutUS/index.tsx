import { Container, ContainerContent,ContainerCard } from "./style";
import light from '../../assets/svg/light.svg'
import Mozart from '../../assets/mozart.png'
export function AboutUs(){

    return(

       <Container>
            <ContainerContent>
                <ContainerCard>
                    <img src={light} alt="" />
                    <div>
                    <p>Descubra sua paixão pela música! Matrículas abertas.</p>
                    <a href="">Matricule-se já</a>
                    </div>

                </ContainerCard>
                <ContainerCard>
                    <img src={Mozart} id="mozart" alt="" />
                    <p>"A música é o mediador entre a vida do espírito e a vida dos sentidos."
                    <br />– Wolfgang Amadeus Mozart</p>
                </ContainerCard>
            </ContainerContent>
       </Container>

    );
}