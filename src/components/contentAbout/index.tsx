import { Box, Container, ContainerProducts, ContainerTitle } from "./style";
import violao from '../../assets/instruments/violao.jpg'


const Products = [
    {
        id: '1',
        name: 'Violino',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '2',
        name: 'Violoncelo',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '3',
        name: 'Violão',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '4',
        name: 'Guitarra',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '5',
        name: 'Contra Baixo',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '6',
        name: 'Clarineta',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '7',
        name: 'Sax alto',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '8',
        name: 'Sax Soprano',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },
    {
        id: '9',
        name: 'Sax Tenor',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '10',
        name: 'Piano',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '11',
        name: 'Teclado',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '12',
        name: 'Piano',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '13',
        name: 'Flauta Tranversal',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '14',
        name: 'Flauta Germânica',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '15',
        name: 'Flauta Doce Barroca',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '16',
        name: 'Trompete',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '17',
        name: 'Trombone',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '18',
        name: 'Barítono',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '19',
        name: 'Tuba',
        dataDescription: '',
        description: '',
        imgUrl:'',
    },

    {
        id: '20',
        name: 'Bateria & Percussão',
        dataDescription: '',
        description: '',
        imgUrl:'',
    }
]
export function ContentAbout() {

    return (
        <div>
            <Container>
                <ContainerTitle>
                    <h3><a href="#sobre" id="sobre">Aulas Disponíveis</a></h3>
                    <p>Lorem ipsum dolor sit </p>
                </ContainerTitle>
                <ContainerTitle>

                </ContainerTitle>
            </Container>

            <Box>
                {Products.map((product) => (
                    <ContainerProducts key={product.id}>
                        <img src={violao} alt="" />
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <div>
                            <span></span>
                            <button>Ver Mais</button>
                        </div>
                    </ContainerProducts>
                    
                ))}

            </Box>


        </div>



    );
}