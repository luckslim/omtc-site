import { BoxContainer, BoxContent, BoxHistory, BoxHistoryContent, Container, ContainerStudent, ContainerTitle } from "./style";
import Maestro from '../../assets/svg/maestroTemplate.svg'
import logo from '../../assets/svg/logoSecondary.svg'
import Rute from '../../assets/alunos/Rute.jpeg'
export function History() {
    return (
        <div>
            <Container>
                <ContainerTitle>
                    <h3><a href="#sobre" id="sobre">História - OMTC</a></h3>
                    <p>"A Jornada da OMTC: Inspiração e Excelência na Educação Musical"</p>
                </ContainerTitle>
                <ContainerTitle></ContainerTitle>
            </Container>
            <BoxContainer>
                <div><img src={Maestro} alt="" /></div>
            </BoxContainer>
            <BoxContent>
                <div>
                    <span>
                        <strong></strong>
                        <strong>01</strong>
                    </span>
                    <h4> A Importância da Leitura Musical</h4>
                    <p>Aprender a ler partituras expande sua capacidade de compreender e interpretar qualquer música, desenvolvendo habilidades analíticas e fortalecendo o pensamento crítico.</p>
                </div>
                <div>
                    <span>
                        <strong></strong>
                        <strong>02</strong>
                    </span>
                    <h4>Desenvolvimento da Percepção Auditiva</h4>
                    <p> A educação musical treina o ouvido para identificar notas, timbres e ritmos, permitindo que você se conecte mais profundamente à música e melhore sua execução.</p>
                </div>
                <div>
                    <span>
                        <strong></strong>
                        <strong>03</strong>
                    </span>
                    <h4> A Disciplina da Prática Musical</h4>
                    <p>A prática regular ensina persistência e organização, habilidades valiosas que podem ser aplicadas em todas as áreas da vida, além de melhorar sua performance musical.</p>
                </div>
            </BoxContent>
            <BoxHistory>
                <Container>
                    <ContainerTitle>
                        <h3><a href="#sobre" id="sobre">História & criador</a></h3>
                        <p>Uma breve Historia da OMTC</p>
                    </ContainerTitle>
                    <ContainerTitle></ContainerTitle>
                </Container>
                <BoxHistoryContent>
                    <div>
                        <img src={logo} alt="" />
                        <p>
                            A história da OMTC Escola de Música é muito mais do que a criação de uma instituição; é o reflexo de uma vida dedicada à música, liderada pelo visionário Maestro Cláudio Luciano. Sua relação com a arte começou aos 9 anos, quando, ainda criança, teve o primeiro contato com um instrumento. Foi nesse momento que a música deixou de ser apenas sons e melodias para se tornar uma paixão arrebatadora e uma missão de vida.

                            Desde então, Cláudio embarcou em uma jornada intensa de aprendizado, superação e inspiração. A música foi o seu refúgio, sua forma de expressão e, acima de tudo, a ponte que o conectava ao mundo ao seu redor. Cada nota tocada, cada composição criada, era a manifestação de uma paixão que não cabia apenas dentro dele. Ele sonhava em compartilhar isso com outros.

                            Foi desse desejo de dividir o poder transformador da música que nasceu a OMTC Escola de Música. Desde o início, a escola foi idealizada como um espaço onde sonhos são cultivados e talentos são lapidados. Mais do que ensinar a técnica, Cláudio Luciano queria que cada aluno descobrisse a magia da música: a capacidade de emocionar, conectar e transformar vidas.
                        </p>
                    </div>
                    <ContainerStudent>
                        <span>
                            <img src={Rute} alt="" />
                        </span>
                        <h6>Rute Lisboa <small>(Aluna OMTC)</small></h6>
                        <article>
                            <p>Rute Lisboa é um exemplo de dedicação e talento. Aluna da OMTC Escola de Música, ela alcançou conquistas extraordinárias ao ser selecionada para a Orquestra de Ubatuba, a Orquestra Jovem Petrobras e o curso de Licenciatura na UNIRIO. Sua trajetória reflete o compromisso com a música e a paixão por inspirar outras pessoas por meio de sua arte. Parabéns, Rute, por essa brilhante caminhada!</p>
                        </article>
                    </ContainerStudent>
                </BoxHistoryContent>
            </BoxHistory>
        </div>
    );
}