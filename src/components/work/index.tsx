import { Container, ContainerContent, ContainerList, ContainerListContent, ContainerTitle } from "./style";
import future from '../../assets/svg/future.svg'
import { Checks, Medal } from "phosphor-react";

export function Working() {
    return (
        <>
            <ContainerTitle id="sobre">
                <div>
                    <h3>OMTC & Seu Futuro</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div></div>
            </ContainerTitle>
            <Container>
                <ContainerContent><img src={future} alt="" /></ContainerContent>
                <ContainerContent>
                    <ContainerList>
                        <Checks size={32} color="#61cffa" />
                        <ContainerListContent>
                            <h4>Mercado de Trabalho </h4>
                            <p>A OMTC prepara os Alunos para o mercado de trabalho, seu futuro está garantido aqui! </p>
                        </ContainerListContent>
                    </ContainerList>
                    <ContainerList>
                        <Checks size={32} color="#61cffa" />
                        <ContainerListContent>
                            <h4>Preparatórios</h4>
                            <p>
                            Oferecemos um pacote de preparatórios para Teste de Habilidade Especifica(T.H.E)<br />
                            <Medal size={20}  color="#cae436" />Licenciatura em Música <br />
                            <Medal size={20} color="#61fa6e"/>Curso de Formação de Sargento Músico das Forças Armadas 
                            </p>
                        </ContainerListContent>
                    </ContainerList>
                    <ContainerList>
                        <Checks size={32} color="#61cffa" />
                        <ContainerListContent>
                            <h4>Aulas Particulares</h4>
                            <p>As aulas são particulares. <br /> carga horária de (1hr/Semana), com renovação de Matrículas a cada (2 Semestres) </p>
                        </ContainerListContent>
                    </ContainerList>
                </ContainerContent>
            </Container>
        </>



    );
}