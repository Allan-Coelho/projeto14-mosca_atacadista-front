import mosca from '../images/mosca.png';
import styled from 'styled-components';
import { ContentStyle, LogoStyle, MenuStyle, SelectionStyle, ContentBoxStyle, MainInfoStyle } from '../stylesheet/models.js';
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import EmblaCarousel from "./EmblaCarouselProduct.js";
import { getProductsById } from '../services/services.js';

function Product (){
    const { productid } = useParams();
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('user'));
    const config = { headers:{'Authorization': 'Bearer '+ auth}, params: { 'productId': productid}};
    let SLIDE_COUNT = 6;
    let slides = Array.from(Array(SLIDE_COUNT).keys());
    const [ media, setMedia ] = useState([[], [], [], [], [], []])
    const [ product, setProduct ] = useState([]);
    let mediaByIndex = index => media[index % media.length];

    const selectCategory = (event) => {
        const category = event.target.value;
        navigate('/products/'+category)
    }

    useEffect(() => {
        getProductsById(config).then(
            function (response) {
                if (response.data) {
                    setProduct(response.data);
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
                    
                    <Link to='/cart'>
                        <ion-icon name="cart"></ion-icon>
                    </Link>

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
            </ContentBox>
        </Content>
    );
}

export { Product };

const Content = styled(ContentStyle)`
    display: flex;
    align-items: center;
    flex-direction: column;

    
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
`;

const MainInfo = styled(MainInfoStyle)``;