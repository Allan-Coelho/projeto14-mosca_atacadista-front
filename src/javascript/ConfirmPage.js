import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, ContentBoxStyle, MainInfoStyle} from '../stylesheet/models.js';
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import EmblaCarousel from "./EmblaCarouselProduct.js";
import { getProductsById } from '../services/services.js';

function Confirm (){
    const { productid } = useParams();
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('user'));
    const config = { headers: {'Authorization': 'Bearer '+ auth}, params: { 'productId': productid}};
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    const [ media, setMedia ] = useState([[], [], [], [], [], []])
    const [ product, setProduct ] = useState([]);
    let mediaByIndex = index => media[index % media.length];

    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/'+category);
    }

    useEffect(() => {
        getProductsById(config).then(
            (response) => {
                if (response.data) {
                    setProduct(response.data);
                    console.log(response.data)
                    setMedia([response.data.url, response.data.promotion]);
                    mediaByIndex = index => media[index % media.length];
                    SLIDE_COUNT = response.data.length;
                    slides = Array.from(Array(SLIDE_COUNT).keys());
                }
            })
    }, []);

    return (
        <Content>
            <Menu>
                <Logo>
                    <img src={mosca} alt=''/>
                    <h1>Mosca</h1>
                    <h1>Atacadista</h1>
                </Logo>

                <div>
                    <Selection>
                        <select onChange={selectCategory}>
                            <option value="0" defaultValue hidden>▲</option>
                            <option value="1">Eletrônicos</option>
                            <option value="2">Áudio e video</option>
                            <option value="3">Moda</option>
                            <option value="4">Mercearia</option>
                            <option value="5">Livros</option>
                            <option value="6">Instrumentos Musicais</option>
                            <option value="7">Promoção</option>
                            <option value="8">Saúde</option>
                            <option value="9">Decoração</option>
                            <option value="10">Brinquedos</option>
                        </select>
                    </Selection>
                    
                    <Link to='/user'>
                        <ion-icon name="person"></ion-icon>
                    </Link>
                </div>
            </Menu>
               
            <ContentBox>
                <EmblaCarousel slides={[slides, mediaByIndex]} />

                <MainInfo>
                    <h2>{product.name}</h2>
                    <h3>{product.value -((product.value * product.promotion)/100)} </h3>
                </MainInfo>

                <div>
                    <p>Descrição:</p>
                    <p>{product.description}</p>
                </div>

                <div>
                    <button onClick={() => {alert('Compra finalizada com sucesso!')}}>
                        Finalizar compra
                    </button>
                </div>
            </ContentBox>
        </Content>
    );
}

export { Confirm };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    p {
        position: absolute;
        top: 45%;
        padding: 0 30%;
        font-family: 'Raleway';
        text-align: center;
    } 
`;

const Logo = styled(LogoStyle)`
    left: 100px;
    width: 120px;
`;

const Menu = styled(MenuStyle)``;

const Selection = styled(SelectionStyle)``;

const ContentBox = styled(ContentBoxStyle)`
    .embla {
        max-width: 100%;
        padding: 0;
    }

    .embla__slide {
        min-width: 100%;
    }    

    .embla__slide__inner {
        height: 80vw;
        border-radius: 15px 15px 0 0;
    }

    .embla__slide__img {
        position: absolute;
    }

    &  > div {
        padding: 3%;

        p {
            margin-top: 10px;
            font-family: 'Raleway'
        }

        
    }
    & :nth-child(4)  button {
            height: 90px;
            width: 100%;
            border: none;
            border-radius: 15px;
            background-color:  #6a8e7f;
            color: white;
            font-family: 'Raleway';
            font-size: 32px;
        }
`;

const MainInfo = styled(MainInfoStyle)``;