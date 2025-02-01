import { Box, Container, ContainerProducts, ContainerTitle } from "./style";
import violin from '../../assets/instruments/violin.jpg'
import cello from '../../assets/instruments/violoncelo.png'
import violao from '../../assets/instruments/violao.jpg'
import guitar from '../../assets/instruments/eletric-guitar.png'
import baixo from '../../assets/instruments/baixo.png'
import clarinete from '../../assets/instruments/clarinete.png'
import sAlto from '../../assets/instruments/sax-alto.png'
import sSoprano from '../../assets/instruments/sax-soprano.png'
import tenor from '../../assets/instruments/sax-tenor.png'
import piano from '../../assets/instruments/piano.png'
import teclado from '../../assets/instruments/teclado.png'
import flauta from '../../assets/instruments/flauta-transversal.png'
import trompete from '../../assets/instruments/trompete.png'
import trombone from '../../assets/instruments/trombone.png'
import baritono from '../../assets/instruments/baritono.png'
import tuba from '../../assets/instruments/tuba.png'
import bateria from '../../assets/instruments/bateria.png'


interface Instruments {
    id: string;
    name: string;
    dataDescription: string;
    description: string;
    imgUrl: string;
}
const Products: Instruments[] = [
    {
        id: '1',
        name: 'Violino',
        dataDescription: '',
        description: '',
        imgUrl: violin,
    },
    {
        id: '2',
        name: 'Violoncelo',
        dataDescription: '',
        description: '',
        imgUrl: cello,
    },
    {
        id: '3',
        name: 'Violão',
        dataDescription: '',
        description: '',
        imgUrl: violao,
    },
    {
        id: '4',
        name: 'Guitarra',
        dataDescription: '',
        description: '',
        imgUrl: guitar,
    },
    {
        id: '5',
        name: 'Contra Baixo',
        dataDescription: '',
        description: '',
        imgUrl: baixo,
    },
    {
        id: '6',
        name: 'Clarineta',
        dataDescription: '',
        description: '',
        imgUrl: clarinete,
    },
    {
        id: '7',
        name: 'Sax alto',
        dataDescription: '',
        description: '',
        imgUrl: sAlto ,
    },
    {
        id: '8',
        name: 'Sax Soprano',
        dataDescription: '',
        description: '',
        imgUrl: sSoprano ,
    },
    {
        id: '9',
        name: 'Sax Tenor',
        dataDescription: '',
        description: '',
        imgUrl: tenor,
    },

    {
        id: '10',
        name: 'Piano',
        dataDescription: '',
        description: '',
        imgUrl: piano,
    },

    {
        id: '11',
        name: 'Teclado',
        dataDescription: '',
        description: '',
        imgUrl: teclado,
    },
    {
        id: '13',
        name: 'Flauta Tranversal',
        dataDescription: '',
        description: '',
        imgUrl: flauta,
    },
    {
        id: '16',
        name: 'Trompete',
        dataDescription: '',
        description: '',
        imgUrl: trompete,
    },

    {
        id: '17',
        name: 'Trombone',
        dataDescription: '',
        description: '',
        imgUrl: trombone,
    },

    {
        id: '18',
        name: 'Barítono',
        dataDescription: '',
        description: '',
        imgUrl: baritono ,
    },

    {
        id: '19',
        name: 'Tuba',
        dataDescription: '',
        description: '',
        imgUrl:tuba,
    },

    {
        id: '20',
        name: 'Bateria & Percussão',
        dataDescription: '',
        description: '',
        imgUrl: bateria ,
    }
]
export function ContentAbout() {

    return (
        <div>
            <Container>
                <ContainerTitle>
                    <h3><a href="#">Aulas Disponíveis</a></h3>
                    <p>Consulte a Disponibilidade em Saiba Mais.</p>
                </ContainerTitle>
                <ContainerTitle>

                </ContainerTitle>
            </Container>

            <Box>
                {Products.map((product) => (
                    <ContainerProducts key={product.id}>
                        <img src={product.imgUrl} alt="" />
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <div>
                            <span></span>
                            <a href="https://api.whatsapp.com/send/?phone=5521985409849&text=Ol%C3%A1%2C+vim+pelo+site.+Gostaria+de+solicitar+um+or%C3%A7amento%21&type=phone_number&app_absent=0">Saiba Mais</a>
                        </div>
                    </ContainerProducts>
                    
                ))}

            </Box>


        </div>



    );
}