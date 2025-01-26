import { BoxContent, CardStudent, Container, ContainerTitle, ContentStudent } from "./style";
import Rute from '../../assets/alunos/Rute.jpeg'
import Logo from '../../assets/svg/logoSecondary.svg'

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
            <BoxContent>
                <ContentStudent>
                    <img src={Logo} alt="" />
                    <p>A história da OMTC Escola de Música é muito mais do que a criação de uma instituição; é o reflexo de uma vida dedicada à música, liderada pelo visionário Maestro Cláudio Luciano. Sua relação com a arte começou aos 9 anos, quando, ainda criança, teve o primeiro contato com um instrumento. Foi nesse momento que a música deixou de ser apenas sons e melodias para se tornar uma paixão arrebatadora e uma missão de vida.

                        Desde então, Cláudio embarcou em uma jornada intensa de aprendizado, superação e inspiração. A música foi o seu refúgio, sua forma de expressão e, acima de tudo, a ponte que o conectava ao mundo ao seu redor. Cada nota tocada, cada composição criada, era a manifestação de uma paixão que não cabia apenas dentro dele. Ele sonhava em compartilhar isso com outros.

                        Foi desse desejo de dividir o poder transformador da música que nasceu a OMTC Escola de Música. Desde o início, a escola foi idealizada como um espaço onde sonhos são cultivados e talentos são lapidados. Mais do que ensinar a técnica, Cláudio Luciano queria que cada aluno descobrisse a magia da música: a capacidade de emocionar, conectar e transformar vidas.</p>
                </ContentStudent>
                <CardStudent>
                    <img src={Rute} alt="" />
                    <div><h4>Rute Lisboa </h4><small>(Aluna OMTC)</small>
                    </div>
                    <p>
                        Rute Lisboa é um exemplo de dedicação e talento. Aluna da OMTC Escola de Música, ela alcançou conquistas extraordinárias ao ser selecionada para a Orquestra de Ubatuba, a Orquestra Jovem Petrobras e o curso de Licenciatura na UNIRIO. Sua trajetória reflete o compromisso com a música e a paixão por inspirar outras pessoas por meio de sua arte. Parabéns, Rute, por essa brilhante caminhada!
                    </p>
                </CardStudent>
            </BoxContent>
        </div>
    );
}